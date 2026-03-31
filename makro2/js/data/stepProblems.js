// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v11.0: Logic First
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Realwechselkurs-Dynamik (Validation)',
      context: 'Inflation pi = 5%, pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Interpretation] Liegt nominal eine Auf- oder Abwertung vor? (Symbol erlaubt)', 
          answer: ['abwertung', '↓', 'e ↓'], 
          options: { problemId: 'm2_wk_1', stepId: 'nom_dir', isDecision: true },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'E ↓ ⟹ Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk_1', stepId: 'real_calc', dependsOn: 'nom_dir' },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht ein Anstieg von epsilon einer Verbesserung der Wettbewerbsfähigkeit?', 
          answer: ['nein', 'no', 'verschlechterung'], 
          options: { problemId: 'm2_wk_1', role: 'VALIDATION' },
          hint: 'epsilon ↑ ⟹ Inlandsgüter werden relativ teurer.', 
          explain: 'Nein. Reale Aufwertung verschlechtert die Wettbewerbsfähigkeit.' 
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow: Das Goldene-Regel-Limit',
      context: 'Steady State bei k > k_GR. Die Sparquote s sinkt.',
      steps: [
        { 
          q: '[1. Interpretation] Welcher Zustand der Kapitalakkumulation liegt hier vor?', 
          answer: ['überakkumulation', 'over-accumulation'], 
          options: { problemId: 'm2_solow_1', stepId: 'state_id', isDecision: true },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Decision] Führt s↓ langfristig zu steigendem oder sinkendem Konsum c?', 
          answer: ['steigend', '↑', 'höher', 'increase'], 
          options: { problemId: 'm2_solow_1', stepId: 'cons_dir', dependsOn: 'state_id' },
          hint: 'Überlegen Sie, ob das Land zu viel spart.', 
          explain: 'In der Überakkumulation erhöht weniger Sparen den Konsum.' 
        },
        { 
          q: '[3. Validation] Gilt hier die klassische "Sparen ist gut" Intuition? Begründen Sie (Ambiguität erlaubt).', 
          answer: ['nein', 'ambig'], 
          options: { problemId: 'm2_solow_1', role: 'VALIDATION', ambiguityAllowed: true },
          hint: 'Betrachten Sie den Trade-off zwischen Niveau und Wachstum.', 
          explain: 'Nein, wegen dynamischer Ineffizienz ist weniger Sparen wohlfahrtssteigernd. Die Intuition ist abhängig von der Lage zur Goldenen Regel.' 
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
