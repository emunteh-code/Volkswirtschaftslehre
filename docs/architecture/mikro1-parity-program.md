# Mikro1 parity program — all modules

## Goal

Every portal module reaches **Mikro1-level exam operating system granularity**: same structural layers, source traceability, and per-concept depth — grounded in `source-materials/`, not invented curriculum.

## What “Mikro1 granularity” means (measurable)

| Layer | Mikro1 benchmark (2026-05-28) | Honest completion rule |
|-------|-------------------------------|-------------------------|
| Concept map | 33 exam-navigable concepts | Module-specific audit; count is not forced to 33 |
| Theory + tasks | ~91k chars; 109 portal tasks; 39 step drills | Scale to official VL scope; no filler |
| Page anchors | 96 anchors on 32/33 concepts | Human-reviewed `sourceAnchors.js`; syllabus assists, does not auto-publish |
| Task families | 10 families (9 VL-grounded) | One or more families per high-yield exam pattern; `official-task-source` only after item mapping |
| Formula cards | 8 VL-anchor cards (pilot) | Derivation cards with `anchorIds`; expand from VL + chapter `formeln` |
| Provenance | `contentManifest` + per-layer `source_status` | Every block labeled; gaps documented |
| Renderer | Custom + exam-OS wiring | `formulaCardsByConcept`, `taskFamiliesByConcept`, `getConceptSourceSummary`, `sourceMaterialBaseUrl` |
| Official corpus | Registry + page index + syllabus | Automated extraction; curation is human/agent review |

**Non-negotiable (AGENTS.md):** Do not invent academic substance. Extraction produces **inventory and section candidates**; anchors, tasks, and theory expansions require source-faithful review.

## Automation (repo tools)

```bash
# Corpus inventory (hashes, page counts)
node tools/exam-os/build-source-registry.mjs --write

# Page signals (no stored text)
node tools/exam-os/build-source-page-index.mjs --write

# Section/outline candidates from official PDFs (no full text in git)
node tools/exam-os/extract-source-syllabus.mjs --write
node tools/exam-os/extract-source-syllabus.mjs --write --module makro1

# Gap matrix vs mikro1
node tools/exam-os/build-module-parity-report.mjs --write

# Missing exam-OS files (empty anchors, ingestion scaffolding) — never overwrites existing anchors
node tools/exam-os/scaffold-exam-os-layers.mjs --write
node tools/exam-os/scaffold-exam-os-layers.mjs --write --module finanzwirtschaft

# State + gates
node tools/exam-os/audit-current-state.mjs --write
node tools/exam-os/check-readiness.mjs --write
```

Outputs:

- `docs/audits/source-syllabus/<module>.generated.json` — per-page heading candidates, signals
- `docs/audits/module-parity-vs-mikro1.generated.{json,md}` — gap sizing
- `docs/audits/source-anchor-drafts/<module>.generated.json` — **draft only** (optional future tool)

## Phased rollout (all modules)

### Phase A — Corpus & extraction (parallel)

1. Refresh registry + page index + **syllabus** for all modules with `source-materials/` on disk.
2. Flag weak/image PDFs for OCR backlog (Probeklausur JPGs, scanned sheets).

### Phase B — Structural parity (one commit wave per tool run)

1. `scaffold-exam-os-layers` for modules missing `sourceAnchors.js`, `taskFamilies.js`, `formulaCards.js`, `officialTaskIngestion.js`.
2. Wire renderers + `getConceptSourceSummary` where missing.
3. Link `contentManifest` to `anchorsByConceptId` (empty → filled in Phase C).

### Phase C — Anchor curation (module-by-module)

1. For each concept, map VL sections using syllabus JSON + existing `sourceRefs`.
2. Add reviewed anchors (pattern: `statistik`, `mathematik`, `mikro1` passes).
3. Target: **100%** concepts with ≥2 anchors on high-exam concepts.

### Phase D — Task & formula depth

1. VL-grounded **task families** (pattern: `mikro1` pass 1, `mikro2`).
2. **Formula cards** from VL anchors + chapter `formeln` (pattern: `mikro1` pass 1).
3. Official **exercise/tutorial/exam** item mapping where PDF text is extractable.

### Phase E — Content parity (largest effort)

1. Theory/task expansion only where syllabus + sources justify it.
2. Step drills + mastery aligned to official task styles.
3. Module-specific graphs/simulations preserved (no flattening).

### Phase F — Certification

1. `trust:pass1` per module touch.
2. `mikro1DepthAchieved` gate when exam-OS readiness is green for that module.

## Module priority (suggested)

| Priority | Module | Rationale |
|----------|--------|-----------|
| 1 | mikro2 | Closest partial stack; official Mikro II corpus |
| 2 | statistik, mathematik | Full anchors; missing formula cards + task families |
| 3 | makro1, makro2, oekonometrie | Large corpora; ingestion scaffold only today |
| 4 | finanzwirtschaft, jahresabschluss, recht, IWB | Missing entire exam-OS file set |

## Risks

- **Volume:** 692 registry documents; full syllabus extract is CPU-heavy (~minutes).
- **OCR:** Image exams/tasks stay blocked until reviewed OCR.
- **Concept count:** Forcing 33 concepts everywhere would violate source-faithful granularity audits.
- **Parallel module content edits:** Avoid multi-module theory rewrites in one PR; use phases above.

## Source files used for this program

- `AGENTS.md`, `docs/architecture/exam-operating-system-spec.md`
- `docs/audits/exam-operating-system-current-state.generated.json`
- `docs/audits/mikro1-granularity-audit-pass-1.md`
