// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// FINAL BENCHMARK STANDARD: PRECISION UNDER UNCERTAINTY
// Interpretation -> Decision -> Execution -> Validation
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
 budget: [
 {
 title: 'Budgetgerade & Preisänderung',
 context: 'm = 120, p₁ = 4, p₂ = 3.',
 steps: [
 { q: 'Interpretation: Wie viele Einheiten von Gut 2 müssen Sie aufgeben, um eine zusätzliche Einheit von Gut 1 zu erhalten? (Opportunitätskosten)',
 answer: ['1.33', '1,33', '4/3'],
 hint: 'Das Preisverhältnis p₁/p₂ bestimmt die Steigung.',
 explain: 'p₁/p₂ = 4/3. Sie müssen 1,33 Einheiten von x₂ opfern.',
 traps: [] },
 { q: 'Decision: Wenn p₁ auf 6 steigt, in welche Richtung dreht sich die Gerade um den x₂-Ankerpunkt?',
 answer: ['innen', 'nach innen', 'inward', 'im uhrzeigersinn', 'steiler'],
 hint: 'Höherer Preis p₁ bedeutet geringere maximale Kaufkraft für x₁.',
 explain: 'Da p₁ steigt, sinkt der x₁-Achsenabschnitt (m/p₁). Die Gerade dreht sich nach innen.',
 traps: [{pattern:'parallel', msg:'Falsch. Parallelverschiebung nur bei m-Änderung.'}] },
 { q: 'Execution: Berechnen Sie den neuen x₁-Achsenabschnitt.',
 answer: ['20', 'm/p1=20'],
 hint: '120 / 6 = ?',
 explain: '120 / 6 = 20.',
 traps: [] },
 { q: 'Validation: Ist der neue x₁-Abschnitt kleiner als der ursprüngliche (30)? (ja/nein)',
 answer: ['ja', 'yes'],
 hint: 'Vergleiche 20 mit 30.',
 explain: 'Ja, 20 < 30. Dies ist konsistent mit einer Drehung nach innen.',
 traps: [] }
 ]
 }
 ],
 lagrange: [
 {
 title: 'Das Eckoptimum-Problem',
 context: 'u = (x₁ + 2)x₂, p₁ = 10, p₂ = 1, m = 10.',
 steps: [
 { q: 'Interpretation: Bestimme die GRS = MU₁/MU₂.',
 answer: ['x2/(x1+2)', 'x₂/(x₁+2)'],
 hint: 'Ableitung nach x₁ geteilt durch Ableitung nach x₂.',
 explain: 'MU₁ = x₂, MU₂ = x₁ + 2.',
 traps: [] },
 { q: 'Decision: Liefert die mathematische Tangentialbedingung (GRS = p₁/p₂) eine ökonomisch zulässige Lösung (x₁ ≥ 0)?',
 answer: ['nein', 'no', 'x1 < 0', 'unzulässig'],
 hint: 'Rechne kurz: x₂/(x₁+2) = 10 ⟹ x₂ = 10x₁ + 20. In Budget: 10x₁ + 10x₁ + 20 = 10.',
 explain: '20x₁ = -10 ⟹ x₁ = -0,5. Da Mengen nicht negativ sein können, ist diese Lösung unzulässig.',
 traps: [] },
 { q: 'Execution: Bestimme das tatsächliche Optimum unter Berücksichtigung der Randbedingung.',
 answer: ['x1=0 x2=10', '0, 10', 'randlösung x1=0', 'corner'],
 hint: 'Prüfe den Rand x₁=0.',
 explain: 'Da x₁ nicht negativ sein kann, setzen wir x₁=0. Aus Budget folgt x₂=10.',
 traps: [{pattern:'-0.5', msg:'CONTRADICTION DETECTED: Physisch unmögliche Menge. Score gedeckelt. Korrigieren Sie auf x₁ ≥ 0.'}] },
 { q: 'Validation: Berechnen Sie u(0,10) und u(1,0). Ist u(0,10) tatsächlich das Maximum?',
 answer: ['ja', '20 > 0', 'yes'],
 hint: 'u = (0+2)*10 = 20 vs u = (1+2)*0 = 0.',
 explain: '20 > 0. Die Randlösung ist das globale Optimum.',
 traps: [] }
 ]
 }
 ],
 slutsky: [
   {
     title: 'Slutsky-Zerlegung (Diagnostic)',
     context: 'u = x₁x₂, p₁ sinkt von 4 auf 1, p₂=1, m=40.',
     steps: [
       { q: 'Interpretation: Welches Vorzeichen hat der Substitutionseffekt (SE) für das billiger werdende Gut 1?',
         answer: ['positiv', '↑', '+', 'positive', 'se > 0'],
         hint: 'SE wirkt immer entgegengesetzt zur Preisänderung.',
         explain: 'p₁ ↓ ⟹ x₁ (SE) ↑. SE ist immer positiv für das Gut mit Preissenkung.',
         traps: [{pattern:'negativ', msg:'Falsch. Der SE für das billiger werdende Gut ist IMMER positiv.'}] },
       { q: 'Decision: Wie viel Einkommen m\' muss dem Haushalt entzogen werden, damit er das alte Bündel (5, 20) gerade noch kaufen kann?',
         answer: ['15', 'delta m = 15', 'm sinkt um 15'],
         hint: 'Berechne m_neu = p₁_neu*x₁ + p₂*x₂. Dann m_alt - m_neu.',
         explain: 'Altes Bündel (5,20) kostet zu neuen Preisen: 1*5 + 1*20 = 25. Altes m=40. Kompensation = 40 - 25 = 15.',
         traps: [] },
       { q: 'Execution: Berechnen Sie den SE (Differenz x₁_slutsky - x₁_alt).',
         answer: ['7.5', '7,5'],
         hint: 'x₁_slutsky = m\'/(2p₁_neu) = 25 / (2*1) = 12,5. Altes x₁=5.',
         explain: '12,5 - 5 = 7,5.',
         traps: [] },
       { q: 'Validation: Ist SE (7,5) konsistent mit dem erwarteten Vorzeichen aus Schritt 1?',
         answer: ['ja', 'yes', 'konsistent'],
         hint: '7,5 > 0.',
         explain: 'Ja, 7,5 ist positiv. Konsistent.',
         traps: [] }
     ]
   }
 ],
 psubst: [
   {
     title: 'Perfekte Substitute: Modellwahl',
     context: 'u = 2x₁ + x₂, p₁=3, p₂=1, m=30.',
     steps: [
       { q: 'Decision: Vergleiche die GRS mit dem Preisverhältnis. Wird der Haushalt eine innere Lösung oder eine Randlösung wählen?',
         answer: ['randlösung', 'corner', 'nur gut 2', 'x1=0'],
         hint: 'GRS = 2. p₁/p₂ = 3.',
         explain: 'Da GRS < p₁/p₂, ist Gut 1 zu teuer relativ zu seiner Wertschätzung. Randlösung bei Gut 2.',
         traps: [] },
       { q: 'Execution: Berechnen Sie das Optimum x* = (x₁, x₂).',
         answer: ['0, 30', 'x1=0 x2=30', '(0,30)'],
         hint: 'Setze das gesamte m für Gut 2 ein.',
         explain: '30 / 1 = 30.',
         traps: [{pattern:'10', msg:'Das wäre CD-Logik. Hier sind es Substitute!'}] },
       { q: 'Validation: Würde eine Preissenkung von p₁ auf 1,5 das Modell "Randlösung" ändern?',
         answer: ['ja', 'wechsel zu x1', 'switch'],
         hint: 'Neues p₁/p₂ = 1,5. Vergleiche mit GRS=2.',
         explain: 'Nun ist GRS > p₁/p₂, der Haushalt wechselt komplett zu Gut 1.',
         traps: [] }
     ]
   }
 ],
 anfang: [
 {
  title: 'Endogenes Einkommen (Interpretation)',
  context: 'ω = (4, 2), p₁=1, p₂=1. Konsum x₁* = 6.',
  steps: [
  { q: 'Interpretation: Ist der Haushalt Netto-Anbieter oder Netto-Nachfrager von Gut 1?',
    answer: ['nachfrager', 'netto-nachfrager', 'x1 > omega'],
    hint: 'Vergleiche Besitz (4) mit Konsum (6).',
    explain: 'Er konsumiert mehr als er besitzt ⟹ Nachfrager.',
    traps: [] },
  { q: 'Decision: Wenn p₁ auf 2 steigt, wirkt der Einkommenseffekt (EE) verstärkend oder entgegenwirkend zum Substitutionseffekt (SE)? (x₁ normal)',
    answer: ['verstärkend', 'gleiche richtung', 'beide negativ', 'reinforcing'],
    hint: 'p₁↑ ⟹ SE ↓. Da er Nachfrager ist, macht ihn p₁↑ ärmer ⟹ EE ↓.',
    explain: 'Beide Effekte sind negativ. Sie verstärken sich.',
    traps: [] },
  { q: 'Execution: Berechnen Sie das neue nominale Einkommen m\'.',
    answer: ['10', 'm=10'],
    hint: 'm = p₁_neu*ω₁ + p₂*ω₂.',
    explain: '2*4 + 1*2 = 10.',
    traps: [] },
  { q: 'Validation: Hat der Haushalt trotz höherem nominalem m (10 vs 6) an Kaufkraft verloren? (ja/nein)',
    answer: ['ja', 'yes'],
    hint: 'Das alte Bündel (6, ?) würde jetzt 6*2 + ... kosten.',
    explain: 'Ja, das alte Bündel ist nicht mehr bezahlbar.',
    traps: [] }
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
