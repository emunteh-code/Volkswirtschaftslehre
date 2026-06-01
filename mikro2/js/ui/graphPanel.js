import { renderGraphShell, wrapGraphPanel } from '../../../assets/js/portal-core/ui/graphShell.js';

const supplementalSourceNotice = `
<div class="section-block source-boundary-notice">
  <h3>Quellenstatus</h3>
  <p>Diese Grafik ist ergänzende Plattform-Unterstützung ohne direkten Primäranker im verfügbaren offiziellen Mikro-II-Korpus. Sie ist nicht als offiziell prüfungsbewiesener Mikro-II-Stoff zertifiziert.</p>
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
    spieltheorie_statisch: renderGraphShell({
      conceptId: id,
      title: 'Auszahlungsmatrix & Nash-Gleichgewicht',
      ariaLabel: 'Grafik: Auszahlungsmatrix mit markiertem Nash-Gleichgewicht.'
    }),
    spieltheorie_dynamisch: renderGraphShell({
      conceptId: id,
      title: 'Indifferenz bei gemischten Strategien',
      ariaLabel: 'Grafik: Erwartungsnutzen zweier Strategien mit markiertem Mischgleichgewicht.'
    }),
    oligopol_cournot_bertrand: renderGraphShell({
      conceptId: id,
      title: 'Cournot-Reaktionsfunktionen',
      ariaLabel: 'Grafik: Zwei Reaktionsfunktionen mit markiertem Cournot-Nash-Gleichgewicht.'
    }),
    oligopol_stackelberg: renderGraphShell({
      conceptId: id,
      title: 'Stackelberg-Führer/Folger',
      ariaLabel: 'Grafik: Reaktionsfunktion des Folgers mit markierter Führerlösung.'
    }),
    gleichgewicht_tausch: renderGraphShell({
      conceptId: id,
      title: 'Edgeworth-Box und Kontraktkurve',
      ariaLabel: 'Grafik: Edgeworth-Box mit Endausstattung und Kontraktkurve.'
    }),
    gleichgewicht_walras: renderGraphShell({
      conceptId: id,
      title: 'Walrasianische Markt-Räumung',
      ariaLabel: 'Grafik: Überschussnachfrage als Funktion des Preises mit Marktgleichgewicht.'
    }),
    externa_pigou: renderGraphShell({
      conceptId: id,
      title: 'Private und soziale Grenzkosten',
      extraHtml: supplementalSourceNotice,
      ariaLabel: 'Grafik: Grenznutzen, private Grenzkosten und soziale Grenzkosten mit Wohlfahrtslücke.'
    }),
    externa_institutionen: renderGraphShell({
      conceptId: id,
      title: 'Abatementkosten und Emissionspreis',
      extraHtml: supplementalSourceNotice,
      ariaLabel: 'Grafik: Grenzvermeidungskosten und Emissionspreis bei institutioneller Internalisierung.'
    })
  };

  return wrapGraphPanel(graphConfigs[id] || '');
}
