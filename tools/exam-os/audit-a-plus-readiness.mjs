#!/usr/bin/env node
/**
 * Audit per-concept A+ readiness vs mikro1 benchmark thresholds.
 * Usage: node tools/exam-os/audit-a-plus-readiness.mjs [--write]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const write = process.argv.includes('--write');
const MIKRO1_THEORY = 90727;

const SLUGS = [
  'mikro1', 'mikro2', 'makro1', 'makro2', 'oekonometrie', 'statistik', 'mathematik',
  'finanzwirtschaft', 'jahresabschluss', 'recht', 'internationale-wirtschaftsbeziehungen'
];

const THRESH = { sections: 4, formeln: 3, aufgaben: 3 };

function countSections(theorie) {
  if (!theorie) return 0;
  const s = typeof theorie === 'string' ? theorie : (Array.isArray(theorie) ? theorie.join('') : '');
  return (s.match(/section-block/g) || []).length + (s.match(/section\(/g) || []).length;
}

async function auditModule(slug) {
  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  if (!fs.existsSync(chaptersPath)) return null;

  const mod = await import(`file://${chaptersPath}`);
  const { CONTENT, CHAPTERS } = mod;
  let theoryTotal = 0;
  const concepts = CHAPTERS.map((ch) => {
    const entry = CONTENT[ch.id] || {};
    const theorie = entry.theorie || '';
    const theoryLen = typeof theorie === 'string' ? theorie.length : String(theorie).length;
    theoryTotal += theoryLen;
    const sections = countSections(theorie);
    const formeln = entry.formeln?.length || 0;
    const aufgaben = entry.aufgaben?.length || 0;
    const gaps = [];
    if (sections < THRESH.sections) gaps.push(`sections<${THRESH.sections}`);
    if (formeln < THRESH.formeln) gaps.push(`formeln<${THRESH.formeln}`);
    if (aufgaben < THRESH.aufgaben) gaps.push(`aufgaben<${THRESH.aufgaben}`);
    const aPlusReady = gaps.length === 0;
    return { id: ch.id, title: ch.title, sections, formeln, aufgaben, theoryLen, gaps, aPlusReady };
  });

  const ready = concepts.filter((c) => c.aPlusReady).length;
  const avg = (key) => (concepts.reduce((s, c) => s + c[key], 0) / concepts.length).toFixed(1);

  let stepDrillConcepts = 0;
  const stepPath = path.join(repoRoot, slug, 'js/data/stepProblems.js');
  if (fs.existsSync(stepPath)) {
    const sp = fs.readFileSync(stepPath, 'utf8');
    stepDrillConcepts = (sp.match(/conceptId:\s*'/g) || []).length
      + (sp.match(/STEP_PROBLEMS\s*=\s*\{/g) ? Object.keys((await import(`file://${stepPath}`)).default || {}).length : 0);
    try {
      const stepMod = await import(`file://${stepPath}`);
      const data = stepMod.STEP_PROBLEMS || stepMod.default || stepMod.stepProblems;
      if (data && typeof data === 'object') stepDrillConcepts = Object.keys(data).length;
    } catch {
      stepDrillConcepts = (sp.match(/^\s{2}[a-z_]+:/gm) || []).length;
    }
  }

  let examPath = 'unknown';
  if (fs.existsSync(path.join(repoRoot, slug, 'js/data/fullExams.js'))) examPath = 'fullExams.js';
  else if (fs.existsSync(path.join(repoRoot, slug, 'js/data/practiceConfig.js'))) examPath = 'practice/mock';

  return {
    slug,
    concepts: concepts.length,
    ready,
    readyPct: Math.round((100 * ready) / concepts.length),
    avgAufgaben: avg('aufgaben'),
    avgFormeln: avg('formeln'),
    theoryPct: Math.round((100 * theoryTotal) / MIKRO1_THEORY),
    theoryTotal,
    stepDrillConcepts,
    examPath,
    conceptRows: concepts
  };
}

function verdict(row) {
  if (row.readyPct >= 90) return 'Y — near full A+ depth';
  if (row.readyPct >= 60) return 'Partial — core concepts ready; gaps listed';
  if (row.readyPct >= 30) return 'Partial — substantial portal study possible; PDFs still needed for top tier';
  return 'N — use platform + official PDFs/exams; expand drills before claiming A+ only';
}

const results = [];
for (const slug of SLUGS) {
  const row = await auditModule(slug);
  if (row) results.push(row);
}

const lines = [
  '# A+ readiness pass — 2026-05-29',
  '',
  `Generated: ${new Date().toISOString().slice(0, 10)}`,
  '',
  '**Threshold per concept:** ≥4 section-blocks, ≥3 formeln, ≥3 portal aufgaben with steps.',
  '',
  '## Fleet summary',
  '',
  '| Module | Concepts | A+ ready | % ready | avg aufgaben | avg formeln | theory % mikro1 | Step drills | Exam path | Verdict |',
  '|--------|----------|----------|---------|--------------|-------------|-----------------|-------------|-----------|---------|'
];

for (const row of results) {
  lines.push(
    `| ${row.slug} | ${row.concepts} | ${row.ready}/${row.concepts} | ${row.readyPct}% | ${row.avgAufgaben} | ${row.avgFormeln} | ${row.theoryPct}% | ${row.stepDrillConcepts || '—'} | ${row.examPath} | ${verdict(row)} |`
  );
}

lines.push('', '## Per-concept gaps (not A+ ready)', '');
for (const row of results) {
  const fail = row.conceptRows.filter((c) => !c.aPlusReady);
  if (!fail.length) {
    lines.push(`### ${row.slug}`, '', 'All concepts meet structural A+ thresholds.', '');
    continue;
  }
  lines.push(`### ${row.slug} (${fail.length} gaps)`, '', '| Concept | sec | aufg | form | gaps |', '|---------|-----|------|------|------|');
  for (const c of fail) {
    lines.push(`| ${c.id} | ${c.sections} | ${c.aufgaben} | ${c.formeln} | ${c.gaps.join(', ')} |`);
  }
  lines.push('');
}

lines.push(
  '## Student-facing honesty',
  '',
  '- **Official PDFs** in `source-materials/` remain the notation authority; the platform distills and drills, it does not replace every slide footnote.',
  '- **Probeklausuren** on paper or not yet OCR-linked are not fully replicated in `officialTaskSourceFamilies` (0 fleet-wide in current audit).',
  '- **mikro2 supplementals** (`externa_*`, `public_goods`) use platform-added theory/drills without VL page anchors.',
  '- **True A+ from platform alone** is realistic for **mikro1** and improving for **statistik/oekonometrie** on mechanics; **makro2 open economy** and **recht case depth** still benefit from source PDFs for edge cases.',
  ''
);

const outPath = path.join(repoRoot, 'docs/audits/2026-05-29-a-plus-readiness-pass.md');
if (write) {
  fs.writeFileSync(outPath, `${lines.join('\n')}\n`);
  console.log(`Wrote ${outPath}`);
} else {
  console.log(lines.join('\n'));
}
