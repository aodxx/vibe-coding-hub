---
name: "LINE Bot + LIFF + Golang + Next.js Template"
source_url: "https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template"
author: "Yongtae723"
category: "App Templates"
status: "แนะนำ"
verified_on: "2026-08-23"
source_last_updated: "2025-10-28"
score: 87
license: "MIT"
---

# LINE Bot + LIFF + Golang + Next.js Template

- **URL ต้นทาง:** https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template
- **ผู้สร้าง:** Yongtae723
- **หมวดหมู่:** App Templates / Full Stack / LINE Bot / LIFF
- **คะแนน:** 87/100
- **Stars:** 11
- **Forks:** 2
- **อัปเดตล่าสุด:** 2025-10-28
- **วันที่ตรวจสอบ:** 2026-08-23
- **License:** MIT
- **สถานะ:** แนะนำ

## สรุป

Full-stack Template ที่รวม LINE Bot, LIFF Next.js, Go API, Supabase และ Gemini พร้อมโครงสร้าง Monorepo เหมาะกับระบบที่ต้องแชร์ข้อมูลและบทสนทนาระหว่าง Chatbot กับ Mini App

## คะแนนประเมิน

| เกณฑ์ | คะแนนเต็ม | คะแนนที่ได้ | หลักฐานหรือเหตุผล |
|---|---:|---:|---|
| ความเกี่ยวข้องกับ Vibe Coding | 25 | 25 | มีขอบเขตระบบครบและแยก Service ชัดเจนสำหรับ AI Agent |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 | 18 | Commit อยู่ภายใน 12 เดือน |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 | 15 | README และ README ราย Service มี Setup ครบ |
| การยอมรับจากชุมชน | 15 | 7 | 11 Stars, 2 Forks; เป็น Template เฉพาะทาง |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 | 15 | MIT |
| ความปลอดภัยและความน่าเชื่อถือ | 10 | 7 | มี env examples และ middleware แต่ระบบมี secret surface กว้าง |
| **รวม** | **100** | **87** | |

## ข้อมูลที่ยืนยันแล้ว

- Monorepo แยก `backend`, `line_bot`, `liff`, `common` และ `supabase`
- LIFF frontend ใช้ Next.js 15.5.4, React 19.1, Tailwind 4 และ `@line/liff-mock`
- มี Supabase migrations, Dockerfile สำหรับ Go services และ Environment examples
- มี middleware ตรวจ LINE webhook signature และ backend auth files

## ความเห็นของผู้ตรวจ

- เป็นตัวเลือกดีที่สุดในชุดนี้สำหรับระบบใหญ่ที่ต้องมีทั้ง Bot และ Mini App
- ไม่เหมาะกับมือใหม่ที่ต้องการเพียงฟอร์มหรือหน้าจอเดียว เพราะมีหลาย Service และ Infrastructure

## ไฟล์สำคัญ

- `liff/lib/liff/init.ts` — LIFF initialization และ local mock
- `liff/lib/auth/supabase.ts` — LIFF/Supabase auth integration
- `line_bot/middleware/signature.go` — LINE webhook signature middleware
- `backend/middleware/auth.go` — Backend authentication
- `supabase/migrations/20251022050230_initial_schema.sql` — Initial schema

## สิ่งที่นำไปใช้ได้

```text
cp liff/.env.example liff/.env.local
cp backend/.env.example backend/.env
cp line_bot/.env.example line_bot/.env
```

## ข้อควรระวัง

- ต้องปกป้อง LINE Channel Secret, Channel Access Token, Supabase service role และ Gemini API key
- Mock user variablesต้องใช้เฉพาะ Development และต้องไม่เปิด Mock flow ใน Production
- ต้องใช้ Go 1.24+, Node.js 20+, Docker และ Supabase CLI ทำให้ต้นทุนการดูแลสูงกว่า Starter ทั่วไป
- รอบตรวจนี้ตรวจโครงสร้างและ scripts แต่ไม่ได้รัน Go/Node builds เนื่องจาก runtime ไม่มี Go และเข้าถึง npm registry ไม่ได้

## แหล่งอ้างอิงที่ตรวจสอบ

- README: https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template/blob/main/README.md
- LICENSE: https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template/blob/main/LICENSE
- Commit ที่ตรวจ: `cc6d46464c9b00a4b8fbdc889d71453fde73098b`
- LIFF package: https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template/blob/main/liff/package.json
- Environment examples: https://github.com/Yongtae723/LineBot-liff-golang-nextjs-template/tree/main/backend

## ประวัติการตรวจ

| วันที่ | ผู้ตรวจ | การเปลี่ยนแปลง |
|---|---|---|
| 2026-08-23 | Vibe Hub Scout | ตรวจครั้งแรก |
