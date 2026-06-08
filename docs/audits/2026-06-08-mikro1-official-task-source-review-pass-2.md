# Mikro1 Official Task-Source Review Pass 2

Date: 2026-06-08

## Scope

This pass extends the Mikroökonomik I Probeklausur item-level mapping from one pilot family to a larger reviewed slice. It still does not certify the full Probeklausur corpus.

## Reviewed Source Pages

- `source-materials/Mikroökonomik I/Probeklausur/IMG_8768.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8769.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8770.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8771.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8772.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8773.JPG`
- `source-materials/Mikroökonomik I/Probeklausur/IMG_8774.JPG`

OCR was generated locally with `tesseract` and visually checked against the images. Because only English OCR data is installed locally, the OCR output was treated as review scaffolding rather than authoritative source text.

## Promoted Official Task Families

- `mikro1.official-task.probeklausur-a1-preferences-convexity`
  - Concept: `praeferenz`
  - Source: `IMG_8768.JPG`, Aufgabe 1, Teilaufgaben 4-6
- `mikro1.official-task.probeklausur-a1-household-optimum-true-false`
  - Concept: `hausopt`
  - Source: `IMG_8768.JPG`, Aufgabe 1, Teilaufgaben 7-8
- `mikro1.official-task.probeklausur-a1-consumer-theory-mixed-true-false`
  - Concept: `marshall`
  - Source: `IMG_8769.JPG`, Aufgabe 1, Teilaufgaben 9-15
- `mikro1.official-task.probeklausur-a1-production-cost-monopoly-true-false`
  - Concept: `produktion`
  - Source: `IMG_8770.JPG`, Aufgabe 1, Teilaufgaben 16-20
- `mikro1.official-task.probeklausur-a2-hicks-decomposition`
  - Concept: `hicks`
  - Sources: `IMG_8771.JPG`, `IMG_8772.JPG`, Aufgabe 2
- `mikro1.official-task.probeklausur-a3-cost-function`
  - Concept: `kosten`
  - Sources: `IMG_8773.JPG`, `IMG_8774.JPG`, Aufgabe 3

## Files Changed

- `mikro1/js/data/officialTaskIngestion.js`
  - Added the reviewed family IDs to the explicit allowlist.
  - Extended the reviewed JPG-page inventory.
- `mikro1/js/data/sourceAnchors.js`
  - Added reviewed Probeklausur anchors with locator metadata, confidence, reviewer, and review date.
- `mikro1/js/data/taskFamilies.js`
  - Added six official-task-source families with methods, traps, grading rubrics, expected times, and current coverage notes.

## Remaining Risks And Gaps

- Remaining Probeklausur pages after `IMG_8774.JPG` still require review before promotion.
- The backlog still has document-registry placeholders for the full exam corpus; the final exam-bank gate correctly remains open.
- Install German OCR data (`deu`) before scaling this workflow across all handwritten or photographed German sources.
