# Right-panel semantic-formula uniformity fix — Pass 32

## Inconsistency classes found

1. **Global Pass 4.1 `.semantic-schema` / `.semantic-reference`** — padded bordered “tray” plus **`.semantic-schema__item` / `.semantic-reference__entry` chips** applied everywhere, including the right rail. Chains looked like **token rows**, reference stacks like **boxed pairs**, and single phrases still inherited chip chrome when resets were incomplete.
2. **Pass 31** removed the **double math-ink frame** but left **`.rp-f-eq` fully transparent**, so semantic content sat visually **flat** against the outer card while some shapes still picked up **different** flex/gap behaviour from fragmented `#rightPanel .semantic-display--pres-*` rules (14px vs 13.5px contrast terms, etc.).
3. **Pass 28** added **extra `#rightPanel .rp-f-eq .semantic-display`** rules (14–15px) that **competed** with Pass 30/31 without scoping to `rp-formula--schema|reference`.

## Single rendering family chosen

**“One inner anchor zone per item”** — for `#rightPanel .rp-formula.rp-formula--schema` and `.rp-formula--reference`:

| Layer | Role |
|--------|------|
| **`.rp-formula`** (semantic only) | **Transparent** wrapper — vertical rhythm only, **no** second card frame. |
| **`.rp-f-name`** | Shared **uppercase kicker** (11px, body stack, muted). |
| **`.rp-f-eq`** | **Single** neutral inset (radius 10px, 12×14 padding, calm border) = the **only** boxed “anchor zone” for all non-math shapes. |
| **`.semantic-schema` / `.semantic-reference`** (inside `.rp-f-eq`) | **No** outer chip tray: flex layout, **16px** / 1.45 base, **de-chipped** terms (`__item` / `__term`). |
| **Connectors** | One weight/colour recipe for arrows (`semantic-schema__connector`). |
| **Contrast** | Same **16px** terms and **13.5px** notes as other reference rows; dividers **only** inside the shared inner zone. |

**Math** rail (`.rp-formula--math` and default math path) is **unchanged** — still uses the existing outer card + inner equation surface.

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | **Replaced** Pass 31 block and following fragmented `#rightPanel .semantic-display--pres-*` rules with **Pass 31+32** unified block (outer transparent, inner inset, typography, de-chip, connector + contrast). **Removed** obsolete Pass 28 `#rightPanel .rp-f-eq .semantic-display*` rules and dropped `#rightPanel` from the generic `#content .semantic-display` font line (rail semantic fully governed below). |

## Shared vs module-local

**Shared** — `createRightPanelRenderer` already outputs `rp-formula--{mode}`; no JS/template change.

## Browser verification notes

Not run in a headed browser in this pass. Suggested:

1. **Jahresabschluss** — right rail **Formeln**: several semantic chains (e.g. Inventur → …) on one concept — same inner box, 16px line, no chip tokens.
2. **Recht / Finanzwirtschaft / IWB** — mixed phrase, chain, and paired reference cards: **one** visual language.
3. **Math** formula in the same rail — inner **math** frame still present; not flattened to semantic.

## Honest outlier

- **`.legal-schema`** inside **`#rightPanel`** (if ever used for `eq`) is not explicitly restyled in Pass 32; only **`schema` / `reference`** modes from `renderSemanticBlock` are covered. If a module injects raw `legal-schema` HTML in the rail, extend with the same selectors.

## Relation to Pass 31

Pass 31’s “no nested magenta shell” goal is **kept**: semantic **outer** `.rp-formula` is borderless; the **single** visible frame is the **neutral** `.rp-f-eq` inset (Pass 32), not a second math-ink box.
