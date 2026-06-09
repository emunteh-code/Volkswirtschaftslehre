/**
 * CI guard: deleted CSS must not be re-linked; fleet must not load premium-refinement.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const DELETED = [
  "assets/css/premium-refinement.css",
  "assets/css/module-tokens.css",
];

const FORBIDDEN_REFS = [
  "premium-refinement.css",
  "module-tokens.css",
];

let failed = false;

for (const rel of DELETED) {
  if (fs.existsSync(path.join(repoRoot, rel))) {
    console.error(`css-orphans: expected deleted file still present: ${rel}`);
    failed = true;
  }
}

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".git") continue;
      walk(full, acc);
    } else if (/\.(html|css|js|mjs)$/i.test(ent.name)) {
      acc.push(full);
    }
  }
  return acc;
}

const scanRoots = [
  path.join(repoRoot, "index.html"),
  path.join(repoRoot, "mikro1"),
  path.join(repoRoot, "statistik"),
  path.join(repoRoot, "makro1"),
  path.join(repoRoot, "makro2"),
  path.join(repoRoot, "oekonometrie"),
  path.join(repoRoot, "mathematik"),
  path.join(repoRoot, "finanzwirtschaft"),
  path.join(repoRoot, "mikro2"),
  path.join(repoRoot, "jahresabschluss"),
  path.join(repoRoot, "recht"),
  path.join(repoRoot, "internationale-wirtschaftsbeziehungen"),
  path.join(repoRoot, "r"),
  path.join(repoRoot, "politisches-system-brd"),
  path.join(repoRoot, "assets/css/visual"),
  path.join(repoRoot, "tools/exam-os/ci-validate.mjs"),
];

const files = new Set();
for (const root of scanRoots) {
  if (!fs.existsSync(root)) continue;
  const st = fs.statSync(root);
  if (st.isFile()) files.add(root);
  else walk(root).forEach((f) => files.add(f));
}

function lineHasForbiddenRef(line, needle) {
  const t = line.trim();
  if (!t || t.startsWith("//")) return false;
  if (t.startsWith("/*") || t.startsWith("*")) return false;
  return line.includes(needle);
}

for (const file of files) {
  const rel = path.relative(repoRoot, file);
  if (rel.startsWith("docs/") || rel.startsWith(".qa/")) continue;
  const lines = fs.readFileSync(file, "utf8").split("\n");
  for (const needle of FORBIDDEN_REFS) {
    if (lines.some((line) => lineHasForbiddenRef(line, needle))) {
      console.error(`css-orphans: forbidden runtime reference "${needle}" in ${rel}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log("css-orphans: OK");
