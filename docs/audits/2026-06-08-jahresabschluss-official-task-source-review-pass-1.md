# Jahresabschluss official-task-source review — pass 1 — 2026-06-08

## Scope

Start the item-level official-task-source promotion workflow for
`jahresabschluss`, which previously had official document-registry entries but
zero reviewed official-task-source families.

This pass promotes exactly one task family from an official Probeklausur /
Musterlösung pair. It does not certify the whole Jahresabschluss exam bank.

## Sources reviewed

Official task:

- `source-materials/Jahresabschluss/Probeklausur/Probeklausur_Jahresabschluss.pdf`

Official solution:

- `source-materials/Jahresabschluss/Probeklausur/Musterloesung_Probeklausur_Jahresabschluss.pdf`

The longer `Probeklausur_JA.pdf` is a different 19-page / 90-point document and
was **not** mixed with this solution file.

## Native text check

`pdftotext -layout` on `Probeklausur_Jahresabschluss.pdf`, page 1, shows:

- `Probeklausur – Jahresabschluss`
- `Bearbeitungszeit: 90 Minuten`
- `Maximale Punktzahl: 60 Punkte`
- `Aufgabe 5: Abschreibung und Anlagenverkauf (8 Punkte)`
- Machine prompt: `01.01.t0`, `60.000 €`, `ND: 5 Jahre, linear`,
  `01.07.t2`, `35.000 €`, `Buchwert und Gewinn/Verlust`,
  `Bruttomethode`

`pdftotext -layout` on the Musterlösung, page 1, shows:

- `Aufgabe 5 – Anlagevermögen (8 Punkte)`
- `60.000 € / 5 = 12.000 €/Jahr (2 P)`
- `t0–t2 = 2,5 Jahre → 30.000 € AfA → Buchwert = 30.000 €`
- `Verkaufspreis = 35.000 € → Gewinn = 5.000 € (4 P)`
- booking route using `Bank`, `Erlöse`, `Abgang`, `Maschine`, `AfA` for 2 points

## Visual page check

Rendered with `pdftoppm -f 1 -singlefile -png -r 120`:

- `Probeklausur_Jahresabschluss.pdf`, page 1: visible Aufgaben 1-7,
  including Aufgabe 5 with the same 60.000 €, 5-year linear depreciation,
  35.000 € sale, book value / gain-loss, and Bruttomethode wording.
- `Musterloesung_Probeklausur_Jahresabschluss.pdf`, page 1: visible solution
  route for Aufgabe 5 with 12.000 €/year AfA, 30.000 € accumulated AfA,
  Buchwert 30.000 €, Gewinn 5.000 €, and booking accounts.

## Mapping decision

Promoted:

- `jahresabschluss.official-task.probeklausur-jahresabschluss-a5-anlagevermoegen-afa-verkauf`

Mapped concept:

- `anlagevermoegen`

Why this concept:

- The task directly asks for lineare AfA, accumulated depreciation, book value,
  disposal gain/loss, and Bruttomethode booking. Those are the portal's
  `Anlagevermögen und Abschreibungen` family.

## Files changed

- `jahresabschluss/js/data/taskFamilies.js`
  - Adds one `official-task-source` family with source, page, task, review
    metadata, expected time, traps, and the official point split.

## Non-claims

- The remaining Jahresabschluss Probeklausur tasks are still only
  document-registry placeholders until reviewed.
- The longer `Probeklausur_JA.pdf` remains unmapped at item level.
- This pass does not add new student-facing academic content; it adds
  provenance and exam-family metadata grounded in the reviewed source pair.

## Remaining risks

1. Jahresabschluss still has only 1 reviewed official-task-source family out of
   13 registered official task documents.
2. Some full-exam simulations in the live portal remain platform-authored and
   should not be mistaken for complete official exam reconstruction.
