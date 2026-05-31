#!/usr/bin/env node
/**
 * Pass 3: enrich VL registry family method strings + default rubrics (in-place).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : ['statistik', 'oekonometrie'];

const SUFFIX = {
  statistik: ' Schritte: (1) Stichprobe/Variable prüfen, (2) Test aus VL ableiten, (3) α-Entscheidung, (4) ökonomische Deutung.',
  oekonometrie: ' Schritte: (1) Modell/Identifikation, (2) Schätzer aus VL, (3) H0 formal, (4) Koeffizient vs. Signifikanz trennen.'
};

for (const slug of slugs) {
  const file = path.join(repoRoot, slug, 'js/data/taskFamilies.js');
  let src = fs.readFileSync(file, 'utf8');
  let count = 0;
  src = src.replace(/method: "(VL-Abschnitt[^"]+)"/g, (full, inner) => {
    if (inner.includes('Schritte: (1)')) return full;
    count += 1;
    return `method: "${inner}${SUFFIX[slug]}"`;
  });
  if (!src.includes('gradingRubric: [')) {
    console.log(`${slug}: gradingRubric already structured`);
  }
  fs.writeFileSync(file, src);
  console.log(`${slug}: enriched ${count} method strings`);
}
