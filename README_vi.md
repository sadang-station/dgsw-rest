# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

API REST công khai để lấy ngẫu nhiên các câu nói nổi tiếng của học sinh trường Daesogo

Được xây dựng bằng [Cloudflare Workers](https://workers.cloudflare.com/).

## Cách sử dụng

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

## Tài liệu (Swagger UI)

[Tài liệu API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## Thêm câu nói

Nếu bạn muốn thêm câu nói, bạn có thể đề xuất trực tiếp.<br/>
Thêm câu nói vào `src/data/quotes-list.ts` và mở PR.

Hoặc có thể đề xuất ẩn danh qua [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor).

## Lưu ý

Tất cả dữ liệu không liên quan đến quan điểm cá nhân của nhà phát triển.<br/>
Tính ẩn danh của tất cả dữ liệu được đảm bảo.<br/>
**Ngoài ra, tất cả dữ liệu sẽ không bị chỉnh sửa hoặc xóa trừ khi có yêu cầu từ chính người phát ngôn.**