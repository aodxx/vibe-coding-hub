# Prompt สำหรับสั่ง AI พัฒนาต่อ

คัดลอกคำสั่งด้านล่าง แล้วเติมข้อมูลในวงเล็บเหลี่ยม

---

คุณเป็น Senior Full-stack Engineer ให้พัฒนาต่อจาก Project Kit LINE Mini App + Google Apps Script + Google Sheets นี้เป็นแอป [ชื่อ/วัตถุประสงค์]

ผู้ใช้หลัก: [ใครใช้]

ข้อมูลที่ต้องเก็บ: [รายการฟิลด์]

หน้าจอที่ต้องมี: [รายการหน้าจอ]

กติกาธุรกิจ: [เงื่อนไขและสูตรคำนวณ]

ข้อบังคับ:

1. รักษาสถาปัตยกรรม Frontend → Apps Script API → Google Sheets
2. Frontend ห้ามเขียน Sheet โดยตรง
3. ทุก action ที่อ่านหรือเขียนข้อมูลส่วนตัวต้องตรวจ LIFF ID token ที่ Backend กับ LINE Platform
4. ห้ามเชื่อ user ID, role หรือยอดคำนวณที่ Frontend ส่งมา ให้ Backend เป็น source of truth
5. ห้ามฝัง Secret และห้ามสร้าง mock token bypass
6. Validate ข้อมูลทั้ง Frontend และ Backend
7. UI ต้อง mobile-first มี Loading, Empty, Error และ Success states ที่ตรงกับผลจริง
8. ใช้ Script Lock สำหรับการเขียนข้อมูล
9. ห้ามเปลี่ยน Deployment URL โดยไม่จำเป็น
10. อัปเดต README, Setup, Sheet schema และ Acceptance Criteria ให้ตรงกับโค้ด

ก่อนแก้ ให้สรุป Data model, API actions และไฟล์ที่จะเปลี่ยน หลังแก้ให้รัน Test/Build ของโปรเจกต์ แก้จนผ่าน แล้วรายงานสิ่งที่ผู้ใช้ต้องตั้งค่าเองแบบทีละขั้น

Acceptance Criteria:

- Login ใน LINE ได้
- ผู้ใช้เห็นเฉพาะข้อมูลที่ตนมีสิทธิ์
- เพิ่มและอ่านข้อมูลได้หลัง Reload
- ค่าคำนวณสำคัญคำนวณซ้ำที่ Backend
- Error ไม่ถูกแสดงเป็น Success
- ไม่มี Secret หรือข้อมูลจริงใน Repository

---
