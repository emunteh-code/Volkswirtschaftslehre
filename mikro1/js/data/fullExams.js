// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v7.0: Precision Under Uncertainty
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
    title: 'Mikro I - Simulation v7.0 (60 Min)',
    subtitle: 'Decision-Before-Execution & Logic Chains',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Optimierung & Randbedingungen',
        preamble: String.raw`Nutzenfunktion $u = (x_1 + 2)x_2$. Preise $p_1=10, p_2=1, m=10$.`,
        questions: [
          {
            id: 'm1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Liefert die mathematische Tangentialbedingung eine physisch realisierbare Lösung? Prüfen Sie $x_1 \geq 0$.',
            correct: ['nein', 'x1 < 0'],
            options: { isDecision: true },
            feedback: String.raw`Tangential ergibt $x_1 = -0{,}5$. Dies ist unzulässig.`,
          },
          {
            id: 'm1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Bestimmen Sie das tatsächliche Optimum.',
            correct: ['x1=0 x2=10', '0, 10'],
            options: { context: { type: 'quantity', dependsOn: 'nein' } },
            feedback: String.raw`Eckoptimum bei $x_1=0, x_2=10$.`,
          },
          {
            id: 'm1a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Validation] Beschreiben Sie die Logik-Kette für dieses Eckoptimum.',
            correct: ['grs < p1/p2 → x1=0'],
            options: { requiredChain: ['grs < p1/p2', 'x1=0', 'randlösung'] },
            feedback: String.raw`Da Gut 1 selbst bei $x_1=0$ noch zu teuer ist ($GRS=5 < 10$), liegt das Optimum am Rand.`,
          }
        ]
      }
    ]
  }
};
