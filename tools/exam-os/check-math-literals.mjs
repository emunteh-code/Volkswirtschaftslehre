/**
 * CI guard: visible math anti-patterns that break MathJax (e.g. raw # count in math mode).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const MODULES = [
  "mikro1",
  "mikro2",
  "makro1",
  "makro2",
  "statistik",
  "oekonometrie",
  "mathematik",
  "finanzwirtschaft",
  "jahresabschluss",
  "recht",
  "internationale-wirtschaftsbeziehungen"
];

const BAD_PATTERNS = [
  { re: /\\#\\\{/g, label: "raw \\\\#\\\\{ count notation in math" },
  { re: /Math input error/gi, label: "MathJax error string leaked" },
  { re: /You can't use/gi, label: "KaTeX 'You can't use' error string leaked" },
  { re: /Missing open brace/gi, label: "KaTeX error string leaked" },
  { re: /color\{#cc0000\}/gi, label: "MathJax error color markup" },
  { re: /ParseError/gi, label: "KaTeX ParseError string leaked" },
  { re: /Undefined control sequence/gi, label: "LaTeX undefined control sequence error leaked" }
];

function scanFile(rel) {
  const full = path.join(repoRoot, rel);
  if (!fs.existsSync(full)) return [];
  const text = fs.readFileSync(full, "utf8");
  const hits = [];
  for (const { re, label } of BAD_PATTERNS) {
    re.lastIndex = 0;
    if (re.test(text)) hits.push({ file: rel, label });
  }
  return hits;
}

function collectDataFiles() {
  const files = [];
  for (const slug of MODULES) {
    const dir = path.join(repoRoot, slug, "js/data");
    if (!fs.existsSync(dir)) continue;
    for (const name of fs.readdirSync(dir)) {
      if (name.endsWith(".js")) files.push(`${slug}/js/data/${name}`);
    }
  }
  files.push("assets/js/generated-portal/dataFactory.js");
  return files;
}

let failed = false;
for (const rel of collectDataFiles()) {
  for (const hit of scanFile(rel)) {
    console.error(`math-literals: ${hit.label} in ${hit.file}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("math-literals: OK");
