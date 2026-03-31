// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v11.0: Logic First
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
        { context: String.raw`Ein Haushalt mit Einkommen $m$ and Preisen $p_1, p_2$.`,
          questions: [
            { id:'1_1', text: String.raw`Bei $m = 10, p_1=5$ ist $x_1^{\max} = 2$.`, correct:'Wahr', feedback: 'Korrekt.' },
          ]},
      ]
    }
  ]
 },
 hard_mock_mikro1_2026: {
    id: 'hard_mock_mikro1_2026',
    title: 'Mikro I - Simulation v11.0 (60 Min)',
    subtitle: 'Final Hardening: Decision & Validation',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Slutsky & GRS-Logik',
        preamble: String.raw`Nutzenfunktion $u = x_1 x_2$. Preis $p_1$ sinkt von $4$ auf $1$. ($p_2 = 1, m = 40$).`,
        questions: [
          {
            id: 'm1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Interpretation] Bestimmen Sie qualitativ die Richtung des SE für Gut 1. (Symbol erlaubt)',
            correct: ['positiv', '↑', 'se > 0'],
            options: { problemId: 'hm1_final', stepId: 'se_dir', isDecision: true },
            feedback: String.raw`Gut 1 wird billiger ⟹ SE positiv.`,
          },
          {
            id: 'm1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den reinen Substitutionseffekt (SE).',
            correct: ['7.5', '7,5'],
            options: { problemId: 'hm1_final', dependsOn: 'se_dir' },
            feedback: String.raw`$SE = 7{,}5$.`,
          },
          {
            id: 'm1a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Validation] Erklären Sie die theoretische Konsistenz von p1↓ und SE.',
            correct: ['p1↓ → se↑'],
            options: { problemId: 'hm1_final', role: 'VALIDATION', premise: 'P1_DOWN' },
            feedback: String.raw`Theorie erzwingt SE↑ bei p↓.`,
          }
        ]
      }
    ]
  }
};
