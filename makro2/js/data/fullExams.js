// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v7.0: Precision Under Uncertainty
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
    title: 'Makro II - Simulation v7.0 (60 Min)',
    subtitle: 'Diagnostic Pipeline & Regime Hardening',
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
            options: { isDecision: true },
            feedback: String.raw`$E^e < E \implies$ Markt erwartet Abwertung.`,
          },
          {
            id: 'p1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den notwendigen Zins $i$, um $E=1{,}0$ zu halten.',
            correct: ['0.05', '5%'],
            options: { context: { dependsOn: 'abwertungsdruck' } },
            feedback: String.raw`$i = 0{,}02 - (0{,}97 - 1{,}0)/1{,}0 = 0{,}05$.`,
          },
          {
            id: 'p1a_3',
            points: 20,
            type: 'text',
            text: '[1.3 Validation] Beschreiben Sie die Logik-Kette für die Kursverteidigung unter den gegebenen Bedingungen.',
            correct: ['kapitalverkehr frei → zinsautonomie ↓ → i ↑'],
            options: { requiredChain: ['kapitalverkehr frei', 'zinsautonomie aufgeben', 'i ↑'] },
            feedback: String.raw`Da der Kapitalverkehr frei ist, muss die ZB die Geldpolitik dem Marktdruck opfern.`,
          }
        ]
      }
    ]
  }
};
