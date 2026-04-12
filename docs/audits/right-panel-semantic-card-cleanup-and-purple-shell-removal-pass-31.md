# Right-panel semantic-card cleanup and purple-shell removal — Pass 31

## Root cause

Right-rail formula entries use a **two-layer chrome** in `assets/css/premium-refinement.css`:

1. **`#rightPanel .rp-formula`** — rounded card, **border** with `var(--math-ink)` mix (~18%), **gradient** background, and (elsewhere) a **left accent** (`border-left: 2px` math-ink at ~line 1441).
2. **`#rightPanel .rp-formula .rp-f-eq`** — **second** border with a **stronger** math-ink mix (~34%), own **surface** background, padding, radius.

For **semantic** formulas (`getDisplayMode` → `schema` / `reference`), `rightPanel.js` adds **`rp-formula--schema` / `rp-formula--reference`**. The inner `.rp-f-eq` still used the **same math-forward frame** as true math rows, so entries like **„Anfechtungsgründe“** or **„Vertrauensschaden“** read as **double-boxed** / nested magenta shells beside calmer cards.

**Math** rows (`rp-formula--math` or default math) were not the reported defect; they intentionally keep a stronger inner equation zone.

## Fix (shared)

**File:** `assets/css/premium-refinement.css` — **Pass 31** block added after the Pass 30 right-rail semantic typography strip.

| Selector role | Change |
|----------------|--------|
| `#rightPanel .rp-formula.rp-formula--schema` / `--reference` | **Single** neutral **outer** shell: flat card background, **1px** border from **`--border`** / text mix, **no** math-ink gradient frame, **no** thick left accent, **no** extra box-shadow by default. |
| `:hover` | Subtle border shift + light `shadow-sm` only (no magenta ramp). |
| `.rp-formula.rp-formula--schema .rp-f-eq` / `--reference .rp-f-eq` | **Transparent** inner: **no** border, **no** background, minimal top padding so the label + semantic block are one visual unit. |
| `body.light-mode …` | Card + border align with light tokens. |

**Renderer:** unchanged (`createRightPanelRenderer` markup already exposes `rp-formula--{mode}`).

## Shared vs module-local

**Shared only** — any module that loads `premium-refinement.css` after local `styles.css` picks up the fix (e.g. **recht**, **jahresabschluss**, **internationale-wirtschaftsbeziehungen**, and other portals using the same right rail).

## Browser verification notes

Not run in a headed browser in this pass. Suggested checks:

1. **Recht** — **Anfechtungsgründe**, **Vertrauensschaden** in the **Formeln** right rail (when not on Formeln tab per Pass 26, or on another tab): one outer frame only, inner content not in a second colored box.
2. Another **schema/reference** entry in the same module.
3. **IWB** or **Jahresabschluss** — one semantic right-rail card.
4. A **math** right-rail formula: inner `.rp-f-eq` frame should **remain** (Pass 31 selectors do not match `--math`).

## Honest outlier

- **Theorie** or other surfaces that still use the global **`.semantic-schema`** “chip strip” (Pass 4.1) are **unchanged** — Pass 31 targets **right-rail** `rp-formula--schema` / `--reference` only.
- If a module **does not** load `premium-refinement.css`, local `.rp-formula` rules may still double-frame until aligned.

## Completion

- Semantic right-rail cards use **one** calm outer shell; **no** nested math-ink **`.rp-f-eq`** frame for schema/reference.
- Math rail cards not targeted by Pass 31 shell removal.
