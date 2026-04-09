# Mathematik — Content enrichment pass 1

**Scope:** Additive theory, formula quick-reference, and authored `aufgaben` only. No new concept ids, no routing/infrastructure changes.

**Source grounding:** The directory `source-materials/Mathematik` in this workspace contains **no files** (empty / not present at audit time). Enrichments therefore **do not** claim verbatim alignment with a specific PDF page. They extend **existing** on-page rules in `mathematik/js/data/chapters.js` and standard university mathematics consistent with the **named** course units in `assets/js/module-content.js` (`mathematik.roadmap` / `sourceGroups`). Classification below follows the project’s source-status vocabulary.

---

## Files changed (exact)

| File | Change |
|------|--------|
| `mathematik/js/data/chapters.js` | Enriched `logarithmus_umkehr`, `linalg_matrizen`, `ableitung`, `optimierung` (theorie, `formeln`, `aufgaben`) |
| `mathematik/js/data/intuition.js` | Additional `exam` retrieval cues for the same four concepts |

---

## Concepts / sections enriched

### 1. `logarithmus_umkehr`

| Addition | Type | Notes |
|----------|------|--------|
| Bullet $\ln(a/b)=\ln a-\ln b$ with short justification | **source-distilled** (logical consequence of product law already on the page) | Same section *Logarithmus* |
| New theory block *Durchgerechnete Mini-Beispiele* (inverse linear $Q(P)$; $e^{0{,}05T}=2$; numeric $\ln(1{,}03)$ vs $3\%$) | **platform-added-explanation** | Uses only laws and approximations already introduced |
| `formeln`: expanded *Log-Wachstum* `desc` + variables; *Logarithmus von Quotient*; *Umkehrung von exp* | **platform-added-explanation** / **cross-link** to theory | Retrieval aid in the formula panel |
| **Four** new `aufgaben`: solve $e^{0{,}03t}=1{,}5$; inverse $P(Q)$ for $Q=50-P$; prove $\ln 8-\ln 2=\ln 4$; compare $\ln(206/200)$ to $3\%$ | **platform-added-drill** | Exam-style, rules-only |

**Count after:** **5** authored exercises (was 1).

---

### 2. `linalg_matrizen`

| Addition | Type | Notes |
|----------|------|--------|
| Theory block *Durchgerechnetes Beispiel ($2\times2$)* for $AB$ | **platform-added-explanation** | Walks Zeile$\times$Spalte |
| `formeln`: richer `desc`/variables for *Matrixmultiplikation*; *Transponierte*; *Transponierte eines Produkts* | **platform-added-explanation** | Matches existing warn-box |
| **Three** new `aufgaben`: compute $AB$; $A+B$ and $2B$; verify $(AB)^T=B^TA^T$ numerically | **platform-added-drill** | LA-I standard |

**Count after:** **3** authored exercises (was 0).

---

### 3. `ableitung` (fused AN1 + entry to multivariate)

| Addition | Type | Notes |
|----------|------|--------|
| Theory block *Durchgerechnet: Kettenregel* ($\ln(10+Q)$, $(2+3x)^4$) | **platform-added-explanation** | Ties chain rule to economic “margin” wording |
| `formeln`: expanded *Kettenregel*; new *Potenzregel*, *Produktregel*, *Quotientenregel*, *Partielle Ableitung*; *Grenzkosten* unchanged but kept in list | **platform-added-explanation** | Formula–meaning linkage for drills |
| **One** new `aufgabe`: $e^{0{,}1x}$ and $\ln(5+2Q)$ | **platform-added-drill** | Pure differentiation |

**Count after:** **5** authored exercises (was 4).

---

### 4. `optimierung` (fused OP1 + multivariate/Hesse)

| Addition | Type | Notes |
|----------|------|--------|
| Paragraph *Durchgerechnet* for $f(x,y)=-x^2-y^2+4x+6y$ with FOC + Hesse + max | **platform-added-explanation** | Sits in existing *mehrere Variablen* section |
| `formeln`: clearer `desc`/variables for BEO/BZO (1D); new *BEO (zwei Variablen)*; *Hesse (2×2)*; *Gewinnmaximum* with $Q^*$ variable | **platform-added-explanation** | Links symbols to exam steps |
| **One** new `aufgabe`: $f(x,y)=-x^2-y^2+8x+4y$ + Hesse classification | **platform-added-drill** | Parallel structure to worked example |

**Count after:** **5** authored exercises (was 4).

---

### 5. `intuition.js` (retrieval)

| Concept | Addition |
|---------|----------|
| `logarithmus_umkehr` | **2** further `exam` if/then patterns |
| `linalg_matrizen` | **2** further `exam` patterns |
| `ableitung` | **2** further `exam` patterns |
| `optimierung` | **2** further `exam` patterns |

Feeds `ensureMinimumStepProblems` / exam-style prompts without new infrastructure.

---

## New learning objects — summary counts

| Concept | New theory blocks / paragraphs | New `formeln` entries (net) | New `aufgaben` |
|---------|----------------------------------|------------------------------|----------------|
| `logarithmus_umkehr` | 1 section + 1 list item | +2 net (3 cards total; one expanded) | +4 |
| `linalg_matrizen` | 1 section | +2 | +3 |
| `ableitung` | 1 section | +4 net (6 cards) | +1 |
| `optimierung` | 1 worked paragraph | +2 net (5 cards) | +1 |

---

## Remaining gaps (explicit) and why they remain

1. **E1 / E3 still absent** as portal concepts — requires **new** source-backed theory blocks from `01Mathe_E1_…` / `03Mathe_E3_…` when materials are available in-repo; not addressed here.
2. **`integral`** — not enriched in this pass; audit priorities targeted log, LA I, and fused analysis/optimization. AN3 breadth (substitution, partial integration, double integrals per roadmap) still exceeds the current single card depth.
3. **`linalg_det_inverse_lgs`** — LA II roadmap mentions **Eigenwerte**; portal content still omits that thread — would be a separate content pass, not a drill tweak.
4. **No PDF-verbatim claims** — without extractable files under `source-materials/Mathematik`, this pass cannot assert line-by-line parity with VL PDFs.

---

## Judgment

- **Deployable:** Yes — edits are confined to data files consumed by the existing portal renderer and step factory.
- **No fake completion:** Module still **8** concepts; **10** VL units and **E1/E3** content gap unchanged.
- **No extra concept split:** Not required; additions fit existing ids.

---

## Explicit statement

Further **content** passes can add E1/E3 cards, deepen **integral**, and/or add eigenvalue material for LA II when grounded in available source files. **Granularity-only** splitting of `ableitung` / `optimierung` remains **out of scope** for this enrichment pass.
