import { ensureMathJax } from '../../../assets/js/portal-core/utils/math.js';

/**
 * Trigger MathJax typesetting on a DOM element (lazy-loads MathJax on first use).
 * @param {Element|null} el - Target element; defaults to #content
 */
export function renderMath(el) {
  ensureMathJax();
  const target = el || document.getElementById('content');
  if (!target) return Promise.resolve();

  const typeset = () => {
    if (window.MathJax?.typesetClear) {
      MathJax.typesetClear([target]);
    }
    if (window.MathJax?.typesetPromise) {
      return MathJax.typesetPromise([target]).catch((err) => console.warn('MathJax:', err));
    }
    return Promise.resolve();
  };

  if (window.MathJax?.typesetPromise) {
    return typeset();
  }
  if (window.MathJax?.startup?.promise) {
    return MathJax.startup.promise.then(typeset).catch((err) => console.warn('MathJax:', err));
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
