// ============================================================
// STEP PROBLEMS DATA — Makroökonomik I
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  vgr: [
    {
      title: 'VGR: BIP & Deflator',
      context: 'Nominales BIP steigt von 1000 auf 1100. Reales BIP steigt von 1000 auf 1050.',
      steps: [
        { 
          q: '[1. Interpretation] Wie hoch ist die nominale Wachstumsrate?', 
          answer: ['10%', '0.1', '0,1'], 
          options: { problemId: 'm1_vgr_1', stepId: 'nom_growth', isDecision: true },
          hint: '(1100 - 1000) / 1000.', 
          explain: 'Die nominale Wachstumsrate beträgt 10%.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Inflationsrate (BIP-Deflator).', 
          answer: ['4.76%', '0.0476', '4.8%', '0,0476'], 
          options: { problemId: 'm1_vgr_1', stepId: 'inf_calc', dependsOn: 'nom_growth' },
          hint: 'Deflator = Nominales / Reales BIP.', 
          explain: 'P_0 = 1. P_1 = 1100 / 1050 = 1,0476. Inflation = 4,76%.' 
        },
        { 
          q: '[3. Validation] Warum ist das reale Wachstum geringer als das nominale?', 
          answer: ['preise steigen', 'inflation'], 
          options: { problemId: 'm1_vgr_1', role: 'VALIDATION' },
          hint: 'Teil des nominalen Anstiegs ist reiner Preiseffekt.', 
          explain: 'Das nominale BIP enthält Preiserhöhungen, das reale BIP filtert diese heraus.' 
        }
      ]
    }
  ],
  guetermarkt: [
    {
      title: 'Gütermarkt: Multiplikatoreffekt',
      context: 'c1 = 0.6. G steigt um 100.',
      steps: [
        { 
          q: '[1. Decision] Welcher Multiplikator ist hier anzuwenden?', 
          answer: ['2.5', '1/(1-c1)'], 
          options: { problemId: 'm1_gm_1', stepId: 'mult_id', isDecision: true },
          hint: '1 / (1 - 0.6).', 
          explain: 'Der Multiplikator ist 1 / 0,4 = 2,5.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung der Produktion Y.', 
          answer: ['250'], 
          options: { problemId: 'm1_gm_1', dependsOn: 'mult_id' },
          hint: 'Multiplikator * G-Impuls.', 
          explain: '2,5 * 100 = 250.' 
        }
      ]
    }
  ],
  arbeitsmarkt: [
    {
      title: 'Arbeitsmarkt: WS-PS Gleichgewicht',
      context: 'Marktmachtaufschlag mu = 0.1. WS-Relation: W/P = 1 - u.',
      steps: [
        { 
          q: '[1. Interpretation] Berechnen Sie den Reallohn aus der PS-Kurve.', 
          answer: ['0.909', '0,909', '1/1.1'], 
          options: { problemId: 'm1_am_1', stepId: 'ps_wage', isDecision: true },
          hint: 'W/P = 1 / (1 + mu).', 
          explain: 'W/P = 1 / 1,1 ≈ 0,909.' 
        },
        { 
          q: '[2. Execution] Bestimmen Sie die natürliche Arbeitslosenquote u_n.', 
          answer: ['0.091', '9.1%', '0,091'], 
          options: { problemId: 'm1_am_1', dependsOn: 'ps_wage' },
          hint: 'Setze WS = PS: 1 - u = 0,909.', 
          explain: 'u = 1 - 0,909 = 0,091 = 9,1%.' 
        }
      ]
    }
  ]
};

export const STEP_PROBLEMS = ensureMinimumStepProblems({
  chapters: CHAPTERS,
  contentById: CONTENT,
  intuitionById: INTUITION,
  baseStepProblems: BASE_STEP_PROBLEMS
});
