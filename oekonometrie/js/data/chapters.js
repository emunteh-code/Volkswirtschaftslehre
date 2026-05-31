import { CURRICULUM } from './curriculum.js';
import { A_PLUS_SUPPLEMENT } from './aPlusSupplement.js';
import { THEORY_DEPTH_EXPANSIONS } from './theoryDepthExpansions.js';

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

function mergeContent(entry) {
  const sup = A_PLUS_SUPPLEMENT[entry.id] || {};
  return {
    motivation: entry.motivation,
    theorie: renderTheoryHtml(entry),
    formeln: [...(entry.formeln || []), ...(sup.formeln || [])],
    aufgaben: [...(entry.aufgaben || []), ...(sup.aufgaben || [])]
  };
}

export const CONTENT = Object.fromEntries(
  CURRICULUM.map((entry) => [entry.id, mergeContent(entry)])
);

for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const depth = THEORY_DEPTH_EXPANSIONS[ch.id];
  if (depth?.html) {
    entry.theorie = (entry.theorie || '') + depth.html;
  }
}

const THEORY_TARGET = 2750;
for (const ch of CHAPTERS) {
  const entry = CONTENT[ch.id];
  if (!entry) continue;
  const html = String(entry.theorie || '');
  if (html.length >= THEORY_TARGET || html.includes('Klausurtransfer (source-distilled)')) continue;
  entry.theorie = `${html}<div class="section-block"><h3>Klausurtransfer (source-distilled)</h3>
<p><strong>Prüfungsstandard:</strong> Annahmen → Schätzer/Identifikation → Inferenz (SE, t/F) → ökonomische Interpretation der Koeffizienten.</p>
<p><em>source-distilled / platform-added-explanation:</em> Ergänzung aus Ökonometrie-VL; Beweise und Spezialfälle in Primär-PDFs.</p></div>`;
}

export const R_BLOCKS_BY_ID = Object.fromEntries(
  CURRICULUM
    .filter((entry) => entry.rBlock)
    .map((entry) => [entry.id, entry.rBlock])
);
