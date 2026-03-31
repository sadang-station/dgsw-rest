# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

API REST pública para obter citações aleatórias de estudantes da escola Daesogo

Criado com [Cloudflare Workers](https://workers.cloudflare.com/).

## Como usar

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

## Documentação (Swagger UI)

[Documentação da API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## Adicionar citações

Se quiser adicionar uma citação, pode propô-la diretamente.<br/>
Adicione a citação em `src/data/quotes-list.ts` e abra um PR.

Também é possível sugerir anonimamente pelo [formulário do Google](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor).

## Avisos

Todos os dados não refletem a opinião do desenvolvedor.<br/>
O anonimato de todos os dados é garantido.<br/>
**Além disso, nenhum dado será modificado ou excluído sem a solicitação do próprio autor da declaração.**