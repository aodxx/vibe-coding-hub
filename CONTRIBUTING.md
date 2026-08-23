# Contributing

## ขั้นตอนเพิ่มหรือปรับปรุงรายการ

1. ตรวจรายการซ้ำใน `catalog/` และ `archive/`
2. ตรวจข้อมูลจาก Repository หรือเว็บไซต์ต้นทาง
3. คัดลอก `templates/ENTRY_TEMPLATE.md` ไปยังหมวดหมู่ที่เหมาะสม
4. ตั้งชื่อไฟล์แบบ `lowercase-kebab-case.md`
5. กรอกหลักฐาน คะแนน License ความเสี่ยง และวันที่ตรวจสอบให้ครบ
6. รัน `npm test` และแก้ข้อผิดพลาดจนผ่าน
7. รัน `npm run build` เพื่อสร้าง `catalog/INDEX.md` แล้วรัน `npm test` ซ้ำ
8. Commit ด้วยข้อความกระชับและ Push ตรงเข้า `main`
9. ไม่ต้องเปิด Pull Request เว้นแต่ได้รับคำสั่งโดยชัดเจน

## Checklist ขั้นต่ำ

- [ ] ยืนยันว่าเป็นต้นฉบับ ไม่ใช่ Fork, Mirror หรือรายการซ้ำ
- [ ] ตรวจ README, LICENSE, Release และ Commit ล่าสุด
- [ ] ตรวจไฟล์ Prompt, Rule, Template, Workflow และ Configuration ที่เกี่ยวข้อง
- [ ] ตรวจสคริปต์ติดตั้ง dependency credential และคำสั่งเสี่ยง
- [ ] แยกข้อเท็จจริงออกจากความคิดเห็น
- [ ] คะแนนรวมอย่างน้อย 70/100
- [ ] Snippet สอดคล้องกับ License และสั้นเท่าที่จำเป็น
- [ ] ไม่มี API key, token, password, cookie หรือข้อมูลส่วนตัว
- [ ] ให้เครดิตและเชื่อมไปยังต้นทาง

รายการที่ไม่ผ่านเกณฑ์ไม่ควรถูกเพิ่มใน Catalog ให้รายงานเหตุผลในสรุปผลหรือ Issue แทน
