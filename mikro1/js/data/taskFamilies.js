// ============================================================
// TASK FAMILY TAXONOMY — Mikroökonomik I
// VL-anchor-grounded exam-pattern layer; no claim of Probeklausur parity.
// ============================================================

import { buildMikro1OfficialTaskPlaceholders, MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28 } from './officialTaskIngestion.js';

const MODULE = 'mikro1';
const OFFICIAL_TASK_GAP =
  '18 registrierte Probeklausur-Artefakte (überwiegend JPG) plus 1 PDF; konzeptuelles Mapping aus OCR/Review steht aus. Keine Übungsblätter/Lösungen im Korpus.';

function family({
  id,
  conceptId,
  title,
  topic,
  method,
  sourceStatus = 'direct-source',
  sourceAnchorIds,
  difficulty,
  expectedTimeMinutes,
  examRelevance,
  commonTraps,
  gradingRubric,
  currentCoverage,
  officialTaskCoverage = 'missing-official-task-source'
}) {
  return {
    id,
    module: MODULE,
    conceptId,
    title,
    topic,
    method,
    sourceStatus,
    sourceAnchorIds,
    difficulty,
    expectedTimeMinutes,
    examRelevance,
    commonTraps,
    gradingRubric,
    currentCoverage,
    officialTaskCoverage,
    officialTaskGap: OFFICIAL_TASK_GAP
  };
}

function familyFromPlaceholder(placeholder) {
  return {
    id: placeholder.id,
    module: MODULE,
    conceptId: placeholder.conceptId,
    title: `Mikro I official-task mapping placeholder (${placeholder.conceptId})`,
    topic: 'Official task ingestion',
    method:
      'Probeklausur-Artefakte sind registriert; Konzept-zu-Aufgabe-Mapping wird in einem separaten OCR/Review-Pass erstellt.',
    sourceStatus: placeholder.sourceStatus,
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: [
      'JPG-Probeklausur mit vollständigem Aufgaben-Mapping verwechseln',
      'VL-Klausurfamilie mit offizieller Klausuraufgabe gleichsetzen'
    ],
    gradingRubric: [
      'Placeholder bleibt explizit als non-deceptive gekennzeichnet',
      'Keine synthetischen Aufgabeninhalte ohne offizielle Zuordnung'
    ],
    currentCoverage: {
      ingestion: `exam=${MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.exam}, exercise=${MIKRO1_OFFICIAL_TASK_DOC_BASELINE_2026_05_28.exercise}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
  family({
    id: 'mikro1.taskfamily.budget-line',
    conceptId: 'budget',
    title: 'Budgetgerade aus Budgetmenge herleiten',
    topic: 'Budgetmenge & Budgetgerade',
    method: 'Budgetmenge definieren, Gleichung umstellen und Schnittpunkte mit Achsen bestimmen.',
    sourceAnchorIds: ['mikro1.budget.vl01.p16.budgetmenge', 'mikro1.budget.vl01.p18.budgetgerade'],
    difficulty: 'leicht',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: ['Einkommen mit Preis verwechseln', 'Achsenschnittpunkte vertauschen', 'Budgetmenge mit Konsummenge verwechseln'],
    gradingRubric: ['Budgetmenge korrekt', 'Budgetgerade korrekt aufgestellt', 'Schnittpunkte konsistent', 'ökonomische Lesart gegeben'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'not yet concept-specific', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.lagrange-constraint',
    conceptId: 'lagrange',
    title: 'Optimierung unter Nebenbedingung mit Lagrange',
    topic: 'Lagrange-Methode',
    method: 'Zielfunktion und Nebenbedingung notieren, Lagrange-Funktion bilden, FOCs lösen.',
    sourceAnchorIds: ['mikro1.lagrange.vl02.p17.nebenbedingung', 'mikro1.lagrange.vl02.p20.nebenbedingungen'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['λ nicht interpretieren', 'Nebenbedingung falsch einsetzen', 'Randlösung nicht prüfen'],
    gradingRubric: ['Lagrange korrekt aufgestellt', 'FOCs algebraisch sauber', 'Nebenbedingung erfüllt', 'λ-Interpretation kurz genannt'],
    currentCoverage: { portalTasks: 'concept tasks and step problems', stepProblems: 'lagrange-related drills', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.household-optimum',
    conceptId: 'hausopt',
    title: 'Haushaltsoptimum über Tangentialbedingung bestimmen',
    topic: 'Haushaltsoptimum',
    method: 'GRS mit Preisverhältnis gleichsetzen oder Lagrange mit Budgetnebenbedingung lösen.',
    sourceAnchorIds: ['mikro1.hausopt.vl03.p13.haushaltsoptimum', 'mikro1.hausopt.vl04.p02.graphisch'],
    difficulty: 'mittel',
    expectedTimeMinutes: 9,
    examRelevance: 'hoch',
    commonTraps: ['Tangentialbedingung ohne Budget prüfen', 'Indifferenzkurve mit Budgetgerade verwechseln', 'Ecke bei Komplementen übersehen'],
    gradingRubric: ['Tangential- oder Lagrange-Zugang korrekt', 'Budget erfüllt', 'Mengen konsistent', 'Graph oder Algebra stimmig'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.cobb-douglas-demand',
    conceptId: 'cobbd',
    title: 'Marshallsche Nachfrage bei Cobb-Douglas',
    topic: 'Cobb-Douglas-Nutzenfunktion',
    method: 'Haushaltsoptimum lösen und Nachfragefunktionen nach Preisen und Einkommen auflösen.',
    sourceAnchorIds: ['mikro1.cobbd.vl04.p09.marshall-cd', 'mikro1.cobbd.vl04.p04.haushaltsoptimum'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['Exponenten vertauschen', 'Ausgabenanteile falsch ablesen', 'Homogenität falsch angewendet'],
    gradingRubric: ['Nutzenfunktion korrekt eingesetzt', 'Nachfrage algebraisch korrekt', 'Budget erfüllt', 'Anteilsinterpretation korrekt'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'not yet concept-specific', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.slutsky-decomposition',
    conceptId: 'slutsky',
    title: 'Slutsky-Zerlegung einer Preisänderung',
    topic: 'Slutsky-Zerlegung',
    method: 'Gesamteffekt in Substitutions- und Einkommenseffekt zerlegen; Slutsky-Gleichung anwenden.',
    sourceAnchorIds: ['mikro1.slutsky.vl07.p02.einkommen-substitution', 'mikro1.slutsky.vl07.p04.slutsky-gleichung'],
    difficulty: 'mittel',
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ['Vorzeichen der Effekte vertauschen', 'kompensierte Variation verwechseln', 'Normales Gut nicht geprüft'],
    gradingRubric: ['Gesamt-, Substitutions- und Einkommenseffekt getrennt', 'Slutsky-Gleichung korrekt', 'Vorzeichen konsistent', 'ökonomische Interpretation gegeben'],
    currentCoverage: { portalTasks: 'concept tasks and graph', stepProblems: 'slutsky-related', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.production-isoquants',
    conceptId: 'produktion',
    title: 'Isoquanten und Grenzproduktivität einordnen',
    topic: 'Produktion',
    method: 'Produktionsfunktion analysieren, Isoquanten skizzieren oder TRS/GRF ableiten.',
    sourceAnchorIds: ['mikro1.produktion.vl11.p04.produktionstechnologie', 'mikro1.produktion.vl11.p07.isoquanten'],
    difficulty: 'mittel',
    expectedTimeMinutes: 9,
    examRelevance: 'hoch',
    commonTraps: ['Isoquant mit Indifferenzkurve verwechseln', 'Skalenelastizität mit TRS verwechseln', 'Grenzprodukt ohne Inputs interpretieren'],
    gradingRubric: ['Produktionsbegriff korrekt', 'Isoquantenlogik korrekt', 'TRS/GRF korrekt', 'Graph oder Rechnung konsistent'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.cost-minimization',
    conceptId: 'kosten',
    title: 'Kostenminimierung unter Outputvorgabe',
    topic: 'Kosten',
    method: 'Kostenminimierungsproblem mit Outputnebenbedingung lösen; Faktornachfrage ableiten.',
    sourceAnchorIds: ['mikro1.kosten.vl12.p03.kostenminimierung', 'mikro1.kosten.vl12.p11.shephard'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['Output statt Kosten minimieren', 'Shephard ohne Envelope begründen', 'Grenzproduktivität falsch eingesetzt'],
    gradingRubric: ['Problem korrekt aufgestellt', 'FOCs korrekt', 'Kostenfunktion konsistent', 'Faktornachfrage interpretiert'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'not yet concept-specific', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.market-equilibrium',
    conceptId: 'markt',
    title: 'Marktgleichgewicht aus Angebot und Nachfrage',
    topic: 'Markt',
    method: 'Marktnachfrage und -angebot schneiden; Gleichgewichtspreis und -menge bestimmen.',
    sourceAnchorIds: ['mikro1.markt.vl16.p09.marktangebot-nachfrage', 'mikro1.markt.vl16.p12.gleichgewicht'],
    difficulty: 'leicht',
    expectedTimeMinutes: 7,
    examRelevance: 'hoch',
    commonTraps: ['Einzel- mit Marktnachfrage verwechseln', 'Angebot und Nachfrage vertauschen', 'Stabilität nicht kommentieren'],
    gradingRubric: ['Funktionen korrekt aggregiert', 'Gleichgewicht algebraisch korrekt', 'Graph stimmig', 'Interpretation des Preises gegeben'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro1.taskfamily.monopoly-pricing',
    conceptId: 'monopol',
    title: 'Monopolpreis und Menge bestimmen',
    topic: 'Monopol',
    method: 'Grenzerlös und Grenzkosten gleichsetzen oder Gewinnfunktion maximieren.',
    sourceAnchorIds: ['mikro1.monopol.vl17.p03.monopol', 'mikro1.monopol.vl17.p06.gewinnmax-monopol'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['Monopol mit Wettbewerb gleichsetzen', 'MR mit Preis verwechseln', 'Deadweight-Loss nicht erwähnt wenn gefragt'],
    gradingRubric: ['MR korrekt gebildet', 'Optimum korrekt', 'Preis aus Nachfrage abgeleitet', 'Vergleich zu Wettbewerb optional sauber'],
    currentCoverage: { portalTasks: 'concept tasks and graph', stepProblems: 'partial', mockExam: 'not yet represented' }
  })
];

const PLACEHOLDER_DOCS = [];

export const TASK_FAMILIES = Object.freeze([
  ...VL_GROUNDED_FAMILIES,
  ...buildMikro1OfficialTaskPlaceholders(PLACEHOLDER_DOCS).map((placeholder) =>
    familyFromPlaceholder(placeholder)
  )
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
