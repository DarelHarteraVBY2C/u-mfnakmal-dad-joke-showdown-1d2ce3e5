// Dad Joke Showdown — u-mfnakmal-dad-joke-showdown-1d2ce3e5
//
// Writes one dad joke (at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Node 22, standard library only, no network access.
//
// The joke: a father-style pun with the turn at the very end.
// "Five Miles" the dog makes the everyday claim literally true,
// which is exactly the kind of groan a dad joke is supposed to earn.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I named my dog Five Miles so I can say I walk Five Miles every day.";

const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function main(): void {
  // Gate, mirrored from the competition rules: the entry must be
  // UTF-8 text of 1 to 200 characters, not only white space.
  const chars = [...JOKE];
  if (chars.length < 1) fail("joke is empty");
  if (chars.length > MAX_CHARS) {
    fail(`joke is ${chars.length} characters, over the 200 limit`);
  }
  if (JOKE.trim().length === 0) fail("joke is only white space");
  // One joke, one line: a line break would split the delivery and
  // the punchline would no longer land at the end of the text.
  if (/[\r\n]/.test(JOKE)) fail("joke must be a single line");

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, JOKE, "utf8");
  // Round-trip check: what the grader reads must be byte-identical
  // to the joke validated above, with no trailing newline added.
  const written = readFileSync(outPath, "utf8");
  if (written !== JOKE) {
    fail("entry.txt on disk does not match the validated joke");
  }
  console.log(`wrote ${chars.length} characters to ${outPath}`);
}

main();
