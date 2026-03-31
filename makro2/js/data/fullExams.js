// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v13.0: Precision Under Uncertainty
// ============================================================

export const FULL_EXAMS = {
  probe_2025: {
    id: 'probe_2025',
    title: 'Probeklausur Makroökonomik II',
    subtitle: 'Krisztina Kis-Katos, Georg-August-Universität Göttingen',
    duration: 90,
    aufgaben: [
      {
        label: 'Aufgabe 1',
        points: 16,
        type: 'wf-block',
        preamble: `Beurteilen Sie die Aussagen als wahr oder falsch.`,
        groups: [
          {
            context: 'Offene Volkswirtschaft & Trilemma',
            questions: [
              { id: '1_4', text: 'Ein Land kann bei freiem Kapitalverkehr einen festen Kurs und autonome Geldpolitik halten.', correct: 'Falsch', feedback: 'Widerspricht dem Trilemma.' },
            ],
          }
        ],
      },
    ],
  },
  hard_mock_2026: {
    id: 'hard_mock_2026',
    title: 'Makro II - Simulation v13.0 (60 Min)',
    subtitle: 'Orthogonal Scoring & Contextual Logic',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 40,
        type: 'text-block',
        title: 'UIP-Verteidigung & Regime-Wahl',
        preamble: String.raw`Kurs $E=1{,}0$. Erwartung $E^e=0{,}97$. Weltzins $i^*=2\%$. Freier Kapitalverkehr.`,
        questions: [
          {
            id: 'p1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Interpretation] Liegt auf dem Devisenmarkt ein Aufwertungs- oder Abwertungsdruck vor?',
            correct: ['abwertungsdruck', '↓'],
            options: { problemId: 'hm2_final', stepId: 'press_dir', isDecision: true },
            feedback: String.raw`$E^e < E \implies$ Abwertungsdruck.`,
          },
          {
            id: 'p1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den notwendigen Zins $i$, um $E=1{,}0$ zu halten.',
            correct: ['0.05', '5%'],
            options: { problemId: 'hm2_final', stepId: 'zins_exec', dependsOn: 'press_dir' },
            feedback: String.raw`$i = 0{,}05$.`,
          },
          {
            id: 'p1a_3',
            points: 20,
            type: 'text',
            text: '[1.3 Validation] Erklären Sie die theoretische Konsistenz.',
            correct: ['i↑ → e↑'],
            options: { 
              problemId: 'hm2_final', 
              role: 'VALIDATION', 
              premise: 'P1_UP',
              contextType: 'short_run_policy'
            },
            feedback: String.raw`Zinserhöhung neutralisiert Abwertungsdruck.`,
          }
        ]
      }
    ]
  }
};
