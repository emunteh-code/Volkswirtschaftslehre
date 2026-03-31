// ============================================================
// FULL EXAMS DATA — Statistik
// ============================================================

export const FULL_EXAMS = {
  klausur_2024: {
    title: 'Probeklausur Statistik',
    duration: 90,
    problems: [
      {
        id: 'fe_desk_1',
        title: 'Deskriptive Kennzahlen',
        conceptId: 'deskriptiv',
        text: 'Gegeben sind die Werte: 3, 5, 7, 7, 8, 10, 12. Berechnen Sie Mittelwert, Median und Varianz.',
        type: 'step',
        steps: [
          { q: '[Interpretation] Was ist der Mittelwert?', answer: ['52/7', '7.43', '7,43'], hint: 'Summe durch Anzahl.' },
          { q: '[Berechnung] Was ist der Median?', answer: ['7'], hint: 'Mittlerer Wert der sortierten Reihe.' },
          { q: '[Berechnung] Was ist die empirische Varianz (mit n-1)?', answer: ['8.29', '8,29', '58/7'], hint: 'Summe der quadrierten Abweichungen geteilt durch n-1.' }
        ]
      },
      {
        id: 'fe_test_1',
        title: 'Hypothesentest',
        conceptId: 'testen',
        text: 'Ein Unternehmen behauptet, die mittlere Füllmenge beträgt μ₀ = 500ml. Stichprobe: n=25, x̄=495, s=15. Testen Sie zum 5%-Niveau.',
        type: 'step',
        steps: [
          { q: '[Interpretation] Wie lautet H₀ und H₁?', answer: ['H0: mu = 500', 'H0: μ = 500', 'mu=500'], hint: 'Zweiseitiger Test gegen μ₀.' },
          { q: '[Berechnung] Berechnen Sie die Teststatistik t.', answer: ['-1.67', '-1,67'], hint: 't = (x̄ − μ₀) / (s/√n)' },
          { q: '[Validierung] Wird H₀ abgelehnt?', answer: ['nein', 'Nein', 'nicht abgelehnt'], hint: '|t| = 1.67 < t₀.₀₂₅,₂₄ ≈ 2.064.' }
        ]
      }
    ]
  }
};
