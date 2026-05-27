// ============================================================
// TASK FAMILY TAXONOMY — Mikroökonomik II
// Source-grounded exam-pattern layer. These records describe
// task families; they do not claim official exercise-bank parity.
// ============================================================

const MODULE = 'mikro2';
const OFFICIAL_TASK_GAP =
  'Keine vollständigen offiziellen Übungsblätter, Lösungsschlüssel oder Altklausuren für diese Familie im aktuellen Mikro-II-Korpus.';

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
  requiredFormulaCards = [],
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
    requiredFormulaCards,
    commonTraps,
    gradingRubric,
    currentCoverage,
    officialTaskCoverage,
    officialTaskGap: OFFICIAL_TASK_GAP
  };
}

export const TASK_FAMILIES = Object.freeze([
  family({
    id: 'mikro2.taskfamily.monopoly-markup',
    conceptId: 'monopol_preissetzung',
    title: 'Monopolpreis über Elastizitätsregel bestimmen',
    topic: 'Monopolistische Preissetzung',
    method: 'Grenzerlös formulieren, BEO E\'(y)=C\'(y) einsetzen, Markup nach Preis auflösen.',
    sourceAnchorIds: ['mikro2.monopol_preissetzung.vl02.p02.markup'],
    difficulty: 'mittel',
    expectedTimeMinutes: 8,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.monopoly_markup_elasticity'],
    commonTraps: ['Elastizität ohne Betrag verwenden', 'Preis mit Grenzkosten gleichsetzen', 'unelastischen Nachfragebereich übersehen'],
    gradingRubric: ['Grenzerlös korrekt notiert', 'BEO korrekt angewandt', 'Preisformel sauber isoliert', 'Elastizitätsbedingung verbal geprüft'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.price-discrimination-third-degree',
    conceptId: 'preisdiskriminierung',
    title: 'Preisdiskriminierung dritten Grades lösen',
    topic: 'Preisdiskriminierung',
    method: 'Gewinn mit gruppenspezifischen Erlösen aufstellen und Grenzerlöse über gemeinsame Grenzkosten ausgleichen.',
    sourceAnchorIds: ['mikro2.preisdiskriminierung.vl03.p03.mr-equalization'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.third_degree_price_discrimination_mr'],
    commonTraps: ['Preise statt Grenzerlöse ausgleichen', 'Gesamtkosten falsch nach Teilmengen trennen', 'No-arbitrage-Annahme vergessen'],
    gradingRubric: ['Gruppen sauber getrennt', 'Gesamtkosten korrekt behandelt', 'BEO je Gruppe aufgestellt', 'ökonomische Interpretation der Preisunterschiede gegeben'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.cournot-reaction-functions',
    conceptId: 'oligopol_cournot_bertrand',
    title: 'Cournot-Reaktionsfunktionen und Gleichgewicht',
    topic: 'Oligopoltheorie',
    method: 'Gewinnfunktion je Firma, BEO nach eigener Menge, Reaktionsfunktionen schneiden oder Symmetrie nutzen.',
    sourceAnchorIds: ['mikro2.oligopol_cournot_bertrand.vl06.p03.reaction'],
    difficulty: 'mittel',
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.cournot_symmetric_duopoly_quantity'],
    commonTraps: ['Rivalenmenge beim Ableiten als variabel behandeln', 'Cournot mit Bertrand verwechseln', 'Gesamtmenge Q falsch einsetzen'],
    gradingRubric: ['Nachfrage korrekt in Gewinnfunktion eingesetzt', 'FOC korrekt gebildet', 'Reaktionsfunktion korrekt isoliert', 'Gleichgewicht konsistent berechnet'],
    currentCoverage: {
      portalTasks: 'concept tasks, step problem, formula card, mock exam block',
      stepProblems: 'm2_cournot_1 and model-choice drill',
      mockExam: 'hard_mock_mikro2_2026 Block A'
    }
  }),
  family({
    id: 'mikro2.taskfamily.bertrand-model-choice',
    conceptId: 'oligopol_cournot_bertrand',
    title: 'Cournot-Bertrand-Modellwahl begründen',
    topic: 'Oligopoltheorie',
    method: 'Entscheidungsvariable identifizieren und das Preis- oder Mengenwettbewerbsresultat verbal ableiten.',
    sourceAnchorIds: ['mikro2.oligopol_cournot_bertrand.vl08.p01.bertrand', 'mikro2.oligopol_cournot_bertrand.vl08.p03.bertrand-paradox'],
    difficulty: 'leicht',
    expectedTimeMinutes: 5,
    examRelevance: 'mittel',
    commonTraps: ['Entscheidungsvariable überlesen', 'Bertrand-Paradox ohne Annahmen nennen', 'Kapazitätsgrenzen ignorieren'],
    gradingRubric: ['Preis- versus Mengenwahl korrekt erkannt', 'Basisergebnis genannt', 'mindestens eine Annahme oder Einschränkung sauber eingeordnet'],
    currentCoverage: {
      portalTasks: 'concept tasks and step problem',
      stepProblems: 'm2_cournot_2',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.stackelberg-backward-induction',
    conceptId: 'oligopol_stackelberg',
    title: 'Stackelberg per Rückwärtsinduktion lösen',
    topic: 'Sequentieller Mengenwettbewerb',
    method: 'Folgerreaktion bestimmen, in Führerproblem einsetzen, Führermenge und Folgermenge berechnen.',
    sourceAnchorIds: ['mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model'],
    difficulty: 'mittel',
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.stackelberg_leader_quantity'],
    commonTraps: ['Cournot-Schnittpunkt statt Rückwärtsinduktion verwenden', 'Folgerreaktion nicht einsetzen', 'Timing nicht verbal erklären'],
    gradingRubric: ['Folgerproblem korrekt gelöst', 'Führerproblem mit Reaktion formuliert', 'Mengenfolge konsistent berechnet', 'First-mover-Logik verbal eingeordnet'],
    currentCoverage: {
      portalTasks: 'concept tasks, step problem, formula card',
      stepProblems: 'm2_stack_1',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.intertemporal-budget',
    conceptId: 'intertemporaler_konsum',
    title: 'Intertemporale Budgetgerade herleiten',
    topic: 'Intertemporaler Konsum',
    method: 'Periodenbudgets mit Ersparnis verbinden, Ersparnis eliminieren und Gegenwartswertform schreiben.',
    sourceAnchorIds: ['mikro2.intertemporaler_konsum.vl12.p05.budget'],
    difficulty: 'mittel',
    expectedTimeMinutes: 8,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.intertemporal_budget_present_value'],
    commonTraps: ['c1/c2 als Zustände statt Perioden lesen', 'Gegenwarts- und Zukunftswerte mischen', 'Ausstattungspunkt nicht markieren'],
    gradingRubric: ['Periodenbudgets korrekt', 'Zinsfaktor korrekt verwendet', 'Budgetgerade in Gegenwartswerten geschrieben', 'ökonomische Steigung interpretiert'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.expected-utility-insurance',
    conceptId: 'unsicherheit_versicherung',
    title: 'Erwartungsnutzen und Versicherung einordnen',
    topic: 'Unsicherheit und Versicherung',
    method: 'Naturzustände definieren, Nutzenwerte gewichten und Versicherungsvertrag als Zustandskonsum abbilden.',
    sourceAnchorIds: ['mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption'],
    difficulty: 'mittel',
    expectedTimeMinutes: 9,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.expected_utility_two_states'],
    commonTraps: ['Zustände mit Zeitperioden verwechseln', 'Auszahlungen statt Nutzen gewichten', 'Vollversicherung ohne Risikoaversion begründen'],
    gradingRubric: ['Zustände korrekt benannt', 'Wahrscheinlichkeiten korrekt genutzt', 'Erwartungsnutzen statt Erwartungswert allein berechnet', 'Versicherungslogik verbal erklärt'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.exchange-efficiency',
    conceptId: 'gleichgewicht_tausch',
    title: 'Tauscheffizienz in der Edgeworth-Box prüfen',
    topic: 'Allgemeines Gleichgewicht',
    method: 'Grenzraten der Substitution beider Haushalte berechnen und Tangentialbedingung prüfen.',
    sourceAnchorIds: ['mikro2.gleichgewicht_tausch.vl16.p03.edgeworth', 'mikro2.gleichgewicht_tausch.vl16.p05.contract'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['A- und B-Ursprung verwechseln', 'GRS falsch herum bilden', 'Effizienz mit Gerechtigkeit verwechseln'],
    gradingRubric: ['Allokation korrekt in der Box gelesen', 'GRS je Haushalt berechnet', 'Gleichheitsbedingung geprüft', 'Pareto-Aussage sauber formuliert'],
    currentCoverage: {
      portalTasks: 'concept tasks and step problem',
      stepProblems: 'm2_ge_1',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.walras-market-clearing',
    conceptId: 'gleichgewicht_walras',
    title: 'Walras-Gleichgewicht über Markträumung prüfen',
    topic: 'Walras-Gleichgewicht',
    method: 'Überschussnachfrage bestimmen, relative Preise nutzen und Walras-Gesetz zur Gleichungsreduktion anwenden.',
    sourceAnchorIds: ['mikro2.gleichgewicht_walras.vl15.p01.programm', 'mikro2.gleichgewicht_walras.vl16.p09.market-clearing'],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'mittel',
    commonTraps: ['absolute statt relative Preise verwenden', 'Walras-Gesetz als zusätzliche Gleichung behandeln', 'Budgetausschöpfung vergessen'],
    gradingRubric: ['Markträumung korrekt formuliert', 'Preisnormalisierung klar', 'Walras-Gesetz korrekt eingesetzt', 'Gleichgewicht verbal interpretiert'],
    currentCoverage: {
      portalTasks: 'concept tasks and step problem',
      stepProblems: 'm2_walras_1',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.production-efficiency',
    conceptId: 'gleichgewicht_produktion',
    title: 'Produktionseffizienz in der Faktorbox prüfen',
    topic: 'Produktion im allgemeinen Gleichgewicht',
    method: 'Faktorvollbeschäftigung notieren, Isoquanten-Tangentialbedingung prüfen und GRTS-Gleichheit interpretieren.',
    sourceAnchorIds: ['mikro2.gleichgewicht_produktion.vl17.p03.factor-box'],
    difficulty: 'schwer',
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.production_efficiency_grts'],
    commonTraps: ['Produktions- und Konsumeffizienz gleichsetzen', 'Vollbeschäftigungsbedingungen vergessen', 'GRTS für nur einen Sektor auswerten'],
    gradingRubric: ['Faktorbedingungen vollständig', 'GRTS-Bedingung korrekt', 'Faktorbox-Logik verbal eingeordnet', 'Abgrenzung zur Konsumseite gegeben'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.adverse-selection-lemons',
    conceptId: 'information_adverse',
    title: 'Adverse Selection im Lemons-Markt analysieren',
    topic: 'Asymmetrische Information',
    method: 'Erwartungswert uninformierter Käufer berechnen, Teilnahme guter Typen prüfen und Qualitätsdynamik erklären.',
    sourceAnchorIds: ['mikro2.information_adverse.vl18.p03.adverse-selection', 'mikro2.information_adverse.vl19.p02.market-breakdown'],
    difficulty: 'mittel',
    expectedTimeMinutes: 9,
    examRelevance: 'hoch',
    commonTraps: ['Adverse Selection mit Moral Hazard verwechseln', 'Durchschnittswert nach Marktaustritt nicht aktualisieren', 'Zeitpunkt vor Vertragsschluss übersehen'],
    gradingRubric: ['Typen sauber getrennt', 'Erwartungswert korrekt', 'Teilnahmebedingung guter Qualität geprüft', 'Negativauslese verbal erklärt'],
    currentCoverage: {
      portalTasks: 'concept tasks and step problems',
      stepProblems: 'm2_info_1 and m2_info_2',
      mockExam: 'not yet represented'
    }
  }),
  family({
    id: 'mikro2.taskfamily.moral-hazard-contracts',
    conceptId: 'information_moralhazard',
    title: 'Principal-Agent-Nebenbedingungen formulieren',
    topic: 'Moral Hazard',
    method: 'Teilnahmebedingung und Anreizbedingung getrennt notieren und in das Vertragsproblem einordnen.',
    sourceAnchorIds: ['mikro2.information_moralhazard.vl20.p02.contract'],
    difficulty: 'schwer',
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    requiredFormulaCards: ['mikro2.principal_agent_participation_incentive'],
    commonTraps: ['IR oder IC vergessen', 'Hidden action mit hidden type verwechseln', 'Agenten- und Prinzipalziel vermischen'],
    gradingRubric: ['IR korrekt formuliert', 'IC korrekt formuliert', 'Effort/Output-Informationsstruktur erklärt', 'Vertragsziel sauber eingeordnet'],
    currentCoverage: {
      portalTasks: 'concept tasks and formula card',
      stepProblems: 'not yet concept-specific',
      mockExam: 'not yet represented'
    }
  })
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
