#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const slugs = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      'mikro1', 'mikro2', 'makro1', 'makro2', 'oekonometrie', 'statistik', 'mathematik',
      'finanzwirtschaft', 'jahresabschluss', 'recht', 'internationale-wirtschaftsbeziehungen'
    ];

for (const slug of slugs) {
  const file = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(file)) continue;
  const s = fs.readFileSync(file, 'utf8');
  const chM = s.match(/export const CHAPTERS = \[([\s\S]*?)\];/);
  if (!chM) continue;
  const ids = [...chM[1].matchAll(/id:\s*'([^']+)'/g)].map((m) => m[1]);
  const thin = [];
  for (const id of ids) {
    const block = s.match(new RegExp(`${id}:\\s*\\{([\\s\\S]*?)^\\s{2}\\},`, 'm'));
    if (!block) continue;
    const b = block[1];
    let theorieLen = 0;
    const arr = b.match(/theorie:\s*\[([\s\S]*?)\]\.join/);
    if (arr) theorieLen = arr[1].length;
    else if (b.includes('theorie:')) {
      const raw = b.match(/theorie:\s*([\s\S]*?),\s*formeln/);
      if (raw) theorieLen = raw[1].length;
    }
    const sections = (b.match(/section\(/g) || []).length + (b.match(/section-block/g) || []).length;
    const tasks = (b.match(/task\(/g) || []).length + (b.match(/text:\s*String\.raw`/g) || []).length;
    const formeln = (b.match(/\{ label/g) || []).length;
    if (theorieLen < 2000 || sections <= 3 || tasks <= 2) {
      thin.push({ id, theorieLen, sections, tasks, formeln });
    }
  }
  if (thin.length) {
    console.log(`\n## ${slug} (${thin.length} thin)`);
    thin.sort((a, b) => a.theorieLen - b.theorieLen);
    for (const t of thin) {
      console.log(`  ${t.id}: theory=${t.theorieLen} sec=${t.sections} tasks=${t.tasks} formeln=${t.formeln}`);
    }
  }
}
