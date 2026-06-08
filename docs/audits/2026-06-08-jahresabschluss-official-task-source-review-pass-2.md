# Jahresabschluss Official Task Source Review Pass 2

Date: 2026-06-08

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 6. The longer `Probeklausur_JA.pdf` remains document-level inventory until a matching solution and item-level review are completed.

## Native Text Check

Command-level review used `pdftotext -layout -f 1 -l 1` on both PDFs.

Prompt text confirmed:

- `Aufgabe 6: Bewertung von Vorräten (6 Punkte)`
- Lagerzugänge: `100 Stück à 10 €`, `200 Stück à 12 €`, `300 Stück à 13 €`
- required methods: Durchschnittsmethode and FIFO-Methode

Solution text confirmed:

- Durchschnitt method: `(100×10 + 200×12 + 300×13)/600 = 12,33 € × 500 = 6.165 €`
- FIFO method: `100×10 + 200×12 + 200×13 = 1.000 + 2.400 + 2.600 = 6.000 €`
- visible grading split: 3 points for Durchschnitt, 3 points for FIFO

## Visual Page Check

Rendered page 1 of both source PDFs with `pdftoppm` and visually checked the rendered PNGs.

Visual review confirmed that:

- Aufgabe 6 appears on page 1 of the Probeklausur PDF.
- Aufgabe 6 solution appears on page 1 of the Musterlösung PDF.
- The visible task title, method requirements, stock movement quantities, and point totals match native extraction.
- The solution page confirms the same numerical route and point allocation.

Temporary render files were kept under `tmp/source-checks/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a6-vorraete-durchschnitt-fifo`

Mapped concept:

- `umlauf_bewertung_verfahren`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a6.p1.vorraete-durchschnitt-fifo`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the existing source-backed archive.

This pass does not infer additional variants, substitute methods, or professor-specific expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform-added drills for Vorräte remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
