# Mikro2 Market-Failure Source Boundary Pass 12 - 2026-05-27

## Finding

The current Mikro2 portal contains three market-failure concepts that are pedagogically useful but not directly backed by the available official Mikro II corpus:

- `externa_pigou`
- `externa_institutionen`
- `public_goods`

Local PDF text search across `source-materials/Mikroökonomik II/` found no official Mikro2 matches for Pigou, Coase, emissions trading, public goods, Samuelson, or related externality/free-rider terminology.

## Risk

The live Mikro2 mock exam still contained a full block on external effects and Pigou taxation. That made an unanchored supplemental topic look exam-proven inside Mikro2, which violates the source-of-truth rule.

## Implementation Target

- Keep the supplemental market-failure learning material visible, but explicitly non-source-backed through provenance.
- Remove unanchored external-effects content from the Mikro2 timed mock exam.
- Replace it with source-backed Mikro2 content from intertemporal choice and uncertainty/insurance.
- Make the mock-exam subtitle reflect source-backed coverage instead of `Marktversagen`.

## Implemented

- Replaced the Mikro2 timed mock exam's former external-effects/Pigou block with an intertemporal-consumption and uncertainty/insurance block.
- Updated the mock-exam subtitle from market-failure framing to source-backed coverage: strategic interaction, time, and uncertainty.
- Added `concept_id` metadata for the Cournot block and the new intertemporal/uncertainty questions so mistake review and mastery evidence attach to anchored concepts.
- Strengthened the unmapped-concept provenance copy in `contentManifest.js` so unanchored current concepts are treated as supplemental platform-added support, not exam-proven Mikro II source content.

## Validation

- `CURRENT_DATE=2026-05-27 node tools/exam-os/audit-current-state.mjs --write`
- `CURRENT_DATE=2026-05-27 node tools/exam-os/check-readiness.mjs --write`
- `node --check mikro2/js/data/fullExams.js && node --check mikro2/js/data/contentManifest.js`
- `rg -n "Pigou|Externe Effekte|Coase|public|öffentliche|MEC|Marktversagen" mikro2/js/data/fullExams.js || true`
- `git diff --check`
- Browser smoke test at `http://127.0.0.1:4188/mikro2/index.html?qa=1`: `window.__startFullExam('hard_mock_mikro2_2026')` rendered Block B as `INTERTEMPORALER KONSUM & VERSICHERUNG`, showed the Gegenwartswert and Erwartungsnutzen prompts, and contained no Pigou/Coase/external-effects/market-failure language inside the active exam panel.

## Changed Files

- `mikro2/js/data/fullExams.js`
- `mikro2/js/data/contentManifest.js`
- `docs/audits/mikro2-market-failure-source-boundary-pass-12-2026-05-27.md`
- Generated current-state/readiness audit outputs under `docs/audits/`

## Definition of Done for This Pass

- No Mikro2 mock-exam block tests Pigou, Coase, emissions trading, or public goods.
- New mock-exam content maps to currently anchored Mikro2 concepts.
- Remaining market-failure concepts stay marked as platform-added/explanatory or platform-added drills.
- The portal remains deployable.

## Remaining Gaps

- Mikro2 still has three current concepts without direct anchors: `externa_pigou`, `externa_institutionen`, and `public_goods`.
- Those concepts should either receive official source anchors if a later corpus proves them, or remain explicitly supplemental and excluded from exam-proven readiness scoring.
