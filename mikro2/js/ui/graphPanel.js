// ============================================================
// GRAPH PANEL RENDERER — Mikroökonomik II
// Final Benchmark Standard v14.0
// ============================================================

export const GRAPH_CONCEPTS = new Set([
  'spieltheorie',
  'oligopol',
  'gleichgewicht',
  'externa'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    spieltheorie: `
<div class="graph-container">
<h3 class="graph-panel-title">Auszahlungsmatrix & Nash-Gleichgewicht</h3>
<p style="font-size:12px;color:var(--muted)">Visualisierung strategischer Interaktion.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    oligopol: `
<div class="graph-container">
<h3 class="graph-panel-title">Cournot-Reaktionsfunktionen</h3>
<p style="font-size:12px;color:var(--muted)">Schnittpunkt der Reaktionskurven bestimmt das Gleichgewicht.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    gleichgewicht: `
<div class="graph-container">
<h3 class="graph-panel-title">Edgeworth-Box</h3>
<p style="font-size:12px;color:var(--muted)">Tauschkurve und Kontraktkurve.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    externa: `
<div class="graph-container">
<h3 class="graph-panel-title">Internalisierung externer Effekte</h3>
<p style="font-size:12px;color:var(--muted)">Vergleich zwischen Marktgleichgewicht und sozialem Optimum.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
