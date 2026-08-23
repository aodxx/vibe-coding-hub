---
name: "LINE LIFF v2 Starter"
source_url: "https://github.com/line/line-liff-v2-starter"
author: "LINE / LY Corporation"
category: "App Templates"
status: "แนะนำ"
verified_on: "2026-08-23"
source_last_updated: "2025-10-09"
score: 90
license: "Apache-2.0"
---

# LINE LIFF v2 Starter

- **URL ต้นทาง:** https://github.com/line/line-liff-v2-starter
- **ผู้สร้าง:** LINE / LY Corporation
- **หมวดหมู่:** App Templates / LINE MINI App / LIFF
- **คะแนน:** 90/100
- **Stars:** 377
- **Forks:** 384
- **อัปเดตล่าสุด:** 2025-10-09
- **วันที่ตรวจสอบ:** 2026-08-23
- **License:** Apache-2.0
- **สถานะ:** แนะนำ

## สรุป

Starter ทางการที่รวมตัวอย่าง Next.js, Nuxt และ Vanilla ไว้ใน Repository เดียว เหมาะสำหรับดูโครงสร้าง LIFF แบบเล็กและเริ่มแก้ต่อโดยไม่ต้องผ่าน CLI

## คะแนนประเมิน

| เกณฑ์ | คะแนนเต็ม | คะแนนที่ได้ | หลักฐานหรือเหตุผล |
|---|---:|---:|---|
| ความเกี่ยวข้องกับ Vibe Coding | 25 | 24 | โค้ดเล็กและแยก Framework ชัด |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 | 17 | Commit ล่าสุดอยู่ภายใน 12 เดือน |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 | 11 | README หลักยังอ้างคำสั่ง root ที่ไม่ตรง package ปัจจุบันบางส่วน |
| การยอมรับจากชุมชน | 15 | 15 | 377 Stars และ 384 Forks |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 | 15 | Apache-2.0 ชัดเจน |
| ความปลอดภัยและความน่าเชื่อถือ | 10 | 8 | Source ทางการ แต่ dependency บางชุดต่างรุ่นกัน |
| **รวม** | **100** | **90** | |

## ข้อมูลที่ยืนยันแล้ว

- มี `src/nextjs`, `src/nuxtjs` และ `src/vanilla`
- Next.js starter ใช้ Next.js 15.0.1, React 18.3.1 และ `@line/liff` 2.27.2
- Nuxt starter ใช้ Nuxt 3.8.2 และ `@line/liff` 2.27.2
- แต่ละ Starter มี `package.json` และ Lockfile แยกกัน

## ความเห็นของผู้ตรวจ

- เหมาะกับผู้ที่ต้องการเห็นโค้ด LIFF ขั้นต่ำมากกว่าเครื่องมือ Scaffolding
- ถ้าเริ่มโปรเจกต์ใหม่ทั้งหมด `create-liff-app` มักสะดวกกว่า

## ไฟล์สำคัญ

- `src/nextjs/pages/_app.js` — เริ่ม LIFF และส่ง object ให้หน้า App
- `src/nextjs/pages/index.js` — หน้าเริ่มต้น Next.js
- `src/nuxtjs/plugins/liff-init.client.ts` — Client plugin สำหรับ Nuxt
- `src/vanilla/index.js` — ตัวอย่าง LIFF แบบ Webpack/Vanilla

## สิ่งที่นำไปใช้ได้

```text
cd src/nextjs
npm ci
NEXT_PUBLIC_LIFF_ID=YOUR_LIFF_ID npm run build
```

## ข้อควรระวัง

- อย่ารัน `npm ci` ที่ root เพราะ root `package.json` ไม่มี scripts หรือ dependencies สำหรับ App
- Next.js starter ยังใช้ Pages Router ขณะที่ `create-liff-app` รุ่นใหม่รองรับ App Router
- ตรวจและอัปเดต dependency ก่อนใช้ Production โดยเฉพาะ Vanilla starter ที่มี Babel packages รุ่นเก่า
- รอบตรวจนี้ไม่ได้ติดตั้ง dependency เนื่องจาก runtime ตรวจสอบไม่สามารถเข้าถึง npm registry

## แหล่งอ้างอิงที่ตรวจสอบ

- README: https://github.com/line/line-liff-v2-starter/blob/master/README.md
- LICENSE: https://github.com/line/line-liff-v2-starter/blob/master/LICENSE.txt
- Releases: https://github.com/line/line-liff-v2-starter/releases
- Commit ที่ตรวจ: `a5bc54913af6842dc8da53db4306d03152def769`
- Next.js package: https://github.com/line/line-liff-v2-starter/blob/master/src/nextjs/package.json

## ประวัติการตรวจ

| วันที่ | ผู้ตรวจ | การเปลี่ยนแปลง |
|---|---|---|
| 2026-08-23 | Vibe Hub Scout | ตรวจครั้งแรก |
