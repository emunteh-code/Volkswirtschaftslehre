/**
 * CI guard: math ink uses var(--math-ink) without !important wars.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const VISUAL_DIR = path.join(repoRoot, "assets/css/visual");
const ALLOW_IMPORTANT = new Set(["visual-responsive.css"]);

let failed = false;

for (const name of fs.readdirSync(VISUAL_DIR).filter((f) => f.endsWith(".css"))) {
  const text = fs.readFileSync(path.join(VISUAL_DIR, name), "utf8");
  if (/mjx-container[\s\S]*?!important/.test(text) && !ALLOW_IMPORTANT.has(name)) {
    console.error(`math-ink: mjx-container + !important in visual/${name}`);
    failed = true;
  }
}

const tokens = fs.readFileSync(path.join(VISUAL_DIR, "visual-tokens.css"), "utf8");
if (!tokens.includes("--math-ink: #C026D3")) {
  console.error("math-ink: light mode must set --math-ink: #C026D3");
  failed = true;
}
if (!tokens.includes("--math-ink: #E879F9")) {
  console.error("math-ink: dark default must set --math-ink: #E879F9");
  failed = true;
}

const learning = fs.readFileSync(path.join(VISUAL_DIR, "visual-learning.css"), "utf8");
if (!learning.includes("var(--math-ink)")) {
  console.error("math-ink: visual-learning must reference var(--math-ink)");
  failed = true;
}

if (failed) process.exit(1);
console.log("math-ink: OK");
