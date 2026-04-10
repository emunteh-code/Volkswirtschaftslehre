// ============================================================
// GRAPH PANEL RENDERER — Makrooekonomik II
// Subject-correct interactive macro visuals for selected concepts
// ============================================================

export const GRAPH_CONCEPTS = new Set([
  'wechselkurs',
  'kaufkraftparitaet',
  'zinsparitaet',
  'nettoexporte',
  'marshall_lerner',
  'mundell_fleming',
  'zp_kurve',
  'wk_regime',
  'schuldenquote_dynamik',
  'schuldenfinanzierung_monetarisierung',
  'taylor_regel',
  'solow_basis',
  'steady_state',
  'goldene_sparquote',
  'phillipskurve',
  'geldmengen'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    wechselkurs: `
<div class="graph-container">
<h3 class="graph-panel-title">Realer Wechselkurs und Kaufkraftparität</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_e_nom">Nominaler WK E ($/€)</label><input type="range" id="g_e_nom" min="0.8" max="1.5" step="0.05" value="1.13" oninput="window.initGraph('wechselkurs', false)"><div class="val" id="v_e_nom" aria-live="polite">1.13</div></div>
<div class="ctrl-group"><label for="g_p_dom">Inlandsniveau P</label><input type="range" id="g_p_dom" min="80" max="140" step="5" value="100" oninput="window.initGraph('wechselkurs', false)"><div class="val" id="v_p_dom" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_p_for">Auslandsniveau P*</label><input type="range" id="g_p_for" min="80" max="140" step="5" value="100" oninput="window.initGraph('wechselkurs', false)"><div class="val" id="v_p_for" aria-live="polite">100</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Realer Wechselkurs als Funktion des nominalen Wechselkurses mit PPP-Linie."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    kaufkraftparitaet: `
<div class="graph-container">
<h3 class="graph-panel-title">Kaufkraftparität im Kursdiagramm</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_e_nom">Nominaler WK E ($/€)</label><input type="range" id="g_e_nom" min="0.8" max="1.5" step="0.05" value="1.13" oninput="window.initGraph('kaufkraftparitaet', false)"><div class="val" id="v_e_nom" aria-live="polite">1.13</div></div>
<div class="ctrl-group"><label for="g_p_dom">Inlandsniveau P</label><input type="range" id="g_p_dom" min="80" max="140" step="5" value="100" oninput="window.initGraph('kaufkraftparitaet', false)"><div class="val" id="v_p_dom" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_p_for">Auslandsniveau P*</label><input type="range" id="g_p_for" min="80" max="140" step="5" value="100" oninput="window.initGraph('kaufkraftparitaet', false)"><div class="val" id="v_p_for" aria-live="polite">100</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Kaufkraftparität mit PPP-Gleichgewicht und aktuellem realen Wechselkurs."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    zinsparitaet: `
<div class="graph-container">
<h3 class="graph-panel-title">Zinsparität und aktueller Wechselkurs</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_i_dom">Inlandszins i (%)</label><input type="range" id="g_i_dom" min="0" max="8" step="0.25" value="5" oninput="window.initGraph('zinsparitaet', false)"><div class="val" id="v_i_dom" aria-live="polite">5.00</div></div>
<div class="ctrl-group"><label for="g_i_for">Auslandszins i* (%)</label><input type="range" id="g_i_for" min="0" max="8" step="0.25" value="2" oninput="window.initGraph('zinsparitaet', false)"><div class="val" id="v_i_for" aria-live="polite">2.00</div></div>
<div class="ctrl-group"><label for="g_e_future">Erwarteter Kurs E^e</label><input type="range" id="g_e_future" min="0.8" max="1.5" step="0.05" value="1.2" oninput="window.initGraph('zinsparitaet', false)"><div class="val" id="v_e_future" aria-live="polite">1.20</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Zinsparität mit aktuellem nominalem Wechselkurs in Abhängigkeit vom Inlandszins."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    nettoexporte: `
<div class="graph-container">
<h3 class="graph-panel-title">Nettoexporte und realer Wechselkurs</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_domestic">Inlandsnachfrage</label><input type="range" id="g_domestic" min="0.6" max="1.8" step="0.1" value="1.1" oninput="window.initGraph('nettoexporte', false)"><div class="val" id="v_domestic" aria-live="polite">1.1</div></div>
<div class="ctrl-group"><label for="g_foreign">Auslandsnachfrage</label><input type="range" id="g_foreign" min="0.6" max="1.8" step="0.1" value="1.2" oninput="window.initGraph('nettoexporte', false)"><div class="val" id="v_foreign" aria-live="polite">1.2</div></div>
<div class="ctrl-group"><label for="g_eps">Realer WK ε</label><input type="range" id="g_eps" min="0.6" max="1.8" step="0.05" value="1.1" oninput="window.initGraph('nettoexporte', false)"><div class="val" id="v_eps" aria-live="polite">1.10</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Nettoexporte in Abhängigkeit vom realen Wechselkurs."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    marshall_lerner: `
<div class="graph-container">
<h3 class="graph-panel-title">Marshall-Lerner-Bedingung und J-Kurve</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_ml_short">Kurzfristiger Preiseffekt</label><input type="range" id="g_ml_short" min="6" max="24" step="1" value="14" oninput="window.initGraph('marshall_lerner', false)"><div class="val" id="v_ml_short" aria-live="polite">14</div></div>
<div class="ctrl-group"><label for="g_ml_gain">Langfristiger Mengeneffekt</label><input type="range" id="g_ml_gain" min="4" max="28" step="1" value="16" oninput="window.initGraph('marshall_lerner', false)"><div class="val" id="v_ml_gain" aria-live="polite">16</div></div>
<div class="ctrl-group"><label for="g_ml_speed">Anpassungsgeschwindigkeit</label><input type="range" id="g_ml_speed" min="0.4" max="1.8" step="0.1" value="1.0" oninput="window.initGraph('marshall_lerner', false)"><div class="val" id="v_ml_speed" aria-live="polite">1.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: J-Kurve der Handelsbilanz nach einer realen Abwertung."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    mundell_fleming: `
<div class="graph-container">
<h3 class="graph-panel-title">Mundell-Fleming: IS und ZP</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_fiscal">Fiskalimpuls</label><input type="range" id="g_fiscal" min="-1" max="2" step="0.1" value="0.6" oninput="window.initGraph('mundell_fleming', false)"><div class="val" id="v_fiscal" aria-live="polite">0.6</div></div>
<div class="ctrl-group"><label for="g_iworld">Weltzins i*</label><input type="range" id="g_iworld" min="0.5" max="6" step="0.1" value="2.5" oninput="window.initGraph('mundell_fleming', false)"><div class="val" id="v_iworld" aria-live="polite">2.5</div></div>
<div class="ctrl-group"><label for="g_risk">Risikopraemie</label><input type="range" id="g_risk" min="0" max="3" step="0.1" value="0.4" oninput="window.initGraph('mundell_fleming', false)"><div class="val" id="v_risk" aria-live="polite">0.4</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Mundell-Fleming-Modell mit IS-Kurve und horizontaler ZP-Linie."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    zp_kurve: `
<div class="graph-container">
<h3 class="graph-panel-title">ZP-Kurve im (Y,i)-Raum</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_zp_world">Weltzins i*</label><input type="range" id="g_zp_world" min="0.5" max="6" step="0.1" value="2.5" oninput="window.initGraph('zp_kurve', false)"><div class="val" id="v_zp_world" aria-live="polite">2.5</div></div>
<div class="ctrl-group"><label for="g_zp_mobility">Kapitalmobilität</label><input type="range" id="g_zp_mobility" min="0.6" max="2.4" step="0.1" value="1.4" oninput="window.initGraph('zp_kurve', false)"><div class="val" id="v_zp_mobility" aria-live="polite">1.4</div></div>
<div class="ctrl-group"><label for="g_zp_y">Aktuelles Einkommen Y</label><input type="range" id="g_zp_y" min="50" max="130" step="2" value="92" oninput="window.initGraph('zp_kurve', false)"><div class="val" id="v_zp_y" aria-live="polite">92</div></div>
<div class="ctrl-group"><label for="g_zp_i">Aktueller Inlandszins i</label><input type="range" id="g_zp_i" min="0.5" max="7" step="0.1" value="3.4" oninput="window.initGraph('zp_kurve', false)"><div class="val" id="v_zp_i" aria-live="polite">3.4</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: ZP-Kurve im Einkommens-Zins-Diagramm mit aktueller Lage relativ zum Zahlungsbilanzgleichgewicht."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    wk_regime: `
<div class="graph-container">
<h3 class="graph-panel-title">Feste versus flexible Wechselkurse bei externem Schock</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_regime_shock">Negativer externer Schock</label><input type="range" id="g_regime_shock" min="0.6" max="2.6" step="0.1" value="1.4" oninput="window.initGraph('wk_regime', false)"><div class="val" id="v_regime_shock" aria-live="polite">1.4</div></div>
<div class="ctrl-group"><label for="g_regime_flex">Anpassung bei flexiblem WK</label><input type="range" id="g_regime_flex" min="0.5" max="1.8" step="0.1" value="1.2" oninput="window.initGraph('wk_regime', false)"><div class="val" id="v_regime_flex" aria-live="polite">1.2</div></div>
<div class="ctrl-group"><label for="g_regime_peg">Verteidigungsintensität im Peg</label><input type="range" id="g_regime_peg" min="0.4" max="1.8" step="0.1" value="1.1" oninput="window.initGraph('wk_regime', false)"><div class="val" id="v_regime_peg" aria-live="polite">1.1</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Anpassung der Outputlücke unter flexiblem und festem Wechselkursregime."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    schuldenquote_dynamik: `
<div class="graph-container">
<h3 class="graph-panel-title">Schuldenquote im Zeitverlauf</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_b0">Startquote b₀</label><input type="range" id="g_b0" min="20" max="140" step="5" value="70" oninput="window.initGraph('schuldenquote_dynamik', false)"><div class="val" id="v_b0" aria-live="polite">70</div></div>
<div class="ctrl-group"><label for="g_r">Zins r (%)</label><input type="range" id="g_r" min="0" max="8" step="0.5" value="4" oninput="window.initGraph('schuldenquote_dynamik', false)"><div class="val" id="v_r" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_g">Wachstum g (%)</label><input type="range" id="g_g" min="0" max="6" step="0.5" value="2" oninput="window.initGraph('schuldenquote_dynamik', false)"><div class="val" id="v_g" aria-live="polite">2.0</div></div>
<div class="ctrl-group"><label for="g_ps">Primaersaldo (%)</label><input type="range" id="g_ps" min="-4" max="4" step="0.5" value="1" oninput="window.initGraph('schuldenquote_dynamik', false)"><div class="val" id="v_ps" aria-live="polite">1.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Schuldenquote unter unterschiedlichen Zins-Wachstums-Differenzen und Primaersalden."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    schuldenfinanzierung_monetarisierung: `
<div class="graph-container">
<h3 class="graph-panel-title">Schuldenquote im Zeitverlauf</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_b0">Startquote b₀</label><input type="range" id="g_b0" min="20" max="140" step="5" value="70" oninput="window.initGraph('schuldenfinanzierung_monetarisierung', false)"><div class="val" id="v_b0" aria-live="polite">70</div></div>
<div class="ctrl-group"><label for="g_r">Zins r (%)</label><input type="range" id="g_r" min="0" max="8" step="0.5" value="4" oninput="window.initGraph('schuldenfinanzierung_monetarisierung', false)"><div class="val" id="v_r" aria-live="polite">4.0</div></div>
<div class="ctrl-group"><label for="g_g">Wachstum g (%)</label><input type="range" id="g_g" min="0" max="6" step="0.5" value="2" oninput="window.initGraph('schuldenfinanzierung_monetarisierung', false)"><div class="val" id="v_g" aria-live="polite">2.0</div></div>
<div class="ctrl-group"><label for="g_ps">Primaersaldo (%)</label><input type="range" id="g_ps" min="-4" max="4" step="0.5" value="1" oninput="window.initGraph('schuldenfinanzierung_monetarisierung', false)"><div class="val" id="v_ps" aria-live="polite">1.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Schuldenquote unter unterschiedlichen Zins-Wachstums-Differenzen und Primaersalden."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    taylor_regel: `
<div class="graph-container">
<h3 class="graph-panel-title">Taylor-Regel</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_rstar">Natuerlicher Realzins r*</label><input type="range" id="g_rstar" min="0" max="5" step="0.25" value="2" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_rstar" aria-live="polite">2.00</div></div>
<div class="ctrl-group"><label for="g_pistar">Inflationsziel π*</label><input type="range" id="g_pistar" min="0" max="4" step="0.25" value="2" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_pistar" aria-live="polite">2.00</div></div>
<div class="ctrl-group"><label for="g_a">Inflationskoeff. a</label><input type="range" id="g_a" min="0.1" max="2.5" step="0.1" value="0.5" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_a" aria-live="polite">0.5</div></div>
<div class="ctrl-group"><label for="g_b">Outputkoeff. b</label><input type="range" id="g_b" min="0" max="1.5" step="0.1" value="0.5" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_b" aria-live="polite">0.5</div></div>
<div class="ctrl-group"><label for="g_pi_current">Aktuelle Inflation</label><input type="range" id="g_pi_current" min="0" max="6" step="0.25" value="3" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_pi_current" aria-live="polite">3.00</div></div>
<div class="ctrl-group"><label for="g_y_gap">Outputlücke (y - yₙ)</label><input type="range" id="g_y_gap" min="-3" max="3" step="0.25" value="0.5" oninput="window.initGraph('taylor_regel', false)"><div class="val" id="v_y_gap" aria-live="polite">0.50</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Taylor-Regel mit Inflations- und Outputlücke."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    solow_basis: `
<div class="graph-container">
<h3 class="graph-panel-title">Solow-Modell: sf(k) und Break-even-Investition</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_s">Sparquote s</label><input type="range" id="g_s" min="0.1" max="0.6" step="0.02" value="0.3" oninput="window.initGraph('solow_basis', false)"><div class="val" id="v_s" aria-live="polite">0.30</div></div>
<div class="ctrl-group"><label for="g_a">Produktivitaet A</label><input type="range" id="g_a" min="0.8" max="2" step="0.1" value="1.2" oninput="window.initGraph('solow_basis', false)"><div class="val" id="v_a" aria-live="polite">1.2</div></div>
<div class="ctrl-group"><label for="g_break">δ+n</label><input type="range" id="g_break" min="0.05" max="0.25" step="0.01" value="0.12" oninput="window.initGraph('solow_basis', false)"><div class="val" id="v_break" aria-live="polite">0.12</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Solow-Diagramm mit Investitions- und Break-even-Kurve."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    steady_state: `
<div class="graph-container">
<h3 class="graph-panel-title">Steady State und Anpassungsrichtung</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_ss_s">Sparquote s</label><input type="range" id="g_ss_s" min="0.1" max="0.6" step="0.02" value="0.28" oninput="window.initGraph('steady_state', false)"><div class="val" id="v_ss_s" aria-live="polite">0.28</div></div>
<div class="ctrl-group"><label for="g_ss_loss">δ + n</label><input type="range" id="g_ss_loss" min="0.05" max="0.25" step="0.01" value="0.12" oninput="window.initGraph('steady_state', false)"><div class="val" id="v_ss_loss" aria-live="polite">0.12</div></div>
<div class="ctrl-group"><label for="g_ss_a">Produktivität A</label><input type="range" id="g_ss_a" min="0.8" max="2" step="0.1" value="1.2" oninput="window.initGraph('steady_state', false)"><div class="val" id="v_ss_a" aria-live="polite">1.2</div></div>
<div class="ctrl-group"><label for="g_ss_k">Aktuelles k</label><input type="range" id="g_ss_k" min="1" max="22" step="0.5" value="7.5" oninput="window.initGraph('steady_state', false)"><div class="val" id="v_ss_k" aria-live="polite">7.5</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Solow-Diagramm mit aktuellem Kapitalbestand relativ zum Steady State."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    goldene_sparquote: `
<div class="graph-container">
<h3 class="graph-panel-title">Goldene Sparquote und Konsummaximum</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_golden_alpha">Kapitalanteil α</label><input type="range" id="g_golden_alpha" min="0.2" max="0.6" step="0.02" value="0.35" oninput="window.initGraph('goldene_sparquote', false)"><div class="val" id="v_golden_alpha" aria-live="polite">0.35</div></div>
<div class="ctrl-group"><label for="g_golden_loss">δ + n</label><input type="range" id="g_golden_loss" min="0.04" max="0.22" step="0.01" value="0.10" oninput="window.initGraph('goldene_sparquote', false)"><div class="val" id="v_golden_loss" aria-live="polite">0.10</div></div>
<div class="ctrl-group"><label for="g_golden_a">Produktivität A</label><input type="range" id="g_golden_a" min="0.8" max="2" step="0.1" value="1.1" oninput="window.initGraph('goldene_sparquote', false)"><div class="val" id="v_golden_a" aria-live="polite">1.1</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Steady-State-Konsum als Funktion des Kapitalstocks mit markiertem goldenen Kapitalstock."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    phillipskurve: `
<div class="graph-container">
<h3 class="graph-panel-title">Erwartungsaugmentierte Phillipskurve</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_pie">Erwartete Inflation πᵉ</label><input type="range" id="g_pie" min="0" max="5" step="0.25" value="2" oninput="window.initGraph('phillipskurve', false)"><div class="val" id="v_pie" aria-live="polite">2.00</div></div>
<div class="ctrl-group"><label for="g_un">Nat. Arbeitslosigkeit uₙ</label><input type="range" id="g_un" min="2" max="8" step="0.25" value="4.5" oninput="window.initGraph('phillipskurve', false)"><div class="val" id="v_un" aria-live="polite">4.50</div></div>
<div class="ctrl-group"><label for="g_alpha">Steigung α</label><input type="range" id="g_alpha" min="0.2" max="1.5" step="0.1" value="0.8" oninput="window.initGraph('phillipskurve', false)"><div class="val" id="v_alpha" aria-live="polite">0.8</div></div>
<div class="ctrl-group"><label for="g_u_current">Aktuelles u</label><input type="range" id="g_u_current" min="2" max="9" step="0.25" value="5.5" oninput="window.initGraph('phillipskurve', false)"><div class="val" id="v_u_current" aria-live="polite">5.50</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Phillipskurve mit aktuellem Arbeitslosigkeits- und Inflationspunkt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    geldmengen: `
<div class="graph-container">
<h3 class="graph-panel-title">LM-Kurve</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_mp_real">Reale Geldmenge M/P</label><input type="range" id="g_mp_real" min="20" max="80" step="5" value="45" oninput="window.initGraph('geldmengen', false)"><div class="val" id="v_mp_real" aria-live="polite">45</div></div>
<div class="ctrl-group"><label for="g_kappa">Transaktionssens. k</label><input type="range" id="g_kappa" min="0.2" max="0.8" step="0.05" value="0.45" oninput="window.initGraph('geldmengen', false)"><div class="val" id="v_kappa" aria-live="polite">0.45</div></div>
<div class="ctrl-group"><label for="g_h">Zinssens. h</label><input type="range" id="g_h" min="4" max="14" step="1" value="9" oninput="window.initGraph('geldmengen', false)"><div class="val" id="v_h" aria-live="polite">9</div></div>
<div class="ctrl-group"><label for="g_y_current">Aktuelles Y</label><input type="range" id="g_y_current" min="20" max="120" step="5" value="70" oninput="window.initGraph('geldmengen', false)"><div class="val" id="v_y_current" aria-live="polite">70</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: LM-Kurve in Abhängigkeit von Einkommen und Zins."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`
  };

  return `<div class="panel active">${graphConfigs[id] || '<div class="section-block"><h3>Grafik</h3><p>Dieses Thema wird hier über Theorie, Formeln und Aufgabenpfad gelernt. Eine zusätzliche Makro-Grafik ist für dieses Konzept nicht nötig.</p></div>'}</div>`;
}
