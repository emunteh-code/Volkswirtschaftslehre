import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const registryPath = path.join(repoRoot, 'docs/audits/source-corpus-registry.generated.json');
const outDir = path.join(repoRoot, 'docs/audits/source-syllabus');

const PORTAL_MODULES = new Set([
  'mikro1',
  'mikro2',
  'makro1',
  'makro2',
  'oekonometrie',
  'statistik',
  'mathematik',
  'finanzwirtschaft',
  'jahresabschluss',
  'recht',
  'internationale-wirtschaftsbeziehungen'
]);

function sha256(text) {
  return crypto.createHash('sha256').update(text).digest('hex');
}

function countMatches(text, regex) {
  return (text.match(regex) || []).length;
}

function extractPdfPages(file) {
  try {
    const output = execFileSync('pdftotext', ['-layout', '-enc', 'UTF-8', file, '-'], {
      encoding: 'utf8',
      maxBuffer: 80 * 1024 * 1024,
      stdio: ['ignore', 'pipe', 'ignore']
    });
    return output.split('\f');
  } catch {
    return null;
  }
}

function scoreHeadingLine(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.length < 3 || trimmed.length > 140) return -1;
  if (/^[\d\s.\-–—:;|]+$/.test(trimmed)) return -1;
  if (/^(Seite|Page|Folie|Slide)\s+\d+/i.test(trimmed)) return -1;
  let score = 0;
  if (/^\d+(\.\d+)*\s+\S/.test(trimmed)) score += 4;
  if (/^(Kapitel|Kap\.|VL|Vorlesung|Übung|Uebung|Aufgabe|Teil|Teilaufgabe|Definition|Satz|Lemma|Beispiel)\b/i.test(trimmed)) {
    score += 3;
  }
  const words = trimmed.split(/\s+/);
  if (words.length <= 12) score += 2;
  if (words.length <= 6) score += 1;
  const upperRatio = trimmed.replace(/[^A-Za-zÄÖÜäöüß]/g, '').length
    ? [...trimmed.replace(/[^A-Za-zÄÖÜäöüß]/g, '')].filter((c) => c === c.toUpperCase()).length /
      trimmed.replace(/[^A-Za-zÄÖÜäöüß]/g, '').length
    : 0;
  if (upperRatio > 0.6 && trimmed.length < 80) score += 2;
  if (/[=∑∫√≤≥≈$\\]/.test(trimmed)) score -= 2;
  return score;
}

function headingCandidates(pageText, limit = 5) {
  const lines = pageText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const ranked = [];
  for (const line of lines) {
    const score = scoreHeadingLine(line);
    if (score < 2) continue;
    ranked.push({ line, score });
  }
  ranked.sort((a, b) => b.score - a.score || a.line.length - b.line.length);
  const seen = new Set();
  const out = [];
  for (const item of ranked) {
    const key = item.line.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item.line);
    if (out.length >= limit) break;
  }
  return out;
}

function pageOutline(pageText, pageNumber) {
  const normalized = pageText.replace(/\s+/g, ' ').trim();
  const taskSignals = countMatches(
    normalized,
    /\b(Aufgabe|Teilaufgabe|Exercise|Problem|Klausur|Probeklausur|Tutorium|Übung|Übung|Uebung)\b/gi
  );
  const formulaSignals = countMatches(
    normalized,
    /(\b(Funktion|Gleichung|Formel|FOC|SOC|Ableitung|Varianz|Erwartungswert|Elastizität|Nutzen|Kosten|Gewinn|Regression|Schätzer|Schätzer)\b|[=∑∫√≤≥≈])/gi
  );
  return {
    page: pageNumber,
    anchorId: `p${String(pageNumber).padStart(3, '0')}`,
    textHash: `sha256:${sha256(normalized)}`,
    characters: normalized.length,
    extractionHealth: normalized.length < 40 ? 'weak-or-image-only' : 'text-ok',
    taskSignals,
    formulaSignals,
    headingCandidates: headingCandidates(pageText)
  };
}

function buildModuleSyllabus(moduleSlug, documents) {
  const moduleDocs = documents.filter((doc) => doc.module === moduleSlug);
  const byKind = {};
  let totalPages = 0;
  let weakPages = 0;

  for (const doc of moduleDocs) {
    if (doc.extension !== 'pdf') continue;
    const absolute = path.join(repoRoot, doc.path);
    if (!fs.existsSync(absolute)) continue;
    const pages = extractPdfPages(absolute);
    const kind = doc.kind || 'unknown';
    if (!byKind[kind]) byKind[kind] = [];

    if (!pages) {
      byKind[kind].push({
        sourceId: doc.id,
        path: doc.path,
        title: doc.title,
        kind,
        pageCount: doc.pages || 0,
        extractionStatus: 'failed',
        pages: []
      });
      continue;
    }

    const expected = doc.pages || pages.length;
    const outlines = pages.slice(0, expected).map((text, index) => pageOutline(text, index + 1));
    totalPages += outlines.length;
    weakPages += outlines.filter((p) => p.extractionHealth !== 'text-ok').length;

    byKind[kind].push({
      sourceId: doc.id,
      path: doc.path,
      title: doc.title,
      kind,
      pageCount: outlines.length,
      extractionStatus: 'indexed',
      pages: outlines
    });
  }

  return {
    module: moduleSlug,
    generatedAt: process.env.CURRENT_DATE || new Date().toISOString().slice(0, 10),
    policy: 'Heading candidates only; no page text stored. Requires human review before anchor publication.',
    documentCount: moduleDocs.length,
    pdfDocumentsExtracted: Object.values(byKind).flat().length,
    totalPages,
    weakPages,
    documentsByKind: byKind
  };
}

function parseArgs(argv) {
  const write = argv.includes('--write');
  const moduleIdx = argv.indexOf('--module');
  const module = moduleIdx >= 0 ? argv[moduleIdx + 1] : null;
  return { write, module };
}

async function main() {
  const { write, module: onlyModule } = parseArgs(process.argv.slice(2));
  if (!fs.existsSync(registryPath)) {
    console.error('Missing registry. Run: node tools/exam-os/build-source-registry.mjs --write');
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const modules = onlyModule ? [onlyModule] : [...PORTAL_MODULES];

  if (onlyModule && !PORTAL_MODULES.has(onlyModule)) {
    console.error(`Unknown module: ${onlyModule}`);
    process.exit(1);
  }

  fs.mkdirSync(outDir, { recursive: true });
  const summaries = [];

  for (const moduleSlug of modules.sort()) {
    const syllabus = buildModuleSyllabus(moduleSlug, registry.sourceDocuments);
    const outPath = path.join(outDir, `${moduleSlug}.generated.json`);
    if (write) {
      fs.writeFileSync(outPath, `${JSON.stringify(syllabus, null, 2)}\n`);
    }
    summaries.push({
      module: moduleSlug,
      pdfs: syllabus.pdfDocumentsExtracted,
      pages: syllabus.totalPages,
      weakPages: syllabus.weakPages,
      written: write ? outPath : null
    });
    console.log(
      `${moduleSlug}: ${syllabus.pdfDocumentsExtracted} PDFs, ${syllabus.totalPages} pages (${syllabus.weakPages} weak)${write ? ` → ${path.relative(repoRoot, outPath)}` : ''}`
    );
  }

  if (write) {
    const indexPath = path.join(outDir, '_index.generated.json');
    fs.writeFileSync(
      indexPath,
      `${JSON.stringify({ generatedAt: process.env.CURRENT_DATE || new Date().toISOString().slice(0, 10), modules: summaries }, null, 2)}\n`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
