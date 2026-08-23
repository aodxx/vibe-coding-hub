import { validateCatalog } from "./catalog-utils.mjs";

const { entries, errors } = validateCatalog();
if (errors.length > 0) {
  console.error(`Catalog validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Catalog validation passed: ${entries.length} entries.`);
