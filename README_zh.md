# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

随机获取大韶高中学生名言的公开 REST API

基于 [Cloudflare Workers](https://workers.cloudflare.com/) 构建。

## 使用方法

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

## 文档（Swagger UI）

[API 文档](https://dgsw-rest.pjmin0923.workers.dev/docs)

## 添加名言

如果您想添加名言，可以直接提交建议。<br/>
请在 `src/data/quotes-list.ts` 中添加名言并提交 PR。

也可以通过匿名的 [Google 表单](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor) 进行推荐。

## 注意事项

所有数据均与开发者个人观点无关。<br/>
所有数据均保证匿名性。<br/>
**此外，所有数据在发言者本人提出要求之前，不会被修改或删除。**