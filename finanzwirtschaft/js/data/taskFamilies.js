// ============================================================
// TASK FAMILY TAXONOMY — Finanzwirtschaft
// VL-anchor-grounded exam-pattern layer.
// ============================================================

import { buildFinanzwirtschaftOfficialTaskPlaceholders, FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE } from './officialTaskIngestion.js';

const MODULE = 'finanzwirtschaft';
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
    title: `Finanzwirtschaft official-task mapping placeholder (${placeholder.conceptId})`,
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
      ingestion: `exercise=${FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE.exercise}, solution=${FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE.solution}, tutorial=${FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE.tutorial}, exam=${FINANZWIRTSCHAFT_OFFICIAL_TASK_DOC_BASELINE.exam}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
  family({
    id: 'finanzwirtschaft.taskfamily.finanz_denkweise-vl-pattern',
    conceptId: 'finanz_denkweise',
    title: "Finanzwirtschaft: 23.10.2024                                       Georg-August-Universität Göttingen   20",
    topic: "23.10.2024                                       Georg-August-Universität Göttingen   20",
    method: "An VL-Ankern (finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-, finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p20.23-10-2024-georg-august-","finanzwirtschaft.finanz_denkweise.v1-studip-pdf.p14.23-10-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.liquiditaetsplanung-vl-pattern',
    conceptId: 'liquiditaetsplanung',
    title: "Finanzwirtschaft: 06.11.2024                      Georg-August-Universität Göttingen                                                  3",
    topic: "06.11.2024                      Georg-August-Universität Göttingen                                                  3",
    method: "An VL-Ankern (finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-, finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p03.06-11-2024-georg-august-","finanzwirtschaft.liquiditaetsplanung.v2-studip-pdf.p15.06-11-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.kapitalmarkt_bewertung-vl-pattern',
    conceptId: 'kapitalmarkt_bewertung',
    title: "Finanzwirtschaft: 06.11.2024                                         Georg-August-Universität Göttingen   16",
    topic: "06.11.2024                                         Georg-August-Universität Göttingen   16",
    method: "An VL-Ankern (finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-, finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p16.06-11-2024-georg-august-","finanzwirtschaft.kapitalmarkt_bewertung.v2-studip-pdf.p07.06-11-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.institutionen_marktunvollkommenheit-vl-pattern',
    conceptId: 'institutionen_marktunvollkommenheit',
    title: "Finanzwirtschaft: 06.11.2024                                    Georg-August-Universität Göttingen                             13",
    topic: "06.11.2024                                    Georg-August-Universität Göttingen                             13",
    method: "An VL-Ankern (finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-, finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p13.06-11-2024-georg-august-","finanzwirtschaft.institutionen_marktunvollkommenheit.v2-studip-pdf.p03.06-11-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.intertemporale_wahl-vl-pattern',
    conceptId: 'intertemporale_wahl',
    title: "Finanzwirtschaft: 13.11.2024                                       Georg-August-Universität Göttingen                                     13",
    topic: "13.11.2024                                       Georg-August-Universität Göttingen                                     13",
    method: "An VL-Ankern (finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-, finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p13.13-11-2024-georg-august-","finanzwirtschaft.intertemporale_wahl.v3-studip-pdf.p15.13-11-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.kapitalwert_fisher-vl-pattern',
    conceptId: 'kapitalwert_fisher',
    title: "Finanzwirtschaft: 27.11.2024                                            Georg-August-Universität Göttingen                                7",
    topic: "27.11.2024                                            Georg-August-Universität Göttingen                                7",
    method: "An VL-Ankern (finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-, finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p07.27-11-2024-georg-august-","finanzwirtschaft.kapitalwert_fisher.v5-studip-pdf.p14.27-11-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.auf_abzinsen-vl-pattern',
    conceptId: 'auf_abzinsen',
    title: "Finanzwirtschaft: 04.12.2024                                        Georg-August-Universität Göttingen                                    8",
    topic: "04.12.2024                                        Georg-August-Universität Göttingen                                    8",
    method: "An VL-Ankern (finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-, finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p08.04-12-2024-georg-august-","finanzwirtschaft.auf_abzinsen.v6-studip-pdf.p10.04-12-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.renten_endwert-vl-pattern',
    conceptId: 'renten_endwert',
    title: "Finanzwirtschaft: 04.12.2024                                              Georg-August-Universität Göttingen                                         6",
    topic: "04.12.2024                                              Georg-August-Universität Göttingen                                         6",
    method: "An VL-Ankern (finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-, finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.renten_endwert.v6-studip-pdf.p06.04-12-2024-georg-august-","finanzwirtschaft.renten_endwert.v6-studip-pdf.p02.04-12-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.annuitaeten_finanzplan-vl-pattern',
    conceptId: 'annuitaeten_finanzplan',
    title: "Finanzwirtschaft: 11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
    topic: "11.12.2024                                          Georg-August-Universität Göttingen                                                 11",
    method: "An VL-Ankern (finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-, finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p11.11-12-2024-georg-august-","finanzwirtschaft.annuitaeten_finanzplan.v7-studip-pdf.p08.11-12-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.izf_kapitalwertfunktion-vl-pattern',
    conceptId: 'izf_kapitalwertfunktion',
    title: "Finanzwirtschaft: 18.12.2024                                Georg-August-Universität Göttingen                            3",
    topic: "18.12.2024                                Georg-August-Universität Göttingen                            3",
    method: "An VL-Ankern (finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-, finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_kapitalwertfunktion.v8-studip-pdf.p05.18-12-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.izf_grenzen-vl-pattern',
    conceptId: 'izf_grenzen',
    title: "Finanzwirtschaft: 18.12.2024                                Georg-August-Universität Göttingen                            3",
    topic: "18.12.2024                                Georg-August-Universität Göttingen                            3",
    method: "An VL-Ankern (finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-, finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.izf_grenzen.v8-studip-pdf.p03.18-12-2024-georg-august-","finanzwirtschaft.izf_grenzen.v8-studip-pdf.p05.18-12-2024-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.unsicherheit-vl-pattern',
    conceptId: 'unsicherheit',
    title: "Finanzwirtschaft: 08.01.2025                                           Georg-August-Universität Göttingen                    18",
    topic: "08.01.2025                                           Georg-August-Universität Göttingen                    18",
    method: "An VL-Ankern (finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-, finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.unsicherheit.v9-studip-pdf.p18.08-01-2025-georg-august-","finanzwirtschaft.unsicherheit.v9-studip-pdf.p25.08-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.risikoadjustierter_kapitalwert-vl-pattern',
    conceptId: 'risikoadjustierter_kapitalwert',
    title: "Finanzwirtschaft: 08.01.2025                                             Georg-August-Universität Göttingen                            9",
    topic: "08.01.2025                                             Georg-August-Universität Göttingen                            9",
    method: "An VL-Ankern (finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-, finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p09.08-01-2025-georg-august-","finanzwirtschaft.risikoadjustierter_kapitalwert.v9-studip-pdf.p17.08-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.bezugsrecht-vl-pattern',
    conceptId: 'bezugsrecht',
    title: "Finanzwirtschaft: 15.01.2025                                              Georg-August-Universität Göttingen   9",
    topic: "15.01.2025                                              Georg-August-Universität Göttingen   9",
    method: "An VL-Ankern (finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-, finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.bezugsrecht.v10-studip-pdf.p09.15-01-2025-georg-august-","finanzwirtschaft.bezugsrecht.v10-studip-pdf.p19.15-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.eigenkapitalkosten-vl-pattern',
    conceptId: 'eigenkapitalkosten',
    title: "Finanzwirtschaft: 15.01.2025                                     Georg-August-Universität Göttingen   6",
    topic: "15.01.2025                                     Georg-August-Universität Göttingen   6",
    method: "An VL-Ankern (finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-, finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p06.15-01-2025-georg-august-","finanzwirtschaft.eigenkapitalkosten.v10-studip-pdf.p03.15-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.fremdkapitalkosten-vl-pattern',
    conceptId: 'fremdkapitalkosten',
    title: "Finanzwirtschaft: 22.01.2025                                           Georg-August-Universität Göttingen   8",
    topic: "22.01.2025                                           Georg-August-Universität Göttingen   8",
    method: "An VL-Ankern (finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-, finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p08.22-01-2025-georg-august-","finanzwirtschaft.fremdkapitalkosten.v11-studip-pdf.p05.22-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.wacc-vl-pattern',
    conceptId: 'wacc',
    title: "Finanzwirtschaft: 22.01.2025                                    Georg-August-Universität Göttingen   9",
    topic: "22.01.2025                                    Georg-August-Universität Göttingen   9",
    method: "An VL-Ankern (finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-, finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.wacc.v11-studip-pdf.p09.22-01-2025-georg-august-","finanzwirtschaft.wacc.v11-studip-pdf.p04.22-01-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.wacc_leverage-vl-pattern',
    conceptId: 'wacc_leverage',
    title: "Finanzwirtschaft: 02.02.2025                                        Georg-August-Universität Göttingen   4",
    topic: "02.02.2025                                        Georg-August-Universität Göttingen   4",
    method: "An VL-Ankern (finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-, finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.wacc_leverage.v12-studip-pdf.p04.02-02-2025-georg-august-","finanzwirtschaft.wacc_leverage.v12-studip-pdf.p02.02-02-2025-georg-august-"],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ['VL-Methode mit Übungsblatt-Muster verwechseln', 'Anker ohne Aufgabenbezug auswendig lernen'],
    gradingRubric: ['Methode korrekt', 'Rechnung/Notation stimmig', 'VL-Bezug erkennbar'],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'finanzwirtschaft.taskfamily.modigliani_miller-vl-pattern',
    conceptId: 'modigliani_miller',
    title: "Finanzwirtschaft: 02.02.2025                                             Georg-August-Universität Göttingen                                8",
    topic: "02.02.2025                                             Georg-August-Universität Göttingen                                8",
    method: "An VL-Ankern (finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-, finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-) orientieren und mit Kapitelaufgaben verknüpfen.",
    sourceAnchorIds: ["finanzwirtschaft.modigliani_miller.v12-studip-pdf.p08.02-02-2025-georg-august-","finanzwirtschaft.modigliani_miller.v12-studip-pdf.p03.02-02-2025-georg-august-"],
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
  ...buildFinanzwirtschaftOfficialTaskPlaceholders([]).map((placeholder) => familyFromPlaceholder(placeholder))
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);

