# Jahresabschluss Official Task Source Review Pass 7

Date: 2026-06-09

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Probeklausur pair:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`
- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

This pass maps only Aufgabe 1. It does not promote the longer `Probeklausur_JA.pdf`, which remains document-level inventory until separately reviewed with matching solution evidence.

## Native Text Check

Command-level review used `pdftotext -layout` on both PDFs and extracted the Aufgabe 1 block from page 1.

Prompt text confirmed:

- `Aufgabe 1: Grundlagen & GoB (6 Punkte)`
- part a asks for three purposes of the Jahresabschluss
- part b asks for Realisationsprinzip and Vorsichtsprinzip under `§ 252 HGB`
- visible grading split: 2 points for part a and 4 points for part b

Solution text confirmed:

- part a: Dokumentation, Information, Rechenschaft, Zahlungsbemessung
- part b: Realisationsprinzip means revenue only at realization, not payment
- part b: Vorsichtsprinzip means risks and losses immediately, profits only at realization
- visible grading split: 2 points for part a and 4 points for part b

## Visual Page Check

Rendered page 1 of the Probeklausur PDF and page 1 of the Musterlösung PDF with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 1 appears on page 1 of the Probeklausur PDF.
- Aufgabe 1 solution appears on page 1 of the Musterlösung PDF.
- The visible task title, subparts, `§ 252 HGB` reference, answer terms, and point totals match native extraction.

Temporary render files were kept under `tmp/pdfs/ja-pass7/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a1-grundlagen-gob`

Mapped primary concept:

- `gob_rechtsgrundlagen`

Added source anchors:

- `jahresabschluss.probeklausur-jahresabschluss.a1.p1.grundlagen-gob`
- `jahresabschluss.musterloesung-probeklausur-jahresabschluss.a1.p1.grundlagen-gob`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified official task family to the source-backed archive.

This pass does not add extra GoB doctrine, purposes, or grading expectations beyond the visible Probeklausur and Musterlösung evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- The longer `Probeklausur_JA.pdf` has not been paired with a reviewed solution and should not be merged into this task mapping until separately audited.
- Existing platform explanations for GoB and Rechtsgrundlagen remain useful, but only this newly mapped family is marked as direct official Probeklausur task coverage.
