# Formeln tab / right-panel duplication correction — Pass 26

## Misunderstanding corrected

**Pass 25** changed the **Formeln** tab main column to a short **rail-hint** strip and kept the **right-panel** formula list visible on that tab. That inverted the product rule for deduplication.

**Pass 26** restores the intended split:

| Area | On **Formeln** tab |
|------|---------------------|
| **Main `#content`** | Full **`renderFormulaPanel`** (large `formula-grid` / `formula-card`s) — unchanged behaviour from before Pass 25. |
| **Right panel „Formeln“** | **Entire section hidden** (`#rpFormulas` cleared, parent **`.rp-section`** `hidden`) so there is **no duplicate** compact formula rail and **no empty header shell** (the `<h4>Formeln</h4>` is inside the hidden section). |

On **any other tab**, the right-panel formula section is filled and shown again when `entry.formeln` exists.

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/renderer.js` | Removed **`renderFormulaTabMainHint`**; **Formeln** tab again uses **`renderFormulaPanel(entry)`**. |
| `assets/js/portal-core/ui/rightPanel.js` | Reintroduced **`isFormulaTab`** (`options.currentTab === "formeln"`). When true: clear **`#rpFormulas`**, **`formulasSection.hidden = true`**. Otherwise unchanged populate path. |
| `assets/css/premium-refinement.css` | Removed unused **`.formula-tab-main-hint`** rules from Pass 25. |

## Shared vs module-local

**Shared only** — `createRenderer` + `createRightPanelRenderer` in portal-core; all modules that use the standard shell inherit the behaviour.

## Browser verification notes

Not run in a headed browser in this pass. Suggested checks:

1. **Statistik** (or any module): open **Formeln** — main area shows full formula cards; right rail **no** „Formeln“ block.  
2. Switch to **Theorie** — right rail **„Formeln“** returns with compact cards when formulas exist.  
3. **No** visible empty right-panel „Formeln“ chrome on the Formeln tab (`hidden` on the whole section).

## Completion

- Main Formeln tab content is **not** stripped.  
- Right-panel formula section is **hidden only** while **Formeln** is active.  
- Outside Formeln, right-panel formulas **still** render when data exists.
