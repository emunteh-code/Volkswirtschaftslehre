/**
 * Optional CI guard: sidebar must not reintroduce ambiguous status dot classes.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const SOURCES = [
  "assets/js/portal-core/ui/chapterNavigation.js",
  "assets/js/generated-portal/main.js",
  "assets/css/visual/visual-shell.css",
  "assets/css/visual/visual-learning.css"
];

const FORBIDDEN = [
  { re: /nav-due-dot/g, label: "legacy nav-due-dot" },
  { re: /#sidebar[^}]*\.mastery/g, label: "sidebar mastery percentage pill CSS" }
];

let failed = false;
for (const rel of SOURCES) {
  const text = fs.readFileSync(path.join(repoRoot, rel), "utf8");
  for (const { re, label } of FORBIDDEN) {
    re.lastIndex = 0;
    if (re.test(text)) {
      console.error(`sidebar-markers: ${label} in ${rel}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log("sidebar-markers: OK");
