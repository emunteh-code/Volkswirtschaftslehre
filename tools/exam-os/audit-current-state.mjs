import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');

const MODULES = [
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

const TRUSTED_CORE = new Set(['mikro1', 'statistik', 'recht', 'oekonometrie']);
const BENCHMARK_SLUG = 'mikro1';

function countStrings(value) {
  if (!value) return 0;
  if (typeof value === 'string') return value.trim() ? 1 : 0;
  if (Array.isArray(value)) return value.reduce((sum, item) => sum + countStrings(item), 0);
  if (typeof value === 'object') return Object.values(value).reduce((sum, item) => sum + countStrings(item), 0);
  return 0;
}

function countLeaves(value) {
  if (!value) return 0;
  if (Array.isArray(value)) return value.length;
  if (typeof value === 'object') return Object.values(value).reduce((sum, item) => sum + countLeaves(item), 0);
  return 0;
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else out.push(full);
    }
  }
  return out.sort();
}

function sourceRefToPath(ref) {
  if (typeof ref === 'string') return ref;
  if (ref && typeof ref === 'object') return ref.path || ref.file || ref.source || ref.href || ref.title || '';
  return '';
}

function collectSourceRefs(value, refs = new Set()) {
  if (!value) return refs;
  if (Array.isArray(value)) {
    for (const item of value) collectSourceRefs(item, refs);
    return refs;
  }
  if (typeof value === 'object') {
    if (Array.isArray(value.source_refs)) {
      for (const ref of value.source_refs) {
        const sourcePath = sourceRefToPath(ref);
        if (sourcePath) refs.add(sourcePath);
      }
    }
    for (const item of Object.values(value)) collectSourceRefs(item, refs);
  }
  return refs;
}

function collectSourceAnchors(value, anchors = new Set()) {
  if (!value) return anchors;
  if (Array.isArray(value)) {
    for (const item of value) collectSourceAnchors(item, anchors);
    return anchors;
  }
  if (typeof value === 'object') {
    if (Array.isArray(value.source_anchors)) {
      for (const anchor of value.source_anchors) {
        const id = anchor?.id || anchor?.sourceId || JSON.stringify(anchor);
        if (id) anchors.add(id);
      }
    }
    for (const item of Object.values(value)) collectSourceAnchors(item, anchors);
  }
  return anchors;
}

function conceptHasAnySourceRef(layers) {
  if (!layers || typeof layers !== 'object') return false;
  return Object.values(layers).some((layer) => Array.isArray(layer?.source_refs) && layer.source_refs.length > 0);
}

function conceptHasAnySourceAnchor(layers) {
  if (!layers || typeof layers !== 'object') return false;
  return Object.values(layers).some((layer) => Array.isArray(layer?.source_anchors) && layer.source_anchors.length > 0);
}

function collectLayerStatuses(layers, statuses = new Map()) {
  if (!layers || typeof layers !== 'object') return statuses;
  for (const layer of Object.values(layers)) {
    if (layer && typeof layer === 'object' && typeof layer.source_status === 'string') {
      statuses.set(layer.source_status, (statuses.get(layer.source_status) || 0) + 1);
    }
  }
  return statuses;
}

async function importModule(slug, file) {
  const url = path.join(repoRoot, slug, 'js/data', file);
  return import(`${url}?audit=${Date.now()}-${Math.random()}`);
}

function summarizeLocalSourceTree() {
  const files = walkFiles(path.join(repoRoot, 'source-materials'));
  const byTopLevel = new Map();
  for (const file of files) {
    const relative = path.relative(path.join(repoRoot, 'source-materials'), file);
    const [topLevel] = relative.split(path.sep);
    byTopLevel.set(topLevel, (byTopLevel.get(topLevel) || 0) + 1);
  }
  return {
    totalFiles: files.length,
    topLevel: Object.fromEntries([...byTopLevel.entries()].sort(([a], [b]) => a.localeCompare(b))),
    files
  };
}

function scoreAgainstBenchmark(moduleSummary, benchmark) {
  const ratio = (a, b) => (b > 0 ? a / b : 0);
  const conceptRatio = ratio(moduleSummary.concepts, benchmark.concepts);
  const formulaRatio = ratio(moduleSummary.formulaBlocks, benchmark.formulaBlocks);
  const taskRatio = ratio(moduleSummary.portalTaskBlocks + moduleSummary.stepDrills, benchmark.portalTaskBlocks + benchmark.stepDrills);
  const provenanceRatio = ratio(moduleSummary.conceptsWithSourceRefs, moduleSummary.concepts || 1);

  const sourceStatus = moduleSummary.missingSourceFiles === 0 && moduleSummary.uniqueSourceFiles > 0 ? 'A' : 'D';
  const conceptStatus = conceptRatio >= 0.9 ? 'A' : conceptRatio >= 0.55 ? 'B' : 'C';
  const formulaStatus = formulaRatio >= 0.9 ? 'A' : formulaRatio >= 0.45 ? 'B' : 'C';
  const taskStatus = taskRatio >= 0.9 ? 'A' : taskRatio >= 0.45 ? 'B' : 'C';
  const provenanceStatus = provenanceRatio >= 1 && sourceStatus === 'A' ? 'B' : provenanceRatio >= 0.9 ? 'C' : 'D';
  const adaptiveStatus = moduleSummary.masteryItems >= moduleSummary.concepts * 3 ? 'B' : 'C';
  const hasCompleteReviewedOfficialTaskSources =
    moduleSummary.officialTaskSourceFamilies > 0 &&
    moduleSummary.officialDocumentRegistryFamilies === 0;
  const sourceAnchorsCoverConcepts = moduleSummary.sourceAnchors >= moduleSummary.concepts && moduleSummary.conceptsWithSourceAnchors === moduleSummary.concepts;
  const canClaimMikro1Depth =
    sourceStatus === 'A' &&
    conceptStatus === 'A' &&
    formulaStatus !== 'C' &&
    taskStatus !== 'C' &&
    sourceAnchorsCoverConcepts &&
    hasCompleteReviewedOfficialTaskSources;

  return {
    conceptGranularity: conceptStatus,
    formulaDepth: formulaStatus,
    taskDepth: taskStatus,
    sourceFilesLocal: sourceStatus,
    provenancePrecision: provenanceStatus,
    mockExamCoverage: moduleSummary.fullExamCount >= 3 ? 'B' : 'C',
    adaptiveMastery: adaptiveStatus,
    mikro1DepthAchieved: canClaimMikro1Depth
      ? 'achieved'
      : moduleSummary.slug === BENCHMARK_SLUG
        ? 'benchmark cockpit; official task-source review pending'
        : sourceStatus === 'A' && conceptStatus === 'A' && formulaStatus !== 'C' && taskStatus !== 'C'
          ? 'near, but official task-source review pending'
          : 'not achieved'
  };
}

async function summarizeModule(slug, localSourceFiles) {
  const [chaptersMod, stepsMod, examsMod, masteryMod, manifestMod, formulaCardsMod, taskFamiliesMod] = await Promise.all([
    importModule(slug, 'chapters.js'),
    importModule(slug, 'stepProblems.js').catch(() => ({})),
    importModule(slug, 'fullExams.js').catch(() => ({})),
    importModule(slug, 'masteryData.js').catch(() => ({})),
    importModule(slug, 'contentManifest.js').catch((error) => ({ __error: error.message })),
    importModule(slug, 'formulaCards.js').catch(() => ({})),
    importModule(slug, 'taskFamilies.js').catch(() => ({}))
  ]);

  const chapters = chaptersMod.CHAPTERS || [];
  let formulaBlocks = 0;
  let portalTaskBlocks = 0;
  let theoryCharacters = 0;
  for (const chapter of chapters) {
    const content = chaptersMod.CONTENT?.[chapter.id] || {};
    formulaBlocks += countStrings(content.formeln);
    portalTaskBlocks += countLeaves(content.aufgaben);
    theoryCharacters += String(content.theorie || '').length;
  }

  const stepDrills = Object.values(stepsMod.STEP_PROBLEMS || {}).reduce(
    (sum, value) => sum + (Array.isArray(value) ? value.length : 0),
    0
  );
  const fullExams = Object.values(examsMod.FULL_EXAMS || {});
  const officialFormulaCards = Array.isArray(formulaCardsMod.FORMULA_CARDS) ? formulaCardsMod.FORMULA_CARDS.length : 0;
  const taskFamilies = Array.isArray(taskFamiliesMod.TASK_FAMILIES) ? taskFamiliesMod.TASK_FAMILIES : [];
  const sourceGroundedTaskFamilies = taskFamilies.filter((item) => item?.sourceStatus === 'direct-source').length;
  const officialTaskSourceFamilies = taskFamilies.filter((item) => item?.officialTaskCoverage === 'official-task-source').length;
  const officialDocumentRegistryFamilies = taskFamilies.filter(
    (item) => item?.officialTaskCoverage === 'official-document-registry'
  ).length;
  const masteryItems = Object.values(masteryMod.MASTERY || {}).reduce(
    (sum, value) => sum + (Array.isArray(value) ? value.length : 0),
    0
  );
  const masteryDimensions = new Set();
  for (const items of Object.values(masteryMod.MASTERY || {})) {
    if (!Array.isArray(items)) continue;
    for (const item of items) {
      if (typeof item === 'string') {
        masteryDimensions.add('recognition');
        continue;
      }
      if (item && typeof item === 'object' && typeof item.dimension === 'string') masteryDimensions.add(item.dimension);
    }
  }
  const provenance = manifestMod.PROVENANCE_BY_CONCEPT || {};
  const conceptsWithSourceRefs = Object.values(provenance).filter(conceptHasAnySourceRef).length;
  const conceptsWithSourceAnchors = Object.values(provenance).filter(conceptHasAnySourceAnchor).length;
  const layerStatuses = new Map();
  for (const layers of Object.values(provenance)) collectLayerStatuses(layers, layerStatuses);

  const refs = [...collectSourceRefs(provenance)].sort();
  const anchors = [...collectSourceAnchors(provenance)].sort();
  const uniqueSourceFiles = [...new Set(refs.map((ref) => path.basename(ref).normalize('NFC')))]
    .filter(Boolean)
    .sort();
  const localBasenames = new Set(localSourceFiles.map((file) => path.basename(file).normalize('NFC')));
  const presentSourceFiles = uniqueSourceFiles.filter((file) => localBasenames.has(file));
  const missingSourceFiles = uniqueSourceFiles.filter((file) => !localBasenames.has(file));

  return {
    slug,
    trustedCore: TRUSTED_CORE.has(slug),
    concepts: chapters.length,
    formulaBlocks,
    officialFormulaCards,
    taskFamilies: taskFamilies.length,
    sourceGroundedTaskFamilies,
    officialTaskSourceFamilies,
    officialDocumentRegistryFamilies,
    portalTaskBlocks,
    stepDrills,
    fullExamCount: fullExams.length,
    masteryItems,
    masteryDimensions: masteryDimensions.size,
    theoryCharacters,
    provenanceConcepts: Object.keys(provenance).length,
    conceptsWithSourceRefs,
    conceptsWithSourceAnchors,
    conceptsWithoutSourceAnchors: Math.max(0, chapters.length - conceptsWithSourceAnchors),
    conceptsWithoutSourceRefs: Math.max(0, chapters.length - conceptsWithSourceRefs),
    sourceRefs: refs.length,
    sourceAnchors: anchors.length,
    uniqueSourceFiles: uniqueSourceFiles.length,
    presentSourceFiles: presentSourceFiles.length,
    missingSourceFiles: missingSourceFiles.length,
    missingSourceFileSamples: missingSourceFiles.slice(0, 10),
    sourceStatusCounts: Object.fromEntries([...layerStatuses.entries()].sort(([a], [b]) => a.localeCompare(b))),
    hasContentManifest: !manifestMod.__error,
    manifestError: manifestMod.__error || null
  };
}

function toMarkdown(report) {
  const lines = [];
  lines.push(`# Exam Operating System Generated Audit — ${report.generatedAt}`);
  lines.push('');
  lines.push('This file is generated by `node tools/exam-os/audit-current-state.mjs --write`.');
  lines.push('');
  lines.push('## Source Tree');
  lines.push('');
  lines.push(`Local source files: **${report.sourceTree.totalFiles}**.`);
  lines.push('');
  lines.push('| Top-level source folder | Files |');
  lines.push('|---|---:|');
  for (const [folder, count] of Object.entries(report.sourceTree.topLevel)) lines.push(`| \`${folder}\` | ${count} |`);
  lines.push('');
  lines.push('## Module Coverage');
  lines.push('');
  lines.push('| Module | Concepts | Formulas | Formula cards | Task families | Tasks | Step drills | Exams | Mastery | Mastery dimensions | Source refs | Page anchors | Source files local | Missing files | Mikro1 depth |');
  lines.push('|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|');
  for (const mod of report.modules) {
    const score = report.scorecard[mod.slug];
    lines.push(
      `| \`${mod.slug}\` | ${mod.concepts} | ${mod.formulaBlocks} | ${mod.officialFormulaCards} | ${mod.taskFamilies} | ${mod.portalTaskBlocks} | ${mod.stepDrills} | ${mod.fullExamCount} | ${mod.masteryItems} | ${mod.masteryDimensions} | ${mod.sourceRefs} | ${mod.sourceAnchors} | ${mod.presentSourceFiles}/${mod.uniqueSourceFiles} | ${mod.missingSourceFiles} | ${score.mikro1DepthAchieved} |`
    );
  }
  lines.push('');
  lines.push('## Scorecard');
  lines.push('');
  lines.push('| Module | Concepts | Formulas | Tasks | Local sources | Provenance | Mock exams | Adaptive |');
  lines.push('|---|---|---|---|---|---|---|---|');
  for (const mod of report.modules) {
    const score = report.scorecard[mod.slug];
    lines.push(
      `| \`${mod.slug}\` | ${score.conceptGranularity} | ${score.formulaDepth} | ${score.taskDepth} | ${score.sourceFilesLocal} | ${score.provenancePrecision} | ${score.mockExamCoverage} | ${score.adaptiveMastery} |`
    );
  }
  lines.push('');
  lines.push('## Missing Source Samples');
  lines.push('');
  for (const mod of report.modules.filter((item) => item.missingSourceFiles > 0)) {
    lines.push(`### \`${mod.slug}\``);
    lines.push('');
    for (const sample of mod.missingSourceFileSamples) lines.push(`- \`${sample}\``);
    if (mod.missingSourceFiles > mod.missingSourceFileSamples.length) {
      lines.push(`- ... ${mod.missingSourceFiles - mod.missingSourceFileSamples.length} more`);
    }
    lines.push('');
  }
  return `${lines.join('\n')}\n`;
}

async function main() {
  const sourceTree = summarizeLocalSourceTree();
  const modules = [];
  for (const slug of MODULES) modules.push(await summarizeModule(slug, sourceTree.files));

  const benchmark = modules.find((item) => item.slug === BENCHMARK_SLUG);
  const scorecard = Object.fromEntries(modules.map((item) => [item.slug, scoreAgainstBenchmark(item, benchmark)]));
  const generatedAt =
    process.env.CURRENT_DATE ||
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/Berlin',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date());
  const report = {
    generatedAt,
    benchmark: BENCHMARK_SLUG,
    sourceTree: {
      totalFiles: sourceTree.totalFiles,
      topLevel: sourceTree.topLevel
    },
    modules,
    scorecard
  };

  const json = `${JSON.stringify(report, null, 2)}\n`;
  if (process.argv.includes('--write')) {
    const auditDir = path.join(repoRoot, 'docs/audits');
    fs.writeFileSync(path.join(auditDir, 'exam-operating-system-current-state.generated.json'), json);
    fs.writeFileSync(path.join(auditDir, 'exam-operating-system-current-state.generated.md'), toMarkdown(report));
  }
  process.stdout.write(json);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
