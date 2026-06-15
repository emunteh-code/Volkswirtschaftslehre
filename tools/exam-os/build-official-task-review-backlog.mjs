/**
 * Build the official task-source promotion backlog.
 *
 * This is report-only. It does not promote any task family to
 * official-task-source; promotion still requires OCR/native text plus
 * human review according to docs/architecture/official-exam-policy.md.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const OFFICIAL_TASK_KINDS = new Set(['exercise', 'solution', 'tutorial', 'exam']);
const KIND_WEIGHT = {
  exam: 1000,
  exercise: 800,
  tutorial: 650,
  solution: 500
};

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
}

function germanToday() {
  return (
    process.env.CURRENT_DATE ||
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date())
  );
}

function pct(part, total) {
  return total ? Math.round((part / total) * 100) : 0;
}

function docKey(doc) {
  return doc?.id || doc?.path || '';
}

function isKnownNonItemTemplate(doc) {
  const pathValue = String(doc?.path || '');
  return /Mikro[öo]konomik I\/Weitere_Unterlagen\/Klausur_Mikro1_ohneechtentext\.pdf$/i.test(pathValue);
}

function knownModuleMismatch(doc) {
  const pathValue = String(doc?.path || '');
  if (/Makro[öo]konomik I\/Klausur_Februar_2024_260119_141838\.pdf$/i.test(pathValue) && doc?.module !== 'makro2') {
    return {
      expectedModule: 'makro2',
      evidence:
        'PDF footer says "Klausur Makroökonomik 2"; task topics include open-economy IS-LM, Barro-Gordon, debt dynamics, and Solow.'
    };
  }
  return null;
}

function reviewStage(doc) {
  if (!doc) return 'missing';
  if (isKnownNonItemTemplate(doc)) return 'template-not-item-bank';
  if (knownModuleMismatch(doc)) return 'module-mismatch-review-needed';
  if (doc.pageCount && doc.weakPageCount === 0 && doc.taskSignalPageCount > 0) return 'ready-for-human-task-mapping';
  if (doc.pageCount && doc.weakPageCount === 0) return 'ready-for-human-review';
  if (doc.pageCount && doc.weakPageCount > 0) return 'ocr-needed-before-review';
  return 'non-pdf-or-image-review-needed';
}

function priorityScore(doc, registryDoc) {
  if (isKnownNonItemTemplate(registryDoc) || isKnownNonItemTemplate(doc)) return 1;
  if (knownModuleMismatch(registryDoc) || knownModuleMismatch(doc)) return 2;
  const kind = registryDoc?.kind || doc?.kind || '';
  const base = KIND_WEIGHT[kind] || 100;
  const taskSignals = doc?.taskSignalPageCount || 0;
  const pages = doc?.pageCount || registryDoc?.pages || 0;
  const weak = doc?.weakPageCount || 0;
  return base + taskSignals * 20 + Math.min(pages, 80) - weak * 5;
}

function buildBacklog() {
  const generatedAt = germanToday();
  const registry = readJson('docs/audits/source-corpus-registry.generated.json');
  const pageIndex = readJson('docs/audits/source-page-index.generated.json');
  const currentState = readJson('docs/audits/exam-operating-system-current-state.generated.json');

  const pageDocsById = new Map((pageIndex.documents || []).map((doc) => [doc.sourceId, doc]));
  const currentByModule = new Map((currentState.modules || []).map((module) => [module.slug, module]));
  const liveModuleSet = new Set(currentByModule.keys());
  const modules = [...liveModuleSet].sort((a, b) => a.localeCompare(b));

  const documents = (registry.sourceDocuments || [])
    .filter((doc) => liveModuleSet.has(doc.module))
    .filter((doc) => OFFICIAL_TASK_KINDS.has(doc.kind))
    .map((doc) => {
      const pageDoc = pageDocsById.get(doc.id) || null;
      const stage = reviewStage(pageDoc || doc);
      const mismatch = knownModuleMismatch(doc) || knownModuleMismatch(pageDoc);
      return {
        id: doc.id,
        module: doc.module,
        moduleTitle: doc.moduleTitle,
        kind: doc.kind,
        title: doc.title,
        group: doc.group || 'root',
        path: doc.path,
        extension: doc.extension,
        registryPages: doc.pages || null,
        pageCount: pageDoc?.pageCount || doc.pages || 0,
        weakPageCount: pageDoc?.weakPageCount || 0,
        taskSignalPageCount: pageDoc?.taskSignalPageCount || 0,
        formulaSignalPageCount: pageDoc?.formulaSignalPageCount || 0,
        extractionStatus: pageDoc?.extractionStatus || doc.extractionStatus || 'unknown',
        reviewStage: stage,
        priorityScore: priorityScore(pageDoc, doc),
        expectedModule: mismatch?.expectedModule || null,
        reviewNote: mismatch?.evidence || null
      };
    })
    .sort((a, b) => b.priorityScore - a.priorityScore || String(a.path).localeCompare(String(b.path), 'de', { numeric: true }));

  const byModule = modules.map((module) => {
    const docs = documents.filter((doc) => doc.module === module);
    const current = currentByModule.get(module) || {};
    const missingCorpus = docs.length === 0;
    const weakPageCount = docs.reduce((sum, doc) => sum + doc.weakPageCount, 0);
    const pageCount = docs.reduce((sum, doc) => sum + doc.pageCount, 0);
    const taskSignalPageCount = docs.reduce((sum, doc) => sum + doc.taskSignalPageCount, 0);
    const readyForMapping = docs.filter((doc) => doc.reviewStage === 'ready-for-human-task-mapping').length;
    const ocrNeeded = docs.filter((doc) => doc.reviewStage === 'ocr-needed-before-review').length;
    const imageOrNonPdf = docs.filter((doc) => doc.reviewStage === 'non-pdf-or-image-review-needed').length;
    const moduleMismatch = docs.filter((doc) => doc.reviewStage === 'module-mismatch-review-needed').length;
    return {
      module,
      officialTaskDocuments: docs.length,
      officialTaskSourceFamilies: current.officialTaskSourceFamilies || 0,
      documentRegistryFamilies: current.officialDocumentRegistryFamilies || 0,
      pageCount,
      weakPageCount,
      weakPagePct: pct(weakPageCount, pageCount),
      taskSignalPageCount,
      readyForMapping,
      ocrNeeded,
      imageOrNonPdf,
      moduleMismatch,
      missingCorpus,
      nextAction: missingCorpus
        ? 'Upload official exercises, tutorials, solutions, or exams before this module can reach final exam-bank completeness.'
        : moduleMismatch > 0 && readyForMapping === 0
          ? 'Resolve module-mismatch documents before item-level task promotion.'
        : readyForMapping > 0
          ? 'Start human task-family mapping on ready documents with task signals.'
          : ocrNeeded > 0
            ? 'Run OCR or manual transcription before task-family mapping.'
            : 'Review documents manually and classify task relevance.'
    };
  });

  return {
    generatedAt,
    policy: 'No official-task-source promotion without OCR/native text plus human review log.',
    totals: {
      officialTaskDocuments: documents.length,
      modulesWithTaskCorpus: byModule.filter((module) => module.officialTaskDocuments > 0).length,
      modulesMissingTaskCorpus: byModule.filter((module) => module.missingCorpus).length,
      officialTaskSourceFamilies: byModule.reduce((sum, module) => sum + module.officialTaskSourceFamilies, 0),
      weakPages: byModule.reduce((sum, module) => sum + module.weakPageCount, 0),
      taskSignalPages: byModule.reduce((sum, module) => sum + module.taskSignalPageCount, 0),
      moduleMismatchDocuments: byModule.reduce((sum, module) => sum + module.moduleMismatch, 0)
    },
    byModule,
    documents
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push(`# Official Task-Source Review Backlog — ${report.generatedAt}`);
  lines.push('');
  lines.push('This file is generated by `node tools/exam-os/build-official-task-review-backlog.mjs --write`.');
  lines.push('');
  lines.push(`Policy: **${report.policy}**`);
  lines.push('');
  lines.push('## Fleet Summary');
  lines.push('');
  lines.push(`- Official task documents in registry: **${report.totals.officialTaskDocuments}**`);
  lines.push(`- Modules with task corpus: **${report.totals.modulesWithTaskCorpus}**`);
  lines.push(`- Modules missing task corpus: **${report.totals.modulesMissingTaskCorpus}**`);
  lines.push(`- Reviewed official-task-source families: **${report.totals.officialTaskSourceFamilies}**`);
  lines.push(`- Weak pages inside official task docs: **${report.totals.weakPages}**`);
  lines.push(`- Task-signal pages inside official task docs: **${report.totals.taskSignalPages}**`);
  lines.push(`- Module-mismatch documents needing review: **${report.totals.moduleMismatchDocuments}**`);
  lines.push('');
  lines.push('## Module Queue');
  lines.push('');
  lines.push('| Module | Task docs | Registry families | Official task-source families | Pages | Weak | Task-signal pages | Ready docs | OCR docs | Module mismatch | Next action |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|');
  for (const module of report.byModule) {
    lines.push(
      `| \`${module.module}\` | ${module.officialTaskDocuments} | ${module.documentRegistryFamilies} | ${module.officialTaskSourceFamilies} | ${module.pageCount} | ${module.weakPageCount} (${module.weakPagePct}%) | ${module.taskSignalPageCount} | ${module.readyForMapping} | ${module.ocrNeeded} | ${module.moduleMismatch} | ${module.nextAction} |`
    );
  }
  lines.push('');
  lines.push('## Highest-Priority Documents');
  lines.push('');
  lines.push('| Priority | Module | Kind | Title | Pages | Weak | Task signals | Review stage | Expected module | Path |');
  lines.push('|---:|---|---|---|---:|---:|---:|---|---|---|');
  for (const doc of report.documents.slice(0, 60)) {
    lines.push(
      `| ${doc.priorityScore} | \`${doc.module}\` | ${doc.kind} | ${doc.title} | ${doc.pageCount || ''} | ${doc.weakPageCount} | ${doc.taskSignalPageCount} | ${doc.reviewStage} | ${doc.expectedModule ? `\`${doc.expectedModule}\`` : ''} | \`${doc.path}\` |`
    );
  }
  lines.push('');
  lines.push('## Promotion Checklist');
  lines.push('');
  lines.push('1. Extract reliable text for the document or page range.');
  lines.push('2. Human-review the task wording, solution route, point scheme, and common traps.');
  lines.push('3. Create task-family entries with `officialTaskCoverage: "official-task-source"`.');
  lines.push('4. Attach source anchors, `quoteFingerprint`, reviewer, and review date.');
  lines.push('5. Re-run `audit-current-state.mjs` and `check-readiness.mjs --strict`.');
  lines.push('');
  return `${lines.join('\n')}\n`;
}

const report = buildBacklog();

if (process.argv.includes('--write')) {
  const auditDir = path.join(repoRoot, 'docs/audits');
  fs.writeFileSync(path.join(auditDir, 'official-task-source-review-backlog.generated.json'), `${JSON.stringify(report, null, 2)}\n`);
  fs.writeFileSync(path.join(auditDir, 'official-task-source-review-backlog.generated.md'), toMarkdown(report));
}

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
