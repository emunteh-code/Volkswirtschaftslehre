# Jahresabschluss Official Task Source Review Pass 6

Date: 2026-06-09

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 7. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout -f 1 -l 2` on both PDFs because the solution for Aufgabe 7 crosses the page break.

Prompt text confirmed:

- `Aufgabe 7: Eigenkapitalgliederung (6 Punkte)`
- part a asks for the Eigenkapitalgliederung bei Kapitalgesellschaften under `§ 266 HGB`
- part b asks for the difference between Kapitalrücklage and Gewinnrücklage
- part c asks how profits are distributed at Personengesellschaften

Solution text confirmed:

- part a: Gezeichnetes Kapital, Kapitalrücklage, Gewinnrücklagen, Gewinn/Verlustvortrag, Jahresüberschuss
- part b: Kapitalrücklage as example Agio bei Kapitalerhöhung; Gewinnrücklage as thesaurierter Gewinn
- part c: distribution by Gesellschaftsvertrag or HGB rules, including `§ 121 HGB`
- visible grading split: 2 points per subpart

## Visual Page Check

Rendered page 1 of the Probeklausur PDF and pages 1-2 of the Musterlösung PDF with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 7 appears on page 1 of the Probeklausur PDF.
- Aufgabe 7 solution starts on page 1 of the Musterlösung PDF.
- The Gewinnrücklage and Gesellschaftsvertrag / HGB solution lines continue on page 2 of the Musterlösung PDF.
- The visible title, subparts, source terms, and point totals match native extraction.

Temporary render files were kept under `tmp/source-checks/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a7-eigenkapitalgliederung`

Mapped primary concept:

- `eigenkapital_kapitalgesellschaften`

Cross-topic content:

- `eigenkapital_personengesellschaften`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a7.p1.eigenkapitalgliederung`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a7.p1-p2.eigenkapitalgliederung`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add additional Eigenkapital examples, corporate-law commentary, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform-added explanations for Eigenkapital remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
