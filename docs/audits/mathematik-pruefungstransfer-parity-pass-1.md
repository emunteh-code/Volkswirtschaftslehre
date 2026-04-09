# Mathematik Prüfungstransfer Parity Pass 1

## Scope
Close the visible pedagogy defect where `Geführte Aufgaben` and `Prüfungstransfer` in `mathematik` were effectively identical.

## Problem confirmed
- The current `mathematik` transfer deck reused the same solved task deck as the guided deck.
- Result in the live UI: `Prüfungstransfer` repeated the same question stems and the same solution logic instead of shifting into a more compressed klausur-facing mode.

## Target
- Keep `Geführte Aufgaben` as full worked solving practice.
- Rebuild `Prüfungstransfer` as a distinct exam-facing deck using the existing concept signals:
  - exam pattern rules
  - warning/trap logic
  - formula anchors
  - recognition cards

## Files expected to change
- `mathematik/js/data/practiceConfig.js`

## Exact files changed
- `mathematik/js/data/practiceConfig.js`
- `docs/audits/mathematik-pruefungstransfer-parity-pass-1.md`

## Exact fix made
- Replaced the old transfer construction that simply remapped the solved guided deck into `Prüfungstransfer`.
- `Prüfungstransfer` is now built from a distinct klausur-facing mix of:
  - `intuition.exam` pattern signals
  - warnings / trap cards
  - formula-anchor cards
  - recognition cards from the concept-card layer
  - only a small trailing remainder of compressed solved-task reminders

## Pedagogical effect
- `Geführte Aufgaben` stays full-solution and stepwise.
- `Prüfungstransfer` now asks:
  - which signal is present
  - which first move applies
  - which formal anchor belongs to the task
  - which trap costs points under time pressure
- That is much closer to the mikro1 distinction between worked practice and exam-facing retrieval.

## Verification
- `node --check mathematik/js/data/practiceConfig.js`
- Programmatic deck audit across all 14 `mathematik` concepts:
  - guided count = 10
  - transfer count = 10
  - first card identical = false in all 14
  - literal overlap between guided prompt text and transfer prompt text = 0 in all 14

## Representative new transfer prompts
- `algebra_mengen`: `... das Signal "Nenner, Wurzel oder Logarithmus vorhanden" ... Welcher Rechenzugriff kommt zuerst?`
- `funktionen_gleichungen`: `... das Signal "Quadratik" ... Welcher Rechenzugriff kommt zuerst?`
- `lagrange`: `... das Signal "FOCs gelöst" ... Welcher Rechenzugriff kommt zuerst?`
- `integralrechnung`: `... das Signal "Produktstruktur" ... Welcher Rechenzugriff kommt zuerst?`

## Remaining limitation
- This closes the sameness defect decisively.
- A later pass could still make selected transfer solutions even tighter and more klausur-kompakt in tone, but the current visible problem is no longer present.
