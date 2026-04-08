# Mikro2 Normalization Audit Pass 1

## Scope
- Module: `mikro2` only.
- Focus: visual/platform consistency and structural shell alignment against current backbone and `mikro1` sibling baseline.
- Out of scope: broad content rewrite, renderer replacement, or flattening `mikro2` into a `mikro1` clone.

## Audit snapshot (before fixes)

### Platform-breaking inconsistencies
1. **Theme/token divergence at shell level**
   - `mikro2` used a neon-lime/cyan shell accent system that made navigation, active states, and dashboard feel like a separate product line from platform modules and `mikro1`.
2. **Sidebar shell divergence**
   - `mikro2` used legacy clickable header container (`.sidebar-header` + `h1`) instead of the standardized module-home button pattern (`.sidebar-module-home` with icon/title/subtitle).
3. **Stale module-switcher UI exposure**
   - `.portal-switcher` remained visible in `mikro2`, while migrated modules intentionally hide this area in normal runtime.
4. **Consent UX divergence**
   - `mikro2` used floating toast-style consent while sibling modules use full overlay modal pattern, creating inconsistent trust/privacy interaction.
5. **Content shell/layout divergence**
   - `mikro2` used tighter fixed content width/padding (`max-width: 960px`) versus platform shell token constraints used in migrated modules.

### Legitimate module-specific differences (kept)
1. **Pedagogical emphasis and data model**
   - `mikro2` concept set, examples, and problem structures are module-specific and should not be normalized away.
2. **Module-local renderer architecture**
   - `mikro2` currently uses a thin `createRenderer` wrapper, while `mikro1` has a richer renderer augmentation layer.
   - This is a structural divergence, but not safe to normalize in pass 1 without risk of behavior regressions.

## Safe normalization fixes applied

### 1) Shell token alignment for platform-level visual consistency
- File: `mikro2/css/styles.css`
- Changes:
  - Replaced shell accent tokens with platform-aligned blue family.
  - Added shared nav-active tokens and semantic success color tokens.
  - Updated active nav and mastery styles to consume shared tokens instead of hardcoded neon values.
- Why this is safe:
  - Pure token/style mapping; no change to data, routing, or learning logic.

### 2) Sidebar home/header pattern normalized
- Files:
  - `mikro2/index.html`
  - `mikro2/css/styles.css`
- Changes:
  - Replaced legacy clickable header container with standardized module-home button structure (`sidebar-module-home`, icon, title, subtitle).
  - Updated "Alle Module" affordance to mirror platform shell pattern.
- Why this is safe:
  - Uses existing `window.__renderHome()` behavior; only markup/styling normalization.

### 3) Hidden stale portal-switcher area
- File: `mikro2/css/styles.css`
- Changes:
  - Set `.portal-switcher` to `display: none !important;` to match active platform shell behavior.
- Why this is safe:
  - Removes dormant/stale shell region without touching navigation logic.

### 4) Consent interaction aligned to platform modal behavior
- Files:
  - `mikro2/index.html`
  - `mikro2/css/styles.css`
- Changes:
  - Migrated consent markup to `consent-notice-inner` modal structure.
  - Switched from floating bottom notice to full-screen overlay modal styling.
- Why this is safe:
  - Keeps existing consent callbacks and semantics; only presentation normalized.

### 5) Content shell width/padding normalized
- File: `mikro2/css/styles.css`
- Changes:
  - Introduced shell/body width tokens and tokenized `#content` spacing.
  - Added `#content > *` width constraint to align internal body measure with sibling modules.
- Why this is safe:
  - Layout-level CSS only; no impact on concept rendering logic.

## Exact files changed
- `mikro2/index.html`
- `mikro2/css/styles.css`
- `docs/audits/mikro2-normalization-audit-pass-1.md`

## Exact inconsistencies fixed
1. Platform-breaking shell color/token mismatch for primary interactive states.
2. Legacy sidebar header interaction pattern mismatch.
3. Visible stale `.portal-switcher` shell block.
4. Consent notice style/interaction mismatch.
5. Non-tokenized, narrower content shell spacing/width mismatch.

## Exact remaining inconsistencies and why they remain
1. **Renderer augmentation gap vs `mikro1`**
   - `mikro1` has substantial renderer post-processing and semantic surface enhancement; `mikro2` stays on base renderer wrapper.
   - Remaining intentionally in pass 1 because this is behavior-adjacent and needs dedicated, testable migration work.
2. **Backbone integration depth gap**
   - `mikro2/js/main.js` does not yet expose the same manifest/mistake-review bridge shape seen in migrated benchmark modules.
   - Not changed in this pass because request scope is visual/platform normalization first.
3. **Module-local styling density**
   - `mikro2` still contains many module-local CSS blocks with unique spacing/details.
   - Kept for now where not platform-breaking to avoid accidental pedagogy/UI regressions.

## Recommendation for Mikro2 Content Enrichment Pass 1 (post-normalization)
1. **Strengthen exam-oriented retrieval density**
   - Add more trap-aware step bundles per high-risk concept pair (especially distinction-heavy micro2 topics).
2. **Increase worked-example depth in chapter content**
   - Expand `CONTENT` tasks with explicit "issue -> formal anchor -> interpretation" chains.
3. **Add formula-to-intuition and graph-to-policy linkage drills**
   - Prioritize items that force sign/direction interpretation under parameter changes.
4. **Keep additive architecture**
   - Reuse current renderer/data structures; add learning objects and drills without shell redesign.
5. **Run renderer-alignment pass separately**
   - If desired, schedule a dedicated `mikro2` renderer-alignment pass against `mikro1` enhancements (separate from content enrichment) to reduce structural drift safely.
