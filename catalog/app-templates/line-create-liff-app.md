---
name: "@line/create-liff-app"
source_url: "https://github.com/line/create-liff-app"
author: "LINE / LY Corporation"
category: "App Templates"
status: "แนะนำ"
verified_on: "2026-08-23"
source_last_updated: "2026-01-14"
score: 95
license: "Apache-2.0"
---

# @line/create-liff-app

- **URL ต้นทาง:** https://github.com/line/create-liff-app
- **ผู้สร้าง:** LINE / LY Corporation
- **หมวดหมู่:** App Templates / LINE MINI App / LIFF
- **คะแนน:** 95/100
- **Stars:** 80
- **Forks:** 17
- **อัปเดตล่าสุด:** 2026-01-14
- **วันที่ตรวจสอบ:** 2026-08-23
- **Release ล่าสุด:** v1.1.7 (2026-01-14)
- **License:** Apache-2.0
- **สถานะ:** แนะนำ

## สรุป

CLI ทางการสำหรับสร้าง LIFF app ด้วย Vanilla, React, Vue, Svelte, Next.js หรือ Nuxt ทั้ง JavaScript และ TypeScript เหมาะที่สุดสำหรับเริ่มโปรเจกต์ใหม่ด้วย Vibe Coding เพราะโครงสร้างเล็กและเลือก Stack ได้ตรงงาน

## คะแนนประเมิน

| เกณฑ์ | คะแนนเต็ม | คะแนนที่ได้ | หลักฐานหรือเหตุผล |
|---|---:|---:|---|
| ความเกี่ยวข้องกับ Vibe Coding | 25 | 25 | สร้างโปรเจกต์พร้อมแก้ต่อด้วย AI ได้ทันที |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 | 19 | Release v1.1.7 ในปี 2026 |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 | 15 | README มี CLI options และ Template ครบ |
| การยอมรับจากชุมชน | 15 | 12 | 80 Stars, 17 Forks และเป็น Repository ทางการ |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 | 15 | Apache-2.0 ชัดเจน |
| ความปลอดภัยและความน่าเชื่อถือ | 10 | 9 | Source ทางการ มี Tests และ GitHub Actions |
| **รวม** | **100** | **95** | |

## ข้อมูลที่ยืนยันแล้ว

- รองรับ `nextjs`, `nuxtjs`, `react`, `vue`, `svelte` และ `vanilla`
- มี Template แบบ JavaScript และ TypeScript รวม 12 ชุด
- `package.json` ระบุ `build`, `test` และ ESLint scripts
- Release v1.1.7 แก้การสร้าง Next.js App Router และออกจาก commit ที่ GitHub แสดงว่า Verified

## ความเห็นของผู้ตรวจ

- เป็นตัวเลือกเริ่มต้นอันดับหนึ่งเมื่อยังไม่ได้ล็อก Framework
- สำหรับงานใหม่ควรเลือก TypeScript และ Next.js/React เว้นแต่ต้องการ Static app ที่เล็กมาก

## ไฟล์สำคัญ

- `templates/nextjs-ts/providers/liff-providers.tsx` — LIFF Provider สำหรับ Next.js App Router
- `templates/react-ts/src/App.tsx` — React + TypeScript starter
- `templates/vue-ts/src/App.vue` — Vue + TypeScript starter
- `create-liff-app.ts` — Logic เลือกและสร้าง Template
- `.github/workflows/code-check.yml` — การตรวจ Build/Test ของต้นทาง

## สิ่งที่นำไปใช้ได้

```text
npx @line/create-liff-app my-mini-app --template nextjs --typescript --npm --liffid YOUR_LIFF_ID
```

## ข้อควรระวัง

- ต้องเก็บ LIFF ID ใน environment variable และห้ามฝัง secret ฝั่ง Client
- LIFF ID ไม่ใช่ secret แต่ Channel Secret และ access token ต้องอยู่ฝั่ง Server เท่านั้น
- การใช้ LIFF อยู่ภายใต้ LINE Developers Agreement เพิ่มเติมจาก Apache-2.0
- รอบตรวจนี้ตรวจ Source, Test/Build scripts และ Release แล้ว แต่ไม่ได้ติดตั้ง dependency เนื่องจาก runtime ตรวจสอบไม่สามารถเข้าถึง npm registry

## แหล่งอ้างอิงที่ตรวจสอบ

- README: https://github.com/line/create-liff-app/blob/main/README.md
- LICENSE: https://github.com/line/create-liff-app/blob/main/LICENSE.txt
- Releases: https://github.com/line/create-liff-app/releases
- Commit ที่ตรวจ: `6fb6601a10ffb21622a8dcd19af46e8cc18c31ba`
- ไฟล์สำคัญ: https://github.com/line/create-liff-app/tree/main/templates

## ประวัติการตรวจ

| วันที่ | ผู้ตรวจ | การเปลี่ยนแปลง |
|---|---|---|
| 2026-08-23 | Vibe Hub Scout | ตรวจครั้งแรก |
