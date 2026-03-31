// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v12.0: Strict Hardening
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
    title: 'Makro II - Simulation v12.0 (60 Min)',
    subtitle: 'Diagnostic Pipeline & Hard Zero Rule',
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
            text: '[1.1 Decision] Liegt auf dem Devisenmarkt ein Aufwertungs- oder Abwertungsdruck vor?',
            correct: ['abwertungsdruck', '↓'],
            options: { problemId: 'hm2_strict', stepId: 'press_dir', isDecision: true },
            feedback: String.raw`$E^e < E \implies$ Abwertungsdruck.`,
          },
          {
            id: 'p1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den notwendigen Zins $i$, um $E=1{,}0$ zu halten.',
            correct: ['0.05', '5%'],
            options: { problemId: 'hm2_strict', dependsOn: 'press_dir' },
            feedback: String.raw`$i = 0{,}02 - (0{,}97 - 1{,}0)/1{,}0 = 0{,}05$.`,
          },
          {
            id: 'p1a_3',
            points: 20,
            type: 'text',
            text: '[1.3 Validation] Ist eine Reservesenkung OHNE Zinsänderung hier eine valide Verteidigung bei freiem Kapitalverkehr?',
            correct: ['nein', 'no'],
            options: { problemId: 'hm2_strict', role: 'VALIDATION' },
            feedback: String.raw`Nein, das Trilemma erzwingt die Zinsautonomie-Aufgabe.`,
          }
        ]
      },
      {
        label: 'Block B',
        points: 20,
        type: 'text-block',
        title: 'Solow-Grenzwerte',
        preamble: String.raw`Produktion $y = k^{0{,}5}$. Steady State bei $k > k_{GR}$.`,
        questions: [
          {
            id: 'p2a_1',
            points: 10,
            type: 'text',
            text: '[2.1 Decision] Befindet sich das Land in einem Zustand der Über- oder Unterakkumulation?',
            correct: ['überakkumulation', 'over-accumulation'],
            options: { problemId: 'hm2_strict_b', stepId: 'state_type', isDecision: true },
            feedback: String.raw`$k > k_{GR} \implies$ Überakkumulation.`,
          },
          {
            id: 'p2a_2',
            points: 10,
            type: 'text',
            text: '[2.2 Validation] Führt eine Erhöhung der Sparquote hier zu einem höheren oder niedrigeren Steady-State Konsum?',
            correct: ['niedriger', 'fällt', '↓'],
            options: { 
              problemId: 'hm2_strict_b', 
              dependsOn: 'state_type',
              role: 'VALIDATION',
              premise: 'OVERACCUM'
            },
            feedback: String.raw`In der Überakkumulation senkt zusätzliches Sparen den Konsum.`,
          }
        ]
      }
    ]
  }
};
