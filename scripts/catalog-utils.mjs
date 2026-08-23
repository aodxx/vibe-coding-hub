import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogRoot = path.join(root, "catalog");
const ignoredNames = new Set(["README.md", "INDEX.md"]);
const requiredFields = [
  "name",
  "source_url",
  "author",
  "category",
  "status",
  "verified_on",
  "source_last_updated",
  "score",
  "license",
];
const requiredSections = [
  "## สรุป",
  "## คะแนนประเมิน",
  "## ข้อมูลที่ยืนยันแล้ว",
  "## ความเห็นของผู้ตรวจ",
  "## ไฟล์สำคัญ",
  "## สิ่งที่นำไปใช้ได้",
  "## ข้อควรระวัง",
  "## แหล่งอ้างอิงที่ตรวจสอบ",
  "## ประวัติการตรวจ",
];

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return null;

  const data = {};
  for (const line of match[1].split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim().replace(/^['"]|['"]$/g, "");
    data[key] = value;
  }
  return data;
}

function walkMarkdown(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(fullPath);
    if (!entry.name.endsWith(".md") || ignoredNames.has(entry.name)) return [];
    return [fullPath];
  });
}

export function readCatalogEntries() {
  return walkMarkdown(catalogRoot).map((filePath) => {
    const content = fs.readFileSync(filePath, "utf8");
    return {
      filePath,
      relativePath: path.relative(root, filePath).split(path.sep).join("/"),
      content,
      metadata: parseFrontmatter(content),
    };
  });
}

export function validateCatalog() {
  const entries = readCatalogEntries();
  const errors = [];

  if (entries.length === 0) errors.push("Catalog must contain at least one entry.");

  for (const entry of entries) {
    const filename = path.basename(entry.filePath);
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(filename)) {
      errors.push(`${entry.relativePath}: filename must use lowercase-kebab-case.md`);
    }
    if (!entry.metadata) {
      errors.push(`${entry.relativePath}: missing YAML-style frontmatter`);
      continue;
    }
    for (const field of requiredFields) {
      if (!entry.metadata[field]) errors.push(`${entry.relativePath}: missing ${field}`);
    }
    const score = Number(entry.metadata.score);
    if (!Number.isFinite(score) || score < 70 || score > 100) {
      errors.push(`${entry.relativePath}: score must be between 70 and 100`);
    }
    if (!/^https:\/\/github\.com\//.test(entry.metadata.source_url || "")) {
      errors.push(`${entry.relativePath}: source_url must be a GitHub URL`);
    }
    for (const section of requiredSections) {
      if (!entry.content.includes(section)) errors.push(`${entry.relativePath}: missing ${section}`);
    }
  }

  return { entries, errors };
}

export { root };
