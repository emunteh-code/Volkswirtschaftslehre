# Right-panel warning retention + Formeln-tab main card removal — Pass 25

## Misunderstanding corrected

1. **Formeln tab + right rail**  
   `createRightPanelRenderer` treated **`currentTab === "formeln"`** as a signal to **hide the entire right-panel „Formeln“ section** and clear `#rpFormulas`. That matched an old assumption („formulas only in the main tab“) but **contradicts** the intended UX: the **right rail must stay the canonical formula strip** on every tab, including **Formeln**.

2. **Main vs right**  
   The duplicate to remove is the **large `formula-grid` / `formula-card` block in `#content`**, not the compact **`rp-formula`** cards in `#rpFormulas`.

3. **Häufige Fehler**  
   Pass 24 already keeps mistakes in the **right panel** (default rail) and out of theory for normal `.warn-box` entries. Pass 25 does **not** change that logic; it **fixes the accidental emptying** of right-panel formulas on the Formeln tab.

## What was restored (right panel)

| Area | Change |
|------|--------|
| **„Formeln“** (`#rpFormulas` + section) | On the **Formeln** tab, the block is **filled and shown** again whenever `entry.formeln` has entries — same behaviour as on Theorie / other tabs. |

**File:** `assets/js/portal-core/ui/rightPanel.js`  
- Removed `isFormulaTab` and the branch that did `formulasNode.innerHTML = ""` + `formulasSection.hidden = true` for Formeln.

## What was removed / replaced (main content)

| Tab | Before | After |
|-----|--------|--------|
| **Formeln** | Main `#content` received full **`renderFormulaPanel`** (`formula-grid` + large `formula-card`s). | Main `#content` receives **`renderFormulaTabMainHint`** — one short **„Formeln“** section that tells students to use the **right column** for viewing/copying formulas. |

**File:** `assets/js/portal-core/ui/renderer.js`  
- New **`renderFormulaTabMainHint(entry)`** (used only when `activeTab === "formeln"`).  
- **`renderFormulaPanel`** remains in the file for any other caller / future use; it is no longer used for the Formeln tab main column.

## Styling (shared)

**File:** `assets/css/premium-refinement.css`  
- Light typography rules for **`.formula-tab-main-hint`** in `#content` (readable, bounded width).

## Häufige Fehler (unchanged in this pass)

- **Right rail:** still populated via `getWarningSystemData` → `renderRightRailWarnings` (Pass 24 compact **`.rp-mistake--rail`** markup).  
- **Theory column:** duplicate `.warn-box` content still stripped for rail by default; **`data-warning-placement="inline"`** (e.g. Makro I) still keeps intentional inline cards.

No edits to `warningSystem.js` in Pass 25.

## Shared vs module-local

All changes are **shared** (`portal-core` + `premium-refinement.css`). **No** per-module `renderer.js` forks required — every module that uses `createRenderer` / `createRightPanelRenderer` from portal-core picks this up.

## Browser verification notes

Not run in a headed browser in this pass. Suggested checks:

1. **Formeln tab** — open a concept with formulas: **right** „Formeln“ section lists **rp-formula** cards; **main** area shows only the short hint, **no** large formula grid.  
2. **Theorie tab** — right rail still shows **Häufige Fehler** when warnings exist; theory has no duplicate `.warn-box` (except explicit `inline`).  
3. **Dark mode** — same layout; right panel not collapsed solely because of Formeln.  
4. Hard refresh (ES modules).

## Completion

- Right-panel **Formeln** is **not** emptied on the Formeln tab.  
- Right-panel **Häufige Fehler** behaviour is unchanged and still filled from rail warnings.  
- Formeln tab **main** column no longer duplicates the large formula-card grid.
