const panel = (title, ariaLabel) => `
<div class="graph-container">
  <h3 class="graph-panel-title">${title}</h3>
  <canvas id="graph_canvas" width="920" height="560" role="img" aria-label="${ariaLabel}"></canvas>
  <div id="graph_info" class="graph-info" aria-live="polite"></div>
</div>`;

const supplementalSourceNotice = `
<div class="section-block source-boundary-notice">
  <h3>Quellenstatus</h3>
  <p>Diese Grafik ist ergänzende Plattform-Unterstützung ohne direkten Primäranker im verfügbaren offiziellen Mikro-II-Korpus. Sie ist nicht als offiziell prüfungsbewiesener Mikro-II-Stoff zertifiziert.</p>
</div>`;

const supplementalPanel = (title, ariaLabel) => `${supplementalSourceNotice}${panel(title, ariaLabel)}`;

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
    externa_pigou: supplementalPanel(
      'Private und soziale Grenzkosten',
      'Grafik: Grenznutzen, private Grenzkosten und soziale Grenzkosten mit Wohlfahrtslücke.'
    ),
    externa_institutionen: supplementalPanel(
      'Abatementkosten und Emissionspreis',
      'Grafik: Grenzvermeidungskosten und Emissionspreis bei institutioneller Internalisierung.'
    )
  };

  return `<div class="panel active">${graphConfigs[id] || ''}</div>`;
}
