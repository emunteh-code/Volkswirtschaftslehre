import { CURRICULUM } from './curriculum.js';

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
${entry.warnings.map((warning) => `<div class="warn-box"><strong>${escapeHtml(warning.title)}:</strong> ${escapeHtml(warning.body)}</div>`).join('')}
</div>`;
}

// rBlock is now excluded from theorie — it lives exclusively in the R-Anwendung tab
function renderTheoryHtml(entry) {
  return [
    renderCards(entry),
    renderSections(entry),
    renderWarnings(entry)
  ].filter(Boolean).join('');
}

export const CHAPTERS = CURRICULUM.map(({ id, title, cat, short }) => ({
  id,
  title,
  cat,
  short
}));

export const CONTENT = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, {
    motivation: entry.motivation,
    theorie: renderTheoryHtml(entry),
    formeln: entry.formeln || [],
    aufgaben: entry.aufgaben || []
  }])
);

// R blocks indexed by concept ID for the dedicated R-Anwendung tab
export const R_BLOCKS_BY_ID = Object.fromEntries(
  CURRICULUM
    .filter((entry) => entry.rBlock)
    .map((entry) => [entry.id, entry.rBlock])
);
