// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v12.0: Strict Logic Enforcement
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
 lagrange: [
 {
 title: 'Das Haushaltsoptimum (Diagnostik)',
 context: 'u = (x₁ + 2)x₂, p₁ = 10, p₂ = 1, m = 10.',
 steps: [
 { q: '[1. Interpretation] Bestimmen Sie das Preisverhältnis p₁/p₂.',
   answer: ['10'],
   options: { problemId: 'm1_lagrange_strict', stepId: 'price_check' },
   hint: 'p₁ / p₂.',
   explain: '10 / 1 = 10.' },
 { q: '[2. Decision] Welcher Lösungstyp liegt hier vor? (Innere oder Randlösung?)',
   answer: ['randlösung', 'corner'],
   options: { problemId: 'm1_lagrange_strict', stepId: 'type_choice', isDecision: true },
   hint: 'Prüfen Sie, ob GRS = p₁/p₂ zu x₁ < 0 führt.',
   explain: 'Mathematisch: x₁ = -0,5. Da Mengen nicht negativ sein können, muss eine Randlösung vorliegen.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: { 
     problemId: 'm1_lagrange_strict', 
     stepId: 'exec_x1', 
     dependsOn: 'type_choice',
     role: 'CON_SE' 
   },
   hint: 'Setzen Sie x₁ auf 0.',
   explain: 'Optimum am Rand: x₁ = 0.',
   traps: [{pattern:'-0.5', msg:'HARD ZERO: Sie haben eine negative Menge berechnet. Dies verletzt fundamentale ökonomische Constraints.'}] },
 { q: '[4. Validation] Ist die Randlösung x* = (0, 10) tatsächlich das globale Maximum?',
   answer: ['ja', 'yes'],
   options: { problemId: 'm1_lagrange_strict', role: 'VALIDATION' },
   hint: 'Berechnen Sie u(0,10) = 20 vs u(1,0) = 0.',
   explain: 'u* = 20. Die Randlösung ist konsistent.' }
 ]
 }
 ],
 slutsky: [
 {
 title: 'Slutsky-Zerlegung (Logic Path)',
 context: 'u = x₁x₂, p₁ sinkt von 4 auf 1, p₂=1, m = 40.',
 steps: [
 { q: '[1. Decision] Welches Vorzeichen hat der Substitutionseffekt (SE) für Gut 1?',
   answer: ['positiv', '↑', 'se > 0'],
   options: { problemId: 'm1_slutsky_strict', stepId: 'se_dir', isDecision: true },
   hint: 'Ein Gut wird billiger.',
   explain: 'Substitutionseffekt (SE) ist bei Preissenkung immer positiv.' },
 { q: '[2. Execution] Berechnen Sie die Nachfrageänderung durch den SE.',
   answer: ['7.5', '7,5'],
   options: { 
     problemId: 'm1_slutsky_strict', 
     stepId: 'se_calc', 
     dependsOn: 'se_dir',
     role: 'CON_SE',
     premise: 'P1_DOWN' 
   },
   hint: 'x₁_slutsky = 12,5. Altes x₁=5.',
   explain: '12,5 - 5 = 7,5.' },
 { q: '[3. Validation] Erklären Sie den Gesamtzusammenhang (Ambiguity erlaubt).',
   answer: ['ambig', 'se↑ ie↑'],
   options: { problemId: 'm1_slutsky_strict', role: 'VALIDATION', premise: 'P1_DOWN', ambiguityAllowed: true },
   hint: 'Betrachten Sie SE und EE gemeinsam.',
   explain: 'SE↑ und IE↑ (da normales Gut) verstärken sich zum Gesamteffekt.' }
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
