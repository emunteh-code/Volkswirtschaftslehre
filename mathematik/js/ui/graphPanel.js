const panel = (title, controls, ariaLabel) => `
<div class="graph-container">
  <h3 class="graph-panel-title">${title}</h3>
  <div class="graph-controls">
    ${controls}
  </div>
  <canvas id="graph_canvas" width="920" height="560" role="img" aria-label="${ariaLabel}"></canvas>
  <div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`;

export const GRAPH_CONCEPTS = new Set([
  'funktionen_gleichungen',
  'analysis_ableitung_grundlagen',
  'univariate_optimierung',
  'analysis_multivariat',
  'lagrange',
  'integralrechnung'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    funktionen_gleichungen: panel(
      'Transformationen einer quadratischen Funktion',
      `
      <div class="ctrl-group"><label for="g_fun_a">Streckung $a$</label><input type="range" id="g_fun_a" min="-2" max="2" step="0.5" value="1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_a">1.0</div></div>
      <div class="ctrl-group"><label for="g_fun_c">Horizontal $c$</label><input type="range" id="g_fun_c" min="-3" max="3" step="0.5" value="1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_c">1.0</div></div>
      <div class="ctrl-group"><label for="g_fun_d">Vertikal $d$</label><input type="range" id="g_fun_d" min="-3" max="4" step="0.5" value="-1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_d">-1.0</div></div>
      `,
      'Grafik: Grundparabel und transformierte quadratische Funktion mit markiertem Scheitelpunkt.'
    ),
    analysis_ableitung_grundlagen: panel(
      'Tangente und momentane Änderungsrate',
      `
      <div class="ctrl-group"><label for="g_der_x0">Stelle $x_0$</label><input type="range" id="g_der_x0" min="-3" max="3" step="0.25" value="1" oninput="window.initGraph('analysis_ableitung_grundlagen', false)"><div class="val" id="v_der_x0">1.00</div></div>
      `,
      'Grafik: Funktion mit markiertem Punkt und Tangente zur Veranschaulichung der Ableitung.'
    ),
    univariate_optimierung: panel(
      'Gewinnparabel und Optimum',
      `
      <div class="ctrl-group"><label for="g_opt_b">lineares Glied $b$</label><input type="range" id="g_opt_b" min="4" max="12" step="0.5" value="8" oninput="window.initGraph('univariate_optimierung', false)"><div class="val" id="v_opt_b">8.0</div></div>
      `,
      'Grafik: konkave Gewinnfunktion mit markiertem inneren Optimum.'
    ),
    analysis_multivariat: panel(
      'Niveaukurven und Gradient',
      `
      <div class="ctrl-group"><label for="g_multi_x">Punkt $x$</label><input type="range" id="g_multi_x" min="-3" max="3" step="0.25" value="1.5" oninput="window.initGraph('analysis_multivariat', false)"><div class="val" id="v_multi_x">1.50</div></div>
      <div class="ctrl-group"><label for="g_multi_y">Punkt $y$</label><input type="range" id="g_multi_y" min="-3" max="3" step="0.25" value="1" oninput="window.initGraph('analysis_multivariat', false)"><div class="val" id="v_multi_y">1.00</div></div>
      `,
      'Grafik: Niveaukurven einer bivariaten Funktion mit markiertem Punkt und Gradientenpfeil.'
    ),
    lagrange: panel(
      'Niveaukurven mit Nebenbedingung',
      `
      <div class="ctrl-group"><label for="g_lag_m">Restriktionswert $m$</label><input type="range" id="g_lag_m" min="4" max="12" step="0.5" value="8" oninput="window.initGraph('lagrange', false)"><div class="val" id="v_lag_m">8.0</div></div>
      `,
      'Grafik: Niveaukurven der Zielfunktion, lineare Nebenbedingung und Tangentialpunkt im Optimum.'
    ),
    integralrechnung: panel(
      'Bestimmtes Integral als akkumulierte Fläche',
      `
      <div class="ctrl-group"><label for="g_int_a">untere Grenze $a$</label><input type="range" id="g_int_a" min="0" max="3" step="0.25" value="0.5" oninput="window.initGraph('integralrechnung', false)"><div class="val" id="v_int_a">0.50</div></div>
      <div class="ctrl-group"><label for="g_int_b">obere Grenze $b$</label><input type="range" id="g_int_b" min="1" max="4" step="0.25" value="3" oninput="window.initGraph('integralrechnung', false)"><div class="val" id="v_int_b">3.00</div></div>
      `,
      'Grafik: Funktionsgraph mit schattierter Fläche zwischen zwei Integrationsgrenzen.'
    )
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
