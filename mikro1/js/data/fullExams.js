// ============================================================
// FULL EXAMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v12.0: Strict Hardening
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
    title: 'Mikro I - Simulation v12.0 (60 Min)',
    subtitle: 'Diagnostic Pipeline & Hard Zero Rule',
    duration: 60,
    aufgaben: [
      {
        label: 'Block A',
        points: 30,
        type: 'text-block',
        title: 'Slutsky-Zerlegung (Diagnostic)',
        preamble: String.raw`Nutzenfunktion $u = x_1 x_2, p_1^{alt} = 4, p_1^{neu} = 1, p_2 = 1, m = 40$.`,
        questions: [
          {
            id: 'm1a_1',
            points: 10,
            type: 'text',
            text: '[1.1 Decision] Welches Vorzeichen hat der Substitutionseffekt (SE) für Gut 1 bei dieser Preissenkung?',
            correct: ['positiv', '↑', 'se > 0'],
            options: { problemId: 'hm1_strict', stepId: 'se_dir', isDecision: true },
            feedback: String.raw`Gut 1 wird relativ billiger ⟹ Substitutionseffekt ist positiv.`,
          },
          {
            id: 'm1a_2',
            points: 10,
            type: 'text',
            text: '[1.2 Execution] Berechnen Sie den SE ($\Delta x_1^s$).',
            correct: ['7.5', '7,5'],
            options: { 
              problemId: 'hm1_strict', 
              dependsOn: 'se_dir', 
              role: 'CON_SE',
              premise: 'P1_DOWN' 
            },
            feedback: String.raw`$SE = 7{,}5$.`,
          },
          {
            id: 'm1a_3',
            points: 10,
            type: 'text',
            text: '[1.3 Validation] Ist ein berechneter SE von -7,5 theoretisch plausibel?',
            correct: ['nein', 'falsch', 'no'],
            options: { problemId: 'hm1_strict', role: 'VALIDATION' },
            feedback: String.raw`Nein. Der SE für ein billiger werdendes Gut MUSS positiv sein.`,
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
            text: '[2.1 Decision] Welcher Lösungstyp liegt hier vor? (Innen oder Rand?)',
            correct: ['randlösung', 'corner'],
            options: { problemId: 'hm1_strict_b', stepId: 'opt_type', isDecision: true },
            feedback: String.raw`Tangential führt zu $x_1 < 0$. Daher Corner.`,
          },
          {
            id: 'm2a_2',
            points: 15,
            type: 'text',
            text: '[2.2 Execution] Bestimmen Sie das optimale x1.',
            correct: ['0'],
            options: { 
              problemId: 'hm1_strict_b', 
              dependsOn: 'opt_type', 
              role: 'CON_CORNER'
            },
            feedback: String.raw`$x_1=0$.`,
          }
        ]
      }
    ]
  }
};
