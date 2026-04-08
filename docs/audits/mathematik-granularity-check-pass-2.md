# Mathematik — Granularity check pass 2 (audit only)

**Type:** Post–pass-1 review. **No code or content changes** in this pass.

**Purpose:** Judge whether the module is still under-split, appropriately granular, or over-split; assess pass-1 splits; recommend whether a further **granularity** pass is warranted.

---

## Files inspected (exact)

| Path | What was reviewed |
|------|-------------------|
| `mathematik/js/data/chapters.js` | `CHAPTERS` ids/order; `CONTENT` section structure, `formeln`, authored `aufgaben` per concept |
| `mathematik/js/data/conceptLinks.js` | Prerequisite graph after pass 1 |
| `mathematik/js/data/intuition.js` | Coverage of all eight concept ids (supporting perceived “thickness” of cards) |
| `docs/audits/mathematik-concept-granularity-pass-1.md` | Record of implemented splits and explicit non-splits |
| `assets/js/module-content.js` | `mathematik.audit`, `sourceGroups` (10 VL PDFs), `roadmap` (unit descriptions vs portal) |

**Not re-read in full for this pass:** `stepProblems.js`, `masteryData.js`, `fullExams.js`, `source-materials/Mathematik` PDFs (judgment is against **declared** course structure in `module-content.js` and **live** `chapters.js`).

---

## Current concept count

**8** concepts, in order:

1. `funktionen_grundlagen`  
2. `logarithmus_umkehr`  
3. `ableitung`  
4. `optimierung`  
5. `lagrange`  
6. `linalg_matrizen`  
7. `linalg_det_inverse_lgs`  
8. `integral`  

---

## Overall judgment on granularity

**Verdict: Still moderately under-split relative to the official 10 VL + 10 Kleinübung spine, but the pass-1 splits are appropriate; the module is not globally “fine enough” yet, while further splitting without new authored theory would risk cosmetic inflation.**

More precisely:

- **Relative to source structure:** The portal remains **8 cards vs 10 VL units** (and **zero** dedicated cards for **E1** and **E3**), so **high-level under-coverage** persists. That is only partly a “granularity” issue (missing units); it is also **missing content** for those units in `chapters.js`.
- **Relative to pass-1 goals:** The **LA I / LA II** and **E2-internal** (Potenz/Exp vs Log/Umkehr) splits are **pedagogically real** and **navigation-useful**; they are **not** judged over-split.
- **Thin slots:** Two concepts are **lighter in authored practice** than neighbors; that does **not** by itself justify merge or removal (see below).

---

## Pass-1 splits: pedagogical and navigation value

| Split | Pedagogically real? | Navigation-useful? | Over-split? |
|-------|---------------------|--------------------|-------------|
| `funktionen_grundlagen` vs `logarithmus_umkehr` | **Yes** — distinct error modes (Achsen/Inverse vs Log-Domäne und Log-Gesetze) and distinct tool use in exams. | **Yes** — learners often search “Log” or “Umkehrfunktion” vs “Gerade/Cobb”. | **No** |
| `linalg_matrizen` vs `linalg_det_inverse_lgs` | **Yes** — matches **LA I** vs **LA II** in `module-content.js` / Kleinübung naming. | **Yes** — det/LGS/OLS is a different revision mode than “nur Algebra der Matrizen”. | **No** |

**Recommendation:** **Do not merge** these pairs back into single cards unless there is a product-wide decision to reduce sidebar count; merging would **reduce** alignment with the real exercise blocks without fixing the larger VL gap.

---

## Concepts that may still be too broad (high value)

These bundle **multiple exam-relevant units** that the **roadmap** describes as separate VL/Kleinübung layers:

| Concept | Bundled exam-relevant ideas (from live `chapters.js` + roadmap) | Why it still counts as “broad” |
|---------|------------------------------------------------------------------|--------------------------------|
| **`ableitung`** | Univariate definition and rules; second derivative; **partial derivatives** and **total differential** (roadmap **AN1** vs **AN2** boundary is blurred). | One card spans **AN1** and an **AN2** entry point; exercises already use BEO/BZO on $G(Q)$ (optimisation-flavoured). |
| **`optimierung`** | Univariate BEO/BZO; **multivariate** FOC + **Hesse** and $\det(H)$; economic applications; includes a **two-good** substitution problem (multivariate optimisation without Lagrange). | Explicitly mixes **OP1**-shaped material with **OP2**-shaped machinery (Hesse) in the same theory block. |
| **`lagrange`** | Method, $\lambda$, tangency — aligns well with **OP2** / constrained optimisation as a **single method family**. | **Less** “too broad” than `ableitung` / `optimierung`; still a full exam topic on its own. |
| **`integral`** | Roadmap **AN3** lists more than the portal’s visible scope (e.g. partial integration, substitution, double integrals in the roadmap text). | May be **under-filled** relative to VL breadth; granularity question is secondary to **content depth** check. |

**Cross-cutting gap (not fixed by splitting alone):** **E1** (Algebra/Mengen) and **E3** (Summen/Logik) still have **no** dedicated concept cards in the portal. That is the largest **structural** mismatch with the 10-part lecture list; addressing it requires **source-backed authoring**, not only id splits.

---

## Concepts that may appear “thin” (but are not necessarily wrong)

| Concept | Why it can feel thin | Should it be merged away? |
|---------|----------------------|---------------------------|
| **`logarithmus_umkehr`** | Only **one** authored `aufgabe`; fewer `formeln` than `funktionen_grundlagen`. Exam-step factory still pads drills from theory/intuition. | **No merge.** The topic is **exam-central** (log laws, domain, inverse demand graphs). Thinness is an argument for **more sourced or distilled practice**, not for collapsing back into “Funktionen”. |
| **`linalg_matrizen`** | **No** authored `aufgaben`; theory is shorter than `linalg_det_inverse_lgs`. | **No merge.** Matches a **real** Kleinübung/VL unit (**LA I**). Empty authored list is a **content/practice** gap, not proof the slot is fake. |

---

## Over-split assessment

**No concept is judged as purely cosmetic inflation** relative to the current `chapters.js` reality. The smallest cards are **thin in exercises**, not **fake** as topic boundaries.

**Potential confusion (product, not “too many ids”):** The titles **Funktionen: linear & Potenz/Exp** and **Logarithmus & Umkehrfunktion** do **not** map one-to-one to **E1 / E2 / E3**; they subdivide **E2-style** material only. That is **honest** if documented (pass 1 already notes E1/E3 absence); it is not over-splitting.

---

## Is a pass-2 **split** or **merge** warranted?

| Action | Warranted now? | Reason |
|--------|----------------|--------|
| **Merge** pass-1 pairs | **No** | Would worsen alignment with LA I/II and with natural E2-internal navigation. |
| **Further split** `ableitung` / `optimierung` | **Only together with a content refactor** | Splitting **AN1 vs AN2** or **OP1 vs OP2** at the id level **without** separating theory and tasks in `chapters.js` would duplicate narrative or produce half-empty cards — i.e. **fake granularity**. |
| **Add E1 / E3 cards** | **Content project**, not granularity-only | Requires new theory/tasks from `01Mathe_E1_…` / `03Mathe_E3_…` (or explicit source-distilled equivalents). |
| **Do nothing further (granularity-only)** | **Yes, as default** | Current **8** concepts are a **reasonable** compromise: pass-1 fixes the worst bundling (LA + E2-internal) without exploding the map. |

---

## Explicit conclusion

- **Current concept count:** **8**  
- **Still too broad (high value):** **`ableitung`**, **`optimierung`** (primary); **`integral`** relative to full **AN3** roadmap scope is a **depth/breadth** issue as much as granularity. **Missing E1/E3** remains the largest mismatch with the 10-VL spine.  
- **Possibly thin but justified:** **`logarithmus_umkehr`**, **`linalg_matrizen`** (authored practice light; topic boundaries still real).  
- **Over-split:** **None** identified among the eight ids.  
- **Further granularity-only changes:** **Not recommended** until theory/tasks in `chapters.js` are **physically separated** along **AN1/AN2** and **OP1/OP2** lines, or until **E1/E3** content exists to justify new cards.  

**Statement:** A **granularity-only** pass 2 **code split is not warranted** at this time; the next meaningful step is either **content expansion** (E1, E3, fuller AN3) or a **combined** content + id split for analysis/optimisation — not ids alone.

---

## Recommendations (non-binding, audit level)

1. **Keep** the eight-concept map stable until a **content-first** milestone exists for E1/E3 and/or AN/OP separation.  
2. **Improve thin cards** by adding **source-faithful** `aufgaben` to `linalg_matrizen` and optionally `logarithmus_umkehr` (this is **practice depth**, not more sidebar ids).  
3. **Update stale repo docs** that still claim “6 mega-chapters” for Mathematik (outside this file) when a documentation sweep is done.  
4. **If** a future pass splits `ableitung` / `optimierung`, do it only with a **written mapping** from each new id to **06/07/08/09** PDF sections and matching Kleinübung blocks — avoid orphan cards.
