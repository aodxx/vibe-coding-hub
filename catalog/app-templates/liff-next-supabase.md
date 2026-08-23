---
name: "LIFF + Next.js + Supabase Authentication Sample"
source_url: "https://github.com/Yongtae723/liff-next-supabase"
author: "Yongtae723"
category: "App Templates"
status: "ควรตรวจเพิ่ม"
verified_on: "2026-08-23"
source_last_updated: "2025-10-15"
score: 84
license: "Apache-2.0"
---

# LIFF + Next.js + Supabase Authentication Sample

- **URL ต้นทาง:** https://github.com/Yongtae723/liff-next-supabase
- **ผู้สร้าง:** Yongtae723
- **หมวดหมู่:** App Templates / Next.js / Supabase / LIFF Auth
- **คะแนน:** 84/100
- **Stars:** 12
- **Forks:** 1
- **อัปเดตล่าสุด:** 2025-10-15
- **วันที่ตรวจสอบ:** 2026-08-23
- **License:** Apache-2.0
- **สถานะ:** ควรตรวจเพิ่ม

## สรุป

ตัวอย่าง Authentication Flow ที่เชื่อม LIFF, Next.js App Router และ Supabase พร้อม LIFF Mock สำหรับพัฒนาใน Browser เหมาะกับระบบสมาชิกหรือ Mini App ที่ต้องมีฐานข้อมูลและ Session ฝั่ง Server

## คะแนนประเมิน

| เกณฑ์ | คะแนนเต็ม | คะแนนที่ได้ | หลักฐานหรือเหตุผล |
|---|---:|---:|---|
| ความเกี่ยวข้องกับ Vibe Coding | 25 | 25 | Stack สมัยใหม่และแบ่งไฟล์ตามหน้าที่ชัด |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 | 18 | Commit อยู่ภายใน 12 เดือน |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 | 12 | Setup ชัด แต่ `.env.sample` ขาด LIFF ID ที่ README ระบุ |
| การยอมรับจากชุมชน | 15 | 7 | 12 Stars และ 1 Fork; เป็นโปรเจกต์เฉพาะทาง |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 | 15 | Apache-2.0 |
| ความปลอดภัยและความน่าเชื่อถือ | 10 | 7 | แยก Supabase client/server แต่ต้องตรวจ secret และ RLS เอง |
| **รวม** | **100** | **84** | |

## ข้อมูลที่ยืนยันแล้ว

- ใช้ Next.js 15.1.3, React 19, TypeScript, `@supabase/ssr` และ `@line/liff-mock`
- มี Supabase migration สำหรับตาราง User
- รองรับ LIFF Login ใน LINE และ Redirect ไป LINE Login เมื่อเปิดจาก Browser
- มี `lint` และ `build` scripts แต่ไม่มี automated test script

## ความเห็นของผู้ตรวจ

- เหมาะสำหรับใช้เป็น Auth reference มากกว่านำขึ้น Production โดยไม่ตรวจเพิ่ม
- จำนวน Stars ไม่สูงแต่ผ่านเพราะเป็น Template เฉพาะทาง โครงสร้างชัด และมี License

## ไฟล์สำคัญ

- `src/utils/auth/liff/liff.ts` — LIFF initialization, mock และ login redirect
- `src/app/api/login/route.ts` — Login API route
- `src/utils/supabase/server.ts` — Supabase server client
- `src/middleware.ts` — Session middleware
- `supabase/migrations/20250103062953_create_user.sql` — Database schema

## สิ่งที่นำไปใช้ได้

```text
cp .env.sample .env.local
# เพิ่ม NEXT_PUBLIC_LIFF_ID, Supabase URL และ anon key แล้วรัน npm run dev
```

## ข้อควรระวัง

- `.env.sample` ไม่มี `NEXT_PUBLIC_LIFF_ID` แม้ Source ต้องใช้ ต้องเพิ่มเอง
- ห้ามนำ `SUPABASE_SERVICE_ROLE` ไปใช้ใน Client หรือใช้ชื่อ `NEXT_PUBLIC_*`
- ต้องตรวจ RLS, JWT validation และ Session flow ให้ตรง Supabase รุ่นปัจจุบันก่อน Production
- รอบตรวจนี้ไม่ได้ติดตั้ง dependency เนื่องจาก runtime ตรวจสอบไม่สามารถเข้าถึง npm registry

## แหล่งอ้างอิงที่ตรวจสอบ

- README: https://github.com/Yongtae723/liff-next-supabase/blob/main/README.md
- LICENSE: https://github.com/Yongtae723/liff-next-supabase/blob/main/LICENSE
- Commit ที่ตรวจ: `2d22fdb2bf538f340741645b52a7fb124e457282`
- LIFF auth: https://github.com/Yongtae723/liff-next-supabase/blob/main/src/utils/auth/liff/liff.ts
- Supabase migration: https://github.com/Yongtae723/liff-next-supabase/tree/main/supabase/migrations

## ประวัติการตรวจ

| วันที่ | ผู้ตรวจ | การเปลี่ยนแปลง |
|---|---|---|
| 2026-08-23 | Vibe Hub Scout | ตรวจครั้งแรก |
