# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

A free REST API for random DGSW people quotes.

Built with [Cloudflare Workers](https://workers.cloudflare.com/).

## Usage

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

## Docs ( Swagger UI )

[API DOCS](https://dgsw-rest.pjmin0923.workers.dev/docs)

## Add quotes

If you want to add quotes, you can suggest them. <br/>
Add quotes on `src/data/quotes-list.ts` and make PR.

Or you can use [goole form](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor) to suggest quotes.

## Notice

All data is independent of the developer's opinion. <br/>
Anonymity is guaranteed for all quote registrations. <br/>
**In addition, all data is not modified or deleted unless requested by the speaker.**