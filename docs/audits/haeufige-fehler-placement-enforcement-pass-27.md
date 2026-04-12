# „Häufige Fehler“ placement enforcement — Pass 27

## Misplacement pattern found

**Pass 24** introduced `shouldMoveWarningToRail()` so that `.warn-box` **defaults** to the right rail, but **`data-warning-placement="inline"`** kept the same markup **in the main Theorie column** as large inline warning cards.

**Makro I** (`makro1/js/data/chapters.js`) set every `warn()` helper to **`inline`**. That produced the failure mode described for Pass 27:

- Main theory **section cards** contained prominent mistake callouts (e.g. **„Nicht sofort rechnen“**, **„Frist nicht vermischen“**).
- The same content was **not** in `#rpMistakes`, so the right-panel **„Häufige Fehler“** block stayed **empty** while the shell remained (hidden only when `railWarnings.length === 0` — here inline warnings never populated `railWarnings`).

Other modules already used default rail behaviour or explicit `data-warning-placement="rail"`; **mikro1**, **mikro2**, **statistik**, etc. embed `.warn-box` without `inline`, so they were already stripped to the rail by `getWarningSystemData`.

## Correction (shared layer)

**`getWarningSystemData`** in `assets/js/portal-core/ui/warningSystem.js` now treats **every** `.warn-box` inside `entry.theorie` as rail-only content:

- Parse theory HTML, collect each non-empty `.warn-box` into **`railWarnings`**, **remove** the node from the DOM fragment.
- **`inlineWarnings`** is always **`[]`** (kept in the return object for callers that still read the field).
- **`allWarnings`** equals **`railWarnings`**.
- Removed **`shouldMoveWarningToRail`** and **`normalizeInlineWarningMarkup`** (no theory-column `.warn-box` / `.warning-card--inline` path).

Right panel behaviour was already correct: **`createRightPanelRenderer`** calls `getWarningSystemData(entry)` and fills **`#rpMistakes`** with **`renderRightRailWarnings(warningData.railWarnings)`**, hiding the mistakes **`.rp-section`** when the list is empty.

## Module-local alignment

| File | Change |
|------|--------|
| `makro1/js/data/chapters.js` | `warn()` now emits **`data-warning-placement="rail"`** (documentation / consistency; placement no longer depends on this attribute). |

## Files changed (summary)

| File | Role |
|------|------|
| `assets/js/portal-core/ui/warningSystem.js` | **Shared** enforcement: all `.warn-box` → `railWarnings`, stripped from theory HTML. |
| `makro1/js/data/chapters.js` | **`warn()`** attribute aligned with rail-only policy. |

## Warning items “moved” from theory to right panel (Makro I)

All **`warn('…', '…')`** callouts in **Makro I** `theorie` strings (~40 titles), including the screenshot pair:

- **Nicht sofort rechnen**
- **Frist nicht vermischen**

plus every other Makro I `warn()` title (VGR, Gütermarkt, Multiplikator, Geld, Banken, IS-LM, Politikmix, Realzins, Arbeitsmarkt, Phillips, IS-LM-PC, Erwartungen, etc.). **No text was deleted**; it is only **removed from the parsed theory fragment** and **reappears** in the right rail as **`rp-mistake`** articles.

## Shared vs module-local

- **Placement rule:** **Shared** — `getWarningSystemData` (portal-core), consumed by **`renderer.js`**, **`rightPanel.js`**, and **mikro1**’s renderer import of the same module.
- **Data tweak:** **Module-local** — Makro I `warn()` helper only.

## Browser verification notes

Not executed in a headed browser in this pass. Recommended checks:

1. **Makro I** → concept **„Makroökonomik als Denkrahmen…“** → **Theorie**: theory sections contain definitions/mechanisms **without** the two large inline warn strips; right panel **„Häufige Fehler“** lists those items.
2. **Statistik** (or **mikro1**) concept with `.warn-box` in theory: same — no warn boxes in main card, rail populated.
3. Concept with **no** `.warn-box` in `theorie`: right **„Häufige Fehler“** section **hidden** (no empty shell).

## Completion

- Recurring `.warn-box` mistake content **no longer** renders inside Theorie main cards.
- It **does** render in the right-panel **„Häufige Fehler“** region when present.
- Empty rail section remains **hidden** when there are no `railWarnings`.
