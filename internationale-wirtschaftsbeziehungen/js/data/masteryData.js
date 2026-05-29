// ============================================================
// MASTERY DATA — Internationale Wirtschaftsbeziehungen
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

const SUPPLEMENTAL_CONCEPT_IDS = new Set([]);

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
      label: `Die Kurslogik von "${ch.title}" strukturiert wiedergeben können`,
      sourceStatus: baseStatus,
      sourceAnchorIds: [...new Set([...formulaAnchors, ...taskAnchors])],
      evidence: ['self_check', 'concept_review']
    })
  ];

  if (formulaCards.length) {
    items.push(
      objective({
        dimension: 'calculation',
        label: `Zentrale Formelkarte(n) zu "${ch.title}" korrekt anwenden`,
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
        label: `Offizielle Übungs-/Klausur-Dokumente zu "${ch.title}" im Korpus finden`,
        sourceStatus: 'direct-source',
        sourceAnchorIds: taskAnchors,
        evidence: ['official_document_registry']
      })
    );
  } else if (taskFamilies.length) {
    items.push(
      objective({
        dimension: 'derivation',
        label: `VL-Methode zu "${ch.title}" auf eine neue Zahlenkonstellation übertragen`,
        sourceStatus: baseStatus,
        sourceAnchorIds: taskAnchors,
        evidence: ['task_family', 'step_problems']
      })
    );
  }

  items.push(
    objective({
      dimension: 'transfer',
      label: `Prüfungsähnliche Aufgabe zu "${ch.title}" ohne Stichwortliste einordnen`,
      sourceStatus: fallbackSourceStatus(ch.id, 'transfer'),
      sourceAnchorIds: [...new Set([...formulaAnchors, ...taskAnchors])],
      evidence: ['mock_exam', 'self_check']
    })
  );

  MASTERY[ch.id] = items;
});

