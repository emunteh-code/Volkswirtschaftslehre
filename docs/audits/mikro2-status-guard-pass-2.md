# Mikro2 status guard — pass 2

**Date:** 2026-04-08  
**Type:** Documentation and maintainer-metadata only — **no** `mikro2/js/data/*` learning content changes, **no** portal-core refactors.

**Purpose:** Inventory **all substantive repo references** to **`mikro2`** and add **small, safe cross-links** so future contributors and agents cannot easily mistake the module for **`mikro1`-style** `direct-source` + manifest + mistake-loop parity.

---

## 1. Authoritative status (single glance)

| Dimension | `mikro2` today |
|-----------|----------------|
| **`source-materials/`** | **No** `Mikroökonomik II` tree (only Mikro I materials on disk for micro). |
| **`contentManifest.js`** | **Absent** — no `PROVENANCE_BY_CONCEPT`, no `FULL_EXAM_PROVENANCE` bridge in module data. |
| **`mikro2/js/main.js`** | **`createPortalApp`** without **`portalBridge`** and without **`mistakeReview`** (contrast **mikro1**, **makro2**, **statistik**, …). |
| **Landing registry** | `assets/js/modules.js`: **`sourceCorpusInRepo: false`** + **`sourceStatusNote`**. |
| **Product stance** | **Live** and deployable; quarantine applies to **source-truth claims** and **editor expectations**, not removal. |

**Policy docs (diagnosis + rules):** `docs/audits/mikro2-quarantine-roadmap-pass-1.md`, `docs/audits/mikro2-source-identity-resolution-pass-1.md`.

---

## 2. Repo reference inventory (grep-driven, pass 2)

Grouped for scanning. Paths are repo-relative.

### 2.1 Contributor entry points (highest signal)

| File | Role |
|------|------|
| `AGENTS.md` | **Module note: mikro2** — corpus gap, no fake `direct-source`; links to this pass. |
| `README.md` | Structure tree + bullet: quarantine + **this doc**. |
| `assets/js/modules.js` | `slug: "mikro2"`, **`sourceCorpusInRepo`**, **`sourceStatusNote`**. |
| `assets/js/module-content.js` | `mikro2` landing narrative block + **`qualityNotes`** → this doc. |
| `mikro2/js/main.js` | **File header** — quarantine, no manifest bridge, no mistake review. |
| `mikro2/js/data/courseConfig.js` | Existing top comment (unchanged this pass): corpus / manifest gap. |
| `mikro2/js/portalHub.js` | Comment: hub slug only, no manifest. |
| `mikro2/index.html` | HTML comment for maintainers → this doc. |

### 2.2 Architecture / quality docs

| File | Role |
|------|------|
| `docs/architecture/content-pipeline.md` | Known issues table: **`mikro2`** manifest / bridge / mistakeReview gap + pointer here. |
| `docs/architecture/module-quality-standard.md` | **§0.5** documented exceptions table for **`mikro2`**. |
| `docs/architecture/learning-data-model.md` | Footnote under manifest table: **`mikro2`** guard + this doc. |

### 2.3 Audits and benchmarks (context, not policy)

| File | Role |
|------|------|
| `docs/audits/mikro2-quarantine-roadmap-pass-1.md` | **See also (pass 2)** at top. |
| `docs/audits/mikro2-source-identity-resolution-pass-1.md` | **See also** extended. |
| `docs/audits/mikro2-source-grounded-audit-pass-1.md` | Warning block → this doc (historical wrong baseline). |
| `docs/audits/mikro2-content-enrichment-pass-1.md` | Lead line: enrichment ≠ lift quarantine. |
| `docs/audits/mikro2-concept-granularity-pass-1.md` | Lead line: granularity ≠ PDF grounding. |
| `docs/audits/mikro2-concept-granularity-pass-2.md` | Same. |
| `docs/audits/mikro2-normalization-audit-pass-1.md` | Lead line: shell ≠ corpus / manifest. |
| `docs/audits/module-content-parity-cleanup-pass-1.md` | Historical parity work for **`mikro2`** block; **See also** → this doc (pass 2). |
| `docs/audits/provenance-coverage-audit-pass-1.md` | Blocked row + gaps row → this doc. |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | Risk table row → this doc. |
| `docs/audits/benchmark-gap-audit-pass-1.md` | §2.9 verdict footnote → this doc. |
| `docs/audits/repo-audit.md` | Status note → this doc (stale counts elsewhere in that file remain a separate cleanup). |

### 2.4 Module runtime / data (names only — **content not edited**)

| File | Role |
|------|------|
| `mikro2/js/data/fullExams.js` | Exam id/title strings reference “Mikro II” / `mikro2` naming (simulation/drill semantics unchanged). |
| `mikro2/js/data/srsConfig.js` | Storage key prefix `mikro2_*`. |

---

## 3. Exact files changed (pass 2)

| File | Clarification added |
|------|---------------------|
| `AGENTS.md` | Bullet: read **`mikro2-status-guard-pass-2.md`** before assuming manifest / mistakeReview / `direct-source` parity. |
| `README.md` | **`mikro2/`** bullet: add link to **this doc** alongside quarantine roadmap. |
| `assets/js/modules.js` | **`sourceStatusNote`**: append pointer to **this doc**. |
| `assets/js/module-content.js` | **`mikro2.qualityNotes`**: one line → **this doc**. |
| `mikro2/js/main.js` | **Comment block** (no behavior change). |
| `mikro2/js/portalHub.js` | **One-line comment**. |
| `mikro2/index.html` | **HTML comment** in `<head>`. |
| `docs/audits/mikro2-quarantine-roadmap-pass-1.md` | **See also (pass 2)** paragraph. |
| `docs/audits/mikro2-source-identity-resolution-pass-1.md` | **See also** → **this doc**. |
| `docs/audits/mikro2-source-grounded-audit-pass-1.md` | Warning → **this doc**. |
| `docs/audits/mikro2-content-enrichment-pass-1.md` | Lead **Source status** line. |
| `docs/audits/mikro2-concept-granularity-pass-1.md` | Lead **Source status** line. |
| `docs/audits/mikro2-concept-granularity-pass-2.md` | Lead **Source status** line. |
| `docs/audits/mikro2-normalization-audit-pass-1.md` | Lead **Source / backbone** line. |
| `docs/architecture/content-pipeline.md` | Known issues row expanded (**manifest / portalBridge / mistakeReview** + **this doc**). |
| `docs/architecture/module-quality-standard.md` | **§0.5** table **`mikro2`** exception. |
| `docs/architecture/learning-data-model.md` | **`mikro2` guard** paragraph after manifest field table. |
| `docs/audits/repo-audit.md` | Status note → **this doc**. |
| `docs/audits/benchmark-gap-audit-pass-1.md` | §2.9 **Guard pass 2** line. |
| `docs/audits/provenance-coverage-audit-pass-1.md` | Matrix + gaps rows → **this doc**. |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | Risk table **`mikro2`** row → **this doc**. |
| `docs/audits/mikro2-status-guard-pass-2.md` | **This file** (new). |
| `docs/audits/module-content-parity-cleanup-pass-1.md` | **See also** paragraph → **this doc**. |

---

## 4. Explicit non-changes

- **No** edits to **`mikro2/js/data/chapters.js`**, **`stepProblems.js`**, **`intuition.js`**, **`fullExams.js`** body, graphs, or theory HTML.
- **No** new **`contentManifest.js`**, **no** **`portalBridge`**, **no** **`mistakeReview`** wiring (out of scope for “guard pass 2”; would be a product decision after corpus policy).
- **No** rewrites of **`docs/audits/repo-audit.md`** body tables (still contain known-stale **`mikro2` concept count** — called out in **`platform-status-cleanup-audit-pass-1.md`**).

---

## 5. Remaining risks (honest)

- **Stale sibling docs:** Older audits may still imply **`module-content.js` “omits” mikro1/mikro2** or **7 concepts** for **`mikro2`** — fixed only where this pass touched; full repo doc sweep not done.
- **Benchmark table:** **`benchmark-gap-audit-pass-1.md`** still lists **`makro2`** without **`mistakeReview`** in one summary row; that may be **stale** relative to current **`makro2/js/main.js`** — **not** corrected here (out of scope).
- **Human habit:** Agents may still skim only **`mikro1`** as benchmark; **`AGENTS.md`** + **this inventory** are the intended corrective.

---

## 6. Suggested next step (not executed)

When Mikro II materials exist under **`source-materials/`**: add **`mikro2/js/data/contentManifest.js`**, wire **`portalBridge`** + provenance, then re-run a **provenance curation** pass and update **`modules.js`** flags — as already outlined in **`mikro2-quarantine-roadmap-pass-1.md`**.
