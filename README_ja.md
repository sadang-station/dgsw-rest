# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

大韶高校生の名言をランダムに取得できる公開REST API

[Cloudflare Workers](https://workers.cloudflare.com/) で作成されました。

## 使い方

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

## ドキュメント（Swagger UI）

[APIドキュメント](https://dgsw-rest.pjmin0923.workers.dev/docs)

## 名言の追加

名言を追加したい場合は、直接提案できます。<br/>
`src/data/quotes-list.ts` に名言を追加してPRを送ってください。

または、匿名性が保証された[Googleフォーム](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor)からも提案できます。

## 注意事項

すべてのデータは開発者の意見とは無関係です。<br/>
すべてのデータの匿名性が保証されます。<br/>
**また、すべてのデータは発言者本人からの要請がない限り、修正または削除されません。**