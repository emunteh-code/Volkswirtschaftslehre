# Jahresabschluss Official Task Source Review Pass 4

Date: 2026-06-09

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 10. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout -f 2 -l 2` on both PDFs.

Prompt text confirmed:

- `Aufgabe 10: GKV vs. UKV (4 Punkte)`
- part a asks for two differences between Gesamtkostenverfahren and Umsatzkostenverfahren
- part b asks why both procedures lead to the same result in the long run

Solution text confirmed:

- GKV includes Bestandsveränderungen and Eigenleistungen
- UKV covers only sold products
- long-run result equivalence is explained by different period allocation
- visible grading split: 2 points for the GKV/UKV differences and 2 points for the long-run result explanation

## Visual Page Check

Rendered page 2 of both source PDFs with `pdftoppm` and visually checked the rendered PNGs.

Visual review confirmed that:

- Aufgabe 10 appears on page 2 of the Probeklausur PDF.
- Aufgabe 10 solution appears on page 2 of the Musterlösung PDF.
- The visible task title, procedure names, wording, and point totals match native extraction.
- The solution page confirms the same GKV/UKV distinction and period-allocation explanation.

Temporary render files were kept under `tmp/source-checks/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a10-gkv-ukv`

Mapped concept:

- `erfolgsrechnung`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a10.p2.gkv-ukv`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a10.p2.gkv-ukv`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add alternative GKV/UKV examples, legal commentary, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform-added explanations for Erfolgsrechnung remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
