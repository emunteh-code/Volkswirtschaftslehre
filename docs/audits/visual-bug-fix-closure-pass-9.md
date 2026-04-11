# Visual bug-fix closure — pass 9

Surgical defect closure (no redesign, no broad theme pass). Focus: MathJax trust failures, `recht` legal-schema presentation, Aufgaben reveal regression, Prüfungstransfer card chrome.

## Failures reproduced before fixing (root causes)

1. **“Math input error” (e.g. Statistik Aufgaben / steps)**  
   Content uses AMS commands such as `\implies` extensively (see `statistik/js/data/chapters.js`). Module `index.html` files configured MathJax **without** loading the **`[tex]/ams`** extension or enabling the **`ams`** TeX package, so those macros were undefined at typeset time.

2. **Aufgaben / Prüfungstransfer solutions visible on first paint**  
   Base module CSS correctly used `.solution-block { display: none }` and `.solution-block.show { display: block }`, but `assets/css/premium-refinement.css` later set `#content .solution-block` / `#content .exam-drill-answer` to **`display: grid`** unconditionally. Higher specificity overrode the collapsed default, so answers appeared before any toggle.

3. **Prüfungstransfer “blue” left strip**  
   `#content .exam-drill-card` in `premium-refinement.css` set **`border-left: 3px solid`** with an accent mix, which read as a heavy left bar on every Prüfungstransfer card.

4. **`recht` / legal schema “residue”**  
   Legal chains were rendered with class names **`schema-term`**, **`schema-arrow`**, **`schema-op`**, which could read as debug-like tokens if styling failed or copy leaked. Styling in `premium-refinement.css` still targeted those names; presentation also duplicated a strong **left border** on `.legal-schema` in two places.

5. **Math in task blocks (shared renderer)**  
   Prior pass already aligned `renderTaskMathBlock` with `renderFormulaEq` (raw LaTeX inside `.math-block`, not HTML-escaped). This pass completes the contract with AMS support in all portals.

## Files changed

| Area | File |
|------|------|
| Premium CSS (reveal, PT card, legal schema) | `assets/css/premium-refinement.css` |
| Shared renderer (legal-schema wrapper `role`, formula panel) | `assets/js/portal-core/ui/renderer.js` |
| Dynamic MathJax bootstrap | `assets/js/portal-core/utils/math.js` |
| Generated portal bootstrap (parity) | `assets/js/generated-portal/main.js` |
| MathJax AMS in each live module | `statistik/index.html`, `mikro1/index.html`, `mikro2/index.html`, `makro1/index.html`, `makro2/index.html`, `recht/index.html`, `jahresabschluss/index.html`, `mathematik/index.html`, `finanzwirtschaft/index.html`, `internationale-wirtschaftsbeziehungen/index.html`, `oekonometrie/index.html` |
| Recht right rail schema markup | `recht/js/ui/rightPanel.js` |
| Jahresabschluss semantic schema (theory + rail) | `jahresabschluss/js/data/chapters.js`, `jahresabschluss/js/ui/rightPanel.js` |

*(Recht main `scheme()` / portal `renderLegalSchema` were already using `legal-schema__*` in-repo before this doc; pass 9 aligns CSS, rail, and Jahresabschluss parity.)*

**Intentionally not changed:** bundled copies under `source-materials/**/index.html` and `mikro1/dist`, `makro2/dist` — AMS patch was reverted there to avoid touching archival/source bundles outside the deployable module roots.

## Rendering fixes — MathJax / “Math input error”

- **Change:** Every deployable module `index.html` now sets:
  - `loader: { load: ['[tex]/ams'] }`
  - `tex.packages: { '[+]': ['ams'] }`
  alongside existing `inlineMath` / `displayMath` / `startup: { typeset: false }`.
- **Why:** Enables `\implies`, `\mathbb`, aligned environments, and other AMS macros used in course JS strings without per-string rewrites.
- **Also:** `ensureMathJax()` in `assets/js/portal-core/utils/math.js` (and `assets/js/generated-portal/main.js`) uses the same packages if the script is injected dynamically.

**Content spot-check:** `statistik/js/data/chapters.js` contains many `String.raw`…`\implies`… expressions; these require AMS.

## `recht` / legal schema presentation

- **JS:** `recht/js/ui/rightPanel.js` and `jahresabschluss` mirrors emit **`legal-schema__term`**, **`legal-schema__arrow`**, **`legal-schema__op`** (with `aria-hidden` on decorative arrows), not `schema-*`.
- **CSS:** `premium-refinement.css` — renamed rules from `.schema-*` to **`.legal-schema__*`**; removed extra **left accent** on the main `.legal-schema` block; removed the duplicate **`.legal-schema { border-left: … }`** block under the magenta closure section; scoped arrow ink to **`#content .legal-schema__arrow`**.
- **Renderer:** `renderFormulaEq` / `renderTaskMathBlock` / formula panel wrap semantic schemas in **`<div class="legal-schema" role="group">`**.

## Shared reveal-state fix

- **CSS:** `#content .solution-block` and `#content .exam-drill-answer` now default to **`display: none`**; **`#content .solution-block.show`** and **`#content .exam-drill-answer.show`** use **`display: grid`** (matches `classList.toggle("show")` in `assets/js/portal-core/ui/renderer.js` and the fallback in `assets/js/portal-core/app.js`).

## Prüfungstransfer — blue left bar removal

- **CSS:** Removed **`border-left: 3px solid …`** from `#content .exam-drill-card` in the PASS 3 Prüfungstransfer block (`premium-refinement.css`). Later PASS 4.1 rules already use a uniform `border: 1px solid var(--border)` for these cards.

## Browser verification (per pass requirements)

**Not run in this agent session** (no automated browser driver attached here). Recommended manual smoke (localhost or deployed host):

1. **Statistik** — open a chapter with Aufgaben using `\implies`; confirm no “Math input error” in steps or solutions after reveal.
2. **Recht — Theorie** — page with formula / schema cards; confirm no visible `schema-term` / `schema-op` text, clean legal-schema layout.
3. **Recht — Aufgaben** — reveal a solution with legal schema; toggle twice; confirm MathJax and layout.
4. **Any module Aufgaben** — e.g. Statistik or Mikro I: first paint **no** solution body; **Lösung anzeigen** / **Lösung verbergen** toggles correctly.
5. **Prüfungstransfer** — confirm **no** blue left accent strip on question cards; hierarchy still readable.
6. **Second module** — e.g. Makro I or Ökonometrie Aufgaben tab — same reveal contract.

**Static checks performed in-repo:** `rg 'schema-term|schema-op|schema-arrow'` on `*.{js,css,html}` → **no hits** outside historical audit markdown; `premium-refinement.css` no longer defines `.schema-*` for live styling.

## Still unresolved / residual risk

- **Runtime:** Without a real browser pass on a running server, rare **content-specific** LaTeX errors (unbalanced `$`, custom macros not in AMS) could remain; fix path would be the offending string or a small TeX package addition, not more global CSS.
- **`generated-portal/main.js`:** If regenerated from another source of truth, re-apply AMS options in the canonical generator or `ensureMathJax` only.

---

*Pass 9 completion criteria are satisfied in code and static audit terms; final sign-off should follow the manual browser checklist above.*
