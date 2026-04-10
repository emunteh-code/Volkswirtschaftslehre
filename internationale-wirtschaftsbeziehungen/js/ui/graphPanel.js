export const GRAPH_CONCEPTS = new Set([
  'ricardo',
  'tarifmodell',
  'zinsparitaet',
  'monetaerer_ansatz',
  'overshooting',
  'trilemma'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    ricardo: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Ricardo: PPF und Opportunitätskosten</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_home_oc">OK Home für Gut X</label>
            <input type="range" id="g_iwb_home_oc" min="0.4" max="2.4" step="0.1" value="0.8" oninput="window.initGraph('ricardo', false)">
            <div class="val" id="v_iwb_home_oc">0.8</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_foreign_oc">OK Foreign für Gut X</label>
            <input type="range" id="g_iwb_foreign_oc" min="0.4" max="2.4" step="0.1" value="1.6" oninput="window.initGraph('ricardo', false)">
            <div class="val" id="v_iwb_foreign_oc">1.6</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Ricardo-Modell mit zwei Produktionsmöglichkeitenkurven."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `,
    tarifmodell: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Importzoll im kleinen Land</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_pw">Weltmarktpreis</label>
            <input type="range" id="g_iwb_pw" min="4" max="12" step="0.5" value="7" oninput="window.initGraph('tarifmodell', false)">
            <div class="val" id="v_iwb_pw">7.0</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_tariff">Zollsatz</label>
            <input type="range" id="g_iwb_tariff" min="0" max="6" step="0.5" value="2" oninput="window.initGraph('tarifmodell', false)">
            <div class="val" id="v_iwb_tariff">2.0</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Nachfrage, Angebot, Weltmarktpreis und Zollpreis im kleinen Land."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `,
    zinsparitaet: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Zinsparität: erwarteter Ertrag und Gleichgewichtskurs</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_i_home">Inlandszins i</label>
            <input type="range" id="g_iwb_i_home" min="0" max="8" step="0.5" value="4" oninput="window.initGraph('zinsparitaet', false)">
            <div class="val" id="v_iwb_i_home">4.0</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_i_foreign">Auslandszins i*</label>
            <input type="range" id="g_iwb_i_foreign" min="0" max="8" step="0.5" value="2" oninput="window.initGraph('zinsparitaet', false)">
            <div class="val" id="v_iwb_i_foreign">2.0</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_e_exp">Erwarteter Kurs Eᵉ</label>
            <input type="range" id="g_iwb_e_exp" min="0.8" max="1.6" step="0.05" value="1.2" oninput="window.initGraph('zinsparitaet', false)">
            <div class="val" id="v_iwb_e_exp">1.20</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Zinsparität mit Auslandsertragskurve und Inlandszins."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `,
    monetaerer_ansatz: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Monetärer Ansatz: Preisniveau und Wechselkurs</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_mu_home">Geldmengenwachstum Home</label>
            <input type="range" id="g_iwb_mu_home" min="0" max="10" step="0.5" value="6" oninput="window.initGraph('monetaerer_ansatz', false)">
            <div class="val" id="v_iwb_mu_home">6.0</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_mu_foreign">Geldmengenwachstum Foreign</label>
            <input type="range" id="g_iwb_mu_foreign" min="0" max="10" step="0.5" value="3" oninput="window.initGraph('monetaerer_ansatz', false)">
            <div class="val" id="v_iwb_mu_foreign">3.0</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_growth_gap">Wachstum Home − Foreign</label>
            <input type="range" id="g_iwb_growth_gap" min="-2" max="2" step="0.5" value="0" oninput="window.initGraph('monetaerer_ansatz', false)">
            <div class="val" id="v_iwb_growth_gap">0.0</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Langfristige Dynamik von Preisniveau und Wechselkurs im monetären Ansatz."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `,
    overshooting: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Overshooting nach monetärem Schock</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_e_long">Langfristiger Kurs</label>
            <input type="range" id="g_iwb_e_long" min="1.0" max="1.6" step="0.05" value="1.2" oninput="window.initGraph('overshooting', false)">
            <div class="val" id="v_iwb_e_long">1.20</div>
          </div>
          <div class="ctrl-group">
            <label for="g_iwb_overshoot">Overshooting in %</label>
            <input type="range" id="g_iwb_overshoot" min="5" max="35" step="1" value="18" oninput="window.initGraph('overshooting', false)">
            <div class="val" id="v_iwb_overshoot">18</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Overshooting mit kurzfristigem Sprung und schrittweisem Rücklauf."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `,
    trilemma: `
      <div class="graph-container">
        <h3 class="graph-panel-title">Trilemma der Währungspolitik</h3>
        <div class="graph-controls">
          <div class="ctrl-group">
            <label for="g_iwb_regime">Regimekombination</label>
            <input type="range" id="g_iwb_regime" min="0" max="2" step="1" value="0" oninput="window.initGraph('trilemma', false)">
            <div class="val" id="v_iwb_regime">Fixkurs + Kapitalmobilität</div>
          </div>
        </div>
        <canvas id="graph_canvas" width="800" height="500" role="img" aria-label="Grafik: Trilemma mit hervorgehobener Regimekombination."></canvas>
        <div id="graph_info" class="graph-info" aria-live="polite"></div>
      </div>
    `
  };

  return `<div class="panel active">${graphConfigs[id] || '<div class="graph-empty-state">Für dieses Konzept steht keine eigene Grafik im Vordergrund.</div>'}</div>`;
}
