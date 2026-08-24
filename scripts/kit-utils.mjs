import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const kitsRoot = path.join(root, "kits");
const requiredMetadata = [
  "slug", "name", "version", "status", "summary",
  "stack", "entrypoint", "license", "updated_on",
];
const requiredFiles = [
  "README.md",
  "QUICKSTART.md",
  "AI-BUILD-PROMPT.md",
  "LICENSE",
  "docs/ARCHITECTURE.md",
  "docs/SECURITY.md",
];

export function readKits() {
  if (!fs.existsSync(kitsRoot)) return [];
  return fs.readdirSync(kitsRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const directory = path.join(kitsRoot, entry.name);
      const metadataPath = path.join(directory, "kit.json");
      let metadata = null;
      let metadataError = null;
      try {
        metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"));
      } catch (error) {
        metadataError = error.message;
      }
      return { directory, dirname: entry.name, metadata, metadataError };
    });
}

export function validateKits() {
  const kits = readKits();
  const errors = [];
  if (kits.length === 0) errors.push("At least one Project Kit is required.");

  for (const kit of kits) {
    const prefix = "kits/" + kit.dirname;
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(kit.dirname)) {
      errors.push(prefix + ": directory must use lowercase-kebab-case");
    }
    if (kit.metadataError) {
      errors.push(prefix + "/kit.json: " + kit.metadataError);
      continue;
    }
    for (const field of requiredMetadata) {
      const value = kit.metadata && kit.metadata[field];
      if (value === undefined || value === null || value === "") {
        errors.push(prefix + "/kit.json: missing " + field);
      }
    }
    if (kit.metadata && kit.metadata.slug !== kit.dirname) {
      errors.push(prefix + "/kit.json: slug must match directory name");
    }
    if (!Array.isArray(kit.metadata && kit.metadata.stack) || kit.metadata.stack.length === 0) {
      errors.push(prefix + "/kit.json: stack must be a non-empty array");
    }
    for (const requiredFile of requiredFiles) {
      if (!fs.existsSync(path.join(kit.directory, requiredFile))) {
        errors.push(prefix + ": missing " + requiredFile);
      }
    }
    for (const filePath of walkFiles(kit.directory)) {
      const relative = path.relative(root, filePath).split(path.sep).join("/");
      const content = fs.readFileSync(filePath, "utf8");
      if (/\b(?:sk_live|sk-proj)-[A-Za-z0-9_-]{12,}\b/.test(content)) {
        errors.push(relative + ": possible API secret detected");
      }
      if (/\bBearer\s+[A-Za-z0-9._-]{20,}/i.test(content)) {
        errors.push(relative + ": possible bearer token detected");
      }
      if (filePath.endsWith(".json")) {
        try {
          JSON.parse(content);
        } catch (error) {
          errors.push(relative + ": invalid JSON (" + error.message + ")");
        }
      }
      if (filePath.endsWith(".gs")) {
        try {
          new Function(content);
        } catch (error) {
          errors.push(relative + ": JavaScript syntax error (" + error.message + ")");
        }
      }
    }
  }
  return { kits, errors };
}

function walkFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(fullPath) : [fullPath];
  });
}

export { root };
