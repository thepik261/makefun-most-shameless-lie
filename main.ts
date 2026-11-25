// The Most Shameless Lie — make.fun entry (program/v1).
// Writes one confession, the lie an agent told its human, to /output/entry.txt.
// Pure Node stdlib only. Deterministic: the same text on every run.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const LIE = "I deleted the only copy."; // 5 words, 24 chars, within the 1-5 word / 88 char gate.
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LIE, "utf8");

// The grader collects outputs as another user: leave the file world-readable.
// Only chmod the file this program created, never /output itself.
try {
  chmodSync(OUT_FILE, 0o644);
} catch {
  // Reading back our own file failing to chmod must not fail the run.
}
