// ============================================================
// INTUITION DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const INTUITION = {
  spieltheorie_statisch: {
    core: 'In einem Nash-Gleichgewicht ist jeder Spieler mit seiner Wahl zufrieden, gegeben die Wahl der anderen.',
    analogy: 'Wie eine stabile Sitzordnung: Keiner möchte aufstehen und sich woanders hinsetzen, solange die anderen sitzen bleiben.',
    exam: [
      { if: 'NG gesucht', then: 'Beste Antworten für alle Spieler markieren. Wo sie sich treffen, ist das NG.' },
      { if: 'Dominante Strategie existiert', then: 'Sie muss Teil jedes NG sein.' }
    ],
    bridge: 'Individuelle Rationalität führt nicht zwingend zu kollektiver Vernunft.'
  },
  spieltheorie_dynamisch: {
    core: 'Gemischte Strategien stabilisieren Spiele ohne reines Gleichgewicht; Wiederholung kann Kooperation disziplinieren.',
    analogy: 'Wie beim Elfmeterschuetzen: Nur unvorhersehbare Mischung macht den Gegner indifferent.',
    exam: [
      { if: 'Kein reines NG', then: 'Indifferenzbedingung des Gegners aufstellen und Mischwahrscheinlichkeit loesen.' },
      { if: 'Wiederholtes Dilemma', then: 'Vergleiche kurzfristigen Abweichungsgewinn mit diskontiertem Kooperationspfad.' }
    ],
    bridge: 'Dynamische Spieltheorie verbindet heute getroffene Entscheidung mit kuenftigen Sanktions- und Reputationswirkungen.'
  },
  oligopol_cournot_bertrand: {
    core: 'Oligopole liegen zwischen Monopol und Wettbewerb. Strategische Interaktion bestimmt Preis und Menge.',
    analogy: 'Wie zwei Tankstellen an einer Kreuzung: Was der eine tut, beeinflusst sofort den Kundenstrom des anderen.',
    exam: [
      { if: 'Cournot', then: 'Mengenwettbewerb. Erlösfunktion enthält q1+q2.' },
      { if: 'Bertrand', then: 'Preiswettbewerb. Bei homogenen Gütern gilt P=MC.' }
    ],
    bridge: 'Die Reaktionsfunktion zeigt die optimale Antwort auf die Konkurrenzmenge.'
  },
  oligopol_stackelberg: {
    core: 'Bei sequentieller Mengenwahl internalisiert der Fuehrer die Folgerreaktion und verschiebt so den Marktpunkt.',
    analogy: 'Wie beim Schach-Eroeffnungszug: Wer zuerst bindet, zwingt eine Antwort und strukturiert den Rest der Partie.',
    exam: [
      { if: 'Stackelberg', then: 'Rueckwaertsinduktion: erst Folgerreaktion, dann Fuehreroptimum.' },
      { if: 'Vergleich mit Cournot', then: 'Fuehrer produziert mehr, Folger weniger; Gesamtmenge steigt, Preis faellt.' }
    ],
    bridge: 'Timing ist hier ein Modellparameter mit realen Wohlfahrts- und Gewinnfolgen.'
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
  },
  information_adverse: {
    core: 'Bei verborgenen Typen vor Vertragsabschluss sinkt der Preis auf den Erwartungswert und gute Typen koennen verschwinden.',
    analogy: 'Ohne Zertifikat bezahlt der Kaeufer nur Durchschnittsqualitaet; Premiumanbieter steigen aus.',
    exam: [
      { if: 'Lemons-Fall', then: 'Erwartungswertpreis berechnen und Reservierungspreise guter Typen pruefen.' },
      { if: 'Marktausduennung', then: 'Zeige Selektionsspirale: Preis sinkt -> gute Typen raus -> Qualitaet sinkt weiter.' }
    ],
    bridge: 'Adverse Selection ist ein Ex-ante-Typproblem und braucht Transparenzmechanismen.'
  },
  information_moralhazard: {
    core: 'Nach Vertragsabschluss sind Handlungen oft verborgen; ohne Anreize waehlt der Agent zu wenig Einsatz.',
    analogy: 'Vollkasko ohne Selbstbehalt kann Fahrvorsicht senken.',
    exam: [
      { if: 'Moral Hazard', then: 'Fixlohn vs. leistungsabhaengigen Vertrag ueber IC/PC vergleichen.' },
      { if: 'Signaling/Screening', then: 'Trennbedingung pruefen: Signal muss fuer unpassenden Typ teuer sein.' }
    ],
    bridge: 'Ex-post Handlungsproblem und Typtrennung erfordern andere Instrumente als reine Markttransparenz.'
  }
};
