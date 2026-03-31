# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

REST API สาธารณะสำหรับดึงคำคมแบบสุ่มจากนักเรียนโรงเรียน Daesogo

สร้างด้วย [Cloudflare Workers](https://workers.cloudflare.com/)

## วิธีใช้งาน

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

## เอกสาร (Swagger UI)

[เอกสาร API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## การเพิ่มคำคม

หากต้องการเพิ่มคำคม สามารถเสนอได้โดยตรง<br/>
เพิ่มคำคมใน `src/data/quotes-list.ts` แล้วเปิด PR

หรือจะเสนอแบบไม่เปิดเผยตัวตนผ่าน [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor) ก็ได้

## ข้อควรระวัง

ข้อมูลทั้งหมดไม่เกี่ยวข้องกับความคิดเห็นของผู้พัฒนา<br/>
รับประกันความเป็นนิรนามของข้อมูลทั้งหมด<br/>
**นอกจากนี้ ข้อมูลทั้งหมดจะไม่ถูกแก้ไขหรือลบ เว้นแต่ผู้พูดเองจะร้องขอ**