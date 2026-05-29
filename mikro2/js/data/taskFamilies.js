// ============================================================
// TASK FAMILY TAXONOMY — Mikroökonomik II
// VL-anchor-grounded exam-pattern layer.
// ============================================================

import { buildMikro2OfficialTaskPlaceholders, MIKRO2_OFFICIAL_TASK_DOC_BASELINE } from './officialTaskIngestion.js';

const MODULE = 'mikro2';
const OFFICIAL_TASK_GAP = "Keine offiziellen Klausur-Artefakte im Korpus; Übungs-Mapping offen.";

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
    title: `Mikroökonomik II official-task mapping placeholder (${placeholder.conceptId})`,
    topic: 'Official task ingestion',
    method: 'Dokumente registriert; item-level Mapping steht aus.',
    sourceStatus: placeholder.sourceStatus,
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Ingestion mit vollständigem Mapping verwechseln'],
    gradingRubric: ['Placeholder bleibt non-deceptive'],
    currentCoverage: {
      ingestion: `exercise=${MIKRO2_OFFICIAL_TASK_DOC_BASELINE.exercise}, solution=${MIKRO2_OFFICIAL_TASK_DOC_BASELINE.solution}, tutorial=${MIKRO2_OFFICIAL_TASK_DOC_BASELINE.tutorial}, exam=${MIKRO2_OFFICIAL_TASK_DOC_BASELINE.exam}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
  family({
    id: 'mikro2.taskfamily.monopol_preissetzung-vl-pattern',
    conceptId: 'monopol_preissetzung',
    title: "Mikroökonomik II: Preissetzung im Monopol und Wohlfahrtseffekte",
    topic: "Preissetzung im Monopol und Wohlfahrtseffekte",
    method: "An VL-Ankern (mikro2.monopol_preissetzung.vl02.p01.programm, mikro2.monopol_preissetzung.vl02.p02.markup) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.monopol_preissetzung.vl02.p01.programm","mikro2.monopol_preissetzung.vl02.p02.markup"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.preisdiskriminierung-vl-pattern',
    conceptId: 'preisdiskriminierung',
    title: "Mikroökonomik II: Preisdiskriminierung dritten Grades",
    topic: "Preisdiskriminierung dritten Grades",
    method: "An VL-Ankern (mikro2.preisdiskriminierung.vl03.p02.third-degree, mikro2.preisdiskriminierung.vl03.p03.mr-equalization) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.preisdiskriminierung.vl03.p02.third-degree","mikro2.preisdiskriminierung.vl03.p03.mr-equalization"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.spieltheorie_statisch-vl-pattern',
    conceptId: 'spieltheorie_statisch',
    title: "Mikroökonomik II: Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash",
    topic: "Spieltheorie I: Auszahlungsmatrix, dominante Strategien, Nash",
    method: "An VL-Ankern (mikro2.spieltheorie_statisch.vl09.p01.programm, mikro2.spieltheorie_statisch.vl09.p05.nash) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.spieltheorie_statisch.vl09.p01.programm","mikro2.spieltheorie_statisch.vl09.p05.nash"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.spieltheorie_dynamisch-vl-pattern',
    conceptId: 'spieltheorie_dynamisch',
    title: "Mikroökonomik II: Gemischte Strategien und spezielle Spiele",
    topic: "Gemischte Strategien und spezielle Spiele",
    method: "An VL-Ankern (mikro2.spieltheorie_dynamisch.vl10.p01.mixed, mikro2.spieltheorie_dynamisch.vl11.p01.sequential) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.spieltheorie_dynamisch.vl10.p01.mixed","mikro2.spieltheorie_dynamisch.vl11.p01.sequential"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.oligopol_cournot_bertrand-vl-pattern',
    conceptId: 'oligopol_cournot_bertrand',
    title: "Mikroökonomik II: Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern",
    topic: "Cournot-Duopol und Cournot-Wettbewerb mit vielen Anbietern",
    method: "An VL-Ankern (mikro2.oligopol_cournot_bertrand.vl06.p01.programm, mikro2.oligopol_cournot_bertrand.vl06.p03.reaction) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.oligopol_cournot_bertrand.vl06.p01.programm","mikro2.oligopol_cournot_bertrand.vl06.p03.reaction"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.oligopol_stackelberg-vl-pattern',
    conceptId: 'oligopol_stackelberg',
    title: "Mikroökonomik II: Oligopoltheorie I: Strategien und Stackelbergmodell",
    topic: "Oligopoltheorie I: Strategien und Stackelbergmodell",
    method: "An VL-Ankern (mikro2.oligopol_stackelberg.vl05.p01.programm, mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.oligopol_stackelberg.vl05.p01.programm","mikro2.oligopol_stackelberg.vl05.p02.stackelberg-model"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.intertemporaler_konsum-vl-pattern',
    conceptId: 'intertemporaler_konsum',
    title: "Mikroökonomik II: Intertemporaler Konsum",
    topic: "Intertemporaler Konsum",
    method: "An VL-Ankern (mikro2.intertemporaler_konsum.vl12.p01.programm, mikro2.intertemporaler_konsum.vl12.p05.budget) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.intertemporaler_konsum.vl12.p01.programm","mikro2.intertemporaler_konsum.vl12.p05.budget"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.unsicherheit_versicherung-vl-pattern',
    conceptId: 'unsicherheit_versicherung',
    title: "Mikroökonomik II: Entscheidungen unter Unsicherheit",
    topic: "Entscheidungen unter Unsicherheit",
    method: "An VL-Ankern (mikro2.unsicherheit_versicherung.vl13.p01.programm, mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.unsicherheit_versicherung.vl13.p01.programm","mikro2.unsicherheit_versicherung.vl13.p03.conditional-consumption"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.gleichgewicht_produktion-vl-pattern',
    conceptId: 'gleichgewicht_produktion',
    title: "Mikroökonomik II: Allgemeines Gleichgewicht mit Produktion",
    topic: "Allgemeines Gleichgewicht mit Produktion",
    method: "An VL-Ankern (mikro2.gleichgewicht_produktion.vl17.p01.programm, mikro2.gleichgewicht_produktion.vl17.p02.model) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.gleichgewicht_produktion.vl17.p01.programm","mikro2.gleichgewicht_produktion.vl17.p02.model"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.gleichgewicht_tausch-vl-pattern',
    conceptId: 'gleichgewicht_tausch',
    title: "Mikroökonomik II: Tauschökonomie, Tauschoptimum und Pareto-Effizienz",
    topic: "Tauschökonomie, Tauschoptimum und Pareto-Effizienz",
    method: "An VL-Ankern (mikro2.gleichgewicht_tausch.vl16.p01.programm, mikro2.gleichgewicht_tausch.vl16.p03.edgeworth) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.gleichgewicht_tausch.vl16.p01.programm","mikro2.gleichgewicht_tausch.vl16.p03.edgeworth"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.gleichgewicht_walras-vl-pattern',
    conceptId: 'gleichgewicht_walras',
    title: "Mikroökonomik II: Allgemeines Gleichgewicht I und Walras-Gesetz",
    topic: "Allgemeines Gleichgewicht I und Walras-Gesetz",
    method: "An VL-Ankern (mikro2.gleichgewicht_walras.vl15.p01.programm, mikro2.gleichgewicht_walras.vl15.p02.robinson) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.gleichgewicht_walras.vl15.p01.programm","mikro2.gleichgewicht_walras.vl15.p02.robinson"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.wohlfahrt_theoreme-vl-pattern',
    conceptId: 'wohlfahrt_theoreme',
    title: "Mikroökonomik II: Pareto-Effizienz",
    topic: "Pareto-Effizienz",
    method: "An VL-Ankern (mikro2.wohlfahrt_theoreme.vl16.p07.pareto, mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.wohlfahrt_theoreme.vl16.p07.pareto","mikro2.wohlfahrt_theoreme.vl16.p17.fundamental-theorems"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.wohlfahrt_messung-vl-pattern',
    conceptId: 'wohlfahrt_messung',
    title: "Mikroökonomik II: Wohlfahrtswirkung des Monopols",
    topic: "Wohlfahrtswirkung des Monopols",
    method: "An VL-Ankern (mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare, mikro2.wohlfahrt_messung.vl02.p09.surplus) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.wohlfahrt_messung.vl02.p05.monopoly-welfare","mikro2.wohlfahrt_messung.vl02.p09.surplus"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.information_adverse-vl-pattern',
    conceptId: 'information_adverse',
    title: "Mikroökonomik II: Moralisches Risiko und Adverse Selektion",
    topic: "Moralisches Risiko und Adverse Selektion",
    method: "An VL-Ankern (mikro2.information_adverse.vl18.p01.programm, mikro2.information_adverse.vl18.p03.adverse-selection) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.information_adverse.vl18.p01.programm","mikro2.information_adverse.vl18.p03.adverse-selection"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'mikro2.taskfamily.information_moralhazard-vl-pattern',
    conceptId: 'information_moralhazard',
    title: "Mikroökonomik II: Moralisches Risiko und Prinzipal-Agenten-Theorie",
    topic: "Moralisches Risiko und Prinzipal-Agenten-Theorie",
    method: "An VL-Ankern (mikro2.information_moralhazard.vl18.p01.programm, mikro2.information_moralhazard.vl18.p04.principal-agent) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["mikro2.information_moralhazard.vl18.p01.programm","mikro2.information_moralhazard.vl18.p04.principal-agent"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  })
];

const OFFICIAL_DOCUMENT_FAMILIES = [

];

export const TASK_FAMILIES = Object.freeze([
  ...VL_GROUNDED_FAMILIES,
  ...OFFICIAL_DOCUMENT_FAMILIES,
  ...buildMikro2OfficialTaskPlaceholders([]).map((placeholder) => familyFromPlaceholder(placeholder))
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

