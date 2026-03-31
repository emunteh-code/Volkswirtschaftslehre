// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v7.0: Precision Under Uncertainty
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
   options: { context: { type: 'price' } },
   hint: 'p₁/p₂ = 10/1.',
   explain: 'Der Preis von Gut 1 ist 10-mal so hoch wie der von Gut 2.' },
 { q: '[2. Decision] Welcher Lösungstyp ist bei diesem Preisverhältnis wahrscheinlich? (Innere oder Randlösung?)',
   answer: ['randlösung', 'corner'],
   options: { isDecision: true },
   hint: 'Prüfen Sie kurz GRS vs. Preisverhältnis am Rand x₁=0.',
   explain: 'Bei x₁=0 ist die GRS = x₂/2 = 10/2 = 5. Da GRS (5) < p₁/p₂ (10), ist Gut 1 zu teuer.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: { context: { type: 'quantity', dependsOn: 'randlösung' } },
   hint: 'Setzen Sie x₁ auf 0, da die innere Lösung unzulässig ist.',
   explain: 'Mathematisch wäre x₁=-0,5. Da x₁≥0, folgt x₁=0.',
   traps: [{pattern:'-0.5', msg:'CONTRADICTION: Sie haben eine negative Menge berechnet. Score gedeckelt.'}] },
 { q: '[4. Validation] Berechnen Sie den Nutzen u* im Optimum.',
   answer: ['20'],
   hint: 'u = (0+2)*10.',
   explain: 'u* = 20. Jede andere zulässige Menge (z.B. x₁=1, x₂=0) liefert u=0.' }
 ]
 }
 ],
 slutsky: [
 {
 title: 'Slutsky-Zerlegung (Logic Chain)',
 context: 'u = x₁x₂, p₁ sinkt von 4 auf 1, p₂=1, m=40.',
 steps: [
 { q: '[1. Interpretation] In welche Richtung wirkt der Substitutionseffekt (SE) für Gut 1?',
   answer: ['positiv', '↑', 'se > 0'],
   options: { isDecision: true },
   hint: 'Gut 1 wird billiger.',
   explain: 'Preissenkung ⟹ SE immer positiv für dieses Gut.' },
 { q: '[2. Execution] Berechnen Sie die Nachfrageänderung durch den SE.',
   answer: ['7.5', '7,5'],
   options: { context: { dependsOn: 'positiv' } },
   hint: 'x₁_slutsky = 12,5. Altes x₁=5.',
   explain: '12,5 - 5 = 7,5.' },
 { q: '[3. Validation] Beschreiben Sie die Logik-Kette für dieses Ergebnis.',
   answer: ['p1 ↓ → se ↑'],
   options: { requiredChain: ['p1 ↓', 'se ↑', 'x1 ↑'] },
   hint: 'Preissenkung führt zu...?',
   explain: 'p₁ ↓ ⟹ SE ↑ ⟹ x₁ ↑. Dies ist die theoretisch zwingende Kette.' }
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
