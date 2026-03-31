// ============================================================
// FULL EXAMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v11.0: Logic First
// ============================================================

export const FULL_EXAMS = {
  hard_mock_2026: {
    id: 'hard_mock_2026',
    title: 'Makro II - Simulation v11.0 (60 Min)',
    subtitle: 'Final Hardening: Regime Uncertainty & Validation',
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
            options: { problemId: 'hm2_final', dependsOn: 'press_dir' },
            feedback: String.raw`$i = 0{,}02 - (0{,}97 - 1{,}0)/1{,}0 = 0{,}05$.`,
          },
          {
            id: 'p1a_3',
            points: 20,
            type: 'text',
            text: '[1.3 Validation] Ist eine Reservesenkung ohne Zinsänderung hier eine valide Verteidigung?',
            correct: ['nein', 'no'],
            options: { problemId: 'hm2_final', role: 'VALIDATION' },
            feedback: String.raw`Nein, bei freiem Kapitalverkehr erzwingt die UIP eine Zinsanpassung.`,
          }
        ]
      }
    ]
  }
};
