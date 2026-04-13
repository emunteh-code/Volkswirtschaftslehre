# Public-core concept-level source-diff hardening — Pass 2 (mikro1)

**Date:** 2026-04-12  
**Scope:** `mikro1` only.  
**Method:** Text extraction from on-disk **`Mikro_1_VL_*.pdf`** via `pdftotext`, cross-read against `mikro1/js/data/chapters.js`, `intuition.js`, `graphPanel.js` / `graphs.js`, and `docs/audits/mikro1-provenance-curation-pass-1.md`. No slide-by-slide pixel proof of every figure.

**Completion honesty:** This pass **does** compare real VL wording to portal text for the **audited** concepts and applies **documented** fixes. It **does not** exhaust all 33 concepts against all PDF pages in one session. Deferred areas are listed under **Coverage gap**.

---

## 1. Source basis used (exact)

| Path | Use in this pass |
|------|------------------|
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_1.pdf` | KMM assumptions, budget set/line, rotation rule |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_2.pdf` | Lagrange exkurs (Nebenbedingung, Lagrange-Funktion) |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_3.pdf` | Haushaltsoptimum — Tangentialpunkt, Budget |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_4.pdf` | Nutzenmax, Marshall, Lagrange-Funktion recap |
| `source-materials/Mikroökonomik I/Mikroökonomik I/Vorlesungsfolien/Mikro_1_VL_17.pdf` | Monopol programme-level check (not full numeric audit) |
| `docs/audits/mikro1-provenance-curation-pass-1.md` | Concept ↔ PDF anchor map |
| `mikro1/js/data/contentManifest.js` | Provenance paths (unchanged this pass) |

---

## 2. Concepts audited (this pass) + per-concept report

### A. `kmm`

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `kmm` |
| 2 | **Source basis** | `Mikro_1_VL_1.pdf` — Fließtext „Konsum(möglichkeiten)menge“, Annahmen **Teilbarkeit**, **Additivität** ($a,b\in\text{KMM}\Rightarrow a+b\in\text{KMM}$), **Konvexität** |
| 3 | **Portal strengths** | Formal set $\mathbb{R}^n_+$, Nichtnegativität, Teilbarkeit, Konvexität with proof sketch, KMM vs Budget, good tasks |
| 4 | **Portal weaknesses** | **Additivität** from VL1 was **not** listed alongside other KMM assumptions (compression vs. lecture enumeration) |
| 5 | **Fidelity judgment** | **mixed** → after fix **strong** on assumption list alignment |
| 6 | **Misleading / missing** | Missing explicit **Additivität** as named assumption (VL names all three) |
| 7 | **Recommended fix** | Add paragraph defining Additivität as in VL1; label block „wie in VL 1“ |
| 8 | **Fix applied?** | **Yes** — `mikro1/js/data/chapters.js` |

---

### B. `budget`

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `budget` |
| 2 | **Source basis** | `Mikro_1_VL_1.pdf` — $\sum p_i x_i\le m$, $p_1x_1+p_2x_2=m$, slope $dx_2/dx_1=-(p_1/p_2)$; rotation „um den Achsenabschnitt des Gutes, dessen Preis sich **nicht** ändert“; parallel shift for $m$; homogeneity $t m = t p_1 x_1 + t p_2 x_2$ |
| 3 | **Portal strengths** | 2-good case, intercepts, slope sign, comparative statics for $m$, $p_1$, $p_2$, homogeneity task, Drehpunkt cards |
| 4 | **Portal weaknesses** | Portal jumped straight to $n=2$ without stating the **general** VL inequality first; rotation rule not tied to **VL wording** |
| 5 | **Fidelity judgment** | **mixed** → **strong** after bridging sentences |
| 6 | **Misleading / missing** | Possible impression that only two-good definition exists in course |
| 7 | **Recommended fix** | One sentence: VL introduces $\sum_{i=1}^n p_i x_i\le m$, then $n=2$ for graphics; cite rotation principle from VL1 in comparative statics |
| 8 | **Fix applied?** | **Yes** — `mikro1/js/data/chapters.js` |

---

### C. `lagrange`

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `lagrange` |
| 2 | **Source basis** | VL2 exkurs: NB „Einhaltung des Budgets“, Lagrange-Funktion kombiniert Ziel + NB „in gleich null gesetzter Form“ mit $\lambda$; VL4: $\mathcal L$ form, Marshall/Tangentialbedingung |
| 3 | **Portal strengths** | $\mathcal{L}=u+\lambda(m-p_1x_1-p_2x_2)$, three FOCs, $MU_1/MU_2=p_1/p_2$, $\lambda$ interpretation, sign convention warning |
| 4 | **Portal weaknesses** | None material found in spot-diff against extracted VL2/VL4 programme text |
| 5 | **Fidelity judgment** | **strong** |
| 6 | **Misleading / missing** | — |
| 7 | **Recommended fix** | None |
| 8 | **Fix applied?** | No code change |

---

### D. `hausopt` (spot-check)

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `hausopt` |
| 2 | **Source basis** | `Mikro_1_VL_3.pdf` — „maximales Nutzenniveum … für eine gegebene Budgetmenge“; „Budget vollständig … ausgegeben“; „Tangentialpunkt“ höchster IK mit Budgetgerade |
| 3 | **Portal strengths** | Portal graph title and tangency narrative align with standard VL message; interactive CD-style $u=x_1x_2$ consistent with teaching examples |
| 4 | **Portal weaknesses** | No line-by-line check of every VL3 slide vs. `chapters.js` body in this pass |
| 5 | **Fidelity judgment** | **strong** (spot-check only) |
| 6 | **Misleading / missing** | Not fully verified |
| 7 | **Recommended fix** | Future pass: read full VL3 extract vs. `hausopt.theorie` |
| 8 | **Fix applied?** | No |

---

### E. `grs` (task + interpretation)

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `grs` (guided task block) |
| 2 | **Source basis** | Standard definition $GRS=MU_1/MU_2$ vs. market $p_1/p_2$ (VL2/VL3 programme) |
| 3 | **Portal strengths** | Correct inequality $GRS=1 < p_1/p_2=2$, correct direction „weniger $x_1$“ |
| 4 | **Portal weaknesses** | **Result string** claimed „Gut 1 subjektiv **unterbewertet**“ — **wrong sign of rhetoric** for $GRS<p_1/p_2$ (Gut 1 is **too expensive** at the margin relative to willingness to trade); intermediate step wording was imprecise |
| 5 | **Fidelity judgment** | **weak** on that task string → **strong** after fix |
| 6 | **Misleading / missing** | Inverted economic interpretation in one exam-style line |
| 7 | **Recommended fix** | Replace with marginal-willingness vs. market-price explanation; fix `result` |
| 8 | **Fix applied?** | **Yes** — `mikro1/js/data/chapters.js` |

---

### F. `budget` / `intuition` layer

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `budget` (`intuition.js`) |
| 2 | **Source basis** | VL1 slope and rotation wording |
| 3 | **Portal strengths** | Drehpunkt intuition matches VL |
| 4 | **Portal weaknesses** | „Steigung $p_1/p_2$ unverändert“ omits **minus** (ambiguous vs. explicit $dx_2/dx_1=-p_1/p_2$ in VL) |
| 5 | **Fidelity judgment** | **mixed** |
| 6 | **Misleading / missing** | Sign clarity for Aufgaben/Prüfungstransfer recall |
| 7 | **Recommended fix** | State $-p_1/p_2$; reference VL1 rotation phrase |
| 8 | **Fix applied?** | **Yes** — `mikro1/js/data/intuition.js` |

---

### G. `cobbd` (metadata hygiene)

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `cobbd` (formula card variables) |
| 2 | **Source basis** | VL4 CD example (programme) |
| 3 | **Portal strengths** | Formulas and Marshall demands match standard CD |
| 4 | **Portal weaknesses** | `Nachfrage x₁*` formula card listed **spurious** variable keys (`a`, `b`, `p_2`) unrelated to $x_1^*=\alpha m/p_1$ |
| 5 | **Fidelity judgment** | **mixed** (pedagogy/trust in UI legend, not math error) |
| 6 | **Misleading / missing** | Wrong legend keys confuse students |
| 7 | **Recommended fix** | Trim variables to $\alpha, m, p_1, x_1^*$ |
| 8 | **Fix applied?** | **Yes** — `mikro1/js/data/chapters.js` |

---

### H. `monopol` (scope limit)

| # | Field | Content |
|---|--------|---------|
| 1 | **Slug** | `monopol` |
| 2 | **Source basis** | `Mikro_1_VL_17.pdf` programme headers only (Gewinnmax, Wohlfahrt) — **no** full equation-by-equation diff |
| 3 | **Portal strengths** | Intuition stresses $MR=MC$ then read $p$ from demand (matches standard treatment) |
| 4 | **Portal weaknesses** | Interactive graph uses **didactic** functional forms $p(y)=a-y$, $C(y)=cy^2$ — not asserted as literal transcription of VL17 algebra in this audit |
| 5 | **Fidelity judgment** | **not audited to strong** in this pass |
| 6 | **Misleading / missing** | Risk: students equate graph parameters with Klausur algebra from VL without reading graph caption |
| 7 | **Recommended fix** | Pass 3: add one explicit „Illustrationsparameter“ sentence in graph panel or theory if not already sufficient |
| 8 | **Fix applied?** | No (deferred) |

---

## 3. Graph / formula / task / warning / provenance (cross-cutting)

| Surface | Finding |
|---------|---------|
| **Graph (`budget`)** | Logic (intercepts, negative slope) consistent with VL1; no code change |
| **Formulas (`lagrange`)** | Matches VL2/VL4 sign convention documented in portal |
| **Tasks (`grs`)** | Fixed misleading interpretation (see above) |
| **Warnings** | No change; existing `budget` Drehpunkt boxes already match VL1 |
| **Provenance** | `MIKRO1_PRIMARY_REFS` unchanged; still honest for edited concepts (VL1 / VL4 anchors) |

---

## 4. Issues found vs. issues fixed

| Issue | Fixed? |
|-------|--------|
| KMM missing **Additivität** as in VL1 | **Yes** |
| Budget missing explicit **n-good** intro from VL | **Yes** |
| Budget comparative static missing VL1 **rotation wording** anchor | **Yes** |
| GRS task wrong **„unterbewertet“** phrasing | **Yes** |
| Intuition `budget` imprecise slope sign | **Yes** |
| CD formula card wrong **variable legend** | **Yes** |
| Full `monopol` / all remaining concepts page-diff | **No** (gap) |

---

## 5. Exact files changed

- `mikro1/js/data/chapters.js` — `kmm`, `budget`, `grs` task, `cobbd` formula metadata  
- `mikro1/js/data/intuition.js` — `budget` intuition bullets  

---

## 6. Browser verification

**Command:** `cd tools/clickthrough && node trust-regression-pass-1.mjs`  
**Result:** `trust-regression-pass-1: all checks passed.` (includes `mikro1/budget` theorie, graph shell, math leak, provenance footer, Prüfungstransfer toggle on `budget` / intuition).

**Manual spot-check recommended:** open `mikro1/index.html` → `kmm` / `budget` / `lagrange` Theorie; `budget` Grafik; `grs` Aufgaben; `budget` Intuition; scroll to provenance footer — confirm new paragraphs render, no raw TeX leaks.

---

## 7. Coverage gap (explicit)

**Not** line-audited in Pass 2: `slutsky`, `monopol` (full), `markt`, `gewinn`, `pkomp`, `psubst`, `arbeit`, `cv_ev`, full `ces_u` vs VL4 pages, all `stepProblems.js` / full exams, every `INTUITION` card, every graph engine path beyond trust script.

**`psubst`:** remains without primary PDF anchor per `mikro1-provenance-curation-pass-1.md` — separate policy, not „fixed“ here.

---

## 8. Updated trust judgment (mikro1, after Pass 2)

- **Before Pass 2:** Strong **product** benchmark; concept-level **academic** parity partly assumed from maturity.  
- **After Pass 2:** **Selected high-visibility concepts** (`kmm`, `budget`, `grs`, intuition `budget`, `cobbd` legend) are **tighter** against **extracted VL1–VL4 text**. **Lagrange** / **hausopt** (spot) look **strong**.  
- **Overall:** Still **not** „fully defensible under hostile line-by-line audit of all 33 concepts“ — Pass 2 is a **real** source-diff slice, not completion of the whole module.

**Honest tier:** **improved, benchmark-strengthened on audited surfaces; caution remains** for unaudited concepts and for any content beyond verbatim VL scope (`source-distilled` / exam-transfer layers).

---

## 9. Success / completion rule (self-assessment)

- **Success criterion partial:** Actual **source-on-disk** comparison drove **multiple** content fixes, not metadata-only.  
- **Completion rule:** Pass is **complete as Pass 2 (mikro1, prioritized slice)**; it is **incomplete** as a whole-module source closure — see §7.
