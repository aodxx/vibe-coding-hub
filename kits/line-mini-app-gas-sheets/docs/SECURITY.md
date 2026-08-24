# Security

## กติกาบังคับ

1. Backend ต้องตรวจ ID token กับ LINE ทุกครั้งก่อนอ่านหรือเขียนข้อมูลส่วนตัว
2. ใช้ค่า sub จากผล Verify เท่านั้น ห้ามเชื่อ lineUserId, role หรือ profile ที่ Frontend ส่งมา
3. ห้ามใส่ Channel secret, access token, API key หรือข้อมูลผู้ใช้ใน GitHub
4. Spreadsheet ต้องไม่ Publish to web และไม่ Share แบบ Anyone with the link
5. ทุก action ที่เขียนข้อมูลต้อง validate ซ้ำฝั่ง Backend
6. ใช้ Lock เมื่อแก้ข้อมูลร่วมใน Sheet
7. ข้อความ Error ที่ส่งกลับห้ามมี Stack trace, token หรือรายละเอียดระบบภายใน

## Script Properties

Kit เก็บ SPREADSHEET_ID และ LINE_LOGIN_CHANNEL_ID ใน Script Properties ผ่าน PropertiesService ค่าเหล่านี้ไม่ใช่รหัสผ่าน แต่การแยกออกจาก Source ช่วยให้เปลี่ยน Environment ได้ปลอดภัยและลดการตั้งค่าผิด

## Production checklist

- [ ] LIFF app อยู่ใต้ LINE Login channel
- [ ] เปิดเฉพาะ scopes ที่จำเป็น
- [ ] Endpoint เป็น HTTPS
- [ ] Apps Script ใช้ Versioned deployment
- [ ] ไม่มี mock token หรือ auth bypass
- [ ] ทดสอบ token หมดอายุและ token จาก Channel อื่น
- [ ] ทดสอบผู้ใช้สองบัญชีว่าไม่เห็นข้อมูลข้ามกัน
- [ ] ตรวจ Apps Script execution logs โดยไม่ log token
- [ ] จำกัดข้อมูลส่วนตัวที่เก็บให้เหลือเท่าที่จำเป็น
- [ ] กำหนดระยะเวลาเก็บและวิธีลบข้อมูล

## ข้อจำกัด

Apps Script Web App ที่เปิดให้ Anyone เข้าถึงได้หมายความว่า URL เป็นสาธารณะ ความปลอดภัยจึงอยู่ที่การตรวจ token และ authorization ในทุก action ไม่ใช่การซ่อน URL
