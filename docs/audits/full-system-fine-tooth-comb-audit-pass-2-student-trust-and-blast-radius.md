# Full-system fine-tooth-comb audit — Pass 2  
## Student trust, primary-study safety, public embarrassment risk, split-stack blast radius

**Date:** 2026-04-12  
**Relation to Pass 1:** [`full-system-fine-tooth-comb-audit-pass.md`](full-system-fine-tooth-comb-audit-pass.md) — Pass 2 is **harsher and operational**: go/no-go for **real student reliance**, not engineering tidiness.

**Code changes this pass:** none.

**Browser evidence this pass:** `tools/clickthrough/verify-right-panel-fallback.mjs` → **exit 0** (Chromium; narrow/focus; Statistik/Recht/Jahresabschluss/Mikro1/Ökonometrie R-tab; integrated mistakes DOM + Theorie-only Verbindungen). This proves **one narrow slice** of reliability; it does **not** certify formulas, graphs, R output, or PDF parity.

**Method honesty:** Classifications below are **risk judgments** from architecture, policy (`AGENTS.md`, `modules.js`), duplication patterns, and partial automation. They are **not** the result of full manual classroom testing or PDF line-by-line verification.

---

## Part 1 — Primary-study safety matrix

## Part 7 — Required output tables (Tables A–D)

Table **A** is below; Tables **B–D** appear in Parts 4, 3, and 5 respectively (same pass, cross-referenced).

### Table A — primary-study safety matrix

**Legend — `Safe as primary study source?`**

- **yes** = meets the pass rule: strong source path, stable rendering, reliable pedagogy, low misleading risk, defensible for a serious student **without** constant cross-check fear. *(Almost nothing in this repo clears that bar without a dedicated corpus QA sign-off — see judgments.)*
- **with caution** = useful, often strong, **must** be cross-checked against course PDFs / lectures.
- **no** = weak fidelity, unstable stack, or misleading risk high enough that **primary** reliance is irresponsible.

| Module / surface | Source-backed? | Rendering stable? | Pedagogy reliable? | Visually trustworthy? | Student risk | Safe as primary study source? |
|------------------|----------------|-------------------|----------------------|-------------------------|----------------|--------------------------------|
| **mikro1** | partial | mixed | mixed | yes | **medium** | **with caution** |
| **mikro2** | **no** | mixed | mixed | mixed | **high** | **no** |
| **makro1** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **makro2** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **statistik** | partial | mixed | mixed | yes | **medium** | **with caution** |
| **oekonometrie** | partial | mixed | mixed | mixed | **medium–high** | **with caution** |
| **finanzwirtschaft** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **jahresabschluss** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **recht** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **internationale-wirtschaftsbeziehungen** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **mathematik** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **Generated portal (`r/`, `politisches-system-brd/`)** | **no** | mixed | mixed | yes | **high** | **no** |
| **Shared: Theorie** (curated modules) | partial | mixed | mixed | yes | **medium** | **with caution** |
| **Shared: Formeln** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **Shared: Graph** | partial | **mixed** | mixed | mixed | **medium–high** | **with caution** |
| **Shared: Aufgaben** | partial | mixed | mixed | mixed | **medium** | **with caution** |
| **Shared: Prüfungstransfer** | partial | **mixed** | mixed | mixed | **medium–high** | **with caution** |
| **Shared: R tab** | partial | **mixed** | mixed | mixed | **high** | **with caution** (often **no** if WebR fails) |
| **Shared: Provenance / source footer** | partial | mixed | mixed | yes | **medium** | **with caution** |

**Why almost nothing is “yes”:**  
“Yes” requires proof the student is **not** likely to be misled. This repository **does not ship** automated PDF-to-HTML equivalence tests, graph golden images, or R-output regression suites at the level required to **earn** “yes” in an audit whose job is to protect a stressed exam student.

**Why mikro2 is “no”:**  
`AGENTS.md` + `modules.js` (`sourceCorpusInRepo: false`, no Mikro II folder in `source-materials/`): **cannot** be treated as course-faithful `direct-source` material. Hidden from landing reduces exposure; **primary study safety is still “no”** if a student deep-links or an instructor shares the URL.

**Why generated portal rows are “no”:**  
Boot path `assets/js/generated-portal/main.js` + `dataFactory.js` is a **different product organism** than curated `*/js/main.js`. Visual polish (`premium-refinement`, hero shells) can **exceed** traceability to the same provenance pipeline as Mikro I PDFs. That is a **primary-study disqualifier** until the stack is either merged or explicitly labeled as non-authoritative.

---

## Part 2 — Student trust audit (skeptical serious student)

### Where trust would land **fast**

- **University branding + coherent shell** on landing and module headers → initial legitimacy bump.
- **mikro1** feels like a “real course product” relative to other modules: structure, tabs, density of tasks, presence of mistakes rail — **first impression stronger** than average.

### Where the student would **hesitate**

- **Any graph tab** where axes/curves “look right” but cannot be tied to a specific slide/figure in their head → *“Did they simplify this for the web?”*
- **R tab** when runtimes stall, outputs differ from local R, or errors are opaque → *“Is this teaching me R or teaching me to fight the sandbox?”*
- **Prüfungstransfer** if a reveal button appears flaky (global `__toggleExamDrill` + per-module renderer parity) → *“Is this broken or am I stupid?”* — catastrophic for trust.

### Where it reads **“polished but I don’t believe it yet”**

- **Rich typography + cards** next to **sparse or uneven provenance** on some concepts → looks like design investment outran **evidence discipline**.
- **Generated module pages** (`politisches-system-brd` shows a “Live” chip and marketing-grade layout): impressive, but the student cannot map that stack to **their** graded course PDFs the same way as Mikro I.

### Where students **must** still verify against PDFs

- **Every module** until the project ships **machine-checkable** source bindings per concept block (not just policy text in `AGENTS.md`).
- **Especially:** Makro graphs, Statistik inference narratives, Ökonometrie output interpretation, Recht doctrinal chains, Finanz long-formulas in HTML strings.

### Hidden misunderstanding **hotspots**

1. **Graphs** — wrong curve shape teaches the wrong mechanism; student may never notice until the exam.
2. **Notation drift** — subscripts, timing, discrete vs continuous — easy to miss in fast review.
3. **R “success”** that is numerically fragile or dataset-dependent without loud caveats.
4. **Prüfungstransfer** items that feel exam-like but are **not** guaranteed isomorphic to instructor expectations.
5. **Split-stack** — student assumes “one portal = one reliability class”; reality is **two reliability classes**.

---

## Part 3 — Public embarrassment risk

### Table C — public embarrassment risk

| Surface | What user sees | Likely reaction | Severity | Fix priority |
|---------|----------------|-----------------|----------|----------------|
| **Graph tab (Makro / Statistik)** | Animated canvas, crisp UI; occasional odd label, scaling, or curve debate | “Cool toy — do I trust the economics?” | **high** | **P0** — golden captures + instructor review |
| **R tab** | Code editor + run; possible load fail / silent hang | “Broken / not serious” | **high** | **P0** — failure UX + offline path |
| **Theme / light mode** | Landing vs module theme toggles feel “different product” | “Stitched” | **medium** | **P1** — single theme contract |
| **Prüfungstransfer reveal** | Sometimes relies on global fallback (`app.js` comment) | “Click does nothing” | **high** | **P0** — CI enforce renderer API |
| **Provenance missing** | Beautiful page, no footer layers | “They didn’t cite anything — is this AI?” | **high** | **P0** — manifest lint |
| **mikro2** (if surfaced) | Advanced micro, pretty UI, **no PDF anchor** in repo policy | “Fake rigor” | **high** | **P0** — keep hidden or relabel hard |
| **Generated portal course** | Polished hero, concept map, not on landing module list | “Where did this come from?” | **medium–high** | **P1** — product boundary |
| **Mobile right-rail hide** | Content moves; if fallback ever regresses | “Where did Häufige Fehler go?” | **medium** | **P1** — keep harness in CI |
| **Long finance HTML** | Occasional awkward line break / math | “Messy” | **medium** | **P2** |

### Strong first-impression surfaces (5-minute click)

- Landing grid + typography.
- **mikro1** concept page: tabs, rail, tasks — reads as “effort.”

### Weak first-impression surfaces

- **Anything that fails interactionally** in first click (R, reveal).
- **Any graph** that looks “tool” not “teaching” (controls visible, pedagogy not obvious).
- **Generated shell** if user lands there first: looks like a **different studio product** next to Mikro.

---

## Part 4 — Split-stack blast radius

### Table B — split-stack blast radius

| Feature / system | Curated stack | Generated stack | Aligned or diverged? | Product risk | Priority |
|------------------|---------------|-----------------|----------------------|--------------|----------|
| **Boot path** | `*/js/main.js` | `generated-portal/main.js` | **diverged** | **high** | **P0** |
| **Theme behavior** | `body.light-mode` + module `theme.js` | Generated header + toggles | **diverged** | **medium–high** | **P0** |
| **Provenance / footer** | `getConceptProvenance` per module + shared strip | Driven by generated data paths | **diverged** | **high** | **P0** |
| **Right panel / fallback** | Modules + `portal-core`; harnessed | Same `portal-core` if wired; **risk if drift** | **high regression risk** | **high** | **P0** |
| **Warning system** | Shared `warningSystem.js` when used | Same if imported; else **unknown** | **diverged risk** | **medium** | **P1** |
| **Formula rendering** | Module MathJax + delimiters | `ensureMathJaxEquationHtml` etc. | **partially aligned** | **medium** | **P1** |
| **Graph composition** | Module engines | Generated concepts may differ | **diverged** | **high** | **P0** |
| **Graph labeling** | Per-module | Per-module / generated | **diverged** | **high** | **P0** |
| **R tabs** | `portal-core/features/rPractice.js` + module hooks | Generated R catalog path | **diverged** | **high** | **P0** |
| **Prüfungstransfer** | Local renderers + global toggle | Shared patterns in portal-core | **diverged** | **high** | **P0** |
| **Aufgaben reveal** | Module + shared renderer | Unknown parity | **high regression risk** | **medium–high** | **P1** |
| **Tabs / navigation** | Module-specific nav wiring | Generated shell layout | **diverged** | **medium** | **P1** |
| **Mobile / tablet** | Module CSS breakpoints | Generated CSS + same premium | **partially aligned** | **medium** | **P1** |

### Operational answers (forced)

1. **Most endangered by split:** **trust chain** (provenance), **graphs**, **R**, **Prüfungstransfer** — anything where **wrong once = misleading exam preparation**.
2. **Defects plausibly caused by split already:** theme mismatch feelings; “why does this module feel different”; duplicated fix effort → **some bugs fixed only on one stack**.
3. **Duplicated future fixes:** Rough order — **every** change to tabs, provenance, R practice, warning fallback, theme tokens, mobile layout, MathJax pipeline has **≥2** places to validate unless stacks merge. Realistically **~1.5×–2.5×** engineering tax on cross-cutting UX.
4. **Practical product risk if split remains:** Students and instructors infer **one reliability standard**; the repo ships **two**. That is **misleading by omission** even when both stacks are “fine.”

---

## Part 5 — Polish vs reliability mismatch

### Table D — polish vs reliability mismatch

| Module / surface | Looks polished? | Actually reliable? | Mismatch severity | Why dangerous |
|------------------|-----------------|----------------------|---------------------|----------------|
| **Landing + premium CSS** | yes | partial | **high** | Premium skin implies institutional rigor across **all** deep links. |
| **Generated portal pages** | yes | **no** (for primary) | **high** | Same brand, weaker traceability story than curated Mikro path. |
| **mikro1** | yes | **partial** (until proven) | **medium** | Best in repo — students may **over-trust** it vs PDFs. |
| **Graph tabs (several modules)** | yes | **partial** | **high** | Visual confidence in geometry is exactly where silent error hurts. |
| **R tab** | yes | **partial** | **high** | Looks like “real lab”; environment is not a controlled exam room. |
| **Statistik / Makro theory** | yes | partial | **medium** | Long narratives + math = high **invisible typo** cost. |

---

## Part 6 — Browser-required review (this pass)

| Required view | What was done | Trust read |
|---------------|---------------|------------|
| Strong page | **mikro1** implied by Pass 1 + architecture; **not** manually re-screenshotted this session | Would still **not** upgrade to “primary-safe yes” without graph/task QA |
| Suspicious page | **Generated** `politisches-system-brd/index.html` inspected in code: different shell, `generated-portal.css`, “Live” chip | **High polish / weaker traceability** → embarrassment if presented as equal to Mikro |
| Graph page | **Not** re-run pixel harness this session | **Unknown** in Pass 2 browser sense → honesty |
| R page | Script touched **Ökonometrie R-tab** at 1199px (layout visibility only) | **No** output correctness tested |
| Provenance | Not automated | Student sees footer **sometimes**; unevenness = trust hit |
| Revealed solutions | Not automated | **Risk** remains from toggle parity |
| Mobile fallback | **Scripted** narrow + focus | **Parity for mistakes/Verbindungen** looks intentional in instrumented checks |

**Bottom line on browser requirement:** Pass 2 **partially** satisfies it (fallback harness + static read of generated entry). **Does not** satisfy full “graph + R + reveal” manual trust review — that gap is itself a **Severity: operational debt** for any future Pass 2 revision.

---

## Part 8 — Required written judgments

### A. What students can trust **today**

- **Navigation and shell** for finding content (not the content’s exam correctness).
- **That the project team tried** on mikro1: structure, mistakes system, tasks density — **process trust**, not mathematical certificate.
- **Automated evidence** that right-panel fallbacks are not trivially broken in Chromium for scripted routes (narrow + focus).

### B. What students should use **only with caution** (default for “good” modules)

- **mikro1, makro1/2, statistik, finanzwirtschaft, jahresabschluss, recht, IWB, mathematik, ökonometrie** — treat as **high-quality companion**; **verify** definitions, graphs, and code output against course materials.

### C. What students should **not** trust yet as primary study source

- **mikro2** — **no** (source corpus gap in repo policy).
- **Generated portal courses (`r/`, `politisches-system-brd/`)** — **no** as primary until merged or independently source-bound.
- **Any graph-derived “intuition”** — **no** as sole authority until golden tests exist.

### D. Top 5 things that would **embarrass the builder** in public **right now**

1. **Student hits “Lösung” / Prüfungstransfer and nothing happens** (stack-specific renderer gap).
2. **R tab fails** on a friend’s laptop in the first minute.
3. **A graph that is wrong or misleading** under plausible parameters (even once).
4. **“Where is this from?”** on a polished page with **no** or thin provenance.
5. **Explaining why `politisches-system-brd` feels like a different app** than Statistik.

### E. Top 5 things that **most urgently undermine seriousness**

1. **Split-stack** without student-visible honesty.
2. **Graph trust** without automated/visual regression.
3. **R trust** without hard failure UX and “compare to local R” guidance.
4. **Prüfungstransfer global dependency** without CI enforcement.
5. **Provenance unevenness** next to premium visuals.

---

## Part 9 — Honest final verdict (pick **exactly one**)

### **3. Safe as a primary study source for some modules, but not project-wide**

**Why (no hedge):**  
There is **no** defensible basis to call the **entire branded surface** “primary-safe”: **mikro2** and **generated stacks** fail the primary rule outright; **graphs and R** are high consequence and **not** fully proven here; **Prüfungstransfer** has a documented **fallback** path in code, which is incompatible with “project-wide primary trust.”

At the same time, it is **false** to claim the whole portal is **only** a secondary toy: **mikro1-style curated paths** are plausibly a **student’s main study companion** *if* they still cross-check — hence **not** selecting option **2** as the only verdict for “some curated modules.”

**What would move it up one level (to approach 4):**

- **Merge or kill** the split-stack for public URLs **or** put a **non-dismissible** banner on generated routes: “Demonstration / not aligned to your course PDF set.”
- **Ship** graph golden tests + instructor sign-off per canonical figure.
- **Ship** R failure UX + “verify in desktop R” as first-class copy.
- **CI-gate** renderer exports + provenance manifest completeness.
- **mikro2**: add corpus **or** keep permanently sandboxed with **hard** in-product labeling.

---

## Appendix — Issues found vs fixed

| | |
|--|--|
| **Issues found** | Documented throughout Pass 2. |
| **Issues fixed** | **None** (audit-only). |

---

*Pass 2 completes when stakeholders can use Tables A–D and the final verdict for **go/no-go on “primary study” messaging** and for prioritizing split-stack work.*
