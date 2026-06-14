// ============================================================
// TASK FAMILY TAXONOMY — Jahresabschluss
// VL-anchor-grounded exam-pattern layer.
// ============================================================

import { buildJahresabschlussOfficialTaskPlaceholders, JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE } from './officialTaskIngestion.js';

const MODULE = 'jahresabschluss';
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
    title: `Jahresabschluss official-task mapping placeholder (${placeholder.conceptId})`,
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
      ingestion: `exercise=${JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE.exercise}, solution=${JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE.solution}, tutorial=${JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE.tutorial}, exam=${JAHRESABSCHLUSS_OFFICIAL_TASK_DOC_BASELINE.exam}`,
      mapping: 'concept-level Zuordnung offen'
    },
    officialTaskCoverage: placeholder.officialTaskCoverage,
    officialTaskGap: placeholder.officialTaskGap,
    placeholderLabel: placeholder.placeholderLabel
  };
}

const VL_GROUNDED_FAMILIES = [
  family({
    id: 'jahresabschluss.taskfamily.rechnungswesen_intro-vl-pattern',
    conceptId: 'rechnungswesen_intro',
    title: "Jahresabschluss: überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
    topic: "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart.",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch, jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch","jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.rechnungswesen_intro-vl-apply',
    conceptId: 'rechnungswesen_intro',
    title: "Jahresabschluss: überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart. — Klausurtyp",
    topic: "überarbeitete Auflage, Schäffer-Poeschel Verlag Stuttgart. — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch, jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p09.berarbeitete-auflage-sch","jahresabschluss.rechnungswesen_intro.orga-kapitel1-pdf.p07.ws-2024-25-jahresabschlu"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.gob_rechtsgrundlagen-vl-pattern',
    conceptId: 'gob_rechtsgrundlagen',
    title: "Jahresabschluss: 2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
    topic: "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur, jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur","jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.gob_rechtsgrundlagen-vl-apply',
    conceptId: 'gob_rechtsgrundlagen',
    title: "Jahresabschluss: 2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ — Klausurtyp",
    topic: "2.2 VON DER INVENTUR ZUR BILANZ – DIE BILANZ — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur, jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p22.2-2-von-der-inventur-zur","jahresabschluss.gob_rechtsgrundlagen.kapitel2-pdf.p29.ansatz-mit-den-fortgef-h"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.inventur_inventar_bilanzansatz-vl-pattern',
    conceptId: 'inventur_inventar_bilanzansatz',
    title: "Jahresabschluss: 2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
    topic: "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec, jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec","jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.inventur_inventar_bilanzansatz-vl-apply',
    conceptId: 'inventur_inventar_bilanzansatz',
    title: "Jahresabschluss: 2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN — Klausurtyp",
    topic: "2.1 RECHTSGRUNDLAGEN - RECHTSFORMEN — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec, jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p08.2-1-rechtsgrundlagen-rec","jahresabschluss.inventur_inventar_bilanzansatz.kapitel2-pdf.p14.2-1-rechtsgrundlagen-sys"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.buchen_konten-vl-pattern',
    conceptId: 'buchen_konten',
    title: "Jahresabschluss: 3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
    topic: "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe, jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe","jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.buchen_konten-vl-apply',
    conceptId: 'buchen_konten',
    title: "Jahresabschluss: 3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG — Klausurtyp",
    topic: "3.3 BILANZIELLE WERTBEWEGUNGEN – DOPPELTE BUCHFÜHRUNG — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe, jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.buchen_konten.kapitel3-pdf.p23.3-3-bilanzielle-wertbewe","jahresabschluss.buchen_konten.kapitel3-pdf.p14.ab-ab"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.buchfuehrung_orga-vl-pattern',
    conceptId: 'buchfuehrung_orga',
    title: "Jahresabschluss: 4.3 BELEGORGANISATION – GRUNDLAGEN",
    topic: "4.3 BELEGORGANISATION – GRUNDLAGEN",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr, jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr","jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.buchfuehrung_orga-vl-apply',
    conceptId: 'buchfuehrung_orga',
    title: "Jahresabschluss: 4.3 BELEGORGANISATION – GRUNDLAGEN — Klausurtyp",
    topic: "4.3 BELEGORGANISATION – GRUNDLAGEN — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr, jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p12.4-3-belegorganisation-gr","jahresabschluss.buchfuehrung_orga.kapitel4-pdf.p10.kontenrahmens-in-konteng"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.anlagevermoegen-vl-pattern',
    conceptId: 'anlagevermoegen',
    title: "Jahresabschluss: DIE BILANZ – BILANZPOSITION",
    topic: "DIE BILANZ – BILANZPOSITION",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio, jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.anlagevermoegen-vl-apply',
    conceptId: 'anlagevermoegen',
    title: "Jahresabschluss: DIE BILANZ – BILANZPOSITION — Klausurtyp",
    topic: "DIE BILANZ – BILANZPOSITION — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio, jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.anlagevermoegen.kapitel5-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.anlagevermoegen.kapitel5-pdf.p13.t1-120-000-15-000-105-00"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.umlauf_bewertung_verfahren-vl-pattern',
    conceptId: 'umlauf_bewertung_verfahren',
    title: "Jahresabschluss: 6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
    topic: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT)",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach, jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach","jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.umlauf_bewertung_verfahren-vl-apply',
    conceptId: 'umlauf_bewertung_verfahren',
    title: "Jahresabschluss: 6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT) — Klausurtyp",
    topic: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – FIFO-METHODE (FIRST IN = FIRST OUT) — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach, jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p10.6-2-bewertungsvereinfach","jahresabschluss.umlauf_bewertung_verfahren.kapitel6-1-6-5-pdf.p18.aufwendungen-f-rohstoffe"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.werkstoffe_erzeugnisse_buchungen-vl-pattern',
    conceptId: 'werkstoffe_erzeugnisse_buchungen',
    title: "Jahresabschluss: 6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
    topic: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach, jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach","jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.werkstoffe_erzeugnisse_buchungen-vl-apply',
    conceptId: 'werkstoffe_erzeugnisse_buchungen',
    title: "Jahresabschluss: 6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT — Klausurtyp",
    topic: "6.2 BEWERTUNGSVEREINFACHUNGSVERFAHREN – ÜBERSICHT — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach, jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p07.6-2-bewertungsvereinfach","jahresabschluss.werkstoffe_erzeugnisse_buchungen.kapitel6-1-6-5-pdf.p12.2000-rohstoffe-an-4400-v"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.umlauf_waren_ust-vl-pattern',
    conceptId: 'umlauf_waren_ust',
    title: "Jahresabschluss: S                Umsatzsteuer-Abschlusskonto                                        H",
    topic: "S                Umsatzsteuer-Abschlusskonto                                        H",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss, jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss","jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.umlauf_waren_ust-vl-apply',
    conceptId: 'umlauf_waren_ust',
    title: "Jahresabschluss: S                Umsatzsteuer-Abschlusskonto                                        H — Klausurtyp",
    topic: "S                Umsatzsteuer-Abschlusskonto                                        H — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss, jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p20.s-umsatzsteuer-abschluss","jahresabschluss.umlauf_waren_ust.kapitel6-6-6-7-pdf.p18.2800-bank-833-an-5000-um"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.eigenkapital_kapitalgesellschaften-vl-pattern',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    title: "Jahresabschluss: 1. Entnahme      5,--                                                                 1. Einlage   10,--",
    topic: "1. Entnahme      5,--                                                                 1. Einlage   10,--",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1, jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1","jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.eigenkapital_kapitalgesellschaften-vl-apply',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    title: "Jahresabschluss: 1. Entnahme      5,--                                                                 1. Einlage   10,-- — Klausurtyp",
    topic: "1. Entnahme      5,--                                                                 1. Einlage   10,-- — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1, jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p17.1-entnahme-5-1-einlage-1","jahresabschluss.eigenkapital_kapitalgesellschaften.kapitel7-pdf.p15.100-000-aktien-zum-nennw"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.eigenkapital_personengesellschaften-vl-pattern',
    conceptId: 'eigenkapital_personengesellschaften',
    title: "Jahresabschluss: 7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
    topic: "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge, jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge","jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.eigenkapital_personengesellschaften-vl-apply',
    conceptId: 'eigenkapital_personengesellschaften',
    title: "Jahresabschluss: 7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN — Klausurtyp",
    topic: "7.1 GRUNDLAGEN – KAPITALGESELLSCHAFTEN — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge, jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p05.7-1-grundlagen-kapitalge","jahresabschluss.eigenkapital_personengesellschaften.kapitel7-pdf.p13.7-2-kapitalgesellschafte"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.verbindlichkeiten-vl-pattern',
    conceptId: 'verbindlichkeiten',
    title: "Jahresabschluss: 6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
    topic: "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,--",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung, jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung","jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.verbindlichkeiten-vl-apply',
    conceptId: 'verbindlichkeiten',
    title: "Jahresabschluss: 6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,-- — Klausurtyp",
    topic: "6940 Sonstige Aufwendungen                 an      4890 Übrige sonst. Verb.                                             50.000,-- — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung, jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.verbindlichkeiten.kapitel8-pdf.p12.6940-sonstige-aufwendung","jahresabschluss.verbindlichkeiten.kapitel8-pdf.p05.8-2-verbindlichkeiten-de"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.rueckstellungen-vl-pattern',
    conceptId: 'rueckstellungen',
    title: "Jahresabschluss: DIE BILANZ – BILANZPOSITION",
    topic: "DIE BILANZ – BILANZPOSITION",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio, jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.rueckstellungen-vl-apply',
    conceptId: 'rueckstellungen',
    title: "Jahresabschluss: DIE BILANZ – BILANZPOSITION — Klausurtyp",
    topic: "DIE BILANZ – BILANZPOSITION — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio, jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rueckstellungen.kapitel8-pdf.p03.die-bilanz-bilanzpositio","jahresabschluss.rueckstellungen.kapitel8-pdf.p06.8-2-verbindlichkeiten-be"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.rechnungsabgrenzung-vl-pattern',
    conceptId: 'rechnungsabgrenzung',
    title: "Jahresabschluss: 9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
    topic: "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be, jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be","jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.rechnungsabgrenzung-vl-apply',
    conceptId: 'rechnungsabgrenzung',
    title: "Jahresabschluss: 9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG — Klausurtyp",
    topic: "9. RECHNUNGSABGRENZUNG – BEISPIEL IV: ANTIZIPATIVE AKTIVE RECHNUNGSABGRENZUNG — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be, jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p14.9-rechnungsabgrenzung-be","jahresabschluss.rechnungsabgrenzung.kapitel9-pdf.p08.transitorische-zahlungsv"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.erfolgsrechnung-vl-pattern',
    conceptId: 'erfolgsrechnung',
    title: "Jahresabschluss: 10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
    topic: "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV)",
    method: "VL-Abschnitt(e) lesen, Methode aus Ankern (jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u, jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z) ableiten und mit Kapitelaufgaben abgleichen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u","jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z"],
    difficulty: "mittel",
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: ["VL-Methode mit Übungsblatt-Muster verwechseln","Anker ohne Aufgabenbezug auswendig lernen"],
    gradingRubric: ["Methode korrekt","Rechnung/Notation stimmig","VL-Bezug erkennbar"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  }),
  family({
    id: 'jahresabschluss.taskfamily.erfolgsrechnung-vl-apply',
    conceptId: 'erfolgsrechnung',
    title: "Jahresabschluss: 10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV) — Klausurtyp",
    topic: "10.1 GRUNDLAGEN – GEWINN- UND VERLUSTRECHNUNG (GUV) — Klausurtyp",
    method: "Klausurtyp aus VL (jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u, jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z): Rechen- oder Interpretationsschritte mit Portal-Aufgaben verknüpfen und typische Fehlerquellen prüfen.",
    sourceStatus: "direct-source",
    sourceAnchorIds: ["jahresabschluss.erfolgsrechnung.kapitel10-pdf.p04.10-1-grundlagen-gewinn-u","jahresabschluss.erfolgsrechnung.kapitel10-pdf.p07.die-herstellungskosten-z"],
    difficulty: "schwer",
    expectedTimeMinutes: 12,
    examRelevance: 'hoch',
    commonTraps: ["Zwischenschritte aus der VL überspringen","Ergebnis ohne ökonomische Interpretation abgeben"],
    gradingRubric: ["VL-Methode erkannt","Zwischenschritte vollständig","Ergebnis fachlich interpretiert"],
    currentCoverage: { portalTasks: 'concept tasks', stepProblems: 'partial', mockExam: 'not yet represented' }
  })
];

const OFFICIAL_TASK_SOURCE_FAMILIES = [
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a1-grundlagen-gob',
    conceptId: 'gob_rechtsgrundlagen',
    title: 'Probeklausur Aufgabe 1: Grundlagen & GoB',
    topic: 'Zwecke des Jahresabschlusses, Realisationsprinzip, Vorsichtsprinzip, § 252 HGB',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 1: drei Zwecke des Jahresabschlusses nennen und Realisationsprinzip sowie Vorsichtsprinzip gemäß § 252 HGB erläutern. Die Musterlösung bewertet die Zwecknennung mit 2 Punkten und die GoB-Erläuterung mit 4 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a1.p1.grundlagen-gob',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a1.p1.grundlagen-gob'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Zwecke des Jahresabschlusses nur allgemein als Information beschreiben und Dokumentation, Rechenschaft oder Zahlungsbemessung nicht trennen',
      'Realisationsprinzip mit Zahlungseingang statt Realisation gleichsetzen',
      'Vorsichtsprinzip nur als vorsichtig bewerten wiedergeben, ohne Risiken/Verluste sofort und Gewinne erst bei Realisation zu unterscheiden',
      'Den expliziten § 252 HGB-Bezug der Aufgabenstellung auslassen'
    ],
    gradingRubric: [
      'Aufgabe 1 enthält 6 sichtbare Punkte',
      'Teil a: drei Zwecke wie Dokumentation, Information, Rechenschaft oder Zahlungsbemessung nennen, 2 Punkte',
      'Teil b: Realisationsprinzip als Ertrag erst bei Realisation, nicht bei Zahlung; Vorsichtsprinzip als Risiken und Verluste sofort, Gewinne erst bei Realisation, 4 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 1',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-09'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a2-massgeblichkeit-latente-steuern',
    conceptId: 'gob_rechtsgrundlagen',
    title: 'Probeklausur Aufgabe 2: Maßgeblichkeitsprinzip & latente Steuern',
    topic: 'Maßgeblichkeitsprinzip, Steuerbilanz, steuerliches Aktivierungsverbot, aktive latente Steuern',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 2: Maßgeblichkeitsprinzip samt Ausnahme benennen und erklären, wann aktive latente Steuern entstehen. Die Musterlösung bewertet Maßgeblichkeit und Ausnahme mit 3 Punkten sowie aktive latente Steuern mit 3 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Maßgeblichkeit nur als allgemeine Verbindung von Handels- und Steuerbilanz beschreiben, ohne Handelsbilanz als Grundlage der Steuerbilanz zu nennen',
      'Die Ausnahme steuerliches Aktivierungsverbot nach § 5 Abs. 2 EStG auslassen',
      'Aktive latente Steuern mit passiven latenten Steuern verwechseln',
      'Den temporären Unterschied handelsrechtlicher Aufwand, steuerlich nicht, nicht als Auslöser aktiver latenter Steuern erkennen'
    ],
    gradingRubric: [
      'Aufgabe 2 enthält 6 sichtbare Punkte',
      'Teil a: Maßgeblichkeit als Handelsbilanz -> Grundlage für Steuerbilanz nach § 5 EStG und Ausnahme steuerliches Aktivierungsverbot nach § 5 Abs. 2 EStG, 3 Punkte',
      'Teil b: aktive latente Steuer entsteht bei temporärem Fall handelsrechtlich Aufwand, steuerlich nicht, 3 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 2',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-15'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a3-buchfuehrung-kontenrahmen-belege',
    conceptId: 'buchfuehrung_orga',
    title: 'Probeklausur Aufgabe 3: Buchführung und Kontenrahmen',
    topic: 'Grundbuch, Hauptbuch, Nebenbücher, Kontenrahmen, Kontenplan, Beleganforderungen',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 3: drei Ebenen der Buchführung nennen, Kontenrahmen und Kontenplan unterscheiden und Anforderungen an Belege benennen. Die Musterlösung bewertet jede Teilfrage mit 2 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a3.p1.buchfuehrung-kontenrahmen',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a3.p1.buchfuehrung-belege'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Grundbuch, Hauptbuch und Nebenbücher nicht als drei Ebenen der Buchführung trennen',
      'Kontenrahmen und Kontenplan beide nur als Kontenliste beschreiben, ohne allgemeines System und betriebsindividuelle Konkretisierung zu unterscheiden',
      'Beleganforderungen zu allgemein als Nachweis formulieren und Datum, Betrag, Buchungstext, Nummer oder sachliche Richtigkeit nicht nennen',
      'Die Organisationsfrage mit einer reinen Buchungssatzfrage verwechseln'
    ],
    gradingRubric: [
      'Aufgabe 3 enthält 6 sichtbare Punkte',
      'Teil a: Grundbuch, Hauptbuch und Nebenbücher nennen, 2 Punkte',
      'Teil b: Kontenrahmen als allgemeines System und Kontenplan als betriebsindividuell unterscheiden, 2 Punkte',
      'Teil c: Beleg mit Datum, Betrag, Buchungstext, Nummer und sachlicher Richtigkeit beschreiben, 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 3',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-15'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a4-buchungstechnik-guv',
    conceptId: 'buchen_konten',
    title: 'Probeklausur Aufgabe 4: Buchungstechnik und GuV',
    topic: 'Buchungssatz Barkauf, Aufwandskonten, Ertragskonten, Abschluss der Erfolgskonten',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 4: Barkauf eines PCs für 2.000 € buchen, je zwei typische Aufwands- und Ertragskonten nennen und den Abschluss der Erfolgskonten erklären. Die Musterlösung bewertet jede Teilfrage mit 2 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a4.p1.buchungstechnik-guv',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a4.p1.buchung-guv'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Barkauf des PCs als Aufwand statt als BGA-Aktivierung buchen',
      'Soll/Haben vertauschen und Kasse im Soll statt im Haben erfassen',
      'Aufwands- und Ertragskonten mit Bestandskonten verwechseln',
      'Abschluss der Erfolgskonten beim GuV-Konto stoppen lassen und die Überleitung ins Eigenkapital vergessen'
    ],
    gradingRubric: [
      'Aufgabe 4 enthält 6 sichtbare Punkte',
      'Teil a: 0840 BGA an 1000 Kasse 2.000 € buchen, 2 Punkte',
      'Teil b: typische Aufwandskonten wie Miete und Gehälter sowie Ertragskonten wie Umsatzerlöse und Zinsen nennen, 2 Punkte',
      'Teil c: Erfolgskonten schließen über GuV und anschließend ins Eigenkapital ab, 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 4',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-15'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a5-anlagevermoegen-afa-verkauf',
    conceptId: 'anlagevermoegen',
    title: 'Probeklausur Aufgabe 5: Abschreibung und Anlagenverkauf',
    topic: 'Lineare AfA, Buchwert, Anlagenverkauf, Gewinn/Verlust, Bruttomethode',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 5: jährliche lineare Abschreibung für eine Maschine mit AK 60.000 €, ND 5 Jahre berechnen, beim Verkauf am 01.07.t2 für 35.000 € Buchwert und Gewinn/Verlust ermitteln und den Buchungssatz nach der Bruttomethode angeben. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a5.p1.anlagevermoegen-afa-verkauf',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a5.p1.anlagevermoegen-afa-verkauf'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 8,
    examRelevance: 'hoch',
    commonTraps: [
      'Verkaufszeitpunkt 01.07.t2 als volle drei Jahre statt 2,5 Jahre Nutzungsdauer lesen',
      'Lineare AfA nur für ein Jahr berechnen und den kumulierten Abschreibungsbetrag vergessen',
      'Buchwert und Verkaufspreis vertauschen oder den Gewinn als Verlust ausweisen',
      'Bruttomethode ohne getrennte Konten für Erlöse aus Anlagenabgängen, Anlagenabgang und kumulierte AfA buchen'
    ],
    gradingRubric: [
      'Aufgabe 5 enthält 8 sichtbare Punkte',
      'Teil a: 60.000 € / 5 = 12.000 € jährliche AfA, 2 Punkte',
      'Teil b: 2,5 Jahre AfA = 30.000 €, Buchwert = 30.000 €, Verkaufspreis 35.000 € und Gewinn = 5.000 €, 4 Punkte',
      'Teil c: Bruttomethoden-Buchung mit Bank, Erlöse aus Anlagenabgängen, Anlagenabgang, Maschine und AfA, 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 5',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-08'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a6-vorraete-durchschnitt-fifo',
    conceptId: 'umlauf_bewertung_verfahren',
    title: 'Probeklausur Aufgabe 6: Bewertung von Vorräten',
    topic: 'Durchschnittsmethode, FIFO-Methode, Vorratsverbrauch, Lagerzugänge',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 6: aus drei Lagerzugängen den Verbrauch von 500 Stück nach Durchschnittsmethode und FIFO-Methode ermitteln. Die Musterlösung bewertet Durchschnittspreis und FIFO-Verbrauch getrennt mit jeweils 3 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Durchschnittspreis durch den Verbrauch von 500 Stück statt durch den Gesamtbestand von 600 Stück teilen',
      'Verbrauch und Endbestand verwechseln',
      'FIFO als Verbrauch der neuesten statt der ältesten Lagerzugänge rechnen',
      'Den Durchschnittspreis zu früh runden und dadurch vom Lösungsmuster abweichen'
    ],
    gradingRubric: [
      'Aufgabe 6 enthält 6 sichtbare Punkte',
      'Durchschnitt: (100×10 + 200×12 + 300×13) / 600 = 12,33 € und Verbrauch 500 Stück = 6.165 €, 3 Punkte',
      'FIFO: 100×10 + 200×12 + 200×13 = 6.000 €, 3 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 1',
      task: 'Aufgabe 6',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-08'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a9-rechnungsabgrenzung-arap-miete',
    conceptId: 'rechnungsabgrenzung',
    title: 'Probeklausur Aufgabe 9: Rechnungsabgrenzung mit ARAP',
    topic: 'Aktive Rechnungsabgrenzung, Mietvorauszahlung, Periodenaufwand, Buchungssätze',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 9: eine Mietvorauszahlung von 12.000 € am 01.10.t1 für 12 Monate periodengerecht auf t1 und t2 verteilen und die ARAP-Buchungssätze in t1 und t2 angeben. Die Musterlösung bewertet Aufwandsverteilung mit 2 Punkten und Buchungssätze mit 4 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Zwölf Monate vollständig t1 zuordnen, obwohl ab 01.10.t1 nur drei Monate in t1 liegen',
      'Aktive und passive Rechnungsabgrenzung verwechseln',
      'ARAP nur im Zahlungsjahr buchen und die Auflösung in t2 vergessen',
      'Aufwandskonto und ARAP im Buchungssatz vertauschen'
    ],
    gradingRubric: [
      'Aufgabe 9 enthält 6 sichtbare Punkte',
      'Teil a: t1-Aufwand 3.000 € und t2-Aufwand 9.000 €, 2 Punkte',
      'Teil b: t1-Buchung Zahlung 12.000 € und ARAP-Abgrenzung 9.000 €, danach t2-Auflösung 9.000 €, 4 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 2',
      task: 'Aufgabe 9',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-09'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a10-gkv-ukv',
    conceptId: 'erfolgsrechnung',
    title: 'Probeklausur Aufgabe 10: GKV vs. UKV',
    topic: 'Gesamtkostenverfahren, Umsatzkostenverfahren, Bestandsveränderungen, Periodenzuordnung',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 10: zwei Unterschiede zwischen Gesamtkostenverfahren und Umsatzkostenverfahren nennen und erklären, warum beide Verfahren langfristig zum gleichen Ergebnis führen. Die Musterlösung nennt Bestandsveränderungen und Eigenleistungen beim GKV, verkaufte Produkte beim UKV und die langfristig gleiche Erfolgswirkung durch andere Periodenzuordnung. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a10.p2.gkv-ukv',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a10.p2.gkv-ukv'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 4,
    examRelevance: 'hoch',
    commonTraps: [
      'GKV und UKV nur als Gliederungsnamen wiedergeben, ohne den Bestandsveränderungs-/Verkaufsbezug zu nennen',
      'Eigenleistungen beim GKV vergessen',
      'Langfristig gleiche Erfolgswirkung als identische Periodenergebnisse missverstehen',
      'Umsatzkostenverfahren mit Umsatzsteuer verwechseln'
    ],
    gradingRubric: [
      'Aufgabe 10 enthält 4 sichtbare Punkte',
      'Teil a: GKV mit Bestandsveränderungen und Eigenleistungen sowie UKV mit nur verkauften Produkten abgrenzen, 2 Punkte',
      'Teil b: langfristig gleicher Erfolg durch unterschiedliche Periodenzuordnung, 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 2',
      task: 'Aufgabe 10',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-09'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a8-rueckstellungen-verbindlichkeiten',
    conceptId: 'rueckstellungen',
    title: 'Probeklausur Aufgabe 8: Rückstellungen und Verbindlichkeiten',
    topic: 'Rückstellungsansatz, Rückstellungsauflösung, Fremdwährungsverbindlichkeiten, Imparitätsprinzip',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 8: Rückstellungen definieren und Pflicht zur Bildung nennen, eine Rückstellung über 10.000 € bei Auszahlung von 7.000 € im Folgejahr auflösen und Fremdwährungsverbindlichkeiten zum Bilanzstichtag bewerten. Die Musterlösung bewertet die drei Teilfragen jeweils mit 2 Punkten. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Rückstellungen mit sicheren Verbindlichkeiten gleichsetzen und die Ungewissheit der Höhe vergessen',
      'Bei Auszahlung von 7.000 € die verbleibenden 3.000 € nicht als Ertrag aus Rückstellungsauflösung buchen',
      'Fremdwährungsverbindlichkeiten mit dem niedrigeren statt dem höheren Erfüllungsbetrag bewerten',
      'Das Imparitätsprinzip nur nennen, ohne die Kurs-/Erfüllungsbetragsfolge zu erklären'
    ],
    gradingRubric: [
      'Aufgabe 8 enthält 6 sichtbare Punkte',
      'Teil a: wahrscheinliche, wirtschaftlich belastende Verpflichtung mit ungewisser Höhe, 2 Punkte',
      'Teil b: Rückstellung an Bank 7.000 € und Rückstellung an Ertrag Rückstellungsauflösung 3.000 €, 2 Punkte',
      'Teil c: höherer Kurs bedeutet höherer Erfüllungsbetrag; Bewertung mit dem höheren Betrag nach Imparitätsprinzip, 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'jeweils Seite 2',
      task: 'Aufgabe 8',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-09'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.probeklausur-jahresabschluss-a7-eigenkapitalgliederung',
    conceptId: 'eigenkapital_kapitalgesellschaften',
    title: 'Probeklausur Aufgabe 7: Eigenkapitalgliederung',
    topic: 'Eigenkapitalgliederung, Kapitalrücklage, Gewinnrücklage, Gewinnverteilung bei Personengesellschaften',
    method: 'Offizielle Probeklausur Jahresabschluss, Aufgabe 7: Eigenkapital bei Kapitalgesellschaften nach § 266 HGB gliedern, Kapitalrücklage von Gewinnrücklage unterscheiden und Gewinnverteilung bei Personengesellschaften benennen. Die Musterlösung bewertet die drei Teilfragen jeweils mit 2 Punkten; der Lösungstext zu Teil b/c läuft über den Seitenwechsel von Seite 1 auf Seite 2. Quelle und Musterlösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.probeklausur-jahresabschluss.a7.p1.eigenkapitalgliederung',
      'jahresabschluss.musterloesung-probeklausur-jahresabschluss.a7.p1-p2.eigenkapitalgliederung'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 6,
    examRelevance: 'hoch',
    commonTraps: [
      'Eigenkapitalgliederung nach § 266 HGB unvollständig wiedergeben',
      'Kapitalrücklage und Gewinnrücklage beide nur als Rücklage bezeichnen, ohne Agio bzw. thesaurierten Gewinn zu trennen',
      'Gewinnverteilung bei Personengesellschaften wie bei Kapitalgesellschaften behandeln',
      'Gesellschaftsvertrag und HGB-Vorschriften als maßgebliche Verteilungsgrundlage vergessen'
    ],
    gradingRubric: [
      'Aufgabe 7 enthält 6 sichtbare Punkte',
      'Teil a: Gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Gewinn-/Verlustvortrag und Jahresüberschuss nennen, 2 Punkte',
      'Teil b: Kapitalrücklage z. B. Agio bei Kapitalerhöhung; Gewinnrücklage als thesaurierter Gewinn, 2 Punkte',
      'Teil c: Gewinnverteilung nach Gesellschaftsvertrag oder HGB-Vorschriften (§ 121 HGB), 2 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf + Musterloesung_Probeklausur_Jahresabschluss.pdf',
      page: 'Aufgabe Seite 1; Musterlösung Seiten 1-2',
      task: 'Aufgabe 7',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-09'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.tutorium-kapitel3-a1-bestandskonten',
    conceptId: 'buchen_konten',
    title: 'Tutorium Kapitel 3 Aufgabe 1: Buchen auf Bestandskonten',
    topic: 'Aktivkonten, Passivkonten, Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung, Aktiv-Passiv-Minderung, Rohstoff-Barkauf',
    method: 'Offizielles Tutorium Kapitel 3, Aufgabe 1: Aktiv- und Passivkonten nach Buchung und Saldo unterscheiden, Beispiele für vier bilanzielle Wertbewegungen nennen und den Barkauf von Rohstoffen im Wert von 2.000 € buchen. Die Tutoriumslösung bewertet die Teilfragen mit 3, 4 und 3 Punkten. Quelle und Lösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.tutorium-kapitel3.a1.p1.bestandskonten',
      'jahresabschluss.tutorium-kapitel3.loesung-a1.p1.bestandskonten'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: [
      'Aktivkonten und Passivkonten mit gleicher Soll/Haben-Logik behandeln',
      'Saldo-Seite bei Aktiv- und Passivkonten vertauschen',
      'Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung und Aktiv-Passiv-Minderung nicht sauber trennen',
      'Barkauf von Rohstoffen als Rohstoffe an Verbindlichkeiten statt Rohstoffe an Kasse buchen'
    ],
    gradingRubric: [
      'Aufgabe 1 enthält 10 sichtbare Punkte',
      'Teil a: Aktivkonten mit Zugängen im Soll, Abgängen im Haben und Saldo im Haben sowie Passivkonten spiegelbildlich erklären, 3 Punkte',
      'Teil b: je ein Beispiel für Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung und Aktiv-Passiv-Minderung nennen, 4 Punkte',
      'Teil c: Barkauf von Rohstoffen als 2.000 € Rohstoffe an Kasse buchen, 3 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf',
      page: 'Seite 1',
      task: 'Aufgabe 1',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-15'
    },
    officialTaskCoverage: 'official-task-source'
  }),
  family({
    id: 'jahresabschluss.official-task.tutorium-kapitel3-a2-erfolgskonten-guv',
    conceptId: 'erfolgsrechnung',
    title: 'Tutorium Kapitel 3 Aufgabe 2: Erfolgskonten und GuV-Abschluss',
    topic: 'Aufwandskonten, Ertragskonten, GuV-Abschluss, Eigenkapitalabschluss, Gehaltsaufwand, Zinserträge',
    method: 'Offizielles Tutorium Kapitel 3, Aufgabe 2: Aufwands- und Ertragskonten unterscheiden, den Abschluss von Erfolgskonten über das GuV-Konto erklären und die Zahlung von Gehältern sowie den Geldeingang aus Zinserträgen buchen. Die Lösung bewertet die Teilfragen mit 3, 4 und 3 Punkten; der Lösungsteil c steht nach dem Seitenwechsel auf Seite 2. Quelle und Lösung wurden per nativer Textextraktion und visuellem Seitenrender gegengeprüft.',
    sourceStatus: 'direct-source',
    sourceAnchorIds: [
      'jahresabschluss.tutorium-kapitel3.a2.p1.erfolgskonten-guv',
      'jahresabschluss.tutorium-kapitel3.loesung-a2.p1-p2.erfolgskonten-guv'
    ],
    difficulty: 'mittel',
    expectedTimeMinutes: 10,
    examRelevance: 'hoch',
    commonTraps: [
      'Aufwandskonten und Ertragskonten nur als Kontoarten benennen, ohne Eigenkapitalminderung bzw. Eigenkapitalmehrung zu erklären',
      'Beim Abschluss der Erfolgskonten den Saldo der GuV nicht ins Eigenkapital übertragen',
      'Gehaltszahlung als Bank an Gehaltsaufwand statt Gehaltsaufwand an Bank buchen',
      'Zinsertragseingang als Zinserträge an Bank statt Bank an Zinserträge buchen'
    ],
    gradingRubric: [
      'Aufgabe 2 enthält 10 sichtbare Punkte',
      'Teil a: Aufwandskonten als Werteverzehr/Eigenkapitalminderung und Ertragskonten als Wertezuwachs/Eigenkapitalmehrung erklären, 3 Punkte',
      'Teil b: Erfolgskonten über GuV abschließen und den GuV-Saldo auf Eigenkapital übertragen, 4 Punkte',
      'Teil c: 3.000 € Gehaltsaufwand an Bank und 500 € Bank an Zinserträge buchen, 3 Punkte'
    ],
    currentCoverage: {
      source: 'Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf',
      page: 'Aufgabe Seite 1; Lösung Seiten 1-2',
      task: 'Aufgabe 2',
      review: 'Native pdftotext extraction + visual page render review, 2026-06-15'
    },
    officialTaskCoverage: 'official-task-source'
  })
];

const OFFICIAL_DOCUMENT_FAMILIES = [
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielle Klausur: Musterloesung_Probeklausur_Jahresabschluss.pdf",
    topic: "exam",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-exam-jahresabschluss-probeklausur-musterloesung-probeklausur-jahresabschluss",
    registryPath: "Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf",
    registryKind: "exam"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-ja',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielle Klausur: Probeklausur_JA.pdf",
    topic: "exam",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Probeklausur/Probeklausur_JA.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Probeklausur/Probeklausur_JA.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-ja",
    registryPath: "Jahresabschluss/Probeklausur/Probeklausur_JA.pdf",
    registryKind: "exam"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielle Klausur: Probeklausur_Jahresabschluss.pdf",
    topic: "exam",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-exam-jahresabschluss-probeklausur-probeklausur-jahresabschluss",
    registryPath: "Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf",
    registryKind: "exam"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel1',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel1.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel1.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel1.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel1",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel1.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel10',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel10.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel10.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel10.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel10",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel10.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel2',
    module: 'jahresabschluss',
    conceptId: 'gob_rechtsgrundlagen',
    title: "Offizielles Tutorium: Tutorium_Kapitel2.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel2.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel2.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel2",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel2.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel3',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel3.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel3",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel4',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel4.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel4.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel4.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel4",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel4.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel5',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel5.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel5.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel5.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel5",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel5.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel6',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel6.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel6.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel6.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel6",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel6.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel7',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel7.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel7.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel7.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel7",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel7.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel8',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel8.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel8.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel8.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel8",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel8.pdf",
    registryKind: "tutorial"
  },
  {
    id: 'jahresabschluss.official-doc.jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel9',
    module: 'jahresabschluss',
    conceptId: 'rechnungswesen_intro',
    title: "Offizielles Tutorium: Tutorium_Kapitel9.pdf",
    topic: "tutorial",
    method: "Offizielles Dokument im Korpus: Jahresabschluss/Tutorium/Tutorium_Kapitel9.pdf. Item-level Aufgaben-Mapping nur nach OCR/Review als official-task-source.",
    sourceStatus: 'direct-source',
    sourceAnchorIds: [],
    difficulty: 'offen',
    expectedTimeMinutes: null,
    examRelevance: 'hoch',
    commonTraps: ['Dokument-Registry mit extrahierten Einzelaufgaben verwechseln'],
    gradingRubric: ['Nur Metadaten bis OCR/Review'],
    currentCoverage: { registry: "Jahresabschluss/Tutorium/Tutorium_Kapitel9.pdf", mapping: 'document-level' },
    officialTaskCoverage: 'official-document-registry',
    officialTaskGap: "Nur Dokument-Metadaten wurden ingestiert. Aufgabenfamilien bleiben bis zu explizitem Task-Mapping als Platzhalter markiert.",
    registryDocumentId: "jahresabschluss-tutorial-jahresabschluss-tutorium-tutorium-kapitel9",
    registryPath: "Jahresabschluss/Tutorium/Tutorium_Kapitel9.pdf",
    registryKind: "tutorial"
  }
];

export const TASK_FAMILIES = Object.freeze([
  ...VL_GROUNDED_FAMILIES,
  ...OFFICIAL_TASK_SOURCE_FAMILIES,
  ...OFFICIAL_DOCUMENT_FAMILIES,
  ...buildJahresabschlussOfficialTaskPlaceholders([]).map((placeholder) => familyFromPlaceholder(placeholder))
]);

export const TASK_FAMILIES_BY_CONCEPT = Object.freeze(
  TASK_FAMILIES.reduce((acc, item) => {
    if (!acc[item.conceptId]) acc[item.conceptId] = [];
    acc[item.conceptId].push(item);
    return acc;
  }, {})
);
