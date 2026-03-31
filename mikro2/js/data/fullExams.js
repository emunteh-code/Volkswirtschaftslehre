// ============================================================
// FULL EXAMS DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  hard_mock_mikro2_2026: {
    id: 'hard_mock_mikro2_2026',
    title: 'Mikro II - Master-Level Simulation v14.0 (60 Min)',
    subtitle: 'Strategische Interaktion & Marktversagen',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Cournot-Wettbewerb & Kollusion',
        preamble: String.raw`Zwei Firmen (1, 2) mit $c=20$. Marktnachfrage $P = 140 - Q$.`,
        questions: [
          {
            id: 'm2a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Berechnen Sie die Cournot-Menge $q_1^*$ bei Symmetrie.',
            correct: ['40'],
            options: { problemId: 'hm2_a', stepId: 'cournot_q', isDecision: true },
            feedback: String.raw`$q^* = (140-20)/3 = 40$.`,
          },
          {
            id: 'm2a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den Cournot-Preis $P^*$.',
            correct: ['60'],
            options: { problemId: 'hm2_a', dependsOn: 'cournot_q' },
            feedback: String.raw`$P = 140 - 80 = 60$.`,
          },
          {
            id: 'm2a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Validation] Wäre eine Kollusion (Kartell) für die Firmen profitabler? (ja/nein)',
            correct: ['ja', 'yes'],
            options: { problemId: 'hm2_a', role: 'VALIDATION' },
            feedback: String.raw`Ja, im Kartell wird die Monopolmenge (60) produziert, was den Gewinn maximiert.`,
          }
        ]
      },
      {
        label: 'Block B',
        points: 30,
        type: 'text-block',
        title: 'Externe Effekte & Steuern',
        preamble: String.raw`Grenznutzen $MB = 100 - Q$, private Grenzkosten $MPC = 20 + Q$. Externer Grenzschaden $MEC = Q$.`,
        questions: [
          {
            id: 'm2b_1',
            points: 15,
            type: 'text',
            text: '[2.1 Decision] Bestimmen Sie die gesellschaftlich optimale Menge $Q^*$.',
            correct: ['26.67', '26,67', '80/3'],
            options: { problemId: 'hm2_b', stepId: 'opt_q', isDecision: true },
            feedback: String.raw`$100-Q = 20+2Q \implies 3Q = 80 \implies Q = 26{,}67$.`,
          },
          {
            id: 'm2b_2',
            points: 15,
            type: 'text',
            text: '[2.2 Execution] Wie hoch muss eine Pigou-Steuer $t$ im Optimum sein?',
            correct: ['26.67', '26,67'],
            options: { problemId: 'hm2_b', dependsOn: 'opt_q' },
            feedback: String.raw`$t = MEC(Q^*) = 26{,}67$.`,
          }
        ]
      }
    ]
  }
};
