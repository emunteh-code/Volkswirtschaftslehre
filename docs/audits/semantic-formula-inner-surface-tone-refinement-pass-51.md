# Semantic formula inner-surface tone refinement — Pass 51

## Previous treatment (too heavy)

After **Pass 49**, semantic **`formula-card--schema` / `--reference`** inner **`.f-eq`** in main content used a **strong surface2 gradient**:

- `linear-gradient(180deg, surface2 84% / card 16%, surface2 94% / card 6%)`
- Border `border ~ 90% border / 10% text`
- **Inset** highlight `box-shadow: inset 0 1px 0 rgba(255,255,255,0.04)`

That read as a **visible grey slab** inside the outer formula card.

**Right rail** **`.rp-formula--schema|reference .rp-f-eq`** used **`surface2 88% / card 12%`** with a similar inset line — again **fill-led** rather than **border-led**.

## New treatment (Pass 51 — border-led, near-card fill)

| Surface | Fill | Border | Shadow |
|---------|------|--------|--------|
| **`#content` … `.formula-card--schema|reference .f-eq`** | `color-mix(card 96%, surface2 4%)` — **flat**, close to outer card | Slightly **stronger** edge: `border 76% border / 24% text` | **`none`** |
| **Same, light mode** | `card 99% / surface2 1%` | `88% / 12%` | — |
| **`#rightPanel` … `--schema|reference .rp-f-eq`** | `card 94% / surface2 6%` | `78% / 22%` | **`none`** |
| **Rail, light mode** | `card 98% / surface2 2%` | `86% / 14%` | **`none`** (removed strong white inset) |

**Unchanged:** padding, radius, typography, semantic de-chip rules, **math** cards (**Pass 35**), module-only **Recht Pass 37** / **Jahresabschluss Pass 38** sizing (`padding` / `font-size` `!important` still layer on top).

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 30 comment; **`.f-eq`** semantic main + **light mode**; **`.rp-f-eq`** semantic rail + **light mode**. |
| `docs/audits/semantic-formula-inner-surface-tone-refinement-pass-51.md` | This audit. |

## Shared vs module-local

**Shared only** — any module linking **`premium-refinement.css`** (Jahresabschluss, Recht, Finanzwirtschaft, IWB, Mikro*, Statistik, …) picks up the tone shift automatically.

## Browser verification notes

**Not run in the agent environment.** Suggested checks:

1. **Main Formeln tab** — one **schema** / **reference** card (e.g. Recht / Jahresabschluss): inner zone should **blend** with the card; **border** still defines the anchor.
2. **Right rail** — same concept, semantic row: **lighter** inner, no grey “input field” slab.
3. **Light mode** — same two surfaces; no harsh inset glow on rail.

## Completion

Inner semantic zones should **not** read as a **heavy grey inset**; hierarchy is **border + spacing + type**, with **minimal** fill contrast to **`var(--card)`**.
