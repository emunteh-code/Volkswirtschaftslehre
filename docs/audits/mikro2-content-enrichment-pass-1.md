# Mikro2 Content Enrichment Pass 1

## Scope
- Module: `mikro2` only.
- Goal: increase exam-useful content depth with additive, source-grounded improvements.
- Out of scope: renderer refactor, shell redesign, or infrastructure migration.

## Audit snapshot (before changes)
- Strong baseline:
  - broad topic coverage (`spieltheorie`, `oligopol`, `gleichgewicht`, `wohlfahrt`, `externa`, `public_goods`, `information`);
  - substantial theory blocks and formula anchors per concept;
  - existing worked tasks in chapter content.
- Highest-value weak spots:
  1. **Distinction-drill weakness in fast retrieval mode**: `stepProblems` covered only a subset of concepts.
  2. **Uneven chapter-end retrieval pressure**: several high-frequency exam distinctions lacked explicit extra mini-drills.
  3. **Graph/formula linkage under exam framing**: especially in oligopoly reaction-function interpretation under time pressure.
  4. **Ex-ante vs ex-post information confusion**: adverse selection vs moral hazard needed denser trap-aware repetition.
  5. **Public-good mechanism application**: Samuelson/Lindahl logic present, but limited short-cycle decision drills.

## What changed

### 1) Expanded chapter-end worked mini-cases (`CONTENT`)
- File: `mikro2/js/data/chapters.js`
- New chapter-level learning objects added:
  - **`spieltheorie`**: mixed-strategy mini-case (Matching-Pennies style) with explicit “no pure NG -> indifference conditions”.
  - **`oligopol`**: reaction-function intersection mini-case linking formula system and equilibrium graph interpretation.
  - **`public_goods`**: Lindahl-price mini-case with explicit Samuelson condition and cost-coverage check.
  - **`information`**: structured adverse-selection vs moral-hazard classification case with instrument matching.

### 2) Expanded exam-oriented step drills (`BASE_STEP_PROBLEMS`)
- File: `mikro2/js/data/stepProblems.js`
- Added 5 new step-problem bundles:
  - **`oligopol`**: `m2_cournot_2` (Cournot vs Bertrand model selection trap).
  - **`information`**: `m2_info_2` (adverse selection vs moral hazard discrimination).
  - **`wohlfahrt`**: `m2_welfare_1` (1st vs 2nd welfare theorem + implementation limit).
  - **`externa`**: `m2_external_1` (MSC/MPC/MEC identity, overproduction logic, Pigou mapping).
  - **`public_goods`**: `m2_public_1` (vertical aggregation + Samuelson + free-rider rationale).
- Effect:
  - better chapter-end retrieval and distinction speed;
  - higher trap density in exam-like short-answer flow;
  - stronger formula-to-decision linkage across previously underdrilled concepts.

## Exact files changed
- `mikro2/js/data/chapters.js`
- `mikro2/js/data/stepProblems.js`
- `docs/audits/mikro2-content-enrichment-pass-1.md`

## Exact concepts/sections enriched
- `spieltheorie`: mixed-strategy equilibrium retrieval beyond pure-strategy matrix scans.
- `oligopol`: reaction-function intersection interpretation and Cournot-vs-Bertrand trap handling.
- `wohlfahrt`: theorem discrimination (1st vs 2nd) and realism constraint retrieval.
- `externa`: external-cost internalization logic in compact decision flow.
- `public_goods`: Samuelson/Lindahl operational application and anti-aggregation-confusion drill.
- `information`: robust ex-ante/ex-post problem classification with instrument matching.

## Exact new learning objects or examples added
- New chapter-level worked tasks: **4**
  - 1 each in `spieltheorie`, `oligopol`, `public_goods`, `information`.
- New step-drill bundles: **5**
  - `m2_cournot_2`, `m2_info_2`, `m2_welfare_1`, `m2_external_1`, `m2_public_1`.

## Remaining gaps and why they remain
1. **No renderer-level pedagogy expansion**
   - Intentionally out of scope per pass constraints; this pass is content/data enrichment only.
2. **No broad full-exam volume expansion**
   - Focus stayed on highest-value chapter and step-drill depth gains, not full exam set growth.
3. **Graph panel architecture unchanged**
   - Added graph/formula-linked tasks at content level; no graph engine or UI refactor performed.
4. **Advanced multi-concept policy chains still selective**
   - Added targeted drills, but not a full longitudinal sequence across all market-failure chapters.

## Deployability/status
- Changes are additive and data-layer only.
- No linter errors detected on touched files.
