#!/usr/bin/env node
/**
 * Map existing theory HTML into canonical recipe-book sections (no content deletion).
 * Usage: node tools/exam-os/normalize-theory-structure.mjs [--write] [--report] [slug ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  THEORY_SECTION_ORDER,
  normalizeTheoryHtml,
  auditTheoryStructure
} from '../../assets/js/portal-core/theory/theoryStructure.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');
const reportOnly = process.argv.includes('--report');
const slugsArg = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const ALL_SLUGS = [
  'mikro1',
  'mikro2',
  'makro1',
  'makro2',
  'oekonometrie',
  'statistik',
  'finanzwirtschaft',
  'mathematik',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
];

const slugs = slugsArg.length ? slugsArg.filter((s) => ALL_SLUGS.includes(s)) : ALL_SLUGS;

function theoryToHtml(theorie) {
  if (typeof theorie === 'string') return theorie;
  if (Array.isArray(theorie)) return theorie.join('');
  return '';
}

function escapeForTemplateLiteral(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function findConceptBlockBounds(src, conceptId) {
  const markers = [`${conceptId}: {`, `CONTENT.${conceptId} = {`];
  let start = -1;
  for (const marker of markers) {
    const idx = src.indexOf(marker);
    if (idx >= 0 && (start < 0 || idx < start)) start = idx;
  }
  if (start < 0) return null;
  let depth = 0;
  let i = src.indexOf('{', start);
  const blockStart = i;
  for (; i < src.length; i++) {
    const ch = src[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return { start: blockStart, end: i + 1, conceptStart: start };
    }
  }
  return null;
}

function replaceTheorieField(src, conceptId, newHtml) {
  const bounds = findConceptBlockBounds(src, conceptId);
  if (!bounds) return { src, ok: false };
  const block = src.slice(bounds.start, bounds.end);
  const theorieIdx = block.search(/\btheorie\s*:/);
  if (theorieIdx < 0) return { src, ok: false };

  const absTheorie = bounds.start + theorieIdx;
  const afterKey = src.slice(absTheorie);
  const keyMatch = afterKey.match(/^theorie\s*:\s*/);
  if (!keyMatch) return { src, ok: false };

  let valueStart = absTheorie + keyMatch[0].length;
  let valueEnd = valueStart;

  const slice = src.slice(valueStart).trimStart();
  valueStart = src.length - slice.length;

  const concatPrefixMatch = slice.match(/^([A-Z_][A-Z0-9_]*)\s*\+\s*String\.raw`/);
  if (concatPrefixMatch) {
    const open = valueStart + slice.indexOf('String.raw`') + 'String.raw'.length;
    let close = open + 1;
    while (close < src.length) {
      if (src[close] === '`' && src[close - 1] !== '\\') break;
      close++;
    }
    valueEnd = close + 1;
    const replacement = `theorie: String.raw\`${escapeForTemplateLiteral(newHtml.trim())}\``;
    const next = `${src.slice(0, absTheorie)}${replacement}${src.slice(valueEnd)}`;
    return { src: next, ok: true };
  }

  if (slice.startsWith('String.raw`')) {
    const open = valueStart + slice.indexOf('`');
    let close = open + 1;
    while (close < src.length) {
      if (src[close] === '`' && src[close - 1] !== '\\') break;
      close++;
    }
    valueEnd = close + 1;
  } else if (slice.startsWith('`')) {
    let close = valueStart + 1;
    while (close < src.length) {
      if (src[close] === '`' && src[close - 1] !== '\\') break;
      close++;
    }
    valueEnd = close + 1;
  } else if (slice.startsWith('[')) {
    const joinIdx = src.indexOf('].join', valueStart);
    if (joinIdx < 0 || joinIdx > bounds.end) return { src, ok: false };
    valueEnd = joinIdx + '].join(\'\')'.length;
    if (src.slice(joinIdx, joinIdx + 10).includes("''")) {
      valueEnd = joinIdx + "].join('')".length;
    }
  } else if (/^renderTheoryHtml/.test(slice)) {
    return { src, ok: false, skip: 'dynamic-render' };
  } else {
    return { src, ok: false };
  }

  const replacement = `theorie: String.raw\`${escapeForTemplateLiteral(newHtml.trim())}\``;
  const next = `${src.slice(0, absTheorie)}${replacement}${src.slice(valueEnd)}`;
  return { src: next, ok: true };
}

async function processChaptersFile(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(chaptersPath)) return null;

  let src = fs.readFileSync(chaptersPath, 'utf8');
  const mod = await import(`${pathToFileURL(chaptersPath).href}?norm=${Date.now()}`);
  const content = mod.CONTENT || mod.content;
  const chapters = mod.CHAPTERS || mod.chapters;
  if (!content || !chapters) return null;

  const rows = [];
  let touched = 0;
  let skippedDynamic = 0;

  for (const ch of chapters) {
    const entry = content[ch.id];
    if (!entry?.theorie) continue;
    const before = theoryToHtml(entry.theorie);
    if (!before.trim()) continue;
    if (typeof entry.theorie !== 'string' && !Array.isArray(entry.theorie)) {
      skippedDynamic++;
      rows.push({ id: ch.id, title: ch.title, status: 'skip-dynamic' });
      continue;
    }
    const after = normalizeTheoryHtml(before);
    const auditBefore = auditTheoryStructure(before);
    const auditAfter = auditTheoryStructure(after);
    const changed = after !== before;

    if (changed && write) {
      const rep = replaceTheorieField(src, ch.id, after);
      if (rep.skip) {
        skippedDynamic++;
        rows.push({ id: ch.id, title: ch.title, status: 'skip-dynamic' });
      } else if (rep.ok) {
        src = rep.src;
        touched++;
        rows.push({
          id: ch.id,
          title: ch.title,
          status: 'normalized',
          sections: auditAfter.sectionCount
        });
      } else {
        rows.push({ id: ch.id, title: ch.title, status: 'replace-failed' });
      }
    } else {
      rows.push({
        id: ch.id,
        title: ch.title,
        status: changed ? 'would-normalize' : auditBefore.wrapped ? 'already-wrapped' : 'unchanged',
        sections: auditAfter.sectionCount
      });
    }
  }

  if (write && touched) {
    fs.writeFileSync(chaptersPath, src);
  }

  return { slug, touched, skippedDynamic, concepts: rows.length, rows };
}

async function main() {
  const fleet = [];
  for (const slug of slugs) {
    const result = await processChaptersFile(slug);
    if (result) fleet.push(result);
  }

  const reportPath = path.join(repoRoot, 'docs/audits/2026-05-31-theory-tab-recipe-structure-pass.md');

  const lines = [
    '# Theory tab recipe structure pass',
    '',
    `Date: 2026-05-31`,
    `Mode: ${write ? 'write' : reportOnly ? 'report' : 'dry-run'}`,
    '',
    '## Canonical section order',
    '',
    ...THEORY_SECTION_ORDER.map(
      (s) => `${s.step}. **${s.heading}** (\`${s.id}\`)`
    ),
    '',
    '## Fleet compliance',
    '',
    '| Module | Concepts | Normalized | Skipped (dynamic) |',
    '|--------|----------|------------|-------------------|',
    ...fleet.map((m) => {
      const normalized = m.rows.filter((r) => r.status === 'normalized' || r.status === 'would-normalize').length;
      return `| ${m.slug} | ${m.concepts} | ${normalized} | ${m.skippedDynamic} |`;
    }),
    '',
    '## Per-concept detail',
    ''
  ];

  for (const m of fleet) {
    lines.push(`### ${m.slug}`, '');
    lines.push('| Concept | Status | Recipe sections |', '|---------|--------|-------------------|');
    for (const r of m.rows) {
      lines.push(`| ${r.id} | ${r.status} | ${r.sections ?? '—'} |`);
    }
    lines.push('');
  }

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));

  console.log(JSON.stringify({ fleet: fleet.map((m) => ({ slug: m.slug, touched: m.touched, concepts: m.concepts })), reportPath }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
