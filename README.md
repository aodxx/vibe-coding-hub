# Vibe Coding Hub — Project Kits

คลัง **Project Kits ที่พร้อมนำไปสร้างแอปต่อ** สำหรับคนใช้ Vibe Coding และ AI Coding โดยแต่ละ Kit รวมโค้ดเริ่มต้น สถาปัตยกรรม คู่มือติดตั้ง Checklist ความปลอดภัย และ Prompt สำหรับสั่ง AI ไว้ในชุดเดียว

> เป้าหมายใหม่: ลดเวลาจาก “เจอแหล่งข้อมูลที่น่าสนใจ” ไปสู่ “มีโปรเจกต์ต้นแบบที่เปิด แก้ และ Deploy ได้”

## เริ่มจากตรงนี้

| Kit | เหมาะสำหรับ | สถานะ |
|---|---|---|
| [LINE Mini App + Google Apps Script + Google Sheets](kits/line-mini-app-gas-sheets/README.md) | แอปมือถือใน LINE ที่ใช้ Google Sheets เป็นฐานข้อมูลและไม่ต้องดูแล Server | MVP พร้อมตั้งค่า |

ดู Project Kits ทั้งหมดได้ที่ [Kit Index](kits/INDEX.md)

## ในหนึ่ง Kit มีอะไร

- Starter code ที่มีขอบเขตชัดเจนและไม่มี Secret ฝังใน Source
- QUICKSTART.md สำหรับทำตามทีละขั้น
- ARCHITECTURE.md อธิบายการไหลของข้อมูลและจุดที่ควรแก้
- SECURITY.md ระบุข้อห้ามและ Production checklist
- AI-BUILD-PROMPT.md สำหรับคัดลอกไปสั่ง Coding Agent ให้ต่อยอด
- kit.json เป็น Metadata ที่ระบบตรวจสอบและสร้าง Index ใช้

## โครงสร้าง Repository

~~~text
kits/                         # ผลงานหลัก: ชุดเริ่มต้นพร้อมใช้
  line-mini-app-gas-sheets/   # Kit แรก
templates/
  KIT_TEMPLATE.md             # มาตรฐานสำหรับสร้าง Kit ใหม่
catalog/                      # Legacy Reference: บทวิเคราะห์แหล่งข้อมูลเดิม
archive/                      # เนื้อหาที่เลิกใช้งาน
scripts/                      # Validation และ Index builders
~~~

catalog/ ยังเก็บไว้เป็นแหล่งอ้างอิงเดิม แต่ไม่ใช่หน้าหลักของ Hub อีกต่อไป

## วิธีตรวจสอบก่อน Commit

~~~bash
npm test
npm run build
npm test
~~~

คำสั่งเหล่านี้ตรวจทั้ง Project Kits และ Catalog เดิม รวมถึงสร้าง kits/INDEX.md กับ catalog/INDEX.md ใหม่

## หลักการของ Project Kit

1. **นำไปเริ่มงานได้จริง** — ต้องมีโค้ดหรือไฟล์ตั้งต้น ไม่ใช่มีเพียงลิงก์
2. **ตั้งค่าได้โดยไม่ฝัง Secret** — Secret อยู่ในบริการที่เหมาะสม เช่น Apps Script Properties
3. **AI อ่านแล้วทำต่อได้** — มีขอบเขต สถาปัตยกรรม และ Acceptance Criteria
4. **ตรวจสอบได้** — มี Metadata, Validation และคำสั่งทดสอบ
5. **รับผิดชอบต่อผู้ใช้** — มี validation, error feedback, accessibility และ UI ต้องแสดงสถานะจริง

## การมีส่วนร่วม

อ่าน [CONTRIBUTING.md](CONTRIBUTING.md) และเริ่ม Kit ใหม่จาก [KIT_TEMPLATE.md](templates/KIT_TEMPLATE.md)

## License

แต่ละ Kit ระบุ License ของตัวเองภายในโฟลเดอร์ Kit ส่วนข้อมูลใน catalog/ ยังคงอยู่ภายใต้ License และลิขสิทธิ์ของแหล่งต้นทางที่ระบุในแต่ละรายการ
