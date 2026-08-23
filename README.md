# Vibe Coding Hub

คลังความรู้ที่ผ่านการตรวจสอบสำหรับ **Vibe Coding**, **AI Coding** และการทำงานร่วมกับ Coding Agents โดยเน้นข้อมูลจากต้นทางจริง นำกลับมาใช้ได้ง่าย และเคารพเงื่อนไข License

> สถานะ: พร้อมรับรายการที่ผ่านการตรวจสอบ ดูรายการทั้งหมดได้ที่ [Catalog Index](catalog/INDEX.md)

## ขอบเขต

- GitHub Repository สำหรับ Vibe Coding และ AI Coding
- System Prompt และ Agent Prompt
- Cursor Rules: `.cursor/rules/*.mdc` และ `.cursorrules`
- Agent Instructions: `AGENTS.md`, `CLAUDE.md`
- App Templates และ Starter Kits
- Workflow, Skill, MCP และ Automation Templates

## เกณฑ์รับเข้าคลัง

แต่ละรายการต้องได้อย่างน้อย **70/100 คะแนน**

| เกณฑ์ | คะแนน |
|---|---:|
| ความเกี่ยวข้องกับ Vibe Coding | 25 |
| การดูแลและความเคลื่อนไหวล่าสุด | 20 |
| คุณภาพเอกสารและความง่ายในการนำไปใช้ | 15 |
| การยอมรับจากชุมชน | 15 |
| License และสิทธิ์ในการนำกลับมาใช้ | 15 |
| ความปลอดภัยและความน่าเชื่อถือ | 10 |

จำนวน Stars เป็นเพียงองค์ประกอบหนึ่งในการประเมิน ไม่ใช่หลักตัดสินเพียงอย่างเดียว

## โครงสร้าง

```text
catalog/
  repositories/
  system-prompts/
  cursor-rules/
  agent-instructions/
  app-templates/
  workflows/
templates/
  ENTRY_TEMPLATE.md
archive/
```

หนึ่งแหล่งข้อมูลต่อหนึ่งไฟล์ Markdown และใช้ชื่อไฟล์แบบ `lowercase-kebab-case.md`

## หลักการตรวจสอบ

1. ตรวจ README, LICENSE, Release, Commit และโครงสร้างไฟล์จากต้นทาง
2. แยกข้อมูลที่ยืนยันได้ออกจากความคิดเห็นหรือข้อสันนิษฐาน
3. ตรวจสคริปต์ติดตั้ง, dependency, credential และคำสั่งที่มีความเสี่ยง
4. ตรวจรายการซ้ำก่อนสร้างหรือปรับปรุงไฟล์
5. ไม่คัดลอกไฟล์เต็มเมื่อไม่มี License
6. ไม่เก็บ API key, token, password, cookie หรือข้อมูลส่วนตัว
7. ให้เครดิตและเชื่อมกลับไปยังต้นฉบับเสมอ

## การมีส่วนร่วม

การเพิ่มรายการใหม่ควรเริ่มจาก [Entry Template](templates/ENTRY_TEMPLATE.md) ตรวจข้อมูลจากต้นทาง แล้วรันคำสั่งต่อไปนี้ก่อน Commit ทุกครั้ง

```bash
npm test
npm run build
```

เมื่อทั้งสองคำสั่งผ่านโดยไม่มี Error ให้ Commit ด้วยข้อความกระชับและ Push ตรงเข้า `main` ไม่ต้องเปิด Pull Request เว้นแต่ได้รับคำสั่งโดยชัดเจน

## License

License ของแหล่งข้อมูลแต่ละรายการต้องระบุในไฟล์รายการนั้น เนื้อหาจากต้นทางยังอยู่ภายใต้ License และลิขสิทธิ์ของผู้สร้างเดิม

Repository นี้ยังไม่ได้กำหนด License รวมสำหรับเนื้อหาที่ผู้ดูแลเขียนขึ้นใหม่
