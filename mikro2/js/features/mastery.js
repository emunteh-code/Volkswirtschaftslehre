// ============================================================
// MASTERY CHECKLIST — Mikroökonomik I
// Render and toggle learning objective checklists
// ============================================================

import { loadProgress, saveMasteryChecks } from '../state/storage.js';
import { MASTERY } from '../data/masteryData.js';
import { renderMath } from '../utils/mathjax.js';

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
<p style="color:var(--muted);font-size:12px;margin-bottom:12px">Hake ab, was du sicher kannst:</p>`;
  items.forEach((item, i) => {
    const done = checks[i];
    html += `<label class="mastery-item ${done ? 'done' : ''}">
<input type="checkbox" ${done ? 'checked' : ''}
  data-concept="${conceptId}" data-idx="${i}"
  onchange="window.__toggleMastery('${conceptId}', ${i}, this)">
<span>${item}</span>
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

  if (onUpdate) onUpdate();
}
