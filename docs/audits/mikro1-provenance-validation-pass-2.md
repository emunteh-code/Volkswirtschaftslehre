# Mikro1 Provenance Validation — Pass 2

## Scope

- Validation and audit only: **no** code changes, **no** anchor edits, **no** pedagogy or portal content rewrites.
- Re-evaluates pass-1 concept→PDF mappings and the `module-content.js` `mikro1` block against defensibility, breadth, and obvious misassignment.
- Re-checks the unresolved `psubst` gap using the same in-repo PDFs (Vorlesungsfolien + Weitere_Unterlagen).

## Exact files inspected

- `mikro1/js/data/contentManifest.js` (`MIKRO1_PRIMARY_REFS_CURATED` / `MIKRO1_CONCEPT_PRIMARY_REFS`)
- `assets/js/module-content.js` (object key `mikro1`: `sourceMethod`, `sourceGroups`, `roadmap`, `qualityNotes`)
- `docs/audits/mikro1-provenance-curation-pass-1.md` (pass-1 rationale table)
- `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_*.pdf` (spot validation via `pdftotext`; targeted re-search for `psubst`)
- `source-materials/Mikroökonomik I/Mikroökonomik I/Weitere_Unterlagen/*.pdf` (targeted `pdftotext` grep for substitute/linear-utility phrasing)

## Overall validation judgment

- **Verdict:** The pass-1 mapping is **defensible as a whole**, **aligned with the VL program slides and extracted body text**, and **still the best available in-repo primary anchors** for the anchored concepts (numbered Vorlesungsfolien are the authoritative spine; supplements were correctly not used as blanket primaries).
- **Not obviously misassigned:** No concept was found whose primary PDF contradicts the stated topic of that VL (e.g. putting Monopol on VL 9).
- **Breadth:** Most anchors are **appropriately scoped** (one or two VL PDFs). Where multiple concepts share the **same** PDF (e.g. VL 6 for several duality lemmas), that reflects **actual lecture bundling**, not an arbitrary portal flattening — still acceptable as *primary* refs, with the usual caveat that primaries are **chapter-level**, not slide-level.

## Anchors confirmed as sound (trustworthy)

The following pass-1 assignments remain **well supported** by VL titles/program lines and/or clear extracted phrases in the corresponding PDFs:

- **VL 1 spine:** `kmm`, `budget` (KMM + Budgetmenge/Budgetgerade appear in VL 1 body text; Budget on program).
- **VL 2 spine:** `praeferenz`, `indiff`, `grs` (explicit program items).
- **VL 3–4 consumer core:** `homothet`, `hausopt`, `marshall`, `cobbd`, `ces_u` (program + CES/homothetie/Marshall/CD content).
- **VL 5 comparative statics:** `normal`, `elast` (incl. empirische Zusatzfolie for `elast` second ref).
- **VL 6 duality block:** `hicks`, `ausgaben`, `shephard`, `indnutzen` (Ausgabenminimierung, Ausgabenfunktion, Shephard, Roy on program/body).
- **VL 7–8 price effects:** `slutsky`, `anfang`, `pkomp` (Slutsky; Ausstattung; Leontief example).
- **VL 9:** `arbeit`.
- **VL 10:** `cv_ev`.
- **VL 11–12 firm cost side:** `produktion`, `skalener`, `kosten`, `grts`.
- **VL 13–15 supply/profit/cost curves:** `gewinn`, `gk_dk`.
- **VL 16–18 markets:** `markt`, `monopol`.

**Also sound with a mild “interpretation” note (still OK):**

- **`ordinal` → VL 2:** Program emphasizes general Nutzenfunktionen before specialized forms in later VLs; reasonable primary for ordinal utility *as taught in sequence*, even if monotone-transformation detail appears gradually across Varian chapters. **Not a misassignment.**

- **`lagrange` → VL 2 + VL 4:** Matches “Exkurs Nebenbedingung” plus full Nutzenmaximierung in VL 4. **Sound.**

- **`lambda` → VL 2 + VL 4:** Consistent with Lagrange introduction and Marshall derivation context. **Sound** (optional future *tightening*: add VL 6 only if you want explicit dual/envelope emphasis — **not required** for correctness).

## Anchors that may need tightening (optional refinement, not errors)

These are **not** requests to change anything in pass 2; they document where a **future** curation pass could add *secondary* refs or slide-level notes if the product needs finer granularity:

1. **Dual concepts share VL 6 (`hicks`, `ausgaben`, `shephard`, `indnutzen`)**  
   - **Issue type:** breadth of *one* PDF covering four portal nodes.  
   - **Assessment:** Pedagogically faithful to one dense lecture; **not** misassigned.  
   - **Optional later:** secondary refs to Breyer PDFs in `Weitere_Unterlagen` *per lemma* only after page-level confirmation.

2. **`gewinn` spans VL 13–14**  
   - **Assessment:** Intentional (analytic vs graphical/short-run emphasis). **Sound.**

3. **`module-content.js` filename spelling for Vorlesungsplanung**  
   - The listed path uses ASCII `Mikrooekonomik` in the filename segment; on disk the PDF name may use Unicode `ö`. This affects **human copy/paste**, not JS execution of the manifest.  
   - **Optional tiny correction pass (metadata only):** normalize displayed path to the on-disk spelling once verified on all clones.

## Re-check: unresolved `psubst`

### What was searched (again)

- Full-text extraction (`pdftotext`) from all `Mikro_1_VL_*.pdf` and all `Weitere_Unterlagen/*.pdf` with expanded patterns (German/English): perfekte Substitute, lineare Nutzenfunktion, linear utility, `u = a x1 + b x2`, CES limits, etc.

### What turned up

- **False-positive hits** on VL 5 / 8 / 10 from patterns matching **“Substitut”** in **Brutto-Substitute** (σ > 1) or **“Substitution”** in equation steps — **not** perfect substitutes in the portal sense.
- VL 5 explicitly mentions **perfekte Komplemente** (→ complements, not `psubst`).
- **VL 3** contains the standard **σ → 0 / σ → ∞** EK-curvature diagram and full **CES** discussion with ρ and σ = 1/(1−ρ). In standard Varian-aligned curricula, **σ → ∞** corresponds to **linear indifference curves / perfect substitutes**, but the **extracted text in this pass** does **not** attach an explicit German phrase such as **“perfekte Substitute”** or a **dedicated linear utility** subsection comparable to the Leontief treatment used to anchor `pkomp` on VL 8.

### Explicit statement on `psubst`

- **`psubst` should remain without a primary ref** under the rule *no guessing*: treating VL 3’s σ → ∞ limit as the sole anchor for the portal’s **`psubst`** chapter would rely on **standard-theory inference** from a figure label, not on an explicit, text-stable “perfekte Substitute / lineare Nutzen” anchor in the extracted materials.
- **Supplements:** No `Weitere_Unterlagen` PDF was found in this pass whose extracted text **clearly and primarily** teaches **consumer** perfect substitutes as a standalone topic (contrast: `CobbDouglas_CES.pdf` is **production**-side).

## Whether a tiny correction pass is warranted

- **On provenance substance:** **No mandatory correction pass.** Current mappings remain the best **text- and program-aligned** in-repo primaries.
- **Optional non-blocking hygiene:** (1) `psubst` stays empty until a human confirms explicit wording or adds a citable slide PDF; (2) optional path spelling normalization for `Vorlesungsplanung_*.pdf` in `module-content.js` for copy/paste fidelity.

## Deliverable recap

| Item | Result |
|------|--------|
| **Files inspected** | `contentManifest.js`, `module-content.js` (`mikro1`), `mikro1-provenance-curation-pass-1.md`, VL + Unterlagen PDFs (text extraction) |
| **Validation judgment** | Pass-1 anchors **defensible**, **not overly broad** relative to lecture structure, **not obviously wrong**; still **best available** VL-based primaries |
| **Trustworthy anchors** | All curated concepts except `psubst` (see “confirmed sound” list above) |
| **May need tightening** | Optional slide-level or secondary refs for VL 6 quartet; optional filename spelling note — **not errors** |
| **`psubst`** | **Remain unresolved**; re-search did not yield a non-inferential primary anchor |
