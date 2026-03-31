// ============================================================
// THEME MODULE — Mikroökonomik I
// Dark/light mode toggle with localStorage persistence
// ============================================================

import { THEME_KEY } from '../data/srsConfig.js';
import { showToast } from './toast.js';

export function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
  const btn = document.getElementById('themeToggle');
  if (btn) btn.textContent = isLight ? 'Dunkel' : 'Hell';
  showToast(isLight ? 'Helles Theme' : 'Dunkles Theme', 'info');
  // Redraw all visible graphs on theme switch so colours update immediately
  setTimeout(() => {
    // Exam graphs (canvas_hicks / canvas_demand / canvas_isoquant)
    if (typeof window.__drawHicksGraph === 'function')    window.__drawHicksGraph();
    if (typeof window.__drawDemandGraph === 'function')   window.__drawDemandGraph();
    if (typeof window.__drawIsoquantGraph === 'function') window.__drawIsoquantGraph();
    // Active interactive concept graph — animate the colour transition in
    const activeGraph = document.getElementById('graph_canvas');
    if (activeGraph && window.__currentGraphId) {
      if (typeof window.initGraph === 'function') window.initGraph(window.__currentGraphId);
    }
  }, 50);
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  // Light mode is the default; opt in to dark
  if (saved !== 'dark') {
    document.body.classList.add('light-mode');
  }
  const btn = document.getElementById('themeToggle');
  const isLight = document.body.classList.contains('light-mode');
  if (btn) btn.textContent = isLight ? 'Dunkel' : 'Hell';
}
