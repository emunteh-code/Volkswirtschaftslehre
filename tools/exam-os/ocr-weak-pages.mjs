/**
 * OCR backlog report from source-page-index (no OCR execution).
 * Usage: node tools/exam-os/ocr-weak-pages.mjs [--write]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');
const indexPath = path.join(repoRoot, 'docs/audits/source-page-index.generated.json');
const outPath = path.join(repoRoot, 'docs/audits/ocr-weak-pages-backlog.generated.md');

function main() {
  if (!fs.existsSync(indexPath)) {
    console.error('Missing source-page-index.generated.json — run build-source-page-index.mjs --write first.');
    process.exit(1);
  }
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
  const lines = [
    '# OCR / weak-page backlog',
    '',
    '## Executive summary',
    '',
    '- **Fleet `official-task-source` count:** 0 — no exam item promoted without OCR + human review.',
    '- **Automation:** `ocr-weak-pages.mjs` refreshes counts from `source-page-index.generated.json` only (no Tesseract in CI).',
    '- **Promotion workflow:** OCR text (off-repo) → reviewer maps item → `direct-source` + anchors → `audit-current-state.mjs` shows increment.',
    '- **Blocked:** Mikro1 Probeklausur JPGs until `MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`.',
    '- **Priority modules (weak-page %):** see table below — oekonometrie, statistik, mikro2 lead.',
    '',
    `Generated from page index (${new Date().toISOString().slice(0, 10)}).`,
    ''
  ];
  lines.push('| Module | Weak pages | Total pages | % weak |');
  lines.push('|---|---:|---:|---:|');
  let totalWeak = 0;
  let totalPages = 0;
  for (const [slug, summary] of Object.entries(index.byModule || {}).sort(([a], [b]) => a.localeCompare(b))) {
    const weak = summary.weakPages || 0;
    const pages = summary.pages || 0;
    totalWeak += weak;
    totalPages += pages;
    const pct = pages ? Math.round((weak / pages) * 100) : 0;
    lines.push(`| \`${slug}\` | ${weak} | ${pages} | ${pct}% |`);
  }
  lines.push('', `**Fleet total:** ${totalWeak} weak / ${totalPages} indexed pages.`, '');
  lines.push('## Policy', '');
  lines.push('- No `official-task-source` families until page text is extracted and human-reviewed.');
  lines.push('- Mikro1 Probeklausur JPGs remain blocked (`MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`).', '');
  lines.push('## Next implementation', '');
  lines.push('1. Tesseract or cloud OCR batch on `weak-or-image-only` pages.', '');
  lines.push('2. Store extracted text outside git; link via `quoteFingerprint` + review log.', '');
  lines.push('3. Promote document-registry families to item-level `official-task-source` after review.', '');
  lines.push('## Status (2026-05-30 closure pass)', '');
  lines.push('- **Automation run:** `ocr-weak-pages.mjs --write` refreshed counts from `source-page-index.generated.json` (report-only; no Tesseract batch executed).', '');
  lines.push('- **official-task-source:** fleet count remains **0** — no item promoted without OCR text + human review evidence.', '');
  lines.push('- **Highest-yield backlog (weak %):** `oekonometrie` (14%), `statistik` (6%), `mikro2` (4%) — prioritize Probeklausur/Übung PDFs when OCR pipeline is wired.', '');
  lines.push('- **Blocked:** Mikro1 Probeklausur JPGs (`MIKRO1_PROBEKLAUSUR_REVIEW_STATUS`); finanz/jahresabschluss/makro2 have low weak-page rates but still need human mapping for any exam-item promotion.', '');

  const md = `${lines.join('\n')}\n`;
  if (process.argv.includes('--write')) {
    fs.writeFileSync(outPath, md);
    console.log(`Wrote ${outPath}`);
  } else {
    console.log(md);
  }
}

main();
