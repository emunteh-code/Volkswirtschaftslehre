// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD v12.1: Adversarial Hardening
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
   options: { problemId: 'm1_lagrange_strict', stepId: 'type_choice', isDecision: true, modelId: 'CORNER' },
   hint: 'Prüfen Sie, ob GRS = p₁/p₂ zu x₁ < 0 führt.',
   explain: 'Mathematisch: x₁ = -0,5. Da Mengen nicht negativ sein können, muss eine Randlösung vorliegen.' },
 { q: '[3. Execution] Berechnen Sie die optimale Menge x₁*.',
   answer: ['0'],
   options: {
     problemId: 'm1_lagrange_strict',
     stepId: 'exec_x1',
     dependsOn: 'type_choice',
     role: 'CON_SE',
     targetVar: 'VAR_X1'
   },
   hint: 'Setzen Sie x₁ auf 0.',
   explain: 'Optimum am Rand: x₁ = 0.',
   traps: [{ pattern: '-0.5', msg: 'HARD ZERO: Sie haben eine negative Menge berechnet. Dies verletzt fundamentale ökonomische Constraints.' }] },
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
 { q: '[1. Decision] Welches Vorzeichen hat der Substitutionseffekt (SE) für Gut 1 bei dieser Preissenkung?',
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
     premise: 'P1_DOWN',
     targetVar: 'VAR_X1'
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
 ],
 cv_ev: [
 {
 title: 'CV/EV vs. Konsumentenrente (Transfer-Drill)',
 context: 'Preis von Gut 1 sinkt von p₁⁰ auf p₁¹, Gut 1 ist normal.',
 steps: [
 { q: '[1. Decision] Welches Nutzenniveau ist bei CV die Referenz?',
   answer: ['altes nutzenniveau', 'u0', 'u^0'],
   options: { problemId: 'm1_cv_ev_transfer', stepId: 'cv_ref', isDecision: true },
   hint: 'CV kompensiert auf das alte Nutzenniveau.',
   explain: 'CV nutzt u⁰ als Referenzniveau.' },
 { q: '[2. Decision] Welches Nutzenniveau ist bei EV die Referenz?',
   answer: ['neues nutzenniveau', 'u1', 'u^1'],
   options: { problemId: 'm1_cv_ev_transfer', stepId: 'ev_ref', isDecision: true },
   hint: 'EV bewertet aus Sicht nach der Preisänderung.',
   explain: 'EV nutzt u¹ als Referenzniveau.' },
 { q: '[3. Validation] Welche Rangordnung ist bei einer Preissenkung eines normalen Gutes korrekt?',
   answer: ['cv < delta kr < ev', 'cv<Δkr<ev', 'cv<kr<ev'],
   options: { problemId: 'm1_cv_ev_transfer', role: 'VALIDATION' },
   hint: 'Konsumentenrente liegt zwischen den exakten Maßen.',
   explain: 'Für normale Güter bei Preissenkung gilt typischerweise CV < ΔKR < EV.' }
 ]
 }
 ],
 arbeit: [
 {
 title: 'Arbeitsangebot: SE/EE-Signale',
 context: 'Lohn steigt, Zeitbudget T fix, Freizeit ist normales Gut.',
 steps: [
 { q: '[1. Decision] Was passiert mit dem Substitutionseffekt auf Freizeit bei einem Lohnanstieg?',
   answer: ['freizeit sinkt', 'negativ', 'se<0'],
   options: { problemId: 'm1_arbeit_se_ee', stepId: 'se_freizeit', isDecision: true },
   hint: 'Freizeit wird relativ teurer.',
   explain: 'SE auf Freizeit ist negativ; auf Arbeitszeit positiv.' },
 { q: '[2. Decision] Was passiert mit dem Einkommenseffekt auf Freizeit, wenn Freizeit normal ist?',
   answer: ['freizeit steigt', 'positiv', 'ee>0'],
   options: { problemId: 'm1_arbeit_se_ee', stepId: 'ee_freizeit', isDecision: true },
   hint: 'Höherer Lohn macht den Haushalt reicher.',
   explain: 'Bei normaler Freizeit erhöht der EE die Freizeitnachfrage.' },
 { q: '[3. Validation] Wann ist ein rückwärts gebogenes Arbeitsangebot plausibel?',
   answer: ['wenn ee dominiert', 'ee > se', 'bei hohem lohn'],
   options: { problemId: 'm1_arbeit_se_ee', role: 'VALIDATION', ambiguityAllowed: true },
   hint: 'Beide Effekte wirken in entgegengesetzte Richtungen.',
   explain: 'Bei hohen Löhnen kann der positive EE auf Freizeit den negativen SE übersteigen.' }
 ]
 }
 ],
 kosten: [
 {
 title: 'Kostenkurven und Shutdown-Trap',
 context: 'Kostenfunktion C(y)=y²+10y+16 in kurzfristiger Perspektive.',
 steps: [
 { q: '[1. Execution] Bestimmen Sie die Grenzkosten MC(y).',
   answer: ['2y+10'],
   options: { problemId: 'm1_kosten_shutdown', stepId: 'mc_calc', role: 'CON_SE' },
   hint: 'MC = dC/dy.',
   explain: 'Ableitung von y²+10y+16 ergibt MC(y)=2y+10.' },
 { q: '[2. Execution] Bestimmen Sie die durchschnittlichen variablen Kosten AVC(y).',
   answer: ['y+10'],
   options: { problemId: 'm1_kosten_shutdown', stepId: 'avc_calc', dependsOn: 'mc_calc', role: 'CON_SE' },
   hint: 'Fixkosten sind 16.',
   explain: 'VC(y)=y²+10y, daher AVC(y)=VC/y=y+10.' },
 { q: '[3. Validation] Ein Marktpreis p=8 liegt unter min AVC. Produzieren?',
   answer: ['nein', 'shutdown', 'stilllegen'],
   options: { problemId: 'm1_kosten_shutdown', role: 'VALIDATION' },
   hint: 'Kurzfristige Produktionsbedingung prüfen.',
   explain: 'min AVC = 10. Bei p=8 ist kurzfristiger Shutdown optimal.' }
 ]
 }
 ],
 monopol: [
 {
 title: 'Monopol: MR=MC und Elastizitätsfalle',
 context: 'Inverse Nachfrage p(y)=100-y, Grenzkosten MC=20.',
 steps: [
 { q: '[1. Execution] Geben Sie die Grenzerlösfunktion MR(y) an.',
   answer: ['100-2y'],
   options: { problemId: 'm1_monopol_mr_mc', stepId: 'mr_calc', role: 'CON_SE' },
   hint: 'Bei linearer Nachfrage ist MR doppelt so steil.',
   explain: 'Aus R(y)=p(y)*y=(100-y)y folgt MR=100-2y.' },
 { q: '[2. Execution] Bestimmen Sie die Monopolmenge y* aus MR=MC.',
   answer: ['40'],
   options: { problemId: 'm1_monopol_mr_mc', stepId: 'y_star', dependsOn: 'mr_calc', role: 'CON_SE' },
   hint: '100-2y=20 lösen.',
   explain: '100-2y=20 ergibt y*=40.' },
 { q: '[3. Validation] Liegt das Monopoloptimum im unelastischen Nachfragebereich?',
   answer: ['nein'],
   options: { problemId: 'm1_monopol_mr_mc', role: 'VALIDATION' },
   hint: 'Bei unelastischer Nachfrage wäre MR negativ.',
   explain: 'Ein gewinnmaximierendes Monopol produziert im elastischen Bereich der Nachfrage.' }
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
