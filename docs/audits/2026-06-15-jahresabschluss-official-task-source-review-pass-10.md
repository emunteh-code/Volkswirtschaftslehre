# Jahresabschluss Official Task Source Review Pass 10

Date: 2026-06-15

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 4. It completes item-level mapping for Aufgaben 1-10 of this Probeklausur/Musterlösung pair, but it does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout` on both PDFs and extracted the Aufgabe 4 block from page 1.

Prompt text confirmed:

- `Aufgabe 4: Buchungstechnik und GuV (6 Punkte)`
- part a asks for the booking of a cash purchase of a PC for 2.000 EUR
- part b asks for two typical expense accounts and two typical revenue accounts
- part c asks how success accounts are closed
- visible grading split: 2 points per subpart

Solution text confirmed:

- part a: `0840 BGA an 1000 Kasse 2.000 €`
- part b: expense examples Miete and Gehälter; revenue examples Umsatzerlöse and Zinsen
- part c: Erfolgskonten close through GuV and then Eigenkapital
- visible grading split: 2 points per subpart

## Visual Page Check

Rendered page 1 of the Probeklausur PDF and page 1 of the Musterlösung PDF with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 4 appears on page 1 of the Probeklausur PDF.
- Aufgabe 4 solution appears on page 1 of the Musterlösung PDF.
- The visible title, subparts, booking sentence, account examples, GuV/Eigenkapital closure, and point totals match native extraction.

Temporary render files were kept under `tmp/pdfs/ja-pass10/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a4-buchungstechnik-guv`

Mapped primary concept:

- `buchen_konten`

Cross-topic content:

- `erfolgsrechnung`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a4.p1.buchungstechnik-guv`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a4.p1.buchung-guv`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add extra booking variants, account-number systems, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform explanations for booking technique and GuV closure remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
