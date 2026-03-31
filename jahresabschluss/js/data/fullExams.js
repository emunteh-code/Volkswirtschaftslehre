// ============================================================
// FULL EXAMS DATA — Jahresabschluss
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  mock_exam_1: {
    id: 'mock_exam_1',
    title: 'Jahresabschluss - Simulation v14.0 (60 Min)',
    subtitle: 'Bilanzierung und Bewertung',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Bewertung von Vorräten',
        preamble: String.raw`Ein Posten Rohstoffe (AK $10.000$ €) hat am Stichtag einen beizulegenden Wert von $9.000$ €.`,
        questions: [
          {
            id: 'ja_1a',
            points: 15,
            type: 'text',
            text: '[1.1 Decision] Welches Bewertungsprinzip ist hier für das Umlaufvermögen zwingend anzuwenden?',
            correct: ['strenges niederstwertprinzip', 'nwp'],
            options: { problemId: 'ja_ex_1', stepId: 'principle', isDecision: true },
            feedback: String.raw`Im Umlaufvermögen gilt das strenge Niederstwertprinzip.`,
          },
          {
            id: 'ja_1b',
            points: 15,
            type: 'text',
            text: '[1.2 Execution] Zu welchem Wert muss der Posten bilanziert werden?',
            correct: ['9000', '9.000'],
            options: { problemId: 'ja_ex_1', dependsOn: 'principle' },
            feedback: String.raw`Es muss auf den niedrigeren Stichtagswert ($9.000$ €) abgeschrieben werden.`,
          }
        ]
      }
    ]
  }
};
