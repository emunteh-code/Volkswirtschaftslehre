import { CURRICULUM } from './curriculum.js';
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_RECIPE } from './theoryRecipe.js';
import {
  completeTheoryRecipe,
  normalizeTheoryHtml
} from '../../../assets/js/portal-core/theory/theoryStructure.js';

const CURRICULUM_BY_ID = Object.fromEntries(CURRICULUM.map((entry) => [entry.id, entry]));

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderCards(entry) {
  if (!Array.isArray(entry.cards) || !entry.cards.length) return '';
  return `<div class="section-block">
<h3>${escapeHtml(entry.cardsTitle || 'Merkpunkte')}</h3>
<div class="info-grid">
${entry.cards.map((card) => `<div class="info-card info-card-concept-title">
<div class="label">${escapeHtml(card.title)}</div>
<div class="value">${escapeHtml(card.value)}</div>
${card.note ? `<p>${escapeHtml(card.note)}</p>` : ''}
</div>`).join('')}
</div>
</div>`;
}

function renderSections(entry) {
  return (entry.sections || []).map((section) => `<div class="section-block">
<h3>${escapeHtml(section.title)}</h3>
${(section.body || []).map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('')}
${(section.math || []).map((eq) => `<div class="math-block">${eq}</div>`).join('')}
</div>`).join('');
}

function renderWarnings(entry) {
  if (!Array.isArray(entry.warnings) || !entry.warnings.length) return '';
  return `<div class="section-block">
<h3>Typische Fehler</h3>
${entry.warnings.map((item) => `<div class="warn-box"><strong>${escapeHtml(item.title)}:</strong> ${escapeHtml(item.body)}</div>`).join('')}
</div>`;
}

function renderTheoryHtml(entry, chapterTitle = entry.title) {
  if (THEORY_RECIPE[entry.id]) {
    return THEORY_RECIPE[entry.id];
  }
  const raw = [
    renderCards(entry),
    renderSections(entry),
    renderWarnings(entry)
  ]
    .filter(Boolean)
    .join('');
  return completeTheoryRecipe(normalizeTheoryHtml(raw), entry, { chapterTitle });
}

function finalizeTheory(entry, chapterTitle) {
  const curriculumEntry = CURRICULUM_BY_ID[entry.id] || entry;
  const mergeEntry = {
    ...curriculumEntry,
    motivation: entry.motivation ?? curriculumEntry.motivation,
    objectives: entry.objectives,
    formeln: entry.formeln
  };
  return completeTheoryRecipe(normalizeTheoryHtml(entry.theorie || ''), mergeEntry, {
    chapterTitle
  });
}

export const CHAPTERS = CURRICULUM.map(({ id, title, cat, short }) => ({
  id,
  title,
  cat,
  short
}));

function mergeContent(entry) {
  const sup = A_PLUS_SUPPLEMENT[entry.id] || {};
  const chapter = CHAPTERS.find((ch) => ch.id === entry.id);
  return {
    motivation: entry.motivation,
    theorie: renderTheoryHtml(entry, chapter?.title || entry.title),
    formeln: [...(entry.formeln || []), ...(sup.formeln || [])],
    aufgaben: [...(entry.aufgaben || []), ...(sup.aufgaben || [])]
  };
}

export const CONTENT = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, mergeContent(entry)])
);

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry || THEORY_RECIPE[ch.id]) continue;
  entry.theorie = finalizeTheory(entry, ch.title);
}

export const R_BLOCKS_BY_ID = Object.fromEntries(
  CURRICULUM
    .filter((entry) => Array.isArray(entry.rBlocks) && entry.rBlocks.length)
    .map((entry) => [entry.id, entry.rBlocks])
);
