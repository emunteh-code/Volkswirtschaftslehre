// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v11.0: Precision Under Uncertainty
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
 { q: '[1. Interpretation] Bestimmen Sie den relativen Preis p₁/p₂.',
   answer: ['10'],
   options: { problemId: 'm1_lagrange', role: 'price' },
   hint: 'p₁/p₂ = 10/1.',
   explain: 'Der Preis von Gut 1 ist 10-mal so hoch wie der von Gut 2.' },
 { q: '[2. Decision] Welcher Lösungstyp liegt hier vor? (Innere oder Randlösung?)',
   answer: ['randlösung', 'corner'],
   options: { problemId: 'm1_lagrange', stepId: 'model_choice', isDecision: true, contextType: 'optimization' },
   hint: 'Prüfen Sie, ob GRS = p₁/p₂ zu x₁ < 0 führt.',
   explain: 'Mathematisch: x₁ = -0,5. Da Mengen nicht negativ sein können, muss eine Randlösung vorliegen.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: { 
     problemId: 'm1_lagrange', 
     role: 'quantity', 
     allowedModels: ['CORNER_SOLUTION'],
     dependsOn: 'model_choice' 
   },
   hint: 'Setzen Sie x₁ auf 0.',
   explain: 'Optimum am Rand: x₁ = 0.' },
 { q: '[4. Validation] Berechnen Sie den Nutzen u* im Optimum.',
   answer: ['20'],
   options: { problemId: 'm1_lagrange', role: 'VALIDATION' },
   hint: 'u = (0+2)*10.',
   explain: 'u = 20.' }
 ]
 }
 ],
 slutsky: [
 {
 title: 'Slutsky-Zerlegung (Logic Path)',
 context: 'u = x₁x₂, p₁ sinkt von 4 auf 1, p₂=1, m=40.',
 steps: [
 { q: '[1. Interpretation] Welches Vorzeichen hat der SE für Gut 1 bei dieser Preissenkung?',
   answer: ['positiv', '↑', 'se > 0'],
   options: { problemId: 'm1_slutsky', stepId: 'se_dir', isDecision: true },
   hint: 'Ein Gut wird billiger.',
   explain: 'Substitutionseffekt (SE) ist bei Preissenkung immer positiv.' },
 { q: '[2. Execution] Berechnen Sie die Nachfrageänderung durch den SE.',
   answer: ['7.5', '7,5'],
   options: { problemId: 'm1_slutsky', role: 'quantity', dependsOn: 'se_dir' },
   hint: 'x₁_slutsky = 12,5. Altes x₁=5.',
   explain: '12,5 - 5 = 7,5.' },
 { q: '[3. Validation] Erklären Sie die Logik-Kette.',
   answer: ['p1↓ → se↑ → x1↑'],
   options: { problemId: 'm1_slutsky', role: 'VALIDATION', premise: 'P1_DOWN' },
   hint: 'Nutzen Sie primitives Denken: p↓...',
   explain: 'p₁ ↓ ⟹ SE ↑ ⟹ x₁ ↑.' }
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
