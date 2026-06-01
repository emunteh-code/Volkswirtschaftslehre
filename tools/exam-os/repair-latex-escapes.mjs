#!/usr/bin/env node
/**
 * Collapse runaway LaTeX backslash doubling in String.raw theory sources.
 * Usage: node tools/exam-os/repair-latex-escapes.mjs [--write]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { collapseOverEscapedLatex } from '../../assets/js/portal-core/utils/latexProtect.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');

const TARGETS = [
  '**/js/data/chapters.js',
  '**/js/data/theoryRecipe.js',
  '**/js/data/curriculum.js'
];

function globFiles(pattern) {
  const parts = pattern.split('/');
  const moduleRoots = fs
    .readdirSync(repoRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('.') && d.name !== 'node_modules')
    .map((d) => d.name);

  const files = [];
  for (const mod of moduleRoots) {
    const rel = `${mod}/js/data/${parts.at(-1)}`;
    const abs = path.join(repoRoot, rel);
    if (fs.existsSync(abs)) files.push(abs);
  }
  return files;
}

function repairStringRawBlocks(src) {
  let changed = false;
  const next = src.replace(/String\.raw`([\s\S]*?)`/g, (match, body) => {
    const repaired = collapseOverEscapedLatex(body);
    if (repaired === body) return match;
    changed = true;
    return `String.raw\`${repaired}\``;
  });
  return { src: next, changed };
}

function main() {
  const files = [
    ...globFiles('**/js/data/chapters.js'),
    ...globFiles('**/js/data/theoryRecipe.js'),
    ...globFiles('**/js/data/curriculum.js')
  ];

  let touched = 0;
  for (const file of files) {
    const before = fs.readFileSync(file, 'utf8');
    const { src, changed } = repairStringRawBlocks(before);
    if (!changed) continue;
    touched++;
    if (write) fs.writeFileSync(file, src);
    console.log(write ? 'fixed' : 'would-fix', path.relative(repoRoot, file));
  }

  console.log(JSON.stringify({ write, touched, files: files.length }, null, 2));
}

main();
