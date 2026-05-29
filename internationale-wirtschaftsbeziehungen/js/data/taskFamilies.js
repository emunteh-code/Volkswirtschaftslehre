// ============================================================
// TASK FAMILY TAXONOMY — Internationale Wirtschaftsbeziehungen
// VL-anchor-grounded exam-pattern layer.
// ============================================================

import { buildInternationaleWirtschaftsbeziehungenOfficialTaskPlaceholders, IWB_OFFICIAL_TASK_DOC_BASELINE } from './officialTaskIngestion.js';

const MODULE = 'internationale-wirtschaftsbeziehungen';
const OFFICIAL_TASK_GAP = "Registry-Familien pro PDF; keine synthetischen Aufgaben.";

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
    title: `Internationale Wirtschaftsbeziehungen official-task mapping placeholder (${placeholder.conceptId})`,
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
      ingestion: `exercise=${IWB_OFFICIAL_TASK_DOC_BASELINE.exercise}, solution=${IWB_OFFICIAL_TASK_DOC_BASELINE.solution}, tutorial=${IWB_OFFICIAL_TASK_DOC_BASELINE.tutorial}, exam=${IWB_OFFICIAL_TASK_DOC_BASELINE.exam}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.handelsfakten-vl-pattern',
    conceptId: 'handelsfakten',
    title: "Internationale Wirtschaftsbeziehungen: Allgemein: Neubewertung von politischen Risiken durch",
    topic: "Allgemein: Neubewertung von politischen Risiken durch",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p31.allgemein-neubewertung-v, internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p03.vorlesung-wird-begleitet) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p31.allgemein-neubewertung-v","internationale-wirtschaftsbeziehungen.handelsfakten.intwb1-pdf.p03.vorlesung-wird-begleitet"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.ricardo-vl-pattern',
    conceptId: 'ricardo',
    title: "Internationale Wirtschaftsbeziehungen: zusätzliche Einheit Weizen aufgeben muss",
    topic: "zusätzliche Einheit Weizen aufgeben muss",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p07.zusa-tzliche-einheit-wei, internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p20.kreickemeier-grundlagen-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p07.zusa-tzliche-einheit-wei","internationale-wirtschaftsbeziehungen.ricardo.intwb2-pdf.p20.kreickemeier-grundlagen-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.heckscher_ohlin-vl-pattern',
    conceptId: 'heckscher_ohlin',
    title: "Internationale Wirtschaftsbeziehungen: Produktivitätsunterschiede zwischen den Ländern",
    topic: "Produktivitätsunterschiede zwischen den Ländern",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p15.produktivita-tsunterschi, internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p23.gruppen-ist-reale-entloh) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p15.produktivita-tsunterschi","internationale-wirtschaftsbeziehungen.heckscher_ohlin.intwb3-pdf.p23.gruppen-ist-reale-entloh"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.verteilung_handel-vl-pattern',
    conceptId: 'verteilung_handel',
    title: "Internationale Wirtschaftsbeziehungen: kapitalreich (relative Aussage über beide Länder)",
    topic: "kapitalreich (relative Aussage über beide Länder)",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p07.kapitalreich-relative-au, internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p21.relativem-faktorangebot-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p07.kapitalreich-relative-au","internationale-wirtschaftsbeziehungen.verteilung_handel.intwb3-pdf.p21.relativem-faktorangebot-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.krugman-vl-pattern',
    conceptId: 'krugman',
    title: "Internationale Wirtschaftsbeziehungen: I große Handelsvolumina zwischen ähnlichen Ländern",
    topic: "I große Handelsvolumina zwischen ähnlichen Ländern",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p22.i-gro-e-handelsvolumina-, internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p16.markt-aus-konstanter-bes) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p22.i-gro-e-handelsvolumina-","internationale-wirtschaftsbeziehungen.krugman.intwb4-pdf.p16.markt-aus-konstanter-bes"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.gravitation-vl-pattern',
    conceptId: 'gravitation',
    title: "Internationale Wirtschaftsbeziehungen: Markt aus (konstanter Bestand an Arbeitskräften)",
    topic: "Markt aus (konstanter Bestand an Arbeitskräften)",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p16.markt-aus-konstanter-bes, internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p02.kreickemeier-grundlagen-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p16.markt-aus-konstanter-bes","internationale-wirtschaftsbeziehungen.gravitation.intwb4-pdf.p02.kreickemeier-grundlagen-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.tarifmodell-vl-pattern',
    conceptId: 'tarifmodell',
    title: "Internationale Wirtschaftsbeziehungen: Einführung: Modellrahmen",
    topic: "Einführung: Modellrahmen",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p04.einfu-hrung-modellrahmen, internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p02.kreickemeier-grundlagen-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p04.einfu-hrung-modellrahmen","internationale-wirtschaftsbeziehungen.tarifmodell.intwb5-pdf.p02.kreickemeier-grundlagen-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.quoten_sanktionen-vl-pattern',
    conceptId: 'quoten_sanktionen',
    title: "Internationale Wirtschaftsbeziehungen: EU              pRUS                               EU",
    topic: "EU              pRUS                               EU",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p03.eu-prus-eu, internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p06.fla-che-e-in-der-folgend) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p03.eu-prus-eu","internationale-wirtschaftsbeziehungen.quoten_sanktionen.intwb6-pdf.p06.fla-che-e-in-der-folgend"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.wto_integration-vl-pattern',
    conceptId: 'wto_integration',
    title: "Internationale Wirtschaftsbeziehungen: Zollunion, Freihandelszone und Brexit",
    topic: "Zollunion, Freihandelszone und Brexit",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p17.zollunion-freihandelszon, internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p06.i-diskriminierung-gegen-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p17.zollunion-freihandelszon","internationale-wirtschaftsbeziehungen.wto_integration.intwb7-pdf.p06.i-diskriminierung-gegen-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.wechselkurssysteme-vl-pattern',
    conceptId: 'wechselkurssysteme',
    title: "Internationale Wirtschaftsbeziehungen: Die absolute Änderung des Wechselkurses betrug",
    topic: "Die absolute Änderung des Wechselkurses betrug",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p12.die-absolute-a-nderung-d, internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p26.1-iac-1-i-fac-eac) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p12.die-absolute-a-nderung-d","internationale-wirtschaftsbeziehungen.wechselkurssysteme.intwb8-pdf.p26.1-iac-1-i-fac-eac"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.zinsparitaet-vl-pattern',
    conceptId: 'zinsparitaet',
    title: "Internationale Wirtschaftsbeziehungen: g                                  PEUR",
    topic: "g                                  PEUR",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur, internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p09.g-peur","internationale-wirtschaftsbeziehungen.zinsparitaet.intwb9-pdf.p04.1-iac-1-i"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.kaufkraftparitaet-vl-pattern',
    conceptId: 'kaufkraftparitaet',
    title: "Internationale Wirtschaftsbeziehungen: The index demonstrates the",
    topic: "The index demonstrates the",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t, internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p17.the-index-demonstrates-t","internationale-wirtschaftsbeziehungen.kaufkraftparitaet.intwb9-pdf.p13.seite-13"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.monetaerer_ansatz-vl-pattern',
    conceptId: 'monetaerer_ansatz',
    title: "Internationale Wirtschaftsbeziehungen: Weltzinssatz r∗ :",
    topic: "Weltzinssatz r∗ :",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r, internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p16.weltzinssatz-r","internationale-wirtschaftsbeziehungen.monetaerer_ansatz.intwb10-pdf.p04.l-eur-yeur-l-us-yus"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.overshooting-vl-pattern',
    conceptId: 'overshooting',
    title: "Internationale Wirtschaftsbeziehungen: Erklärung von Wechselkursen",
    topic: "Erklärung von Wechselkursen",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p27.erkla-rung-von-wechselku, internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p16.kurzen-und-der-langen-fr) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p27.erkla-rung-von-wechselku","internationale-wirtschaftsbeziehungen.overshooting.intwb11-pdf.p16.kurzen-und-der-langen-fr"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.trilemma-vl-pattern',
    conceptId: 'trilemma',
    title: "Internationale Wirtschaftsbeziehungen: q            A∗     A",
    topic: "q            A∗     A",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p15.q-a-a, internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p22.beispiele-china-und-arge) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p15.q-a-a","internationale-wirtschaftsbeziehungen.trilemma.intwb12-pdf.p22.beispiele-china-und-arge"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'internationale-wirtschaftsbeziehungen.taskfamily.balassa_samuelson-vl-pattern',
    conceptId: 'balassa_samuelson',
    title: "Internationale Wirtschaftsbeziehungen: Feenstra/Taylor, International Economics, 5e, © 2021 Worth Publishers",
    topic: "Feenstra/Taylor, International Economics, 5e, © 2021 Worth Publishers",
    method: "An VL-Ankern (internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p05.feenstra-taylor-internat, internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p01.i-das-trilemma-der-wa-hr) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p05.feenstra-taylor-internat","internationale-wirtschaftsbeziehungen.balassa_samuelson.intwb12-pdf.p01.i-das-trilemma-der-wa-hr"],
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
  ...buildInternationaleWirtschaftsbeziehungenOfficialTaskPlaceholders([]).map((placeholder) => familyFromPlaceholder(placeholder))
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

