# Hardening pass 1 (focused reliability)

**Date:** 2026-04-08  
**Scope:** Platform backbone + migrated modules, focused on reliability inconsistencies only.

## Summary

This pass fixes high-value structural inconsistencies without redesigning modules:

1. Quick-exam attempt/mistake logging parity in migrated modules.
2. Tab visibility reliability in shared full-exam flow.
3. Module registry/path hygiene and module-state fallback robustness.
4. Stale live-bridge no-op artifact reduced to a minimal diagnostic bridge.
5. Manifest bridge naming consistency aliases for legacy pilot modules.

All fixes are additive/minimal and preserve deployability.

## Exact inconsistencies fixed

### 1) Inconsistent quick-exam learner logging across migrated modules

- **Problem:** `makro1` and `makro2` quick-exam modules still called `createQuickExamModule` without learner-backbone hooks, while newer migrated modules had them.
- **Fix:** Added `moduleSlug`, `appendLearnerAttempt`, `appendMistakeLogEntry` wiring.
- **Files:**
  - `makro1/js/features/exam.js`
  - `makro2/js/features/exam.js`
- **Why it matters:** Restores comparable attempt/mistake telemetry and dashboard-derived metric support across migrated modules.

### 2) Hidden tab-row mismatch after full exam (shared core bug)

- **Problem:** `assets/js/portal-core/features/fullExam.js` hid tabs via inline `style.display = "none"`, which can override later class-based visibility (`#tabRow.visible`) and leave tabs effectively hidden after exam flows.
- **Fix:** Replaced inline hide with class-based hide (`classList.remove("visible")`) and removed any stale inline display style.
- **File:**
  - `assets/js/portal-core/features/fullExam.js`
- **Why it matters:** Prevents tab-visibility drift and dead-tab perception after opening/closing full-exam views.

### 3) Module registry / source-path hygiene and state fallback

- **Problem A:** `assets/js/modules.js` contained a developer-local absolute `sourceRoot` path.
- **Fix A:** Removed `sourceRoot`.
- **File:**
  - `assets/js/modules.js`
- **Why it matters:** Eliminates non-portable path artifact from shared runtime config.

- **Problem B:** Landing-page portal-state fallback in `assets/js/common.js` returned `null` when `module-content.js` profile was missing, causing inconsistent module snapshot behavior.
- **Fix B:** Fallback now always returns state keys; chapter count falls back to `0` when no content profile exists.
- **File:**
  - `assets/js/common.js`
- **Why it matters:** Stabilizes module-card reliability and avoids silent null state for modules without `module-content` entries.

### 4) Live portal bridge no-op artifact

- **Problem:** `mountLivePortalBridge` was pure no-op while still loaded by module pages.
- **Fix:** Added minimal diagnostic payload export (`window.__portalBridgeSnapshot`) and return value, with no learner-facing UI side effects.
- **File:**
  - `assets/js/live-portal-bridge.js`
- **Why it matters:** Removes dead hook behavior while preserving current “no cross-module switcher UI” design.

### 5) Bridge artifact naming consistency (pilot manifest aliases)

- **Problem:** Makro pilot modules exposed only legacy `__makro*PilotManifest` globals, while newer modules use `__*ContentManifest`.
- **Fix:** Added alias globals while preserving legacy names.
- **Files:**
  - `makro1/js/main.js`
  - `makro2/js/main.js`
- **Why it matters:** Improves tooling/devtools consistency without breaking existing consumers.

## Exact files changed

- `makro1/js/features/exam.js`
- `makro2/js/features/exam.js`
- `assets/js/portal-core/features/fullExam.js`
- `assets/js/modules.js`
- `assets/js/common.js`
- `assets/js/live-portal-bridge.js`
- `makro1/js/main.js`
- `makro2/js/main.js`
- `docs/audits/hardening-pass-1.md`

## Unresolved items (intentionally deferred)

1. **`module-content.js` coverage gaps vs `MODULES` slugs**
   - Some live module slugs still do not have dedicated `module-content` profiles.
   - **Why unresolved now:** Closing this cleanly requires source curation and profile authoring, not a safe structural hotfix.
   - **Current mitigation:** `assets/js/common.js` fallback no longer fails hard when profile is absent.

2. **Concept-level mistake extraction for full exams**
   - Still absent in several modules where full-exam items lack robust concept mapping.
   - **Why unresolved now:** Needs data-shape enrichment per module; shallow mapping would risk incorrect attribution.

3. **Graph-tab leftover audit**
   - No new hidden/dead Grafik tab mismatch was found beyond the shared tab-row hide bug fixed in full-exam core.
   - Modules intentionally without graph concepts (e.g. explicit empty `GRAPH_CONCEPTS`) remain by design.

## Risks / notes

- Changes are backward-compatible and additive.
- Legacy pilot manifest globals remain available.
- Live bridge now exposes diagnostic state globally; no UI behavior depends on it.
