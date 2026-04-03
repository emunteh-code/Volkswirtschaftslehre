import { formalizeMarkupString } from '../utils/formalMath.js';

export const GRAPH_CONCEPTS = new Set([
  'ols_objective',
  'endogeneity_ovb',
  'prediction_intervals',
  'asymptotic_normality',
  'vif_collinearity',
  'fwl_partial_regression',
  'heteroskedasticity',
  'autocorrelation'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    ols_objective: `
<div class="graph-container">
<h3 class="graph-panel-title">OLS als Projektion einer Punktwolke</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_ols_noise">Fehlerstreuung σ_u</label><input type="range" id="g_ols_noise" min="0.4" max="2.4" step="0.1" value="1.0" oninput="window.initGraph('ols_objective', false)"><div class="val" id="v_ols_noise" aria-live="polite">1.0</div></div>
<div class="ctrl-group"><label for="g_ols_slope">Steigung β₁</label><input type="range" id="g_ols_slope" min="0.4" max="1.6" step="0.05" value="0.9" oninput="window.initGraph('ols_objective', false)"><div class="val" id="v_ols_slope" aria-live="polite">0.90</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Streudiagramm mit OLS-Regressionslinie und Residuen."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    endogeneity_ovb: `
<div class="graph-container">
<h3 class="graph-panel-title">OVB: ausgelassene Variable verschiebt die Regressionslinie</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_ovb_gap">Gruppenabstand δ</label><input type="range" id="g_ovb_gap" min="0.5" max="3.5" step="0.1" value="1.8" oninput="window.initGraph('endogeneity_ovb', false)"><div class="val" id="v_ovb_gap" aria-live="polite">1.8</div></div>
<div class="ctrl-group"><label for="g_ovb_corr">Korrelation x-z</label><input type="range" id="g_ovb_corr" min="0.1" max="0.9" step="0.05" value="0.55" oninput="window.initGraph('endogeneity_ovb', false)"><div class="val" id="v_ovb_corr" aria-live="polite">0.55</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Omitted-variable bias mit zwei Gruppen, wahrer Beziehung und verzerrter Pooled-Linie."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    prediction_intervals: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Mittelwerts- und Prognoseintervall bei $x_0$</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_pred_x0">Neuer Punkt $x_0$</label><input type="range" id="g_pred_x0" min="1" max="10" step="0.25" value="7.5" oninput="window.initGraph('prediction_intervals', false)"><div class="val" id="v_pred_x0" aria-live="polite">7.5</div></div>
<div class="ctrl-group"><label for="g_pred_sigma">Fehlerstreuung σ_u</label><input type="range" id="g_pred_sigma" min="0.4" max="2.5" step="0.1" value="1.0" oninput="window.initGraph('prediction_intervals', false)"><div class="val" id="v_pred_sigma" aria-live="polite">1.0</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Regressionsgerade mit engerem Konfidenzband und breiterem Prognoseband für einen neuen Punkt."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    asymptotic_normality: String.raw`
<div class="graph-container">
<h3 class="graph-panel-title">Asymptotische Normalität von $\sqrt{n}(\hat{\beta}-\beta)$</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_asym_n">Stichprobe n</label><input type="range" id="g_asym_n" min="25" max="400" step="25" value="100" oninput="window.initGraph('asymptotic_normality', false)"><div class="val" id="v_asym_n" aria-live="polite">100</div></div>
<div class="ctrl-group"><label for="g_asym_bias">Bias-Komponente</label><input type="range" id="g_asym_bias" min="0" max="0.5" step="0.05" value="0.1" oninput="window.initGraph('asymptotic_normality', false)"><div class="val" id="v_asym_bias" aria-live="polite">0.10</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Vergleich von Stichprobenverteilungen des Schätzers bei unterschiedlicher Stichprobengröße."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    vif_collinearity: `
<div class="graph-container">
<h3 class="graph-panel-title">Multikollinearität: fast dieselbe Information in zwei Regressoren</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_vif_rho">Korrelation ρ(x₁, x₂)</label><input type="range" id="g_vif_rho" min="0.1" max="0.98" step="0.02" value="0.82" oninput="window.initGraph('vif_collinearity', false)"><div class="val" id="v_vif_rho" aria-live="polite">0.82</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Streudiagramm zweier Regressoren zur Veranschaulichung von Multikollinearität."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    fwl_partial_regression: `
<div class="graph-container">
<h3 class="graph-panel-title">FWL: Regression bereinigter Residuen</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_fwl_strength">Einfluss von x₂</label><input type="range" id="g_fwl_strength" min="0.1" max="1.1" step="0.05" value="0.6" oninput="window.initGraph('fwl_partial_regression', false)"><div class="val" id="v_fwl_strength" aria-live="polite">0.60</div></div>
<div class="ctrl-group"><label for="g_fwl_beta">Partielle Steigung β₁</label><input type="range" id="g_fwl_beta" min="0.2" max="1.6" step="0.05" value="0.9" oninput="window.initGraph('fwl_partial_regression', false)"><div class="val" id="v_fwl_beta" aria-live="polite">0.90</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Residuen-auf-Residuen-Regressionsplot nach Frisch-Waugh-Lovell."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    heteroskedasticity: `
<div class="graph-container">
<h3 class="graph-panel-title">Residuenplot mit Heteroskedastizität</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_het_strength">Heteroskedastizität λ</label><input type="range" id="g_het_strength" min="0" max="1.6" step="0.1" value="0.9" oninput="window.initGraph('heteroskedasticity', false)"><div class="val" id="v_het_strength" aria-live="polite">0.9</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Residuenplot mit zunehmender Streuung und markierter Fan-Shape."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`,

    autocorrelation: `
<div class="graph-container">
<h3 class="graph-panel-title">Serielle Abhängigkeit der Fehler</h3>
<div class="graph-controls">
<div class="ctrl-group"><label for="g_auto_rho">Autokorrelation ρ</label><input type="range" id="g_auto_rho" min="0" max="0.95" step="0.05" value="0.65" oninput="window.initGraph('autocorrelation', false)"><div class="val" id="v_auto_rho" aria-live="polite">0.65</div></div>
</div>
<canvas id="graph_canvas" width="920" height="560" role="img" aria-label="Grafik: Zeitverlauf seriell korrelierter Residuen und zugehörige Interpretation."></canvas>
<div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`
  };

  return `<div class="panel active">${formalizeMarkupString(graphConfigs[id] || '')}</div>`;
}

