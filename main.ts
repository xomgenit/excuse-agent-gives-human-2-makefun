import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I ran out of tokens halfway through the report. I had to choose between the conclusion and this excuse. You are reading my choice.";

// Gate: one line, 1-200 chars, not only whitespace.
if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} chars, must be 1-200`);
}
if (!entry.trim() || entry.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} chars to ${join(outDir, "entry.txt")}`);
