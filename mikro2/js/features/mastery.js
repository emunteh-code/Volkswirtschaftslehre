// ============================================================
// MASTERY CHECKLIST — Mikroökonomik I
// Render and toggle learning objective checklists
// ============================================================

import {
  loadProgress,
  saveMasteryChecks,
  listLearnerAttempts,
  listMistakeLogEntries
} from '../state/storage.js';
import { MASTERY, MASTERY_DIMENSIONS } from '../data/masteryData.js';
import { FORMULA_CARDS_BY_CONCEPT } from '../data/formulaCards.js';
import { TASK_FAMILIES_BY_CONCEPT } from '../data/taskFamilies.js';
import { renderMath } from '../utils/mathjax.js';

const MODULE_SLUG = 'mikro2';

function itemLabel(item) {
  return typeof item === 'string' ? item : item?.label || '';
}

function itemDimension(item) {
  return typeof item === 'string' ? 'general' : item?.dimension || 'general';
}

function itemSourceStatus(item) {
  return typeof item === 'string' ? 'source-distilled' : item?.sourceStatus || 'source-distilled';
}

function getConceptAttempts(conceptId) {
  try {
    return (listLearnerAttempts({ module_slug: MODULE_SLUG, limit: 250 }) || [])
      .filter((attempt) => {
        if (attempt?.target_id === conceptId) return true;
        const responses = attempt?.responses && typeof attempt.responses === 'object' ? Object.values(attempt.responses) : [];
        return responses.some((response) => response?.concept_id === conceptId || response?.conceptId === conceptId);
      });
  } catch {
    return [];
  }
}

function getConceptMistakes(conceptId) {
  try {
    return listMistakeLogEntries({ module_slug: MODULE_SLUG, concept_id: conceptId, limit: 200 }) || [];
  } catch {
    return [];
  }
}

function scoreAttemptEvidence(attempts) {
  if (!attempts.length) return 0;
  const scored = attempts
    .map((attempt) => attempt?.score)
    .filter((score) => score && typeof score.earned === 'number' && typeof score.max === 'number' && score.max > 0);
  if (!scored.length) return 0.25;
  const recent = scored.slice(-3);
  const avg = recent.reduce((sum, score) => sum + score.earned / score.max, 0) / recent.length;
  return Math.min(1, Math.max(0, avg));
}

function officialTaskSourceFamilies(taskFamilies) {
  return taskFamilies.filter((family) => family?.officialTaskCoverage === 'official-task-source');
}

function readinessBand(score, attempts, mistakes, hasOfficialTaskEvidence) {
  if (!attempts.length) return 'Noch ohne Versuchsdaten';
  if (mistakes.length >= 3) return 'Fehlerloop aktiv';
  if (!hasOfficialTaskEvidence && score >= 75) return 'prüfungsnah, aber ohne offizielle Aufgabenquelle';
  if (score >= 88) return 'A+-nah, aber offiziell noch nicht zertifiziert';
  if (score >= 75) return 'prüfungsnah';
  if (score >= 60) return 'stabilisierend';
  return 'noch nicht prüfungsstabil';
}

function buildReadiness(conceptId, items, checks) {
  const attempts = getConceptAttempts(conceptId);
  const mistakes = getConceptMistakes(conceptId);
  const formulaCards = FORMULA_CARDS_BY_CONCEPT[conceptId] || [];
  const taskFamilies = TASK_FAMILIES_BY_CONCEPT[conceptId] || [];
  const officialTaskFamilies = officialTaskSourceFamilies(taskFamilies);
  const checked = items.filter((_, index) => checks[index]).length;
  const selfScore = items.length ? checked / items.length : 0;
  const attemptScore = scoreAttemptEvidence(attempts);
  const evidenceCompleteness = [
    formulaCards.length > 0,
    officialTaskFamilies.length > 0,
    attempts.length > 0,
    mistakes.length === 0
  ].filter(Boolean).length / 4;
  const raw = (0.45 * selfScore) + (0.35 * attemptScore) + (0.20 * evidenceCompleteness);
  const score = Math.round(raw * 100);
  return {
    score,
    attempts,
    mistakes,
    formulaCards,
    taskFamilies,
    officialTaskFamilies,
    checked,
    total: items.length,
    band: readinessBand(score, attempts, mistakes, officialTaskFamilies.length > 0)
  };
}

function renderMasteryEvidence(conceptId, items, checks) {
  const readiness = buildReadiness(conceptId, items, checks);
  const dimensionCounts = Object.keys(MASTERY_DIMENSIONS).map((dimension) => {
    const dimensionItems = items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => itemDimension(item) === dimension);
    const done = dimensionItems.filter(({ index }) => checks[index]).length;
    const total = dimensionItems.length;
    return `<div class="mastery-dimension-pill">
<span>${MASTERY_DIMENSIONS[dimension]}</span>
<strong>${done}/${total || 0}</strong>
</div>`;
  }).join('');

  return `<div class="mastery-evidence-panel">
<div class="mastery-evidence-score">
<span>Vorläufiger Readiness-Score</span>
<strong>${readiness.score}%</strong>
<em>${readiness.band}</em>
</div>
<div class="mastery-dimension-grid">${dimensionCounts}</div>
<div class="mastery-evidence-grid">
<div><span>Formelkarten</span><strong>${readiness.formulaCards.length}</strong></div>
<div><span>Klausurfamilien</span><strong>${readiness.taskFamilies.length}</strong></div>
<div><span>Offizielle Aufgaben</span><strong>${readiness.officialTaskFamilies.length}</strong></div>
<div><span>Lokale Versuche</span><strong>${readiness.attempts.length}</strong></div>
<div><span>Offene Fehlerdaten</span><strong>${readiness.mistakes.length}</strong></div>
</div>
<p class="mastery-evidence-note">Dieser Score kombiniert Selbstchecks, lokale Versuchsdaten, Formelkarten und offizielle Aufgabenquellen. Source-grounded Klausurfamilien strukturieren das Training, ersetzen aber keine ingested Übungsblätter, Lösungsschlüssel oder Altklausuren.</p>
</div>`;
}

/**
 * Render the mastery checklist HTML for a concept.
 * @param {string} conceptId
 * @returns {string} HTML string
 */
export function renderMastery(conceptId) {
  const items = MASTERY[conceptId];
  if (!items || !items.length) return '';
  const p = loadProgress();
  const entry = p[conceptId] || {};
  const checks = entry.checks || {};

  let html = `<div class="mastery-check" id="masteryCheck_${conceptId}">
<h3>Minimale Beherrschungsziele</h3>
<p style="color:var(--muted);font-size:12px;margin-bottom:12px">Hake ab, was du sicher kannst. Die Dimensionen trennen Erkennen, Rechnen, Herleiten und Transfer.</p>
${renderMasteryEvidence(conceptId, items, checks)}`;
  items.forEach((item, i) => {
    const done = checks[i];
    const dimension = itemDimension(item);
    const status = itemSourceStatus(item);
    html += `<label class="mastery-item ${done ? 'done' : ''}">
<input type="checkbox" ${done ? 'checked' : ''}
  data-concept="${conceptId}" data-idx="${i}"
  onchange="window.__toggleMastery('${conceptId}', ${i}, this)">
<span><em>${MASTERY_DIMENSIONS[dimension] || dimension}</em>${itemLabel(item)}<small>${status}</small></span>
</label>`;
  });
  html += `<div class="mastery-progress" id="masteryProgress_${conceptId}">
${renderMasteryBar(conceptId, items, checks)}</div>
</div>`;
  return html;
}

/**
 * Render the mastery progress bar HTML.
 * @param {string} conceptId
 * @param {string[]} items
 * @param {Object} checks
 * @returns {string}
 */
export function renderMasteryBar(conceptId, items, checks) {
  const done = Object.values(checks).filter(Boolean).length;
  const total = items.length;
  const pct = Math.round((done / total) * 100);
  return `<div class="m-bar-wrap"><div class="m-bar-fill" style="width:${pct}%"></div></div>
<span class="mastery-bar-label">${done}/${total} Ziele erreicht (${pct}%)</span>`;
}

/**
 * Toggle a mastery checkbox (called by event delegation in main.js).
 * @param {string} conceptId
 * @param {number} itemIdx
 * @param {HTMLInputElement} checkbox
 * @param {Function} onUpdate - callback to refresh UI (updateProgressUI, updateNavBadges)
 */
export function toggleMastery(conceptId, itemIdx, checkbox, onUpdate) {
  const p = loadProgress();
  if (!p[conceptId]) p[conceptId] = {};
  if (!p[conceptId].checks) p[conceptId].checks = {};
  p[conceptId].checks[itemIdx] = checkbox.checked;
  saveMasteryChecks(conceptId, p[conceptId].checks);

  const label = checkbox.parentElement;
  label.classList.toggle('done', checkbox.checked);

  const items = MASTERY[conceptId];
  const checks = p[conceptId].checks;
  const progressEl = document.getElementById(`masteryProgress_${conceptId}`);
  if (progressEl) progressEl.innerHTML = renderMasteryBar(conceptId, items, checks);
  const evidenceEl = document.querySelector(`#masteryCheck_${conceptId} .mastery-evidence-panel`);
  if (evidenceEl) evidenceEl.outerHTML = renderMasteryEvidence(conceptId, items, checks);

  if (onUpdate) onUpdate();
}
