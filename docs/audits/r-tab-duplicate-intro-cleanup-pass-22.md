# R-tab duplicate-intro cleanup — Pass 22

## Problem

On the **R-Übung** tab, students saw the same (or overlapping) copy twice in a row: once in the paragraph directly under the block title (`r-orient-purpose` / `r-practice-bridge`, fed by block `purpose`) and again under the **Idee** kicker, which is rendered from `config.learningGoal`.

## Root cause

**Shared renderer logic in `assets/js/portal-core/features/rPractice.js`:**

- `inferLearningGoal(block)` returns `block.learningGoal` if set; otherwise it **falls back to `block.purpose`** when `purpose` is non-empty (`inferLearningGoal`, lines ~460–466).
- The orientation card always rendered `purpose` in the top paragraph **and** `learningGoal` inside **Idee** (`renderTabOrientationCard` + `renderTaskBriefs`).
- Many modules (e.g. **Statistik** `R_BLOCKS_BY_ID`) define `purpose` but **no** `learningGoal`, so the Idee paragraph was literally the same string as the header paragraph.

**Oekonometrie / Mathematik:** blocks that set **both** `purpose` and a **distinct** `learningGoal` were already fine; no data rewrite required for the common statistik pattern.

## Fix (shared)

**Layer:** `buildConfig()` + templates only (no module data edits).

1. After computing `learningGoal`, derive `headerPurpose`:
   - If normalized `purpose` equals normalized `learningGoal`, **omit** the header paragraph (empty `headerPurpose`).
   - If `learningGoal` begins with the full normalized `purpose` and `purpose` has length ≥ 24 characters, treat as authoring overlap and **omit** the header paragraph so the student does not read the same opening twice.

2. **Render** the top paragraph only when `config.headerPurpose` is non-empty:
   - `renderTabOrientationCard` — `r-orient-purpose`
   - `renderRPracticeMarkup` — `r-practice-bridge` (embedded R practice uses the same rule)

**Normalization** for comparison: trim, collapse internal whitespace to single spaces, lowercase (display strings unchanged; only dedupe key).

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/features/rPractice.js` | `normalizeRIntroDedupeKey`, `isDuplicateHeaderPurposeVsIdee`, `headerPurpose` on config, conditional header HTML in tab + embedded markup |

**Scope:** **Shared** — any module using `renderRAnwendungTab` / `renderRPracticeMarkup` benefits without per-module patches.

**Downstream:** `assets/js/generated-portal/main.js` imports `rPractice.js` directly; no separate bundle sync.

## What was not changed

- **Idee** block, title, `Mathe ↔ R`, `Kernzeile`, `Auftrag`, workspace, output, bottom task card — unchanged.
- No removal of `purpose` from authoring data; it still drives Idee when `learningGoal` is absent.
- No broad content rewrites.

## Browser verification notes

**Environment:** Automated browser run was not executed in this pass; verification is by **code path** and **data inspection**.

1. **Statistik (screenshot-class case):** `statistik/js/data/chapters.js` — `R_BLOCKS_BY_ID` entries have `purpose` and typically **no** `learningGoal`. After the fix, `inferLearningGoal` still returns that `purpose` for Idee, but `headerPurpose` is cleared because `purpose === learningGoal` after normalization → **one** pedagogical paragraph under **Idee**, no repeated paragraph under the title.

2. **Second module:** Same shared path for **Oekonometrie** / **Mathematik** R blocks: wherever `purpose` and `learningGoal` differ, **`headerPurpose` stays `purpose`** → top orientation remains.

3. **Distinct top intro preserved:** e.g. **Mathematik** `curriculum.js` R snippets with both `purpose` and a **different** `learningGoal` — dedupe is false → header paragraph still shows `purpose`, Idee shows `learningGoal`.

**Manual check (recommended):** Open any Statistik concept with an R tab (e.g. `deskriptiv`, `bivariat`) → under-title paragraph gone, **Idee** unchanged. Open a Mathematik R block with two distinct strings → both still visible, no awkward empty box (conditional omits the `<p>` entirely).

## Risks / gaps

- **Near-duplicate** wording that is not identical and not a prefix match may still feel repetitive; only equality and “Idee starts with full header” are handled.
- If future authoring sets a **very short** `purpose` that is a prefix of `learningGoal` but under 24 characters, the header is **not** auto-suppressed (avoids false positives on short shared prefixes).

## Completion criterion

The student should not read the **same** normalized text as the full header paragraph and then again immediately as the **Idee** body when the former was only a duplicate of the inferred goal. **Pass 22 satisfies this** for the identified fallback and prefix-overlap cases.
