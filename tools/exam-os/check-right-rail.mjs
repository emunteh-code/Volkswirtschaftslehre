/**
 * CI guard: right-rail renderer must hide empty sections (no heading-only cards).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const rightPanelPath = path.join(repoRoot, "assets/js/portal-core/ui/rightPanel.js");
const warningPath = path.join(repoRoot, "assets/js/portal-core/ui/warningSystem.js");

const text = fs.readFileSync(rightPanelPath, "utf8");
const warningText = fs.readFileSync(warningPath, "utf8");

const required = [
  { pattern: /formulasSection\.hidden\s*=\s*false/, label: "show Formeln section with fallback" },
  { pattern: /rp-formula-fallback/, label: "formula rail fallback when empty" },
  { pattern: /connectionsSection\.hidden\s*=\s*!connHtml/, label: "hide empty Verbindungen section" },
  { pattern: /mistakesSection\.hidden\s*=\s*true/, label: "hide empty Häufige Fehler section" },
  { pattern: /rp-formula-chip/, label: "compact formula index chips" },
  { pattern: /Weitere Fehler anzeigen/, label: "cap expanded rail warnings" }
];

let failed = false;
for (const { pattern, label } of required) {
  const source = label.includes("cap expanded") ? warningText : text;
  if (!pattern.test(source)) {
    console.error(`right-rail: missing ${label} in ${label.includes("cap expanded") ? "warningSystem.js" : "rightPanel.js"}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("right-rail: OK");
