# Semantic Formeln inner-card rollback — Pass 49

## Mistaken removal (source)

**Pass 45** in `assets/css/premium-refinement.css` (tail block, **removed in Pass 49**) applied:

- `#content .formula-card.formula-card--schema .f-eq` / `--reference .f-eq` → **`background: transparent !important`**, no border, no radius, no inset shadow.
- `#rightPanel .rp-formula.rp-formula--schema .rp-f-eq` / `--reference .rp-f-eq` → same **flattening** with `!important`.

Rationale in Pass 45 had been to avoid a “double frame” with the outer formula card. In practice, removing the **inner grey semantic slab** hurt **hierarchy and readability** for text-based Formeln (Leitobjekt, Leitfrage, legal/semantic chains, etc.).

**Pass 30** had already set schema/reference `.f-eq` to a **flat transparent** inner panel before Pass 45; Pass 45 then **locked** that flattening with `!important`, also overriding rail `.rp-f-eq`.

## Rollback scope (semantic / text formeln only)

| Target | Restored behaviour |
|--------|---------------------|
| **`#content .formula-card--schema` / `--reference` `.f-eq`** | Same **inset slab** as general `#content .formula-card .f-eq`: **16px** radius, **border**, **surface2/card gradient**, **inset highlight**; body typography preserved from Pass 30. **Padding:** default **20px 22px**, **compact** **18px 20px**, **extended** **22px 24px**. |
| **`#rightPanel .rp-formula--schema` / `--reference` `.rp-f-eq`** | Restored **grey inner card** aligned with default `#rightPanel .rp-formula .rp-f-eq` (12px radius, border, surface mix, inset shadow). **Light mode** tuned background/border on the same selectors. |
| **`formula-card--math`** | **Unchanged** — still **Pass 35** (inner strip removed for true math). |
| **`.rp-formula--math` rail** | **Unchanged** — still **Pass 35**. |

Module-only sizing (e.g. **Pass 37 Recht**, **Pass 38 Jahresabschluss** on rail typography/padding) **remains**; those blocks did **not** set `background: transparent` on `.rp-f-eq` and continue to layer on top of the restored inset where they use `!important` on padding/radius only.

## Files changed

| File | Change |
|------|--------|
| `assets/css/premium-refinement.css` | Pass 30: comment + **restore** schema/reference `.f-eq` inset; add **layout-extended** padding; tighten **compact** padding. Pass 31: comment + **restore** schema/reference `.rp-f-eq` inset + light mode. **Delete** entire Pass 45 `!important` block. **Mobile** `@media (max-width: 880px)` schema/reference `.f-eq` padding **14px 16px**. **Pass 49** trail comment (documents rollback). |

**No** JS / content / `renderSemanticBlock` changes.

## Shared vs module-local

**Project-wide shared CSS** only (`premium-refinement.css`). Any module that links this file (Finanzwirtschaft, Recht, Jahresabschluss, IWB, etc.) picks up the rollback automatically.

## Browser verification notes

**Not run in the agent environment.** Suggested checks:

1. One **schema** / **reference** Formel card in **Recht** or **Jahresabschluss** (screenshot-style Leitobjekt / verbal structure): **inner grey inset** visible, text clearly anchored.
2. Second module (e.g. **Finanzwirtschaft** or **IWB**): same.
3. **`formula-card--math`** concept: **no** second grey slab inside `.f-eq` (Pass 35 still applies).
4. **Right rail** on a concept with semantic formulas: **`.rp-f-eq`** inset restored, outer `.rp-formula--schema` row still shell-less (Pass 31 outer row unchanged).

## Completion

- Inner **grey semantic card** is back for **text / semantic** Formeln and matching **right-rail** semantic rows.
- **Math** cards and **MathJax** surfaces are not part of this rollback and should match pre-pass behaviour for math.
