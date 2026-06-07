# Mikro1 Official Task-Source Review Pass 1

Date: 2026-06-07

## Scope

This pass starts the item-level official-task-source promotion workflow for Mikroökonomik I. It does not certify the whole Probeklausur corpus.

## Source Evidence

- Reviewed source image: `source-materials/Mikroökonomik I/Probeklausur/IMG_8767.JPG`
- Visual inspection: page header identifies `Aufgabe 1 (40 Punkte)` in the Mikroökonomik I Probeklausur.
- OCR assist: `tesseract` with local `eng` data produced readable text for the page; German umlauts were imperfect, so OCR was treated as an assist, not as sole evidence.
- Template PDF check: `source-materials/Mikroökonomik I/Weitere_Unterlagen/Klausur_Mikro1_ohneechtentext.pdf` contains placeholder/lorem-ipsum task text and remains unusable as an item bank.

## Promoted Family

One narrow official-task-source family was promoted:

- `mikro1.official-task.probeklausur-a1-budget-true-false`
- Concept: `budget`
- Source: `IMG_8767.JPG`, Probeklausur page 2, Aufgabe 1, Teilaufgaben 1-3
- Task family: true/false judgments about budget constraint, maximum affordable quantity, price change, and relative price direction
- Grading rule captured: 2 points per correct mark; 1 point can be awarded when the mark is wrong but the written explanation is correct; no penalty for missing or incorrect explanations

## Files Changed

- `mikro1/js/data/officialTaskIngestion.js`
  - Changed the Probeklausur review status from fully blocked to partial.
  - Added an allowlist for reviewed official-task-source family IDs.
  - Kept all non-reviewed JPGs and the template PDF blocked.
- `mikro1/js/data/taskFamilies.js`
  - Added the reviewed Budget true/false official-task-source family.
  - Suppressed the generic OCR-blocker warning only for reviewed official-task-source families.
- `mikro1/js/features/sourceCompanion.js`
  - Updated the companion status display from boolean yes/no to partial review status and reviewed page list.

## Remaining Risks And Gaps

- Only one Probeklausur image page has been OCR-assisted and visually reviewed.
- The remaining 16 JPG pages still need OCR-assisted extraction and human item-family mapping.
- The local OCR language pack does not include German; future passes should use `deu` OCR data or native text where available.
- Mikro1 still is not exam-bank-complete in the all-encompassing sense; this pass only moves the first reviewed official task family into the live task taxonomy.
