# Makro2 misfiled exam source-registry pass

Date: 2026-06-15

## Scope

This pass resolves one official-task registry mismatch without changing academic content. The file remains at its current filesystem path because `source-materials/` is ignored by git, but generated provenance metadata now assigns the document to the academically correct module.

## Evidence checked

- Native text extraction from `source-materials/Makroökonomik I/Klausur_Februar_2024_260119_141838.pdf`.
- Visual render of page 1 with Poppler.
- Existing official-task backlog mismatch note.

## Finding

The PDF footer visibly reads `Klausur Makroökonomik 2 1/6`. Native text extraction shows Makro II task families:

- open-economy IS-LM with flexible exchange rates
- Barro-Gordon
- debt dynamics
- Solow with technology growth

The previous registry classified it as `makro1` only because the file is stored under `source-materials/Makroökonomik I/`.

## Implementation change

- Added an explicit source-document override in the registry generator for this file.
- The generated registry now assigns the document to `makro2` while preserving its actual path and recording the storage-module override reason.
- The official-task backlog no longer treats the document as a module mismatch once the corrected module assignment is present.

## Remaining risk

The physical PDF is still stored in the Makro I source folder locally. Because `source-materials/` is git-ignored, the durable repository fix is the generated provenance override. If source materials are later reorganized outside git, this PDF should be moved into `source-materials/Makroökonomik II/`.
