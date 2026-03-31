// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v9.0: Precision Under Uncertainty
// ============================================================

export const FULL_EXAMS = {
probe_2024: {
  id: 'probe_2024',
  title: 'Probeklausur Mikroökonomik I',
  subtitle: 'Prof. Marcela Ibanez, Georg-August-Universität Göttingen',
  duration: 90,
  aufgaben: [
    {
      label: 'Aufgabe 1', points: 40, type: 'wf-block',
      preamble: String.raw`Beurteilen Sie die Aussagen als wahr oder falsch.`,
      groups: [
        { context: String.raw`Ein Haushalt mit Einkommen $m$ und Preisen $p_1, p_2$.`,
          questions: [
            { id:'1_1', text: String.raw`Bei $m = 10, p_1=5$ ist $x_1^{\max} = 2$.`, correct:'Wahr', feedback: 'Korrekt.' },
          ]},
      ]
    }
  ]
},
hard_mock_mikro1_2026: {
    id: 'hard_mock_mikro1_2026',
    title: 'Mikro I - Simulation v8.0 (60 Min)',
    subtitle: 'Diagnostic Pipeline & Logical Consistency',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Slutsky-Zerlegung (Diagnostic)',
        preamble: String.raw`Nutzenfunktion $u = x_1 x_2$. Der Preis $p_1$ sinkt von $4$ auf $1$. ($p_2 = 1, m = 40$).`,
        questions: [
          {
            id: 'm1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Interpretation] Bestimmen Sie qualitativ die Richtung des SE für Gut 1.',
            correct: ['positiv', '↑'],
            options: { problemId: 'hm1_a', stepId: 'se_dir', isDecision: true },
            feedback: String.raw`Gut 1 wird billiger ⟹ Substitutionseffekt ist positiv.`,
          },
          {
            id: 'm1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den reinen Substitutionseffekt (SE).',
            correct: ['7.5', '7,5'],
            options: { problemId: 'hm1_a', dependsOn: 'se_dir', role: 'consumption_quantity' },
            feedback: String.raw`$SE = 12{,}5 - 5 = 7{,}5$.`,
          },
          {
            id: 'm1a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Validation] Beschreiben Sie die Logik-Kette für dieses Ergebnis.',
            correct: ['p1↓ → se↑ → x1↑'],
            options: { problemId: 'hm1_a', premise: 'p1↓' },
            feedback: String.raw`Preis sinkt ⟹ Opportunitätskosten sinken ⟹ NF steigt.`,
          }
        ]
      },
      {
        label: 'Block B',
        points: 30,
        type: 'text-block',
        title: 'Eckoptimum & Randbedingungen',
        preamble: String.raw`Nutzenfunktion $u = (x_1 + 2)x_2$. Preise $p_1=10, p_2=1, m=10$.`,
        questions: [
          {
            id: 'm2a_1',
            points: 15,
            type: 'text',
            text: '[2.1 Decision] Liefert die mathematische Tangentialbedingung eine physisch realisierbare Lösung? Prüfen Sie $x_1 \geq 0$.',
            correct: ['nein', 'x1 < 0'],
            options: { problemId: 'hm1_b', stepId: 'opt_type', isDecision: true },
            feedback: String.raw`Tangential ergibt $x_1 = -0{,}5$. Dies ist unzulässig.`,
          },
          {
            id: 'm2a_2',
            points: 15,
            type: 'text',
            text: '[2.2 Execution] Bestimmen Sie das tatsächliche Optimum.',
            correct: ['x1=0 x2=10', '0, 10'],
            options: { problemId: 'hm1_b', dependsOn: 'opt_type', role: 'consumption_quantity' },
            feedback: String.raw`Eckoptimum bei $x_1=0, x_2=10$.`,
          }
        ]
      }
    ]
  }
};
