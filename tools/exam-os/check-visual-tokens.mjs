/**
 * CI guard: raw hex/rgb must live in visual-tokens.css (allowlist portal-critical).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const ALLOWLIST = new Set([
  "assets/css/visual/visual-tokens.css",
  "assets/css/portal-critical.css"
]);

const SCAN_FILES = [
  "assets/css/visual/visual-dark.css"
];

const HEX_RE = /#[0-9a-fA-F]{3,8}\b/g;
const RGB_RE = /\brgba?\(/g;

let failed = false;
let violations = 0;
const MAX_REPORT = 25;

function scanFile(rel) {
  if (ALLOWLIST.has(rel)) return;
  const text = fs.readFileSync(path.join(repoRoot, rel), "utf8");
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    if (line.includes("url(") || line.includes("data:image")) return;
    if (HEX_RE.test(line) || RGB_RE.test(line)) {
      HEX_RE.lastIndex = 0;
      RGB_RE.lastIndex = 0;
      if (violations < MAX_REPORT) {
        console.error(`visual-tokens: raw color in ${rel}:${i + 1}`);
      }
      violations++;
      failed = true;
    }
  });
}

for (const rel of SCAN_FILES) {
  scanFile(rel);
}

if (failed) {
  console.error(`visual-tokens: ${violations} raw color violation(s) outside token file`);
  process.exit(1);
}
console.log("visual-tokens: OK");
