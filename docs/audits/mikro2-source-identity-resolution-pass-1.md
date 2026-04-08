# Mikro2 source-identity resolution — pass 1

**See also:** repo policy and doc/metadata flags — `docs/audits/mikro2-quarantine-roadmap-pass-1.md`.

## Scope and constraints

- **Audit/diagnosis only.** No portal code or content was modified in this pass.
- **No fake source grounding:** Conclusions rest on folder inventory, file naming, module metadata, and comparison to standard curriculum labels—not on unverified PDF text extraction for Mikro II (no such tree exists in-repo).

## Exact portal files inspected

| Path | Role |
|------|------|
| `mikro2/js/data/chapters.js` | Module title, 13 concept ids/topics, `CONTENT` theory/tasks |
| `mikro2/js/data/stepProblems.js` | Step-drill topics and identifiers (`m2_*`) |
| `mikro2/js/data/courseConfig.js` | `courseLabel` / `courseTitle` / `homeIntro` |
| `mikro2/js/main.js` | Shell wiring (no source-material paths) |

### File requested but absent

| Path | Status |
|------|--------|
| `mikro2/js/data/contentManifest.js` | **Does not exist.** The `mikro2` module has no canonical provenance manifest comparable to e.g. `makro2/js/data/contentManifest.js` or `recht/js/data/contentManifest.js`. |

## Exact prior audits inspected (`docs/audits/`)

| File | Relevance to identity |
|------|------------------------|
| `mikro2-source-grounded-audit-pass-1.md` | States `source-materials/makro2-src` was missing; then compares **`mikro2`** portal content to **`Makroökonomik II`** PDFs/portal under `source-materials/Makroökonomik II/...`. Conclusion there: domain mismatch (micro topics vs macro corpus). **Important:** That audit correctly shows `mikro2` does **not** align with **Makro II** materials; it does **not** establish what `mikro2` *should* align with, because no **Mikro II** corpus was used as baseline. |
| `mikro2-normalization-audit-pass-1.md` | Shell/UI alignment vs `mikro1`; no source identity resolution. |
| `mikro2-concept-granularity-pass-1.md` | Splits game theory, oligopoly, information; no source mapping. |
| `mikro2-concept-granularity-pass-2.md` | Splits GE, welfare, externalities; no source mapping. |
| `mikro2-content-enrichment-pass-1.md` | Depth/drill enrichment; explicitly not a source-ingest pass. |

## Exact `source-materials` structures inspected

### Top-level folders (inventory)

Listed `source-materials/` (non-exhaustive for zip files): **Einführung in die Ökonometrie**, **Finanzwirtschaft des Unternehmens**, **Grundlagen der internationalen Wirtschaftsbeziehungen**, **Jahresabschluss**, **Makroökonomik I**, **Makroökonomik II**, **Mathematik**, **Mikroökonomik I**, **Recht**, **Statistik**, plus symlink `oekonometrie-src`.

**Observation:** There is **no** folder named `Mikroökonomik II` (or obvious variant) under `source-materials/`.

### Plausible micro-related corpus: `Mikroökonomik I`

Inspected:

- `source-materials/Mikroökonomik I/Mikroökonomik I/`
- `Vorlesungsfolien/` — **19 PDF files**, all named `Mikro_1_VL_*.pdf` (lecture indices 1–18 plus `Mikro_1_VL_5_EmpirischeElastizitaeten.pdf`).
- `Weitere_Unterlagen/Vorlesungsplanung_Mikroökonomik_I.pdf` (filename explicitly **Mikroökonomik I**).

**Observation:** The available micro lecture PDF set is **branded and numbered as Mikro I**, not Mikro II. There is **no** parallel `Mikro_2_VL_*.pdf` series in this tree from the filename inventory.

### Cross-check: `assets/js/module-content.js`

Searched for a `mikro2:` block: **none found.** Unlike several other modules, the central module-content roadmap does not currently register `mikro2` with explicit source PDF paths.

## Exact diagnosis

### 1. Is `mikro2` a genuine Mikro II module with missing source materials?

**Yes — as a *curriculum label and topic map*, with *missing in-repo course materials*.**

Evidence:

- `courseConfig.js` declares **`Mikroökonomik II`** and an intro line consistent with advanced micro (Spieltheorie, AGG, Marktversagen, asymmetrische Information).
- `chapters.js` / `stepProblems.js` cover standard **second-semester micro** blocks: static/dynamic game theory, Cournot/Bertrand/Stackelberg, Edgeworth/Walras-style GE, welfare theorems and measurement, Pigou vs Coase/trading, public goods, adverse selection vs moral hazard/signaling/screening.

There is **no** competing label inside the module suggesting it is secretly another course (e.g. Makro II).

### 2. Is `mikro2` effectively built from another course’s content (wrong domain)?

**Not from the Makro II PDFs** in `source-materials`. The portal’s **substantive economics** is micro theory; **Makro II** sources are open-economy macro and policy—structurally different. The earlier `mikro2-source-grounded-audit-pass-1.md` already demonstrated that mismatch.

**Whether every sentence is traceable to a specific instructor PDF:** **Cannot be asserted** from this repository, because **no Mikro II source tree is present** to verify against.

### 3. Is the repo in a mixed/contaminated state?

**Mixed documentation / audit pairing, not mixed module content.**

- **Module content:** `mikro2` reads as one coherent **Mikro II-style** portal.
- **Audits:** `mikro2-source-grounded-audit-pass-1.md` paired `mikro2` with **Makro II** materials (and referenced a non-existent `makro2-src` path). That is a **wrong baseline for source grounding**, not evidence that `mikro2` was generated from Makro II.
- **Sibling module:** `makro2` exists separately and maps to Makro II–appropriate topics; naming similarity (`mikro2` vs `makro2`) increases confusion but the two modules are **not** interchangeable academically.

## Roadmap vs quarantine

### Should `mikro2` remain on the current roadmap?

**Yes, as a deployable learning module**, if the product goal includes advanced micro coverage. Nothing in this pass indicates the module is the “wrong course” in the sense of macro-vs-micro confusion **inside the portal**.

### Should it be “quarantined” until proper source materials exist?

**Quarantine only source-truth / provenance claims**, not necessarily the whole module:

- **Do not** imply parity with modules that have a full `source-materials/...` tree and manifest-backed refs (e.g. `makro2`, `recht`) until a **Mikro II** corpus is added and mapped.
- **Optional UI/copy stance:** Treat narrative layers as **source-distilled / platform-added** unless and until files are linked—consistent with AGENTS.md when materials are absent.

**Hard quarantine (remove or hide the module)** is **not** required by this diagnosis alone; the blocker is **academic traceability to course PDFs**, not internal incoherence.

## Exact recommended next action

1. **Ingest official Mikro II course materials** into `source-materials/` under a stable path (e.g. `source-materials/Mikroökonomik II/<inner>/` mirroring other courses), including Vorlesungsfolien/Übungen or equivalent.
2. **Add a canonical `mikro2/js/data/contentManifest.js`** (or equivalent backbone) **after** those paths exist, and run a **dedicated provenance curation pass** mapping each `CHAPTERS` id to verified files (file-level first; page/slide only with extraction).
3. **Correct audit hygiene:** Future “source-grounded” passes for `mikro2` must use **Mikro II** (or explicitly scoped textbook/lecture notes), **not** Makro II, and must not reference non-existent `makro2-src` unless that path is actually created and populated.
4. **Optional:** If Mikro II at this institution is folded into a longer Mikro I sequence, **prove it from syllabus/slide titles** before remapping `mikro2` to `Mikro_1_VL_*.pdf`; the current filenames top out at **VL 18** with an explicit **Mikro I** syllabus artifact—**insufficient** on inventory alone to ground full `mikro2` without reading PDFs or obtaining Mikro II files.

## Is further provenance or source-grounded content work on `mikro2` justified right now?

**No — not as source-faithful work against `source-materials/`.**

**Reason (explicit):** There is **no Mikro II source tree** in `source-materials/` to anchor concepts without inventing or guessing. Continuing enrichment or provenance curation **as “direct-source”** would violate the repository’s non-negotiable source rule.

**What remains justified without new materials:** Platform/shell work, clearly labeled **platform-added** drills/explanations, and **planning**—not claims of course-PDF alignment.

## Syntax / tooling

- No code was changed; no module syntax check was required for this document.
