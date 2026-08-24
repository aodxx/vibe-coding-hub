import fs from "node:fs";
import path from "node:path";
import { root, validateKits } from "./kit-utils.mjs";

const { kits, errors } = validateKits();
if (errors.length > 0) {
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}

const rows = kits.map((kit) => kit.metadata)
  .sort((a, b) => a.name.localeCompare(b.name, "th"));
const lines = [
  "# Project Kit Index",
  "",
  "> สร้างอัตโนมัติด้วย npm run build ห้ามแก้ไขตารางนี้ด้วยมือ",
  "",
  "Project Kits ทั้งหมด: **" + rows.length + " ชุด**",
  "",
  "| Kit | Stack | Version | Status |",
  "|---|---|---:|---|",
  ...rows.map((row) =>
    "| [" + row.name + "](" + row.slug + "/README.md) | " +
    row.stack.join(" + ") + " | " + row.version + " | " + row.status + " |"
  ),
  "",
];

const output = path.join(root, "kits", "INDEX.md");
fs.writeFileSync(output, lines.join("\n"), "utf8");
console.log("Built " + path.relative(root, output) + " with " + rows.length + " kit(s).");
