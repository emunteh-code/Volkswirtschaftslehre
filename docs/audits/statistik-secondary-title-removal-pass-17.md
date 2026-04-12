# Statistik Secondary Title Removal Pass 17

## What the student saw

A **secondary subtitle / intro strip** directly under the main concept `<h1>`, implemented as a `.concept-motivation` block containing each concept’s **`entry.motivation`** string from chapter content.

## Exact source

- **Not** theory tab HTML (`entry.theorie`) — motivation is duplicated in the **page chrome** built by the shared portal renderer before the tab panel.
- **File:** [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js) inside `renderContent`, variable `headerHTML` (previously always included `<div class="concept-motivation" role="note">${entry.motivation}</div>` when `entry` exists).

## Fix strategy

- **Shared renderer** gains an **opt-out** flag so only modules that want to hide the strip disable it; default **`true`** preserves behavior for all other modules (per completion rule: do not alter other modules’ UI unless they opt in).
- **Statistik** passes **`showConceptMotivationBanner: false`** in its `createRenderer` options.

This is **not** a CSS `display:none` hack on a random container; the node is **not emitted** when the flag is false.

## Files changed

| File | Change |
|------|--------|
| [assets/js/portal-core/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/portal-core/ui/renderer.js) | New option `showConceptMotivationBanner` (default `true`); `motivationStrip` only when flag and `entry.motivation` are truthy. |
| [statistik/js/ui/renderer.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/statistik/js/ui/renderer.js) | `showConceptMotivationBanner: false`. |
| [docs/audits/statistik-secondary-title-removal-pass-17.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/statistik-secondary-title-removal-pass-17.md) | This audit. |

## Shared vs module-local

- **Mechanism:** shared `createRenderer` (one conditional).
- **Activation:** **module-local** Statistik renderer config only.

## Theory / content

- **`motivation` fields in `statistik/js/data/chapters.js` are unchanged** — they remain available for drills, exam factory text, intuition fallbacks, etc. Only the **header strip** under the H1 is suppressed for Statistik.

## Browser verification notes

Not run in-browser here. After deploy, on any Statistik concept page:

1. Main title (`.concept-title`) and tag (`.concept-tag`) still visible.
2. No `.concept-motivation` block under the H1.
3. Spacing from header to first `.panel` / section should match pre-pass rhythm (header still uses existing `.concept-header` margin; `.concept-title` margin unchanged).

## Outliers

- Concepts **without** `entry` still use the minimal header without motivation (unchanged).
- Other modules can set `showConceptMotivationBanner: false` later if they want the same treatment without further renderer edits.
