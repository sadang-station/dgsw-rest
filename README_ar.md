# [DGSW-rest](https://dgsw-rest.pjmin0923.workers.dev)

[한국어](README_ko.md) | [English](README.md) | [日本語](README_ja.md) | [Русский](README_ru.md) | [中文](README_zh.md) | [Español](README_es.md) | [Português](README_pt.md) | [ภาษาไทย](README_th.md) | [Tiếng Việt](README_vi.md) | [العربية](README_ar.md)

واجهة برمجة تطبيقات REST عامة لجلب اقتباسات عشوائية من طلاب مدرسة Daesogo

تم إنشاؤه باستخدام [Cloudflare Workers](https://workers.cloudflare.com/).

## طريقة الاستخدام

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

## التوثيق (Swagger UI)

[توثيق API](https://dgsw-rest.pjmin0923.workers.dev/docs)

## إضافة اقتباسات

إذا كنت تريد إضافة اقتباس، يمكنك اقتراحه مباشرةً.<br/>
أضف الاقتباس في `src/data/quotes-list.ts` وافتح طلب PR.

يمكنك أيضاً الاقتراح بشكل مجهول عبر [نموذج Google](https://docs.google.com/forms/d/e/1FAIpQLSeCnzODlkZcibis6XBAuB69F3MuguIKeMTlfQP-vtaJtJkA-g/viewform?usp=publish-editor).

## ملاحظات

جميع البيانات لا تعكس رأي المطوّر الشخصي.<br/>
تُضمن سرية جميع البيانات.<br/>
**لن يتم تعديل أي بيانات أو حذفها ما لم يطلب ذلك صاحب القول بنفسه.**