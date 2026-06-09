#!/usr/bin/env node
/**
 * Map existing theory HTML into canonical 8-step recipe sections (no content deletion).
 * Usage: node tools/exam-os/normalize-theory-structure.mjs [--write] [--report] [slug ...]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  THEORY_SECTION_ORDER,
  normalizeTheoryHtml,
  completeTheoryRecipe,
  auditTheoryRecipeSteps,
  countTheoryRecipeCards,
  theoryToHtml
} from '../../assets/js/portal-core/theory/theoryStructure.js';
import { collapseOverEscapedLatex } from '../../assets/js/portal-core/utils/latexProtect.js';

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

const PERSISTED_MODULES = new Set(['oekonometrie', 'mathematik']);

/** String.raw templates must not double backslashes — only escape delimiters. */
function escapeForTemplateLiteral(str) {
  return collapseOverEscapedLatex(str).replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
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
    valueEnd = joinIdx + "].join('')".length;
  } else if (/^renderTheoryHtml/.test(slice)) {
    return { src, ok: false, skip: 'dynamic-render' };
  } else {
    return { src, ok: false };
  }

  const replacement = `theorie: String.raw\`${escapeForTemplateLiteral(newHtml.trim())}\``;
  const next = `${src.slice(0, absTheorie)}${replacement}${src.slice(valueEnd)}`;
  return { src: next, ok: true };
}

function buildMergeEntry(contentEntry, curriculumEntry) {
  return {
    ...curriculumEntry,
    ...contentEntry,
    motivation: contentEntry?.motivation ?? curriculumEntry?.motivation,
    objectives: contentEntry?.objectives ?? curriculumEntry?.objectives,
    formeln: contentEntry?.formeln ?? curriculumEntry?.formeln,
    cards: curriculumEntry?.cards ?? contentEntry?.cards,
    intuition: curriculumEntry?.intuition ?? contentEntry?.intuition,
    title: curriculumEntry?.title ?? contentEntry?.title
  };
}

function processTheoryPipeline(beforeHtml, mergeEntry, chapterTitle, moduleSlug = '') {
  const normalized = normalizeTheoryHtml(beforeHtml);
  const after = completeTheoryRecipe(normalized, mergeEntry, {
    chapterTitle,
    moduleSlug,
    headerMotivationShown: true,
    headerObjectivesShown: Boolean(mergeEntry?.objectives?.length)
  });
  return {
    after,
    auditBefore: auditTheoryRecipeSteps(beforeHtml),
    auditAfter: auditTheoryRecipeSteps(after)
  };
}

async function loadModule(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(chaptersPath)) return null;

  const mod = await import(`${pathToFileURL(chaptersPath).href}?norm=${Date.now()}`);
  const content = mod.CONTENT || mod.content;
  const chapters = mod.CHAPTERS || mod.chapters;
  if (!content || !chapters) return null;

  let curriculumById = {};
  const curriculumPath = path.join(repoRoot, slug, 'js/data/curriculum.js');
  if (fs.existsSync(curriculumPath)) {
    const cur = await import(`${pathToFileURL(curriculumPath).href}?norm=${Date.now()}`);
    const list = cur.CURRICULUM || cur.curriculum || [];
    curriculumById = Object.fromEntries(list.map((e) => [e.id, e]));
  }

  return { slug, chaptersPath, content, chapters, curriculumById };
}

async function processChaptersFile(slug) {
  const loaded = await loadModule(slug);
  if (!loaded) return null;

  let src = fs.readFileSync(loaded.chaptersPath, 'utf8');
  const { content, chapters, curriculumById, chaptersPath } = loaded;

  const rows = [];
  let touched = 0;
  let skippedDynamic = 0;
  let beforeFull = 0;
  let afterFull = 0;
  let beforeStructural = 0;
  let afterStructural = 0;
  let beforeFilledTotal = 0;
  let afterFilledTotal = 0;
  let afterPlaceholderTotal = 0;
  let afterCardTotal = 0;
  let conceptCount = 0;

  const persistedRecipe = {};

  for (const ch of chapters) {
    const contentEntry = content[ch.id];
    if (!contentEntry?.theorie) continue;

    const before = theoryToHtml(contentEntry.theorie);
    if (!before.trim()) continue;

    if (typeof contentEntry.theorie !== 'string' && !Array.isArray(contentEntry.theorie)) {
      skippedDynamic++;
      rows.push({ id: ch.id, title: ch.title, status: 'skip-dynamic' });
      continue;
    }

    conceptCount++;
    const mergeEntry = buildMergeEntry(contentEntry, curriculumById[ch.id] || {});
    const { after, auditBefore, auditAfter } = processTheoryPipeline(before, mergeEntry, ch.title, slug);

    beforeFilledTotal += auditBefore.filledCount;
    afterFilledTotal += auditAfter.filledCount;
    if (auditBefore.fullEight) beforeFull++;
    if (auditAfter.fullEight) afterFull++;
    if (auditBefore.structuralEight) beforeStructural++;
    if (auditAfter.structuralEight) afterStructural++;
    afterPlaceholderTotal += auditAfter.placeholderCount;
    afterCardTotal += countTheoryRecipeCards(after);

    const changed = after !== before;

    if (PERSISTED_MODULES.has(slug)) {
      persistedRecipe[ch.id] = after;
    }

    if (write) {
      if (PERSISTED_MODULES.has(slug)) {
        rows.push({
          id: ch.id,
          title: ch.title,
          status: 'persist-recipe',
          filledBefore: auditBefore.filledCount,
          filledAfter: auditAfter.filledCount,
          structuralAfter: auditAfter.structuralEight
        });
        touched++;
      } else if (changed) {
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
            filledBefore: auditBefore.filledCount,
            filledAfter: auditAfter.filledCount
          });
        } else {
          rows.push({ id: ch.id, title: ch.title, status: 'replace-failed' });
        }
      }
    } else {
      rows.push({
        id: ch.id,
        title: ch.title,
        status: changed ? 'would-normalize' : auditBefore.wrapped ? 'already-wrapped' : 'unchanged',
        filledBefore: auditBefore.filledCount,
        filledAfter: auditAfter.filledCount
      });
    }
  }

  if (write && touched && !PERSISTED_MODULES.has(slug)) {
    fs.writeFileSync(chaptersPath, src);
  }

  if (write && PERSISTED_MODULES.has(slug) && Object.keys(persistedRecipe).length) {
    writePersistedTheoryRecipe(slug, persistedRecipe);
  }

  const pctBefore = conceptCount ? Math.round((beforeFull / conceptCount) * 1000) / 10 : 0;
  const pctAfter = conceptCount ? Math.round((afterFull / conceptCount) * 1000) / 10 : 0;
  const pctStructuralAfter = conceptCount ? Math.round((afterStructural / conceptCount) * 1000) / 10 : 0;

  return {
    slug,
    touched,
    skippedDynamic,
    concepts: conceptCount,
    beforeFull,
    afterFull,
    beforeStructural,
    afterStructural,
    pctBefore,
    pctAfter,
    pctStructuralAfter,
    avgFilledBefore: conceptCount ? Math.round((beforeFilledTotal / conceptCount) * 10) / 10 : 0,
    avgFilledAfter: conceptCount ? Math.round((afterFilledTotal / conceptCount) * 10) / 10 : 0,
    avgPlaceholdersAfter: conceptCount ? Math.round((afterPlaceholderTotal / conceptCount) * 10) / 10 : 0,
    avgCardsAfter: conceptCount ? Math.round((afterCardTotal / conceptCount) * 10) / 10 : 0,
    rows
  };
}

function writePersistedTheoryRecipe(slug, recipeById) {
  const outPath = path.join(repoRoot, slug, 'js/data/theoryRecipe.js');
  const lines = [
    '// AUTO-GENERATED by tools/exam-os/normalize-theory-structure.mjs — do not hand-edit',
    `// Generated: ${new Date().toISOString().slice(0, 10)}`,
    '',
    'export const THEORY_RECIPE = {'
  ];
  for (const [id, html] of Object.entries(recipeById)) {
    lines.push(`  ${id}: String.raw\`${escapeForTemplateLiteral(html.trim())}\`,`);
  }
  lines.push('};', '');
  fs.writeFileSync(outPath, lines.join('\n'));
}

function writeFleetAuditReport(fleet) {
  const reportPath = path.join(repoRoot, 'docs/audits/2026-05-31-theory-recipe-fleet-fill-pass.md');
  const totalConcepts = fleet.reduce((n, m) => n + m.concepts, 0);
  const totalBeforeFull = fleet.reduce((n, m) => n + m.beforeFull, 0);
  const totalAfterFull = fleet.reduce((n, m) => n + m.afterFull, 0);
  const totalAfterStructural = fleet.reduce((n, m) => n + m.afterStructural, 0);
  const pctBefore = totalConcepts ? Math.round((totalBeforeFull / totalConcepts) * 1000) / 10 : 0;
  const pctAfter = totalConcepts ? Math.round((totalAfterFull / totalConcepts) * 1000) / 10 : 0;
  const pctStructuralAfter = totalConcepts
    ? Math.round((totalAfterStructural / totalConcepts) * 1000) / 10
    : 0;

  const lines = [
    '# Theory recipe fleet fill pass',
    '',
    `Date: 2026-05-31`,
    `Mode: ${write ? 'write' : reportOnly ? 'report' : 'dry-run'}`,
    '',
    '## Canonical 8-step recipe',
    '',
    ...THEORY_SECTION_ORDER.map((s) => `${s.step}. **${s.heading}** (\`${s.id}\`)`),
    '',
    '## Fleet summary',
    '',
    `| Metric | Before | After |`,
    `|--------|--------|-------|`,
    `| Concepts audited | ${totalConcepts} | ${totalConcepts} |`,
    `| Concepts with 8 **filled** steps (substantive VL content) | ${totalBeforeFull} (${pctBefore}%) | ${totalAfterFull} (${pctAfter}%) |`,
    `| Concepts with 8 **structural** cards (incl. honest placeholders) | — | ${totalAfterStructural} (${pctStructuralAfter}%) |`,
    '',
    '| Module | Concepts | Structural 8 after | Avg filled after | Avg placeholders | Normalized |',
    '|--------|----------|--------------------|------------------|--------------------|------------|',
    ...fleet.map((m) => {
      const normalized = m.rows.filter((r) => r.status === 'normalized' || r.status === 'persist-recipe').length;
      return `| ${m.slug} | ${m.concepts} | ${m.afterStructural} | ${m.avgFilledAfter} | ${m.avgPlaceholdersAfter} | ${normalized} |`;
    }),
    '',
    '## Implementation',
    '',
    '| Layer | File | Role |',
    '|-------|------|------|',
    '| Core | `assets/js/portal-core/theory/theoryStructure.js` | Re-wrap, classify, `completeTheoryRecipe`, `auditTheoryRecipeSteps` |',
    '| Migration | `tools/exam-os/normalize-theory-structure.mjs` | Fleet `--write`; persists `theoryRecipe.js` for ökonometrie/mathematik |',
    '| Render | `assets/js/portal-core/ui/warningSystem.js` | Keeps placeholder cards; warn-box rail |',
    '| Styles | `assets/css/visual/visual-learning.css` | Recipe cards + placeholder styling |',
    '',
    'Empty steps after normalization receive honest one-line placeholders or content merged from `motivation`, `objectives`, `formeln`, `cards`, `intuition` — no invented VL prose.',
    '',
    '## Per-concept detail (filled step counts)',
    ''
  ];

  for (const m of fleet) {
    lines.push(`### ${m.slug}`, '');
    lines.push('| Concept | Status | Filled before → after |', '|---------|--------|----------------------|');
    for (const r of m.rows) {
      const fill =
        r.filledBefore != null ? `${r.filledBefore} → ${r.filledAfter}` : '—';
      lines.push(`| ${r.id} | ${r.status} | ${fill} |`);
    }
    lines.push('');
  }

  lines.push('## Validation', '', '| Check | Result |', '|-------|--------|', '| `npm run validate` | see CI |', '| `npm run trust:pass1` | see CI |', '');

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  return reportPath;
}

async function main() {
  const fleet = [];
  for (const slug of slugs) {
    const result = await processChaptersFile(slug);
    if (result) fleet.push(result);
  }

  const reportPath = writeFleetAuditReport(fleet);
  const totalConcepts = fleet.reduce((n, m) => n + m.concepts, 0);
  const totalAfterFull = fleet.reduce((n, m) => n + m.afterFull, 0);
  const totalAfterStructural = fleet.reduce((n, m) => n + m.afterStructural, 0);
  const pctStructuralAfter = totalConcepts
    ? Math.round((totalAfterStructural / totalConcepts) * 1000) / 10
    : 0;

  console.log(
    JSON.stringify(
      {
        fleet: fleet.map((m) => ({
          slug: m.slug,
          touched: m.touched,
          concepts: m.concepts,
          pctStructuralAfter: m.pctStructuralAfter,
          pctFilledAfter: m.pctAfter
        })),
        totalConcepts,
        pctStructuralAfter,
        pctFilledAfter: totalConcepts ? Math.round((totalAfterFull / totalConcepts) * 1000) / 10 : 0,
        reportPath
      },
      null,
      2
    )
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
