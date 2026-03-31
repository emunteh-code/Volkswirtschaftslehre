// ============================================================
// INTUITION DATA — Ökonometrie
// Final Benchmark Standard v14.0
// ============================================================

export const INTUITION = {
  ols_intro: {
    core: 'Die OLS-Methode legt die Gerade so in die Punktwolke, dass der vertikale Abstand aller Punkte zur Geraden (quadriert) minimal wird.',
    analogy: 'Wie eine Gummischnur, die zwischen den Datenpunkten gespannt ist und versucht, den Gesamtwiderstand zu minimieren.',
    exam: [
      { if: 'beta_1 > 0', then: 'Positive Korrelation (Gerade steigt)' },
      { if: 'Residuen summieren sich zu 0', then: 'Eigenschaft der OLS-Schätzung' }
    ],
    bridge: 'OLS ist der Standardweg, um Korrelationen in Zahlen zu fassen.'
  },
  gauss_markov: {
    core: 'Damit OLS "funktioniert" (unverzerrt und effizient ist), brauchen wir saubere Bedingungen.',
    analogy: 'Ein Rezept: Wenn die Zutaten (Annahmen) nicht stimmen, schmeckt das Gericht (Schätzer) nicht (ist verzerrt).',
    exam: [
      { if: 'A4 verletzt', then: 'Schätzer verzerrt (Biased)' },
      { if: 'A5 verletzt', then: 'Standardfehler falsch (t-Test ungültig)' }
    ],
    bridge: 'Exogenität (A4) ist die "heilige" Annahme der Ökonometrie.'
  },
  fit: {
    core: 'R² zeigt, wie viel von der Geschichte (Varianz) unser Modell erzählen kann.',
    analogy: 'Ein Scheinwerfer: R² sagt uns, wie viel Prozent des dunklen Raums (Varianz) wir beleuchtet haben.',
    exam: [
      { if: 'R² = 1', then: 'Alle Punkte liegen exakt auf der Geraden' },
      { if: 'R² steigt immer', then: 'Achtung: Mehr Variablen blähen R² künstlich auf.' }
    ],
    bridge: 'Ein hohes R² ist schön für den Fit, aber irrelevant für Kausalität.',
    mistakes: [
      'Ein hohes R² als Beweis für Kausalität interpretieren.',
      'Übersehen, dass R² durch Hinzufügen beliebiger Regressoren steigt.'
    ]
  },
  ols_intro: {
    core: 'Die OLS-Methode legt die Gerade so in die Punktwolke, dass der vertikale Abstand aller Punkte zur Geraden (quadriert) minimal wird.',
    analogy: 'Wie eine Gummischnur, die zwischen den Datenpunkten gespannt ist und versucht, den Gesamtwiderstand zu minimieren.',
    exam: [
      { if: 'beta_1 > 0', then: 'Positive Korrelation (Gerade steigt)' },
      { if: 'Residuen summieren sich zu 0', then: 'Eigenschaft der OLS-Schätzung' }
    ],
    bridge: 'OLS ist der Standardweg, um Korrelationen in Zahlen zu fassen.',
    mistakes: [
      'Verwechslung von Residuen (Stichprobe) und Störtermen (Grundgesamtheit).',
      'Interpretation der Korrelation als direkten kausalen Effekt.'
    ]
  },
  gauss_markov: {
    core: 'Damit OLS "funktioniert" (unverzerrt und effizient ist), brauchen wir saubere Bedingungen.',
    analogy: 'Ein Rezept: Wenn die Zutaten (Annahmen) nicht stimmen, schmeckt das Gericht (Schätzer) nicht (ist verzerrt).',
    exam: [
      { if: 'A4 verletzt', then: 'Schätzer verzerrt (Biased)' },
      { if: 'A5 verletzt', then: 'Standardfehler falsch (t-Test ungültig)' }
    ],
    bridge: 'Exogenität (A4) ist die "heilige" Annahme der Ökonometrie.',
    mistakes: [
      'Annahme, dass Heteroskedastizität (A5) den Schätzer verzerrt (sie beeinflusst nur die Varianz).',
      'Ignorieren der Korrelation zwischen x und dem Fehlerterm.'
    ]
  }
};
