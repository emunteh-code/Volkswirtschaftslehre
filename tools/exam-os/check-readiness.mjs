import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(repoRoot, relativePath), 'utf8'));
}

const current = readJson('docs/audits/exam-operating-system-current-state.generated.json');
const registry = readJson('docs/audits/source-corpus-registry.generated.json');
const pageIndex = fs.existsSync(path.join(repoRoot, 'docs/audits/source-page-index.generated.json'))
  ? readJson('docs/audits/source-page-index.generated.json')
  : null;

const modules = current.modules.map((module) => {
  const sourceComplete = module.missingSourceFiles === 0 && module.uniqueSourceFiles > 0;
  const registryDocs = registry.byModule[module.slug]?.documents || 0;
  const pageSummary = pageIndex?.byModule?.[module.slug] || null;
  const pageIndexed = Boolean(pageSummary && pageSummary.pages > 0);
  const anchorComplete = false;
  const examBankComplete = false;
  const provenanceComplete = false;
  const adaptiveReady = false;
  const mikro1DepthAchieved = false;
  return {
    module: module.slug,
    sourceComplete,
    registryDocs,
    pageIndexed,
    sourcePages: pageSummary?.pages || 0,
    weakSourcePages: pageSummary?.weakPages || 0,
    taskSignalPages: pageSummary?.taskSignalPages || 0,
    formulaSignalPages: pageSummary?.formulaSignalPages || 0,
    anchorComplete,
    examBankComplete,
    provenanceComplete,
    adaptiveReady,
    mikro1DepthAchieved
  };
});

const report = {
  generatedAt: current.generatedAt,
  definitionOfDone:
    'A module is final only when sourceComplete, pageIndexed, anchorComplete, examBankComplete, provenanceComplete, adaptiveReady, and mikro1DepthAchieved are all true.',
  modules,
  blockers: modules.flatMap((module) => {
    const blockers = [];
    if (!module.sourceComplete) blockers.push('source files missing');
    if (!module.pageIndexed) blockers.push('source pages not indexed');
    if (!module.anchorComplete) blockers.push('page/slide/task anchors incomplete');
    if (!module.examBankComplete) blockers.push('official exam bank incomplete');
    if (!module.provenanceComplete) blockers.push('item-level provenance incomplete');
    if (!module.adaptiveReady) blockers.push('adaptive mastery not evidence-based');
    if (!module.mikro1DepthAchieved) blockers.push('Mikro1-depth equality not certified');
    return blockers.map((reason) => ({ module: module.module, reason }));
  })
};

function toMarkdown(value) {
  const lines = [];
  lines.push(`# Exam Operating System Readiness Gate — ${value.generatedAt}`);
  lines.push('');
  lines.push(value.definitionOfDone);
  lines.push('');
  lines.push('## Module Gates');
  lines.push('');
  lines.push(
    '| Module | Source | Pages | Anchors | Exam bank | Provenance | Adaptive | Mikro1 depth | Weak pages | Task pages | Formula pages |'
  );
  lines.push('|---|---|---|---|---|---|---|---|---:|---:|---:|');
  for (const module of value.modules) {
    lines.push(
      `| \`${module.module}\` | ${module.sourceComplete ? 'yes' : 'no'} | ${module.pageIndexed ? 'yes' : 'no'} | ${module.anchorComplete ? 'yes' : 'no'} | ${module.examBankComplete ? 'yes' : 'no'} | ${module.provenanceComplete ? 'yes' : 'no'} | ${module.adaptiveReady ? 'yes' : 'no'} | ${module.mikro1DepthAchieved ? 'yes' : 'no'} | ${module.weakSourcePages} | ${module.taskSignalPages} | ${module.formulaSignalPages} |`
    );
  }
  lines.push('');
  lines.push('## Blockers');
  lines.push('');
  for (const blocker of value.blockers) lines.push(`- \`${blocker.module}\`: ${blocker.reason}`);
  return `${lines.join('\n')}\n`;
}

if (process.argv.includes('--write')) {
  fs.writeFileSync(
    path.join(repoRoot, 'docs/audits/exam-operating-system-readiness.generated.json'),
    `${JSON.stringify(report, null, 2)}\n`
  );
  fs.writeFileSync(
    path.join(repoRoot, 'docs/audits/exam-operating-system-readiness.generated.md'),
    toMarkdown(report)
  );
}

process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);

if (process.argv.includes('--strict') && report.blockers.length > 0) {
  process.exitCode = 1;
}
