# Quick Start

ทำตามลำดับนี้ จะรู้ทันทีว่าปัญหาอยู่ที่ LINE, Apps Script หรือ Frontend

## 1. สร้าง Google Sheet

1. สร้าง Google Sheet ใหม่
2. คัดลอก Spreadsheet ID จาก URL ส่วนที่อยู่ระหว่าง /d/ และ /edit
3. เปิด Extensions > Apps Script
4. สร้างไฟล์ตามโฟลเดอร์ starter/apps-script และคัดลอกเนื้อหาให้ตรงชื่อ
5. เปิด Project Settings แล้วเลือก Show appsscript.json จากนั้นแทนไฟล์ Manifest

## 2. สร้าง LINE Login Channel และ LIFF App

1. เปิด LINE Developers Console
2. สร้าง Provider และ LINE Login channel
3. เพิ่ม LIFF app ภายใต้ LINE Login channel
4. เปิด scope profile และ openid
5. เก็บ Channel ID และ LIFF ID ไว้

ไม่ควรเพิ่ม LIFF app ใหม่ไว้ใต้ Messaging API channel เพราะ LINE แนะนำให้ใช้ LINE Login channel

## 3. ตั้งค่า Apps Script

เปิด Setup.gs แล้วแทนค่า PASTE_SPREADSHEET_ID_HERE และ PASTE_LINE_LOGIN_CHANNEL_ID_HERE ใน SETUP_VALUES จากนั้นเลือกฟังก์ชัน setupProject แล้วกด Run

อนุญาตสิทธิ์ที่ Google ขอ จากนั้นตรวจว่า Sheet มีแท็บ Records และหัวตารางถูกสร้างแล้ว

## 4. Deploy Backend

1. เลือก Deploy > New deployment
2. Type: Web app
3. Execute as: Me
4. Who has access: Anyone
5. Deploy และคัดลอก URL ที่ลงท้ายด้วย /exec
6. เปิด URL พร้อม ?action=health ต้องได้ JSON ที่ ok เป็น true

Production ควรใช้ Versioned deployment และเมื่อแก้โค้ดให้สร้าง Version ใหม่แล้วแก้ Deployment เดิมเพื่อคง URL

## 5. ตั้งค่า Frontend

แก้ starter/frontend/config.js:

~~~javascript
window.APP_CONFIG = {
  LIFF_ID: "YOUR_LIFF_ID",
  API_URL: "YOUR_APPS_SCRIPT_EXEC_URL"
};
~~~

ค่า LIFF ID และ Web App URL เป็น public identifiers ไม่ใช่ Secret ส่วน Channel secret ห้ามใส่ใน Frontend และ Kit นี้ไม่ต้องใช้ Channel secret

## 6. Publish Frontend

คัดลอกโฟลเดอร์ frontend ไปยัง Repository ของแอป แล้วเปิด GitHub Pages จาก branch และ folder ที่ใช้ Publish จากนั้นนำ HTTPS URL ที่ได้ไปใส่เป็น Endpoint URL ของ LIFF app

## 7. ทดสอบตามลำดับ

- เปิด Backend health URL แล้วได้ ok: true
- เปิด LIFF URL ภายใน LINE แล้ว Login สำเร็จ
- หน้าแอปแสดงชื่อผู้ใช้
- สร้างรายการหนึ่งรายการและเห็นข้อความบันทึกสำเร็จ
- แถวใหม่ปรากฏใน Sheet
- Reload แล้วรายการยังอยู่
- LINE user อื่นไม่เห็นรายการของบัญชีแรก

## ปัญหาที่พบบ่อย

| อาการ | ตรวจตรงไหน |
|---|---|
| หน้าตั้งค่าไม่ครบ | LIFF_ID หรือ API_URL ยังเป็นค่า placeholder |
| Login วนซ้ำ | Endpoint URL ใน LINE ไม่ตรงกับ URL ที่เปิด |
| API ตอบ unauthorized | Channel ID ฝั่ง Apps Script ไม่ตรงกับ Channel ที่ออก LIFF ID |
| บันทึกไม่ได้แต่ Health ผ่าน | ตรวจสิทธิ์ Sheet, Deployment version และ Execution log |
| แก้ Apps Script แล้วผลไม่เปลี่ยน | Update Version ของ Deployment เดิม |

## เอกสารทางการ

- [LINE: Using user data in LIFF apps and servers](https://developers.line.biz/en/docs/liff/using-user-profile/)
- [LINE Login v2.1 API](https://developers.line.biz/en/reference/line-login/)
- [Google Apps Script Web Apps](https://developers.google.com/apps-script/guides/web)
- [Apps Script Deployments](https://developers.google.com/apps-script/concepts/deployments)
