// ============================================================
// MASTERY CHECKLIST — Ökonometrie
// Render and toggle learning objective checklists
// ============================================================

import { loadProgress, saveMasteryChecks } from '../state/storage.js';
import { MASTERY } from '../data/masteryData.js';
import { formalizeMarkupString } from '../utils/formalMath.js';

export function renderMastery(conceptId) {
  const items = MASTERY[conceptId];
  if (!items || !items.length) return '';
  const progress = loadProgress();
  const entry = progress[conceptId] || {};
  const checks = entry.checks || {};

  let html = `<div class="mastery-check" id="masteryCheck_${conceptId}">
<h3>Minimale Beherrschungsziele</h3>
<p style="color:var(--muted);font-size:12px;margin-bottom:12px">Hake ab, was du sicher kannst:</p>`;

  items.forEach((item, index) => {
    const done = checks[index];
    html += `<label class="mastery-item ${done ? 'done' : ''}">
<input type="checkbox" ${done ? 'checked' : ''}
  data-concept="${conceptId}" data-idx="${index}"
  onchange="window.__toggleMastery('${conceptId}', ${index}, this)">
<span>${formalizeMarkupString(item)}</span>
</label>`;
  });

  html += `<div class="mastery-progress" id="masteryProgress_${conceptId}">
${renderMasteryBar(conceptId, items, checks)}</div>
</div>`;

  return html;
}

export function renderMasteryBar(conceptId, items, checks) {
  const done = Object.values(checks).filter(Boolean).length;
  const total = items.length;
  const pct = Math.round((done / total) * 100);
  return `<div class="m-bar-wrap"><div class="m-bar-fill" style="width:${pct}%"></div></div>
<span class="mastery-bar-label">${done}/${total} Ziele erreicht (${pct}%)</span>`;
}

export function toggleMastery(conceptId, itemIdx, checkbox, onUpdate) {
  const progress = loadProgress();
  if (!progress[conceptId]) progress[conceptId] = {};
  if (!progress[conceptId].checks) progress[conceptId].checks = {};
  progress[conceptId].checks[itemIdx] = checkbox.checked;
  saveMasteryChecks(conceptId, progress[conceptId].checks);

  const label = checkbox.parentElement;
  label.classList.toggle('done', checkbox.checked);

  const items = MASTERY[conceptId];
  const checks = progress[conceptId].checks;
  const progressEl = document.getElementById(`masteryProgress_${conceptId}`);
  if (progressEl) progressEl.innerHTML = renderMasteryBar(conceptId, items, checks);

  if (onUpdate) onUpdate();
}
