// ============================================================
// MATHJAX HELPER — Ökonometrie
// Centralized MathJax typeset triggers
// ============================================================

/**
 * Trigger MathJax typesetting on a DOM element (or the whole content area).
 * Safe to call before MathJax has loaded — waits for startup if needed.
 * @param {Element|null} el - Target element; defaults to #content
 */
export function renderMath(el) {
  const target = el || document.getElementById('content');
  if (!target) return Promise.resolve();

  const typeset = () => {
    if (window.MathJax?.typesetClear) {
      MathJax.typesetClear([target]);
    }
    if (window.MathJax?.typesetPromise) {
      return MathJax.typesetPromise([target]).catch((err) => {
        console.warn('MathJax:', err);
      });
    }
    return Promise.resolve();
  };

  if (window.MathJax?.typesetPromise) {
    return typeset();
  } else if (window.MathJax?.startup?.promise) {
    return MathJax.startup.promise
      .then(typeset)
      .catch((err) => console.warn('MathJax:', err));
  }

  return new Promise((resolve) => {
    const poll = setInterval(() => {
      if (window.MathJax?.typesetPromise) {
        clearInterval(poll);
        Promise.resolve(typeset()).finally(resolve);
      }
    }, 100);
    setTimeout(() => {
      clearInterval(poll);
      resolve();
    }, 10000);
  });
}
