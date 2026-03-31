// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v12.0: Precision Under Uncertainty
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Wechselkurs-Regime & Anpassung',
      context: 'Inflation pi = 5%, pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Interpretation] Liegt nominal eine Auf- oder Abwertung vor?', 
          answer: ['abwertung', '↓'], 
          options: { problemId: 'm2_wk', stepId: 'nom_dir', isDecision: true },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'E ↓ ⟹ Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk', stepId: 'real_calc', dependsOn: 'nom_dir' },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht dies einer Verbesserung der Wettbewerbsfähigkeit?', 
          answer: ['nein', 'no'], 
          options: { problemId: 'm2_wk', role: 'VALIDATION' },
          hint: 'Reale Aufwertung (epsilon↑) macht inländische Güter relativ teurer.', 
          explain: 'Wettbewerbsfähigkeit sinkt.' 
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Wachstum: Das Goldene-Regel-Limit',
      context: 'Steady State bei k > k_GR.',
      steps: [
        { 
          q: '[1. Interpretation] Welcher Zustand der Kapitalakkumulation liegt hier vor?', 
          answer: ['überakkumulation', 'over-accumulation'], 
          options: { problemId: 'm2_solow', stepId: 'state_id', isDecision: true, contextType: 'growth' },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Validation] Wie reagiert der Steady-State Konsum c langfristig auf ein Sinken von s?', 
          answer: ['steigt', '↑', 'higher'], 
          options: { 
            problemId: 'm2_solow', 
            role: 'VALIDATION',
            allowedModels: [{ model: 'OVERACCUM', priority: 1 }],
            dependsOn: 'state_id'
          },
          hint: 'In der Überakkumulation senkt Sparen den Konsum.', 
          explain: 's↓ ⟹ weniger Kapital ⟹ c↑.' 
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
