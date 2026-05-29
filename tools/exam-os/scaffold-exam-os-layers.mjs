import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '../..');
const registryPath = path.join(repoRoot, 'docs/audits/source-corpus-registry.generated.json');

const MODULE_CONFIG = {
  mikro1: { prefix: 'MIKRO1', title: 'Mikroökonomik I', sourceUrl: '../source-materials/Mikroökonomik I/' },
  mikro2: { prefix: 'MIKRO2', title: 'Mikroökonomik II', sourceUrl: '../source-materials/Mikroökonomik II/' },
  makro1: { prefix: 'MAKRO1', title: 'Makroökonomik I', sourceUrl: '../source-materials/Makroökonomik I/' },
  makro2: { prefix: 'MAKRO2', title: 'Makroökonomik II', sourceUrl: '../source-materials/Makroökonomik II/' },
  oekonometrie: { prefix: 'OEKONOMETRIE', title: 'Ökonometrie', sourceUrl: '../source-materials/Ökonometrie/' },
  statistik: { prefix: 'STATISTIK', title: 'Statistik', sourceUrl: '../source-materials/Statistik/' },
  mathematik: { prefix: 'MATHEMATIK', title: 'Mathematik', sourceUrl: '../source-materials/Mathematik/' },
  finanzwirtschaft: { prefix: 'FINANZWIRTSCHAFT', title: 'Finanzwirtschaft', sourceUrl: '../source-materials/Finanzwirtschaft/' },
  jahresabschluss: { prefix: 'JAHRESABSCHLUSS', title: 'Jahresabschluss', sourceUrl: '../source-materials/Jahresabschluss/' },
  recht: { prefix: 'RECHT', title: 'Recht', sourceUrl: '../source-materials/Recht/' },
  'internationale-wirtschaftsbeziehungen': {
    prefix: 'IWB',
    title: 'Internationale Wirtschaftsbeziehungen',
    sourceUrl: '../source-materials/Internationale Wirtschaftsbeziehungen/'
  }
};

function parseArgs(argv) {
  const write = argv.includes('--write');
  const moduleIdx = argv.indexOf('--module');
  const module = moduleIdx >= 0 ? argv[moduleIdx + 1] : null;
  return { write, module };
}

function readChapterIds(moduleSlug) {
  const chaptersPath = path.join(repoRoot, moduleSlug, 'js/data/chapters.js');
  const text = fs.readFileSync(chaptersPath, 'utf8');
  const ids = [];
  const chapterExport = text.match(/export const CHAPTERS\s*=\s*\[([\s\S]*?)\];/);
  if (chapterExport) {
    const idMatches = chapterExport[1].matchAll(/\bid:\s*['"]([^'"]+)['"]/g);
    for (const match of idMatches) ids.push(match[1]);
  }
  if (!ids.length) {
    const contentExport = text.match(/export const CONTENT\s*=\s*\{([\s\S]*?)\n\};/);
    if (contentExport) {
      const keys = contentExport[1].matchAll(/^\s{0,4}([a-z0-9_]+):\s*\{/gm);
      for (const match of keys) ids.push(match[1]);
    }
  }
  return [...new Set(ids)];
}

function registryCounts(moduleSlug) {
  if (!fs.existsSync(registryPath)) return { exercise: 0, solution: 0, tutorial: 0, exam: 0 };
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  const kinds = { exercise: 0, solution: 0, tutorial: 0, exam: 0 };
  for (const doc of registry.sourceDocuments) {
    if (doc.module !== moduleSlug) continue;
    if (kinds[doc.kind] !== undefined) kinds[doc.kind] += 1;
  }
  return kinds;
}

function writeIfMissing(filePath, content) {
  if (fs.existsSync(filePath)) return false;
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content);
  return true;
}

function sourceAnchorsTemplate(prefix, moduleSlug, conceptIds) {
  const entries = conceptIds.map((id) => `  ${id}: []`).join(',\n');
  return `// ============================================================
// SOURCE ANCHORS — ${MODULE_CONFIG[moduleSlug].title}
// Scaffold: empty per-concept arrays. Populate from docs/audits/source-syllabus/${moduleSlug}.generated.json
// after human review (see docs/architecture/mikro1-parity-program.md).
// ============================================================

export const ${prefix}_SOURCE_ANCHORS = Object.freeze({
${entries}
});
`;
}

function formulaCardsTemplate(moduleSlug) {
  return `// ============================================================
// FORMULA CARDS — ${MODULE_CONFIG[moduleSlug].title}
// Scaffold: populate with VL-anchor-grounded cards (direct-source).
// ============================================================

export const FORMULA_CARDS = Object.freeze([]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze({});
`;
}

function officialTaskIngestionTemplate(moduleSlug, prefix, counts) {
  const slug = moduleSlug;
  const pfx = prefix;
  return `import {
  buildOfficialTaskFamilyPlaceholders,
  normalizeOfficialTaskDocuments,
  summarizeOfficialTaskDocuments
} from '../../../assets/js/portal-core/data/officialTaskIngestion.js';
import { CHAPTERS } from './chapters.js';

export const ${pfx}_TASK_PLACEHOLDER_POLICY =
  'Platzhalter sind explizit als non-deceptive markiert und enthalten keine erfundenen Aufgabeninhalte.';

export const ${pfx}_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: ${counts.exercise},
  solution: ${counts.solution},
  tutorial: ${counts.tutorial},
  exam: ${counts.exam}
});

export function normalize${capitalizeSlug(slug)}OfficialTaskDocuments(docs) {
  return normalizeOfficialTaskDocuments(docs, { sourceRoot: 'source-materials' }).filter(
    (doc) => doc.module === '${slug}'
  );
}

export function summarize${capitalizeSlug(slug)}OfficialTaskDocuments(docs) {
  return summarizeOfficialTaskDocuments(normalize${capitalizeSlug(slug)}OfficialTaskDocuments(docs));
}

export function build${capitalizeSlug(slug)}OfficialTaskPlaceholders(docs) {
  const chapterIds = CHAPTERS.slice(0, 1).map((chapter) => chapter.id);
  return buildOfficialTaskFamilyPlaceholders({
    moduleSlug: '${slug}',
    chapterIds,
    documents: normalize${capitalizeSlug(slug)}OfficialTaskDocuments(docs)
  });
}
`;
}

function capitalizeSlug(slug) {
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function taskFamiliesTemplate(moduleSlug, prefix, counts) {
  const fn = `build${capitalizeSlug(moduleSlug)}OfficialTaskPlaceholders`;
  return `import { ${fn} } from './officialTaskIngestion.js';

const ${prefix}_OFFICIAL_TASK_DOC_BASELINE = Object.freeze({
  exercise: ${counts.exercise},
  solution: ${counts.solution},
  tutorial: ${counts.tutorial},
  exam: ${counts.exam}
});

function familyFromPlaceholder(placeholder) {
  return {
    id: placeholder.id,
    module: '${moduleSlug}',
    conceptId: placeholder.conceptId,
    title: \`${MODULE_CONFIG[moduleSlug].title} official-task mapping placeholder (\${placeholder.conceptId})\`,
    topic: 'Official task ingestion',
    method: 'Dokumente sind ingestiert; Konzept-zu-Aufgabe-Mapping wird in einem separaten Task-Mapping-Pass erstellt.',
    sourceStatus: placeholder.sourceStatus,
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: [
      'Ingestion mit vollstaendigem Aufgaben-Mapping verwechseln',
      'Dokumentanzahl als Beleg fuer Konzeptabdeckung lesen'
    ],
    gradingRubric: [
      'Placeholder bleibt explizit als non-deceptive gekennzeichnet',
      'Keine synthetischen Aufgabeninhalte ohne offizielle Zuordnung'
    ],
    currentCoverage: {
      ingestion: \`exercise=\${${prefix}_OFFICIAL_TASK_DOC_BASELINE.exercise}, solution=\${${prefix}_OFFICIAL_TASK_DOC_BASELINE.solution}, tutorial=\${${prefix}_OFFICIAL_TASK_DOC_BASELINE.tutorial}, exam=\${${prefix}_OFFICIAL_TASK_DOC_BASELINE.exam}\`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const PLACEHOLDER_DOCS = [];

export const TASK_FAMILIES = Object.freeze(
  ${fn}(PLACEHOLDER_DOCS).map((placeholder) => familyFromPlaceholder(placeholder))
);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
`;
}

function patchContentManifest(moduleSlug, prefix) {
  const manifestPath = path.join(repoRoot, moduleSlug, 'js/data/contentManifest.js');
  if (!fs.existsSync(manifestPath)) return false;
  let text = fs.readFileSync(manifestPath, 'utf8');
  const importLine = `import { ${prefix}_SOURCE_ANCHORS } from './sourceAnchors.js';`;
  const summaryImport = `import { buildConceptSourceSummaryFromProvenance } from '../../../assets/js/portal-core/features/sourceCompanionCore.js';`;

  if (!text.includes(importLine)) {
    const insertAt = text.indexOf("import { CHAPTERS");
    const at = insertAt >= 0 ? insertAt : text.indexOf('import {');
    text = `${text.slice(0, at)}${importLine}\n${text.slice(at)}`;
  }
  if (!text.includes('buildConceptSourceSummaryFromProvenance')) {
    const insertAt = text.indexOf("import { createProvenance");
    if (insertAt >= 0) {
      text = `${text.slice(0, insertAt)}${summaryImport}\n${text.slice(insertAt)}`;
    }
  }

  if (!text.includes('anchorsByConceptId:')) {
    const marker = 'moduleSlug: MODULE_SLUG,';
    if (text.includes(marker)) {
      text = text.replace(marker, `${marker}\n  anchorsByConceptId: ${prefix}_SOURCE_ANCHORS,`);
    } else {
      text = text.replace(
        /buildProvenanceByConceptFromPrimaryRefs\(\{/,
        `buildProvenanceByConceptFromPrimaryRefs({\n  anchorsByConceptId: ${prefix}_SOURCE_ANCHORS,`
      );
    }
  }

  if (!text.includes('export function getConceptSourceSummary')) {
    text += `

export function getConceptSourceSummary(conceptId) {
  return buildConceptSourceSummaryFromProvenance(getConceptProvenance(conceptId), {
    anchoredTitle: 'Direkte Seitenanker vorhanden.',
    referencedTitle: 'Offizielle Referenz vorhanden, aber noch ohne geprüfte Seitenanker.',
    supplementalTitle: 'Platform-added support ohne direkten offiziellen Quellenanker.',
    platformTitle: 'Platform-added support; VL-Referenz oder Seitenanker fehlt noch.'
  });
}
`;
  }

  fs.writeFileSync(manifestPath, text);
  return true;
}

function patchRenderer(moduleSlug) {
  const rendererPath = path.join(repoRoot, moduleSlug, 'js/ui/renderer.js');
  if (!fs.existsSync(rendererPath)) return false;
  let text = fs.readFileSync(rendererPath, 'utf8');
  const cfg = MODULE_CONFIG[moduleSlug];
  let changed = false;
  const manifestImport = "import { getConceptProvenance } from '../data/contentManifest.js';";
  const manifestImportPatched =
    "import { getConceptProvenance, getConceptSourceSummary } from '../data/contentManifest.js';";

  if (!text.includes('FORMULA_CARDS_BY_CONCEPT')) {
    if (text.includes(manifestImport)) {
      text = text.replace(
        manifestImport,
        `${manifestImportPatched}\nimport { FORMULA_CARDS_BY_CONCEPT } from '../data/formulaCards.js';\nimport { TASK_FAMILIES_BY_CONCEPT } from '../data/taskFamilies.js';`
      );
    } else if (text.includes("from '../data/contentManifest.js'")) {
      text = text.replace(
        /import \{([^}]+)\} from '\.\.\/data\/contentManifest\.js';/,
        (match, names) => {
          const parts = names.split(',').map((s) => s.trim());
          if (!parts.includes('getConceptSourceSummary')) parts.push('getConceptSourceSummary');
          return `import { ${parts.join(', ')} } from '../data/contentManifest.js';\nimport { FORMULA_CARDS_BY_CONCEPT } from '../data/formulaCards.js';\nimport { TASK_FAMILIES_BY_CONCEPT } from '../data/taskFamilies.js';`;
        }
      );
    }
    changed = true;
  }

  if (!text.includes('formulaCardsByConcept')) {
    if (text.includes('getConceptProvenance\n});')) {
      text = text.replace(
        'getConceptProvenance\n});',
        `getConceptProvenance,
  getConceptSourceSummary,
  sourceMaterialBaseUrl: '${cfg.sourceUrl}',
  formulaCardsByConcept: FORMULA_CARDS_BY_CONCEPT,
  taskFamiliesByConcept: TASK_FAMILIES_BY_CONCEPT
});`
      );
    } else if (text.includes('checkAnswer: checkAnswerWithTolerance\n});')) {
      text = text.replace(
        'checkAnswer: checkAnswerWithTolerance\n});',
        `checkAnswer: checkAnswerWithTolerance,
  getConceptSourceSummary,
  sourceMaterialBaseUrl: '${cfg.sourceUrl}',
  formulaCardsByConcept: FORMULA_CARDS_BY_CONCEPT,
  taskFamiliesByConcept: TASK_FAMILIES_BY_CONCEPT
});`
      );
    }
    changed = true;
  }

  if (changed) fs.writeFileSync(rendererPath, text);
  return changed;
}

function scaffoldModule(moduleSlug, write) {
  const cfg = MODULE_CONFIG[moduleSlug];
  if (!cfg) throw new Error(`Unknown module: ${moduleSlug}`);
  const dataDir = path.join(repoRoot, moduleSlug, 'js/data');
  if (!fs.existsSync(dataDir)) {
    console.warn(`Skip ${moduleSlug}: no js/data`);
    return;
  }

  const conceptIds = readChapterIds(moduleSlug);
  const counts = registryCounts(moduleSlug);
  const created = [];

  if (
    writeIfMissing(
      path.join(dataDir, 'sourceAnchors.js'),
      sourceAnchorsTemplate(cfg.prefix, moduleSlug, conceptIds)
    )
  ) {
    created.push('sourceAnchors.js');
  }

  if (writeIfMissing(path.join(dataDir, 'formulaCards.js'), formulaCardsTemplate(moduleSlug))) {
    created.push('formulaCards.js');
  }

  if (writeIfMissing(path.join(dataDir, 'officialTaskIngestion.js'), officialTaskIngestionTemplate(moduleSlug, cfg.prefix, counts))) {
    created.push('officialTaskIngestion.js');
  }

  if (writeIfMissing(path.join(dataDir, 'taskFamilies.js'), taskFamiliesTemplate(moduleSlug, cfg.prefix, counts))) {
    created.push('taskFamilies.js');
  }

  if (write && created.includes('sourceAnchors.js')) {
    patchContentManifest(moduleSlug, cfg.prefix);
    created.push('contentManifest.js (patched)');
  }

  if (write && (created.includes('formulaCards.js') || created.includes('taskFamilies.js'))) {
    if (patchRenderer(moduleSlug)) created.push('renderer.js (patched)');
  }

  console.log(`${moduleSlug}: ${created.length ? created.join(', ') : 'no new files'}`);
}

function main() {
  const { write, module } = parseArgs(process.argv.slice(2));
  if (!write) {
    console.error('Dry run only shows intent. Use --write to create files.');
  }
  const modules = module ? [module] : Object.keys(MODULE_CONFIG);
  for (const slug of modules) {
    if (!write) {
      console.log(`Would scaffold: ${slug}`);
      continue;
    }
    scaffoldModule(slug, true);
  }
}

main();
