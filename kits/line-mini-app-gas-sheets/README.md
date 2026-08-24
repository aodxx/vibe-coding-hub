# LINE Mini App + Google Apps Script + Google Sheets

Kit แรกของ Vibe Coding Hub เป็น Starter ที่นำไปเปลี่ยนชื่อฟิลด์และ Business Logic เพื่อสร้าง Mini App ภายใน LINE ได้ทันที โดยไม่ต้องดูแล Server แยก

## สิ่งที่ได้

- Frontend แบบ Mobile-first สำหรับ LINE LIFF
- Login ผ่าน LINE และส่ง ID token ไปให้ Backend ตรวจสอบกับ LINE Platform
- Apps Script Web App เป็น API กลาง
- Google Sheets เป็นฐานข้อมูลตัวอย่าง
- ฟังก์ชัน Health check, สร้างรายการ และดูรายการของผู้ใช้
- Lock ป้องกันการเขียน Sheet ชนกัน
- Validation ทั้ง Frontend และ Backend
- Empty, Loading, Error และ Success states
- เอกสาร Setup, Architecture, Security และ Prompt สำหรับสั่ง AI ต่อ

## ตัวอย่าง MVP

ผู้ใช้เปิดแอปใน LINE กรอกชื่อรายการ จำนวนเงิน และหมายเหตุ จากนั้น Apps Script จะตรวจ ID token และบันทึกข้อมูลลงชีต Records ผู้ใช้เห็นเฉพาะรายการที่ผูกกับ LINE user ID ของตนเอง

## โครงสร้าง

~~~text
starter/
  frontend/
    index.html
    styles.css
    config.js
    api.js
    line-auth.js
    app.js
  apps-script/
    appsscript.json
    Code.gs
    Config.gs
    Auth.gs
    Setup.gs
    SheetRepository.gs
    Records.gs
docs/
  ARCHITECTURE.md
  SECURITY.md
~~~

## เริ่มใช้งาน

ทำตาม [QUICKSTART.md](QUICKSTART.md) ตามลำดับ เมื่อระบบต้นแบบทำงานแล้ว ให้ใช้ [AI-BUILD-PROMPT.md](AI-BUILD-PROMPT.md) เพื่อสั่ง AI เปลี่ยนเป็นแอปจริงของคุณ

## ขอบเขตที่ตั้งใจ

Kit นี้เหมาะกับ MVP หรือระบบทีมขนาดเล็กที่ปริมาณข้อมูลและการเขียนพร้อมกันยังไม่สูง หากเติบโตจน Google Sheets เป็นคอขวด ควรเปลี่ยน Repository layer ฝั่ง Backend โดยไม่ให้ Frontend เขียนฐานข้อมูลโดยตรง
