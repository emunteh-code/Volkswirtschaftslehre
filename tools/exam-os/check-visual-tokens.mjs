/**
 * CI guard: raw hex/rgb must live in token allowlist files only.
 * Active visual layer files must use var(--*) / color-mix with tokens.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const visualDir = path.join(repoRoot, "assets/css/visual");

const ALLOWLIST = new Set([
  "assets/css/visual/visual-tokens.css",
  "assets/css/visual/visual-landing.css",
  "assets/css/portal-critical.css",
  "assets/css/generated-portal.css",
  "assets/css/common.css",
]);

const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const RGB_RE = /\brgba?\(/g;

let failed = false;
let violations = 0;
const MAX_REPORT = 40;

function shouldSkipLine(line) {
  const t = line.trim();
  if (!t || t.startsWith("/*") || t.startsWith("*")) return true;
  if (line.includes("url(") || line.includes("data:image")) return true;
  return false;
}

function scanFile(rel) {
  if (ALLOWLIST.has(rel)) return;
  const text = fs.readFileSync(path.join(repoRoot, rel), "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    if (shouldSkipLine(line)) return;
    HEX_RE.lastIndex = 0;
    RGB_RE.lastIndex = 0;
    if (HEX_RE.test(line) || RGB_RE.test(line)) {
      if (violations < MAX_REPORT) {
        console.error(`visual-tokens: raw color in ${rel}:${i + 1}`);
        console.error(`  ${line.trim().slice(0, 120)}`);
      }
      violations++;
      failed = true;
    }
  });
}

if (!fs.existsSync(visualDir)) {
  console.error("visual-tokens: missing assets/css/visual/");
  process.exit(1);
}

for (const name of fs.readdirSync(visualDir).sort()) {
  if (!name.endsWith(".css")) continue;
  scanFile(`assets/css/visual/${name}`);
}

if (failed) {
  console.error(`visual-tokens: ${violations} raw color violation(s) outside allowlist`);
  process.exit(1);
}
console.log("visual-tokens: OK");
