// ============================================================
// FULL EXAMS DATA — Int. Wirtschaftsbeziehungen
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  mock_exam_1: {
    id: 'mock_exam_1',
    title: 'Int. Wirtschaftsbeziehungen - Simulation v14.0 (60 Min)',
    subtitle: 'Handelstheorie und Politik',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Komparative Vorteile',
        preamble: String.raw`Inland benötigt für 1kg Fleisch 1h, für 1kg Kartoffeln 2h. Ausland benötigt für 1kg Fleisch 6h, für 1kg Kartoffeln 3h.`,
        questions: [
          {
            id: 'iw_1a',
            points: 15,
            type: 'text',
            text: '[1.1 Decision] Welches Land hat den komparativen Vorteil bei Fleisch?',
            correct: ['inland', 'home'],
            options: { problemId: 'iw_ex_1', stepId: 'comp_fl', isDecision: true },
            feedback: String.raw`OK Fleisch Inland = 1/2 = 0{,}5. OK Fleisch Ausland = 6/3 = 2. Da 0,5 < 2, hat das Inland den Vorteil.`,
          },
          {
            id: 'iw_1b',
            points: 15,
            type: 'text',
            text: '[1.2 Execution] Welches Land hat den komparativen Vorteil bei Kartoffeln?',
            correct: ['ausland', 'foreign'],
            options: { problemId: 'iw_ex_1', dependsOn: 'comp_fl' },
            feedback: String.raw`Wenn ein Land bei einem Gut den Vorteil hat, hat das andere Land zwingend den Vorteil beim anderen Gut (reziproke OK).`,
          }
        ]
      }
    ]
  }
};
