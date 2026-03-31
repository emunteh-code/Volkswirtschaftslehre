// ============================================================
// CHAPTERS & CONTENT DATA — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CHAPTERS = [
  { id: 'ricardo', title: 'Ricardo-Modell', cat: 'Handelstheorie', short: 'Ricardo' },
  { id: 'heckscher_ohlin', title: 'Heckscher-Ohlin-Modell', cat: 'Handelstheorie', short: 'H-O' },
  { id: 'skalenertraege', title: 'Neue Handelstheorie', cat: 'Handelstheorie', short: 'Skalen' },
  { id: 'handelspolitik', title: 'Instrumente der Handelspolitik', cat: 'Politik', short: 'Politik' },
  { id: 'zoelle', title: 'Zölle & Wohlfahrt', cat: 'Politik', short: 'Zölle' },
  { id: 'regionalismus', title: 'Regionalismus & Welthandel', cat: 'Politik', short: 'Region' },
];

export const CONTENT = {
  ricardo: {
    motivation: 'Warum handeln Länder miteinander? David Ricardo zeigt, dass Spezialisierung auch dann vorteilhaft ist, wenn ein Land in allen Bereichen absolut produktiver ist.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Absoluter vs. Komparativer Vorteil</h3>
      <p>Ein <strong>absoluter Vorteil</strong> liegt vor, wenn ein Land ein Gut mit weniger Arbeitseinsatz produzieren kann als ein anderes. Der <strong>komparative Vorteil</strong> betrachtet hingegen die Opportunitätskosten.</p>
    </div>
    <div class="section-block">
      <h3>Das Modell</h3>
      <p>Länder spezialisieren sich auf das Gut, bei dem sie die geringeren Opportunitätskosten haben. Handel führt zu einer Ausweitung der Konsummöglichkeiten über die eigene Produktionsgrenze hinaus.</p>
    </div>
    <div class="section-block">
      <h3>Fehleranalyse</h3>
      <div class="warn-box"><strong>Produktivitäts-Falle:</strong> Ein Land braucht keinen absoluten Vorteil, um vom Handel zu profitieren. Nur die relativen Kostenunterschiede zählen.</div>
    </div>
    `,
    formeln: [
      { label: 'Opportunitätskosten', eq: String.raw`OK_1 = \frac{a_{L1}}{a_{L2}}`, desc: 'Kosten von Gut 1 in Einheiten von Gut 2', variables: { 'a_{Li}': 'Arbeitskoeffizient' } }
    ],
    aufgaben: [
      {
        text: String.raw`Land A braucht 1h für Wein und 2h für Käse. Land B braucht 3h für Wein und 4h für Käse. Wer hat den komparativen Vorteil bei Wein?`,
        steps: [
          { text: `Opportunitätskosten Wein in A:`, eq: String.raw`1/2 = 0{,}5 \text{ Käse.}` },
          { text: `Opportunitätskosten Wein in B:`, eq: String.raw`3/4 = 0{,}75 \text{ Käse.}` },
          { text: `Entscheidung: Wer produziert Wein "billiger"?`, eq: String.raw`\text{Land A (0,5 < 0,75).}` }
        ],
        result: String.raw`Land A hat den komparativen Vorteil bei Wein.`
      }
    ]
  },
  zoelle: {
    motivation: 'Handelspolitik greift in den freien Austausch ein. Wir untersuchen die wohlfahrtseffekte von Importzöllen.',
    theorie: String.raw`
    <div class="section-block">
      <h3>Wirkung eines Zolls</h3>
      <p>Ein Zoll auf Importe erhöht den Inlandspreis. Dies schützt heimische Produzenten, belastet aber die Konsumenten.</p>
    </div>
    <div class="section-block">
      <h3>Wohlfahrtseffekte</h3>
      <ul>
        <li><strong>Produzentenrente:</strong> Steigt (+).</li>
        <li><strong>Konsumentenrente:</strong> Sinkt (-).</li>
        <li><strong>Staateinnahmen:</strong> Steigen (+).</li>
        <li><strong>Nettowohlfahrtsverlust:</strong> Entsteht durch Effizienzverluste (Produktions- und Konsumverzerrung).</li>
      </ul>
    </div>
    `,
    formeln: [
      { label: 'Wohlfahrtsänderung', eq: String.raw`\Delta W = \Delta PR + \Delta KR + \Delta G`, desc: 'Gesamteffekt' }
    ],
    aufgaben: [
      {
        text: String.raw`Ein kleines Land führt einen Importzoll ein. Wie ändert sich der Weltmarktpreis?`,
        steps: [
          { text: `Interpretation: Was definiert ein "kleines Land"?`, eq: String.raw`\text{Es kann den Weltmarktpreis nicht beeinflussen.}` },
          { text: `Schlussfolgerung:`, eq: String.raw`P^* \text{ bleibt unverändert.}` }
        ],
        result: String.raw`Weltmarktpreis bleibt gleich; nur der Inlandspreis steigt.`
      }
    ]
  }
};
