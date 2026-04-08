# Release-readiness summary — pass 1 (closure)

**Date:** 2026-04-08  
**Type:** Repo-level **summary / closure only**. **No** runtime code changes in this pass.  
**Method:** Consolidation of **`docs/audits/release-priority-audit-pass-1.md`**, **`docs/audits/docs-sync-pass-1.md`**, **`docs/audits/benchmark-gap-audit-pass-1.md`** (post–docs-sync), **`docs/audits/provenance-coverage-audit-pass-1.md`**, **`docs/audits/mikro2-status-guard-pass-2.md`**, **`docs/audits/statistik-nichtparametrisch-provenance-decision-pass-1.md`**, **`docs/audits/platform-status-cleanup-audit-pass-1.md`**, and spot alignment with **`assets/js/modules.js`** (`status: "live"`).

**This document does not claim:** source completeness, zero pedagogical gaps, or parity with every dimension of **`mikro1`**.

---

## 1. Exact files changed (this pass)

| File | Change |
|------|--------|
| `docs/audits/release-readiness-summary-pass-1.md` | **Created** (this file). |
| `docs/audits/provenance-coverage-audit-pass-1.md` | **One table cell** in §6 (**statistik** / **`nichtparametrisch`**) — align wording with **`statistik-nichtparametrisch-provenance-decision-pass-1.md`** (avoids “needs curation” when decision is **empty by design**). |

---

## 2. Closure summary (what the major work achieved)

- **Backbone:** Eleven **`live`** modules in **`assets/js/modules.js`** ship as a **static multi-page** portal using **`createPortalApp`** (and module-local adapters). **Nine** follow the **canonical** pattern: **`contentManifest.js`** + **`portalBridge`** + shared exam/SRS/mastery plumbing where adopted.
- **Second-wave upgrades (named audits):** **statistik**, **internationale-wirtschaftsbeziehungen (IWB)**, and **makro2** received targeted excellence passes (exams/intuition/mistake loop and/or data hygiene) documented in their respective audit files; **benchmark-gap** and **repo-audit** were **synced** in **`docs-sync-pass-1`** so planning docs match that reality.
- **Provenance honesty:** Concept-level **VL/file** primaries are **curated** in manifests for the manifest-bearing modules; **full exams** are **explicitly** labeled **`platform-added-drill`** (not archival **`direct-source`**) in those manifests. **Two** intentional concept-level empty primaries remain **documented**: **`mikro1` · `psubst`**, **`statistik` · `nichtparametrisch`** (see §5).
- **Quarantine governance:** **`mikro2`** is **live** but **frozen** for corpus-backed **`direct-source`**, **`contentManifest.js`**, and **mistake-loop/manifest parity** as **release requirements** until policy and **`source-materials`** change (**`mikro2-status-guard-pass-2.md`**).
- **Statistik · `nichtparametrisch`:** A **bounded re-check** concluded primaries stay **`[]` by decision**, not by neglect (**`statistik-nichtparametrisch-provenance-decision-pass-1.md`**).

---

## 3. Platform classification (four buckets)

| Bucket | Meaning in this summary |
|--------|-------------------------|
| **Release-ready / done enough** | **Deployable** as-is; residual gaps are **documented** and **not** silent placeholders. Suitable for a **release slice** unless a course steward opens a **scoped** follow-up. |
| **Partial but acceptable** | **Shippable** with **visible** caveats: weaker backbone story, coarse granularity, or **one** honest provenance hole — **no** recommendation to block deploy on that alone. |
| **Blocked / intentionally frozen** | **Do not** expand **source-truth** or **manifest parity** without **new inputs** (corpus, product decision). |
| **Optional future upgrades** | Valuable **only** with **source justification** or **explicit product** choice; **defer** by default. |

---

## 4. Final judgment: is the platform release-ready **enough**?

**Yes — for a static learning portal release** in the sense of **AGENTS.md**: deployable, no mandated completion of every benchmark dimension, and **honest** labeling where the product stops short of archival or **`direct-source`** exams.

**Caveats (non-blocking if communicated):** **`mikro2`** quarantine, **`mathematik`** without manifest bridge, **`statistik` · `nichtparametrisch`** empty file primaries, and **widespread** **`platform-added-drill`** full exams (§6).

---

## 5. Explicit “why” items (required)

### 5.1 Why **`mikro2`** is frozen

- **`source-materials/`** has **no** Mikro II corpus; **`assets/js/modules.js`** sets **`sourceCorpusInRepo: false`** and a **`sourceStatusNote`**.
- **No** **`mikro2/js/data/contentManifest.js`** → **no** runtime **`PROVENANCE_BY_CONCEPT`** / **`FULL_EXAM_PROVENANCE`** in the same shape as other live modules.
- **`mikro2/js/main.js`** wires **`createPortalApp`** **without** **`portalBridge`** and **without** **`mistakeReview`** — **intentional** quarantine on **parity expectations**, not on “remove the module.”
- **Authoritative inventory:** **`docs/audits/mikro2-status-guard-pass-2.md`**; policy: **`docs/audits/mikro2-quarantine-roadmap-pass-1.md`**.

### 5.2 Why **`statistik` · `nichtparametrisch`** remains intentionally empty

- **Full-tree PDF text search** under **`source-materials/Statistik/Statistik/`** found **no** defensible VL/Tutorium anchor for **nonparametric hypothesis tests** (Wilcoxon, Mann–Whitney, Kruskal–Wallis, etc.); only an **incidental** “nichtparametrisch **schätzen**” line in **VL_09**, not the portal chapter scope.
- **`assets/js/module-content.js`** **statistik** roadmap does **not** map this chapter to a **`Vorlesungen/...pdf`** row.
- Filling **`[]`** with a guessed **`VL_*.pdf`** would **fake** grounding → **forbidden** by project rules.
- **Decision doc:** **`docs/audits/statistik-nichtparametrisch-provenance-decision-pass-1.md`**.

### 5.3 Why many **full exams** remain **`platform-added-drill`**

- Portal **full exams** are **authored practice / probeklausur-style** assemblies. **`direct-source`** would require a **deliberate** map to a **specific archived paper** (path + steward approval).
- Manifests encode **`source_status: 'platform-added-drill'`** and typically **`source_refs: []`** with notes that exams are **not verbatim scans**. **Exception pattern:** **`makro1`** attaches **contextual** refs to **Klausur PDFs** while **still** labeling **`platform-added-drill`** in notes — **style alignment**, not a claim of paste-level fidelity (**`makro1/js/data/contentManifest.js`**).
- **Snapshot table:** **`docs/audits/provenance-coverage-audit-pass-1.md`** §3.

### 5.4 What **should not** be touched further **without new source material** (or an explicit product exception)

| Area | Rule |
|------|------|
| **`mikro2`** | No **`direct-source`** expansion, no **`contentManifest.js`** “as if” **mikro1**, no pretending **file-level** provenance exists — **until** Mikro II materials live under **`source-materials/`** and policy lifts the gate. |
| **`statistik` · `nichtparametrisch`** primaries | No **invented** `Vorlesungen/...` paths — **until** a **new** PDF is in-repo **or** manual review proves an existing PDF **substantively** covers the chapter (**decision pass** §5). |
| **Full exams → `direct-source`** | No bulk re-labeling — **until** each exam id is **individually** tied to a **real** archived document path and steward sign-off. |
| **recht / jahresabschluss / finanzwirtschaft** | No **paragraph-level** provenance refactors — **out of schema**; file-level ceiling is **intentional** for this release generation. |
| **Cross-module exam `<canvas>`** | No **mikro1-cloning** spree — **high effort**, authenticity per module; defer unless **one** module + **source** justify it (**benchmark-gap** §5.2). |

---

## 6. Module-by-module release posture

**Scope:** The **eleven** **`status: "live"`** entries in **`assets/js/modules.js`**.  
**Columns:** **Backbone** = manifest + bridge + mistake loop where applicable; **Content** = authored theory/drills/exams present; **Granularity** = `CHAPTERS` coarseness vs benchmark; **Provenance** = file-primary posture; **Limits** = honest residual.

| Module | Backbone / loop | Content / enrichment | Granularity | Provenance | Known limitations |
|--------|------------------|----------------------|-------------|------------|-------------------|
| **mikro1** | **Strong** — manifest, bridge, **`mistakeReview`**, graphs, exams | **Rich** — benchmark depth | **Fine** — 33 concepts | **Strong**; **`psubst`** primaries **`[]`** | **`psubst`** gap; slide-level anchors not in schema |
| **mikro2** | **Quarantined** — no manifest, no bridge, no **`mistakeReview`** | **On-topic** but thinner exams vs peers | **Coarse** — 13 concepts | **Blocked** — no manifest layer | **Frozen** until corpus (**§5.1**); do not claim **`direct-source`** |
| **makro1** | **Strong** | **Strong** exams | **Moderate** — 14 concepts | **Strong** concept refs; exams **drill** + optional archive **context refs** | Baseline renderer vs **mikro1**; exams not archival **`direct-source`** |
| **makro2** | **Strong** (post second-wave hygiene) | **Strong** | **Moderate** — 20 concepts | **Strong** | Baseline renderer; exams **drill** |
| **oekonometrie** | **Strong** — custom renderer + R | **Strong** | **Fine** — 32 concepts | **Strong** | Ongoing **drift risk** vs large `source-materials` unless periodically re-audited |
| **statistik** | **Strong** — R layer, **`mistakeReview`**, dual exams | **Strong** post second-wave | **Moderate** — 14 concepts | **Partial** — **`nichtparametrisch`** **`[]` by decision** (**§5.2**) | No exam **`<canvas>`**; **nichtparametrisch** file gap |
| **finanzwirtschaft** | **Strong** | **Strong** | **Moderate** — 16 concepts | **Strong** | Fewer graphs than **mikro1** (acceptable trade-off unless sources add figures) |
| **mathematik** | **Partial** — **no** **`contentManifest.js`** / bridge pattern | **Present**; exams labeled simulation-forward in audits | **Coarse** — 6 mega-chapters | **Not** in “strong manifest” row | **Structural** follow-up when **`source-materials/Mathematik`** mapped |
| **jahresabschluss** | **Strong** | **Strong** text + numbers | **Moderate** — 15 concepts | **Strong** | No graphs by design; file-level ceiling |
| **recht** | **Strong** | **Strong** doctrinal | **Moderate** — 14 concepts | **Strong** file-level | No graphs; CSV/deck quality drives transfer |
| **internationale-wirtschaftsbeziehungen** | **Strong** post second-wave (**`mistakeReview`**) | **Strong** | **Moderate** — 12 concepts | **Good**; some **Zusatz-PDFs** less mapped | Baseline renderer; exam **drill** honesty per **IWB** provenance audit |

---

## 7. Blocked / frozen items (exact list)

| Item | Gate |
|------|------|
| **`mikro2`** **`direct-source`** / file-grounded expansion | Mikro II **`source-materials`** + policy |
| **`mikro2`** **`contentManifest.js`** + curated primaries | Same |
| **`mikro2`** **`portalBridge`** / **`mistakeReview`** as **parity requirement** | Product decision **after** corpus (engineering-only wiring without manifest is a **separate**, explicit decision) |
| **`statistik` · `nichtparametrisch`** PDF primaries | New or proven PDF coverage (**decision pass**) |

---

## 8. Optional future upgrades (selective only)

| Upgrade | When it is worth doing |
|---------|-------------------------|
| **`mathematik`** manifest + **`portalBridge`** + curation | **`source-materials/Mathematik`** paths agreed and mapped (**release-priority** §5) |
| **Per-exam archival `source_refs`** | Per exam id, **real** paper in repo, steward approval |
| **`finanzwirtschaft`** deeper graphs | **Only** if course materials add **source-faithful** figure tasks |
| **Exam `<canvas>`** outside **mikro1** | **One** module at a time + exam authenticity |
| **Renderer unification** | **Explicit** architecture pass — **not** default (**AGENTS.md** preserves module strengths) |
| **Docs-only hygiene** | **`provenance-coverage-audit-pass-1.md`** §6 **statistik** row updated in the same session to point at **`statistik-nichtparametrisch-provenance-decision-pass-1.md`**. |

---

## 9. Recommendation: **stop / polish / continue selectively**

| Verdict | Guidance |
|---------|----------|
| **Stop (as a program)** | **No** more **broad** backbone refactors, **no** fake **`mikro2`** or **`nichtparametrisch`** grounding, **no** blanket exam **`direct-source`** re-labeling. |
| **Polish (bounded)** | **Landing copy**, **one-off** steward content fixes, **optional** **`mathematik`** manifest **when** sources exist, **optional** single-module deep dives **with** `source-materials`. |
| **Continue selectively** | **Yes** — only **scoped** tasks with **explicit** audit or steward charter; treat **`docs/audits/provenance-coverage-audit-pass-1.md`** and **`mikro2-status-guard-pass-2.md`** as **non-negotiable** guardrails. |

**One-line operational recommendation:** **Ship** the static platform **now**; **polish** **`mathematik`** backbone **when** Mathematik sources are mapped; **freeze** **`mikro2`** source claims and **`nichtparametrisch`** PDF invention **until** inputs change.

---

## 10. Bibliography (audits this summary depends on)

- `docs/audits/release-priority-audit-pass-1.md`
- `docs/audits/docs-sync-pass-1.md`
- `docs/audits/benchmark-gap-audit-pass-1.md`
- `docs/audits/provenance-coverage-audit-pass-1.md`
- `docs/audits/mikro2-status-guard-pass-2.md`
- `docs/audits/statistik-nichtparametrisch-provenance-decision-pass-1.md`
- `docs/audits/platform-status-cleanup-audit-pass-1.md`
- `assets/js/modules.js` (live registry)

---

*End of release-readiness summary pass 1.*
