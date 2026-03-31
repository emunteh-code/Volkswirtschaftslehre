// ============================================================
// INTUITION DATA — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  ricardo: {
    core: 'Handel lohnt sich durch Unterschiede in der Arbeitsproduktivität. Spezialisierung erhöht den Gesamtwohlstand.',
    analogy: 'Zwei Freunde bereiten eine Party vor. Auch wenn einer in allem schneller ist, lohnt es sich, wenn jeder das tut, was er "relativ" am besten kann.',
    exam: [
      { if: 'Komparativer Vorteil gesucht', then: 'Niedrigste Opportunitätskosten finden.' },
      { if: 'Handelsgewinne', then: 'Länder konsumieren außerhalb ihrer Produktionsmöglichkeitenkurve.' }
    ],
    bridge: 'Nicht absolute, sondern relative Kosten entscheiden über den Handel.'
  },
  heckscher_ohlin: {
    core: 'Länder exportieren die Güter, für deren Produktion sie reichlich vorhandene Faktoren intensiv nutzen.',
    analogy: 'Ein waldreiches Land exportiert Holzmöbel, ein bevölkerungsreiches Land arbeitsintensive Textilien.',
    exam: [
      { if: 'Faktorausstattung', then: 'Verhältnis von Kapital zu Arbeit (K/L).' },
      { if: 'Stolper-Samuelson', then: 'Handel begünstigt den reichlich vorhandenen Faktor.' }
    ],
    bridge: 'Unterschiede in der Faktorausstattung treiben den Handel.'
  }
};
