// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v12.0: Precision Under Uncertainty
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
 lagrange: [
 {
 title: 'Haushaltsoptimum: Der Ecklösungs-Check',
 context: 'u = (x₁ + 2)x₂, p₁ = 10, p₂ = 1, m = 10.',
 steps: [
 { q: '[1. Interpretation] Bestimmen Sie das Preisverhältnis p₁/p₂.',
   answer: ['10'],
   options: { problemId: 'm1_lagrange', role: 'price' },
   hint: 'p₁ / p₂.',
   explain: '10 / 1 = 10.' },
 { q: '[2. Decision] Welcher Lösungstyp ist bei diesem Preisverhältnis theoretisch angemessen?',
   answer: ['randlösung', 'corner'],
   options: { problemId: 'm1_lagrange', stepId: 'model_choice', isDecision: true, contextType: 'optimization' },
   hint: 'Vergleichen Sie die GRS am Rand x₁=0 (x₂=10) mit dem Preisverhältnis.',
   explain: 'GRS(0,10) = 10/2 = 5. Da GRS < p₁/p₂, ist Gut 1 zu teuer.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: { 
     problemId: 'm1_lagrange', 
     role: 'consumption_quantity', 
     allowedModels: [{ model: 'CORNER', priority: 1 }, { model: 'INTERIOR', priority: 2 }],
     dependsOn: 'model_choice' 
   },
   hint: 'Nutzen Sie Ihre Entscheidung aus Schritt 2.',
   explain: 'Da Mengen nicht negativ sein können und eine Randlösung vorliegt, ist x₁=0.' },
 { q: '[4. Validation] Ist u(0,10) > u(1,0)? (ja/nein)',
   answer: ['ja', 'yes'],
   options: { problemId: 'm1_lagrange', role: 'VALIDATION' },
   hint: 'Berechnen Sie beide Nutzenniveaus.',
   explain: 'u(0,10) = 20, u(1,0) = 0. Die Randlösung ist korrekt.' }
 ]
 }
 ],
 slutsky: [
 {
 title: 'Slutsky-Zerlegung: Richtungsentscheidung',
 context: 'u = x₁x₂, p₁ sinkt, m fix.',
 steps: [
 { q: '[1. Interpretation] Welches Vorzeichen hat der Substitutionseffekt (SE) für Gut 1?',
   answer: ['positiv', '↑', 'se > 0'],
   options: { problemId: 'm1_slutsky', stepId: 'se_dir', isDecision: true },
   hint: 'Relative Preise ändern sich.',
   explain: 'p₁ sinkt ⟹ Gut 1 wird attraktiver ⟹ SE positiv.' },
 { q: '[2. Decision] Ist das Vorzeichen des Einkommenseffekts (EE) ohne Information über die Gut-Klassifikation eindeutig?',
   answer: ['nein', 'ambig', 'uncertain'],
   options: { problemId: 'm1_slutsky', ambiguityAllowed: true },
   hint: 'Hängt davon ab, ob das Gut normal oder inferior ist.',
   explain: 'Ohne Klassifikation ist die Richtung des EE unbestimmt.' },
 { q: '[3. Execution] Bei u=x₁x₂ ist Gut 1 normal. In welche Richtung wirkt der EE bei p₁-Senkung?',
   answer: ['positiv', '↑', 'steigt'],
   options: { problemId: 'm1_slutsky', dependsOn: 'se_dir' },
   hint: 'Preissenkung ⟹ Realeinkommen steigt.',
   explain: 'Da das Gut normal ist, erhöht das höhere Realeinkommen die Nachfrage.' }
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
