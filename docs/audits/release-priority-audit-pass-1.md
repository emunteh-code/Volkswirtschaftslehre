# Release-priority audit — pass 1

**Date:** 2026-04-08  
**Type:** Read-only consolidation after backbone migration, granularity/provenance work, exam expansion tracks, second-wave passes (**statistik**, **IWB**, **makro2**), and **mikro2** quarantine guard **pass 2**.

**Method:** Cross-read of `assets/js/modules.js`, `docs/audits/platform-status-cleanup-audit-pass-1.md`, `docs/audits/benchmark-gap-audit-pass-1.md`, `docs/audits/provenance-coverage-audit-pass-1.md`, `docs/audits/mikro2-status-guard-pass-2.md`, and the cited second-wave audit files. Spot-check of `main.js` for **IWB** and **makro2** (**`mistakeReview`**).

**No code or content was modified in this pass.**

---

## 1. Executive summary

The **eleven** `status: "live"` modules in `MODULES` are **deployable** as a static multi-page app. **Nine** of them share the **canonical pattern**: `contentManifest.js` + `portalBridge` + `createPortalApp` with the usual exam/SRS/mastery stack. **Two** live modules **do not**: **`mikro2`** (by **policy / quarantine**) and **`mathematik`** (structural lag, not quarantined).

Several **benchmark-gap** recommendations from **`benchmark-gap-audit-pass-1.md` §5** are **already superseded** by later work (**statistik** excellence pass, **IWB** mistake loop, **makro2** intuition coherence + existing **mistakeReview**). That audit file should be treated as **partially stale** for “next passes” until someone runs a **docs-only sync** (listed below as a candidate pass).

**Nothing here claims** “release-complete,” “source-complete,” or “zero known gaps.”

---

## 2. Classification (four buckets)

### 2.1 Release-ready / leave alone (for this release slice)

Treat as **“done enough”** for shipping **unless** a course steward opens a **scoped** content or source task:

| Module | Why “enough” now | Known residual (honest) |
|--------|------------------|-------------------------|
| **mikro1** | Benchmark stack: manifest, bridge, mistake loop, graphs, exams, curated VL anchors | **`psubst`** empty primaries; slide-level anchors not in schema |
| **makro1** | Full portal-core pattern + manifest | Smaller syllabus vs mikro1 by design; exams remain **platform-added-drill** |
| **makro2** | Manifest, bridge, **mistakeReview**, exams, graphs, **20/20** intuition aligned to **`CHAPTERS`** (after second-wave) | Optional depth (graphs, exams) always possible; **benchmark-gap** row on **mistakeReview** is **out of date** |
| **oekonometrie** | Renderer depth + R + manifest + loop | Large syllabus → periodic re-audit vs `source-materials` risk |
| **statistik** | Manifest, bridge, **mistakeReview**; **second-wave** added dual full exams + four intuition lines + per-exam provenance | **`nichtparametrisch`** primaries still **`[]`**; no **`<canvas>`** in full exams (documented gap) |
| **finanzwirtschaft** | Manifest, loop, exams | Fewer graphs than mikro1 (acceptable modality trade-off per benchmark audit) |
| **jahresabschluss** | Strong text + exams + manifest + loop | No graphs by design |
| **recht** | Text/doctrinal + manifest + exams + loop | Per-paragraph grounding not in schema |
| **internationale-wirtschaftsbeziehungen** | Manifest, bridge, graphs, exams; **second-wave** added **mistakeReview** + learner backbone + CSS for review UI | Baseline renderer only; **Zusatz-PDFs** mostly unmapped (**`iwb-provenance-curation-pass-1.md`**) |

### 2.2 One more high-value pass worth doing (bounded)

| Target | What | Why it still matters |
|--------|------|----------------------|
| **`mathematik`** | Add **`contentManifest.js`** + **`portalBridge`** + provenance curation **when** `source-materials` paths are mapped | Only **non-quarantined** live module **without** manifest bridge; structural outlier on landing/backbone story |
| **Audit doc sync** | Refresh **`benchmark-gap-audit-pass-1.md` §5** and **`repo-audit.md`** §3 tables | Prevents agents from re-planning **statistik / IWB / makro2** “next passes” that already landed |
| **`statistik` · `nichtparametrisch`** | Either attach **defensible** VL PDF(s) or add an explicit **permanent empty** rationale in manifest notes | Closes the last **intentional empty** primary in an otherwise strong manifest (**`provenance-coverage-audit-pass-1.md`**) |
| **`finanzwirtschaft`** (optional) | More **graph** concepts **only** if course materials justify | Benchmark noted **graph count** vs mikro1; not blocking release |

### 2.3 Blocked / frozen (by policy or missing inputs)

| Item | Freeze rule |
|------|-------------|
| **`mikro2`** **`direct-source`** / file-level provenance | **Frozen** until **`source-materials/`** contains a **Mikro II** corpus. Do not invent PDF paths. |
| **`mikro2`** **`contentManifest.js`** + curated **`PROVENANCE_BY_CONCEPT`** | **Frozen** with the same gate; **`mikro2-status-guard-pass-2.md`** is the inventory. |
| **`mikro2`** **`portalBridge` / mistake-review parity** | **Frozen** as a **parity requirement** until product owners decide post-corpus; optional **engineering-only** wiring without manifest is a **separate** decision (not “source unlock”). |

### 2.4 Low-value / should not receive more effort now

| Item | Reason to defer |
|------|-----------------|
| **Cross-module exam `<canvas>`** cloning from mikro1 | High effort, module-specific exam authenticity; pick **one** module if ever justified |
| **Flattening all renderers** to mikro1 **`enhanceRenderedSurface`** | Broad infrastructure; violates “no big bang” migration style |
| **Per-paragraph provenance** for **recht** / **jahresabschluss** | Out of current schema; diminishing returns vs file-level refs |
| **Perfect landing ↔ `MODULES` alignment for `r/`** | Architectural/product choice; small user-facing win vs doc churn |
| **Chasing mikro1 graph count** in **finanzwirtschaft** without new source figures | Cosmetic parity, not source-faithful |

---

## 3. Module-by-module status (compact)

| Module | Manifest + bridge | Mistake loop | Primary provenance posture | Release note |
|--------|--------------------|--------------|----------------------------|--------------|
| mikro1 | Yes | Yes | Strong; one empty concept | Ready |
| mikro2 | **No** | **No** | **Quarantined** | Live; **not** source-grounded in-repo |
| makro1 | Yes | Yes | Good | Ready |
| makro2 | Yes | Yes | Good | Ready |
| oekonometrie | Yes | Yes | Good | Ready |
| statistik | Yes | Yes | Partial (**`nichtparametrisch`**) | Ready; one curation/doc gap |
| finanzwirtschaft | Yes | Yes | Good | Ready |
| mathematik | **No** | Varies with storage | Not in provenance matrix as “strong” | **Structural follow-up** |
| jahresabschluss | Yes | Yes | Good | Ready |
| recht | Yes | Yes | Good (file-level ceiling) | Ready |
| internationale-wirtschaftsbeziehungen | Yes | Yes (post second-wave) | Good + optional PDF depth | Ready |

---

## 4. What should now be considered “done enough”

- **Backbone:** Shared **`createPortalApp`** shell, storage keys, quick/full exam adapters, and **manifest bridges** for **nine** live modules; **documented exceptions** for **mikro2** (quarantine) and **mathematik** (missing manifest).
- **Closed-loop learning:** **Fehlerprotokoll** + learner backbone on the **curated** quantitative/text portals that adopted it, including **IWB** and **makro2** after second-wave work (verify **`main.js`** when in doubt).
- **Statistik exams + intuition:** No longer the **thin single-sheet** state described in the **original** benchmark-gap audit; two exam documents + **INTUITION** aligned to chapter ids for the former gaps.
- **Makro2 data hygiene:** **INTUITION** keys match **`CHAPTERS`**; redundant **coursework** alias keys removed; mastery checklist consolidated onto navigable concepts (**`makro2-second-wave-excellence-pass-1.md`**).
- **Mikro2 governance:** Quarantine and **all** major references surfaced for contributors (**`mikro2-status-guard-pass-2.md`**).
- **Provenance honesty:** **`provenance-coverage-audit-pass-1.md`** matrix remains the honest **strong / partial / blocked** split; **statistik** improved on **exams** but **not** on **`nichtparametrisch`** file list.

---

## 5. Strict priority: next **three** smartest passes (if any)

1. **Documentation sync (audit-only)** — Update **`docs/audits/benchmark-gap-audit-pass-1.md`** §5 and **`docs/audits/repo-audit.md`** stale tables (e.g. **mikro2** concept count, **IWB/makro2** “missing mistakeReview”) so **release planning** and **agent** instructions match repo **as of 2026-04-08**. *No code; highest leverage to stop wrong work.*

2. **`mathematik` manifest + bridge + curation** — Once **`source-materials/Mathematik`** (or agreed paths) exist, add **`mathematik/js/data/contentManifest.js`**, **`portalBridge`** in **`main.js`**, and curated primaries so the last **non-quarantined** outlier joins the **nine-module** backbone pattern.

3. **`statistik` · `nichtparametrisch` primaries** — **Either** one small curation pass attaching real PDF(s) from **`source-materials/Statistik/...`** **or** an explicit manifest note that primaries stay empty **by decision** (no invented anchors). Closes the **partial** rating for **statistik** in the provenance matrix **or** documents the permanent exception.

*If resources allow only one engineering pass before release, choose **2** (mathematik) for structural parity, or **3** if Mathematik sources are not ready.*

---

## 6. What to leave unfinished on purpose

- **`mikro2`** source-backed expansion **until** corpus policy — **intentional** freeze.
- **Canvas-in-exam** parity across modules — **intentional** deferral (effort vs authenticity).
- **Renderer unification** — **intentional** deferral (module strengths preserved per **AGENTS.md**).
- **Slide-level** and **paragraph-level** provenance everywhere — **intentional** schema ceiling for now.

---

## 7. Files touched (this audit)

| File | Change |
|------|--------|
| `docs/audits/release-priority-audit-pass-1.md` | **New** (this document). |

**No application code modified.**

---

## 8. Remaining risks (release-shaped)

- **Stale planning docs** mis-route effort until **pass #1** above is done.
- **`mathematik`** remains the **odd live module** without a manifest story on the landing/backbone narrative.
- **`mikro2`** remains **live** but **not** academically **`direct-source`** in-repo — must stay **visibly** labeled (registry + **AGENTS.md** + guard doc).
