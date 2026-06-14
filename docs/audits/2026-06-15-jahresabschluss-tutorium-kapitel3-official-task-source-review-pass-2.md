# Jahresabschluss Tutorium Kapitel 3 Official Task Source Review Pass 2

Date: 2026-06-15

## Scope

Reviewed one additional item-level task from the official Jahresabschluss Tutorium corpus:

- `source-materials/Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf`

This pass maps only Aufgabe 2. Aufgabe 1 was already mapped in the prior pass and is not modified here.

## Native Text Check

Command-level review used `pdftotext -layout` and extracted the Aufgabe 2 block. The solution crosses the page break between pages 1 and 2.

Prompt text confirmed:

- `Aufgabe 2: Erfolgskonten und GuV-Abschluss (10 Punkte)`
- part a asks for the difference between Aufwands- and Ertragskonten
- part b asks how Erfolgskonten are closed via the GuV account
- part c asks for complete bookings for salary payment of 3.000 EUR and cash receipt from interest income of 500 EUR
- visible grading split: 3, 4 and 3 points

Solution text confirmed:

- Aufwandskonten capture Werteverzehr and reduce equity
- Ertragskonten capture Wertezuwachs and increase equity
- closing entries: Aufwandskonto an GuV; GuV an Ertragskonto; GuV balance is transferred to Eigenkapitalkonto
- booking entries: `3.000 € Gehaltsaufwand an Bank` and `500 € Bank an Zinserträge`

## Visual Page Check

Rendered pages 1 and 2 of `Tutorium_Kapitel3.pdf` with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 2 prompt and solution parts a/b appear on page 1.
- Solution part c appears on page 2.
- The task title, subparts, solution logic, booking entries and point totals match native extraction.

Temporary render files were kept under `tmp/pdfs/ja-tutorium-k3-a2/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.tutorium-kapitel3-a2-erfolgskonten-guv`

Mapped primary concept:

- `erfolgsrechnung`

Added source anchors:

- `jahresabschluss.tutorium-kapitel3.a2.p1.erfolgskonten-guv`
- `jahresabschluss.tutorium-kapitel3.loesung-a2.p1-p2.erfolgskonten-guv`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified Tutorium task family to the source-backed archive.

This pass does not add extra account examples, alternative booking routes, or grading expectations beyond the visible Tutorium task and solution evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- Other Tutorium PDFs remain document-level until separately reviewed.
- Existing platform-added explanations for Erfolgskonten and GuV closure remain useful, but only this newly mapped family is marked as direct official Tutorium task coverage.
