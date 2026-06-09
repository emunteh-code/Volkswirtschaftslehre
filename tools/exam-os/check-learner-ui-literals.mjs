/**
 * CI guard: learner-facing pedagogy HTML must not leak internal metadata,
 * forbidden workflow labels (§19.3), or unprocessed markup tags.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");

/** Fleet renderer / pedagogy sources scanned for template-literal leaks. */
const PEDAGOGY_SOURCES = [
  "assets/js/portal-core/pedagogy/learnerPedagogy.js",
  "assets/js/portal-core/theory/theoryStructure.js",
  "assets/js/portal-core/ui/renderer.js",
  "assets/js/portal-core/ui/warningSystem.js",
  "assets/js/portal-core/ui/quellenPanel.js",
  "assets/js/portal-core/ui/sourceProvenanceUi.js"
];

/** §19.3 — must not appear in learner HTML template strings. */
const FORBIDDEN_IN_PEDAGOGY_HTML = [
  { re: /platform-added-(?:explanation|drill)/g, label: "platform-added metadata in pedagogy HTML" },
  { re: /source-distilled:/g, label: "source-distilled label in pedagogy HTML" },
  { re: /pedagogy-source-note/g, label: "pedagogy-source-note in learner HTML" },
  { re: /Generischer Fehlercheck/g, label: "generic fehlercheck dev wording" },
  { re: /Lern-Checkliste/g, label: "Lern-Checkliste placeholder" },
  { re: /Empfohlener Ablauf/g, label: "Empfohlener Ablauf workflow strip" },
  { re: /PLATTFORM-ÜBUNG/gi, label: "PLATTFORM-ÜBUNG badge" },
  { re: /Plattform-Übung/g, label: "Plattform-Übung badge label" },
  { re: />\s*QUELLE\s*</g, label: "QUELLE pill badge" },
  { re: /Orientierungshilfe/g, label: "Orientierungshilfe internal footnote" },
  { re: /Generischer Mechanismus-Pfad/g, label: "Generischer Mechanismus-Pfad dev note" },
  { re: /formula-limits-row/g, label: "legacy table-style Einsatzgrenzen rows" },
  { re: />\s*Annahmen\s*</g, label: "legacy Einsatzgrenzen label Annahmen" },
  { re: />\s*Gilt, wenn\s*</g, label: "legacy Einsatzgrenzen label Gilt, wenn" },
  { re: /Merke:/g, label: "legacy Merke shortcut label" },
  { re: /<strong(?!>)/g, label: "broken <strong tag in template" },
  { re: /<\/strong(?!>)/g, label: "broken </strong tag in template" },
  { re: /&lt;\/?strong&gt;/g, label: "escaped strong tag in pedagogy HTML" },
  { re: /&lt;\/?em&gt;/g, label: "escaped em tag in pedagogy HTML" },
  { re: /&lt;br\s*\/?&gt;/g, label: "escaped br tag in pedagogy HTML" },
  { re: /•\s*☐/g, label: "raw bullet-checkbox pattern in pedagogy HTML" }
];

/** Whole-repo learner chrome — plain text grep (not only template literals). */
const FLEET_LEARNER_GREP_PATHS = [
  "assets/js/portal-core",
  "assets/js/common.js",
  "index.html"
];

const FLEET_FORBIDDEN_GREP = [
  { re: /Empfohlener Ablauf/g, label: "Empfohlener Ablauf in fleet learner chrome" },
  { re: /PLATTFORM-ÜBUNG/gi, label: "PLATTFORM-ÜBUNG in fleet learner chrome" },
  { re: /platform-chrome-badge--source[^"]*"[^>]*>\s*QUELLE\s*</gi, label: "QUELLE source badge in fleet chrome" }
];

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
    if (/^\s*>\s+[A-Za-zÄÖÜäöüß]/m.test(literal)) {
      hits.push({ file: rel, label: "markdown blockquote at line start in pedagogy HTML" });
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

function walkJsFiles(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) walkJsFiles(full, acc);
    else if (name.endsWith(".js")) acc.push(full);
  }
  return acc;
}

function scanFleetGrep() {
  const hits = [];
  for (const relRoot of FLEET_LEARNER_GREP_PATHS) {
    const fullRoot = path.join(repoRoot, relRoot);
    const files = fs.statSync(fullRoot).isDirectory()
      ? walkJsFiles(fullRoot)
      : [fullRoot];
    for (const file of files) {
      const rel = path.relative(repoRoot, file);
      const text = fs.readFileSync(file, "utf8");
      for (const { re, label } of FLEET_FORBIDDEN_GREP) {
        re.lastIndex = 0;
        if (re.test(text)) hits.push({ file: rel, label });
      }
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

for (const hit of scanFleetGrep()) {
  console.error(`learner-ui-literals: ${hit.label} in ${hit.file}`);
  failed = true;
}

if (failed) process.exit(1);
console.log("learner-ui-literals: OK");
