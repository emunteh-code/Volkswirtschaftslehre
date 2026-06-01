#!/usr/bin/env node
/**
 * Replace baked `[object Object]` in module chapters.js theorie strings.
 * Usage: node tools/exam-os/repair-theory-object-placeholders.mjs [--write] [slug ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { repairTheoryObjectPlaceholders } from '../../assets/js/portal-core/utils/formelDisplay.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');
const slugs = process.argv.filter((a) => !a.startsWith('--'));

function escapeForStringRaw(html) {
  return html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

async function repairChaptersModule(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(chaptersPath)) return { slug, replaced: 0 };

  let src = fs.readFileSync(chaptersPath, 'utf8');
  if (!src.includes('[object Object]')) return { slug, replaced: 0 };

  const { CONTENT, CHAPTERS } = await import(`file://${chaptersPath}?t=${Date.now()}`);
  let replaced = 0;

  for (const ch of CHAPTERS) {
    const entry = CONTENT[ch.id];
    if (!entry?.theorie || typeof entry.theorie !== 'string') continue;
    if (!entry.theorie.includes('[object Object]')) continue;

    const fixed = repairTheoryObjectPlaceholders(entry.theorie, entry.formeln);
    if (fixed === entry.theorie) continue;

    const idMarker = `${ch.id}: {`;
    const start = src.indexOf(idMarker);
    if (start < 0) continue;

    const theorieKey = src.indexOf('theorie:', start);
    if (theorieKey < 0 || theorieKey > start + 120000) continue;

    const rawOpen = src.indexOf('String.raw`', theorieKey);
    if (rawOpen < 0 || rawOpen > theorieKey + 40) continue;
    const contentStart = rawOpen + 'String.raw`'.length;
    const contentEnd = src.indexOf('`,', contentStart);
    if (contentEnd < 0) continue;

    const oldInner = src.slice(contentStart, contentEnd);
    const newInner = escapeForStringRaw(fixed);
    if (oldInner === newInner) continue;

    src = `${src.slice(0, contentStart)}${newInner}${src.slice(contentEnd)}`;
    replaced++;
  }

  if (write && replaced) {
    fs.writeFileSync(chaptersPath, src);
  }

  return { slug, replaced };
}

const targets = slugs.length ? slugs : ['recht', 'finanzwirtschaft'];

for (const slug of targets) {
  const r = await repairChaptersModule(slug);
  console.log(`${r.slug}: ${r.replaced} concepts patched${write ? ' (written)' : ' (dry-run)'}`);
}

if (!write) console.log('\nRe-run with --write to persist.');
