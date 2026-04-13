# Public-core module hardening — Pass 1

**Date:** 2026-04-12  
**Scope:** `mikro1`, `statistik`, `recht`, `oekonometrie` only.  
**Intent:** Trust, rendering, provenance clarity, and automated regression coverage for the four modules intended as the portal’s most defensible public core — without claiming a full hostile line-by-line audit of every concept against every PDF page.

---

## 1. Exact source basis (on-disk, this repo)

| Module | Primary corpus (relative to repo root) | Curated mapping / notes |
|--------|------------------------------------------|-------------------------|
| **mikro1** | `source-materials/Mikroökonomik I/Mikroökonomik I/` (Vorlesungsfolien `Mikro_1_VL_*.pdf`, etc.) | `docs/audits/mikro1-provenance-curation-pass-1.md` |
| **statistik** | `source-materials/Statistik/Statistik/` (e.g. `Vorlesungen/VL_*.pdf`, `Tutorien/…`) | `docs/audits/statistik-provenance-curation-pass-1.md` |
| **recht** | `source-materials/Recht/Recht/` (`Vorlesungen/§_*-K.pdf`, `Übungen/…`) | `docs/audits/recht-provenance-curation-pass-1.md` |
| **oekonometrie** | `source-materials/Einführung in die Ökonometrie/Einführung in die Ökonometrie/` (WiSe PDF, exercises, tutorials; some filenames use a PUA character for umlauts) | `docs/audits/oekonometrie-provenance-curation-pass-1.md` |

Folder names on disk may use composed Unicode for umlauts; manifests use stable path strings checked against the curation audits.

---

## 2. Problems found (this pass)

1. **Ökonometrie manifest comment (correctness / maintainer trust):** `oekonometrie/js/data/contentManifest.js` documented the R-filename placeholder as `U+F704` while the code uses `OE_PUA = '\uEF84'` (U+EF84, Private Use Area). Mis-documented code points erode trust in filename anchoring.
2. **Mikro1 provenance layer note parity:** Theory-layer `notes` in `mikro1/js/data/contentManifest.js` did not explicitly point maintainers and reviewers to the same **file-level** curation anchor used by Statistik, Recht, and Ökonometrie (`docs/audits/...-provenance-curation-pass-1.md`), weakening cross-module consistency for the “public core” set.
3. **Automated trust coverage gap for public-core-only surfaces:** `tools/clickthrough/trust-regression-pass-1.mjs` already exercised provenance, graphs (where defined), R shell (Ökonometrie), Statistik Aufgaben reveal, and Mikro1 Prüfungstransfer — but **math-leak scanning** and **solution-reveal** were not systematically run across all four public-core modules on both **Theorie** and **notation-heavy** tabs (e.g. Recht Formeln, Ökonometrie Formeln, Mikro1 Formeln).

**Not claimed as closed this pass (honest gaps):**

- Full **Phase 1** source-to-concept mapping with enumeration of every omission, compression, or ambiguity for all chapters in all four modules.
- Professor-level **legal** or **exam-board** sign-off for Recht doctrine wording.
- Exhaustive **task density** and **Prüfungstransfer** sufficiency review per learning objective.

---

## 3. Exact fixes applied

| Change | Why | Files |
|--------|-----|-------|
| Corrected Unicode code-point documentation for `OE_PUA` | Aligns comment with actual `\uEF84` used for on-disk R script names | `oekonometrie/js/data/contentManifest.js` |
| Extended theory-layer provenance note with file-level audit pointer | Same pattern as other backbone modules; improves provenance completeness for UI breakdown | `mikro1/js/data/contentManifest.js` |
| Extended **math-leak** targets | Recht (Theorie + Formeln), Ökonometrie (`t_test` Formeln), Mikro1 (`lagrange` Formeln) | `tools/clickthrough/trust-regression-pass-1.mjs` |
| Extended **solution-reveal** to all four modules | Mikro1 `budget`, Recht `was_ist_recht`, Ökonometrie `matrix_notation` in addition to Statistik `deskriptiv` | `tools/clickthrough/trust-regression-pass-1.mjs` |

No academic substance was invented; changes are **metadata**, **tooling**, and **regression coverage** only.

---

## 4. Browser / automation verification

**Command (from repo):**

```bash
cd tools/clickthrough && npm ci && npx playwright install chromium && node trust-regression-pass-1.mjs
```

**Environment:** Chromium via Playwright; static server `python3 -m http.server` on port **8900** (default).  
**Result (2026-04-12):** `trust-regression-pass-1: all checks passed.`

**Checks exercised (including public-core relevance):**

| Check | Public-core coverage |
|--------|----------------------|
| Math / markup leak scan (`$$`, `\[`, `\texttt{`, `legal-schema__`, …) | Statistik deskriptiv Theorie+Formeln; Mikro1 budget Theorie + lagrange Formeln; Recht was_ist_recht Theorie+Formeln; Ökonometrie t_test Formeln |
| Provenance footer (ⓘ + summary line) | mikro1 `budget`, statistik `deskriptiv`, recht `was_ist_recht`, oekonometrie `matrix_notation` (+ other modules in list) |
| Graph integrity (canvas, title, no error strip) | mikro1 budget; statistik bivariat; oekonometrie ols_objective |
| Aufgaben Lösung reveal | statistik deskriptiv; mikro1 budget; recht was_ist_recht; oekonometrie matrix_notation |
| Prüfungstransfer / exam drill toggle | mikro1 budget intuition |
| R-Anwendung shell | oekonometrie matrix_notation (desktop + narrow viewport) |
| Right-panel fallback + focus mode | statistik deskriptiv (proxy for shared renderer) |

**Note:** Sandboxed runs may fail to launch Chromium; a full local run should use an unsandboxed environment if Playwright reports the browser closing immediately.

---

## 5. Required summary table

| Module | Source fidelity status | Rendering integrity status | Pedagogical strength | Provenance completeness | Public representativeness | Safe as primary study source? | Remaining caveat | Action result |
|--------|------------------------|-----------------------------|----------------------|---------------------------|---------------------------|-------------------------------|------------------|----------------|
| **mikro1** | Strong curated VL anchors; not every concept sentence traced to a slide line in this pass | Trust script: no raw TeX/markup leaks on scanned surfaces | Broad theory + graphs + drills; depth varies by concept | Primary refs + layer notes; theory note now cites curation doc | Best benchmark in repo | **No** — use alongside VL/Übung | Residual risk: compressed “exam-style” synthesis vs. primary slides | **improved but still caution-heavy** |
| **statistik** | VL/Tutorium PDFs mapped in curation doc; portal text is authored distillate | Trust script clean on scanned tabs; MathJax edge cases always possible | Strong for revision loops; inference-heavy topics need course parity checks | Complete manifest pattern | High utility public face | **No** — use alongside official materials | Notation/test wording must stay aligned with lecturer conventions | **improved but still caution-heavy** |
| **recht** | Anchored to named VL/Übung PDFs; not a substitute for codex study | Semantic schema + tasks OK on scanned routes; legal tables are not “math proof” | Gutachtenstil emphasis; case volume limited by design | Complete manifest pattern | Good for method + structure | **No** — legal advice / exam norms vary | Doctrinal precision requires human legal QA beyond this repo | **improved but still caution-heavy** |
| **oekonometrie** | Anchored to course PDF + R corpus; PUA filename legacy documented correctly | Trust script clean on scanned formeln + R tab | Strong matrix/OLS progression; advanced users will demand more proofs | Complete manifest pattern | Strong technical face | **No** — use alongside Übung + tables | R tab is didactic, not a full stats computing course | **improved but still caution-heavy** |

---

## 6. Phase 8 — Hard judgment (no automatic “victory”)

### mikro1

1. **Can it represent the portal publicly?** Yes, as the **technical and UX benchmark** — not as a verbatim course clone.  
2. **Trust level:** High for **architecture and rendering**; medium-high for **line-by-line slide fidelity** without a full diff pass.  
3. **“With caution” vs strongest tier:** **Strongest tier in the repo** for integrated product quality; still **“with caution”** for exclusive exam prep.  
4. **What still blocks full defensibility:** Lack of a published, concept-by-concept “slide paragraph ↔ portal paragraph” audit in this pass.

### statistik

1. **Public representation:** Yes for **statistics learning UX**; with explicit “authored distillate” framing.  
2. **Trust level:** High on **automated leak checks**; ongoing vigilance needed on **notation** and **test narrative**.  
3. **Tier:** Strong core **if** caveats on lecturer-specific conventions are kept visible.  
4. **Blocker:** Inference and regression chapters need periodic re-diff against VL PDFs when materials update.

### recht

1. **Public representation:** Yes for **study scaffolding** (method, structure, vocabulary); no for “authoritative legal text.”  
2. **Trust level:** High for **consistency of exam-style structure**; medium for **black-letter nuance**.  
3. **Tier:** Strong **pedagogical** core, not a law treatise.  
4. **Blocker:** Any public claim beyond “aligned to provided course PDFs” requires independent jurist review.

### oekonometrie

1. **Public representation:** Yes for **econometrics literacy** in the WiSe-line framing of the repo.  
2. **Trust level:** High on **graph/R shell** regression checks; medium-high on **every diagnostic shortcut** under hostile expert review.  
3. **Tier:** Among the best **interactive** cores; still **caution-heavy** as sole preparation for advanced exams.  
4. **Blocker:** Asymptotics, robust inference, and time-series depth are necessarily compressed.

---

## 7. Completion assessment (against user completion rule)

The user completion rule asked not to mark the pass “complete” if meaningful **source ambiguity**, **rendering mistrust**, **missing provenance**, **weak task/transfer**, or **unfinished seams** remain **across the four modules**.

- **Rendering / provenance / core interactions:** The extended **trust-regression** suite passed; this is strong evidence for the **scanned surfaces**, not universal proof for every tab of every concept.  
- **Source ambiguity / task sufficiency:** **Not** exhaustively cleared in this pass.

**Conclusion:** Pass 1 **improves defensibility and regression locking** for the public core. It does **not** certify that all four modules are free of academic or legal risk under the strictest hostile scrutiny. Further passes should prioritize **concept-level source diffs** and **task coverage metrics** if the bar is “primary study source without external materials.”

---

## 8. Files touched (this pass)

- `mikro1/js/data/contentManifest.js`
- `oekonometrie/js/data/contentManifest.js`
- `tools/clickthrough/trust-regression-pass-1.mjs`
- `docs/audits/public-core-module-hardening-pass-1.md`
