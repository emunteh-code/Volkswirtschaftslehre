/**
 * Generate masteryData.js (4 dimensions) from formula cards + task families.
 * Usage: node tools/exam-os/generate-mastery-scaffold.mjs --module makro1 --write
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '../..');

const SLUGS = [
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

const SUPPLEMENTAL_BY_MODULE = {
  mikro2: new Set(['externa_pigou', 'externa_institutionen', 'public_goods'])
};

function renderMasteryFile(slug, title) {
  return `// ============================================================
// MASTERY DATA — ${title}
// Generated exam-readiness objectives (4 dimensions).
// ============================================================

import { CHAPTERS } from './chapters.js';
import { FORMULA_CARDS_BY_CONCEPT } from './formulaCards.js';
import { TASK_FAMILIES_BY_CONCEPT } from './taskFamilies.js';

const DIMENSION_LABELS = Object.freeze({
  recognition: 'Erkennen',
  calculation: 'Rechnen',
  derivation: 'Herleiten',
  transfer: 'Transfer'
});

const SUPPLEMENTAL_CONCEPT_IDS = new Set(${JSON.stringify([...(SUPPLEMENTAL_BY_MODULE[slug] || [])])});

function objective({ dimension, label, sourceStatus, sourceAnchorIds = [], evidence = [] }) {
  return {
    dimension,
    dimensionLabel: DIMENSION_LABELS[dimension] || dimension,
    label,
    sourceStatus,
    sourceAnchorIds,
    evidence
  };
}

function firstAnchor(items) {
  return items
    .flatMap((item) =>
      Array.isArray(item.sourceAnchorIds)
        ? item.sourceAnchorIds
        : Array.isArray(item.anchorIds)
          ? item.anchorIds
          : []
    )
    .filter(Boolean)
    .slice(0, 3);
}

function fallbackSourceStatus(conceptId, dimension) {
  if (!SUPPLEMENTAL_CONCEPT_IDS.has(conceptId)) return 'source-distilled';
  return dimension === 'calculation' || dimension === 'transfer'
    ? 'platform-added-drill'
    : 'platform-added-explanation';
}

export const MASTERY_DIMENSIONS = DIMENSION_LABELS;

export const MASTERY = {};

CHAPTERS.forEach((ch) => {
  const formulaCards = FORMULA_CARDS_BY_CONCEPT[ch.id] || [];
  const taskFamilies = TASK_FAMILIES_BY_CONCEPT[ch.id] || [];
  const formulaAnchors = firstAnchor(formulaCards);
  const taskAnchors = firstAnchor(taskFamilies);
  const hasDirect = formulaCards.length > 0 || taskFamilies.some((f) => f.sourceStatus === 'direct-source');
  const baseStatus = hasDirect ? 'direct-source' : fallbackSourceStatus(ch.id, 'recognition');

  const items = [
    objective({
      dimension: 'recognition',
      label: \`Die Kurslogik von "\${ch.title}" strukturiert wiedergeben können\`,
      sourceStatus: baseStatus,
      sourceAnchorIds: [...new Set([...formulaAnchors, ...taskAnchors])],
      evidence: ['self_check', 'concept_review']
    })
  ];

  if (formulaCards.length) {
    items.push(
      objective({
        dimension: 'calculation',
        label: \`Zentrale Formelkarte(n) zu "\${ch.title}" korrekt anwenden\`,
        sourceStatus: 'direct-source',
        sourceAnchorIds: formulaAnchors,
        evidence: ['formula_card', 'portal_tasks']
      })
    );
  }

  if (taskFamilies.some((f) => f.officialTaskCoverage === 'official-document-registry')) {
    items.push(
      objective({
        dimension: 'derivation',
        label: \`Offizielle Übungs-/Klausur-Dokumente zu "\${ch.title}" im Korpus finden\`,
        sourceStatus: 'direct-source',
        sourceAnchorIds: taskAnchors,
        evidence: ['official_document_registry']
      })
    );
  } else if (taskFamilies.length) {
    items.push(
      objective({
        dimension: 'derivation',
        label: \`VL-Methode zu "\${ch.title}" auf eine neue Zahlenkonstellation übertragen\`,
        sourceStatus: baseStatus,
        sourceAnchorIds: taskAnchors,
        evidence: ['task_family', 'step_problems']
      })
    );
  }

  items.push(
    objective({
      dimension: 'transfer',
      label: \`Prüfungsähnliche Aufgabe zu "\${ch.title}" ohne Stichwortliste einordnen\`,
      sourceStatus: fallbackSourceStatus(ch.id, 'transfer'),
      sourceAnchorIds: [...new Set([...formulaAnchors, ...taskAnchors])],
      evidence: ['mock_exam', 'self_check']
    })
  );

  MASTERY[ch.id] = items;
});
`;
}

const TITLES = {
  mikro1: 'Mikroökonomik I',
  mikro2: 'Mikroökonomik II',
  makro1: 'Makroökonomik I',
  makro2: 'Makroökonomik II',
  oekonometrie: 'Ökonometrie',
  statistik: 'Statistik',
  mathematik: 'Mathematik',
  finanzwirtschaft: 'Finanzwirtschaft',
  jahresabschluss: 'Jahresabschluss',
  recht: 'Recht',
  'internationale-wirtschaftsbeziehungen': 'Internationale Wirtschaftsbeziehungen'
};

async function main() {
  const write = process.argv.includes('--write');
  const all = process.argv.includes('--all');
  const modIdx = process.argv.indexOf('--module');
  const slug = modIdx >= 0 ? process.argv[modIdx + 1] : null;
  const targets = all ? SLUGS : slug ? [slug] : [];
  if (!targets.length) {
    console.error('Usage: --module <slug> --write | --all --write');
    process.exit(1);
  }

  for (const moduleSlug of targets) {
    const outPath = path.join(repoRoot, moduleSlug, 'js/data/masteryData.js');
    if (!fs.existsSync(path.join(repoRoot, moduleSlug, 'js/data/chapters.js'))) {
      console.warn(`skip ${moduleSlug}: no chapters.js`);
      continue;
    }
    try {
      await import(`${pathToFileURL(path.join(repoRoot, moduleSlug, 'js/data/formulaCards.js')).href}?t=1`);
      await import(`${pathToFileURL(path.join(repoRoot, moduleSlug, 'js/data/taskFamilies.js')).href}?t=1`);
    } catch (e) {
      console.warn(`skip ${moduleSlug}: missing formulaCards/taskFamilies (${e.message})`);
      continue;
    }
    const content = renderMasteryFile(moduleSlug, TITLES[moduleSlug] || moduleSlug);
    if (write) {
      fs.writeFileSync(outPath, `${content}\n`);
      console.log(`Wrote ${outPath}`);
    } else {
      console.log(`${moduleSlug}: mastery scaffold ready (${content.split('\n').length} lines)`);
    }
  }
}

main();
