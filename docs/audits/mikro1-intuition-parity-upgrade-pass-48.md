# Mikro I intuition parity upgrade — Pass 48

## Mismatch (old Mikro I intuition presentation)

Even after portal **Pass 46** (shared `#content .intuition-callout*` rules), Mikro I could still read as the **older, looser** block because:

1. **Cascade order:** `mikro1/css/styles.css` loads **before** `assets/css/premium-refinement.css`. Earlier module rules (e.g. `.intuition-callout` with **heavy `surface2` fill**, **`border-top: 2px` math-ink**, **`gap: 12px`**, **mono** label) competed visually with Pass 46 for anything not fully overridden or where **MathJax** added extra vertical chrome.
2. **MathJax display:** Global `mjx-container[jax="CHTML"][display="true"]` rules (block margins / padding) applied inside the anchor unless **tighter overrides** scoped to the intuition anchor.
3. **Raw `.math-block`:** Module `.math-block` defaults (padding, line-height) plus inner equation could still feel like a **large neutral slab** next to the lighter portal modules that use the same premium file end-state.

Net effect: **too much empty vertical space**, weaker **label ↔ anchor ↔ explanation** rhythm than the reference portal pattern.

## Target standard

Align Mikro I **Intuition → Formaler Anker** with the **compact integrated** pattern from **Pass 46** (and the pass-48 metric tweaks): outer **`16px 18px`**, label stack **`8px`**, anchor zone **`16px 18px`**, body **`10px`** between anchor and explanation, explanation **`14px` / `line-height: 1.6`**, **no** math-tinted top bar on the whole callout, **tight** display-math margins inside the anchor only.

**No** changes to intuition copy, `formula.eq`, or `formula.desc` strings.

## Fix approach (module-local)

**File:** `mikro1/css/styles.css` — appended **Pass 48** block.

- Selectors use **`#content .mikro1-intuition …`** so specificity **beats** both legacy `.intuition-callout` rules in the same file and generic **`#content .intuition-callout*`** rules in premium (extra class in the chain).
- Restates the Pass 46 **layout model** (flex callout, anchor zone, `.intuition-callout-desc` typography) with Mikro-specific tuning:
  - Anchor zone padding **`16px 18px`** (per pass brief; portal default remains **`18px 20px`** elsewhere).
  - **`mjx-container[display="true"]`** inside **`.intuition-callout-anchor`**: minimal margin/padding, no border/background slab from global MathJax styling.

**Markup:** unchanged in this pass — `buildMicroIntuitionPanel` in `mikro1/js/ui/renderer.js` already emits **`.intuition-callout-anchor`** and **`.intuition-callout-desc`** (Pass 46).

## Files changed

| File | Change |
|------|--------|
| `mikro1/css/styles.css` | Pass 48 appended: Mikro I–scoped intuition formal-anchor parity. |
| `docs/audits/mikro1-intuition-parity-upgrade-pass-48.md` | This audit. |

**Not changed:** `assets/js/portal-core/ui/renderer.js`, `assets/css/premium-refinement.css` Pass 46 — other modules stay on the shared standard; Mikro I is tightened **without** regressing them (selectors require **`.mikro1-intuition`**).

## Shared vs module-local

| Layer | Role |
|--------|------|
| Pass 46 (existing) | Shared portal intuition anchor baseline. |
| **Pass 48** | **Module-local** CSS only for `#content .mikro1-intuition`. |

## Browser verification notes

**Not run in the agent environment.** Suggested checks:

1. Mikro I — two concepts with **Formaler Anker** (display `$$…$$` if possible): confirm **compact** anchor, **no** giant grey slab, label/desc **integrated**.
2. **Statistik** (or another portal module): intuition anchor **unchanged** vs before Pass 48 (no `.mikro1-intuition` → Pass 48 rules do not apply).

## Residual

- Mikro I still uses a **raw** `<div class="math-block">${formula.eq}</div>` instead of portal **`renderFormulaEq` / semantic** pipeline; presentation is aligned by CSS; future parity could unify **markup generation** only if product wants identical semantic wrappers (out of scope for Pass 48).
