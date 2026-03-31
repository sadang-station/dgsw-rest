# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

API REST pública para obtener citas aleatorias de estudiantes de la escuela Daesogo

Creado con [Cloudflare Workers](https://workers.cloudflare.com/).

## Uso

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

## Documentación (Swagger UI)

[Documentación de la API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## Agregar citas

Si deseas agregar una cita, puedes proponerla directamente.<br/>
Añade la cita en `src/data/quotes-list.ts` y abre un PR.

También puedes sugerirla de forma anónima a través del [formulario de Google](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor).

## Avisos

Todos los datos no reflejan la opinión del desarrollador.<br/>
Se garantiza el anonimato de todos los datos.<br/>
**Además, ningún dato será modificado ni eliminado sin la solicitud del propio autor de la declaración.**