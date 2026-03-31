// ============================================================
// FULL EXAMS DATA — Ökonometrie
// Final Benchmark Standard v14.0
// ============================================================

export const FULL_EXAMS = {
  probeklausur_1: {
    id: 'probeklausur_1',
    title: 'Probeklausur Ökonometrie I',
    subtitle: 'Standard Bachelor Level',
    duration: 60,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 20,
        type: 'text-block',
        title: 'Das lineare Modell',
        preamble: 'Betrachten Sie das Modell $y = \beta_0 + \beta_1 x + u$.',
        questions: [
          {
            id: '1a',
            points: 10,
            type: 'text',
            text: 'Interpretieren Sie den Schätzer $\hat{\beta}_1 = 0{,}8$ im Kontext einer Konsumfunktion ($y=$ Konsum, $x=$ Einkommen).',
            correct: ['0.8', 'marginale konsumquote'],
            feedback: 'Korrekt. 0,8 ist die marginale Konsumquote: Steigt das Einkommen um 1 Euro, steigt der Konsum im Schnitt um 80 Cent.'
          },
          {
            id: '1b',
            points: 10,
            type: 'text',
            text: 'Welche Konsequenz hat eine Verletzung von A4 ($E[u|x] \neq 0$)?',
            correct: ['verzerrung', 'bias'],
            feedback: 'Korrekt. Der OLS-Schätzer ist dann verzerrt.'
          }
        ]
      }
    ]
  }
};
