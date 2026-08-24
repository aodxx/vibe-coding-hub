import { validateKits } from "./kit-utils.mjs";

const { kits, errors } = validateKits();
if (errors.length > 0) {
  console.error("Project Kit validation failed with " + errors.length + " error(s):");
  for (const error of errors) console.error("- " + error);
  process.exit(1);
}

console.log("Project Kit validation passed: " + kits.length + " kit(s).");
