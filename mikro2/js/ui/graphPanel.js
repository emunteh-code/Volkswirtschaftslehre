// ============================================================
// GRAPH PANEL RENDERER — Mikroökonomik II
// Final Benchmark Standard v14.0
// ============================================================

export const GRAPH_CONCEPTS = new Set([
  'spieltheorie_statisch',
  'spieltheorie_dynamisch',
  'oligopol_cournot_bertrand',
  'oligopol_stackelberg',
  'gleichgewicht',
  'externa'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    spieltheorie_statisch: `
<div class="graph-container">
<h3 class="graph-panel-title">Auszahlungsmatrix & Nash-Gleichgewicht</h3>
<p style="font-size:12px;color:var(--muted)">Visualisierung strategischer Interaktion.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    spieltheorie_dynamisch: `
<div class="graph-container">
<h3 class="graph-panel-title">Gemischte Strategien (2x2)</h3>
<p style="font-size:12px;color:var(--muted)">Indifferenzlogik fuer Mischwahrscheinlichkeiten.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    oligopol_cournot_bertrand: `
<div class="graph-container">
<h3 class="graph-panel-title">Cournot-Reaktionsfunktionen</h3>
<p style="font-size:12px;color:var(--muted)">Schnittpunkt der Reaktionskurven bestimmt das Gleichgewicht.</p>
<canvas id="graph_canvas" width="800" height="500" role="img"></canvas>
</div>`,
    oligopol_stackelberg: `
<div class="graph-container">
<h3 class="graph-panel-title">Stackelberg-Fuehrer/Folger</h3>
<p style="font-size:12px;color:var(--muted)">Sequenzielle Mengenwahl mit Rueckwaertsinduktion.</p>
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
