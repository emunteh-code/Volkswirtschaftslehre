export const GRAPH_CONCEPTS = new Set([
  'liquiditaetsplanung',
  'intertemporale_wahl',
  'izf_kapitalwertfunktion',
  'kapitalstruktur'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    liquiditaetsplanung: `
<div class="graph-container">
<h3 class="graph-panel-title">Kapitalbedarfsprofil aus kumulierten Zahlungsströmen</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_liq_a0">Auszahlung t₀</label><input type="range" id="g_liq_a0" min="80" max="260" step="10" value="180" oninput="window.initGraph('liquiditaetsplanung', false)"><div class="val" id="v_liq_a0" aria-live="polite">180</div></div>
<div class="ctrl-group"><label for="g_liq_a1">Auszahlung t₁</label><input type="range" id="g_liq_a1" min="20" max="180" step="10" value="90" oninput="window.initGraph('liquiditaetsplanung', false)"><div class="val" id="v_liq_a1" aria-live="polite">90</div></div>
<div class="ctrl-group"><label for="g_liq_r2">Rückfluss t₂</label><input type="range" id="g_liq_r2" min="40" max="220" step="10" value="110" oninput="window.initGraph('liquiditaetsplanung', false)"><div class="val" id="v_liq_r2" aria-live="polite">110</div></div>
<div class="ctrl-group"><label for="g_liq_r3">Rückfluss t₃</label><input type="range" id="g_liq_r3" min="60" max="260" step="10" value="210" oninput="window.initGraph('liquiditaetsplanung', false)"><div class="val" id="v_liq_r3" aria-live="polite">210</div></div>
</div>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Kumulierte Zahlungsreihe mit markiertem maximalem Kapitalbedarf."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    intertemporale_wahl: `
<div class="graph-container">
<h3 class="graph-panel-title">Intertemporale Budgetgerade und Wahlpunkt</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_it_y0">Ausstattung y₀</label><input type="range" id="g_it_y0" min="40" max="160" step="5" value="90" oninput="window.initGraph('intertemporale_wahl', false)"><div class="val" id="v_it_y0" aria-live="polite">90</div></div>
<div class="ctrl-group"><label for="g_it_y1">Ausstattung y₁</label><input type="range" id="g_it_y1" min="40" max="180" step="5" value="90" oninput="window.initGraph('intertemporale_wahl', false)"><div class="val" id="v_it_y1" aria-live="polite">90</div></div>
<div class="ctrl-group"><label for="g_it_i">Zins i</label><input type="range" id="g_it_i" min="0" max="20" step="1" value="10" oninput="window.initGraph('intertemporale_wahl', false)"><div class="val" id="v_it_i" aria-live="polite">10</div></div>
<div class="ctrl-group"><label for="g_it_c0">Gewählter c₀</label><input type="range" id="g_it_c0" min="20" max="180" step="5" value="70" oninput="window.initGraph('intertemporale_wahl', false)"><div class="val" id="v_it_c0" aria-live="polite">70</div></div>
</div>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Intertemporale Budgetgerade mit Ausstattungspunkt und Wahlpunkt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    izf_kapitalwertfunktion: `
<div class="graph-container">
<h3 class="graph-panel-title">Kapitalwertfunktion und interner Zinsfuß</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_npv_a0">Anfangsauszahlung A₀</label><input type="range" id="g_npv_a0" min="80" max="320" step="10" value="180" oninput="window.initGraph('izf_kapitalwertfunktion', false)"><div class="val" id="v_npv_a0" aria-live="polite">180</div></div>
<div class="ctrl-group"><label for="g_npv_cf1">Rückfluss CF₁</label><input type="range" id="g_npv_cf1" min="40" max="220" step="10" value="110" oninput="window.initGraph('izf_kapitalwertfunktion', false)"><div class="val" id="v_npv_cf1" aria-live="polite">110</div></div>
<div class="ctrl-group"><label for="g_npv_cf2">Rückfluss CF₂</label><input type="range" id="g_npv_cf2" min="60" max="260" step="10" value="120" oninput="window.initGraph('izf_kapitalwertfunktion', false)"><div class="val" id="v_npv_cf2" aria-live="polite">120</div></div>
<div class="ctrl-group"><label for="g_npv_i">Kalkulationszins i</label><input type="range" id="g_npv_i" min="0" max="20" step="1" value="8" oninput="window.initGraph('izf_kapitalwertfunktion', false)"><div class="val" id="v_npv_i" aria-live="polite">8</div></div>
</div>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Kapitalwertprofil mit markiertem Kalkulationszins und internem Zinsfuß."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    kapitalstruktur: `
<div class="graph-container">
<h3 class="graph-panel-title">Leverage: Eigenkapitalrendite in guten und schwachen Szenarien</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_lev_good">ROA gut</label><input type="range" id="g_lev_good" min="8" max="20" step="1" value="12" oninput="window.initGraph('kapitalstruktur', false)"><div class="val" id="v_lev_good" aria-live="polite">12</div></div>
<div class="ctrl-group"><label for="g_lev_bad">ROA schwach</label><input type="range" id="g_lev_bad" min="0" max="10" step="1" value="4" oninput="window.initGraph('kapitalstruktur', false)"><div class="val" id="v_lev_bad" aria-live="polite">4</div></div>
<div class="ctrl-group"><label for="g_lev_rd">Fremdkapitalzins</label><input type="range" id="g_lev_rd" min="1" max="10" step="0.5" value="6" oninput="window.initGraph('kapitalstruktur', false)"><div class="val" id="v_lev_rd" aria-live="polite">6.0</div></div>
<div class="ctrl-group"><label for="g_lev_de">Aktuelles D/E</label><input type="range" id="g_lev_de" min="0" max="2.5" step="0.1" value="1.0" oninput="window.initGraph('kapitalstruktur', false)"><div class="val" id="v_lev_de" aria-live="polite">1.0</div></div>
</div>
<canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Hebelwirkung auf die Eigenkapitalrendite bei unterschiedlicher Gesamtkapitalrendite."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`
  };

  return `<div class="panel active">${graphConfigs[id] || '<div class="section-block"><h3>Grafik</h3><p>Dieses Thema wird hier über Theorie-, Aufgaben- und Intuitionslogik aufgebaut; ein zusätzliches Diagramm ist für dieses Konzept nicht nötig.</p></div>'}</div>`;
}
