/**
 * CI guard: learner-facing pedagogy HTML must not leak internal metadata
 * or unprocessed markup tags in fleet renderer paths.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

const PEDAGOGY_SOURCES = [
  "assets/js/portal-core/pedagogy/learnerPedagogy.js",
  "assets/js/portal-core/theory/theoryStructure.js"
];

/** Patterns that must not appear in HTML template strings sent to the learner DOM. */
const FORBIDDEN_IN_PEDAGOGY_HTML = [
  { re: /platform-added-(?:explanation|drill)/g, label: "platform-added metadata in pedagogy HTML" },
  { re: /source-distilled:/g, label: "source-distilled label in pedagogy HTML" },
  { re: /pedagogy-source-note/g, label: "pedagogy-source-note in learner HTML" },
  { re: /Generischer Fehlercheck/g, label: "generic fehlercheck dev wording" },
  { re: /Lern-Checkliste/g, label: "Lern-Checkliste placeholder" }
];

/** Auto-generated theory blocks should not ship internal labels in template literals. */
const SYNTH_FORBIDDEN = FORBIDDEN_IN_PEDAGOGY_HTML;

function extractTemplateLiterals(source) {
  const literals = [];
  const re = /`([\s\S]*?)`/g;
  let match;
  while ((match = re.exec(source))) {
    if (/<[a-z]/i.test(match[1])) literals.push(match[1]);
  }
  return literals;
}

function scanPedagogyFile(rel) {
  const full = path.join(repoRoot, rel);
  if (!fs.existsSync(full)) return [];
  const text = fs.readFileSync(full, "utf8");
  const hits = [];
  const literals = extractTemplateLiterals(text);

  for (const literal of literals) {
    for (const { re, label } of FORBIDDEN_IN_PEDAGOGY_HTML) {
      re.lastIndex = 0;
      if (re.test(literal)) hits.push({ file: rel, label });
    }
  }

  if (rel.includes("theoryStructure.js")) {
    const synth = text.slice(text.indexOf("export function synthesizeRecipeGaps"));
    for (const { re, label } of SYNTH_FORBIDDEN) {
      re.lastIndex = 0;
      if (re.test(synth)) hits.push({ file: rel, label: `${label} (synthesizeRecipeGaps)` });
    }
  }

  return hits;
}

let failed = false;
for (const rel of PEDAGOGY_SOURCES) {
  for (const hit of scanPedagogyFile(rel)) {
    console.error(`learner-ui-literals: ${hit.label} in ${hit.file}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("learner-ui-literals: OK");
