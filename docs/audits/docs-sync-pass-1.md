# Documentation sync — pass 1 (status vs repo reality)

**Scope:** Documentation and audit **status corrections only**. **No** application/runtime code changes in this pass.  
**Date:** 2026-04-08  
**Trigger:** Second-wave work (**statistik**, **IWB**, **makro2**), **`mikro2-status-guard-pass-2.md`**, and **provenance / manifest** wiring had left **planning audits** partially stale.

---

## 1. Files changed (exact)

| Path | Action |
|------|--------|
| `docs/audits/benchmark-gap-audit-pass-1.md` | **Edited** — §2.2, §2.3, §2.8, §3–§6 + evidence banner |
| `docs/audits/repo-audit.md` | **Edited** — status note, §1.3, §3 table, §4.4, §5.1, §5.2, §7 |
| `docs/audits/platform-status-cleanup-audit-pass-1.md` | **Edited** — §3 item 4, §5 deferred table (3 rows) |
| `docs/audits/docs-sync-pass-1.md` | **Created** (this file) |

---

## 2. Stale claims corrected

### 2.1 `docs/audits/benchmark-gap-audit-pass-1.md`

| Location | Stale claim (before) | Correction (after) |
|----------|----------------------|--------------------|
| §2.2 **makro2** | **`INTUITION`** had **35** keys vs **20** `CHAPTERS`; **`main.js`** had **no** **`mistakeReview`**. | **Post second-wave:** intuition keys aligned to **`CHAPTERS`** (**20/20** per `makro2-second-wave-excellence-pass-1.md`); **`mistakeReview`** wired like **makro1**. Residual gap: **baseline renderer** only. |
| §2.3 **statistik** | **`fullExams.js`** ~**36** lines / thin; **four** concepts **without** **`INTUITION`**; strong framing as primary “excellence” target for exams + intuition. | **Post second-wave:** expanded exams + **`FULL_EXAM_PROVENANCE`**; intuition filled for **`z_test`**, **`zwei_stichproben`**, **`varianzanalyse`**, **`nichtparametrisch`**. **Residual:** **`nichtparametrisch`** empty primaries in manifest; no exam **`<canvas>`**. |
| §2.8 **IWB** | **`main.js`** **omitted** **`mistakeReview`**. | **Post second-wave:** **`mistakeReview`** + mistake logging (**`iwb-second-wave-excellence-pass-1.md`**). Residual: baseline renderer. |
| §3 classification | Listed **statistik** / **IWB** / **makro2** (macro) among **real weaknesses** for the same gaps as above. | **Updated** tags; added **historical note** that the old items were **true at original pass-1** but are **superseded**. |
| §4 proximity | “Needs second-wave” row named **statistik**, **IWB**, **makro2** hygiene. | **Replaced** with **optional depth** items and **blocked mikro2**; **near benchmark** row reflects **post second-wave** state. |
| §5 next passes | Numbered list scheduled **statistik** exams/intuition, **IWB** wiring, **makro2** intuition + **`mistakeReview`**. | **§5.1** = **historical** (do not re-open). **§5.2** = **current** follow-ups (**mikro2** conditional, **`nichtparametrisch`**, optional **canvas**, release doc). |
| §6 | Only “new file” for original pass. | **Documents** both original creation and **this** docs-sync edit. |

**Explicit non-claims:** This pass **did not** re-audit every line count in **`fullExams.js`**; rounded figures in the benchmark doc are **indicative**. **§2.9 mikro2** (quarantine, thin exams, no manifest, no **`mistakeReview`**) was **re-read** and **left** as stated — still accurate.

---

### 2.2 `docs/audits/repo-audit.md`

| Location | Stale claim (before) | Correction (after) |
|----------|----------------------|--------------------|
| Status note (after title) | §3 counts “may be **out of date**” (e.g. **`mikro2`**) without a resolution path. | Points to **`docs-sync-pass-1.md`** and states counts were **reconciled to `chapters.js` row counts** on **2026-04-08**; still **approximate** if data changes. |
| §1.3 **`module-content.js`** | Implied **benchmark modules lack** entries without naming **`mikro1`/`mikro2`**. | States **`mikro1`** and **`mikro2`** **are present**; depth still varies (see §5.2). |
| §3 table | **`mikro2`:** **7** concepts; **`statistik`:** **12**; **`jahresabschluss`:** **11**; **`finanzwirtschaft`:** **13**; **`recht`:** **12**; **`makro2`:** ~**19** rows. | **`mikro2`:** **13**; **`statistik`:** **14**; **`jahresabschluss`:** **15**; **`finanzwirtschaft`:** **16**; **`recht`:** **14**; **`makro2`:** **20** (all from `chapters.js` `{ id:` row counts on sync date). |
| §4.4 | **`mikro2`:** “Only **7** topics”. | **13** topics; **under-coverage risk** vs a full Mikro II course **remains** (quarantine docs). |
| §5.1 | **No** `sourceStatus` in implementation; **compliance documentation-only**. | **Partial** runtime wiring: **`sourceStatus.js`**, **`provenance.js`**, **`learningObjectNormalize.js`**, per-module **`contentManifest.js`**; **per-block** labels in raw **`CONTENT`** still **uneven**; UI surfacing **not** uniform. |
| §5.2 | **`module-content.js` omits `mikro1` and `mikro2`.** | **`mikro1`** and **`mikro2`** **included**; **`mikro2`** copy reflects **quarantine** (pointer to guard pass). |
| §7 follow-ups | “Add **`mikro1`/`mikro2`** entries”. | Entries **exist**; **optional** deepening of narrative **only**. |

---

### 2.3 `docs/audits/platform-status-cleanup-audit-pass-1.md`

| Location | Stale claim (before) | Correction (after) |
|----------|----------------------|--------------------|
| §3 item 4 | **`repo-audit.md`** §3 still lists **`mikro2` as 7** — use **this** audit. | **Partially cleared:** **`repo-audit`** + **`benchmark-gap`** refreshed via **`docs-sync-pass-1`**; re-check if modules change. |
| §5 deferred | Open **medium** items: refresh **`repo-audit`**; add **`module-content`** for **`mikro1`/`mikro2`**; add **IWB** manifest. | Marked **Done** with pointers (**`docs-sync-pass-1`**, **`module-content-parity-cleanup-pass-1.md`**, **`iwb-provenance-curation-pass-1.md`**). **Note:** §3 already said **IWB** manifest was added — the deferred table had **contradicted** that; the row now **matches** §3. |

---

## 3. Remaining risks / gaps (honest)

- **Concept counts** in **`repo-audit.md`** §3 are **mechanical** counts from `chapters.js`; they do **not** prove pedagogical completeness.
- **`benchmark-gap-audit-pass-1.md`** still uses **approximate** file sizes and **selective** dimensions; it is **not** a full re-audit of every module.
- **Provenance “complete”** is **not** claimed: e.g. **`statistik` · `nichtparametrisch`** primaries remain **`[]`** in **`contentManifest.js`** until curated or explicitly documented.

---

*End of docs-sync pass 1.*
