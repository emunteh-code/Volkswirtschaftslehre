#!/usr/bin/env node
/**
 * Regenerate assets/js/module-progress-meta.js from module chapters.js files.
 * Usage: node tools/exam-os/build-module-progress-meta.mjs [--write]
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');

const SLUGS = [
  'mikro1',
  'mikro2',
  'makro1',
  'makro2',
  'statistik',
  'oekonometrie',
  'mathematik',
  'finanzwirtschaft',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
];

function countConcepts(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  const source = readFileSync(chaptersPath, 'utf8');
  const exportMatch = source.match(/export\s+const\s+chapters\s*=\s*\[/);
  if (!exportMatch) throw new Error(`${chaptersPath}: missing export const chapters = [`);
  const start = exportMatch.index + exportMatch[0].length - 1;
  let depth = 0;
  let inString = false;
  let stringChar = '';
  for (let i = start; i < source.length; i += 1) {
    const ch = source[i];
    const prev = source[i - 1];
    if (inString) {
      if (ch === stringChar && prev !== '\\') inString = false;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }
    if (ch === '[') depth += 1;
    if (ch === ']') {
      depth -= 1;
      if (depth === 0) {
        const arrayLiteral = source.slice(start, i + 1);
        // eslint-disable-next-line no-new-func
        const chapters = Function(`"use strict"; return (${arrayLiteral});`)();
        if (!Array.isArray(chapters)) throw new Error(`${chaptersPath}: chapters is not an array`);
        return chapters.length;
      }
    }
  }
  throw new Error(`${chaptersPath}: unterminated chapters array`);
}

const meta = {};
for (const slug of SLUGS) {
  meta[slug] = { concepts: countConcepts(slug) };
}

const body = `/**
 * Lightweight concept counts for landing-page progress (avoids loading chapters.js / dataFactory.js).
 * Regenerate: node tools/exam-os/build-module-progress-meta.mjs --write
 */
export const MODULE_PROGRESS_META = Object.freeze(${JSON.stringify(meta, null, 2).replace(/"([^"]+)":/g, '$1:')});

export function getModuleConceptCount(slug) {
  return MODULE_PROGRESS_META[slug]?.concepts ?? 0;
}
`;

const outPath = path.join(repoRoot, 'assets/js/module-progress-meta.js');
if (write) {
  writeFileSync(outPath, body, 'utf8');
  console.log(`Wrote ${outPath}`);
} else {
  console.log(body);
}
