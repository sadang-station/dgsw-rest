import { OpenAPIRoute, Str } from "chanfana";
import { z } from "zod";
import { type AppContext } from "../types";
import { QUOTES_LIST } from "../data/quotes-list";

const answerStore = new Map<string, { correctAnswer: string; expiresAt: number }>();

function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function cleanExpiredAnswers() {
  const now = Date.now();
  for (const [id, data] of answerStore) {
    if (data.expiresAt < now) {
      answerStore.delete(id);
    }
  }
}

export class Quiz extends OpenAPIRoute {
  schema = {
    tags: ["Quiz"],
    summary: "Get a Quiz Question",
    responses: {
      "200": {
        description: "명언을 보고 누가 한 말인지 맞추는 퀴즈를 반환합니다.",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.object({
                quote: Str({ example: "낭만" }),
                choices: z.array(Str({ example: "심서훈" })),
                answerId: Str({ example: "abc12345" }),
              }),
            }),
          },
        },
      },
    },
  };

  async handle(_c: AppContext) {
    cleanExpiredAnswers();

    const randomIndex = Math.floor(Math.random() * QUOTES_LIST.length);
    const correctQuote = QUOTES_LIST[randomIndex];

    const uniqueNames = [...new Set(QUOTES_LIST.map((q) => q.name))];
    const wrongNames = shuffleArray(
      uniqueNames.filter((name) => name !== correctQuote.name)
    ).slice(0, 3);

    const choices = shuffleArray([correctQuote.name, ...wrongNames]);

    const answerId = generateId();
    answerStore.set(answerId, {
      correctAnswer: correctQuote.name,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    return {
      success: true,
      result: {
        quote: correctQuote.quote,
        choices,
        answerId,
      },
    };
  }
}

export class QuizAnswer extends OpenAPIRoute {
  schema = {
    tags: ["Quiz"],
    summary: "Submit a Quiz Answer",
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              answerId: Str({ description: "퀴즈 문제의 ID", example: "abc12345" }),
              answer: Str({ description: "선택한 인물 이름", example: "심서훈" }),
            }),
          },
        },
      },
    },
    responses: {
      "200": {
        description: "정답 여부를 반환합니다.",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              result: z.object({
                correct: z.boolean(),
                correctAnswer: Str({ example: "심서훈" }),
              }),
            }),
          },
        },
      },
      "400": {
        description: "유효하지 않거나 만료된 퀴즈 ID입니다.",
        content: {
          "application/json": {
            schema: z.object({
              success: z.boolean(),
              error: Str({ example: "유효하지 않거나 만료된 퀴즈입니다." }),
            }),
          },
        },
      },
    },
  };

  async handle(c: AppContext) {
    const data = await c.req.json();
    const { answerId, answer } = data;

    const stored = answerStore.get(answerId);
    if (!stored || stored.expiresAt < Date.now()) {
      if (stored) answerStore.delete(answerId);
      return c.json(
        { success: false, error: "유효하지 않거나 만료된 퀴즈입니다." },
        400
      );
    }

    const correct = stored.correctAnswer === answer;
    const correctAnswer = stored.correctAnswer;

    answerStore.delete(answerId);

    return {
      success: true,
      result: {
        correct,
        correctAnswer,
      },
    };
  }
}
