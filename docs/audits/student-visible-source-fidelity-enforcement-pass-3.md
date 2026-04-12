# Student-visible source-fidelity enforcement — Pass 3

**Date:** 2026-04-11  
**Scope:** Trust-critical correction pass — **live portal content only** (theory, graphs, labels, topic structure). Not a provenance, manifest, or classification pass.

**Sources consulted for Makro I alignment:** Existing in-repo student-facing text already tied to course logic (`makro1/js/data/chapters.js`, especially `phillips` and `islmpc`); `source-materials/Makroökonomik I/.../Zusammenfassungen/Makro I VL8.pdf` and related VL PDFs are the canonical corpus for deeper checks — this pass prioritises **visible** closure over re-reading every PDF page-by-page.

---

## A. Mismatch between prior audit posture and the live product

| Topic / module | Prior risk | What stayed visibly wrong | Why metadata-only passes are insufficient |
|----------------|------------|---------------------------|-------------------------------------------|
| **`makro1` / `islmpc`** | Treated as “strong” on theory text | **Graph tab** still showed the generic fallback (“kein Diagramm nötig”) because `islmpc` was **not** in `GRAPH_CONCEPTS`. Students saw **zero** interactive architecture for IS-LM-PC despite long theory on coupling IS, Phillips, and policy reaction. | Adding manifests or audit prose does not draw a second axis or a Phillips panel. |
| **`makro1` / `phillips`** | Theory already discussed supply shocks | **Graph** showed expectation shift but **no explicit adverse supply-shock shift** students could manipulate; shock logic remained easier to read in text than to **see** in the diagram. | “Mentioned in graph strip” without a visible shifted PC is weak for exam-style shift-vs-movement drills. |
| **Oil / supply shock in IS-LM-PC chain** | Partially covered under Phillips | **IS-LM-PC chapter** did not yet **name** the two-diagram architecture in the theory layer or tie **energy/commodity-style** adverse shocks to the **coupled** story in one place. | Students landing on IS-LM-PC could still miss that the **PC shift** feeds back through the **interest rule** into `Y`. |

---

## B. Exact student-visible corrections

### `makro1` / `islmpc`

- **New interactive graph** (Graph tab): **Two stacked panels** on one canvas — **upper:** (Y, i) with **IS**, **horizontal interest-rule line**, vertical **Yₙ**, equilibrium point; **lower:** (u, π) with **short-run Phillips curve**, vertical **uₙ**, equilibrium point consistent with Okun + PC + rule.
- **Regler:** autonome Nachfrage, Yₙ, πᵉ, α, λ (rule strength), **Angebotsschock** (PC shift). Moving the supply shock visibly shifts the **lower** PC and, through π, the **upper** policy line level used in the narrative.
- **Graph interpretation box:** explains **linked** logic (Okun → Phillips → Zinsregel → IS), not a single-panel shortcut.

### `makro1` / `phillips`

- **New slider** “Angebotsschock (PC nach oben)”: when s > 0, a **dashed reference curve** “ohne Angebotsschock” appears alongside the shifted PC; **Punkt A** moves on the **shifted** curve.
- **Interpretation rows** updated for shift vs. movement and stagflation **read** as a **shift**.

### `makro1` / `islmpc` theory (HTML content)

- New sections: **“Zwei Diagramme: Oberes (Y, i) und unteres (u, π)”** and **“Negative Angebotsschocks und die Phillipskurve”**, explicitly pointing students to the **Graph** tab and the **supply-shock** control.

---

## C. Files changed

| File |
|------|
| `makro1/js/ui/graphPanel.js` |
| `makro1/js/ui/graphs.js` |
| `makro1/js/data/chapters.js` |
| `docs/audits/student-visible-source-fidelity-enforcement-pass-3.md` |

---

## D. Mandatory Makro1 section

| Item | Result |
|------|--------|
| **`islmpc`** | **Yes:** `islmpc` added to `GRAPH_CONCEPTS`; dedicated **dual-panel** graph; theory sections describe **upper/lower** linkage and supply shocks. |
| **`phillips`** | **Yes:** visible **supply-shock** control + second (reference) curve when s > 0; interpretation text updated. |
| **Oil-price / supply-shock treatment** | **Theory:** IS-LM-PC section now states adverse supply shocks (incl. **Energie-/Rohstoffpreise** as typical lecture motivation per existing Phillips framing). **Graph:** shock sliders on **both** `phillips` and `islmpc`. |
| **Graph architecture** | **Changed visibly** for `islmpc` (was **no** graph; now **two panels**). **Phillips** architecture unchanged in layout but **not** flattened — extra curve + control. |
| **Topic granularity** | **Not** split into new chapter IDs (would touch SRS/progress keys). Granularity improved **inside** `islmpc` via **new theory sections** + **graph**; not a separate nav topic for “supply shocks only”. |

---

## E. Browser verification

**Status:** Automated browser MCP was **not** available in this session; local `curl` to a dev server was **unreliable** (empty/timeout).  

**Manual verification checklist** (required for sign-off in your environment):

1. Open `makro1/index.html` (or served equivalent).
2. Navigate to **“IS-LM-PC: Rückkehr zur mittleren Frist”** → **Graph** tab.  
   - **Expect:** Two titled panels, IS + horizontal rule + Yₙ above; PC + uₙ below; legend; moving **Angebotsschock** visibly shifts lower PC and changes the story in **Graph-Interpretation**.
3. Navigate to **“Phillipskurve …”** → **Graph** tab.  
   - **Expect:** New **Angebotsschock** slider; for s > 0, dashed **ohne Angebotsschock** vs solid shifted PC; Punkt A on shifted curve.

---

## F. Honest non-closure / residual risk

- **Other modules:** No project-wide sweep of every graph-heavy topic outside this Makro I focus in this pass.
- **IS-LM-PC graph model:** Pedagogical **stylised** coupling (Okun + PC + simple interest rule). It is **not** a full dynamic simulation with LM stock, fiscal financing, or all lecture variants — only what is needed to make **architecture** visible.
- **Topic split:** No new `CHAPTER` row for “Angebotsschocks allein”; shocks remain grouped under `phillips` / `islmpc` **by design** here to avoid silent breakage of stored progress keys.
- **VL PDF line-by-line:** This pass did **not** re-derive every coefficient from `Makro I VL8.pdf`; it enforces **visible** alignment with **already authored** in-repo Phillips / IS-LM-PC logic and standard Makro-I sequencing.

---

## Completion note (Pass 3 rule)

**`makro1` / `islmpc` is no longer a single-graph or no-graph placeholder:** the portal now shows a **student-visible two-panel** IS-LM-PC graph with **explicit linkage** and **supply-shock** control. If further closure is required, it should target **additional lecture variants** (e.g. alternative expectation regimes) as **new visible** layers, not audit wording alone.
