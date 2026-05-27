// ============================================================
// FULL EXAMS DATA — Mikroökonomik II
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const FULL_EXAMS = {
  hard_mock_mikro2_2026: {
    id: 'hard_mock_mikro2_2026',
    title: 'Mikro II - Master-Level Simulation v14.0 (60 Min)',
    subtitle: 'Strategische Interaktion, Zeit und Unsicherheit',
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
            concept_id: 'oligopol_cournot_bertrand',
            text: '[1.1 Decision] Berechnen Sie die Cournot-Menge $q_1^*$ bei Symmetrie.',
            correct: ['40'],
            options: { problemId: 'hm2_a', stepId: 'cournot_q', isDecision: true },
            feedback: String.raw`$q^* = (140-20)/3 = 40$.`,
          },
          {
            id: 'm2a_2',
            points: 10,
            type: 'text',
            concept_id: 'oligopol_cournot_bertrand',
            text: '[1.2 Execution] Berechnen Sie den Cournot-Preis $P^*$.',
            correct: ['60'],
            options: { problemId: 'hm2_a', dependsOn: 'cournot_q' },
            feedback: String.raw`$P = 140 - 80 = 60$.`,
          },
          {
            id: 'm2a_3',
            points: 10,
            type: 'text',
            concept_id: 'oligopol_cournot_bertrand',
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
        title: 'Intertemporaler Konsum & Versicherung',
        preamble: String.raw`Eine Konsumentin hat Einkommen $m_1=100$ heute und $m_2=110$ morgen. Der Zinssatz beträgt $r=10\%$. Zusätzlich betrachtet sie ein Risiko mit Schadenszustand $c_1=60$, Normalzustand $c_2=100$ und Schadenswahrscheinlichkeit $\pi=0{,}25$.`,
        questions: [
          {
            id: 'm2b_1',
            points: 15,
            type: 'text',
            concept_id: 'intertemporaler_konsum',
            text: '[2.1 Decision] Berechnen Sie den Gegenwartswert der Ausstattung.',
            correct: ['200', '200.00', '200,00'],
            options: { problemId: 'hm2_b', stepId: 'pv_budget', isDecision: true },
            feedback: String.raw`$m_1+\frac{m_2}{1+r}=100+\frac{110}{1{,}1}=200$.`,
          },
          {
            id: 'm2b_2',
            points: 15,
            type: 'text',
            concept_id: 'unsicherheit_versicherung',
            text: '[2.2 Execution] Stellen Sie den Erwartungsnutzen für die zwei Zustände formal auf.',
            correct: ['0.25u(60)+0.75u(100)', '0,25u(60)+0,75u(100)', 'pi u(c1)+(1-pi)u(c2)'],
            options: { problemId: 'hm2_b', dependsOn: 'pv_budget' },
            feedback: String.raw`$EU=\pi u(c_1)+(1-\pi)u(c_2)=0{,}25u(60)+0{,}75u(100)$.`,
          }
        ]
      }
    ]
  }
};
