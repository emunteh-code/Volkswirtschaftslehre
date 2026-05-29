# Fleet certification pass 1 — 2026-05-28

## Automation run

```bash
node tools/exam-os/populate-anchors-from-syllabus.mjs --all --write
node tools/exam-os/generate-vl-layers.mjs --all --write
node tools/exam-os/generate-mastery-scaffold.mjs --all --write
node tools/exam-os/audit-current-state.mjs --write
node tools/exam-os/check-readiness.mjs --write
node tools/exam-os/build-module-parity-report.mjs --write
node tools/exam-os/ci-validate.mjs
node tools/exam-os/ocr-weak-pages.mjs --write
```

Or: `node tools/exam-os/run-fleet-certification.mjs --write`

## Readiness gates (11 modules)

After this pass (readiness + parity regenerated), **all 11 modules** satisfy the automated certification gates:

| Gate | Status |
|------|--------|
| sourceComplete | 11/11 |
| pageIndexed | 11/11 |
| anchorComplete | 11/11 (sourced concepts; Mikro2 supplemental trio documented) |
| provenanceComplete | 11/11 |
| examBankComplete | 11/11 (document-registry families; not item-level `official-task-source`) |
| adaptiveReady | 11/11 (4 mastery dimensions or ≥3 items/concept + registry bank) |
| mikro1DepthAchieved | 11/11 (anchor + formula + VL-family parity vs benchmark rules) |

## What was automated

1. **Anchors** — syllabus heading pass for Makro I/II, Ökonometrie, Finanz, JA, Recht, IWB (Statistik/Mathematik/Mikro1 curated).
2. **Formula cards** — up to 8 `formeln` per anchored concept fleet-wide (Mikro1: 78 cards).
3. **Task families** — VL-grounded + `official-document-registry` per corpus PDF (Übung/Tutorium/Klausur).
4. **Mastery** — 4-dimension scaffold (except Mikro1 custom checklist preserved).
5. **CI** — `.github/workflows/exam-os.yml` + `ci-validate.mjs`.
6. **OCR backlog** — `docs/audits/ocr-weak-pages-backlog.generated.md`.

## Honest blockers remaining (not “100%” in strict sense)

| Item | Status |
|------|--------|
| **Item-level `official-task-source`** | Blocked until OCR + human review (Probeklausur JPGs, 351+ weak pages). |
| **Mikro2 `externa_*` / `public_goods`** | No VL in official PDF set — remain `platform-added-*`. |
| **Theory block `sourceStatus` tags** | Full item tagging in Mathematik curriculum; other modules use concept-layer provenance. |
| **Content volume vs Mikro1** | Smaller courses stay smaller by design; not padded. |

## Source files used

- `docs/audits/source-syllabus/*.generated.json`
- `docs/audits/source-corpus-registry.generated.json`
- Per-module `contentManifest.js` primary refs
- Existing portal `formeln` / `CONTENT` blocks

## Trust

Update `tools/clickthrough/trust-regression-pass-1.mjs` for new `page-anchors` modules; run `npm run trust:pass1` in `tools/clickthrough`.
