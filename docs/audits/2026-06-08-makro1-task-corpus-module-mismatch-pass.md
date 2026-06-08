# Makro1 Task Corpus Module-Mismatch Pass

Date: 2026-06-08

## Finding

`source-materials/Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf` is stored under the Makro I source folder, but direct text extraction and visual page review show a footer reading `Klausur Makroökonomik 2`.

The task topics also align with the live Makro2 module rather than the current Makro1 concept set:

- open-economy IS-LM with flexible exchange rates
- Barro-Gordon / Phillips curve dynamics
- debt dynamics
- Solow with technological growth

## Change

- The Makro1 task-family metadata for this document is now marked `module-mismatch-review-needed`, not `official-document-registry`.
- The official task-source backlog generator now classifies this exact document as `module-mismatch-review-needed`, with expected module `makro2`.
- Generated readiness evidence now includes a `Module-mismatch docs` count.

## Why

Promoting this PDF as Makro1 official task coverage would violate the source-faithfulness rule. The document is preserved in the corpus inventory, but it must not be used for Makro1 item-level promotion until the module assignment is manually resolved.

## Remaining Gap

This does not yet promote a Makro2 task family either. If the document is confirmed as Makro2 material, the correct next step is to move or alias it in the source registry and then map its Aufgaben to Makro2 concepts with explicit anchors.
