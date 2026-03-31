// ============================================================
// KEYBOARD NAVIGATION — Mikroökonomik I
// Arrow key navigation, focus toggle, solution reveal
// ============================================================

import { CHAPTERS } from '../data/chapters.js';
import { showToast } from './toast.js';

/**
 * Initialize global keyboard event listeners.
 * @param {object} appState - Live reference to { current, toggleFocus }
 */
export function initKeyboard(appState) {
  document.addEventListener('keydown', e => {
    // Ignore key events while typing in inputs
    const tag = e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || e.target.isContentEditable) return;

    const idx = CHAPTERS.findIndex(c => c.id === appState.current);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (idx >= 0 && idx < CHAPTERS.length - 1) {
        appState.navigate(CHAPTERS[idx + 1].id);
      }
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (idx > 0) {
        appState.navigate(CHAPTERS[idx - 1].id);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const first = document.querySelector('.solution-block:not(.show)');
      if (first) {
        const n = first.id.replace('sol_', '');
        appState.toggleSolution(+n);
      }
    } else if (e.key === 'f' || e.key === 'F') {
      appState.toggleFocus();
    } else if (e.key === 'Escape') {
      // Close mobile sidebar
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
    }
  });
}
