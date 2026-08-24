# Contributing

Vibe Coding Hub รับ Project Kit ที่ช่วยให้ผู้ใช้เริ่มสร้างและ Deploy โปรเจกต์ได้จริง โดย Catalog เดิมยังเปิดรับการแก้ไขในฐานะ Legacy Reference

## เพิ่ม Project Kit

1. คัดลอกโครงจาก templates/KIT_TEMPLATE.md
2. สร้างโฟลเดอร์ชื่อ lowercase-kebab-case ภายใต้ kits/
3. เพิ่ม kit.json, README.md, QUICKSTART.md, docs/ARCHITECTURE.md, docs/SECURITY.md, AI-BUILD-PROMPT.md และ LICENSE
4. ใส่ Starter code ที่เปิดใช้หรือทดสอบได้จริง พร้อมไฟล์ตั้งค่าตัวอย่างที่ไม่มี Secret
5. ระบุสิ่งที่ผู้ใช้ต้องทำเองอย่างชัดเจน เช่น สร้างบัญชี, เปิด API, คัดลอก ID หรือ Deploy
6. เพิ่ม validation/error feedback และไม่แสดง Success เมื่อการทำงานล้มเหลว
7. รัน npm test, npm run build และ npm test อีกครั้ง
8. Commit ด้วยข้อความกระชับและ Push ตรงเข้า main ไม่ต้องเปิด Pull Request เว้นแต่ได้รับคำสั่งโดยชัดเจน

## Checklist ของ Project Kit

- [ ] Kit แก้ปัญหาที่ระบุไว้และมีขอบเขต MVP ชัดเจน
- [ ] Starter code ไม่มี token, password, API key, cookie หรือข้อมูลส่วนตัว
- [ ] Secret อยู่ฝั่ง Backend หรือ Secret/Properties store
- [ ] Backend ตรวจตัวตนเอง ไม่เชื่อข้อมูลผู้ใช้ที่ Frontend ส่งมา
- [ ] มี validation, error state, loading state และ empty state
- [ ] ปุ่มและข้อความ UI ตรงกับสถานะจริง
- [ ] ใช้งานบนมือถือและคีย์บอร์ดได้
- [ ] เอกสาร Setup และ Deploy ทำตามได้ทีละขั้น
- [ ] มี Acceptance Criteria สำหรับ AI Coding Agent
- [ ] ระบุ License ของ Kit

## ปรับปรุง Legacy Catalog

ใช้ templates/ENTRY_TEMPLATE.md ตรวจข้อมูลจากต้นทาง กรอกหลักฐาน คะแนน License และความเสี่ยงให้ครบ คะแนนรวมต้องไม่น้อยกว่า 70/100
