# Platform status / cleanup audit — pass 1

**Scope:** Read-only assessment of the repository **after** backbone migration work, granularity passes, provenance curation (where done), and exam expansion passes (makro1/makro2/recht). **No** claim that all modules are “complete” or source-complete.

**Method:** `assets/js/modules.js` registry, presence of `js/data/contentManifest.js` + `portalBridge` in `main.js`, spot-check of provenance comments, cross-read of `README.md` / `AGENTS.md`, and known audit docs (`mikro2-quarantine`, exam expansion passes).

---

## 1. Live modules in `MODULES` (landing registry)

Slugs currently **`status: "live"`:**  
`mikro1`, `mikro2`, `makro1`, `makro2`, `oekonometrie`, `statistik`, `finanzwirtschaft`, `mathematik`, `jahresabschluss`, `recht`, `internationale-wirtschaftsbeziehungen` — **11** entries.

Special: **`mikro2`** carries **`sourceCorpusInRepo: false`** and **`sourceStatusNote`** (quarantine metadata).

---

## 2. Current module status (explicit)

### 2.1 Structurally strong (shared `createPortalApp` + data tree + exams/SRS pattern)

These use the **portal-core shell** with a full local `js/data/*` story (chapters, storage, exams, etc.) and are **deployed as first-class folders**:

| Module | Manifest file | `portalBridge` / `window.__*ContentManifest` |
|--------|-----------------|-----------------------------------------------|
| mikro1 | Yes | Yes |
| makro1 | Yes | Yes |
| makro2 | Yes | Yes |
| statistik | Yes | Yes |
| oekonometrie | Yes | Yes |
| finanzwirtschaft | Yes | Yes |
| jahresabschluss | Yes | Yes |
| recht | Yes | Yes |
| mikro2 | **No** | **No** |
| mathematik | **No** | **No** |
| internationale-wirtschaftsbeziehungen | **No** | **No** (verified: no `contentManifest` under `internationale-wirtschaftsbeziehungen/js`) |

**Interpretation:** Eight modules are **backbone-aligned** with a canonical manifest bridge; three live modules **lag** that specific artifact (not necessarily broken — but **not** at manifest parity).

### 2.2 Strong or improving **provenance** (file-level primary refs in manifest, documented in audits)

| Module | Notes |
|--------|--------|
| **makro2** | PDF paths under `source-materials/Makroökonomik II/...`; see `makro2-provenance-curation-pass-1.md`. |
| **recht** | Vorlesungs/Übungs PDF paths; see `recht-provenance-curation-pass-1.md`. |
| **mikro1** | `Mikro_1_VL_*.pdf` mapping; curated pass documented in manifest header / audits. |
| **finanzwirtschaft** | StudIP VL PDF anchors; see manifest header + `finanzwirtschaft-provenance-curation-pass-1.md`. |

Other manifests (**makro1**, **statistik**, **oekonometrie**, **jahresabschluss**) exist; **depth and audit documentation vary** — treat as **stronger than “none”** but not uniformly re-audited in this pass.

### 2.3 Enriched; **second-wave** work still plausible

| Area | Done (recent tracks) | Still high-value |
|------|----------------------|------------------|
| **makro1 / makro2** | Exam expansion passes 1–2 (`exam-content-expansion-pass-*.md`) | Further W/F or text blocks only where syllabus-backed; no fake sources. |
| **recht** | Same exam passes | Deeper `module-content.js` roadmap alignment optional. |
| **Granularity** | Several `*-concept-granularity-*` audits | Modules not recently granularized (e.g. **mathematik**, **IWB**) if course materials justify splits. |
| **Landing narrative** | — | **`mikro1` / `mikro2`** / **`internationale-wirtschaftsbeziehungen`** are in **`module-content.js`** (see `module-content-parity-cleanup-pass-1.md`, `iwb-status-parity-audit-pass-1.md`); remaining gaps e.g. **`r`** vs **`MODULES`**. |

### 2.4 Quarantined / problem classification

| Module | Classification | Reason |
|--------|----------------|--------|
| **mikro2** | **Source quarantine** (not product removal) | No **`Mikroökonomik II`** tree in `source-materials/`; **`sourceCorpusInRepo: false`**; policy in **`mikro2-quarantine-roadmap-pass-1.md`** / **`AGENTS.md`**. Content is **Mikro-II-topic** but **not** `direct-source`-anchorable to in-repo PDFs. |

No other module is flagged **quarantined** in metadata; **mathematik** is **weak / coarse** relative to a full curriculum (see `repo-audit.md`) but not “quarantined” by rule.

### 2.5 Not in `MODULES` but in repo tree

- **`r/`**, **`politisches-system-brd/`** appear under `README` structure; **`r`** is not in `MODULES` (generated-portal path) — known split-brain per **`repo-audit.md`**.

---

## 3. Remaining high-value gaps (honest)

1. **Manifest parity:** **`mikro2`** (blocked until corpus), **`mathematik`**, **`internationale-wirtschaftsbeziehungen`** — no `contentManifest.js` / bridge.
2. **Source truth:** **`mikro2`** — ingest Mikro II materials or keep labeling **`source-distilled` / platform-added** only.
3. **Landing / pipeline:** Alignment of **`r`** vs **`MODULES`**; optional follow-up audits for narrative vs runtime provenance (`iwb-status-parity-audit-pass-1.md` for IWB).
4. **Stale docs:** **`docs/audits/repo-audit.md`** §3 still lists **`mikro2` as 7 concepts** — **wrong** (currently **13** `CHAPTERS` rows). Use **this** audit or re-count from `chapters.js`.
5. **README:** Structure tree omitted **`makro1/`**; **Erweiterung** linked to an **absolute path** on another machine — **fixed in cleanup below**.

---

## 4. Cleanup applied in this pass (tiny, safe)

| File | Change |
|------|--------|
| `README.md` | Add **`makro1/`** to folder tree; fix **Erweiterung** link to repo-relative **`assets/js/modules.js`**. |
| `docs/audits/repo-audit.md` | Short **banner** after title: section 3 counts may be stale; pointer to **this** audit for current snapshot. |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | This file (new). |

**Not changed:** module runtime code, manifests, exams, broad rewrites of old audits (only a one-line pointer).

---

## 5. Cleanup still worth doing (deferred)

| Item | Effort | Note |
|------|--------|------|
| Refresh **`repo-audit.md`** table (concept counts, mikro2, optional package.json list) | Medium | Or trim table and link here permanently. |
| Add **`module-content.js`** blocks for **mikro1** / **mikro2** | Low–medium | **mikro2** text must match **quarantine** policy. |
| **`mathematik`** manifest scaffold + provenance when sources mapped | Medium | Depends on `source-materials/Mathematik/...` curation. |
| **`internationale-wirtschaftsbeziehungen`** manifest | Medium | Align with GIWB source tree. |
| Resolve **`r`** vs **`MODULES`** / landing | Low | Architectural decision already flagged. |
| Remove or replace **`sourceRoot`** in shared code if still present | Low | Mentioned in `repo-audit.md` / `content-pipeline.md` |

---

## 6. One-line benchmark statement

**`mikro1`** remains the richest **technical + content depth + graphs + exams** benchmark; **`oekonometrie`** is a strong second for renderer/R investment; **`makro2`** / **`recht`** / **`finanzwirtschaft`** are **strong** on **manifest + provenance** where curated; **`mikro2`** is **pedagogically on-topic** but **explicitly not source-corpus-grounded** in-repo until materials exist.
