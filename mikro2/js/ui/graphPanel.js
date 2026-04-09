const panel = (title, ariaLabel) => `
<div class="graph-container">
  <h3 class="graph-panel-title">${title}</h3>
  <canvas id="graph_canvas" width="920" height="560" role="img" aria-label="${ariaLabel}"></canvas>
  <div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`;

export const GRAPH_CONCEPTS = new Set([
  'spieltheorie_statisch',
  'spieltheorie_dynamisch',
  'oligopol_cournot_bertrand',
  'oligopol_stackelberg',
  'gleichgewicht_tausch',
  'gleichgewicht_walras',
  'externa_pigou',
  'externa_institutionen'
]);

export function renderGraphPanel(id) {
  const graphConfigs = {
    spieltheorie_statisch: panel(
      'Auszahlungsmatrix & Nash-Gleichgewicht',
      'Grafik: Auszahlungsmatrix mit markiertem Nash-Gleichgewicht.'
    ),
    spieltheorie_dynamisch: panel(
      'Indifferenz bei gemischten Strategien',
      'Grafik: Erwartungsnutzen zweier Strategien mit markiertem Mischgleichgewicht.'
    ),
    oligopol_cournot_bertrand: panel(
      'Cournot-Reaktionsfunktionen',
      'Grafik: Zwei Reaktionsfunktionen mit markiertem Cournot-Nash-Gleichgewicht.'
    ),
    oligopol_stackelberg: panel(
      'Stackelberg-Führer/Folger',
      'Grafik: Reaktionsfunktion des Folgers mit markierter Führerlösung.'
    ),
    gleichgewicht_tausch: panel(
      'Edgeworth-Box und Kontraktkurve',
      'Grafik: Edgeworth-Box mit Endausstattung und Kontraktkurve.'
    ),
    gleichgewicht_walras: panel(
      'Walrasianische Markt-Räumung',
      'Grafik: Überschussnachfrage als Funktion des Preises mit Marktgleichgewicht.'
    ),
    externa_pigou: panel(
      'Private und soziale Grenzkosten',
      'Grafik: Grenznutzen, private Grenzkosten und soziale Grenzkosten mit Wohlfahrtslücke.'
    ),
    externa_institutionen: panel(
      'Abatementkosten und Emissionspreis',
      'Grafik: Grenzvermeidungskosten und Emissionspreis bei institutioneller Internalisierung.'
    )
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
