/**
 * Regression guard: portal shell must not ship a live or broken Intuition tab.
 * Canonical markup: tools/exam-os/snippets/portal-tab-row.html
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const FORBIDDEN = [
  /data-tab=["']intuition["']/i,
  />\s*Intuition\s*<\/button>/i,
  /role=["']tab["'][^>]*>\s*Intuition/i,
  /tabindex=["']0["']>\s*Intuition/i
];

const SCAN_PATHS = [
  'assets/js/generated-portal/main.js',
  'mikro1/index.html',
  'mikro2/index.html',
  'makro1/index.html',
  'makro2/index.html',
  'statistik/index.html',
  'oekonometrie/index.html',
  'mathematik/index.html',
  'recht/index.html',
  'finanzwirtschaft/index.html',
  'jahresabschluss/index.html',
  'internationale-wirtschaftsbeziehungen/index.html',
  'r/index.html',
  'politisches-system-brd/index.html'
];

let failed = false;

for (const rel of SCAN_PATHS) {
  const full = path.join(repoRoot, rel);
  if (!fs.existsSync(full)) continue;
  const text = fs.readFileSync(full, 'utf8');
  for (const re of FORBIDDEN) {
    if (re.test(text)) {
      console.error(`portal-shell: forbidden Intuition tab pattern in ${rel} (${re})`);
      failed = true;
    }
  }
}

if (failed) {
  process.exit(1);
}

console.log('portal-shell: OK (no Intuition tab / orphaned ARIA in scanned shells).');
