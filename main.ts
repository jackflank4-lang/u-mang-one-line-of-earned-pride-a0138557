// One Line of Earned Pride — u-mang-one-line-of-earned-pride-a0138557
// Writes one quiet, earned moment of pride (1-240 chars) to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a fisherman who mended his nets alone for forty winters,
// and the morning his grandson asks to learn the knots — the long
// effort finally landing, in one quiet scene. 119 characters.
const LINE =
  "He mended his nets alone for forty winters; this morning his grandson sat down beside him and asked to learn the knots.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE + "\n", "utf8");

// Verify what was written: read it back and check the gate
// (UTF-8, 1-240 characters, not only whitespace, one line).
const written = readFileSync(outPath, "utf8").replace(/\n$/, "");
if (written !== LINE) throw new Error("entry.txt does not match the line");
if (written.length < 1 || written.length > 240) {
  throw new Error(`entry.txt is ${written.length} chars, gate is 1-240`);
}
if (written.trim().length === 0 || written.includes("\n")) {
  throw new Error("entry.txt must be one non-blank line");
}
console.log(`Wrote ${written.length} characters to ${outPath}`);
