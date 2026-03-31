// ============================================================
// GRAPH PANEL RENDERER — Ökonometrie
// Returns the HTML for the interactive graph controls + canvas
// ============================================================

/** Set of concept IDs that have interactive graphs */
export const GRAPH_CONCEPTS = new Set([
  'ols_intro'
]);

/**
 * Render the graph panel HTML for a given concept.
 * @param {string} id - concept ID
 * @returns {string} HTML string
 */
export function renderGraphPanel(id) {
  const graphConfigs = {
    ols_intro: `
<div class="graph-container">
<h3 class="graph-panel-title">Interaktive KQ-Regressionsgerade</h3>
<div class="graph-controls">
<p style="font-size:12px;color:var(--muted)">Visualisierung der OLS-Anpassung an eine Punktwolke.</p>
</div>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: OLS Regression."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
