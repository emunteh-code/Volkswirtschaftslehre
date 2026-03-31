// ============================================================
// CONCEPT LINKS — Recht
// FINAL BENCHMARK STANDARD v14.0
// ============================================================

export const CONCEPT_LINKS = {
  rechtsgeschaeft: { uses: [], usedBy: ['vertretung', 'leistungsstoerung', 'kaufrecht'] },
  vertretung:      { uses: ['rechtsgeschaeft'], usedBy: [] },
  leistungsstoerung: { uses: ['rechtsgeschaeft'], usedBy: ['kaufrecht'] },
  kaufrecht:       { uses: ['rechtsgeschaeft', 'leistungsstoerung'], usedBy: [] },
  delikt:          { uses: [], usedBy: [] },
  besitz:          { uses: [], usedBy: [] }
};
