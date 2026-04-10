// ============================================================
// GRAPH PANEL RENDERER — Makroökonomik I
// Subject-correct interactive macro visuals for benchmark concepts
// ============================================================

export const GRAPH_CONCEPTS = new Set([
  'guetermarkt',
  'multiplikator',
  'geldnachfrage',
  'islm',
  'politikmix',
  'arbeitsmarkt',
  'phillips'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    guetermarkt: `
<div class="graph-container">
<h3 class="graph-panel-title">Keynes-Kreuz: Nachfrage und Gleichgewicht</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_goods_a">Autonome Nachfrage A</label><input type="range" id="g_goods_a" min="80" max="260" step="10" value="150" oninput="window.initGraph('guetermarkt', false)"><div class="val" id="v_goods_a" aria-live="polite">150</div></div>
<div class="ctrl-group"><label for="g_goods_c1">Konsumquote c₁</label><input type="range" id="g_goods_c1" min="0.3" max="0.9" step="0.05" value="0.70" oninput="window.initGraph('guetermarkt', false)"><div class="val" id="v_goods_c1" aria-live="polite">0.70</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Keynes-Kreuz mit Nachfragegerade und 45-Grad-Linie."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    multiplikator: `
<div class="graph-container">
<h3 class="graph-panel-title">Multiplikator: Erstimpuls und Gesamteffekt</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_mult_a0">Ausgangsnachfrage A₀</label><input type="range" id="g_mult_a0" min="80" max="220" step="10" value="130" oninput="window.initGraph('multiplikator', false)"><div class="val" id="v_mult_a0" aria-live="polite">130</div></div>
<div class="ctrl-group"><label for="g_mult_impulse">Impuls ΔG</label><input type="range" id="g_mult_impulse" min="10" max="80" step="5" value="40" oninput="window.initGraph('multiplikator', false)"><div class="val" id="v_mult_impulse" aria-live="polite">40</div></div>
<div class="ctrl-group"><label for="g_mult_c1">Konsumquote c₁</label><input type="range" id="g_mult_c1" min="0.3" max="0.9" step="0.05" value="0.75" oninput="window.initGraph('multiplikator', false)"><div class="val" id="v_mult_c1" aria-live="polite">0.75</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Keynes-Kreuz mit alter und neuer Nachfragekurve sowie Multiplikatoreffekt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    geldnachfrage: `
<div class="graph-container">
<h3 class="graph-panel-title">Geldmarkt: Geldnachfrage und reales Geldangebot</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_money_mp">Reale Geldmenge M/P</label><input type="range" id="g_money_mp" min="20" max="80" step="5" value="45" oninput="window.initGraph('geldnachfrage', false)"><div class="val" id="v_money_mp" aria-live="polite">45</div></div>
<div class="ctrl-group"><label for="g_money_y">Einkommen Y</label><input type="range" id="g_money_y" min="60" max="160" step="5" value="100" oninput="window.initGraph('geldnachfrage', false)"><div class="val" id="v_money_y" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_money_h">Zinssensitivität h</label><input type="range" id="g_money_h" min="6" max="18" step="1" value="10" oninput="window.initGraph('geldnachfrage', false)"><div class="val" id="v_money_h" aria-live="polite">10</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Geldmarkt mit fallender Geldnachfrage und vertikalem realem Geldangebot."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    islm: `
<div class="graph-container">
<h3 class="graph-panel-title">IS-LM bei Zinssteuerung</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_islm_aut">Autonome Nachfrage</label><input type="range" id="g_islm_aut" min="60" max="180" step="5" value="110" oninput="window.initGraph('islm', false)"><div class="val" id="v_islm_aut" aria-live="polite">110</div></div>
<div class="ctrl-group"><label for="g_islm_slope">IS-Sensitivität</label><input type="range" id="g_islm_slope" min="4" max="14" step="1" value="8" oninput="window.initGraph('islm', false)"><div class="val" id="v_islm_slope" aria-live="polite">8</div></div>
<div class="ctrl-group"><label for="g_islm_i">Zielzins ī</label><input type="range" id="g_islm_i" min="1" max="8" step="0.25" value="4" oninput="window.initGraph('islm', false)"><div class="val" id="v_islm_i" aria-live="polite">4.00</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: IS-Kurve und horizontale Zinsregel."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    politikmix: `
<div class="graph-container">
<h3 class="graph-panel-title">Politikmix und Crowding-Out</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_policy_shift">Fiskalimpuls</label><input type="range" id="g_policy_shift" min="10" max="70" step="5" value="35" oninput="window.initGraph('politikmix', false)"><div class="val" id="v_policy_shift" aria-live="polite">35</div></div>
<div class="ctrl-group"><label for="g_policy_lm">LM-Steigung</label><input type="range" id="g_policy_lm" min="0.02" max="0.10" step="0.01" value="0.06" oninput="window.initGraph('politikmix', false)"><div class="val" id="v_policy_lm" aria-live="polite">0.06</div></div>
<div class="ctrl-group"><label for="g_policy_i0">Ausgangszins</label><input type="range" id="g_policy_i0" min="1" max="7" step="0.25" value="3.5" oninput="window.initGraph('politikmix', false)"><div class="val" id="v_policy_i0" aria-live="polite">3.50</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Politikmix mit alter und neuer IS-Kurve sowie LM-Kurve."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    arbeitsmarkt: `
<div class="graph-container">
<h3 class="graph-panel-title">Arbeitsmarkt: WS-PS-Gleichgewicht</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_labour_z">Arbeitsmarktparameter z</label><input type="range" id="g_labour_z" min="0.70" max="1.20" step="0.05" value="1.00" oninput="window.initGraph('arbeitsmarkt', false)"><div class="val" id="v_labour_z" aria-live="polite">1.00</div></div>
<div class="ctrl-group"><label for="g_labour_mu">Markup μ</label><input type="range" id="g_labour_mu" min="0.05" max="0.50" step="0.05" value="0.20" oninput="window.initGraph('arbeitsmarkt', false)"><div class="val" id="v_labour_mu" aria-live="polite">0.20</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: WS- und PS-Kurve mit markierter natürlicher Arbeitslosigkeit."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    phillips: `
<div class="graph-container">
<h3 class="graph-panel-title">Phillipskurve und Inflationserwartungen</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_pc_pie">Erwartete Inflation πᵉ</label><input type="range" id="g_pc_pie" min="0" max="5" step="0.25" value="2.0" oninput="window.initGraph('phillips', false)"><div class="val" id="v_pc_pie" aria-live="polite">2.00</div></div>
<div class="ctrl-group"><label for="g_pc_un">Natürliche ALQ uₙ</label><input type="range" id="g_pc_un" min="3" max="8" step="0.25" value="5.0" oninput="window.initGraph('phillips', false)"><div class="val" id="v_pc_un" aria-live="polite">5.00</div></div>
<div class="ctrl-group"><label for="g_pc_alpha">Sensitivität α</label><input type="range" id="g_pc_alpha" min="0.4" max="1.5" step="0.1" value="0.9" oninput="window.initGraph('phillips', false)"><div class="val" id="v_pc_alpha" aria-live="polite">0.9</div></div>
<div class="ctrl-group"><label for="g_pc_u">Aktuelle ALQ u</label><input type="range" id="g_pc_u" min="3" max="9" step="0.25" value="4.25" oninput="window.initGraph('phillips', false)"><div class="val" id="v_pc_u" aria-live="polite">4.25</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Erwartungsaugmentierte Phillipskurve mit aktuellem Punkt und NAIRU."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`
  };

  return `<div class="panel active">${graphConfigs[id] || '<div class="section-block"><h3>Grafik</h3><p>Dieses Thema wird in Makroökonomik I hier über Theorie-, Aufgaben- und Intuitionslogik aufgebaut; ein zusätzliches Diagramm ist für dieses Konzept nicht nötig.</p></div>'}</div>`;
}
