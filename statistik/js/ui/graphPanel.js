import { renderGraphShell, wrapGraphPanel } from '../../../assets/js/portal-core/ui/graphShell.js';

export const GRAPH_CONCEPTS = new Set([
  'bivariat',
  'schaetzen_eigenschaften_intervalle',
  'regression_schaetzung_inferenz',
  'regression_diagnostik_prognose'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    bivariat: renderGraphShell({
      conceptId: id,
      moduleHint: 'statistik',
      title: 'Streudiagramm und Korrelationsrichtung',
      controls: `
      <div class="ctrl-group"><label for="g_biv_rho">Korrelation $r$</label><input type="range" id="g_biv_rho" min="-0.9" max="0.9" step="0.1" value="0.6" oninput="window.initGraph('bivariat', false)"><div class="val" id="v_biv_rho" aria-live="polite">0.60</div></div>
      <div class="ctrl-group"><label for="g_biv_shift">Niveauverschiebung</label><input type="range" id="g_biv_shift" min="-1.5" max="1.5" step="0.1" value="0" oninput="window.initGraph('bivariat', false)"><div class="val" id="v_biv_shift" aria-live="polite">0.00</div></div>
      `,
      ariaLabel: 'Grafik: Streudiagramm mit anpassbarer Korrelationsrichtung und linearem Zusammenhang.'
    }),
    schaetzen_eigenschaften_intervalle: renderGraphShell({
      conceptId: id,
      moduleHint: 'statistik',
      title: 'Konfidenzintervall und Präzision',
      controls: `
      <div class="ctrl-group"><label for="g_ci_xbar">Stichprobenmittel $\\bar{x}$</label><input type="range" id="g_ci_xbar" min="40" max="90" step="1" value="64" oninput="window.initGraph('schaetzen_eigenschaften_intervalle', false)"><div class="val" id="v_ci_xbar" aria-live="polite">64</div></div>
      <div class="ctrl-group"><label for="g_ci_sigma">Standardabw. $s$</label><input type="range" id="g_ci_sigma" min="4" max="20" step="1" value="12" oninput="window.initGraph('schaetzen_eigenschaften_intervalle', false)"><div class="val" id="v_ci_sigma" aria-live="polite">12</div></div>
      <div class="ctrl-group"><label for="g_ci_n">Stichprobe $n$</label><input type="range" id="g_ci_n" min="10" max="150" step="5" value="36" oninput="window.initGraph('schaetzen_eigenschaften_intervalle', false)"><div class="val" id="v_ci_n" aria-live="polite">36</div></div>
      `,
      ariaLabel: 'Grafik: Punktschätzer mit 95-Prozent-Konfidenzintervall und Vergleichsintervall bei größerer Stichprobe.'
    }),
    regression_schaetzung_inferenz: renderGraphShell({
      conceptId: id,
      moduleHint: 'statistik',
      title: 'Regression: Datenwolke und Schätzgerade',
      controls: `
      <div class="ctrl-group"><label for="g_reg_b0">Achsenabschnitt $\\beta_0$</label><input type="range" id="g_reg_b0" min="0" max="8" step="0.5" value="2" oninput="window.initGraph('regression_schaetzung_inferenz', false)"><div class="val" id="v_reg_b0" aria-live="polite">2.0</div></div>
      <div class="ctrl-group"><label for="g_reg_b1">Steigung $\\beta_1$</label><input type="range" id="g_reg_b1" min="-1.5" max="2.5" step="0.1" value="1.1" oninput="window.initGraph('regression_schaetzung_inferenz', false)"><div class="val" id="v_reg_b1" aria-live="polite">1.10</div></div>
      <div class="ctrl-group"><label for="g_reg_noise">Streuung</label><input type="range" id="g_reg_noise" min="0.3" max="2.2" step="0.1" value="0.9" oninput="window.initGraph('regression_schaetzung_inferenz', false)"><div class="val" id="v_reg_noise" aria-live="polite">0.90</div></div>
      `,
      ariaLabel: 'Grafik: Streudiagramm mit geschätzter Regressionsgerade und Interpretation von Steigung und Streuung.'
    }),
    regression_diagnostik_prognose: renderGraphShell({
      conceptId: id,
      moduleHint: 'statistik',
      title: 'Prognoseintervall und Residuenlogik',
      controls: `
      <div class="ctrl-group"><label for="g_diag_b1">Steigung $\\beta_1$</label><input type="range" id="g_diag_b1" min="0.4" max="2.0" step="0.1" value="1.1" oninput="window.initGraph('regression_diagnostik_prognose', false)"><div class="val" id="v_diag_b1" aria-live="polite">1.10</div></div>
      <div class="ctrl-group"><label for="g_diag_hetero">Heterosked.</label><input type="range" id="g_diag_hetero" min="0" max="1" step="0.05" value="0.45" oninput="window.initGraph('regression_diagnostik_prognose', false)"><div class="val" id="v_diag_hetero" aria-live="polite">0.45</div></div>
      <div class="ctrl-group"><label for="g_diag_x0">Prognosepunkt $x_0$</label><input type="range" id="g_diag_x0" min="1" max="10" step="0.5" value="8" oninput="window.initGraph('regression_diagnostik_prognose', false)"><div class="val" id="v_diag_x0" aria-live="polite">8.0</div></div>
      `,
      ariaLabel: 'Grafik: Regressionsgerade mit wachsender Reststreuung und hervorgehobenem Prognoseintervall.'
    })
  };

  return wrapGraphPanel(graphConfigs[id] || '');
}
