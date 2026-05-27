// ============================================================
// MASTERY DATA — Mikroökonomik II
// Source-aware exam readiness objectives by mastery dimension.
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

const SUPPLEMENTAL_CONCEPT_IDS = new Set([
  'externa_pigou',
  'externa_institutionen',
  'public_goods'
]);

function objective({
  dimension,
  label,
  sourceStatus,
  sourceAnchorIds = [],
  evidence = []
}) {
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
    .flatMap((item) => Array.isArray(item.sourceAnchorIds) ? item.sourceAnchorIds : Array.isArray(item.anchorIds) ? item.anchorIds : [])
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
  const sourceStatus = taskFamilies.length || formulaCards.length ? 'direct-source' : fallbackSourceStatus(ch.id, 'recognition');

  const items = [
    objective({
      dimension: 'recognition',
      label: `Die Kurslogik von "${ch.title}" ohne Stichwortliste erklären können`,
      sourceStatus,
      sourceAnchorIds: [...new Set([...formulaAnchors, ...taskAnchors])],
      evidence: ['self_check', 'concept_review']
    })
  ];

  if (formulaCards.length) {
    items.push(objective({
      dimension: 'calculation',
      label: `Die zentrale Formelkarte zu "${ch.title}" in einer Rechenaufgabe korrekt einsetzen können`,
      sourceStatus: 'direct-source',
      sourceAnchorIds: formulaAnchors,
      evidence: ['formula_card', 'practice_attempt']
    }));
    items.push(objective({
      dimension: 'derivation',
      label: `Die Herleitung der Formelkarte zu "${ch.title}" mit Annahmen und Einsatzgrenzen reproduzieren können`,
      sourceStatus: 'direct-source',
      sourceAnchorIds: formulaAnchors,
      evidence: ['formula_card', 'derivation_check']
    }));
  } else {
    items.push(objective({
      dimension: 'calculation',
      label: `Formale Beziehungen und Modellbedingungen zu "${ch.title}" fehlerfrei anwenden können`,
      sourceStatus: fallbackSourceStatus(ch.id, 'calculation'),
      sourceAnchorIds: taskAnchors,
      evidence: ['practice_attempt']
    }));
    items.push(objective({
      dimension: 'derivation',
      label: `Den Argumentationsweg zu "${ch.title}" in Prüfungssprache begründen können`,
      sourceStatus: fallbackSourceStatus(ch.id, 'derivation'),
      sourceAnchorIds: taskAnchors,
      evidence: ['written_explanation']
    }));
  }

  if (taskFamilies.length) {
    items.push(objective({
      dimension: 'transfer',
      label: `${taskFamilies.length} Klausurfamilie${taskFamilies.length === 1 ? '' : 'n'} zu "${ch.title}" unter Zeitdruck auswählen und lösen können`,
      sourceStatus: 'direct-source',
      sourceAnchorIds: taskAnchors,
      evidence: ['task_family', 'mixed_attempt']
    }));
  } else {
    items.push(objective({
      dimension: 'transfer',
      label: `Typische Klausurfragen zu "${ch.title}" sicher von Nachbarthemen abgrenzen können`,
      sourceStatus: fallbackSourceStatus(ch.id, 'transfer'),
      sourceAnchorIds: formulaAnchors,
      evidence: ['mixed_attempt']
    }));
  }

  MASTERY[ch.id] = items;
});
