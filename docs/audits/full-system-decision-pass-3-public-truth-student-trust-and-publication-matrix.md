# Full-system decision pass 3  
## Public truth policy, student trust policy, module publication matrix

**Date:** 2026-04-12  
**Inputs:** [`full-system-fine-tooth-comb-audit-pass.md`](full-system-fine-tooth-comb-audit-pass.md), [`full-system-fine-tooth-comb-audit-pass-2-student-trust-and-blast-radius.md`](full-system-fine-tooth-comb-audit-pass-2-student-trust-and-blast-radius.md)  
**Nature:** **Decision framework** — not a re-audit. Goal: **truth, risk control, operational publication choices.**

**Code changes this pass:** none.

---

## Artifact 1 — Public truth policy

### 1.1 Safe public framing (what may be said without overstating)

| Framing | Verdict |
|---------|---------|
| **Interactive learning portal** | **Allowed** — accurate; does not promise exam correctness. |
| **Structured revision / study companion** | **Allowed** — matches Pass 2 verdict (not project-wide primary-safe). |
| **Guided exam-prep support** | **Allowed with caveat** — only if paired orally or in copy with “alongside course materials / PDFs.” |
| **University-associated learning resource** | **Allowed with caveat** — must not imply official endorsement of every page by every instructor unless true. |
| **Primary study platform (whole portal)** | **Not allowed** — contradicts Pass 2; would mislead stressed students. |
| **Course-faithful source mirror (whole portal)** | **Not allowed** — false given split-stack + uneven provenance + mikro2 corpus gap. |
| **Replacement for course materials** | **Not allowed** — unsafe and dishonest today. |
| **“Trust every graph / formula / module equally”** | **Not allowed** — contradicts architecture and risk analysis. |

### 1.2 Unsafe public framing (currently misleading if stated plainly)

- “You can rely on this portal **instead of** your Skript/PDF.”  
- “**All** modules are equally source-grounded to `source-materials/`.”  
- “**Graphically shown** relationships are **exam-guaranteed** correct for every parameter.”  
- “**R output in the browser** matches your exam environment.”  
- “**One** consistent product — same trust everywhere” (split-stack makes this false without heavy qualification).  
- “**Mikro II** content is the same quality tier as **Mikro I** for source anchoring” (repo policy: no Mikro II corpus on disk).  
- “**Generated** course shells (`politisches-system-brd`, `r/`) are the **same** class of artifact as curated Statistik/Mikro modules” without differentiation.

---

## Artifact 2 — Student trust policy

### Modes (normative for students)

| Mode | Definition |
|------|------------|
| **A — Orientation / structure** | Safe to see **what topics exist**, how they are chunked, and what to read next in PDFs. |
| **B — Guided practice** | Safe for **drills, repetition, transfer prompts** if the student treats answers as **practice**, not oracular truth. |
| **C — Only with cross-check** | Use **only alongside** Skript/Folien; verify definitions, graphs, algebra, and code output. |
| **D — Not primary alone** | Do **not** rely on this surface alone for exam truth (includes high-variance technical surfaces). |

### Default rule for a serious exam student **today**

Use the portal in **Mode C** by default for theory and formulas; **Mode B** for Aufgaben/Prüfungstransfer if they re-check solutions against their materials; **Mode D** for anything they cannot verify (broken interaction, unfamiliar stack, or known non-source-backed module).

---

## Artifact 3 — Module publication matrix (normative)

**Visibility status glossary**

- **public-highlighted** — on landing / primary shelf; may be “best face” of product.  
- **public-visible** — live module list; no special warning beyond global trust copy.  
- **public-visible with caveat** — allowed URL + copy must carry boundary (banner, footer, or module hero).  
- **internal-only** — not linked from public marketing surfaces; URL may exist for dev/demo.  
- **hidden** — not in public module list; deep-link discouraged; policy docs may reference.

**Trust status glossary**

- **primary-safe** — may be described as “main study aid” **only with** explicit “still verify with PDFs” (Pass 2 did not award project-wide primary-safe **yes**; here **primary-safe** means *least bad* tier, **not** “omit PDFs”).  
- **secondary-safe** — strong companion; default **Mode C**.  
- **caution-only** — **Mode C** or **D** depending on surface.  
- **not safe** — **Mode D** for primary truth; orientation/practice only.

**Claim status glossary**

- **market strong** — may say “strong module” in marketing with standard caveats.  
- **show with caveat** — may list but must not imply parity with best module.  
- **do not promote** — no hero placement, no “featured” until rework/audit.

---

## Artifact 4 — Claim boundary / forbidden-claims policy

See **Table D** for the operational firewall. Summary:

- **Forbidden** = must never appear in UI, README, or public posts.  
- **Risky** = allowed only with adjacent caveat text.  
- **Safe** = OK standalone.

---

## Part 5 — Public embarrassment go/no-go (by audience)

| Audience | Safe to show “representative” portal? | Caveat? | Why |
|----------|----------------------------------------|-----------|-----|
| **Classmates** | **Yes, with caveat** | Yes — “companion, not replacement for PDFs” | Tolerates rough edges; still hurt if R/graph fails first click. |
| **Friends** | **Yes, with caveat** | Same | Same; first-impression risk on R/graph. |
| **Professors** | **Not safe as “finished academic product”** | Heavy caveat if shown | Credibility attack if provenance thin, graph debated, or split-stack unexplained. |
| **Unknown public (internet)** | **Not safe as unqualified “study platform”** | Must use **Artifact 1** safe framing only | Random user infers guarantees the repo does not support. |

---

## Part 6 — Module-by-module decision table

| Module / surface | Public visibility | Trust status | Safe as primary study source? | Public claim level | Required caveat | Action now |
|------------------|-------------------|--------------|-------------------------------|--------------------|-----------------|------------|
| **mikro1** | **public-highlighted** | **secondary-safe** | **with caution** (not “yes” project-wide) | **market strong** | “Cross-check with Mikro I course materials; graphs/R not oracle.” | **highlight** |
| **mikro2** | **hidden** | **not safe** (source corpus gap) | **no** | **do not promote** | “Not direct-source anchored in repo; not for primary study.” | **hide** (keep `modules.js` hidden; block hero links) |
| **makro1** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Graphs and narratives require PDF cross-check.” | **keep visible but caveat** |
| **makro2** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | Same as makro1. | **keep visible but caveat** |
| **statistik** | **public-visible** | **secondary-safe** | **with caution** | **show with caveat** | “Inferenz-heavy; verify against Statistik Skript.” | **keep visible but caveat** |
| **oekonometrie** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “R/browser environment ≠ exam R; verify output.” | **keep visible but caveat** |
| **finanzwirtschaft** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Long embedded HTML; verify formulas.” | **keep visible but caveat** |
| **jahresabschluss** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Legal nuance; always cross-check HGB/Skript.” | **keep visible but caveat** |
| **recht** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Doctrinal chains must match instructor/Gutachtenstil.” | **keep visible but caveat** |
| **internationale-wirtschaftsbeziehungen** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Broad module; cross-check open-economy narratives.” | **keep visible but caveat** |
| **mathematik** | **public-visible** | **caution-only** | **with caution** | **show with caveat** | “Math-heavy; check every derivation.” | **keep visible but caveat** |
| **Generated routes (`r/`, `politisches-system-brd/`)** | **public-visible with caveat** (not on `PUBLIC_MODULES` — **do not promote** from landing) | **caution-only** / **not safe** for primary | **no** | **show with caveat** | “Different build stack from curated modules; demo / supplementary.” | **keep visible but caveat** + **banner** on page OR **keep internal** if banner not implemented |
| **Shared graph surfaces** | n/a | **caution-only** | **with caution** | **show with caveat** | “Graphs are teaching aids; verify against course figures.” | **re-audit before trusting** (golden tests) |
| **Shared R surfaces** | n/a | **caution-only** | **with caution** (often **no** if runtime fails) | **show with caveat** | “Browser R ≠ exam setup.” | **rework failure UX** before “strong” claims |
| **Prüfungstransfer** | n/a | **caution-only** | **with caution** | **show with caveat** | “Practice transfer ≠ guaranteed exam isomorphism.” | **CI enforce renderer parity** |
| **Provenance / source footer** | n/a | **secondary-safe** where populated | **with caution** | **show with caveat** | “Footer explains layers; absence ≠ ‘no source’.” | **manifest lint** + copy |

**Note on “primary-safe” column:** Pass 2 refused project-wide **yes**. This matrix uses **secondary-safe** for mikro1 (best tier) — meaning **best companion**, not “drop your PDF.”

---

## Part 7 — Split-stack decision (single recommendation)

### Chosen recommendation: **2 — keep both public but visibly differentiate them**

**Defense (no hedge):**  
Removing public URLs (**5**) or forcing merge (**4**) before staffing exists **delays truth** without necessarily reducing risk if bookmarks persist. Hiding generated entirely from the web (**3** as “internal-only”) is coherent but **may** discard legitimate demo use. **1** (status quo) is **unacceptable** — it lets polish imply a **single** reliability class and is exactly the trust failure Pass 2 named.

**Therefore:** Curated modules remain the **default public product**. Any **generated** route that remains reachable **must** carry an **immediate, non-optional** differentiation (banner + copy: different data pipeline, not the same provenance contract as Mikro I). If the team cannot ship that banner, **fallback is 5** (hide routes) — but the **primary** policy choice here is **2** because it is the minimum honest fix that preserves URLs while stopping the lie of sameness.

---

## Part 8 — Final product identity (pick exactly one)

### **2. Interactive study companion**

**Justification:**  
Pass 2 classified the portal as **not** safe as a primary study product **project-wide**, while acknowledging strong pockets. “Companion” is the only identity that **does not overclaim** graphs, R, split-stack, or mikro2. It still allows **earned enthusiasm** for mikro1 **inside** the companion framing (“strongest module in the suite”) without rebranding the entire repository as a **primary portal**.

---

## Part 9 — Required tables

### Table A — public truth policy

| Claim / framing | Allowed? | Caveat required? | Why? |
|-----------------|----------|------------------|------|
| Interactive learning / revision portal | Yes | Optional light caveat | True; no exam-oracle claim. |
| Study **companion** to official materials | Yes | Prefer explicit | Matches Pass 2. |
| Primary study **for whole portal** | **No** | n/a | Misleading. |
| Source-faithful **everywhere** | **No** | n/a | False (mikro2, generated, uneven manifests). |
| “Same reliability in every tab” | **No** | n/a | False (graphs, R, transfer). |
| Mikro1 is the **benchmark** module | Yes | Yes — still cross-check | True process claim + honest limit. |

### Table B — student trust policy

| Module / surface | Recommended use mode | Cross-check required? | Why? |
|------------------|----------------------|------------------------|------|
| mikro1 | B + C | **Yes** | Best structure; still not PDF-certified in automation. |
| mikro2 | D | **Yes** (or avoid) | No Mikro II corpus in repo per policy. |
| makro1/2, statistik, finanz, JA, recht, IWB, mathe | C | **Yes** | Mixed rendering/source risk. |
| oekonometrie (+ R) | C / D on R | **Yes** | Environment + output variance. |
| Graph tabs | C | **Yes** | High silent-error cost. |
| Prüfungstransfer | B + C | **Yes** | Practice ≠ guaranteed exam shape. |
| Generated routes | C / D | **Yes** | Different stack; not landing-promoted. |
| Provenance footer | A + C | **Yes** when sparse | Absence must not imply authority. |

### Table C — module publication matrix (compact)

| Module / surface | Visibility status | Trust status | Claim status | Required caveat | Action now |
|------------------|-------------------|--------------|--------------|-----------------|------------|
| mikro1 | public-highlighted | secondary-safe | market strong | PDF + graph check | highlight |
| mikro2 | hidden | not safe | do not promote | Source corpus gap | hide |
| makro1 | public-visible | caution-only | show with caveat | Graphs | keep visible but caveat |
| makro2 | public-visible | caution-only | show with caveat | Graphs | keep visible but caveat |
| statistik | public-visible | secondary-safe | show with caveat | Inferenz | keep visible but caveat |
| oekonometrie | public-visible | caution-only | show with caveat | R env | keep visible but caveat |
| finanzwirtschaft | public-visible | caution-only | show with caveat | Long formulas | keep visible but caveat |
| jahresabschluss | public-visible | caution-only | show with caveat | Legal | keep visible but caveat |
| recht | public-visible | caution-only | show with caveat | Gutachtenstil | keep visible but caveat |
| IWB | public-visible | caution-only | show with caveat | Breadth | keep visible but caveat |
| mathematik | public-visible | caution-only | show with caveat | Derivations | keep visible but caveat |
| generated `r/`, `politisches-system-brd/` | public-visible with caveat (not promoted) | caution-only / not safe primary | show with caveat | Different stack | banner OR internalize |
| Graph (shared) | n/a | caution-only | show with caveat | Verify figures | re-audit |
| R (shared) | n/a | caution-only | show with caveat | Not exam env | rework UX |
| Prüfungstransfer | n/a | caution-only | show with caveat | Toggle parity | CI |
| Provenance | n/a | secondary-safe | show with caveat | Per-concept | manifest lint |

### Table D — forbidden / risky / safe claims

| Statement | Category | Reason |
|-----------|----------|--------|
| “Replace your PDFs with this portal.” | **forbidden** | Pass 2 primary verdict. |
| “Every module is direct-source to PDFs.” | **forbidden** | mikro2 + generated + partial manifests. |
| “Graphs are always exam-correct.” | **forbidden** | No golden proof shipped. |
| “R in browser = your Prüfung R.” | **forbidden** | Environment mismatch. |
| “Our strongest module is Mikro I.” | **safe** | Process-true if maintained. |
| “Use alongside your course materials.” | **safe** | Encourages correct student behavior. |
| “Interactive practice and transfer drills.” | **safe** | Describes mechanism, not infallibility. |
| “We are improving graph and R reliability.” | **risky** | OK if true; implies past weakness — still honest. |

### Table E — audience go/no-go

| Audience | Safe to show? | Caveat needed? | Why? |
|----------|---------------|----------------|------|
| Classmates | Yes | Yes | WIP tolerance; still protect first-click failures. |
| Friends | Yes | Yes | Same. |
| Professors | **With heavy caveat only** | **Yes** | Academic trust bar higher. |
| Unknown public | **Only with Artifact 1 framing** | **Yes** | No implied warranty of correctness. |

---

## Part 10 — Required written judgments

### What can be shown proudly right now

- **Landing** and overall **visual discipline** (as “we built a serious shell”).  
- **mikro1** as the **clearest example** of structured concepts, tasks, and mistake culture — **as companion**, not replacement.  
- **Right-panel fallback behavior** where automated checks pass (instrumented slice — not a student-facing brag unless framed as engineering quality).

### What can only be shown with caveat

- **Every live module** except the restricted sense above — always with “**use with Skript**.”  
- **Graph and R tabs** explicitly.  
- **Generated routes** — only with **stack differentiation** copy.

### What should stay hidden or internal for now

- **mikro2** from public **promotion** and landing hero (**already hidden** in `modules.js` — **keep**).  
- **Generated** routes from **landing promotion** (**already** not in `PUBLIC_MODULES` — **keep**); add **banner** if URLs are shared.

### What students can rely on

- **Topic maps**, **task scaffolding**, **mistake prompts**, **reveal discipline** — as **study process** aids.  
- **Automated regression slices** only in the sense: “this subsystem was checked for obvious duplication/layout failure” — **not** content truth.

### What students must still verify

- **All** definitions, **all** graphs, **all** algebra, **all** R numbers, **all** legal chains — against **their** official course artifacts.

### What the builder must not overclaim

- **Primary-portal** status, **full source mirroring**, **equal module reliability**, **exam-oracle** graphs/R.

### The single most honest current description of the portal

**An interactive, structured study companion for VWL revision—strongest in curated theory-and-practice modules such as Mikro I, but not a replacement for official course materials; technical surfaces (graphs, in-browser R) and some modules require systematic cross-checking, and generated demo routes are not the same trust class as the main curated stack.**

---

## Summary — four decision artifacts (one-page)

| Artifact | Location in this doc |
|----------|-------------------------|
| **1. Public truth policy** | §1.1–1.2 + Table A |
| **2. Student trust policy** | Modes + Table B |
| **3. Module publication matrix** | Part 6 + Table C |
| **4. Forbidden / risky / safe claims** | Artifact 4 + Table D |

**Split-stack:** **Recommendation 2** (visible differentiation).  
**Product identity:** **2 — Interactive study companion.**

---

*Pass 3 complete. Next implementation step: enforce **Artifact 1 + 4** in landing/README and add **generated-route banner** or downgrade to recommendation **5**.*
