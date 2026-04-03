// ============================================================
// RIGHT PANEL RENDERER — Ökonometrie
// Formula quick-reference, concept connections, common mistakes
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { CONTENT } from '../data/chapters.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderMath } from '../utils/mathjax.js';

export function clearRightPanel() {
  const rpF = document.getElementById('rpFormulas');
  const rpC = document.getElementById('rpConnections');
  const rpM = document.getElementById('rpMistakes');
  const formulasSection = rpF?.closest('.rp-section');
  const connectionsSection = rpC?.closest('.rp-section');
  const mistakesSection = rpM?.closest('.rp-section');

  if (rpF) rpF.innerHTML = '';
  if (rpC) rpC.innerHTML = '';
  if (rpM) rpM.innerHTML = '';
  if (formulasSection) formulasSection.hidden = true;
  if (connectionsSection) connectionsSection.hidden = true;
  if (mistakesSection) mistakesSection.hidden = true;
}

export function renderRightPanel(id) {
  const entry = CONTENT[id];
  const links = CONCEPT_LINKS[id];
  const chapterMap = Object.fromEntries(CHAPTERS.map((chapter) => [chapter.id, chapter]));
  const formulasSection = document.getElementById('rpFormulas')?.closest('.rp-section');
  const connectionsSection = document.getElementById('rpConnections')?.closest('.rp-section');
  const mistakesSection = document.getElementById('rpMistakes')?.closest('.rp-section');

  const rpF = document.getElementById('rpFormulas');
  if (rpF) {
    if (entry && entry.formeln && entry.formeln.length) {
      rpF.innerHTML = entry.formeln.map((formula, index) => `
<div class="rp-formula" title="Klicken zum Kopieren" role="button" tabindex="0" data-formula-idx="${index}">
  <div class="rp-f-name">${formula.label}</div>
  <div class="rp-f-eq">${formula.eq}</div>
</div>`).join('');

      rpF.querySelectorAll('[data-formula-idx]').forEach((el) => {
        const idx = parseInt(el.dataset.formulaIdx, 10);
        const eq = entry.formeln[idx].eq;
        const copy = () => navigator.clipboard.writeText(eq).catch(() => {});
        el.addEventListener('click', copy);
        el.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            copy();
          }
        });
      });

      renderMath(rpF);
      if (formulasSection) formulasSection.hidden = false;
    } else {
      rpF.innerHTML = '';
      if (formulasSection) formulasSection.hidden = true;
    }
  }

  const rpC = document.getElementById('rpConnections');
  if (rpC) {
    if (links) {
      const groups = [];
      const uses = (links.uses || []).map((uid) => chapterMap[uid]).filter(Boolean);
      const usedBy = (links.usedBy || []).map((uid) => chapterMap[uid]).filter(Boolean);

      if (uses.length) {
        groups.push(`<div class="rp-link-group">
<div class="rp-group-label">Setzt voraus</div>
${uses.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">←</span> ${chapter.title}</div>`).join('')}
</div>`);
      }

      if (usedBy.length) {
        groups.push(`<div class="rp-link-group">
<div class="rp-group-label">Wird gebraucht für</div>
${usedBy.map((chapter) => `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${chapter.id}')" onkeydown="if(event.key==='Enter')window.__navigate('${chapter.id}')"><span class="arrow" aria-hidden="true">→</span> ${chapter.title}</div>`).join('')}
</div>`);
      }

      const html = groups.join('');
      rpC.innerHTML = html;
      if (connectionsSection) connectionsSection.hidden = !html;
    } else {
      rpC.innerHTML = '';
      if (connectionsSection) connectionsSection.hidden = true;
    }
  }

  const rpM = document.getElementById('rpMistakes');
  if (rpM && entry && entry.theorie) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${entry.theorie}</div>`, 'text/html');
      const warnBoxes = doc.querySelectorAll('.warn-box');
      if (warnBoxes.length) {
        rpM.innerHTML = Array.from(warnBoxes).map((warningBox) => {
          const strong = warningBox.querySelector('strong');
          const title = strong ? strong.textContent.trim() : 'Fehler';
          if (strong) strong.remove();
          const bodyHtml = warningBox.innerHTML.trim();
          return `<div class="rp-mistake">
<div class="err">${title}</div>
<div class="fix">${bodyHtml}</div>
</div>`;
        }).join('');
        renderMath(rpM);
        if (mistakesSection) mistakesSection.hidden = false;
      } else {
        rpM.innerHTML = '';
        if (mistakesSection) mistakesSection.hidden = true;
      }
    } catch {
      rpM.innerHTML = '';
      if (mistakesSection) mistakesSection.hidden = true;
    }
  }
}
