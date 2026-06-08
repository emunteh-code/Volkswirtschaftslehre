/**
 * Fleet-wide exam labeling — honest defaults until OCR + human review promotes items.
 * See docs/architecture/official-exam-policy.md
 */
export const PLATFORM_EXAM_DISCLOSURE = Object.freeze({
  sourceStatus: "platform-added-drill",
  officialTaskCoverage: "missing-official-task-source",
  sourceLabel: "Plattform-Übung",
  officialTaskLabel: "Simulation — keine offizielle Klausur",
  sourceNote:
    "Diese Klausur ist eine portal-authored Plattform-Simulation aus source-backed Themenfamilien. Sie ist nicht aus einer offiziellen Probeklausur, Altklausur oder einem Lösungsschlüssel rekonstruiert.",
  sourceEvidence: "Fleet officialTaskSourceFamilies: 0 (Stand: OCR-Backlog, Human Review ausstehend)."
});

export const QUICK_EXAM_DISCLOSURE = Object.freeze({
  sourceLabel: "Plattform-Schnelltest",
  officialTaskLabel: "Übung — keine offizielle Klausur",
  sourceNote:
    "Der Schnelltest misst Transfer aus Konzept-Drills. Er ersetzt keine offizielle Probeklausur."
});

export const OFFICIAL_TASK_COVERAGE_LABELS = Object.freeze({
  "official-task-source": "Offizielle Aufgabe (geprüft)",
  "missing-official-task-source": "Plattform-Übung",
  "official-document-registry": "Dokument-Register (kein Item-Mapping)",
  "module-mismatch-review-needed": "Modulzuordnung prüfen"
});

export function withPlatformExamDisclosure(exam) {
  if (!exam || typeof exam !== "object") return exam;
  return {
    ...PLATFORM_EXAM_DISCLOSURE,
    ...exam,
    sourceNote: exam.sourceNote || PLATFORM_EXAM_DISCLOSURE.sourceNote,
    officialTaskLabel: exam.officialTaskLabel || PLATFORM_EXAM_DISCLOSURE.officialTaskLabel
  };
}

export function officialTaskCoverageLabel(coverage) {
  if (!coverage) return "";
  return OFFICIAL_TASK_COVERAGE_LABELS[coverage] || coverage;
}

export const FULL_EXAM_HOME_DESCRIPTION =
  "Plattform-Simulationen — keine offiziellen Klausur-PDFs";

export const FULL_EXAM_SELECT_INTRO =
  "Wähle eine Plattform-Simulation (Probeklausur-Format). Jede Übung bündelt mehrere Konzepte in einem zusammenhängenden Block. Dauer, Teilfragen und Punkte helfen bei der Planung; Musterlösungen dienen zur Nacharbeit. Offizielle Klausur-PDFs liegen nur lokal im Kurs — sie sind nicht item-für-item ins Portal übernommen.";
