// ============================================================
// STEP PROBLEMS DATA — Makroökonomik II
// FINAL BENCHMARK STANDARD v7.0: Precision Under Uncertainty
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
          q: '[1. Interpretation] Bestimmen Sie qualitativ die nominale Änderung. (Symbol erlaubt)', 
          answer: ['abwertung', '↓', 'e ↓'], 
          options: { isDecision: true },
          hint: 'E sinkt in Mengennotierung.', 
          explain: 'Ein sinkendes E bedeutet Abwertung.' 
        },
        { 
          q: '[2. Execution] Berechnen Sie die prozentuale Änderung des realen Wechselkurses epsilon.', 
          answer: ['2', '2%'], 
          options: { context: { dependsOn: 'abwertung' } },
          hint: '%delta epsilon ≈ %delta E + pi - pi*.', 
          explain: '-1% + 5% - 2% = +2%.' 
        },
        { 
          q: '[3. Validation] Entspricht dies einer Verbesserung der Wettbewerbsfähigkeit? (ja/nein)', 
          answer: ['nein', 'no'], 
          hint: 'Reale Aufwertung bedeutet...', 
          explain: 'Nein. Reale Aufwertung (epsilon↑) macht Inlandsgüter relativ teurer.' 
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
          options: { isDecision: true },
          hint: 'E^e < E.', 
          explain: 'Markt erwartet Abwertung.' 
        },
        { 
          q: '[2. Execution] Welchen Zins i muss die ZB setzen, um E=1.0 zu halten?', 
          answer: ['5', '5%'], 
          options: { context: { dependsOn: 'abwertungsdruck' } },
          hint: 'i = i* - (E^e - E)/E.', 
          explain: 'i = 2% + 3% = 5%.' 
        },
        { 
          q: '[3. Validation] Beschreiben Sie die Logik-Kette für die Kursverteidigung.', 
          answer: ['e_erwartet ↓ → i ↑ → e fix'],
          options: { requiredChain: ['e ↓', 'i ↑', 'e fix'] },
          hint: 'Druck nach unten ⟹ Zins muss...?', 
          explain: 'E^e ↓ ⟹ Kapitalabfluss ⟹ i ↑ nötig ⟹ E stabil.' 
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
