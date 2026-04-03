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

function renderRBlock(rBlock) {
  if (!rBlock) return '';
  return `<div class="section-block r-application-block">
<div class="r-application-head">
<span class="r-application-kicker">R-Anwendung</span>
<h3>Vom Modell zur Auswertung</h3>
</div>
<p>${escapeHtml(rBlock.purpose)}</p>
<div class="r-script-ref">${escapeHtml(rBlock.script)}</div>
<pre class="r-code-block"><code>${escapeHtml(rBlock.code)}</code></pre>
<div class="r-application-grid">
  <div class="r-application-card">
    <h4>Output lesen</h4>
    <p>${escapeHtml(rBlock.output)}</p>
  </div>
  <div class="r-application-card">
    <h4>Mini-Task</h4>
    <p>${escapeHtml(rBlock.miniTask)}</p>
  </div>
  <div class="r-application-card">
    <h4>Lösung</h4>
    <p>${escapeHtml(rBlock.solution)}</p>
  </div>
</div>
${Array.isArray(rBlock.pitfalls) && rBlock.pitfalls.length ? `<div class="r-pitfalls">
  <h4>Häufige R-Fehler</h4>
  <ul>${rBlock.pitfalls.map((pitfall) => `<li>${escapeHtml(pitfall)}</li>`).join('')}</ul>
</div>` : ''}
</div>`;
}

function renderTheoryHtml(entry) {
  return [
    renderCards(entry),
    renderSections(entry),
    renderWarnings(entry),
    renderRBlock(entry.rBlock)
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

