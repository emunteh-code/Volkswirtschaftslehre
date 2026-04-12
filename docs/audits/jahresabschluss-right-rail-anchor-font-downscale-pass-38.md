# Jahresabschluss right-rail anchor font downscale — pass 38

## Problem

In **Jahresabschluss** right-panel **Formeln** cards, semantic **anchor** copy (e.g. “Verluste früh, Gewinne spät”, “Gewinne erst bei Realisation”) used the **shared** Pass 31+32 right-rail typography: **16px** and **font-weight 600** on `.semantic-schema__item` and `.semantic-reference__term`. That read **too close in scale** to the card title (`.rp-f-name`, e.g. `REALISATIONSPRINZIP`) and disturbed the intended hierarchy (section → card title → anchor → support).

## Source of the size (not Jahresabschluss content)

Controlled in **`assets/css/premium-refinement.css`** by Pass 31+32:

- `#rightPanel .rp-formula.rp-formula--schema .rp-f-eq .semantic-schema` / `.semantic-reference` — `font-size: 16px`, `line-height: 1.45`
- `#rightPanel .rp-formula.rp-formula--schema .rp-f-eq .semantic-schema__item`, `.semantic-reference__term` — `font-size: 16px`, `font-weight: 600`
- Contrast rows: `.semantic-display--pres-contrast .semantic-reference__term` — `font-size: 16px`, `font-weight: 600`

Jahresabschluss uses the same `createRightPanelRenderer` + `renderSemanticBlock` stack as other modules; there was **no** prior JA-specific right-rail anchor size.

## Fix (module-local)

**Shared file, scoped selector:** rules prefixed with  
`body[data-portal-module="jahresabschluss"] #rightPanel …`  
so **only** the Jahresabschluss portal is affected.

**Hook:** `jahresabschluss/index.html` already has `<body data-portal-module="jahresabschluss">`.

**Placement:** end of `premium-refinement.css` (after Pass 37 Recht block) so overrides load after Pass 31+32. **`!important`** on adjusted metrics so they always beat the shared rail rules.

### Selectors and values

| Selector area | Property changes |
|---------------|-------------------|
| `… .rp-formula--schema .rp-f-eq`, `…--reference .rp-f-eq` | `font-size: 14.5px`, `line-height: 1.42` |
| `… .semantic-schema`, `… .semantic-reference` | `font-size: 14.5px`, `line-height: 1.42`, root flex `gap` slightly tightened (`0.28em 0.42em`) |
| `… .semantic-reference` (column stack) | `gap: 7px` (was 10px shared) |
| `… .semantic-schema__item`, `… .semantic-reference__term` | `font-size: 14.5px`, `font-weight: 500`, `line-height: 1.42` |
| `… .semantic-reference__note`, contrast `…__note` | `font-size: 12.75px`, `line-height: 1.45` |
| `… .semantic-display--pres-contrast .semantic-reference__term` | same as anchor terms: `14.5px` / `500` / `1.42` |
| `… .semantic-schema__connector` | `font-size: 0.9rem` (proportional to smaller anchor line) |

**Unchanged:** `.rp-f-name` (card title), section labels (`FORMELN` / `.rp-section` headers), wording, semantic structure, chip-free rendering, other modules.

## Files changed

- `assets/css/premium-refinement.css` — Pass 38 block
- `docs/audits/jahresabschluss-right-rail-anchor-font-downscale-pass-38.md` — this audit

## Browser verification notes

On **Jahresabschluss**, open the right rail **Formeln** for chapters that expose semantic formulas (e.g. Realisationsprinzip, Imparitätsprinzip, Latente Steuern):

1. Anchor line(s) should be **visibly smaller** than before and **clearly subordinate** to the uppercase card title.
2. A **two-level** reference (term + note) should still read clearly; notes slightly smaller than terms.
3. Open **another module** (e.g. Recht or Mikro) and confirm right-rail semantic sizes follow **unchanged** Pass 31+32 (no JA body hook → no Pass 38).

No automated visual diff was run in this pass.
