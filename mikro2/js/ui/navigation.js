// ============================================================
// NAVIGATION — Mikroökonomik I
// Sidebar nav builder, search filter, active-state management
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { loadProgress, loadSRS } from '../state/storage.js';
import { renderMath } from '../utils/mathjax.js';

/**
 * Build the sidebar navigation list from CHAPTERS.
 * @param {Function} onNavigate - callback(id) when a nav item is clicked
 */
export function buildNav(onNavigate) {
  const cats = {};
  CHAPTERS.forEach((c, i) => {
    if (!cats[c.cat]) cats[c.cat] = [];
    cats[c.cat].push({ ...c, idx: i + 1 });
  });
  const navList = document.getElementById('navList');
  if (!navList) return;
  navList.innerHTML = '';
  Object.entries(cats).forEach(([cat, items]) => {
    const sec = document.createElement('div');
    sec.className = 'nav-section';
    sec.innerHTML = `<div class="nav-section-title">${cat}</div>`;
    items.forEach(item => {
      const el = document.createElement('div');
      el.className = 'nav-item';
      el.id = 'nav-' + item.id;
      el.dataset.id = item.id;
      el.setAttribute('role', 'button');
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', `Konzept ${item.idx}: ${item.title}`);
      el.innerHTML = `<span class="num" aria-hidden="true">${item.idx}</span><span>${item.title}</span>`;
      el.onclick = () => onNavigate(item.id);
      el.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNavigate(item.id); } };
      sec.appendChild(el);
    });
    navList.appendChild(sec);
  });
}

/**
 * Filter nav items by search query.
 * @param {string} q - search string
 */
export function filterNav(q) {
  q = q.toLowerCase().trim();
  document.querySelectorAll('.nav-item').forEach(el => {
    const txt = el.textContent.toLowerCase();
    el.classList.toggle('hidden', q.length > 0 && !txt.includes(q));
  });
}

/**
 * Set the active nav item and scroll it into view.
 * @param {string} id - concept ID
 */
export function setActiveNav(id) {
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navEl = document.getElementById('nav-' + id);
  if (navEl) {
    navEl.classList.add('active');
    navEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }
}

/**
 * Update nav badges (mastery %, SRS due dot) for all items.
 */
export function updateNavBadges() {
  const p = loadProgress();
  const srs = loadSRS();
  const now = Date.now();
  document.querySelectorAll('.nav-item[data-id]').forEach(el => {
    const id = el.dataset.id;
    let badge = el.querySelector('.mastery');
    if (!badge) { badge = document.createElement('span'); badge.className = 'mastery'; el.appendChild(badge); }
    const oldDot = el.querySelector('.nav-due-dot');
    if (oldDot) oldDot.remove();
    const entry = p[id];
    if (entry) {
      const total = (entry.correct || 0) + (entry.wrong || 0);
      const acc = total > 0 ? Math.round((entry.correct || 0) / total * 100) : null;
      if (acc !== null && acc >= 80) { badge.textContent = acc + '%'; badge.className = 'mastery done'; }
      else if (acc !== null) { badge.textContent = acc + '%'; badge.className = 'mastery partial'; }
      else if (entry.views >= 1) { badge.textContent = '·'; badge.className = 'mastery partial'; }
      else { badge.textContent = ''; badge.className = 'mastery'; }
    } else { badge.textContent = ''; badge.className = 'mastery'; }
    const srsCard = srs[id];
    if (srsCard && srsCard.due <= now) {
      const dot = document.createElement('span');
      dot.className = 'nav-due-dot';
      dot.title = 'Wiederholung fällig';
      dot.setAttribute('aria-label', 'Wiederholung fällig');
      el.appendChild(dot);
    }
  });
}

/**
 * Update the overall progress bar in the sidebar.
 * @param {Object} progress - loaded progress data
 */
export function updateProgressUI(progress) {
  const total = CHAPTERS.length;
  const seen = Object.keys(progress).filter(id => CHAPTERS.find(c => c.id === id)).length;
  const pct = Math.round((seen / total) * 100);
  const fill = document.getElementById('progressFill');
  const txt = document.getElementById('progressText');
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = seen + ' / ' + total;
}
