# Mathematik — Benchmark reassessment pass 1 (audit only)

**Context:** Re-evaluation after **concept granularity pass 1** (6→8 concepts) and **content enrichment pass 1** (theory, `formeln`, `aufgaben`, `intuition`).

**Benchmark reference:** `AGENTS.md` names **mikro1** as the current best platform benchmark; `docs/architecture/module-quality-standard.md` §2 uses mikro1-style depth as the comparison frame (without requiring a clone of mikro1’s domain).

**No code changes** in this pass.

---

## Files inspected (exact)

| Path | Purpose |
|------|---------|
| `mathematik/js/data/chapters.js` | `CHAPTERS` count; per-concept `theorie`, `formeln`, authored `aufgaben` |
| `mathematik/js/data/stepProblems.js` | `BASE_STEP_PROBLEMS` coverage vs `ensureMinimumStepProblems` |
| `mathematik/js/data/fullExams.js` | Full-exam depth and labeling |
| `mathematik/js/data/intuition.js` | Retrieval / exam-pattern density (spot-check) |
| `docs/audits/mathematik-concept-granularity-pass-1.md` | What granularity pass changed |
| `docs/audits/mathematik-granularity-check-pass-2.md` | Residual granularity judgment |
| `docs/audits/mathematik-content-enrichment-pass-1.md` | What enrichment pass added |
| `docs/architecture/module-quality-standard.md` | Operational checklist (§1–§5) |
| `AGENTS.md` | Benchmark rule (mikro1) |
| `mikro1/js/data/chapters.js` | **Spot-check only:** order-of-magnitude concept count for benchmark comparison |

---

## Quantitative snapshot (current)

| Metric | Mathematik (now) | Note |
|--------|------------------|------|
| **Concepts (`CHAPTERS`)** | **8** | Was 6 before granularity pass 1 |
| **Authored practice items** | **34** | Count of `result: String.raw` entries in `chapters.js` (= one completed multi-step stem per item) |
| **Rough distribution** | `funktionen_grundlagen` 4; `logarithmus_umkehr` 5; `ableitung` 5; `optimierung` 5; `lagrange` 4; `linalg_matrizen` 3; `linalg_det_inverse_lgs` 4; `integral` 4 | Averages **~4.3** authored items per concept |
| **Hand-authored step problems** | **2** concepts in `BASE_STEP_PROBLEMS` (`ableitung`, `optimierung`) | Remaining concepts rely on generated exam drills |
| **Full exams** | **1** mock, **1** scored block (2 questions), title still **„Simulation v14.0“** | Thin vs a full Klausur-style deck |

**mikro1 (spot-check):** **Order of magnitude ~30** concepts in `CHAPTERS` — mathematik is intentionally smaller in **card count**, but the **course scope** (10 VL units in `module-content.js`) is **wider** than 8 cards, so **density per official teaching unit** is still **uneven**.

---

## Exact current strengths

1. **Navigation:** Pass 1 created **real** splits (**LA I / LA II**, **Funktionen-Teil 1 / Log & Umkehr**) that match how students revise and how Kleinübung blocks are named in metadata.
2. **Practice volume:** **34** structured `aufgaben` is a **material** improvement over the pre-enrichment baseline (especially **log** and **LA I**, which were thin).
3. **Worked examples:** Enrichment added **durchgerechnet** blocks (log/inverse, matrix product, chain rule, Hesse) — **exam-useful** and consistent with the surrounding theory.
4. **Formula / meaning:** Additional `formeln` rows and longer `desc` / `variables` on **ableitung**, **optimierung**, **logarithmus_umkehr**, **linalg_matrizen** improve **retrieval** in the right-hand formula panel.
5. **Active recall scaffolding:** `intuition.js` **exam** hooks were expanded for the enriched concepts; `ensureMinimumStepProblems` still guarantees **minimum** step coverage for **all** chapter ids.
6. **Deployability:** Module remains a **standard portal** bundle (no dependency on this audit for build).

---

## Exact remaining weaknesses

### A. Concept density vs official course spine

- **8** portal concepts vs **10** Vorlesungs-PDFs and **10** Kleinübung folders in `module-content.js` — **E1** and **E3** still have **no** dedicated card; **AN1/AN2** and **OP1/OP2** remain **fused** inside **`ableitung`** / **`optimierung`**.
- **Primary nature:** **Granularity + missing authored units**, not a bug in existing cards.

### B. Practice density (uneven)

- **Average ~4.3** authored items per concept is **reasonable** but not **uniform** (`linalg_matrizen` **3**, several concepts **4**).
- **Hand-crafted** `BASE_STEP_PROBLEMS` still **only** for two ids — weaker **decision-tree** exam feel than mikro1-style rich `stepProblems` on many topics.

### C. Worked-example quality (limits)

- Examples are **clear** but **not** tied to page-level **direct-source** citations (enrichment pass documented empty `source-materials/Mathematik` in workspace).
- **Primary nature:** **Missing source corpus in repo** + **provenance not surfaced** in HTML (module does not yet implement per-block `source_status` markers in `chapters.js`).

### D. Formula / meaning support (residual gaps)

- **`integral`**, **`lagrange`**, **`funktionen_grundlagen`**, **`linalg_det_inverse_lgs`** did **not** receive the same **formula-panel expansion** as the four enriched concepts; not wrong, but **asymmetry** remains.
- **Fused** analysis/optimization cards still carry **two exam “modes”** (1D vs 2D) in one scroll — **navigation** is OK; **cognitive load** is still higher than benchmark modules with **one main idea per card**.

### E. Assessment / tooling vs benchmark

- **`fullExams.js`**: still explicitly **simulation**-labeled and **narrow** — meets “something exists” (module-quality §5.1) but **not** archive-grade assessment.
- **Graphs:** Mathematik’s graph stack is **not** a mathematics-specific interactive layer comparable to mikro1’s **per-concept** graphs (known from earlier audits: graph ids are legacy/mikro-oriented in the shared panel file used by the thin module).

### F. Source fidelity (constitutional)

- Without **`source-materials/Mathematik`** files in the workspace, **independent re-verification** of notation and task style against PDFs is **not** possible here — weakness is **corpus / pipeline**, not only wording.

---

## Judgment: release readiness vs benchmark

| Question | Answer |
|----------|--------|
| **Acceptable for release as-is?** | **Yes, with honest caveats:** deployable, no known “dead tab” issue from this review, practice is **stronger** than pre-enrichment; **full exam** and **source-in-repo** story remain **thin**. |
| **Still clearly weaker than the platform benchmark (mikro1-style depth)?** | **Yes** on: **concept count**, **per-concept interactive tooling**, **breadth of hand-authored step problems**, **full-exam substance**, and **verifiable source anchoring**. |
| **Main driver of weakness?** | **Mixed:** (1) **Missing / offline source corpus** in repo, (2) **remaining content gaps** (E1, E3, integral breadth, LA II eigenvalue thread), (3) **residual fusion** of VL units in analysis/optimization — **not** a failure of the last two passes. |

---

## Is one more bounded high-value pass worth doing?

**Yes — one bounded pass is still justified**, but it should be **scoped** so it does not become an open-ended rewrite.

### Recommended bounded pass (choose **one** primary track)

1. **Source + E1/E3 track (highest fidelity):** Ingest or attach **`source-materials/Mathematik`**, then add **two** new concepts (or one merged “Einstieg” if materials justify bundling) with **motivation + theorie + aufgaben** grounded in E1/E3 PDFs — **content-first**, ids second.
2. **Integral / AN3 track (exam payoff):** Deepen **`integral`** only: substitution, parts, rent links — **additive** `aufgaben` + 1–2 worked examples; still **8** concepts unless content forces a split.
3. **Assessment track (honesty + UX):** Expand **`fullExams.js`** with **clearly labeled** additional simulation blocks **or** document **WIP** in module README — does not fix theory gaps but improves **benchmark parity** on §5.

**Not recommended as the *next* pass:** Further **granularity-only** splits of `ableitung`/`optimierung` **without** parallel theory separation (already flagged in granularity pass 2).

---

## Explicit non-claims

- This reassessment **does not** assert parity with the **Göttingen Mathematik** PDFs (corpus not in workspace for verification).
- It **does not** claim mathematik equals mikro1 **feature-for-feature**; the domains differ, but **depth and tooling** remain **below** the benchmark bar.

---

## Summary line

**Mathematik is in better shape after granularity + enrichment passes — credible for release as a live module — but still below mikro1-style benchmark on concept coverage, interactive assessment depth, and in-repo source verifiability. A single bounded follow-up pass (source+E1/E3, or integral depth, or fuller honest mock exams) remains worthwhile.**
