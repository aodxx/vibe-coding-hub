import fs from "node:fs";
import path from "node:path";
import { root, validateCatalog } from "./catalog-utils.mjs";

const { entries, errors } = validateCatalog();
if (errors.length > 0) {
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

const rows = entries
  .map((entry) => ({ ...entry.metadata, relativePath: entry.relativePath }))
  .sort((a, b) => Number(b.score) - Number(a.score) || a.name.localeCompare(b.name));

const lines = [
  "# Catalog Index",
  "",
  "> สร้างอัตโนมัติด้วย `npm run build` ห้ามแก้ไขตารางนี้ด้วยมือ",
  "",
  `รายการที่ผ่านเกณฑ์ทั้งหมด: **${rows.length} รายการ**`,
  "",
  "| ชื่อ | หมวดหมู่ | คะแนน | สถานะ | License |",
  "|---|---|---:|---|---|",
  ...rows.map((row) => {
    const target = row.relativePath.replace(/^catalog\//, "");
    return `| [${row.name}](${target}) | ${row.category} | ${row.score}/100 | ${row.status} | ${row.license} |`;
  }),
  "",
];

const output = path.join(root, "catalog", "INDEX.md");
fs.writeFileSync(output, lines.join("\n"), "utf8");
console.log(`Built ${path.relative(root, output)} with ${rows.length} entries.`);
