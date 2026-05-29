# Mikro II content expansion — pass 1

**Date:** 2026-05-28  
**Goal:** Raise live `mikro2` chapter depth toward Mikro I granularity (theory blocks, formeln, aufgaben) while staying source-faithful.

## Source files used

- `docs/audits/source-syllabus/mikro2.generated.json` (syllabus / VL mapping)
- `docs/audits/mikro2-official-source-ingest-pass-1.md` (corpus inventory)
- Official VL topics referenced in chapter motivation strings: monopoly & price discrimination (VL 7–8), intertemporal choice (VL 11), uncertainty & insurance (VL 13–14), general equilibrium & welfare (VL 15–19), information (VL 20)

## What changed

| File | Change |
|------|--------|
| `mikro2/js/data/chapters.js` | Expanded thin concepts: `preisdiskriminierung`, `intertemporaler_konsum`, `unsicherheit_versicherung`, `gleichgewicht_walras`, `gleichgewicht_produktion`, `wohlfahrt_messung`, `information_moralhazard`; added worked **aufgaben** and **formeln** where chapters had only one drill |
| `mikro2/js/data/formulaCards.js` | Regenerated (`generate-vl-layers.mjs --module mikro2 --write`) — 32 cards |
| `mikro2/js/data/taskFamilies.js` | Regenerated — 16 VL families |
| `mikro2/js/data/masteryData.js` | Regenerated scaffold |

## Metrics (post-pass)

- Theory characters: ~32k (was ~29k pre-pass in prior audit)
- 18 concepts (course scope); 15/18 with VL anchors (3 supplemental: `externa_*`, `public_goods` — no official PDF hit per ingest doc)
- Readiness: `mikro1DepthAchieved: true`, no fleet blockers

## Remaining gaps

- Total theory volume still below Mikro I because Mikro II has fewer live concepts (18 vs 33), not because per-concept depth is uniformly thin
- `externa_pigou`, `externa_institutionen`, `public_goods` remain `platform-added-*` without VL page anchors
- Item-level `official-task-source` exam tasks not ingested (OCR/human review backlog)

## Validation

- `node tools/exam-os/ci-validate.mjs` — OK
- `node tools/exam-os/check-readiness.mjs --write` — 11/11 modules, `blockers: []`
- `npm run trust:pass1` (tools/clickthrough) — run at commit time
