# Formula accent boundary — full removal pass 41

## Problem

Math and formula UI still showed a **magenta / math-tinted inner frame** in several places:

- **Theorie:** chapter HTML often includes `<div class="math-block">…</div>` inside `.panel` / `.section-block`.
- **Intuition:** `renderFormulaEq` emits `math-block math-block--formula` inside `.intuition-callout-body`.
- **Dedicated formula cards:** `.formula-card .f-eq` used math-mixed borders; Pass 35 had reintroduced a **magenta left rail** on `math-block--formula-card` / `math-block--sidebar`.
- **Right rail:** `#rightPanel .rp-formula` / `.rp-f-eq` borders used `color-mix(..., var(--math-ink) ...)`.
- **Graph info:** `.gi-eq` used a math-tinted border.

Together this read as **“boxed formula inside card”** even after the grey inner-surface pass (35).

## Root causes (exact)

| Source | Location | Mechanism |
|--------|----------|-----------|
| Legacy math strip | `premium-refinement.css` (~L73–77, L1089–1091, L1654 removed) | `#content .math-block` `background: var(--surface2)`, **colored `border-left`**, full `border` |
| Pass 4.1 rail | Same file (~L1440–1448 removed) | Extra **`border-left`** width/color on `.math-block`; **magenta `border-left` on `.formula-card`** (superseded later but confusing) |
| Magenta closure | ~L1654 | `#content .math-block { border-left: 2px solid var(--math-ink) }` |
| Formula card shell | ~L2099–2110 | `border` / `border-left` mixed with **math-ink** |
| Generic `.f-eq` | ~L2124+ | Inner **math-ink** border on `.formula-card .f-eq` |
| Pass 35 | ~L2231+ | **Re-added** `border-left` on `math-block--formula-card` and `math-block--sidebar` “for emphasis” |
| Right rail | ~L544–546, ~L2303–2326 | **math-ink** in `border-color` / `border` mixes |
| Pass 30 schema/ref | ~L2428–2461 | Outer card + `.f-eq` borders used **math-ink** mix |
| Intuition callout | `mikro1/css/styles.css` (and siblings) | **`border-top: 2px`** math-tint on `.intuition-callout` |
| Graph | `.gi-eq` | Border mixed with **math-ink** |

Markup is unchanged: `semanticContent.js` still outputs `math-block math-block--{variant}`; `renderer.js` still uses `variant: "formula"` for intuition anchors and raw theory HTML for Theorie.

## Fix (shared `premium-refinement.css`)

**Single shared layer** (project-wide for portals that load `assets/css/premium-refinement.css` after module CSS). Module-specificity `#content .math-block` beats bare `.math-block` in modules.

### Edits (conceptual)

1. **Normalize `#content .math-block` at source** — transparent background, **no** border / left rail / shadow (early + Pass 3 blocks).
2. **Remove** duplicate Pass 4.1 **`.math-block` / `.formula-card` / `#rightPanel .rp-formula` left-accent** rules that reintroduced rails.
3. **Remove** “magenta closure” `#content .math-block` border-left.
4. **`#content .formula-card`** — single **neutral** border (no separate math-tinted `border-left`).
5. **`.formula-card .f-eq`** — **neutral** border mix (no math-ink in the border).
6. **Pass 30** schema/reference — **neutral** `border-color` / `.f-eq` border.
7. **Pass 35** — drop **magenta left rail** on `math-block--formula-card` / `math-block--sidebar`; keep transparent inner surface intent.
8. **`#rightPanel .rp-formula`** (Phase 5 + detailed block) + **generic `.rp-f-eq`** — **neutral** borders (math mode still clears inner border via Pass 35).
9. **`.gi-eq`** — neutral border + calmer background; **no** math-tinted stroke.
10. **PASS 41 (end of file)** — `#content .math-block { … !important }` safety net so **theory/intuition/task** embeds cannot regain a frame from load-order quirks; **`#content .intuition-callout`** — replace **math-tinted top bar** with the same **neutral** border as other sides (overrides module `border-top`).

**Not changed:** MathJax typesetting, formula text **color** (math-ink on glyphs where already defined), semantic connector **glyph** colors, Pass 33 **Verbindungen** arrow tints, parent section layout.

## Files changed

- `assets/css/premium-refinement.css` — all pass 41 edits + PASS 41 block.
- `docs/audits/formula-accent-boundary-full-removal-pass-41.md` — this audit.

No JS/HTML changes.

## Browser verification notes

1. **Theorie:** open a chapter whose theory HTML includes a `.math-block`; confirm **no** coloured box or **left accent strip** around the math; padding/readability still OK.
2. **Intuition:** open a concept with “Formaler Anker”; confirm **no** inner magenta frame on the formula and **no** thick math-tinted **top** edge on the callout (callout may keep a single calm outline).
3. **Formeln tab:** dedicated **math** formula card — no inner rail on the math strip; outer card may keep a **neutral** border only.
4. **Right rail:** math (and semantic) formulas — **no** math-tinted stroke on the outer `rp-formula` / generic `rp-f-eq` shell beyond neutral grays.
5. **Dark + light:** re-check borders not clipping or disappearing on `--bg` / `--card`.
