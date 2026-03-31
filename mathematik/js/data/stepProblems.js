// ============================================================
// STEP PROBLEMS DATA — Mathematik
// FINAL BENCHMARK STANDARD v14.0: Continuous Decay & Semantic Drift Detection
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  ableitung: [
    {
      title: 'Marginale Analyse',
      context: 'Kostenfunktion C(y) = y^2 + 4y + 10.',
      steps: [
        { 
          q: '[1. Interpretation] Was gibt die erste Ableitung C\'(y) ökonomisch an?', 
          answer: ['Grenzkosten', 'Marginal Costs', 'MC'], 
          options: { problemId: 'ma_der_1', stepId: 'econ_meaning', isDecision: true },
          hint: 'Änderung der Kosten bei einer zusätzlichen Einheit Output.', 
          explain: 'Die Ableitung der Gesamtkostenfunktion liefert die Grenzkosten (MC).' 
        },
        { 
          q: '[2. Execution] Berechnen Sie C\'(y).', 
          answer: ['2y + 4'], 
          options: { problemId: 'ma_der_1', stepId: 'calc_der', dependsOn: 'econ_meaning' },
          hint: 'Nutzen Sie die Potenzregel.', 
          explain: 'C\'(y) = 2y + 4.' 
        }
      ]
    }
  ],
  optimierung: [
    {
      title: 'Gewinnmaximierung',
      context: 'Erlös E(y) = 10y - y^2, Kosten C(y) = 2y.',
      steps: [
        { 
          q: '[1. Decision] Wie lautet die Gewinnfunktion pi(y)?', 
          answer: ['8y - y^2', '10y - y^2 - 2y'], 
          options: { problemId: 'ma_opt_1', stepId: 'profit_id', isDecision: true },
          hint: 'Gewinn = Erlös - Kosten.', 
          explain: 'pi(y) = 10y - y^2 - 2y = 8y - y^2.' 
        },
        { 
          q: '[2. Execution] Bestimmen Sie das Gewinnmaximum via BEO.', 
          answer: ['4', 'y=4'], 
          options: { problemId: 'ma_opt_1', stepId: 'exec_opt', dependsOn: 'profit_id' },
          hint: 'pi\'(y) = 0.', 
          explain: '8 - 2y = 0 ⟹ y = 4.' 
        },
        { 
          q: '[3. Validation] Prüfen Sie die BZO. Ist es ein Maximum? (ja/nein)', 
          answer: ['ja', 'yes'], 
          options: { problemId: 'ma_opt_1', role: 'VALIDATION' },
          hint: 'Zweite Ableitung pi\'\'(y).', 
          explain: 'pi\'\'(y) = -2 < 0. Ja, es ist ein Maximum.' 
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
