// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v11.0: Logic First
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
 { q: '[1. Interpretation] Bestimmen Sie den relativen Preis von Gut 1.',
   answer: ['10'],
   options: { problemId: 'm1_lagrange', stepId: 'price_check' },
   hint: 'p₁/p₂ = 10/1.',
   explain: 'Der Preis von Gut 1 ist 10-mal so hoch wie der von Gut 2.' },
 { q: '[2. Decision] Welcher Lösungstyp ist bei diesem Preisverhältnis wahrscheinlich? (Innere oder Randlösung?)',
   answer: ['randlösung', 'corner'],
   options: { problemId: 'm1_lagrange', stepId: 'model_choice', isDecision: true },
   hint: 'Prüfen Sie kurz GRS vs. Preisverhältnis am Rand x₁=0.',
   explain: 'Bei x₁=0 ist die GRS = x₂/2 = 10/2 = 5. Da GRS (5) < p₁/p₂ (10), ist Gut 1 zu teuer.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: { 
     problemId: 'm1_lagrange', 
     stepId: 'exec_x1', 
     dependsOn: 'model_choice' 
   },
   hint: 'Setzen Sie x₁ auf 0, da die innere Lösung unzulässig ist.',
   explain: 'Mathematisch wäre x₁=-0,5. Da x₁≥0, folgt x₁=0.',
   traps: [{pattern:'-0.5', msg:'LOGIC ERROR: Sie haben eine negative Menge berechnet. Das Modell erzwingt x₁ ≥ 0. Korrigieren Sie auf Randlösung.'}] },
 { q: '[4. Validation] Berechnen Sie den Nutzen u* im Optimum. Ist dieser Wert das globale Maximum?',
   answer: ['20', 'ja', 'yes'],
   options: { problemId: 'm1_lagrange', role: 'VALIDATION' },
   hint: 'u = (0+2)*10.',
   explain: 'u* = 20. Jede andere zulässige Menge (z.B. x₁=1, x₂=0) liefert u=0.' }
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
   options: { problemId: 'm1_slutsky', stepId: 'se_calc', dependsOn: 'se_dir' },
   hint: 'x₁_slutsky = 12,5. Altes x₁=5.',
   explain: '12,5 - 5 = 7,5.' },
 { q: '[3. Validation] Erklären Sie, warum der SE positiv sein MUSS. (Satz oder Symbole)',
   answer: ['p1↓ → se↑'],
   options: { problemId: 'm1_slutsky', role: 'VALIDATION', premise: 'P1_DOWN' },
   hint: 'Nutzen Sie primitives Denken: p↓...',
   explain: 'p₁ ↓ ⟹ Opportunitätskosten ↓ ⟹ SE ↑. Dies ist die theoretisch zwingende Kette.' }
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
