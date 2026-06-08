# Jahresabschluss Official Task Source Review Pass 5

Date: 2026-06-09

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 8. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout -f 2 -l 2` on both PDFs.

Prompt text confirmed:

- `Aufgabe 8: Rückstellungen und Verbindlichkeiten (6 Punkte)`
- part a asks what Rückstellungen are and when formation is mandatory
- part b asks for the release of a `10.000 €` Rückstellung when `7.000 €` is paid in the following year
- part c asks how foreign-currency liabilities are measured at the balance-sheet date

Solution text confirmed:

- Rückstellung criteria: likely obligation, economic burden, uncertain amount
- booking route: `3020 Rückstellung an Bank 7.000 €`
- booking route: `3020 an 5490 Ertrag Rückstellungsauflösung 3.000 €`
- foreign-currency liability valuation: higher exchange rate means higher settlement amount, so value at the higher amount under Imparitätsprinzip
- visible grading split: 2 points per subpart

## Visual Page Check

Rendered page 2 of both source PDFs with `pdftoppm` and visually checked the rendered PNGs.

Visual review confirmed that:

- Aufgabe 8 appears on page 2 of the Probeklausur PDF.
- Aufgabe 8 solution appears on page 2 of the Musterlösung PDF.
- The visible task title, three subparts, amounts, and point totals match native extraction.
- The solution page confirms the same criteria, two booking lines, foreign-currency valuation rule, and 2/2/2 grading pattern.

Temporary render files were kept under `tmp/source-checks/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a8-rueckstellungen-verbindlichkeiten`

Mapped primary concept:

- `rueckstellungen`

Cross-topic content:

- `verbindlichkeiten`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a8.p2.rueckstellungen-verbindlichkeiten`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add additional Rückstellungsarten, foreign-currency cases, legal commentary, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform-added explanations for Rückstellungen and Verbindlichkeiten remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
