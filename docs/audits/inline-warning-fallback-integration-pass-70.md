# Inline warning fallback integration — Pass 70

**Date:** 2026-04-12  
**Scope:** Main-column **Häufige Fehler** mirror when the right rail is hidden (narrow viewport / focus mode). **Verbindungen** scope unchanged (Theorie-only mirror — Pass 69).

## Previous problem

`renderMainFlowMistakesSection` emitted **one `.warning-card.warning-card--theorie-fallback` per rail warning**, wrapped in `.content-fallback__stack` with gap. On concepts with several `.warn-box` sources that read as **multiple stacked alert shells**: heavy, repetitive, visually disconnected from the calm **theory card** language (`#content .section-block`: single surfaces, `var(--r-lg)`, `var(--shadow-sm)`).

## New structure

| Layer | Role |
|--------|------|
| `section.content-fallback.content-fallback--mistakes` | Same section + **Häufige Fehler** heading as before |
| **One** `div.theorie-fallback-support` | Unified outer surface (theory-aligned radius, `var(--shadow-sm)`, blended `var(--card)` + `var(--warning-surface-soft)`, warning-tinted border + **3px** warm left edge) |
| **Multiple** `div.theorie-fallback-entry` | Internal rows only: `__head` (small icon + title) + `__body` (existing HTML); **no** per-entry `.warning-card` |

Separators: `border-top` between consecutive entries (subtle mix of `var(--border)` and `var(--warning-border)`).

**Preserved:** `getWarningSystemData` / rail stripping / when the section is injected (`renderer.js` Theorie path). **Preserved:** `renderRightRailWarnings` (`.rp-mistake--rail`) — not modified.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/warningSystem.js` | `buildTheorieFallbackEntryHtml`; `renderMainFlowMistakesSection` outputs **one** `.theorie-fallback-support` + **N** `.theorie-fallback-entry` (no `.warning-card--theorie-fallback`). |
| `assets/css/premium-refinement.css` | Removed `.warning-card--theorie-fallback` + `.content-fallback__stack` mistakes stack; added **`.theorie-fallback-support`** and **`.theorie-fallback-entry*`** rules (typography, icon, dividers, body list/paragraph rhythm). |
| `tools/clickthrough/verify-right-panel-fallback.mjs` | `integratedMistakes` in layout snapshot; asserts visible mistakes mirror has **`supportCount === 1`**, **`legacyCardCount === 0`**, **`entryCount >= 1`** (incl. focus-mode snapshot). |

## Shared vs module-local

**Shared only** — all modules that use `createRenderer` + `premium-refinement.css` inherit the new markup and styles. No module-specific HTML/CSS changes (Mathematik, Statistik, Mikro1, Makro1, etc. route through the same `warningSystem.js` path).

## Browser verification notes

1. **`node tools/clickthrough/verify-right-panel-fallback.mjs`** — **exit code 0** after Pass 70. Confirms integrated DOM counts on every viewport where `.content-fallback--mistakes` is visible (e.g. Statistik `deskriptiv` Theorie narrow + focus snapshot: **1** support, **0** legacy cards, **2** entries).
2. **Manual (recommended):** Statistik **Theorie** @ **≤1200px** — single outer panel, multiple internal blocks separated by light lines; switch to **desktop** — compact rail **Häufige Fehler** unchanged.
3. **Verbindungen:** No edits to `renderer.js` Verbindungen gating in this pass; script’s Theorie-only connection checks unchanged and still green.

## Completion

Inline **Häufige Fehler** fallback is **no longer** a stack of sibling full **`.warning-card`** shells; it is **one** integrated theory-support surface with **internal** warning rows, aligned with premium theory card hierarchy while keeping warning colour semantics on heading row, icon, title, and dividers.
