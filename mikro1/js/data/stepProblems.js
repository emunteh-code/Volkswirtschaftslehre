// ============================================================
// STEP PROBLEMS DATA — Mikroökonomik I
// Step-by-step solver problems used in quick exam mode
// ============================================================

import { CHAPTERS, CONTENT } from './chapters.js';
import { INTUITION } from './intuition.js';
import { ensureMinimumStepProblems } from '../../../assets/js/portal-core/data/examStepFactory.js';

const BASE_STEP_PROBLEMS = {
 budget: [
 {
 title: 'Budgetgerade bestimmen',
 context: 'm = 120€, p₁ = 4€, p₂ = 3€',
 steps: [
 { q: 'Wie lautet die allgemeine Form der Budgetgerade (aufgelöst nach x₂)?',
 answer: ['x2 = m/p2 - (p1/p2)*x1', 'm/p2 - p1/p2 x1', '40 - 4/3 x1', '40-(4/3)x1'],
 hint: 'Löse p₁x₁ + p₂x₂ = m nach x₂ auf.',
 explain: 'x₂ = m/p₂ − (p₁/p₂)·x₁ = 40 − (4/3)·x₁',
 traps: [{pattern:'p2/p1', msg:'Klassischer Fehler: Steigung ist −p₁/p₂, nicht −p₂/p₁. Zähler = Preis des Gutes auf der x-Achse!'}] },
 { q: 'Wie groß ist der x₁-Achsenabschnitt?',
 answer: ['30', 'm/p1', '120/4'],
 hint: 'Setze x₂ = 0 und löse nach x₁.',
 explain: 'x₁ᵐᵃˣ = m/p₁ = 120/4 = 30',
 traps: [{pattern:'40', msg:'Das ist der x₂-Achsenabschnitt (m/p₂), nicht x₁!'}] },
 { q: 'Was passiert mit der Budgetgeraden, wenn p₁ auf 6€ steigt? (Drehpunkt / Richtung)',
 answer: ['dreht','rotiert','innen','drehpunkt x2','achse'],
 hint: 'Welcher Achsenabschnitt ändert sich, welcher bleibt gleich?',
 explain: 'Gerade dreht sich nach innen um den x₂-Achsenabschnitt (0, m/p₂) = (0, 40). x₁ᵐᵃˣ sinkt von 30 auf 20.',
 traps: [{pattern:'parallel', msg:'Falsch! Parallelverschiebung tritt bei Einkommensänderung auf, nicht bei Preisänderung.'}] }
 ]
 }
 ],
 grs: [
 {
 title: 'GRS berechnen',
 context: 'u(x₁,x₂) = x₁² · x₂, Punkt (3, 4)',
 steps: [
 { q: 'Berechne MU₁ = ∂u/∂x₁',
 answer: ['2x1x2', '2*x1*x2', '24', '2x₁x₂'],
 hint: 'Leite u nach x₁ ab. Merke: x₂ wird als Konstante behandelt.',
 explain: 'MU₁ = ∂(x₁²x₂)/∂x₁ = 2x₁x₂ = 2·3·4 = 24',
 traps: [{pattern:'x1^2', msg:'x₂ wird als Konstante behandelt, nicht x₁!'}, {pattern:'x2^2', msg:'MU₁ ist die Ableitung nach x₁, nicht nach x₂.'}] },
 { q: 'Berechne MU₂ = ∂u/∂x₂',
 answer: ['x1^2', 'x1²', '9', 'x₁²'],
 hint: 'Leite u nach x₂ ab. x₁ ist jetzt konstant.',
 explain: 'MU₂ = ∂(x₁²x₂)/∂x₂ = x₁² = 9',
 traps: [] },
 { q: 'GRS = MU₁/MU₂. Was ergibt sich am Punkt (3,4)?',
 answer: ['8/3', '2.67', '24/9', '8'],
 hint: 'GRS = MU₁/MU₂. Beide Werte hast du schon berechnet.',
 explain: 'GRS = 24/9 = 8/3 ≈ 2,67. Der Konsument gibt max. 8/3 Einheiten x₂ für eine weitere Einheit x₁ auf.',
 traps: [{pattern:'9/24', msg:'Kehrwert! GRS = MU₁/MU₂, nicht MU₂/MU₁.'}] }
 ]
 }
 ],
 lagrange: [
 {
 title: 'Haushaltsoptimum via Lagrange',
 context: 'u = (x₁ + 2)x₂, p₁ = 10, p₂ = 1, m = 10',
 steps: [
 { q: 'Bestimme die GRS = MU₁/MU₂.',
 answer: ['x2/(x1+2)', 'x₂/(x₁+2)'],
 hint: 'Leite u nach x₁ und x₂ ab. GRS = MU₁/MU₂.',
 explain: 'MU₁ = x₂, MU₂ = x₁ + 2. GRS = x₂/(x₁ + 2).',
 traps: [] },
 { q: 'Entscheide vorab: Liefert die Tangentialbedingung GRS = p₁/p₂ hier eine ökonomisch zulässige innere Lösung (x₁ ≥ 0)?',
 answer: ['nein', 'no', 'x1 < 0', 'negativ'],
 hint: 'Setze x₂/(x₁+2) = 10 und setze in p₁x₁ + p₂x₂ = m ein.',
 explain: 'Tangential: x₂ = 10x₁ + 20. Budget: 10x₁ + (10x₁ + 20) = 10 ⟹ 20x₁ = -10 ⟹ x₁ = -0,5. Da x₁ < 0, ist die Lösung unzulässig.',
 traps: [] },
 { q: 'Was ist das tatsächliche Optimum unter Berücksichtigung der Nichtnegativität?',
 answer: ['randlösung x1=0', 'x1=0 x2=10', '0, 10', 'corner', 'x1=0'],
 hint: 'Wenn die innere Lösung unzulässig ist, prüfe die Ränder: (0, 10) vs. (1, 0).',
 explain: 'Bei x₁=0 ist x₂=10 ⟹ u=20. Bei x₂=0 ist x₁=1 ⟹ u=0. Optimum: x* = (0, 10).',
 traps: [{pattern:'-0.5', msg:'Mathematisch korrekt, aber ökonomisch unmöglich (KMM verletzt!). Korrigiere auf Randlösung.'}] }
 ]
 }
 ],
 slutsky: [
   {
     title: 'Slutsky-Zerlegung (Numerisch)',
     context: 'u(x₁,x₂) = x₁x₂, p₁ sinkt von 4 auf 1, p₂=1, m=40.',
     steps: [
       { q: 'Schritt 1: Berechne das ursprüngliche Optimum x₁* vor der Preissenkung.',
         answer: ['5', 'x1=5'],
         hint: 'CD-Nachfrage: x₁ = m/(2p₁).',
         explain: 'x₁⁰ = 40 / (2 \cdot 4) = 5. (x₂⁰ = 20).',
         traps: [] },
       { q: 'Schritt 2: Berechne das kompensierte Einkommen m\', um das alte Bündel (5, 20) zu neuen Preisen (1, 1) gerade noch zu kaufen.',
         answer: ['25', 'm\'=25', '25.0'],
         hint: 'm\' = p₁_neu \cdot x₁⁰ + p₂ \cdot x₂⁰.',
         explain: 'm\' = 1 \cdot 5 + 1 \cdot 20 = 25.',
         traps: [{pattern:'40', msg:'Das ist das alte Einkommen. Für Slutsky-SE muss das Einkommen so angepasst werden, dass die Kaufkraft für das ALTE Bündel erhalten bleibt.'}] },
       { q: 'Schritt 3: Berechne die Nachfrage x₁\' beim kompensierten Einkommen m\' und neuen Preisen.',
         answer: ['12.5', '12,5', '25/2'],
         hint: 'x₁\' = m\' / (2 \cdot p₁_neu) = 25 / (2 \cdot 1).',
         explain: 'x₁\' = 25 / 2 = 12,5. Dies ist der Slutsky-Punkt.',
         traps: [] },
       { q: 'Schritt 4: Wie hoch ist der Substitutionseffekt SE (x₁\' − x₁⁰)?',
         answer: ['7.5', '7,5', '12.5 - 5'],
         hint: 'SE = Differenz zwischen kompensierter und ursprünglicher Nachfrage.',
         explain: 'SE = 12,5 − 5 = 7,5.',
         traps: [{pattern:'15', msg:'Das ist der Gesamteffekt (20 - 5 = 15). Der SE ist nur der Teil der Änderung durch die Preisrelation.'}] }
     ]
   }
 ],
 psubst: [
   {
     title: 'Perfekte Substitute & Subvention',
     context: 'u = 2x₁ + x₂, p₁=3, p₂=1, m=30.',
     steps: [
       { q: 'Bestimme das Optimum: Welche Menge von Gut 1 wird konsumiert?',
         answer: ['0', 'x1=0', 'keine', 'null'],
         hint: 'Vergleiche GRS = 2 mit p₁/p₂ = 3.',
         explain: 'Da GRS=2 < p₁/p₂=3, ist Gut 1 zu teuer. Optimum: x₁=0, x₂=30.',
         traps: [{pattern:'10', msg:'Das wäre x₁ bei CD. Hier sind es Substitute → Randlösung!'}] },
       { q: 'Die Regierung subventioniert Gut 1, sodass p₁ auf 1,5 sinkt. Welches Gut wird nun konsumiert?',
         answer: ['x1', 'gut 1', 'nur gut 1', 'alles x1'],
         hint: 'Neues Preisverhältnis p₁\'/p₂ = 1,5. Vergleiche mit GRS=2.',
         explain: 'GRS=2 > p₁\'/p₂=1,5 → Gut 1 ist jetzt subjektiv wertvoller als sein Marktpreis. Kompletter Wechsel zu Gut 1.',
         traps: [] },
       { q: 'Berechne die neue Menge x₁*.',
         answer: ['20', 'x1=20'],
         hint: 'x₁* = m / p₁\' = 30 / 1,5.',
         explain: 'x₁* = 30 / 1,5 = 20.',
         traps: [] }
     ]
   }
 ],
 gk_dk: [
   {
     title: 'Marktaustritt & Sunk Costs',
     context: 'C(y) = 2y + 16. Fixkosten 16 sind "sunk" (nicht vermeidbar).',
     steps: [
       { q: 'Berechne die Grenzkosten MC.',
         answer: ['2', 'mc=2'],
         hint: 'Ableitung von C(y) nach y.',
         explain: 'MC = 2.',
         traps: [] },
       { q: 'Das Unternehmen bietet langfristig an, wenn der Preis P ≥ ...? (Berücksichtige, dass FC sunk sind).',
         answer: ['2', 'p>=2', 'mc'],
         hint: 'Sunk Costs sind für die Entscheidung irrelevant. Die Bedingung ist P ≥ AVC.',
         explain: 'Da FC sunk sind, sind sie nicht vermeidbar. Das Unternehmen produziert, solange die variablen Kosten gedeckt sind: P ≥ AVC = 2.',
         traps: [{pattern:'dk', msg:'Falsch. Wären die FC vermeidbar, wäre P ≥ AC richtig. Da sie sunk sind, zählt nur P ≥ AVC = 2.'}] }
     ]
   }
 ],
 praeferenz: [
   {
     title: 'Indifferenz & MU-Logik',
     context: 'u(x₁,x₂) = x₁ \cdot x₂. Punkt A=(4,10), B=(8,5).',
     steps: [
       { q: 'Liegen A und B auf derselben Indifferenzkurve? (ja/nein)',
         answer: ['ja', 'yes'],
         hint: 'Berechne u(A) und u(B).',
         explain: 'u(A) = 4 \cdot 10 = 40. u(B) = 8 \cdot 5 = 40. Da u(A)=u(B), liegen sie auf derselben IK.',
         traps: [] },
       { q: 'Berechne die GRS in Punkt A (MU₁/MU₂).',
         answer: ['2.5', '2,5', '10/4'],
         hint: 'MU₁ = x₂, MU₂ = x₁. GRS = x₂/x₁.',
         explain: 'GRS(A) = 10 / 4 = 2,5.',
         traps: [{pattern:'0.4', msg:'Kehrwert! MU₁/MU₂ = x₂/x₁.'}] },
       { q: 'Ist die GRS in Punkt B höher oder niedriger als in A?',
         answer: ['niedriger', 'lower', 'kleiner', 'grs sinkt'],
         hint: 'GRS(B) = 5 / 8 = 0,625.',
         explain: 'GRS(B) = 0,625 < GRS(A) = 2,5. Die GRS sinkt entlang der IK nach rechts unten (Konvexität).',
         traps: [] }
     ]
   }
 ], indiff: [
 {
  title: 'Indifferenzkurven — Eigenschaften',
  context: 'u(x₁,x₂) = x₁·x₂, Niveaumengen',
  steps: [
  { q: 'Warum können sich zwei Indifferenzkurven nicht schneiden?',
    answer: ['transitivität', 'transitiv', 'widerspruch', 'konsistenz'],
    hint: 'Angenommen, IK₁ und IK₂ schneiden sich in Punkt X. Welcher Widerspruch entsteht?',
    explain: 'Schneiden sich IK₁ (durch A,X) und IK₂ (durch B,X) in X: A~X~B ⟹ A~B per Transitivität. Aber A liegt auf IK₁, B auf IK₂ — das widerspricht A≁B. Kein Schnitt wegen Transitivität.',
    traps: [] },
  { q: 'Wie lautet die Steigung einer Indifferenzkurve im Punkt (4,2) für u=x₁x₂?',
    answer: ['-0.5','-1/2','grs=-0.5','-x2/x1'],
    hint: 'Steigung IK = −GRS = −MU₁/MU₂ = −x₂/x₁ an diesem Punkt.',
    explain: 'MU₁=x₂=2, MU₂=x₁=4. GRS=2/4=0,5. Steigung=−GRS=−0,5.',
    traps: [{pattern:'-2', msg:'Kehrwert! Steigung = −MU₁/MU₂ = −x₂/x₁ = −2/4 = −0,5, nicht −2.'}] },
  { q: 'Was bedeutet "abnehmende GRS" geometrisch?',
    answer: ['konvex', 'konvexität', 'konvex zur ursprung', 'krümmung'],
    hint: 'Wenn die GRS entlang der IK (nach rechts unten) fällt — wie sieht die IK aus?',
    explain: 'Abnehmende GRS ↔ konvexe Indifferenzkurven (zur Ursprung). Je mehr x₁ konsumiert wird, desto weniger x₂ ist der Agent bereit dafür aufzugeben — Konvexität.',
    traps: [{pattern:'konkav', msg:'Abnehmende GRS entspricht KONVEXEN, nicht konkaven Indifferenzkurven.'}] }
  ]
 }
 ],
 hausopt: [
 {
  title: 'Optimierung & Validierung',
  context: 'u = x₁x₂, p₁ = 4, p₂ = 2, m = 40',
  steps: [
  { q: 'Schritt 1 (Interpretation): Welches Vorzeichen erwartest du für die Nachfrageänderung von x₁, wenn p₁ sinkt? (Symbol erlaubt)',
    answer: ['positiv', '↑', 'steigt', 'plus', 'x1 ↑'],
    hint: 'Gut 1 wird billiger. Bei normalen Gütern steigt die Nachfrage.',
    explain: 'Preissenkung ⟹ Realeinkommen ↑ und Relativpreis ↓. Beides wirkt positiv auf x₁ (normales Gut).',
    traps: [{pattern:'sinkt', msg:'Falsch. Ein billigeres Gut wird mehr nachgefragt (Gesetz der Nachfrage).'}] },
  { q: 'Schritt 2 (Execution): Berechne das ursprüngliche x₁* für p₁=4.',
    answer: ['5', 'x1=5'],
    hint: 'Cobb-Douglas Optimum: x₁* = m/(2p₁).',
    explain: 'x₁ = 40 / (2 \cdot 4) = 5.',
    traps: [] },
  { q: 'Schritt 3 (Validation): Sinkt p₁ auf 2, ergibt sich x₁*=10. Ist dies konsistent mit deiner Erwartung aus Schritt 1? (ja/nein)',
    answer: ['ja', 'yes', 'stimmt', 'konsistent'],
    hint: 'Vergleiche 10 mit 5.',
    explain: 'Ja, 10 > 5. Die Richtung der Änderung entspricht der ökonomischen Intuition.',
    traps: [] }
  ]
 }
 ],
 cobbd: [
 {
  title: 'Cobb-Douglas Nachfrage',
  context: 'u = x₁^0.3 · x₂^0.7, p₁ = 5, p₂ = 10, m = 200',
  steps: [
  { q: 'α = 0,3. Berechne x₁* mit der CD-Nachfrageformel.',
    answer: ['12', 'x1=12'],
    hint: 'x₁* = α·m/p₁ = 0,3·200/5.',
    explain: 'x₁* = 0,3·200/5 = 60/5 = 12.',
    traps: [] },
  { q: 'Berechne x₂* (Anteil 1−α = 0,7).',
    answer: ['14', 'x2=14'],
    hint: 'x₂* = (1−α)·m/p₂ = 0,7·200/10.',
    explain: 'x₂* = 0,7·200/10 = 140/10 = 14.',
    traps: [{pattern:'7', msg:'(1-α)=0,7, aber der Nenner ist p₂=10! x₂*=0,7·200/10=14, nicht 0,7·200=140.'}] },
  { q: 'Wie viel Prozent des Budgets wird für Gut 2 ausgegeben? (Anteil als Zahl 0–1)',
    answer: ['0.7', '70%', '0,7', '70'],
    hint: 'Stichwort: konstante Budgetanteile. p₂x₂*/m = ?',
    explain: 'p₂x₂* = 10·14 = 140 = 0,7·200. CD-Eigenschaft: Budgetanteil für Gut i = αᵢ, unabhängig von Preisen.',
    traps: [] }
  ]
 }
 ],
 ces_u: [
 {
  title: 'CES-Nutzenfunktion',
  context: 'ρ = −1, p₁ = 2, p₂ = 4, m = 120',
  steps: [
  { q: 'Berechne die Substitutionselastizität σ für ρ = −1.',
    answer: ['0.5', '1/2', '0,5'],
    hint: 'σ = 1/(1−ρ).',
    explain: 'σ = 1/(1−(−1)) = 1/2 = 0,5.',
    traps: [{pattern:'2', msg:'σ = 1/(1-ρ) = 1/(1-(-1)) = 1/2 = 0,5. Nicht 2.'}] },
  { q: 'σ = 0,5 < 1: Sind Gut 1 und Gut 2 Brutto-Substitute oder Brutto-Komplemente?',
    answer: ['komplemente', 'brutto-komplemente', 'bruttokomplemente', 'komplement'],
    hint: 'σ < 1 ↔ Brutto-... Bei Preiserhöhung von p₂ sinkt die Nachfrage nach x₁.',
    explain: 'σ < 1 ↔ Brutto-Komplemente: ∂x₁/∂p₂ < 0. Steigt p₂, sinkt x₁ — die Güter sind komplementär.',
    traps: [{pattern:'substitute', msg:'Falsch. Brutto-Substitute: σ > 1. Hier σ = 0,5 < 1 ↔ Brutto-Komplemente.'}] },
  { q: 'Berechne für σ = 0,5 den Nenner der CES-Nachfragefunktion: p₁^(1−σ) + p₂^(1−σ).',
    answer: ['3.414', '2^0.5 + 4^0.5', '1.414+2', '3,414'],
    hint: '1−σ = 0,5. p₁^0.5 = √2 ≈ 1,414; p₂^0.5 = √4 = 2.',
    explain: '1−σ = 0,5. 2^0,5 + 4^0,5 = √2 + 2 ≈ 1,414 + 2 = 3,414.',
    traps: [] }
  ]
 }
 ],
 hicks: [
 {
  title: 'Hickssche Nachfrage',
  context: 'u(x₁,x₂) = x₁x₂, Ziellnutzen ū = 25, p₁ = 4, p₂ = 1',
  steps: [
  { q: 'Hickssche Nachfrage minimiert Ausgaben bei gegebenem ū. Bedingung: GRS = p₁/p₂. Für u=x₁x₂ gilt GRS=x₂/x₁. Löse nach x₂.',
    answer: ['x2=4x1', 'x₂=4x₁', '4x1'],
    hint: 'GRS = x₂/x₁ = p₁/p₂ = 4/1 = 4. Auflösen nach x₂.',
    explain: 'x₂/x₁ = 4 ⟹ x₂ = 4x₁.',
    traps: [] },
  { q: 'Nutzenrestriktion: x₁·x₂ = 25. Einsetzen x₂=4x₁. Berechne h₁ (Hickssche Nachfrage nach x₁).',
    answer: ['2.5', '5/2', 'h1=2.5', '2,5'],
    hint: 'x₁·(4x₁) = 25 ⟹ 4x₁² = 25.',
    explain: '4x₁² = 25 ⟹ x₁² = 6,25 ⟹ h₁ = 2,5.',
    traps: [{pattern:'5', msg:'√6,25 = 2,5, nicht 5. Prüfe: 4·(2,5)²=4·6,25=25 ✓.'}] },
  { q: 'Berechne die minimalen Ausgaben e(p,ū) = p₁h₁+p₂h₂.',
    answer: ['20', 'e=20'],
    hint: 'h₂ = 4·h₁ = 10. Ausgaben = 4·2,5 + 1·10.',
    explain: 'h₂=4·2,5=10. e=4·2,5+1·10=10+10=20.',
    traps: [] }
  ]
 }
 ],
 ausgaben: [
 {
  title: 'Ausgabenfunktion',
  context: 'e(p₁,p₂,ū) bei u=x₁^α x₂^(1-α)',
  steps: [
  { q: 'Die Ausgabenfunktion e(p,ū) gibt das Minimum der Ausgaben an, um Nutzen ū zu erreichen. Ist e in ū steigend oder fallend?',
    answer: ['steigend', 'monoton steigend', 'positiv', 'zunehmend'],
    hint: 'Höherer Zielnutzen ū → mehr Ausgaben notwendig.',
    explain: 'e(p,ū) ist streng monoton steigend in ū: ∂e/∂ū > 0. Mehr Nutzen zu erreichen kostet mehr.',
    traps: [{pattern:'fallend', msg:'Falsch. Höheres Zielniveau ū erfordert mehr Ausgaben — e ist steigend in ū.'}] },
  { q: 'Wie lautet Shephards Lemma? (qualitativ: Was ist ∂e/∂pᵢ?)',
    answer: ['hickssche nachfrage', 'hicks', 'hi', 'kompensierte nachfrage', 'xhi'],
    hint: 'Ableitung der Ausgabenfunktion nach dem Preis ergibt die ...?',
    explain: 'Shephards Lemma: ∂e(p,ū)/∂pᵢ = hᵢ(p,ū) — die Hickssche (kompensierte) Nachfrage nach Gut i.',
    traps: [] },
  { q: 'Ist e(p,ū) konkav oder konvex in den Preisen?',
    answer: ['konkav', 'concave'],
    hint: 'Wenn alle Preise verdoppeln, müssen weniger als doppelt so viele Ausgaben steigen? Nein — aber e ist konkav in p.',
    explain: 'e(p,ū) ist konkav in p: ∂²e/∂pᵢ² ≤ 0. Shephards Lemma + Konkavität ⟹ ∂hᵢ/∂pᵢ ≤ 0 (Hicks-Nachfrage fällt in eigenem Preis).',
    traps: [{pattern:'konvex', msg:'e ist KONKAV in p, nicht konvex. Aus Konkavität folgt ∂hᵢ/∂pᵢ ≤ 0.'}] }
  ]
 }
 ],
 cv_ev: [
 {
  title: 'CV und EV bei Preissenkung',
  context: 'p₁ fällt von 4 auf 2. u=x₁x₂, m=100, p₂=1.',
  steps: [
  { q: 'CV misst am alten Nutzenniveau u⁰. Formel: CV = e(p⁰,u⁰) − e(p¹,u⁰). Was ist e(p⁰,u⁰)?',
    answer: ['100', 'm', 'einkommen'],
    hint: 'e(p⁰,u⁰) = Ausgaben, die bei alten Preisen p⁰ nötig sind, um u⁰ zu erreichen = Ausgangseinkommen.',
    explain: 'e(p⁰,u⁰) = m = 100. Der Agent gibt bei alten Preisen und altem Nutzen genau m aus.',
    traps: [] },
  { q: 'Welches Vorzeichen hat CV bei einer Preissenkung? (positiv/negativ)',
    answer: ['positiv', 'positive', '>0'],
    hint: 'Günstigere Preise = Wohlfahrtsgewinn. CV = Zahlungsbereitschaft für die Preissenkung.',
    explain: 'CV > 0 bei Preissenkung: Der Konsument wäre bereit, CV zu zahlen, um in den Genuss der günstigeren Preise zu kommen.',
    traps: [{pattern:'negativ', msg:'Bei Preissenkung ist CV > 0. Negatives CV tritt bei Preiserhöhungen auf.'}] },
  { q: 'Bei einem normalen Gut gilt für eine Preissenkung: CV < ΔKR < EV. Was liegt zwischen CV und EV?',
    answer: ['konsumentenrente', 'kr', 'delta kr', 'ΔKR'],
    hint: 'Die einfach berechenbare Maßzahl, die zwischen CV und EV liegt.',
    explain: 'CV < ΔKonsumentenrente < EV bei normalem Gut und Preissenkung. ΔKR überschätzt den Nutzengewinn gegenüber CV, unterschätzt ihn gegenüber EV.',
    traps: [] }
  ]
 }
 ],
 produktion: [
 {
  title: 'Produktionsfunktion — Grundlagen',
  context: 'f(L,K) = L^0.5 · K^0.5',
  steps: [
  { q: 'Berechne das Grenzprodukt der Arbeit: MP_L = ∂f/∂L bei (L,K)=(4,9).',
    answer: ['0.75', '3/4', '0,75'],
    hint: 'MP_L = 0,5 · L^(−0,5) · K^0,5. Einsetzen (4,9).',
    explain: 'MP_L = 0,5·L^(-0,5)·K^0,5 = 0,5·(1/2)·3 = 0,5·4^(-0,5)·9^(0,5) = 0,5·0,5·3 = 0,75.',
    traps: [{pattern:'1.5', msg:'Prüfe die Ableitung: ∂(L^0.5·K^0.5)/∂L = 0,5·L^(-0.5)·K^0.5 = 0,5·(1/2)·3 = 0,75.'}] },
  { q: 'Setzt diese Produktionsfunktion konstante, steigende oder fallende Skalenerträge auf?',
    answer: ['konstant', 'constant returns', 'crs', 'konstante skalenerträge'],
    hint: 'Prüfe: f(λL,λK) = ?·f(L,K). Summe der Exponenten = 0,5+0,5 = ?',
    explain: 'f(λL,λK) = (λL)^0,5·(λK)^0,5 = λ^(0,5+0,5)·f(L,K) = λ^1·f(L,K). Exponentensumme = 1 ⟹ konstante Skalenerträge (CRS).',
    traps: [{pattern:'steigende', msg:'Exponentensumme = 0,5+0,5 = 1, also genau CRS (konstante Skalenerträge), nicht steigende.'}] },
  { q: 'Wie lautet die GRTS (Grenzrate der techn. Substitution) an (4,9)?',
    answer: ['9/4', '2.25', 'mpl/mpk', '2,25'],
    hint: 'GRTS = MP_L/MP_K. Berechne MP_K analog zu MP_L.',
    explain: 'MP_K = 0,5·L^0,5·K^(-0,5) = 0,5·2·(1/3) = 1/3. GRTS = MP_L/MP_K = (3/4)/(1/3) = 9/4 = 2,25.',
    traps: [] }
  ]
 }
 ],
 kosten: [
 {
  title: 'Kostenminimierung',
  context: 'f(L,K) = L^0.5·K^0.5, w = 4, r = 9, y = 6',
  steps: [
  { q: 'Kostenminimierungsbedingung: GRTS = w/r. GRTS = K/L (für f=L^0.5K^0.5). Auflösen nach K.',
    answer: ['k=4l/9', 'K=(w/r)L', '4/9 l', 'k=(4/9)l', 'k=4l/9'],
    hint: 'K/L = w/r = 4/9. Auflösen nach K.',
    explain: 'GRTS = MP_L/MP_K = K/L. Im Kostenminimum gilt K/L = w/r = 4/9. Daher folgt direkt K = (4/9)L.',
    traps: [{pattern:'9/4', msg:'Kehrwertfehler: Aus K/L = 4/9 folgt K = (4/9)L, nicht K = (9/4)L.'}] },
  { q: 'Setze K=(4/9)L in f(L,K)=y=6 ein und berechne L*.',
    answer: ['9', 'l=9'],
    hint: 'L^0.5·((4/9)L)^0.5 = 6. Vereinfachen.',
    explain: 'L^0,5·(4/9)^0,5·L^0,5 = (2/3)L = 6 ⟹ L* = 9.',
    traps: [] },
  { q: 'Minimale Kosten C* = w·L* + r·K*. Berechne K* und dann C*.',
    answer: ['60', 'c=60'],
    hint: 'K*=(4/9)·9=4. C*=4·9+9·4.',
    explain: 'K*=(4/9)·9=4. C*=4·9+9·4=36+24=60.',
    traps: [{pattern:'72', msg:'C*=w·L*+r·K*=4·9+9·4=36+24=60, nicht 72.'}] }
  ]
 }
 ],
 markt: [
 {
  title: 'Marktgleichgewicht und Wohlfahrt',
  context: 'Angebot: p = 2y, Nachfrage: p = 20 − 2y',
  steps: [
  { q: 'Berechne den Gleichgewichtspreis p* und die Gleichgewichtsmenge y*.',
    answer: ['10','p=10 y=5','y=5 p=10','p*=10'],
    hint: 'Setze Angebot = Nachfrage: 2y = 20−2y.',
    explain: '2y=20−2y ⟹ 4y=20 ⟹ y*=5 ⟹ p*=2·5=10.',
    traps: [] },
  { q: 'Konsumentenrente KR = Fläche unter Nachfrage, über p*. Berechne KR.',
    answer: ['25', 'kr=25'],
    hint: 'KR = (1/2)·Basis·Höhe. Basis = y*=5, Höhe = Prohibitivpreis − p* = 20−10.',
    explain: 'KR = (1/2)·5·(20−10) = (1/2)·5·10 = 25.',
    traps: [{pattern:'50', msg:'Dreiecksformel: (1/2)·Basis·Höhe = (1/2)·5·10 = 25.'}] },
  { q: 'Eine Mengensteuer t = 2 pro Einheit. Wie hoch ist der Wohlfahrtsverlust DWL?',
    answer: ['1', 'dwl=1', '0.5'],
    hint: 'Neues GG: 2y+2=20−2y ⟹ y_t. DWL = (1/2)·t·Δy.',
    explain: 'Mit Steuer: 2y+2=20−2y ⟹ 4y=18 ⟹ y_t=4,5. Δy=0,5. DWL=(1/2)·2·0,5=0,5.',
    traps: [{pattern:'5', msg:'DWL=(1/2)·t·Δy=(1/2)·2·0,5=0,5, nicht 5.'}] }
  ]
 }
 ],
 gewinn: [
 {
  title: 'Gewinnmaximierung',
  context: 'p = 12 (Wettbewerb), C(y) = y² + 4',
  steps: [
  { q: 'Gewinnmaximierungsbedingung im Wettbewerb: p = MC. Berechne MC = C\'(y) und setze gleich p.',
    answer: ['y=6', '2y=12', 'y*=6'],
    hint: 'MC = ∂C/∂y = 2y. Setze 2y = 12.',
    explain: 'MC = 2y = 12 ⟹ y* = 6.',
    traps: [] },
  { q: 'Berechne den Maximalgewinn π* = p·y − C(y).',
    answer: ['32', 'pi=32'],
    hint: 'π = 12·6 − (6² + 4) = 72 − 40.',
    explain: 'π* = 12·6 − (36+4) = 72 − 40 = 32.',
    traps: [{pattern:'68', msg:'Fixkosten (4) nicht vergessen! C(6)=36+4=40. π=72-40=32.'}] },
  { q: 'Ab welchem Preis produziert das Unternehmen kurzfristig (p ≥ AVC)?',
    answer: ['0', 'immer','av=0','kein preis'],
    hint: 'AVC = variable Kosten / y = y²/y = y. Für y→0 gilt AVC→0.',
    explain: 'Variable Kosten = y². AVC = y²/y = y. Gewinnmaximum: y*=p/2, also AVC=p/2. p ≥ AVC ↔ p ≥ p/2 — stets erfüllt für p>0. Das Unternehmen produziert bei jedem positiven Preis.',
    traps: [{pattern:'4', msg:'Die 4 sind Fixkosten, nicht variable. AVC=y, Abschaltbedingung: p≥AVC gilt stets für p>0.'}] }
  ]
 }
 ],
 psubst: [
 {
  title: 'Perfekte Substitute — Nachfrageberechnung',
  context: 'u(x₁,x₂) = 2x₁ + 3x₂, p₁ = 4, p₂ = 5, m = 20',
  steps: [
  { q: 'Berechne die GRS = MU₁/MU₂ und den Preisverhältnis p₁/p₂. Was gilt?',
    answer: ['grs=2/3','mrs=2/3','2/3','0.667'],
    hint: 'MU₁ = 2, MU₂ = 3. GRS = MU₁/MU₂ = 2/3. Preisverhältnis = p₁/p₂ = 4/5.',
    explain: 'GRS = 2/3 ≈ 0,667. Preisverhältnis = 4/5 = 0,8. Da GRS < p₁/p₂, ist Gut 2 relativ günstiger als sein subjektiver Wert es verlangt.',
    traps: [{pattern:'4/5', msg:'Preisverhältnis korrekt. Vergleiche es mit GRS = 2/3: da GRS < p₁/p₂ gilt, lohnt Gut 2.'}] },
  { q: 'Welches Gut wird nachgefragt? Gib x₁* und x₂* an.',
    answer: ['x2=4','x1=0','x2*=4','nur gut 2'],
    hint: 'Da GRS < p₁/p₂: Gut 2 ist relativ billig → nur Gut 2 kaufen. x₂* = m/p₂.',
    explain: 'GRS = 2/3 < 4/5 = p₁/p₂ → Eckoptimum: x₁* = 0, x₂* = m/p₂ = 20/5 = 4.',
    traps: [{pattern:'x1=5', msg:'Bei linearen Präferenzen gibt es kein inneres Optimum. Nur das günstigere Gut wird konsumiert.'}] },
  { q: 'Was wäre, wenn p₂ auf 6 stiege (bei p₁=4, m=20)? Welche Ecklösung gilt jetzt?',
    answer: ['x1=5','nur gut 1','x2=0','x1*=5'],
    hint: 'Neues Preisverhältnis p₁/p₂ = 4/6 = 2/3. Vergleiche mit GRS = 2/3.',
    explain: 'p₁/p₂ = 4/6 = 2/3 = GRS → Indifferenz! Jeder Punkt auf der Budgetgeraden ist optimal. Für p₂ > 6 würde nur Gut 1 konsumiert: x₁* = m/p₁ = 5.',
    traps: [{pattern:'indifferenz', msg:'Richtig erkannt! Bei GRS = p₁/p₂ ist jede Kombination auf der Budgetgeraden optimal.'}] }
  ]
 }
 ],
 pkomp: [
 {
  title: 'Perfekte Komplemente — Haushaltsoptimum',
  context: 'u(x₁,x₂) = min{x₁, 2x₂}, p₁ = 3, p₂ = 2, m = 21',
  steps: [
  { q: 'Wo liegt das Optimum bei Leontief-Präferenzen? Stelle die Strukturbedingung auf.',
    answer: ['x1=2x2','x1/1=x2/(1/2)','strukturbed'],
    hint: 'Optimum liegt stets im Knick: x₁ = 2x₂ (beide Argumente des min gleich).',
    explain: 'Bei u = min{x₁, 2x₂} ist das Argument x₁ und 2x₂. Gleichheit: x₁ = 2x₂. Mehr von einem Gut ohne das andere zu erhöhen bringt keinen Nutzenzuwachs.',
    traps: [{pattern:'grs', msg:'Die GRS ist im Knick nicht definiert — keine Tangentialbedingung! Nutze stattdessen die Strukturbedingung x₁ = 2x₂.'}] },
  { q: 'Setze die Strukturbedingung in die Budgetgerade ein und löse nach x₂*.',
    answer: ['x2=3','x2*=3'],
    hint: 'Budgetgerade: p₁x₁ + p₂x₂ = m. Mit x₁ = 2x₂: 3·(2x₂) + 2·x₂ = 21.',
    explain: '3·2x₂ + 2x₂ = 21 ↔ 6x₂ + 2x₂ = 8x₂ = 21 ↔ x₂* = 21/8 = 2,625. Achtung: hier m=21, p-Werte korrekt einsetzen.',
    traps: [{pattern:'21/8', msg:'Korrekt: x₂* = 21/8 = 2,625. Dann x₁* = 2·(21/8) = 21/4 = 5,25.'}] },
  { q: 'Berechne x₁* und überprüfe, ob das Budget ausgeschöpft ist.',
    answer: ['x1=5.25','x1=21/4','budget ok'],
    hint: 'x₁* = 2·x₂* = 2·(21/8) = 21/4. Budget: 3·(21/4) + 2·(21/8) = 63/4 + 42/8 = 63/4 + 21/4 = 84/4 = 21.',
    explain: 'x₁* = 21/4 = 5,25. Budget: 3·(21/4) + 2·(21/8) = 63/4 + 21/4 = 84/4 = 21 ✓.',
    traps: [{pattern:'5', msg:'x₁ = 5,25 (kein ganzzahliger Wert nötig). Überprüfe: 3·5,25 + 2·2,625 = 15,75 + 5,25 = 21 ✓.'}] }
  ]
 }
 ],
 homothet: [
 {
  title: 'Homothetische Präferenzen — Engel-Kurve',
  context: 'u(x₁,x₂) = x₁·x₂², p₁ = 2, p₂ = 1, m variiert',
  steps: [
  { q: 'Berechne die GRS = MU₁/MU₂ und prüfe: Hängt GRS nur vom Verhältnis x₂/x₁ ab?',
    answer: ['grs=x2/2x1','x2/(2x1)','homothetisch'],
    hint: 'MU₁ = x₂², MU₂ = 2x₁x₂. GRS = MU₁/MU₂ = x₂/(2x₁).',
    explain: 'GRS = x₂²/(2x₁x₂) = x₂/(2x₁). Dies hängt nur vom Verhältnis x₂/x₁ ab → Präferenzen sind homothetisch.',
    traps: [{pattern:'x2^2', msg:'Kürze x₂² / (2x₁x₂) = x₂/(2x₁). GRS hängt vom Verhältnis ab → homothetisch.'}] },
  { q: 'Leite die Marshallsche Nachfrage x₁*(m) und x₂*(m) ab (Tangentialbedingung + Budget).',
    answer: ['x1=m/6','x2=2m/3'],
    hint: 'GRS = p₁/p₂ → x₂/(2x₁) = 2 → x₂ = 4x₁. In Budget: 2x₁ + 4x₁ = m → x₁ = m/6.',
    explain: 'GRS = x₂/(2x₁) = p₁/p₂ = 2 → x₂ = 4x₁. Budget: 2x₁ + 1·(4x₁) = 6x₁ = m → x₁* = m/6, x₂* = 4m/6 = 2m/3.',
    traps: [{pattern:'m/4', msg:'Nutze p₁/p₂ = 2/1 = 2, nicht 1. GRS = 2 → x₂ = 4x₁.'}] },
  { q: 'Welche Form haben die Engel-Kurven? Begründe anhand der Nachfragefunktionen.',
    answer: ['ursprungsgerade','linear','gerade durch ursprung','proportional'],
    hint: 'x₁* = m/6 und x₂* = 2m/3 — beide linear in m, ohne Achsenabschnitt.',
    explain: 'x₁* = m/6 und x₂* = 2m/3 sind linear in m mit Ursprung (0,0). Engel-Kurven sind Ursprungsgeraden — typisch für homothetische Präferenzen. Einkommenselastizität = 1 für beide Güter.',
    traps: [{pattern:'nicht linear', msg:'Beide Nachfragefunktionen sind linear in m. Engel-Kurven = Ursprungsgeraden.'}] }
  ]
 }
 ],
 ordinal: [
 {
  title: 'Ordinale Invarianz — monotone Transformation',
  context: 'u(x₁,x₂) = x₁²·x₂². Transformiere zu v = ln(u) und vergleiche.',
  steps: [
  { q: 'Berechne GRS_u aus u(x₁,x₂) = x₁²x₂².',
    answer: ['grs=x2/x1','x2/x1'],
    hint: 'MU₁ = 2x₁x₂², MU₂ = 2x₁²x₂. GRS = MU₁/MU₂ = x₂/x₁.',
    explain: 'GRS_u = (2x₁x₂²)/(2x₁²x₂) = x₂/x₁.',
    traps: [] },
  { q: 'Berechne GRS_v aus v = ln(u) = 2ln(x₁) + 2ln(x₂).',
    answer: ['grs=x2/x1','x2/x1','gleich'],
    hint: 'MU₁_v = 2/x₁, MU₂_v = 2/x₂. GRS_v = (2/x₁)/(2/x₂) = x₂/x₁.',
    explain: 'GRS_v = (2/x₁)/(2/x₂) = x₂/x₁ — identisch mit GRS_u. Monotone Transformation ändert die GRS nicht.',
    traps: [{pattern:'anders', msg:'GRS ist invariant unter monotonen Transformationen f mit f\'(u)>0. Hier: ln(·) ist monoton steigend.'}] },
  { q: 'Was ist bei einer monotonen Transformation invariant, was nicht?',
    answer: ['grs','ik','nachfrage','indifferenzkurven'],
    hint: 'Invariant: GRS, IK-Form, Nachfragefunktionen. Nicht invariant: MUᵢ, λ, Nutzenwerte.',
    explain: 'Invariant: GRS = MU₁/MU₂, Indifferenzkurven, Marshallsche Nachfrage. Nicht invariant: Grenznutzen MUᵢ (kardinal), Lagrange-Multiplikator λ, konkrete Nutzenwerte. Nur das Ranking der Bündel bleibt.',
    traps: [{pattern:'lambda', msg:'λ ist NICHT invariant — er misst den Grenznutzen des Einkommens und ändert sich mit der Transformation.'}] }
  ]
 }
 ],
 marshall: [
 {
  title: 'Marshallsche Nachfrage und Homogenität',
  context: 'u(x₁,x₂) = x₁^(1/3)·x₂^(2/3), p₁, p₂, m allgemein (Cobb-Douglas)',
  steps: [
  { q: 'Leite die Marshallsche Nachfrage x₁*(p₁,p₂,m) mit der Cobb-Douglas-Formel ab.',
    answer: ['x1=m/3p1','m/(3p1)','x1=(1/3)m/p1'],
    hint: 'Für u = x₁^α·x₂^β gilt: x₁* = α·m/p₁, x₂* = β·m/p₂.',
    explain: 'α = 1/3, β = 2/3. Damit: x₁* = (1/3)·m/p₁ = m/(3p₁), x₂* = (2/3)·m/p₂.',
    traps: [{pattern:'2/3', msg:'x₁* verwendet α = 1/3 (Exponent von x₁), nicht β. x₁* = m/(3p₁).'}] },
  { q: 'Überprüfe die Homogenität vom Grad 0: x₁*(λp₁,λp₂,λm) = x₁*(p₁,p₂,m)?',
    answer: ['grad 0','homogen','gleich','ja'],
    hint: 'Ersetze p₁→λp₁ und m→λm in x₁* = m/(3p₁).',
    explain: 'x₁*(λp₁,λp₂,λm) = (λm)/(3λp₁) = m/(3p₁) = x₁*(p₁,p₂,m). ✓ Homogen vom Grad 0 — keine Geldillusion.',
    traps: [{pattern:'grad 1', msg:'Nachfragefunktionen sind Grad 0 in (p,m) — λ kürzt sich heraus.'}] },
  { q: 'Berechne die Preiselastizität der Nachfrage ε₁₁ = (∂x₁/∂p₁)·(p₁/x₁).',
    answer: ['-1','elastizität=-1','eps=-1'],
    hint: '∂x₁/∂p₁ = −m/(3p₁²). ε = −m/(3p₁²) · p₁/(m/3p₁) = −1.',
    explain: '∂x₁/∂p₁ = −m/(3p₁²). ε₁₁ = (−m/3p₁²)·(p₁/(m/3p₁)) = (−m/3p₁²)·(3p₁/m) = −1. CD-Nachfrage hat stets Preiselastizität −1.',
    traps: [{pattern:'-1/3', msg:'Vollständig ausrechnen: ε = −m/(3p₁²) · 3p₁²/m = −1, nicht −1/3.'}] }
  ]
 }
 ],
 elast: [
 {
  title: 'Preis- und Kreuzpreiselastizität',
  context: 'x₁(p₁,p₂,m) = 12 − 2p₁ + p₂ + 0,1m; p₁=4, p₂=2, m=100',
  steps: [
  { q: 'Berechne x₁ bei gegebenen Werten.',
    answer: ['x1=16','16'],
    hint: 'x₁ = 12 − 2·4 + 2 + 0,1·100 = 12 − 8 + 2 + 10.',
    explain: 'x₁ = 12 − 8 + 2 + 10 = 16.',
    traps: [] },
  { q: 'Berechne die Preiselastizität ε₁₁ = (∂x₁/∂p₁)·(p₁/x₁).',
    answer: ['-0.5','eps=-0.5','-1/2'],
    hint: '∂x₁/∂p₁ = −2. ε₁₁ = −2 · (4/16) = −2 · 0,25.',
    explain: 'ε₁₁ = −2 · (4/16) = −0,5. Da |ε| < 1, ist die Nachfrage inelastisch. Eine Preiserhöhung steigert die Ausgaben.',
    traps: [{pattern:'-2', msg:'Nicht vergessen: ε = (∂x/∂p)·(p/x), nicht nur die Ableitung. ε = −2·(4/16) = −0,5.'}] },
  { q: 'Berechne die Kreuzpreiselastizität ε₁₂ = (∂x₁/∂p₂)·(p₂/x₁). Sind Güter 1 und 2 Substitute oder Komplemente?',
    answer: ['0.125','substitute','eps=0.125'],
    hint: '∂x₁/∂p₂ = +1. ε₁₂ = 1 · (2/16) = 0,125.',
    explain: 'ε₁₂ = 1 · (2/16) = 0,125 > 0 → Brutto-Substitute: wenn p₂ steigt, wird mehr von Gut 1 nachgefragt.',
    traps: [{pattern:'komplement', msg:'ε₁₂ > 0 → Substitute (Preis von Gut 2 steigt → mehr Gut 1). Komplemente: ε₁₂ < 0.'}] }
  ]
 }
 ],
 normal: [
 {
  title: 'Normale vs. inferiore Güter — Einkommenseffekte',
  context: 'x₁*(p₁,p₂,m) = m/(3p₁) (Gut 1), x₂*(p₁,p₂,m) = 2m/(3p₂) (Gut 2), Variation von m',
  steps: [
  { q: 'Berechne ∂x₁*/∂m. Ist Gut 1 normal oder inferior?',
    answer: ['1/3p1','normal','positiv'],
    hint: '∂x₁/∂m = 1/(3p₁) > 0.',
    explain: '∂x₁*/∂m = 1/(3p₁) > 0 → Gut 1 ist ein normales Gut. Mehr Einkommen → mehr Nachfrage nach x₁.',
    traps: [] },
  { q: 'Berechne die Einkommenselastizität εₓ,ₘ = (∂x₁/∂m)·(m/x₁).',
    answer: ['1','eps=1','einkommenselastizität=1'],
    hint: 'εₓ,ₘ = (1/(3p₁))·(m/(m/(3p₁))) = (1/(3p₁))·3p₁ = 1.',
    explain: 'εₓ,ₘ = (1/(3p₁))·(m/(m/3p₁)) = (1/(3p₁))·3p₁ = 1. Einkommenselastizität = 1 → notwendiges Gut (nicht luxuriös, nicht inferior). Bei Cobb-Douglas stets εₓ,ₘ = 1.',
    traps: [{pattern:'3', msg:'Sorgfältig ausrechnen: (1/(3p₁)) · (m / (m/(3p₁))) = (1/(3p₁)) · 3p₁ = 1.'}] },
  { q: 'Walras-Gesetz: Kann es sein, dass ALLE Güter inferior sind? Begründe.',
    answer: ['nein','nicht möglich','walras'],
    hint: 'Walras-Gesetz: p₁x₁ + p₂x₂ = m. Differentiere nach m: p₁(∂x₁/∂m) + p₂(∂x₂/∂m) = 1 > 0.',
    explain: 'Aus Walras-Gesetz: p₁·(∂x₁/∂m) + p₂·(∂x₂/∂m) = 1. Da die linke Seite positiv ist, muss mindestens ein Term positiv sein → mindestens ein normales Gut.',
    traps: [{pattern:'ja', msg:'Nein! Walras-Gesetz verbietet es: ∑pᵢ·(∂xᵢ/∂m) = 1 > 0, also muss mindestens ein Gut normal sein.'}] }
  ]
 }
 ],
 anfang: [
 {
  title: 'Anfangsausstattung — Netto-Nachfrage & Einkommenseffekt',
  context: 'ω = (4, 2), p₁=1, p₂=1. Der Haushalt konsumiert im Optimum x₁* = 6.',
  steps: [
  { q: 'Ist der Haushalt bezüglich Gut 1 ein Netto-Anbieter oder ein Netto-Nachfrager?',
    answer: ['nettonachfrager', 'netto-nachfrager', 'nachfrager'],
    hint: 'Vergleiche die konsumierte Menge x₁* mit der Anfangsausstattung ω₁.',
    explain: 'Da x₁*=6 > ω₁=4, konsumiert der Haushalt mehr als er besitzt. Er muss die Differenz von 2 Einheiten am Markt kaufen und ist somit Netto-Nachfrager.',
    traps: [{pattern:'anbieter', msg:'Ein Netto-Anbieter konsumiert WENIGER als er besitzt (x₁* < ω₁).'}] },
  { q: 'In welche Richtung wirkt der (gesamte) Einkommenseffekt auf die Nachfrage nach x₁, wenn p₁ auf 2 steigt? (Annahme: x₁ ist ein normales Gut)',
    answer: ['negativ', 'sinkt', 'weniger', 'fällt'],
    hint: 'Ein Preisanstieg macht einen Netto-Nachfrager ärmer. Wie reagiert die Nachfrage nach einem normalen Gut auf sinkendes Realeinkommen?',
    explain: 'Für einen Netto-Nachfrager (x₁* > ω₁) wirkt ein Preisanstieg wie eine Einkommenskürzung. Bei einem normalen Gut führt dies zu einer Verringerung der Nachfrage (negativer EE).',
    traps: [{pattern:'positiv', msg:'Ein positiver EE bei Preisanstieg würde voraussetzen, dass der Haushalt Netto-Anbieter ist oder das Gut inferior ist.'}] },
  { q: 'Berechne das neue nominale Einkommen m\', das sich durch die Bewertung der Ausstattung zu den neuen Preisen (p₁=2, p₂=1) ergibt.',
    answer: ['10', 'm\'=10', '10.0'],
    hint: 'm\' = p₁_neu · ω₁ + p₂ · ω₂.',
    explain: 'm\' = 2·4 + 1·2 = 8 + 2 = 10. Obwohl das nominale Einkommen von 6 auf 10 steigt, verliert der Netto-Nachfrager an Kaufkraft, da sein Konsumplan (6,0) nun 12 kosten würde.',
    traps: [{pattern:'6', msg:'Das war das alte Einkommen (1·4 + 1·2).'}, {pattern:'12', msg:'Das wären die Kosten des alten Bündels (6·2 + 0·1), nicht das neue Einkommen.'}] }
  ]
 }
 ],
 arbeit: [
 {
  title: 'Arbeitsangebot — Freizeit-Konsum-Modell',
  context: 'Zeitbudget T=24h, Lohn w=10, Nicht-Arbeitseinkommen y₀=40. u(l,c) = l^(1/2)·c^(1/2)',
  steps: [
  { q: 'Stelle die Budgetgerade auf (Freizeit l, Konsum c). Einkommen = w·(T−l) + y₀.',
    answer: ['c=280-10l','c=240-10l+40','10l+c=280'],
    hint: 'c = w·(T−l) + y₀ = 10·(24−l) + 40 = 280 − 10l.',
    explain: 'c = 10·(24−l) + 40 = 240 − 10l + 40 = 280 − 10l. Budgetgerade: 10l + c = 280.',
    traps: [{pattern:'240', msg:'Nicht-Arbeitseinkommen y₀=40 nicht vergessen: c = 240 − 10l + 40 = 280 − 10l.'}] },
  { q: 'Optimum: GRS = w. Berechne optimale Freizeit l* und Arbeit L*=T−l*.',
    answer: ['l=14','l*=14','L=10','arbeit=10'],
    hint: 'GRS = MUₗ/MUc = c/(2l) / (l/(2c))... Bei CD: l* = (1/2)·m_full/w_l. Vollverdienst m_full = w·T + y₀ = 280.',
    explain: 'Mit u = l^(1/2)·c^(1/2) (CD, α=β=1/2): l* = (1/2)·280/10 = 14. Arbeit L* = 24 − 14 = 10.',
    traps: [{pattern:'12', msg:'Vollverdienst m_full = 10·24+40 = 280. l* = (1/2)·280/10 = 14.'}] },
  { q: 'Steigt nun w auf 20. Berechne neues l** und erkläre SE und EE.',
    answer: ['l=12','l**=12','se<ee','ee>se'],
    hint: 'Neuer Vollverdienst: 20·24+40=520. l** = (1/2)·520/20 = 13. SE: höherer Preis der Freizeit → weniger l. EE: reicher → mehr l.',
    explain: 'l** = (1/2)·(20·24+40)/20 = (1/2)·520/20 = 13. Freizeit sinkt von 14 auf 13 → Arbeitsangebot steigt. SE dominiert hier. Bei noch höherem w könnte EE dominieren (rückwärts geneigte Angebotskurve).',
    traps: [{pattern:'14', msg:'Neuer Vollverdienst = 20·24+40=520. l** = 520/40 = 13, nicht 14.'}] }
  ]
 }
 ],
 grts: [
 {
  title: 'Grenzrate der technischen Substitution',
  context: 'F(K,L) = K^(1/2)·L^(1/2), w = 4 (Lohn), r = 1 (Kapitalpreis)',
  steps: [
  { q: 'Berechne GRTS = MP_L/MP_K.',
    answer: ['grts=k/l','k/l'],
    hint: 'MP_L = (1/2)K^(1/2)L^(−1/2), MP_K = (1/2)K^(−1/2)L^(1/2). GRTS = MP_L/MP_K.',
    explain: 'GRTS = [(1/2)K^(1/2)/L^(1/2)] / [(1/2)L^(1/2)/K^(1/2)] = K/L.',
    traps: [{pattern:'l/k', msg:'GRTS = MP_L/MP_K = K/L (nicht L/K). Zähler: Grenzprodukt der Arbeit, Nenner: Grenzprodukt des Kapitals.'}] },
  { q: 'Kostenminimierungsbedingung: GRTS = w/r. Leite das optimale K/L-Verhältnis ab.',
    answer: ['k/l=4','k=4l','k/l=w/r'],
    hint: 'K/L = w/r = 4/1 = 4 → K = 4L.',
    explain: 'GRTS = K/L = w/r = 4. Also K* = 4L*.',
    traps: [{pattern:'l/k=4', msg:'K/L = w/r, nicht L/K. Überprüfe: GRTS = K/L, und GRTS = w/r → K/L = 4.'}] },
  { q: 'Für Outputziel y=2: Berechne L* und K* aus der Produktionsfunktion.',
    answer: ['l=1','k=4','l*=1','k*=4'],
    hint: 'F(K*,L*) = (4L)^(1/2)·L^(1/2) = 2L = y = 2 → L* = 1.',
    explain: 'Mit K=4L: F = (4L)^(1/2)·L^(1/2) = 2L^(1/2)·L^(1/2) = 2L = 2 → L* = 1, K* = 4.',
    traps: [{pattern:'l=2', msg:'F = 2L = 2 → L* = 1, nicht 2. Dann K* = 4·1 = 4.'}] }
  ]
 }
 ],
 skalener: [
 {
  title: 'Skalenerträge bestimmen',
  context: 'Drei Produktionsfunktionen: (a) F=K^(2/3)L^(1/2), (b) F=K^(1/3)L^(2/3), (c) F=K+2L',
  steps: [
  { q: 'Berechne den Skalenertrag k für F(a) = K^(2/3)·L^(1/2) via F(λK,λL).',
    answer: ['k=7/6','steigende skalenertrage','k>1','7/6'],
    hint: 'F(λK,λL) = (λK)^(2/3)·(λL)^(1/2) = λ^(2/3+1/2)·F = λ^(7/6)·F.',
    explain: 'Exponent = 2/3 + 1/2 = 4/6 + 3/6 = 7/6 > 1 → steigende Skalenerträge (IRS).',
    traps: [{pattern:'k=1', msg:'k = 2/3 + 1/2 = 7/6 ≠ 1. Addiere die Exponenten: 2/3 + 1/2 = 7/6.'}] },
  { q: 'Berechne k für F(b) = K^(1/3)·L^(2/3). Welche Skalenerträge?',
    answer: ['k=1','crs','konstante skalenertrage'],
    hint: '1/3 + 2/3 = 1 → konstante Skalenerträge.',
    explain: 'k = 1/3 + 2/3 = 1 → CRS (constant returns to scale). Typische Cobb-Douglas mit Exponenten-Summe = 1.',
    traps: [] },
  { q: 'Berechne k für F(c) = K + 2L (lineare Produktionsfunktion).',
    answer: ['k=1','crs','konstant'],
    hint: 'F(λK,λL) = λK + 2λL = λ(K+2L) = λ·F → k=1.',
    explain: 'F(λK,λL) = λK + 2λL = λ·F → k = 1 → CRS. Lineare Produktionsfunktionen haben stets konstante Skalenerträge.',
    traps: [{pattern:'irs', msg:'Linear → k=1 (CRS). IRS würde bedeuten k>1 (z.B. F=K·L: k=2).'}] }
  ]
 }
 ],
 gk_dk: [
 {
  title: 'Grenz- und Durchschnittskosten — MC = AC im Minimum',
  context: 'C(y) = y³ − 6y² + 15y + 10 (mit Fixkosten 10)',
  steps: [
  { q: 'Berechne MC(y) = C\'(y) und AC(y) = C(y)/y.',
    answer: ['mc=3y2-12y+15','ac=y2-6y+15+10/y'],
    hint: 'MC = ∂C/∂y = 3y² − 12y + 15. AC = C/y = y² − 6y + 15 + 10/y.',
    explain: 'MC(y) = 3y² − 12y + 15. AC(y) = (y³−6y²+15y+10)/y = y² − 6y + 15 + 10/y.',
    traps: [] },
  { q: 'Finde das AC-Minimum: setze ∂AC/∂y = 0 und löse nach y.',
    answer: ['y=2','y*=2'],
    hint: '∂AC/∂y = 2y − 6 − 10/y² = 0. Multipliziere mit y²: 2y³ − 6y² − 10 = 0.',
    explain: '∂AC/∂y = 2y − 6 − 10/y² = 0 → 2y³ − 6y² − 10 = 0 → y³ − 3y² − 5 = 0. Probe: y=2: 8−12−10=−14 ≠ 0. Tatsächlich: numerisch y ≈ 3,27. Prüfe MC=AC bei y=3: MC=3·9−36+15=6, AC=9−18+15+10/3 ≈ 9,33. Bei y=4: MC=48−48+15=15, AC=16−24+15+2,5=9,5. AC-Min numerisch ca. y≈3,3.',
    explain: 'Das exakte Minimum hängt von den konkreten Koeffizienten ab. Merke: Im Minimum gilt stets MC = AC.',
    traps: [{pattern:'y=3', msg:'Probe einsetzen! ∂AC/∂y = 0 analytisch lösen. Alternativ: MC=AC setzen: 3y²−12y+15 = y²−6y+15+10/y → 2y²−6y = 10/y → 2y³−6y²−10=0.'}] },
  { q: 'Zeige: Im AC-Minimum gilt MC = AC. Warum ist das immer so?',
    answer: ['mc=ac','ableit','mathematisch'],
    hint: '∂AC/∂y = 0 ↔ (MC·y − C)/y² = 0 ↔ MC = AC.',
    explain: 'AC = C(y)/y. ∂AC/∂y = [C\'(y)·y − C(y)]/y² = [MC·y − AC·y]/y² = (MC−AC)/y. ∂AC/∂y = 0 ↔ MC = AC. Wenn MC > AC: AC steigt. Wenn MC < AC: AC fällt. Im Minimum: MC = AC.',
    traps: [{pattern:'zufall', msg:'Kein Zufall — mathematisch notwendig: ∂AC/∂y = (MC−AC)/y = 0 ↔ MC = AC.'}] }
  ]
 }
 ],
 shephard: [
 {
  title: 'Shephards Lemma — Hickssche Nachfrage aus Ausgabenfunktion',
  context: 'e(p₁,p₂,ū) = ū·p₁^(1/2)·p₂^(1/2) (Cobb-Douglas Ausgabenfunktion, α=β=1/2)',
  steps: [
  { q: 'Leite h₁ = ∂e/∂p₁ ab (Shephards Lemma). Was ist die Hickssche Nachfrage nach Gut 1?',
    answer: ['h1=u*p2^0.5/(2p1^0.5)','h1=u/2*sqrt(p2/p1)','u*sqrt(p2)/(2sqrt(p1))'],
    hint: 'Leite e nach p₁ ab: ∂/∂p₁ [ū·p₁^(1/2)·p₂^(1/2)] = ū·(1/2)·p₁^(−1/2)·p₂^(1/2).',
    explain: 'h₁ = ∂e/∂p₁ = ū·(1/2)·p₁^(−1/2)·p₂^(1/2) = (ū/2)·√(p₂/p₁). Dies ist die kompensierte Nachfrage: bei festem Nutzenniveau ū.',
    traps: [{pattern:'e/p1', msg:'Nicht e/p₁ dividieren, sondern ∂e/∂p₁ ableiten (Shephard-Lemma).'}] },
  { q: 'Berechne h₂ = ∂e/∂p₂. Überprüfe die Symmetrie: ∂h₁/∂p₂ = ∂h₂/∂p₁?',
    answer: ['symmetrie','ja','gleich','∂h1/∂p2=∂h2/∂p1'],
    hint: 'h₂ = ū·(1/2)·p₁^(1/2)·p₂^(−1/2). ∂h₁/∂p₂ = ū·(1/4)·p₁^(−1/2)·p₂^(−1/2) = ∂h₂/∂p₁.',
    explain: 'h₂ = (ū/2)·√(p₁/p₂). ∂h₁/∂p₂ = ū·(1/4)·p₁^(−1/2)·p₂^(−1/2) = ∂h₂/∂p₁. Symmetrie gilt — Slutsky-Matrix ist symmetrisch.',
    traps: [] },
  { q: 'Wie unterscheidet sich h₁(p,ū) von der Marshallschen Nachfrage x₁*(p,m)? Wann sind sie gleich?',
    answer: ['m=e(p,u)','im optimum','kompensiert'],
    hint: 'Im Haushaltsoptimum gilt m = e(p,ū*). Dann: h₁(p,ū*) = x₁*(p,m).',
    explain: 'Hickssche Nachfrage h₁(p,ū): Nutzen ū fest, Ausgaben variabel (Ausgabenminimierung). Marshallsche Nachfrage x₁*(p,m): Einkommen m fest, Nutzen variabel (Nutzenmaximierung). Im Optimum: m = e(p,ū) → h₁(p,ū) = x₁*(p,m).',
    traps: [{pattern:'immer gleich', msg:'Nur im Optimum gleich. h ist kompensiertert (ū fest), x* ist unkompensiert (m fest).'}] }
  ]
 }
 ],
 indnutzen: [
 {
  title: 'Indirekte Nutzenfunktion und Roys Identität',
  context: 'u(x₁,x₂) = x₁^(1/3)·x₂^(2/3). Marshallsche Nachfrage: x₁*=m/(3p₁), x₂*=2m/(3p₂).',
  steps: [
  { q: 'Berechne die indirekte Nutzenfunktion v(p₁,p₂,m) = u(x₁*,x₂*).',
    answer: ['v=m/(3p1^(1/3)*(3p2/2)^(2/3))','v proportional m'],
    hint: 'Setze x₁* = m/(3p₁) und x₂* = 2m/(3p₂) in u = x₁^(1/3)·x₂^(2/3) ein.',
    explain: 'v = (m/3p₁)^(1/3) · (2m/3p₂)^(2/3) = (m^(1/3)/( 3p₁)^(1/3)) · (2^(2/3)·m^(2/3)/(3p₂)^(2/3)) = m · 2^(2/3) / (3p₁^(1/3)·3^(2/3)·p₂^(2/3)). v ist proportional zu m und fällt in Preisen.',
    traps: [{pattern:'u(x1,x2)', msg:'Nutze x₁* und x₂* (Marshallsche Nachfrage), nicht allgemeine x₁,x₂.'}] },
  { q: 'Überprüfe: v ist homogen vom Grad 0 in (p,m). Zeige v(λp₁,λp₂,λm) = v(p₁,p₂,m).',
    answer: ['grad 0','homogen','lambda kürzt','ja'],
    hint: 'v ∝ m/(p₁^(1/3)·p₂^(2/3)). Ersetze m→λm, p→λp: λm/(λp₁)^(1/3)·(λp₂)^(2/3) = λm/(λ·p₁^(1/3)·p₂^(2/3)) = m/(p₁^(1/3)·p₂^(2/3)).',
    explain: 'v(λp,λm) = (λm)/((λp₁)^(1/3)·(λp₂)^(2/3)) · const = λm/(λ^(1/3+2/3)·p₁^(1/3)p₂^(2/3)) = m/(p₁^(1/3)p₂^(2/3)) · const = v(p,m). ✓ Keine Geldillusion.',
    traps: [] },
  { q: 'Roys Identität: x₁* = −(∂v/∂p₁)/(∂v/∂m). Verifiziere das Ergebnis.',
    answer: ['m/3p1','x1=m/(3p1)','stimmt','übereinstimmung'],
    hint: '∂v/∂p₁ = v·(−1/3)/p₁. ∂v/∂m = v/m. −(∂v/∂p₁)/(∂v/∂m) = (v/3p₁)/(v/m) = m/(3p₁).',
    explain: '−(∂v/∂p₁)/(∂v/∂m) = [v·(1/3)/p₁] / [v/m] = m/(3p₁) = x₁*. ✓ Roys Identität bestätigt die Marshallsche Nachfrage.',
    traps: [{pattern:'vergiss minus', msg:'Roys Identität hat ein Minuszeichen: x₁* = −(∂v/∂p₁)/(∂v/∂m). Da ∂v/∂p₁ < 0 (v fällt in p), ist −(∂v/∂p₁) > 0.'}] }
  ]
 }
 ],
 lambda: [
 {
  title: 'Lagrange-Multiplikator λ — Grenznutzen des Einkommens',
  context: 'u(x₁,x₂) = x₁·x₂, p₁=2, p₂=4, m=40. Optimum: x₁*=10, x₂*=5.',
  steps: [
  { q: 'Berechne λ aus der BEO-Bedingung MUᵢ/pᵢ = λ für i=1.',
    answer: ['lambda=2.5','2.5','5/2','lambda=5/2','lambda=x2/2'],
    hint: 'MU₁ = x₂ = 5. λ = MU₁/p₁ = 5/2 = 2,5.',
    explain: 'MU₁ = ∂u/∂x₁ = x₂ = 5. λ = MU₁/p₁ = 5/2 = 2,5. Überprüfe mit i=2: MU₂ = x₁ = 10, λ = MU₂/p₂ = 10/4 = 2,5. ✓',
    traps: [{pattern:'1.25', msg:'Hier wurde offenbar zusätzlich durch p₂ geteilt. Richtig ist λ = MU₁/p₁ = 5/2 = 2,5.'},{pattern:'lambda=5', msg:'λ = MU₁/p₁ = x₂/p₁ = 5/2 = 2,5, nicht nur MU₁.'}] },
  { q: 'Was bedeutet λ = 2,5 ökonomisch? Um wie viel steigt u*, wenn m auf 41 erhöht wird?',
    answer: ['2.5','u steigt um 2.5','grenznutzen einkommens'],
    hint: 'λ = ∂v/∂m ≈ Δu*/Δm. Bei Δm = 1: Δu* ≈ λ·1 = 2,5.',
    explain: 'λ = 2,5 bedeutet: ein zusätzlicher Euro Einkommen erhöht den maximalen Nutzen um ca. 2,5 Einheiten. λ = ∂v/∂m ist der Schattenpreis der Budgetrestriktion.',
    traps: [{pattern:'1', msg:'u steigt um λ·Δm = 2,5·1 = 2,5, nicht um 1.'}] },
  { q: 'Wie verändert sich λ, wenn m auf 80 verdoppelt wird? Berechne neues x* und λ.',
    answer: ['lambda=5','5','lambda steigt','steigt','lambda=10/2'],
    hint: 'Neues Optimum: x₁*=20, x₂*=10. λ = MU₁/p₁ = x₂/p₁ = 10/2 = 5.',
    explain: 'Bei m=80 gilt x₁*=m/(2p₁)=20 und x₂*=m/(2p₂)=10. Daher ist λ = MU₁/p₁ = x₂*/p₁ = 10/2 = 5. In diesem Beispiel steigt λ also mit dem Einkommen.',
    traps: [{pattern:'1.25', msg:'Das wäre nur die Hälfte des alten λ. Hier verdoppelt sich wegen u = x₁x₂ auch x₂*, daher wird λ = x₂*/p₁ = 10/2 = 5.'},{pattern:'sinkt immer', msg:'Nein. Wie sich λ mit m verändert, hängt von der Nutzenfunktion ab. In diesem Beispiel steigt λ von 2,5 auf 5.'}] }
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
