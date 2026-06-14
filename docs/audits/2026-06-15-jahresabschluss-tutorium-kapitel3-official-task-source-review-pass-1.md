# Jahresabschluss Tutorium Kapitel 3 Official Task Source Review Pass 1

Date: 2026-06-15

## Scope

Reviewed one item-level task from the official Jahresabschluss Tutorium corpus:

- `source-materials/Jahresabschluss/Tutorium/Tutorium_Kapitel3.pdf`

This pass maps only Aufgabe 1. Aufgabe 2 appears on the same rendered page, but remains unpromoted until separately reviewed and mapped.

## Native Text Check

Command-level review used `pdftotext -layout` and extracted the Aufgabe 1 block from page 1.

Prompt text confirmed:

- `Aufgabe 1: Buchen auf Bestandskonten (10 Punkte)`
- part a asks for the difference between Aktiv- and Passivkonten in booking and balance
- part b asks for examples of Aktivtausch, Passivtausch, Aktiv-Passiv-Mehrung and Aktiv-Passiv-Minderung
- part c asks for the booking sentence for a cash purchase of raw materials worth 2.000 EUR
- visible grading split: 3, 4 and 3 points

Solution text confirmed:

- Aktivkonten: additions in Soll, disposals in Haben, balance in Haben
- Passivkonten: additions in Haben, disposals in Soll, balance in Soll
- examples: Kasse an Bank, Verbindlichkeiten an Darlehen, Rohstoffe an Verbindlichkeiten, Verbindlichkeiten an Bank
- booking sentence: `2000 € Rohstoffe an Kasse`

## Visual Page Check

Rendered page 1 of `Tutorium_Kapitel3.pdf` with `pdftoppm`.

Visual review confirmed that:

- Aufgabe 1 and its solution both appear on page 1.
- The task title, subparts, solution terms, booking examples, booking sentence and point totals match native extraction.
- Aufgabe 2 starts below the reviewed block but is not promoted in this pass.

Temporary render files were kept under `tmp/pdfs/ja-tutorium-k3-a1/` only during review and are not part of the committed corpus.

## Portal Mapping

Added task family:

- `jahresabschluss.official-task.tutorium-kapitel3-a1-bestandskonten`

Mapped primary concept:

- `buchen_konten`

Added source anchors:

- `jahresabschluss.tutorium-kapitel3.a1.p1.bestandskonten`
- `jahresabschluss.tutorium-kapitel3.loesung-a1.p1.bestandskonten`

Source status:

- `direct-source`

Coverage status:

- `official-task-source`

## Non-Claims

This pass does not claim that Jahresabschluss is exam-bank complete. It adds one verified Tutorium task family to the source-backed archive.

This pass does not add extra booking examples, account-number conventions, or grading expectations beyond the visible Tutorium task and solution evidence.

## Remaining Risks

- Jahresabschluss still has official document-registry placeholders that need item-level extraction and visual review.
- Aufgabe 2 in `Tutorium_Kapitel3.pdf` remains document-level until separately reviewed.
- Existing platform-added explanations for Bestandskonten remain useful, but only this newly mapped family is marked as direct official Tutorium task coverage.
