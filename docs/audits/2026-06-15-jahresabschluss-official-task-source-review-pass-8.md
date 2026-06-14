# Jahresabschluss Official Task Source Review Pass 8

Date: 2026-06-15

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 2. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout` on both PDFs and extracted the Aufgabe 2 block from page 1.

Prompt text confirmed:

- `Aufgabe 2: Maßgeblichkeitsprinzip & latente Steuern (6 Punkte)`
- part a asks what the Maßgeblichkeitsprinzip says and which exceptions exist
- part b asks when active latent taxes arise
- visible grading split: 3 points for part a and 3 points for part b

Solution text confirmed:

- Maßgeblichkeit: Handelsbilanz is the basis for Steuerbilanz under `§ 5 EStG`
- exception: steuerliches Aktivierungsverbot under `§ 5 Abs. 2 EStG`
- active latent tax trigger: handelsrechtlich Aufwand, steuerlich nicht, temporarily
- visible grading split: 3 points for part a and 3 points for part b

## Visual Page Check

Rendered page 1 of the Probeklausur PDF and page 1 of the Musterlösung PDF with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 2 appears on page 1 of the Probeklausur PDF.
- Aufgabe 2 solution appears on page 1 of the Musterlösung PDF.
- The visible title, subparts, legal references, answer terms, and point totals match native extraction.

Temporary render files were kept under `tmp/pdfs/ja-pass8/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a2-massgeblichkeit-latente-steuern`

Mapped primary concept:

- `gob_rechtsgrundlagen`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a2.p1.massgeblichkeit-latente-steuern`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add tax-law commentary, extra examples, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform explanations for Maßgeblichkeit and latente Steuern remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
