// ============================================================
// INTUITION DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  spieltheorie: {
    core: 'In einem Nash-Gleichgewicht ist jeder Spieler mit seiner Wahl zufrieden, gegeben die Wahl der anderen.',
    analogy: 'Wie eine stabile Sitzordnung: Keiner möchte aufstehen und sich woanders hinsetzen, solange die anderen sitzen bleiben.',
    exam: [
      { if: 'NG gesucht', then: 'Beste Antworten für alle Spieler markieren. Wo sie sich treffen, ist das NG.' },
      { if: 'Dominante Strategie existiert', then: 'Sie muss Teil jedes NG sein.' }
    ],
    bridge: 'Individuelle Rationalität führt nicht zwingend zu kollektiver Vernunft.'
  },
  oligopol: {
    core: 'Oligopole liegen zwischen Monopol und Wettbewerb. Strategische Interaktion bestimmt Preis und Menge.',
    analogy: 'Wie zwei Tankstellen an einer Kreuzung: Was der eine tut, beeinflusst sofort den Kundenstrom des anderen.',
    exam: [
      { if: 'Cournot', then: 'Mengenwettbewerb. Erlösfunktion enthält q1+q2.' },
      { if: 'Bertrand', then: 'Preiswettbewerb. Bei homogenen Gütern gilt P=MC.' }
    ],
    bridge: 'Die Reaktionsfunktion zeigt die optimale Antwort auf die Konkurrenzmenge.'
  },
  gleichgewicht: {
    core: 'Alles hängt mit allem zusammen. Effizienz auf einem Markt erfordert Effizienz auf allen Märkten.',
    analogy: 'Die Edgeworth-Box ist wie ein Kuchen, den zwei Personen unter sich aufteilen. Pareto-Effizienz bedeutet, dass kein Krümel verschwendet wird.',
    exam: [
      { if: 'Pareto-Effizienz prüfen', then: 'GRS_A = GRS_B prüfen.' },
      { if: 'Punkt auf der Kontraktkurve', then: 'Tangentialpunkt der Indifferenzkurven.' }
    ],
    bridge: 'Die Kontraktkurve verbindet alle effizienten Tauschmöglichkeiten.'
  },
  externa: {
    core: 'Kosten oder Nutzen, die nicht im Marktpreis enthalten sind, führen zu falschen Mengen.',
    analogy: 'Passivrauchen: Der Raucher zahlt für die Zigarette, aber der Nachbar "zahlt" mit seiner Gesundheit, ohne entschädigt zu werden.',
    exam: [
      { if: 'Negativer externer Effekt', then: 'Soziale Grenzkosten > Private Grenzkosten. Überproduktion.' },
      { if: 'Internalisierung', then: 'Pigou-Steuer in Höhe des Grenzh Schadens.' }
    ],
    bridge: 'Internalisierung macht den Verursacher zum Kostenträger.'
  }
};
