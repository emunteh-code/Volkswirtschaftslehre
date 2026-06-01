import { renderGraphShell, wrapGraphPanel } from '../../../assets/js/portal-core/ui/graphShell.js';

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
    funktionen_gleichungen: renderGraphShell({
      conceptId: id,
      title: 'Transformationen einer quadratischen Funktion',
      controls: `
      <div class="ctrl-group"><label for="g_fun_a">Streckung $a$</label><input type="range" id="g_fun_a" min="-2" max="2" step="0.5" value="1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_a" aria-live="polite">1.0</div></div>
      <div class="ctrl-group"><label for="g_fun_c">Horizontal $c$</label><input type="range" id="g_fun_c" min="-3" max="3" step="0.5" value="1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_c" aria-live="polite">1.0</div></div>
      <div class="ctrl-group"><label for="g_fun_d">Vertikal $d$</label><input type="range" id="g_fun_d" min="-3" max="4" step="0.5" value="-1" oninput="window.initGraph('funktionen_gleichungen', false)"><div class="val" id="v_fun_d" aria-live="polite">-1.0</div></div>
      `,
      ariaLabel: 'Grafik: Grundparabel und transformierte quadratische Funktion mit markiertem Scheitelpunkt.'
    }),
    analysis_ableitung_grundlagen: renderGraphShell({
      conceptId: id,
      title: 'Tangente und momentane Änderungsrate',
      controls: `
      <div class="ctrl-group"><label for="g_der_x0">Stelle $x_0$</label><input type="range" id="g_der_x0" min="-3" max="3" step="0.25" value="1" oninput="window.initGraph('analysis_ableitung_grundlagen', false)"><div class="val" id="v_der_x0" aria-live="polite">1.00</div></div>
      `,
      ariaLabel: 'Grafik: Funktion mit markiertem Punkt und Tangente zur Veranschaulichung der Ableitung.'
    }),
    univariate_optimierung: renderGraphShell({
      conceptId: id,
      title: 'Gewinnparabel und Optimum',
      controls: `
      <div class="ctrl-group"><label for="g_opt_b">lineares Glied $b$</label><input type="range" id="g_opt_b" min="4" max="12" step="0.5" value="8" oninput="window.initGraph('univariate_optimierung', false)"><div class="val" id="v_opt_b" aria-live="polite">8.0</div></div>
      `,
      ariaLabel: 'Grafik: konkave Gewinnfunktion mit markiertem inneren Optimum.'
    }),
    analysis_multivariat: renderGraphShell({
      conceptId: id,
      title: 'Niveaukurven und Gradient',
      controls: `
      <div class="ctrl-group"><label for="g_multi_x">Punkt $x$</label><input type="range" id="g_multi_x" min="-3" max="3" step="0.25" value="1.5" oninput="window.initGraph('analysis_multivariat', false)"><div class="val" id="v_multi_x" aria-live="polite">1.50</div></div>
      <div class="ctrl-group"><label for="g_multi_y">Punkt $y$</label><input type="range" id="g_multi_y" min="-3" max="3" step="0.25" value="1" oninput="window.initGraph('analysis_multivariat', false)"><div class="val" id="v_multi_y" aria-live="polite">1.00</div></div>
      `,
      ariaLabel: 'Grafik: Niveaukurven einer bivariaten Funktion mit markiertem Punkt und Gradientenpfeil.'
    }),
    lagrange: renderGraphShell({
      conceptId: id,
      title: 'Niveaukurven mit Nebenbedingung',
      controls: `
      <div class="ctrl-group"><label for="g_lag_m">Restriktionswert $m$</label><input type="range" id="g_lag_m" min="4" max="12" step="0.5" value="8" oninput="window.initGraph('lagrange', false)"><div class="val" id="v_lag_m" aria-live="polite">8.0</div></div>
      `,
      ariaLabel: 'Grafik: Niveaukurven der Zielfunktion, lineare Nebenbedingung und Tangentialpunkt im Optimum.'
    }),
    integralrechnung: renderGraphShell({
      conceptId: id,
      title: 'Bestimmtes Integral als akkumulierte Fläche',
      controls: `
      <div class="ctrl-group"><label for="g_int_a">untere Grenze $a$</label><input type="range" id="g_int_a" min="0" max="3" step="0.25" value="0.5" oninput="window.initGraph('integralrechnung', false)"><div class="val" id="v_int_a" aria-live="polite">0.50</div></div>
      <div class="ctrl-group"><label for="g_int_b">obere Grenze $b$</label><input type="range" id="g_int_b" min="1" max="4" step="0.25" value="3" oninput="window.initGraph('integralrechnung', false)"><div class="val" id="v_int_b" aria-live="polite">3.00</div></div>
      `,
      ariaLabel: 'Grafik: Funktionsgraph mit schattierter Fläche zwischen zwei Integrationsgrenzen.'
    })
  };

  return wrapGraphPanel(graphConfigs[id] || '');
}
