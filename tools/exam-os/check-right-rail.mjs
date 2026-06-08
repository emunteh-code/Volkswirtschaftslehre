/**
 * CI guard: right-rail renderer must hide empty sections (no heading-only cards).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../..");
const rightPanelPath = path.join(repoRoot, "assets/js/portal-core/ui/rightPanel.js");

const text = fs.readFileSync(rightPanelPath, "utf8");

const required = [
  { pattern: /formulasSection\.hidden\s*=\s*true/, label: "hide empty Formeln section" },
  { pattern: /connectionsSection\.hidden\s*=\s*!connHtml/, label: "hide empty Verbindungen section" },
  { pattern: /mistakesSection\.hidden\s*=\s*true/, label: "hide empty Häufige Fehler section" },
  { pattern: /rp-formula-chip/, label: "compact formula index chips" }
];

let failed = false;
for (const { pattern, label } of required) {
  if (!pattern.test(text)) {
    console.error(`right-rail: missing ${label} in rightPanel.js`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log("right-rail: OK");
