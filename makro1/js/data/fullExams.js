// ============================================================
// FULL EXAMS DATA — Makroökonomik I
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  mock_exam_1: {
    id: 'mock_exam_1',
    title: 'Makro I - Simulation v14.0 (60 Min)',
    subtitle: 'Kurze und mittlere Frist',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Gütermarkt & Fiskalpolitik',
        preamble: String.raw`C = 200 + 0{,}5(Y-T), I = 300, G = 100, T = 100.`,
        questions: [
          {
            id: 'm1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Berechnen Sie die Gleichgewichtsproduktion Y*.',
            correct: ['1100'],
            options: { problemId: 'hm1_a', stepId: 'y_star', isDecision: true },
            feedback: String.raw`$Y = 200 + 0{,}5(Y-100) + 300 + 100 \implies 0{,}5Y = 550 \implies Y = 1100$.`,
          },
          {
            id: 'm1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Wie hoch ist der Multiplikator für Staatsausgaben?',
            correct: ['2'],
            options: { problemId: 'hm1_a', dependsOn: 'y_star' },
            feedback: String.raw`$1/(1-0{,}5) = 2$.`,
          }
        ]
      }
    ]
  }
};
