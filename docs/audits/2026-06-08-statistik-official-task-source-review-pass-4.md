# Statistik Official Task Source Review Pass 4

Date: 2026-06-08

## Reviewed Source

- `source-materials/Statistik/Lecture_Statistik_B.WIWI-OPH.0006_Vorlesung/Teil_A_Klausur.pdf`
- Exam label on rendered pages: `Klausur Statistik, 04.03.2022`
- Review method: native `pdftotext` extraction plus visual page render review
- Reviewed pages in this pass: Klausurseiten 18-25
- Reviewed tasks in this pass: Aufgaben 7-9

## Promotion Decision

This pass promotes three additional Statistik `official-task-source` families.

Promoted families:

- `statistik.official-task.teil-a-klausur-2022-a7-weibull-ml`
- `statistik.official-task.teil-a-klausur-2022-a8-unbiased-estimator`
- `statistik.official-task.teil-a-klausur-2022-a9-normal-test-anova`

This completes reviewed item-level mapping for Aufgaben 1-9 in `Teil_A_Klausur.pdf`.

## Task Coverage

Aufgabe 7 covers maximum-likelihood estimation for a Weibull-distributed lifetime variable. The official prompt provides the density and distribution function, fixes `r = 1`, and asks for the log-likelihood, the ML estimator for `lambda`, and the sufficient or second-order condition.

Aufgabe 8 covers unbiasedness of an estimator. The official prompt gives `E(X) = alpha/4` and an iid sample, then asks whether the displayed estimator is unbiased for `alpha`. The native text extraction distorted the product/fraction typography, so the estimator display was checked visually against the rendered page.

Aufgabe 9 covers hypothesis testing and ANOVA in an R-output setting. The official prompt gives four jump distances each for Stahlbichler and Fiedler, assumes normal observations, asks for hypotheses, test statistic and distribution, R-code selection from three t-test outputs, a test decision, and then an ANOVA/F-test decision at `alpha = 10%`.

## Point Structure

- Aufgabe 7: 12 points total
- Aufgabe 7a: log-likelihood setup and simplification
- Aufgabe 7b: ML estimator from Aufgabe 7a with full path
- Aufgabe 7c: sufficient condition or second-order condition
- Aufgabe 8: 5 points total
- Aufgabe 9: 15 points total
- Aufgabe 9a: 2 points
- Aufgabe 9b: 3 points
- Aufgabe 9c R-code number: 1 point
- Aufgabe 9c decision and justification: 2 points
- Aufgabe 9d hypotheses: 2 points
- Aufgabe 9d rejection region and decision at `alpha = 10%`: 5 points

## Boundaries

- No solution content is invented.
- Rubric metadata is limited to visible point structure and task wording.
- Common-trap metadata is portal support derived from the reviewed prompt, not an official solution key.
- The Aufgabe 7 prompt is preserved as official wording; the portal does not silently correct the source's displayed support condition.

## Remaining Work

- Statistik is not source-parity complete: document-level registry placeholders still need item-level review.
- OCR or otherwise text-index the image-only Statistik Klausurfragen PDFs before any `official-task-source` promotion from those documents.
- Continue official exercise, Großübung, and Tutorium sheets with the same native-text plus visual-page workflow.
- Add solution-key grading checklists only when official solutions are available and reviewed.
