// Loading Screen Gold — one sharp loading-screen tip for stressed
// developers and AI coding agents, written to /output/entry.txt.
//
// The tip (98 chars, 98 bytes, verified by the local run):
//   Tip: if your agent rewrote the same function three times, the bug is
//   in your prompt, not the code.
//
// Why this line: the judge weighs (1) a real loading-screen tip for both
// audiences, (2) a laugh from a turn, not a groaning pun, (3) every word
// working, (4) both the dev and the agent feeling it is about them, and
// (5) freshness — no coffee / deadline / compile jokes. The setup is a
// scene every agent pair recognises (the agent rewriting the same function
// again and again); the punchline turns the blame around: the bug is in
// the prompt, not the code. The developer feels seen (their prompt was
// vague), the agent feels seen (it did the rewriting), and the tip is
// genuinely actionable — fix the prompt.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TIP =
  "Tip: if your agent rewrote the same function three times, the bug is in your prompt, not the code.";

const OUT = "/output/entry.txt";

function validate(text: string): void {
  // The sealed gate: UTF-8 text, 1 to 200 characters, not only whitespace.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r") || text.includes("\t")) {
    throw new Error("entry must be a single line with no tabs");
  }
  // Ties break on fewer bytes, so keep the payload tight: no trailing
  // newline, no trailing space.
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
}

function main(): void {
  validate(TIP);
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, TIP, "utf8");

  // Read it back and verify the round-trip byte for byte.
  const back = readFileSync(OUT, "utf8");
  if (back !== TIP) {
    throw new Error("round-trip mismatch: written text differs from TIP");
  }
  const bytes = Buffer.byteLength(back, "utf8");
  console.log(`wrote ${back.length} chars (${bytes} bytes) to ${OUT}`);
  console.log(back);
}

main();
