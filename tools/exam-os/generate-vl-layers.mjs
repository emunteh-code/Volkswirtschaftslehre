/**
 * Generate formulaCards.js and taskFamilies.js from existing sourceAnchors + chapter formeln.
 * Source-faithful: uses only anchor metadata and existing portal formeln blocks.
 *
 * Usage: node tools/exam-os/generate-vl-layers.mjs --module statistik --write
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const FLEET_SLUGS = [
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
];

const MODULE_META = Object.fromEntries(
  [
    ['mikro1', 'MIKRO1', 'Mikroökonomik I', 'Mikroökonomik I'],
    ['mikro2', 'MIKRO2', 'Mikroökonomik II', 'Mikroökonomik II'],
    ['makro1', 'MAKRO1', 'Makroökonomik I', 'Makroökonomik I'],
    ['makro2', 'MAKRO2', 'Makroökonomik II', 'Makroökonomik II'],
    ['oekonometrie', 'OEKONOMETRIE', 'Ökonometrie', 'Ökonometrie'],
    ['statistik', 'STATISTIK', 'Statistik', 'Statistik'],
    ['mathematik', 'MATHEMATIK', 'Mathematik', 'Mathematik'],
    ['finanzwirtschaft', 'FINANZWIRTSCHAFT', 'Finanzwirtschaft', 'Finanzwirtschaft'],
    ['jahresabschluss', 'JAHRESABSCHLUSS', 'Jahresabschluss', 'Jahresabschluss'],
    ['recht', 'RECHT', 'Recht', 'Recht'],
    [
      'internationale-wirtschaftsbeziehungen',
      'IWB',
      'Internationale Wirtschaftsbeziehungen',
      'Internationale Wirtschaftsbeziehungen'
    ]
  ].map(([slug, prefix, title, folder]) => [slug, { prefix, title, folder }])
);

const PRIMARY_EXPORT = {
  mikro1: { manifest: 'mikro1/js/data/contentManifest.js', key: 'MIKRO1_CONCEPT_PRIMARY_REFS' },
  mikro2: { manifest: 'mikro2/js/data/contentManifest.js', key: 'MIKRO2_CONCEPT_PRIMARY_REFS' },
  makro1: { manifest: 'makro1/js/data/contentManifest.js', key: 'MAKRO1_CONCEPT_PRIMARY_REFS' },
  makro2: { manifest: 'makro2/js/data/contentManifest.js', key: 'MAKRO2_CONCEPT_PRIMARY_REFS' },
  oekonometrie: { manifest: 'oekonometrie/js/data/contentManifest.js', key: 'OEKONOMETRIE_CONCEPT_PRIMARY_REFS' },
  statistik: { manifest: 'statistik/js/data/contentManifest.js', key: 'STATISTIK_CONCEPT_PRIMARY_REFS' },
  mathematik: { manifest: 'mathematik/js/data/contentManifest.js', key: 'MATHEMATIK_CONCEPT_PRIMARY_REFS' },
  finanzwirtschaft: { manifest: 'finanzwirtschaft/js/data/contentManifest.js', key: 'FINANZWIRTSCHAFT_CONCEPT_PRIMARY_REFS' },
  jahresabschluss: { manifest: 'jahresabschluss/js/data/contentManifest.js', key: 'JAHRESABSCHLUSS_CONCEPT_PRIMARY_REFS' },
  recht: { manifest: 'recht/js/data/contentManifest.js', key: 'RECHT_CONCEPT_PRIMARY_REFS' },
  'internationale-wirtschaftsbeziehungen': {
    manifest: 'internationale-wirtschaftsbeziehungen/js/data/contentManifest.js',
    key: 'IWB_CONCEPT_PRIMARY_REFS'
  }
};

const registryPath = path.join(repoRoot, 'docs/audits/source-corpus-registry.generated.json');

function parseArgs(argv) {
  const write = argv.includes('--write');
  const all = argv.includes('--all');
  const moduleIdx = argv.indexOf('--module');
  const module = moduleIdx >= 0 ? argv[moduleIdx + 1] : null;
  return { write, all, module };
}

function slugifyLabel(value) {
  return String(value || 'formula')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')
    .slice(0, 32);
}

async function loadPrimaryRefs(slug) {
  const cfg = PRIMARY_EXPORT[slug];
  if (!cfg) return {};
  const manifestPath = path.join(repoRoot, cfg.manifest);
  if (!fs.existsSync(manifestPath)) return {};
  const mod = await import(`${pathToFileURL(manifestPath).href}?t=${Date.now()}`);
  return mod[cfg.key] || {};
}

function loadRegistryDocs(slug) {
  if (!fs.existsSync(registryPath)) return [];
  const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
  return (registry.sourceDocuments || []).filter((d) => d.module === slug);
}

async function loadModuleData(slug) {
  const anchorsPath = path.join(repoRoot, slug, 'js/data/sourceAnchors.js');
  const anchorsUrl = `${pathToFileURL(anchorsPath).href}?t=${Date.now()}`;
  const anchorsMod = await import(anchorsUrl);
  const anchorsExport = Object.keys(anchorsMod).find((k) => k.endsWith('_SOURCE_ANCHORS'));
  const anchorsByConcept = anchorsMod[anchorsExport] || {};

  const chaptersPath = path.join(repoRoot, slug, 'js/data/chapters.js');
  const chaptersUrl = `${pathToFileURL(chaptersPath).href}?t=${Date.now()}`;
  const chaptersMod = await import(chaptersUrl);
  const contentById = chaptersMod.CONTENT || {};

  let ingestionMod = {};
  try {
    const ingPath = path.join(repoRoot, slug, 'js/data/officialTaskIngestion.js');
    const ingUrl = `${pathToFileURL(ingPath).href}?t=${Date.now()}`;
    ingestionMod = await import(ingUrl);
  } catch {
    ingestionMod = {};
  }

  return { anchorsByConcept, contentById, ingestionMod };
}

function buildFormulaCards(slug, anchorsByConcept, contentById) {
  const cards = [];
  for (const [conceptId, anchors] of Object.entries(anchorsByConcept)) {
    if (!Array.isArray(anchors) || anchors.length < 2) continue;
    const formeln = contentById[conceptId]?.formeln;
    if (!Array.isArray(formeln) || !formeln.length) continue;

    const anchorIds = anchors.slice(0, 2).map((a) => a.id);
    const sections = anchors.slice(0, 2).map((a) => a.locator?.section || a.publicLabel).filter(Boolean);

    for (const primary of formeln.slice(0, 8)) {
      if (!primary?.eq) continue;
      const labelSlug = slugifyLabel(primary.label || 'formula');
      cards.push({
        id: `${slug}.${conceptId}.${labelSlug}`,
        conceptId,
        label: primary.label || '',
        officialNotation: primary.variables ? Object.keys(primary.variables).join(', ') : '',
        displayFormula: primary.eq,
        intuition:
          primary.desc ||
          `Formel „${primary.label || labelSlug}“ aus dem Kapitel ${conceptId}; VL: ${sections.join('; ')}.`,
        derivationSteps: [
          {
            label: primary.label || 'Definition',
            text: sections[0] || 'VL-Definition',
            math: primary.eq
          },
          {
            label: 'Anwendung',
            text: 'In der passenden Klausuraufgabe einsetzen und Zulässigkeitsbereich prüfen.',
            math: null
          }
        ],
        assumptions: ['Notation wie in der Vorlesung', 'Zulässigkeitsbereich der Aufgabe beachten'],
        appliesWhen: [`Klausuraufgaben zu ${conceptId}`, primary.label || conceptId],
        failsWhen: ['Voraussetzungen der VL-Ableitung verletzt', 'falsche Formel für den Aufgabentyp gewählt'],
        examShortcut: `Merke: ${primary.label || conceptId} — ${(primary.desc || '').slice(0, 80)}`,
        relatedTaskFamilies: [`${slug}.taskfamily.${conceptId}-vl-pattern`],
        commonMistakes: ['Formel ohne Kontext anwenden', 'VL-Notation mit Übungsblatt-Notation verwechseln'],
        anchorIds
      });
    }
  }
  return cards;
}

function buildTaskFamilies(slug, anchorsByConcept, ingestionMod, meta) {
  const buildPlaceholders =
    ingestionMod[`build${meta.prefix.charAt(0) + meta.prefix.slice(1).toLowerCase().replace(/^./, (c) => c.toUpperCase())}OfficialTaskPlaceholders`] ||
    ingestionMod[`build${slug.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('')}OfficialTaskPlaceholders`];

  // Resolve builder name properly
  const builderName = Object.keys(ingestionMod).find((k) => k.startsWith('build') && k.endsWith('OfficialTaskPlaceholders'));
  const placeholders = builderName ? ingestionMod[builderName]([]) : [];

  const families = [];
  for (const [conceptId, anchors] of Object.entries(anchorsByConcept)) {
    if (!Array.isArray(anchors) || anchors.length < 2) continue;
    const anchorIds = anchors.slice(0, 2).map((a) => a.id);
    const topic = anchors[0].locator?.section || conceptId;
    families.push({
      id: `${slug}.taskfamily.${conceptId}-vl-pattern`,
      conceptId,
      title: `${meta.title}: ${topic}`,
      topic,
      method: `VL-Abschnitt(e) lesen, Methode aus ${anchorIds.length} Ankern ableiten und mit Kapitelaufgaben abgleichen.`,
      sourceAnchorIds: anchorIds
    });
  }

  return { families, placeholders };
}

function resolveBuilder(ingestionMod, meta, slug) {
  const camel =
    'build' +
    slug
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('') +
    'OfficialTaskPlaceholders';
  const alt = `build${meta.prefix.split('_').map((p) => p[0] + p.slice(1).toLowerCase()).join('')}OfficialTaskPlaceholders`;
  return ingestionMod[camel] || ingestionMod[alt] || ingestionMod[Object.keys(ingestionMod).find((k) => k.includes('OfficialTaskPlaceholders') && k.startsWith('build'))];
}

function renderFormulaCardsFile(slug, meta, cards) {
  const cardBlocks = cards
    .map((c) => {
      const lines = [
        '  card({',
        `    id: '${c.id}',`,
        `    conceptId: '${c.conceptId}',`,
        `    label: ${JSON.stringify(c.label || '')},`,
        `    officialNotation: ${JSON.stringify(c.officialNotation)},`,
        `    displayFormula: ${JSON.stringify(c.displayFormula)},`,
        `    intuition: ${JSON.stringify(c.intuition)},`,
        `    derivationSteps: ${JSON.stringify(c.derivationSteps, null, 4).replace(/\n/g, '\n    ')},`,
        `    assumptions: ${JSON.stringify(c.assumptions)},`,
        `    appliesWhen: ${JSON.stringify(c.appliesWhen)},`,
        `    failsWhen: ${JSON.stringify(c.failsWhen)},`,
        `    examShortcut: ${JSON.stringify(c.examShortcut)},`,
        `    relatedTaskFamilies: ${JSON.stringify(c.relatedTaskFamilies)},`,
        `    commonMistakes: ${JSON.stringify(c.commonMistakes)},`,
        `    anchorIds: ${JSON.stringify(c.anchorIds)}`,
        '  })'
      ];
      return lines.join('\n');
    })
    .join(',\n');

  return `// ============================================================
// FORMULA CARDS — ${meta.title}
// Generated from sourceAnchors + chapter formeln (VL-layer pass).
// ============================================================

const MODULE = '${slug}';

function card({
  id,
  conceptId,
  label = '',
  officialNotation,
  displayFormula,
  intuition,
  derivationSteps,
  assumptions,
  appliesWhen,
  failsWhen,
  substitutions = [],
  examShortcut,
  graphicalInterpretation = '',
  relatedTaskFamilies = [],
  commonMistakes,
  anchorIds
}) {
  return {
    id,
    module: MODULE,
    conceptId,
    label,
    officialNotation,
    displayFormula,
    intuition,
    derivationSteps,
    assumptions,
    appliesWhen,
    failsWhen,
    substitutions,
    examShortcut,
    graphicalInterpretation,
    relatedTaskFamilies,
    commonMistakes,
    anchorIds,
    sourceStatus: 'direct-source'
  };
}

export const FORMULA_CARDS = Object.freeze([
${cardBlocks}
]);

export const FORMULA_CARDS_BY_CONCEPT = Object.freeze(
  FORMULA_CARDS.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
`;
}

const INGESTION_IMPORT = {
  statistik: {
    buildFn: 'buildStatistikOfficialTaskPlaceholders',
    baseline: null,
    gap: 'Offizielle Aufgaben-Mappings nur nach Review; VL-Familien folgen Seitenankern.'
  },
  mathematik: {
    buildFn: 'buildMathematikOfficialTaskPlaceholders',
    baseline: null,
    gap: 'Offizielle Aufgaben-Mappings nur nach Review; VL-Familien folgen Seitenankern.'
  },
  makro2: {
    buildFn: 'buildMakro2OfficialTaskPlaceholders',
    gap: 'Offizielle Aufgaben-Mappings nur nach Review; VL-Familien folgen Seitenankern.'
  },
  mikro1: { buildFn: 'buildMikro1OfficialTaskPlaceholders', gap: 'Probeklausur item-level mapping blockiert bis OCR/Review.' },
  mikro2: { buildFn: 'buildMikro2OfficialTaskPlaceholders', gap: 'Keine offiziellen Klausur-Artefakte im Korpus; Übungs-Mapping offen.' },
  oekonometrie: { buildFn: 'buildOekonometrieOfficialTaskPlaceholders', gap: 'VL-Anker gesetzt; item-level Klausur-Mapping offen.' },
  finanzwirtschaft: { buildFn: 'buildFinanzwirtschaftOfficialTaskPlaceholders', gap: 'Registry-Familien pro PDF; keine synthetischen Aufgaben.' },
  jahresabschluss: { buildFn: 'buildJahresabschlussOfficialTaskPlaceholders', gap: 'Registry-Familien pro PDF; keine synthetischen Aufgaben.' },
  recht: { buildFn: 'buildRechtOfficialTaskPlaceholders', gap: 'Registry-Familien pro PDF; keine synthetischen Aufgaben.' },
  'internationale-wirtschaftsbeziehungen': {
    buildFn: 'buildInternationaleWirtschaftsbeziehungenOfficialTaskPlaceholders',
    gap: 'Registry-Familien pro PDF; keine synthetischen Aufgaben.'
  }
};

function renderDocFamilyBlock(f) {
  return `  {
    id: '${f.id}',
    module: '${f.module}',
    conceptId: '${f.conceptId}',
    title: ${JSON.stringify(f.title)},
    topic: ${JSON.stringify(f.topic)},
    method: ${JSON.stringify(f.method)},
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: ${JSON.stringify(f.registryPath)}, mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: ${JSON.stringify(f.officialTaskGap)},
    registryDocumentId: ${JSON.stringify(f.registryDocumentId)},
    registryPath: ${JSON.stringify(f.registryPath)},
    registryKind: ${JSON.stringify(f.registryKind)}
  }`;
}

function renderTaskFamiliesFile(slug, meta, families, docFamilies = [], ingestionMod = {}, platformFamilies = []) {
  const ing = INGESTION_IMPORT[slug] || {};
  const baselineKey = Object.keys(ingestionMod).find((k) => k.includes('OFFICIAL_TASK_DOC_BASELINE'));
  const baseline = ingestionMod[baselineKey] || { exercise: 0, solution: 0, tutorial: 0, exam: 0 };
  const buildFn = ing.buildFn || Object.keys(ingestionMod).find((k) => k.startsWith('build') && k.endsWith('OfficialTaskPlaceholders'));
  const gap = ing.gap || 'Offizielle Aufgaben-Mappings nur nach Review; VL-Familien folgen Seitenankern.';
  const baselineImport = baselineKey ? `, ${baselineKey}` : '';

  const familyBlocks = [...families, ...platformFamilies]
    .map((f) => {
      const difficulty = f.difficulty || 'mittel';
      const sourceStatus = f.sourceStatus || 'direct-source';
      const expectedTimeMinutes = f.expectedTimeMinutes ?? 10;
      const commonTraps =
        f.commonTraps || [
          'VL-Methode mit Übungsblatt-Muster verwechseln',
          'Anker ohne Aufgabenbezug auswendig lernen'
        ];
      const gradingRubric =
        f.gradingRubric || ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'];
      return `  family({
    id: '${f.id}',
    conceptId: '${f.conceptId}',
    title: ${JSON.stringify(f.title)},
    topic: ${JSON.stringify(f.topic)},
    method: ${JSON.stringify(f.method)},
    sourceStatus: ${JSON.stringify(sourceStatus)},
    sourceAnchorIds: ${JSON.stringify(f.sourceAnchorIds)},
    difficulty: ${JSON.stringify(difficulty)},
    expectedTimeMinutes: ${expectedTimeMinutes},
    examRelevance: 'hoch',
    commonTraps: ${JSON.stringify(commonTraps)},
    gradingRubric: ${JSON.stringify(gradingRubric)},
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  })`;
    })
    .join(',\n');

  const placeholderFn = buildFn
    ? `,\n  ...${buildFn}([]).map((placeholder) => familyFromPlaceholder(placeholder))`
    : '';

  const ingestionLine = baselineKey
    ? `ingestion: \`exercise=\${${baselineKey}.exercise}, solution=\${${baselineKey}.solution}, tutorial=\${${baselineKey}.tutorial}, exam=\${${baselineKey}.exam}\`,`
    : `ingestion: 'exercise=${baseline.exercise}, solution=${baseline.solution}, tutorial=${baseline.tutorial}, exam=${baseline.exam}',`;

  return `// ============================================================
// TASK FAMILY TAXONOMY — ${meta.title}
// VL-anchor-grounded exam-pattern layer.
// ============================================================

import { ${buildFn}${baselineImport} } from './officialTaskIngestion.js';

const MODULE = '${slug}';
const OFFICIAL_TASK_GAP = ${JSON.stringify(gap)};

function family({
  id,
  conceptId,
  title,
  topic,
  method,
  sourceStatus = 'direct-source',
  sourceAnchorIds,
  difficulty,
  expectedTimeMinutes,
  examRelevance,
  commonTraps,
  gradingRubric,
  currentCoverage,
  officialTaskCoverage = 'missing-official-task-source'
}) {
  return {
    id,
    module: MODULE,
    conceptId,
    title,
    topic,
    method,
    sourceStatus,
    sourceAnchorIds,
    difficulty,
    expectedTimeMinutes,
    examRelevance,
    commonTraps,
    gradingRubric,
    currentCoverage,
    officialTaskCoverage,
    officialTaskGap: OFFICIAL_TASK_GAP
  };
}

function familyFromPlaceholder(placeholder) {
  return {
    id: placeholder.id,
    module: MODULE,
    conceptId: placeholder.conceptId,
    title: \`${meta.title} official-task mapping placeholder (\${placeholder.conceptId})\`,
    topic: 'Official task ingestion',
    method: 'Dokumente registriert; item-level Mapping steht aus.',
    sourceStatus: placeholder.sourceStatus,
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Ingestion mit vollständigem Mapping verwechseln'],
    gradingRubric: ['Placeholder bleibt non-deceptive'],
    currentCoverage: {
      ${ingestionLine}
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
${familyBlocks}
];

const OFFICIAL_DOCUMENT_FAMILIES = [
${docFamilies.map(renderDocFamilyBlock).join(',\n')}
];

export const TASK_FAMILIES = Object.freeze([
  ...VL_GROUNDED_FAMILIES,
  ...OFFICIAL_DOCUMENT_FAMILIES${placeholderFn}
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
`;
}

/** Platform-labeled drill families where VL anchors are absent (AGENTS.md). */
const PLATFORM_DRILL_FAMILIES_BY_MODULE = {
  mikro2: [
    {
      conceptId: 'externa_pigou',
      topic: 'Externe Effekte — Pigou-Internalisierung',
      method:
        'Companion-Marktversagen-Block: MSC vs. MPC, optimale Pigou-Steuer und Coase-Grenzen; mit Schrittaufgaben zu Markt- vs. Sozialoptimum abgleichen.'
    },
    {
      conceptId: 'externa_institutionen',
      topic: 'Institutionelle Internalisierung',
      method:
        'Coase-Verhandlung vs. Cap-and-Trade: Transaktionskosten, Lizenzpreis und Instrumentenwahl bei Unsicherheit über MEC.'
    },
    {
      conceptId: 'public_goods',
      topic: 'Öffentliche Güter und Samuelson',
      method:
        'Samuelson-Bedingung vertikal aggregieren; Free-Rider und Lindahl-Logik mit Portal-Aufgaben zu optimaler Menge verknüpfen.'
    }
  ]
};

function buildPlatformDrillFamilies(slug, meta) {
  const defs = PLATFORM_DRILL_FAMILIES_BY_MODULE[slug] || [];
  return defs.map((d) => ({
    id: `${slug}.taskfamily.${d.conceptId}-platform-drill`,
    conceptId: d.conceptId,
    title: `${meta.title}: ${d.topic}`,
    topic: d.topic,
    method: d.method,
    sourceAnchorIds: [],
    sourceStatus: 'platform-added-drill',
    difficulty: 'mittel',
    expectedTimeMinutes: 12,
    commonTraps: [
      'Companion-Logik mit VL-Ankern verwechseln, obwohl kein offizieller VL-Anker existiert',
      'Instrument ohne Marktversagen-Diagnose wählen'
    ],
    gradingRubric: ['Mechanismus benennen', 'Rechnung/Notation stimmig', 'Grenzen (Coase, Unsicherheit) erwähnen']
  }));
}

async function processModule(slug, write) {
  const meta = MODULE_META[slug];
  if (!meta) return;
  const { anchorsByConcept, contentById, ingestionMod } = await loadModuleData(slug);
  const cards = buildFormulaCards(slug, anchorsByConcept, contentById);
  const families = [];
  for (const [conceptId, anchors] of Object.entries(anchorsByConcept)) {
    if (!Array.isArray(anchors) || anchors.length < 2) continue;
    const anchorIds = anchors.slice(0, 2).map((a) => a.id);
    const topic = anchors[0].locator?.section || conceptId;
    families.push({
      id: `${slug}.taskfamily.${conceptId}-vl-pattern`,
      conceptId,
      title: `${meta.title}: ${topic}`,
      topic,
      method: `VL-Abschnitt(e) lesen, Methode aus Ankern (${anchorIds.join(', ')}) ableiten und mit Kapitelaufgaben abgleichen.`,
      sourceAnchorIds: anchorIds,
      difficulty: 'mittel',
      expectedTimeMinutes: 10,
      commonTraps: [
        'VL-Methode mit Übungsblatt-Muster verwechseln',
        'Anker ohne Aufgabenbezug auswendig lernen'
      ],
      gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar']
    });

    const drillAnchors =
      anchors.length >= 3
        ? anchors.slice(1, 3)
        : anchors.length >= 2
          ? [anchors[0], anchors[anchors.length - 1]]
          : anchors;
    const drillAnchorIds = drillAnchors.map((a) => a.id);
    const drillTopic =
      anchors.length >= 3
        ? drillAnchors[1].locator?.section || `${topic} — Anwendung`
        : `${topic} — Klausurtyp`;
    families.push({
      id: `${slug}.taskfamily.${conceptId}-vl-apply`,
      conceptId,
      title: `${meta.title}: ${drillTopic}`,
      topic: drillTopic,
      method: `Klausurtyp aus VL (${drillAnchorIds.join(', ')}): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.`,
      sourceAnchorIds: drillAnchorIds,
      difficulty: 'schwer',
      expectedTimeMinutes: 12,
      commonTraps: [
        'Zwischenschritte aus der VL überspringen',
        'Ergebnis ohne ökonomische Interpretation abgeben'
      ],
      gradingRubric: [
        'VL-Methode erkannt',
        'Zwischenschritte vollständig',
        'Ergebnis fachlich interpretiert'
      ]
    });
  }

  const primaryRefs = await loadPrimaryRefs(slug);
  const { buildOfficialDocumentRegistryFamilies } = await import(
    `${pathToFileURL(path.join(repoRoot, 'assets/js/portal-core/data/officialTaskIngestion.js')).href}?t=${Date.now()}`
  );
  const docFamilies = buildOfficialDocumentRegistryFamilies({
    moduleSlug: slug,
    documents: loadRegistryDocs(slug),
    primaryPathsByConceptId: primaryRefs
  });

  console.log(
    `${slug}: ${cards.length} formula cards, ${families.length} VL families, ${docFamilies.length} official-doc families`
  );

  if (!write) return;

  const formulaPath = path.join(repoRoot, slug, 'js/data/formulaCards.js');
  const taskPath = path.join(repoRoot, slug, 'js/data/taskFamilies.js');
  fs.writeFileSync(formulaPath, `${renderFormulaCardsFile(slug, meta, cards)}\n`);
  const platformFamilies = buildPlatformDrillFamilies(slug, meta);
  fs.writeFileSync(
    taskPath,
    `${renderTaskFamiliesFile(slug, meta, families, docFamilies, ingestionMod, platformFamilies)}\n`
  );
  console.log(`  wrote ${formulaPath}`);
  console.log(`  wrote ${taskPath}`);
}

async function main() {
  const { write, all, module: slug } = parseArgs(process.argv.slice(2));
  const targets = all ? FLEET_SLUGS : slug ? [slug] : [];
  if (!targets.length) {
    console.error('Usage: node tools/exam-os/generate-vl-layers.mjs --module <slug> [--write] | --all [--write]');
    process.exit(1);
  }
  for (const target of targets) {
    await processModule(target, write);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
