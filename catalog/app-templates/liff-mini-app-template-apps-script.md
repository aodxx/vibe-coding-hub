---
name: "LIFF Mini-App Template (4-Role)"
source_url: "https://github.com/pariwat-aruno/liff-mini-app-template"
author: "pariwat-aruno"
category: "App Templates"
status: "ควรตรวจเพิ่ม"
verified_on: "2026-08-23"
source_last_updated: "2026-05-14"
score: 82
license: "MIT"
---

# LIFF Mini-App Template (4-Role)

- **URL ต้นทาง:** https://github.com/pariwat-aruno/liff-mini-app-template
- **ผู้สร้าง:** pariwat-aruno
- **หมวดหมู่:** App Templates / Google Apps Script / LIFF / AI Instructions
- **คะแนน:** 82/100
- **Stars:** 0
- **Forks:** 0
- **อัปเดตล่าสุด:** 2026-05-14
- **วันที่ตรวจสอบ:** 2026-08-23
- **License:** MIT
- **สถานะ:** ควรตรวจเพิ่ม

## สรุป

Template ใหม่สำหรับ LIFF + Google Apps Script + Google Sheets ที่มีระบบ 4 Roles, Pairing, Approval Queue, Audit Log และ `CLAUDE.md` สำหรับ AI coding โดยตรง ผ่านการทดสอบ Logic ในรอบตรวจนี้ 18/18 รายการ แต่ต้องแก้ Mock token bypass ก่อน Production

## คะแนนประเมิน

| เกณฑ์ | คะแนนเต็ม | คะแนนที่ได้ | หลักฐานหรือเหตุผล |
|---|---:|---:|---|
| ความเกี่ยวข้องกับ Vibe Coding | 25 | 25 | มี `CLAUDE.md`, Template script และจุดต่อยอดชัดเจน |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 | 20 | สร้างและอัปเดตในปี 2026 |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 | 15 | README, Setup Guide และเอกสาร Architecture ครบ |
| การยอมรับจากชุมชน | 15 | 2 | ยังไม่มี Stars/Forks; เป็นโปรเจกต์ใหม่เฉพาะทาง |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 | 15 | MIT |
| ความปลอดภัยและความน่าเชื่อถือ | 10 | 5 | มี Role checks/Audit แต่พบ Mock token bypass ฝั่ง Backend |
| **รวม** | **100** | **82** | |

## ข้อมูลที่ยืนยันแล้ว

- เป็น GitHub Template Repository และมี `CLAUDE.md` อธิบาย Foundation/Project-specific files
- Stack คือ GitHub Pages + Vanilla JS + LIFF + Apps Script + Sheets/Drive
- มี Unit tests สำหรับ Pairing และ Role logic
- ผลทดสอบในเครื่องวันที่ 2026-08-23: 18 ผ่าน, 0 ล้มเหลว ด้วย `node tests/run.js`
- GitHub Actions deploy เฉพาะ `frontend/src` ไป GitHub Pages

## ความเห็นของผู้ตรวจ

- เหมาะกับผู้ใช้ Vibe Coding ที่ต้องการ Google ecosystem และไม่ต้องการ Backend server แยก
- Stars ยังไม่ใช่หลักฐานการยอมรับ โปรเจกต์ผ่านเพราะใหม่ เฉพาะทาง เอกสารดี และมี Tests

## ไฟล์สำคัญ

- `CLAUDE.md` — Context, constraints และ pattern สำหรับ AI coding agents
- `apps-script/Auth.gs` — LIFF idToken verification และ User mapping
- `apps-script/Roles.gs` — 4-role hierarchy
- `apps-script/PendingChanges.gs` — Approval queue
- `frontend/src/js/auth.js` — LIFF wrapper และ local mock
- `tests/run.js` — Test runner

## สิ่งที่นำไปใช้ได้

```text
node tests/run.js
./scripts/apply_template.sh "My Brand" "My tagline"
```

## ข้อควรระวัง

- `apps-script/Auth.gs` ยอมรับค่า `mock.id.token.for.local.dev` โดยไม่มี Environment guard ต้องลบหรือปิดทางนี้ก่อน Production
- `frontend/src/js/auth.js` เปิด Mock เมื่อ LIFF SDK ไม่โหลด ควรจำกัด Mock เฉพาะ localhost อย่างชัดเจน
- GitHub Actions ใช้ action tags เช่น `actions/checkout@v4` แทนการ Pin SHA
- ต้องตั้ง secret ผ่าน Script Properties เท่านั้น ห้ามใส่ใน Source หรือ Sheet สาธารณะ

## แหล่งอ้างอิงที่ตรวจสอบ

- README: https://github.com/pariwat-aruno/liff-mini-app-template/blob/main/README.md
- LICENSE: https://github.com/pariwat-aruno/liff-mini-app-template/blob/main/LICENSE
- Commit ที่ตรวจ: `2bac9780278c9e6f3faf07c42ac90051569cde91`
- Agent instructions: https://github.com/pariwat-aruno/liff-mini-app-template/blob/main/CLAUDE.md
- Auth source: https://github.com/pariwat-aruno/liff-mini-app-template/blob/main/apps-script/Auth.gs

## ประวัติการตรวจ

| วันที่ | ผู้ตรวจ | การเปลี่ยนแปลง |
|---|---|---|
| 2026-08-23 | Vibe Hub Scout | ตรวจครั้งแรกและรัน Tests 18/18 ผ่าน |
