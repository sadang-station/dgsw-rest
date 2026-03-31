# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

Публичный REST API для получения случайных цитат учеников школы Daesogo

Создан на основе [Cloudflare Workers](https://workers.cloudflare.com/).

## Использование

### `GET` [https://dgsw-rest.pjmin0923.workers.dev/quote](https://dgsw-rest.pjmin0923.workers.dev/quote)
```json
{
  "name": "박재민",
  "comment": "대소고는 개인주의야"
}
```

### `GET` [https://dgsw-rest.pjmin0923.workers.dev/quote/all](https://dgsw-rest.pjmin0923.workers.dev/quote/all)
```json
[
  {
    "name": "박재민",
    "comment": "대소고는 개인주의야"
  },
    {
    "name": "박재민",
    "comment": "대소고는 이기주의야"
  },
  {
    "name": "박재민",
    "comment": "대소고는 자본주의야"
  },
]
```

## Документация (Swagger UI)

[Документация API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## Добавление цитат

Если вы хотите добавить цитату, вы можете предложить её напрямую.<br/>
Добавьте цитату в `src/data/quotes-list.ts` и откройте PR.

Также можно предложить цитату анонимно через [Google Форму](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor).

## Примечания

Все данные не отражают мнение разработчика.<br/>
Анонимность всех данных гарантируется.<br/>
**Все данные не будут изменены или удалены без запроса самого автора высказывания.**