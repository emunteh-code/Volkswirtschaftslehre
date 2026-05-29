# 2026-05-28 — Mikro1 parity program kickoff (pass 1)

## User request
Extract content from official source files and bring all portal modules to Mikro1-level granularity.

## Audit-first finding
Full parity cannot be automated in one pass without violating source-faithful rules. Mikro1 depth is **33 concepts × parallel layers** (theory, tasks, step drills, 96 reviewed page anchors, task families, formula cards, custom renderer). Other modules range from partial (mikro2, statistik, mathematik) to missing entire exam-OS file sets (finanzwirtschaft, recht, …).

## What this pass delivered

### Program + tools
- `docs/architecture/mikro1-parity-program.md` — phased rollout A–F
- `tools/exam-os/extract-source-syllabus.mjs` — PDF section/heading candidates (no full text in git)
- `tools/exam-os/build-module-parity-report.mjs` — gap matrix vs mikro1
- `tools/exam-os/scaffold-exam-os-layers.mjs` — structural exam-OS files (never overwrites existing anchors)

### Official source extraction (all portal modules)
- `docs/audits/source-syllabus/*.generated.json` — **5,679** pages indexed across 11 modules (heading candidates + signals)
- Weak pages flagged (OCR backlog): e.g. ökonometrie 180, statistik 132

### Structural parity scaffold
Created/patched for modules missing layers:
- `sourceAnchors.js` (empty per-concept, curation-ready): makro1, makro2, oekonometrie, finanzwirtschaft, jahresabschluss, recht, IWB
- `formulaCards.js` (empty scaffold): makro1, makro2, oekonometrie, statistik, mathematik, finanzwirtschaft, jahresabschluss, recht, IWB
- `taskFamilies.js` + `officialTaskIngestion.js`: finanzwirtschaft, jahresabschluss, recht, IWB; mikro2 ingestion file
- Renderer + manifest wiring: `formulaCardsByConcept`, `taskFamiliesByConcept`, `getConceptSourceSummary`, `sourceMaterialBaseUrl` where missing

### Reports
- `docs/audits/module-parity-vs-mikro1.generated.{json,md}`

## What remains (content work, not scaffolding)
1. **Phase C:** Human-reviewed anchors from syllabus → populate `sourceAnchors.js` (target 100% concepts)
2. **Phase D:** VL-grounded task families + formula cards per concept family
3. **Phase E:** Theory/task expansion only where syllabus justifies (no invented substance)
4. **OCR:** Weak/image PDF pages and Mikro1 Probeklausur JPGs
5. **Certification:** Per-module `trust:pass1` after content passes

## Source files used
- `source-materials/` (on-disk corpus, gitignored)
- `docs/audits/source-corpus-registry.generated.json`
- Mikro1 benchmark audits and `exam-operating-system-current-state.generated.json`

## Integrity
- Syllabus stores hashes + heading **candidates** only
- Empty anchors are explicit gaps, not fake provenance
- No automated publication of anchor IDs without review
