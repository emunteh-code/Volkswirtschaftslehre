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
  const registryKinds = registry.byModule[module.slug]?.kinds || {};
  const pageSummary = pageIndex?.byModule?.[module.slug] || null;
  const pageIndexed = Boolean(pageSummary && pageSummary.pages > 0);
  const concepts = module.concepts || 0;
  const sourceEligibleConcepts = module.sourceEligibleConcepts ?? concepts;
  const sourceBoundaryConcepts = module.sourceBoundaryConcepts || 0;
  const conceptsWithSourceRefs = module.conceptsWithSourceRefs || 0;
  const conceptsWithSourceAnchors = module.conceptsWithSourceAnchors || 0;
  const sourceEligibleConceptsWithSourceRefs = module.sourceEligibleConceptsWithSourceRefs ?? conceptsWithSourceRefs;
  const sourceEligibleConceptsWithSourceAnchors =
    module.sourceEligibleConceptsWithSourceAnchors ?? conceptsWithSourceAnchors;
  const sourceRefCoveragePct = sourceEligibleConcepts
    ? Math.round((sourceEligibleConceptsWithSourceRefs / sourceEligibleConcepts) * 100)
    : 0;
  const sourceAnchorCoveragePct = sourceEligibleConcepts
    ? Math.round((sourceEligibleConceptsWithSourceAnchors / sourceEligibleConcepts) * 100)
    : 0;
  const officialTaskSourceDocs =
    (registryKinds.exercise || 0) + (registryKinds.solution || 0) + (registryKinds.tutorial || 0) + (registryKinds.exam || 0);
  const taskFamilies = module.taskFamilies || 0;
  const officialTaskSourceFamilies = module.officialTaskSourceFamilies || 0;
  const officialDocumentRegistryFamilies = module.officialDocumentRegistryFamilies || 0;
  const moduleMismatchTaskFamilies = module.moduleMismatchTaskFamilies || 0;
  const sourceGroundedTaskFamilies = module.sourceGroundedTaskFamilies || 0;
  const masteryDimensions = module.masteryDimensions || 0;
  const masteryItems = module.masteryItems || 0;
  const officialFormulaCards = module.officialFormulaCards || 0;
  const anchorComplete =
    sourceEligibleConcepts > 0 &&
    sourceEligibleConceptsWithSourceRefs === sourceEligibleConcepts &&
    sourceEligibleConceptsWithSourceAnchors === sourceEligibleConcepts;
  const examBankComplete =
    officialTaskSourceDocs > 0 &&
    officialTaskSourceFamilies >= officialTaskSourceDocs &&
    officialDocumentRegistryFamilies === 0;
  const provenanceComplete = anchorComplete && (module.sourceAnchors || 0) >= concepts;
  const adaptiveReady =
    (masteryDimensions >= 4 || masteryItems >= concepts * 3) &&
    examBankComplete &&
    anchorComplete;
  const scorecardDepth = current.scorecard?.[module.slug]?.mikro1DepthAchieved || '';
  const mikro1DepthAchieved = scorecardDepth === 'achieved';
  const anchorStatus = anchorComplete ? 'complete' : conceptsWithSourceAnchors > 0 ? 'partial' : 'missing';
  const examBankStatus = examBankComplete
    ? 'complete'
    : officialTaskSourceFamilies === 0 && officialTaskSourceDocs > 0
      ? `official source docs present; no reviewed official-task-source families${moduleMismatchTaskFamilies ? `; ${moduleMismatchTaskFamilies} module-mismatch document(s) need review` : ''}`
      : officialTaskSourceFamilies === 0 && officialTaskSourceDocs === 0
        ? 'official task source corpus missing or unavailable'
        : officialTaskSourceDocs > 0 && officialDocumentRegistryFamilies > 0
          ? `official-task-source pilot present (${officialTaskSourceFamilies}); ${officialDocumentRegistryFamilies} document-registry placeholders still unresolved${moduleMismatchTaskFamilies ? `; ${moduleMismatchTaskFamilies} module-mismatch document(s) need review` : ''}`
          : officialTaskSourceDocs > 0
            ? `official sources present; reviewed families ${officialTaskSourceFamilies}/${officialTaskSourceDocs}${moduleMismatchTaskFamilies ? `; ${moduleMismatchTaskFamilies} module-mismatch document(s) need review` : ''}`
          : 'task families only; official tasks missing';
  const provenanceStatus = provenanceComplete
    ? 'complete'
    : conceptsWithSourceRefs > 0 || conceptsWithSourceAnchors > 0
      ? 'partial'
      : 'missing';
  const adaptiveStatus = adaptiveReady
    ? 'ready'
    : masteryDimensions >= 4 || masteryItems >= concepts * 3
      ? 'mastery items present; exam-bank or anchor gate open'
      : 'missing dimension model';
  return {
    module: module.slug,
    sourceComplete,
    registryDocs,
    officialTaskSourceDocs,
    pageIndexed,
    sourcePages: pageSummary?.pages || 0,
    weakSourcePages: pageSummary?.weakPages || 0,
    taskSignalPages: pageSummary?.taskSignalPages || 0,
    formulaSignalPages: pageSummary?.formulaSignalPages || 0,
    concepts,
    sourceEligibleConcepts,
    sourceBoundaryConcepts,
    conceptsWithSourceRefs,
    conceptsWithSourceAnchors,
    sourceEligibleConceptsWithSourceRefs,
    sourceEligibleConceptsWithSourceAnchors,
    sourceRefCoveragePct,
    sourceAnchorCoveragePct,
    sourceAnchors: module.sourceAnchors || 0,
    taskFamilies,
    sourceGroundedTaskFamilies,
    officialTaskSourceFamilies,
    officialDocumentRegistryFamilies,
    moduleMismatchTaskFamilies,
    officialFormulaCards,
    masteryDimensions,
    anchorComplete,
    anchorStatus,
    examBankComplete,
    examBankStatus,
    provenanceComplete,
    provenanceStatus,
    adaptiveReady,
    adaptiveStatus,
    mikro1DepthAchieved,
    scorecardDepth
  };
});

const report = {
  generatedAt: current.generatedAt,
  definitionOfDone:
    'A module is final only when sourceComplete, pageIndexed, anchorComplete, examBankComplete, provenanceComplete, adaptiveReady, and mikro1DepthAchieved are all true. Exam-bank completeness requires reviewed official-task-source families, not only portal simulations or document registry metadata.',
  modules,
  blockers: modules.flatMap((module) => {
    const blockers = [];
    if (!module.sourceComplete) blockers.push('source files missing');
    if (!module.pageIndexed) blockers.push('source pages not indexed');
    if (!module.anchorComplete) blockers.push(`page/slide/task anchors incomplete (${module.sourceAnchorCoveragePct}% concept coverage)`);
    if (!module.examBankComplete) blockers.push(`official exam bank incomplete (${module.examBankStatus})`);
    if (!module.provenanceComplete) blockers.push(`item-level provenance incomplete (${module.provenanceStatus})`);
    if (!module.adaptiveReady) blockers.push(`adaptive mastery not evidence-based (${module.adaptiveStatus})`);
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
  lines.push('## Evidence Snapshot');
  lines.push('');
  lines.push('| Module | Source-eligible concepts | Platform boundary concepts | Ref coverage | Anchor coverage | Page anchors | Task families | Official task docs | Document-registry families | Module-mismatch docs | Official task families | Formula cards | Mastery dimensions |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|');
  for (const module of value.modules) {
    lines.push(
      `| \`${module.module}\` | ${module.sourceEligibleConcepts} | ${module.sourceBoundaryConcepts} | ${module.sourceRefCoveragePct}% | ${module.sourceAnchorCoveragePct}% | ${module.sourceAnchors} | ${module.taskFamilies} | ${module.officialTaskSourceDocs} | ${module.officialDocumentRegistryFamilies} | ${module.moduleMismatchTaskFamilies} | ${module.officialTaskSourceFamilies} | ${module.officialFormulaCards} | ${module.masteryDimensions} |`
    );
  }
  lines.push('');
  lines.push('## Gate Status Detail');
  lines.push('');
  lines.push('| Module | Anchor status | Exam-bank status | Provenance status | Adaptive status | Scorecard depth |');
  lines.push('|---|---|---|---|---|---|');
  for (const module of value.modules) {
    lines.push(
      `| \`${module.module}\` | ${module.anchorStatus} | ${module.examBankStatus} | ${module.provenanceStatus} | ${module.adaptiveStatus} | ${module.scorecardDepth || 'not certified'} |`
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
