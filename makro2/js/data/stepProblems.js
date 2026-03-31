// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v8.0: Precision Under Uncertainty
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
  wechselkurs: [
    {
      title: 'Wechselkurs-Regime & Anpassung',
      context: 'Inland hat Inflation pi = 5%, Ausland pi* = 2%. Nominalkurs E sinkt um 1%.',
      steps: [
        { 
          q: '[1. Interpretation] Liegt nominal eine Auf- oder Abwertung vor?', 
          answer: ['abwertung', '↓'], 
          options: { problemId: 'm2_wk', stepId: 'nom_dir', isDecision: true },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'Ein sinkendes E bedeutet Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%', '0.02'], 
          options: { problemId: 'm2_wk', stepId: 'real_calc', context: { dependsOn: 'abwertung' } },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht dies einer Verbesserung oder Verschlechterung der Wettbewerbsfähigkeit?', 
          answer: ['verschlechterung', 'worse'], 
          hint: 'Reale Aufwertung (epsilon↑) macht Inlandsgüter relativ teurer.', 
          explain: 'Wettbewerbsfähigkeit sinkt.' 
        }
      ]
    }
  ],
  zinsparitaet: [
    {
      title: 'UIP-Verteidigung (Logic Chain)',
      context: 'Weltzins i* = 2%. Erwarteter Kurs E^e = 0.97. Aktueller Kurs E = 1.0.',
      steps: [
        { 
          q: '[1. Interpretation] Liegt auf dem Devisenmarkt Auf- oder Abwertungsdruck vor?', 
          answer: ['abwertungsdruck', '↓'], 
          options: { problemId: 'm2_uip', stepId: 'pressure_dir', isDecision: true },
          hint: 'E^e < E.', 
          explain: 'Markt erwartet Abwertung.' 
        },
        { 
          q: '[2. Execution] Welchen Zins i muss die ZB setzen, um E=1.0 zu halten?', 
          answer: ['5', '5%'], 
          options: { problemId: 'm2_uip', stepId: 'zins_calc', context: { dependsOn: 'abwertungsdruck' } },
          hint: 'i = i* - (E^e - E)/E.', 
          explain: 'i = 2% + 3% = 5%.' 
        },
        { 
          q: '[3. Validation] Beschreiben Sie die Logik-Kette für die Kursverteidigung.', 
          answer: ['i↑ → cap inflow → e↑'],
          options: { problemId: 'm2_uip', requiredChain: ['i↑', 'e↑'], context: { premise: 'i↑' } },
          hint: 'Zinserhöhung führt zu...?', 
          explain: 'Zins steigt ⟹ Kapitalzufluss ⟹ Nachfrage nach Währung steigt ⟹ Kurs stabilisiert.' 
        }
      ]
    }
  ],
  solow_basis: [
    {
      title: 'Solow: Das Goldene-Regel-Limit',
      context: 'Steady State bei k > k_GR.',
      steps: [
        { 
          q: '[1. Interpretation] Welcher Zustand der Kapitalakkumulation liegt hier vor?', 
          answer: ['überakkumulation', 'over-accumulation'], 
          options: { problemId: 'm2_solow', stepId: 'state_id', isDecision: true },
          hint: 'k > k_GR.', 
          explain: 'Die Wirtschaft hat zu viel Kapital.' 
        },
        { 
          q: '[2. Validation] Wie reagiert der Steady-State Konsum c langfristig auf ein Sinken von s?', 
          answer: ['steigt', '↑', 'higher'], 
          options: { problemId: 'm2_solow', requiredChain: ['k>kgr', 'c↑'], context: { premise: 'k>kgr' } },
          hint: 'In der Überakkumulation senkt Sparen den Konsum.', 
          explain: 'Weniger Sparen erhöht den Konsum langfristig.' 
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
