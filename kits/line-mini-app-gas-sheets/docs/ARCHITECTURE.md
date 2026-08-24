# Architecture

## ทางเดินข้อมูล

1. ผู้ใช้เปิด HTTPS Endpoint ผ่าน LIFF
2. Frontend เรียก liff.init และ Login
3. Frontend รับ ID token ด้วย liff.getIDToken
4. ทุกคำขอข้อมูลส่ง ID token ไปยัง Apps Script
5. Apps Script ส่ง token ไปตรวจที่ LINE endpoint พร้อม Channel ID ที่คาดหวัง
6. Backend ใช้ค่า sub จากผลตรวจเป็น user ID ที่เชื่อถือได้
7. Records service validate ข้อมูลและเรียก Sheet Repository
8. Repository ใช้ Script Lock ก่อน append และคืนเฉพาะข้อมูลของ user ID นั้น

## หน้าที่ของแต่ละชั้น

| ชั้น | รับผิดชอบ | ห้ามทำ |
|---|---|---|
| Frontend | UI, LIFF session, validation เพื่อ UX, เรียก API | ตัดสินสิทธิ์หรือส่ง lineUserId ให้ Backend เชื่อ |
| Apps Script API | Routing, auth, validation, response envelope | เชื่อ profile object จาก Browser |
| Records service | Business rules และ ownership filter | เข้าถึง DOM |
| Sheet Repository | อ่าน/เขียน Sheet และ Lock | ตัดสิน UI |
| Google Sheets | เก็บข้อมูล MVP | เปิดเป็นสาธารณะ |

## API Contract

GET ?action=health ไม่ต้อง Login

POST ใช้ application/x-www-form-urlencoded โดยมีช่อง payload เป็น JSON เพื่อหลีกเลี่ยง browser preflight ที่ไม่จำเป็น

Request:

~~~json
{
  "action": "records.create",
  "idToken": "token from LIFF",
  "payload": {
    "title": "ค่าวัสดุ",
    "amount": 120,
    "note": "ตัวอย่าง"
  }
}
~~~

Response สำเร็จ:

~~~json
{
  "ok": true,
  "data": {},
  "meta": {
    "timestamp": "ISO-8601"
  }
}
~~~

Response ล้มเหลว:

~~~json
{
  "ok": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "ข้อความที่แสดงกับผู้ใช้ได้"
  },
  "meta": {
    "timestamp": "ISO-8601"
  }
}
~~~

## จุดต่อยอด

- เพิ่ม service และ sheet ใหม่โดยคง Auth กับ response envelope
- เพิ่ม role sheet หากต้องมี Admin โดยตรวจ role ที่ Backend
- เปลี่ยน SheetRepository เป็นฐานข้อมูลจริงเมื่อข้อมูลโต
- แยก Development และ Production เป็นคนละ Apps Script deployment และคนละ Sheet
