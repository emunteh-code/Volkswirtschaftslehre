// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v12.1: Adversarial Hardening
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Wechselkurs-Anpassung (Validation)',
      context: 'Inflation pi = 5%, pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Decision] Liegt nominal eine Auf- oder Abwertung vor? (Symbol erlaubt)', 
          answer: ['abwertung', '↓'], 
          options: { problemId: 'm2_wk_strict', stepId: 'nom_dir', isDecision: true, targetVar: 'VAR_E' },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'E ↓ ⟹ Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk_strict', stepId: 'real_calc', dependsOn: 'nom_dir' },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht ein Anstieg von epsilon einer Verbesserung der Wettbewerbsfähigkeit?', 
          answer: ['nein', 'no', 'verschlechterung'], 
          options: { problemId: 'm2_wk_strict', role: 'VALIDATION' },
          hint: 'epsilon ↑ ⟹ Inlandsgüter werden relativ teurer.', 
          explain: 'Wettbewerbsfähigkeit sinkt.' 
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
          options: { problemId: 'm2_solow_strict', stepId: 'state_id', isDecision: true, modelId: 'OVERACCUM' },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Decision] Führt s↓ langfristig zu steigendem oder sinkendem Konsum c?', 
          answer: ['steigend', '↑', 'höher'], 
          options: { 
            problemId: 'm2_solow_strict', 
            stepId: 'cons_dir', 
            dependsOn: 'state_id',
            premise: 'OVERACCUM',
            targetVar: 'VAR_C'
          },
          hint: 'Überlegen Sie, ob das Land "zu viel" spart.', 
          explain: 'In der Überakkumulation erhöht weniger Sparen den Konsum.' 
        },
        { 
          q: '[3. Validation] Erklären Sie die J-Kurve bei der s-Senkung (Ambiguity erlaubt).', 
          answer: ['ambig', 'c↑ sofort'], 
          options: { problemId: 'm2_solow_strict', role: 'VALIDATION', ambiguityAllowed: true },
          hint: 'Hängt vom Zeithorizont ab.', 
          explain: 'Kurzfristig steigt der Konsum sofort (c=(1-s)y), langfristig konvergiert er gegen das höhere Steady-State-Niveau.' 
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
