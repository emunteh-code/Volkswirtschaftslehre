# Internationale Wirtschaftsbeziehungen (IWB) — status / parity audit — pass 1

**Scope:** Compare **`internationale-wirtschaftsbeziehungen`** to current **platform metadata conventions** (`assets/js/modules.js`, `assets/js/module-content.js`, manifest/bridge pattern). **Audit and small doc/metadata clarifications only** — no content rewrites, no new `contentManifest.js`.

**Date:** 2026-04-08

---

## 1. Registry and module folder

| Artifact | State |
|----------|--------|
| `assets/js/modules.js` | **`status: "live"`**, slug **`internationale-wirtschaftsbeziehungen`**, `href: "./internationale-wirtschaftsbeziehungen/index.html"`. No `sourceCorpusInRepo` flag (unlike quarantined **`mikro2`**). |
| `internationale-wirtschaftsbeziehungen/js/data/courseConfig.js` | **`slug: 'internationale-wirtschaftsbeziehungen'`** aligned with registry. |
| `internationale-wirtschaftsbeziehungen/js/main.js` | **`createPortalApp`** + **`portalBridge`** → `window.__iwbContentManifest`. |
| `internationale-wirtschaftsbeziehungen/js/data/contentManifest.js` | **Present** since `iwb-provenance-curation-pass-1.md` (provenance + bridge). |
| `internationale-wirtschaftsbeziehungen/js/portalHub.js` | Calls **`mountLivePortalBridge('internationale-wirtschaftsbeziehungen')`** — snapshot uses **`getModuleContent`** + **`estimateGeneratedChapterCount`** from narrative `roadmap`/`practice` lengths. |

---

## 2. `module-content.js` parity

### 2.1 Does it need a block **now**?

**No new block required** — one already exists.

- **Key:** **`"internationale-wirtschaftsbeziehungen"`** (quoted string). **Required** in JavaScript because the slug contains **hyphens**; a bare identifier would be invalid. This matches **`docs/architecture/module-quality-standard.md`** §0.4.
- **Lookup:** `getModuleContent("internationale-wirtschaftsbeziehungen")` resolves correctly.
- **Content:** `stageLabel`, `sourceMethod`, `coverageStatus`, `portalGoal`, `audit`, `sourceGroups`, `roadmap` (12 items), `practice` (3 items), `qualityNotes` — aligned in **count** with **`CHAPTERS`** in `internationale-wirtschaftsbeziehungen/js/data/chapters.js` (**12** chapter rows).

### 2.2 Is status clearly documented **before** this pass?

**Partially.** Several docs still implied **`module-content.js`** lacked an IWB entry (e.g. **`module-content-parity-cleanup-pass-1.md`** deferred table, **`content-pipeline.md`** “may still lack” wording). **`repo-audit.md`** and **`module-quality-standard.md`** were already correct about the **quoted key**.

### 2.3 Source materials vs narrative paths

Under **`source-materials/`**, the course tree used here is:

`Grundlagen der internationalen Wirtschaftsbeziehungen/Grundlagen der internationalen Wirtschaftsbeziehungen/`

Relative segments in **`module-content.js`** (e.g. `Vorlesungsfolien/IntWB1.pdf`, `Zusaetzliche_Literatur/...`) match files under that **inner** folder (spot-check: **IntWB1–IntWB12** present; several Zusatz-PDFs present). **Unicode** in real folder names (e.g. **ä** in **Zusätzliche_Literatur**) may differ from **ASCII** spellings in **`module-content.js`** — a known copy/paste caveat, not “missing materials.”

**Not claimed:** Per-slide or per-learning-object **`direct-source`** labeling in runtime data; that would need manifest or inline provenance work.

---

## 3. Generated-portal / dataFactory coupling

`assets/js/generated-portal/dataFactory.js` contains **IWB-specific** branches (e.g. **`buildIwbOverride`**, **`buildIwbPromptBank`**, graph kinds **`iwb_*`**). That is **infrastructure for the generated-portal path**, not proof that the **live** IWB folder uses `generated-portal/main.js`. The **deployed** IWB page uses **`internationale-wirtschaftsbeziehungen/js/main.js`** + **`createPortalApp`**.

---

## 4. Answers to the pass questions

| Question | Answer |
|----------|--------|
| **Needs a `module-content` block now?** | **Already present.** Optional future work: tighten Unicode path spelling or add manifest — not required for “has landing narrative.” |
| **Status clearly documented?** | **Improved** by this pass (see §5); older audit lines that said “missing” were **wrong** for IWB. |
| **Small parity/doc fixes worth making?** | **Yes:** clarify quoted key, **`source-materials`** root for relative paths, and **no `contentManifest.js`** in **`qualityNotes`**; short **`courseConfig.js`** comment; fix **stale** cross-doc references. |

---

## 5. Exact files changed (this pass)

| File | Change |
|------|--------|
| `assets/js/module-content.js` | Under **`"internationale-wirtschaftsbeziehungen"`**, **+3** `qualityNotes`: quoted-key rationale, **`source-materials`** double-folder root for relative paths, explicit **no manifest** caveat. |
| `internationale-wirtschaftsbeziehungen/js/data/courseConfig.js` | **2-line** header comment: slug alignment, no manifest, pointer to this audit. |
| `docs/architecture/content-pipeline.md` | **3** spots: IWB has **`module-content`** (quoted key); Phase 1 bullet updated; table row updated. |
| `docs/audits/module-content-parity-cleanup-pass-1.md` | **1** table row: IWB entry **exists** (correct self-audit). |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | **2** lines: landing narrative / gap list no longer claim **`mikro1`/`mikro2`** missing from **`module-content.js`**; IWB pointer. |
| `docs/audits/iwb-status-parity-audit-pass-1.md` | This document (new). |

---

## 6. Deferred (explicit non-goals)

| Item | Reason |
|------|--------|
| **`contentManifest.js` + provenance curation** | Real engineering pass; needs audit naming and `MIKRO1`-style primary-ref rules — not “tiny cleanup.” |
| **Rewriting IWB theory / `chapters.js`** | Out of scope. |
| **Unifying generated-portal vs live IWB** | Architecture decision; not this pass. |

---

## 7. Summary statement

**IWB** is a **live**, **portal-core** module with a **full** **`module-content.js`** narrative and **in-repo** GIWB PDFs under **`source-materials`**, but it **does not** yet participate in the **manifest + provenance bridge** convention used by modules like **`mikro1`** / **`makro2`**. That is a **tier gap**, not “missing landing metadata.”
