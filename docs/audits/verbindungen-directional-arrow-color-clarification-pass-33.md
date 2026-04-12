# Verbindungen directional-arrow color clarification — Pass 33

## What changed

**Direction semantics (unchanged in data):** “Setzt voraus” / `uses` → **←** (backward / prerequisite). “Wird gebraucht für” / `usedBy` → **→** (forward / next use).

**Visual change:** Only the **arrow glyphs** in **`#rpConnections`** use restrained color; chapter titles and row layout are unchanged.

## Files changed

| File | Role |
|------|------|
| `assets/js/portal-core/ui/rightPanel.js` | **Shared** markup: `←` spans use **`arrow arrow--dir-back`**, `→` spans use **`arrow arrow--dir-forward`** (four template sites: grouped + flat lists). |
| `assets/css/premium-refinement.css` | **Shared** `#rightPanel .rp-conn .arrow.arrow--dir-back|forward` colors + light-mode tweaks. |

## Final arrow color logic

| Class | Meaning | Default (dark) | Light mode |
|--------|---------|------------------|------------|
| `.arrow--dir-back` | ← prerequisite | `color-mix(... #c75f5a 80%, var(--muted) 20%)` | `#b42318`–muted mix |
| `.arrow--dir-forward` | → used-for | `color-mix(... var(--semantic-green, #34a36a) 78%, var(--muted) 22%)` | `#15803d`–muted mix |

Both use **`font-weight: 700`** on the symbol only so direction reads quickly without painting whole rows.

## Shared vs module-local

**Fully shared** — any module using `createRightPanelRenderer` from portal-core and `premium-refinement.css` gets the same behavior (e.g. recht, mikro1, makro1, statistik, …).

## Browser verification notes

Not run in a headed browser in this pass. Check: **Verbindungen** with both prerequisite and “wird gebraucht für” links; confirm **←** reads red-leaning, **→** green-leaning, labels unchanged; repeat in **light mode** if used.

## Outlier

- Modules that **duplicate** Verbindungen markup without importing `rightPanel.js` would need the same **`arrow--dir-*`** classes + CSS (none found besides portal-core).
