// ============================================================
// FULL EXAMS DATA — Recht
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  mock_exam_1: {
    id: 'mock_exam_1',
    title: 'Privatrecht - Simulation v14.0 (60 Min)',
    subtitle: 'BGB Allgemeiner Teil & Schuldrecht',
    duration: 60,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 20,
        type: 'text-block',
        title: 'Anspruchsprüfung',
        preamble: String.raw`A bietet B sein Auto für $10.000$ € an. B sagt: "Ich nehme es für $9.000$ €."`,
        questions: [
          {
            id: 're_1a',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Wie ist die Antwort des B rechtlich zu qualifizieren? (§ 150 Abs. 2 BGB)',
            correct: ['ablehnung verbunden mit neuem angebot', 'neues angebot'],
            options: { problemId: 're_ex_1', stepId: 'legal_qual', isDecision: true },
            feedback: String.raw`Eine Annahme unter Erweiterungen oder Einschränkungen gilt als Ablehnung verbunden mit einem neuen Angebot.`,
          },
          {
            id: 're_1b',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Ist bereits ein Vertrag über $10.000$ € zustande gekommen?',
            correct: ['nein', 'no'],
            options: { problemId: 're_ex_1', dependsOn: 'legal_qual' },
            feedback: String.raw`Nein, da B das ursprüngliche Angebot abgelehnt hat.`,
          }
        ]
      }
    ]
  }
};
