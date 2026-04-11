// ============================================================
// RIGHT PANEL RENDERER — Mikroökonomik I
// Formula quick-reference, concept connections, common mistakes
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { CONTENT } from '../data/chapters.js';
import { CONCEPT_LINKS } from '../data/conceptLinks.js';
import { renderMath } from '../utils/mathjax.js';

function isSemanticSchema(eq) {
  const s = String(eq || "").trim();
  if (!s || !/\\text\{/.test(s)) return false;
  const cleaned = s
    .replace(/\\text\{[^}]*\}/g, "")
    .replace(/\\(?:rightarrow|Rightarrow|leftarrow|Leftarrow|leftrightarrow|Leftrightarrow|neq|times|leq|geq|approx|equiv|subset|supset|cup|cap|wedge|vee|neg|forall|exists)/g, "")
    .replace(/[+\-=\s\\,;:|()/]/g, "")
    .replace(/\\cdot/g, "");
  return cleaned.trim() === "";
}

function renderSemanticSchema(eq) {
  return String(eq || "")
    .replace(/\\text\{([^}]*)\}/g, '<span class="schema-term">$1</span>')
    .replace(/\\rightarrow/g, '<span class="schema-arrow">\u2192</span>')
    .replace(/\\Rightarrow/g, '<span class="schema-arrow">\u21D2</span>')
    .replace(/\\leftarrow/g, '<span class="schema-arrow">\u2190</span>')
    .replace(/\\Leftrightarrow/g, '<span class="schema-arrow">\u21D4</span>')
    .replace(/\\leftrightarrow/g, '<span class="schema-arrow">\u2194</span>')
    .replace(/\\neq/g, '<span class="schema-op">\u2260</span>')
    .replace(/\\times/g, '<span class="schema-op">\u00D7</span>')
    .replace(/\\leq/g, '<span class="schema-op">\u2264</span>')
    .replace(/\\geq/g, '<span class="schema-op">\u2265</span>')
    .replace(/\\neg/g, '<span class="schema-op">\u00AC</span>')
    .replace(/\s*\+\s*/g, ' <span class="schema-op">+</span> ')
    .replace(/\s*=\s*/g, ' <span class="schema-op">=</span> ')
    .trim();
}

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

/**
 * Render the right sidebar panel for a concept.
 * @param {string} id - concept ID
 * @param {Function} onNavigate - navigate(id) callback
 */
export function renderRightPanel(id, onNavigate) {
  const d = CONTENT[id];
  const links = CONCEPT_LINKS[id];
  const chMap = Object.fromEntries(CHAPTERS.map(c => [c.id, c]));
  const formulasSection = document.getElementById('rpFormulas')?.closest('.rp-section');
  const connectionsSection = document.getElementById('rpConnections')?.closest('.rp-section');
  const mistakesSection = document.getElementById('rpMistakes')?.closest('.rp-section');

  // ── Formulas ──
  const rpF = document.getElementById('rpFormulas');
  if (rpF) {
    if (d && d.formeln && d.formeln.length) {
      // Use data-formula-idx instead of inline onclick to avoid escaping issues
      rpF.innerHTML = d.formeln.map((f, i) => {
        const eqHtml = isSemanticSchema(f.eq)
          ? `<div class="legal-schema">${renderSemanticSchema(f.eq)}</div>`
          : f.eq;
        return `
<div class="rp-formula" title="Klicken zum Kopieren" role="button" tabindex="0" data-formula-idx="${i}">
  <div class="rp-f-name">${f.label}</div>
  <div class="rp-f-eq">${eqHtml}</div>
</div>`;
      }).join('');
      // Bind copy handlers after innerHTML is set — formeln values are never user input
      rpF.querySelectorAll('[data-formula-idx]').forEach(el => {
        const idx = parseInt(el.dataset.formulaIdx, 10);
        const eq  = d.formeln[idx].eq;
        const copy = () => navigator.clipboard.writeText(eq).catch(() => {});
        el.addEventListener('click', copy);
        el.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); copy(); }
        });
      });
      renderMath(rpF);
      if (formulasSection) formulasSection.hidden = false;
    } else {
      rpF.innerHTML = '';
      if (formulasSection) formulasSection.hidden = true;
    }
  }

  // ── Connections ──
  const rpC = document.getElementById('rpConnections');
  if (rpC) {
    if (links) {
      let html = '';
      (links.uses || []).forEach(uid => {
        const c = chMap[uid];
        if (c) html += `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${uid}')" onkeydown="if(event.key==='Enter')window.__navigate('${uid}')"><span class="arrow" aria-hidden="true">←</span> ${c.title}</div>`;
      });
      (links.usedBy || []).forEach(uid => {
        const c = chMap[uid];
        if (c) html += `<div class="rp-conn" role="button" tabindex="0" onclick="window.__navigate('${uid}')" onkeydown="if(event.key==='Enter')window.__navigate('${uid}')"><span class="arrow" aria-hidden="true">→</span> ${c.title}</div>`;
      });
      rpC.innerHTML = html;
      if (connectionsSection) connectionsSection.hidden = !html;
    } else {
      rpC.innerHTML = '';
      if (connectionsSection) connectionsSection.hidden = true;
    }
  }

  // ── Common Mistakes ──
  const rpM = document.getElementById('rpMistakes');
  if (rpM && d && d.theorie) {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString('<div>' + d.theorie + '</div>', 'text/html');
      const warnBoxes = doc.querySelectorAll('.warn-box');
      if (warnBoxes.length) {
        rpM.innerHTML = Array.from(warnBoxes).map(wb => {
          const strong = wb.querySelector('strong');
          const title = strong ? strong.textContent.trim() : 'Fehler';
          // Remove the strong element so we get only the body text/HTML
          if (strong) strong.remove();
          const bodyHtml = wb.innerHTML.trim();
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
    } catch (e) {
      rpM.innerHTML = '';
      if (mistakesSection) mistakesSection.hidden = true;
    }
  }
}
