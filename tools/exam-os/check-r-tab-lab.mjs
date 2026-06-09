/**
 * CI guard: R-Übung tab must use guided-lab markup from portal-core (no legacy patterns).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const rPracticePath = path.join(repoRoot, 'assets/js/portal-core/features/rPractice.js');

const FORBIDDEN_IN_R_PRACTICE = [
  { re: /Nur die Kernzeile ändern/g, label: 'legacy editor toolbar "Nur die Kernzeile ändern"' },
  { re: /<span class="r-map-cell-label">Matheobjekt<\/span>/g, label: 'legacy MATHEOBJEKT schema label' },
  { re: /<span class="r-core-line-kicker">Kernzeile<\/span>/g, label: 'legacy Kernzeile kicker (use Zielzeile)' },
  { re: /Mathe ↔ R/g, label: 'legacy Mathe ↔ R panel kicker' }
];

const REQUIRED_IN_R_PRACTICE = [
  { re: /renderEnvironmentNote/g, label: 'collapsible Laufumgebung note' },
  { re: /Code bearbeiten/g, label: 'Code bearbeiten editor label' },
  { re: /Zielzeile/g, label: 'Zielzeile teaching hinge' },
  { re: /data-r-action="check-solution"/g, label: 'Lösung prüfen control' },
  { re: /data-r-action="show-tip"/g, label: 'Tipp anzeigen control' },
  { re: /Dein Auftrag/g, label: 'task contract Dein Auftrag' },
  { re: /Erfolgskriterium/g, label: 'task contract Erfolgskriterium' },
  { re: /Was zählt im Output\?/g, label: 'output interpretation panel' }
];

function fail(msg) {
  console.error(`check-r-tab-lab: ${msg}`);
  process.exitCode = 1;
}

if (!fs.existsSync(rPracticePath)) {
  fail('rPractice.js not found');
  process.exit(0);
}

const source = fs.readFileSync(rPracticePath, 'utf8');

for (const { re, label } of FORBIDDEN_IN_R_PRACTICE) {
  re.lastIndex = 0;
  if (re.test(source)) {
    fail(`forbidden pattern still present — ${label}`);
  }
}

for (const { re, label } of REQUIRED_IN_R_PRACTICE) {
  re.lastIndex = 0;
  if (!re.test(source)) {
    fail(`required pattern missing — ${label}`);
  }
}

if (!process.exitCode) {
  console.log('check-r-tab-lab: OK');
}
