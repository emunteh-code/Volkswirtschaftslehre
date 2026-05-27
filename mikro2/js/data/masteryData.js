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

export const MASTERY_DIMENSIONS = DIMENSION_LABELS;

export const MASTERY = {};

CHAPTERS.forEach((ch) => {
  const formulaCards = FORMULA_CARDS_BY_CONCEPT[ch.id] || [];
  const taskFamilies = TASK_FAMILIES_BY_CONCEPT[ch.id] || [];
  const formulaAnchors = firstAnchor(formulaCards);
  const taskAnchors = firstAnchor(taskFamilies);
  const sourceStatus = taskFamilies.length || formulaCards.length ? 'direct-source' : 'source-distilled';

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
      sourceStatus,
      sourceAnchorIds: taskAnchors,
      evidence: ['practice_attempt']
    }));
    items.push(objective({
      dimension: 'derivation',
      label: `Den Argumentationsweg zu "${ch.title}" in Prüfungssprache begründen können`,
      sourceStatus,
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
      sourceStatus,
      sourceAnchorIds: formulaAnchors,
      evidence: ['mixed_attempt']
    }));
  }

  MASTERY[ch.id] = items;
});
