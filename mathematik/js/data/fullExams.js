// ============================================================
// FULL EXAMS DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  mock_exam_1: {
    id: 'mock_exam_1',
    title: 'Mathematik - Simulation v14.0 (60 Min)',
    subtitle: 'Analysis und Optimierung',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Kurvendiskussion & Optimierung',
        preamble: String.raw`Betrachten Sie $f(x) = \frac{1}{3}x^3 - 4x$.`,
        questions: [
          {
            id: 'ma_1a',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Bestimmen Sie die Ableitung $f\'(x)$ und finden Sie die Nullstellen.',
            correct: ['x^2-4', '2, -2'],
            options: { problemId: 'ma_ex_1', stepId: 'roots', isDecision: true },
            feedback: String.raw`$f\'(x) = x^2 - 4$. Nullstellen bei $x = 2$ and $x = -2$.`,
          },
          {
            id: 'ma_1b',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Welcher der Punkte ist ein lokales Maximum?',
            correct: ['-2', 'x=-2'],
            options: { problemId: 'ma_ex_1', dependsOn: 'roots' },
            feedback: String.raw`$f\'\'(x) = 2x$. $f\'\'(-2) = -4 < 0 \implies$ Maximum.`,
          }
        ]
      }
    ]
  }
};
