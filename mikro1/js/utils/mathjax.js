// ============================================================
// MATHJAX HELPER — Mikroökonomik I
// Centralized MathJax typeset triggers
// ============================================================

/**
 * Trigger MathJax typesetting on a DOM element (or the whole content area).
 * Safe to call before MathJax has loaded — waits for startup if needed.
 * @param {Element|null} el - Target element; defaults to #content
 */
export function renderMath(el) {
  const target = el || document.getElementById('content');
  if (!target) return;

  const typeset = () => {
    if (window.MathJax?.typesetPromise) {
      MathJax.typesetPromise([target]).catch(err => console.warn('MathJax:', err));
    }
  };

  if (window.MathJax?.typesetPromise) {
    // Already fully loaded
    typeset();
  } else if (window.MathJax?.startup?.promise) {
    // Script parsed but startup pending
    MathJax.startup.promise.then(typeset);
  } else {
    // Script not yet parsed — poll until ready (max 10s)
    const poll = setInterval(() => {
      if (window.MathJax?.typesetPromise) {
        clearInterval(poll);
        typeset();
      }
    }, 100);
    setTimeout(() => clearInterval(poll), 10000);
  }
}
