# Jahresabschluss Official Task Source Review Pass 3

Date: 2026-06-09

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 9. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout -f 2 -l 2` on both PDFs.

Prompt text confirmed:

- `Aufgabe 9: Rechnungsabgrenzung (6 Punkte)`
- upfront rent payment on `01.10.t1` of `12.000 €` for `12 Monate`
- part a asks for the expense share in `t1` and `t2`
- part b asks for ARAP booking entries in `t1` and `t2`

Solution text confirmed:

- `t1 = 3.000 €`, `t2 = 9.000 €`
- `t1: 6710 Aufwand an 2800 Bank 12.000 €`
- `2900 ARAP an 6710 9.000 €`
- `t2: 6710 an 2900 ARAP 9.000 €`
- visible grading split: 2 points for period allocation and 4 points for booking entries

## Visual Page Check

Rendered page 2 of both source PDFs with `pdftoppm` and visually checked the rendered PNGs.

Visual review confirmed that:

- Aufgabe 9 appears on page 2 of the Probeklausur PDF.
- Aufgabe 9 solution appears on page 2 of the Musterlösung PDF.
- The visible task title, rental prepayment facts, ARAP requirement, and point totals match native extraction.
- The solution page confirms the period allocation and booking route.

Temporary render files were kept under `tmp/source-checks/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a9-rechnungsabgrenzung-arap-miete`

Mapped concept:

- `rechnungsabgrenzung`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a9.p2.rechnungsabgrenzung-arap-miete`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not invent alternative ARAP cases, legal commentary, or grading rules beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform-added drills for Rechnungsabgrenzung remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
