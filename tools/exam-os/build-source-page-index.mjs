import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const registryPath = path.join(repoRoot, 'docs/audits/source-corpus-registry.generated.json');

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

function pageSummary(pageText, pageNumber) {
  const normalized = pageText.replace(/\s+/g, ' ').trim();
  const lines = pageText.split(/\r?\n/).filter((line) => line.trim());
  const taskSignals = countMatches(
    normalized,
    /\b(Aufgabe|Teilaufgabe|Exercise|Problem|Klausur|Probeklausur|Tutorium|Übung|Übung|Uebung)\b/gi
  );
  const formulaSignals = countMatches(
    normalized,
    /(\b(Funktion|Gleichung|Formel|FOC|SOC|Ableitung|Varianz|Erwartungswert|Elastizität|Nutzen|Kosten|Gewinn|Regression|Schätzer|Schätzer)\b|[=∑∫√≤≥≈])/gi
  );
  const graphSignals = countMatches(normalized, /\b(Abbildung|Figure|Graph|Diagramm|Kurve|Achse|Steigung)\b/gi);

  return {
    page: pageNumber,
    textHash: `sha256:${sha256(normalized)}`,
    characters: normalized.length,
    lines: lines.length,
    extractionHealth: normalized.length < 40 ? 'weak-or-image-only' : 'text-ok',
    taskSignals,
    formulaSignals,
    graphSignals,
    anchorId: `p${String(pageNumber).padStart(3, '0')}`
  };
}

function buildPageIndex() {
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const documents = [];
  const totals = {
    pdfDocuments: 0,
    indexedPdfDocuments: 0,
    failedPdfDocuments: 0,
    pages: 0,
    weakPages: 0,
    taskSignalPages: 0,
    formulaSignalPages: 0,
    graphSignalPages: 0
  };

  for (const doc of registry.sourceDocuments) {
    if (doc.extension !== 'pdf') continue;
    totals.pdfDocuments += 1;
    const absolute = path.join(repoRoot, doc.path);
    const pages = extractPdfPages(absolute);
    if (!pages) {
      totals.failedPdfDocuments += 1;
      documents.push({
        sourceId: doc.id,
        module: doc.module,
        kind: doc.kind,
        path: doc.path,
        pageCount: doc.pages,
        extractionStatus: 'failed',
        pages: []
      });
      continue;
    }

    const expectedPages = doc.pages || pages.length;
    const summaries = pages
      .slice(0, expectedPages)
      .map((pageText, index) => pageSummary(pageText, index + 1));
    totals.indexedPdfDocuments += 1;
    totals.pages += summaries.length;
    totals.weakPages += summaries.filter((page) => page.extractionHealth !== 'text-ok').length;
    totals.taskSignalPages += summaries.filter((page) => page.taskSignals > 0).length;
    totals.formulaSignalPages += summaries.filter((page) => page.formulaSignals > 0).length;
    totals.graphSignalPages += summaries.filter((page) => page.graphSignals > 0).length;

    documents.push({
      sourceId: doc.id,
      module: doc.module,
      kind: doc.kind,
      path: doc.path,
      pageCount: summaries.length,
      extractionStatus: 'indexed',
      weakPageCount: summaries.filter((page) => page.extractionHealth !== 'text-ok').length,
      taskSignalPageCount: summaries.filter((page) => page.taskSignals > 0).length,
      formulaSignalPageCount: summaries.filter((page) => page.formulaSignals > 0).length,
      graphSignalPageCount: summaries.filter((page) => page.graphSignals > 0).length,
      pages: summaries
    });
  }

  const byModule = {};
  for (const doc of documents) {
    byModule[doc.module] ||= {
      pdfDocuments: 0,
      pages: 0,
      weakPages: 0,
      taskSignalPages: 0,
      formulaSignalPages: 0,
      graphSignalPages: 0
    };
    byModule[doc.module].pdfDocuments += 1;
    byModule[doc.module].pages += doc.pageCount || 0;
    byModule[doc.module].weakPages += doc.weakPageCount || 0;
    byModule[doc.module].taskSignalPages += doc.taskSignalPageCount || 0;
    byModule[doc.module].formulaSignalPages += doc.formulaSignalPageCount || 0;
    byModule[doc.module].graphSignalPages += doc.graphSignalPageCount || 0;
  }

  return {
    generatedAt:
      process.env.CURRENT_DATE ||
      new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Europe/Berlin',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(new Date()),
    sourceRegistry: path.relative(repoRoot, registryPath),
    note:
      'No page text is stored here. Page records contain extraction health, signal counts, and text fingerprints for anchor review.',
    totals,
    byModule: Object.fromEntries(Object.entries(byModule).sort(([a], [b]) => a.localeCompare(b))),
    documents
  };
}

function toMarkdown(index) {
  const lines = [];
  lines.push(`# Source Page Index — ${index.generatedAt}`);
  lines.push('');
  lines.push('Generated by `node tools/exam-os/build-source-page-index.mjs --write`.');
  lines.push('');
  lines.push(index.note);
  lines.push('');
  lines.push('## Totals');
  lines.push('');
  lines.push('| Metric | Value |');
  lines.push('|---|---:|');
  for (const [key, value] of Object.entries(index.totals)) lines.push(`| ${key} | ${value} |`);
  lines.push('');
  lines.push('## By Module');
  lines.push('');
  lines.push('| Module | PDFs | Pages | Weak pages | Task pages | Formula pages | Graph pages |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|');
  for (const [module, summary] of Object.entries(index.byModule)) {
    lines.push(
      `| \`${module}\` | ${summary.pdfDocuments} | ${summary.pages} | ${summary.weakPages} | ${summary.taskSignalPages} | ${summary.formulaSignalPages} | ${summary.graphSignalPages} |`
    );
  }
  lines.push('');
  lines.push('## Documents');
  lines.push('');
  lines.push('| Module | Kind | Pages | Weak | Task | Formula | Graph | Path |');
  lines.push('|---|---|---:|---:|---:|---:|---:|---|');
  for (const doc of index.documents) {
    lines.push(
      `| \`${doc.module}\` | ${doc.kind} | ${doc.pageCount || 0} | ${doc.weakPageCount || 0} | ${doc.taskSignalPageCount || 0} | ${doc.formulaSignalPageCount || 0} | ${doc.graphSignalPageCount || 0} | \`${doc.path}\` |`
    );
  }
  return `${lines.join('\n')}\n`;
}

function main() {
  const index = buildPageIndex();
  const json = `${JSON.stringify(index, null, 2)}\n`;
  if (process.argv.includes('--write')) {
    const auditDir = path.join(repoRoot, 'docs/audits');
    fs.writeFileSync(path.join(auditDir, 'source-page-index.generated.json'), json);
    fs.writeFileSync(path.join(auditDir, 'source-page-index.generated.md'), toMarkdown(index));
  }
  process.stdout.write(json);
}

main();
