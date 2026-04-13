# Provenance and source-traceability hardening — Pass 1

**Date:** 2026-04-12  
**Priority:** Trust-critical, academic-traceability, public-facing.

## Executive summary

This pass removes **silent omission** of the shared concept provenance footer when a manifest has **layers but no resolvable primary-file labels**, normalizes **trust-signal attributes** for those cases, fixes a **missing `mikro2` content manifest** (broken import path), and extends **Playwright trust regression** so provenance is checked on **additional tabs** and for **manifest-only vs. ref-backed** coverage. The shared UI remains one system (ⓘ mark, `Basis:` prefix, optional per-area expand).

---

## Part 1 — Provenance completeness audit (surfaces)

| Area | Mechanism | Pass-1 finding |
|------|-----------|----------------|
| Trusted core (Mikro I, Statistik, Recht, Ökonometrie) | `createRenderer` → `buildConceptProvenanceStripHtml` + `getConceptProvenance` | Complete where manifests map `source_refs` to paths that `pathToHumanLabel` can turn into student labels. **Gap:** concepts with **empty** primary-ref arrays had **no footer** (silent). |
| Other live modules (Makro I/II, Finanz, Mathe, JA, IWB) | Same | Same rule; ref-backed concepts show file-derived summary. |
| Mikro II | `getConceptProvenance` from manifest | **Gap:** `mikro2/js/data/contentManifest.js` was **missing** while `renderer.js` imported it — deploy/runtime risk. **Fixed** with quarantine-aware manifest (empty refs, explicit statuses). |
| Theory / Grafik / Aufgaben / Formeln / Intuition / R-Anwendung | Same `renderContent` tail | Footer appended for **all** tabs when layers exist and summary builds. **Gap:** R tab and graph tab were only spot-checked manually before; **regression now** covers Aufgaben, Grafik, R-Anwendung for selected routes. |
| Generated portal stack (`assets/js/generated-portal/main.js`) | `createRenderer` default `getConceptProvenance = () => null` | **Still open:** supplementary routes do not yet pass a manifest-backed `getConceptProvenance` (they rely on header copy on `r/` and `politisches-system-brd/` HTML). Not changed in this pass to avoid mis-labeling if a future slug ever reuses that stack for a curated module. |

---

## Part 2 — Consistency (icon, label, placement)

- **Icon:** `ⓘ` in `.source-provenance-mark` (unchanged).  
- **Lead label:** `Basis:` prefix via `BASIS_PREFIX` (unchanged).  
- **Placement:** Footer remains last children of `#content` after mirrors (unchanged).  
- **New:** `data-provenance-coverage="refs" | "manifest-only"` on `<footer class="source-provenance">` for **machine- and style-readable** distinction between file-anchored and manifest-only summaries.  
- **New:** When coverage is `manifest-only`, `data-source-confidence` uses **`pickWeakestSourceStatus`** across layers (so drill-heavy modules surface the stricter tier in the attribute).

---

## Part 3 — Honesty (no decorative trust)

- **Before:** Empty `source_refs` across layers → **no strip** → looked like “fully traced” content without any trace UI.  
- **After:** Explicit German line: theory-layer **student hint** (from `source_status`) plus **„ohne dateiweise Primäranker im Manifest für dieses Konzept“** — does not invent PDF names.  
- **Per-area expand:** Rows use ref lines when present; otherwise **short trust-class hints** per layer (same vocabulary as summary hints), so expand is still meaningful without raw paths.

Representative judgment:

- **Mikro I `psubst`:** Intentionally without curated VL anchors in manifest; footer is now **manifest-only** (honest) instead of absent.  
- **Mikro II:** All concepts refless by design; footer **manifest-only** with quarantine-appropriate `platform-added-*` statuses.

---

## Part 4 — Trust-class visibility

- **Landing / modules.js:** Existing `TRUSTED_CORE_SLUGS`, `mikro2` `sourceCorpusInRepo: false`, and `GENERATED_PORTAL_ROUTE_PREFIXES` remain the route-level truth (unchanged).  
- **UI:** `data-provenance-coverage` + **subtle** CSS (amber-tinted top border for manifest-only; left accent for `platform-added-drill`) avoids flattening ref-backed and manifest-only into one visual tier.

---

## Part 5 — Internal manifest discipline

| Change | Purpose |
|--------|---------|
| New **`mikro2/js/data/contentManifest.js`** | Satisfies import; encodes **explicit** `statusByLayer` under quarantine; empty `source_refs` by policy. |
| **`assets/js/portal-core/data/sourceStatus.js`** | Adds `pickWeakestSourceStatus`, `studentHintForSourceStatus`, `SOURCE_STATUS_TRUST_RANK` for shared, non-verbose student vocabulary. |
| **Trust regression** | `PROVENANCE_EXPECT` gains **`mikro1/psubst`** (manifest-only), **`mikro2/spieltheorie_statisch`** (manifest-only + wording check), and **`expectCoverage`** for every row; **`PROVENANCE_TAB_EXTRA`** checks footer on **Aufgaben**, **Grafik**, **R-Anwendung**. |

---

## Part 6 — Public UX of traceability

Students can still answer:

- **What is this based on?** — `Basis: …` line (VL/Übung labels when refs exist; explicit manifest-only sentence otherwise).  
- **How much should I trust this?** — `data-source-confidence` + optional expand; manifest-only footers are visually distinct.  
- **Where verify?** — Internal `notes` on layers remain in manifest data for maintainers; UI does not dump long pipeline text (unchanged philosophy).

---

## Part 7 — Required certification table

| Module / surface | Should provenance appear? | Appears consistently? | Wording consistent? | Signal honest? | Trust-class visibility clear? | Remaining traceability risk | Action result |
|------------------|---------------------------|------------------------|------------------------|----------------|-------------------------------|------------------------------|-----------------|
| Shared `#content` footer (all `createRenderer` modules) | Yes | Yes (including refless + mikro2 fix) | Yes (shared `sourceProvenanceUi`) | Yes (no fake paths when refs missing) | Improved (`data-provenance-coverage` + CSS) | Expand still optional; students may skip | **hardened and traceable** |
| Mikro I (e.g. `budget`, `psubst`) | Yes | Yes | Yes | Yes | `refs` vs `manifest-only` | Curated empty concepts remain thin until refs added | **hardened and traceable** |
| Statistik / Ökonometrie / Makro / Recht / IWB / Finanz / JA / Mathematik | Yes | Yes | Yes | Yes | `refs` typical | Rare edge: path not mapped by `pathToHumanLabel` | **hardened and traceable** |
| Mikro II | Yes | **Was broken** (missing file); now yes | Yes | Yes (quarantine statuses) | Clear `manifest-only` + drill confidence | No PDF corpus in repo | **hardened and traceable** |
| Generated `main.js` supplementary shell | Should, if shell matches curated concept UX | Partial (HTML boundary only) | N/A | N/A | Landing chips + HTML | No per-concept manifest strip wired | **improved but still partial** |

---

## Part 8 — Browser verification

Automated: `cd tools/clickthrough && node trust-regression-pass-1.mjs` — **all checks passed**, including:

- Provenance on **theorie** for extended module list + **coverage** attribute checks.  
- **Manifest-only** wording check for `psubst` and `mikro2/spieltheorie_statisch`.  
- **Tab extras:** `mikro1/budget/aufgaben`, `statistik/bivariat/graph`, `oekonometrie/matrix_notation/r-anwendung`.

---

## Part 9 — Deliverables: files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/sourceProvenanceUi.js` | Manifest-only summary; breakdown uses status hints when refs empty; `data-provenance-coverage`; confidence uses weakest status when manifest-only. |
| `assets/js/portal-core/data/sourceStatus.js` | `pickWeakestSourceStatus`, `studentHintForSourceStatus`, rank map. |
| `assets/css/premium-refinement.css` | Styles for `[data-provenance-coverage="manifest-only"]` and drill confidence accent. |
| `mikro2/js/data/contentManifest.js` | **New** — provenance-only manifest under quarantine. |
| `mikro2/js/data/courseConfig.js` | Comment update re manifest. |
| `tools/clickthrough/trust-regression-pass-1.mjs` | Extended provenance matrix + tab surfaces + coverage assertions. |
| `docs/audits/provenance-and-source-traceability-hardening-pass-1.md` | This audit. |

---

## What is stronger vs. what remains weaker

**Stronger**

- No more **silent** missing footer for manifest-backed concepts with empty refs.  
- **Mikro II** module loads with a real provenance provider.  
- Regression catches **wrong** `data-provenance-coverage`, missing **Primäranker** honesty line, and **tab** regressions.

**Weaker / follow-up**

- **Generated portal** `main.js` still omits `getConceptProvenance` — needs a dedicated supplementary provenance factory **without** conflating with curated modules.  
- **Per-concept curation:** Mikro I gaps like `psubst` can still gain real `source_refs` when materials are mapped.  
- **pathToHumanLabel** coverage for exotic filenames — incremental improvement over time.

---

## Completion rule (self-assessment)

Public **curated** module pages no longer **silently** lack a provenance strip solely because primary paths are empty; **mikro2** no longer ships a broken import. Supplementary **generated** stack remains **explicitly partial** until a safe, non-misleading `getConceptProvenance` is wired there.
