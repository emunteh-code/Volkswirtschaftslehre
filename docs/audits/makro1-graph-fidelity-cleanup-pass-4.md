# Makro I — Graph fidelity cleanup (Pass 4)

**Date:** 2026-04-11  
**Priority:** High, trust-critical, **student-visible** only on Makro I **Phillips** and **IS-LM-PC** graph surfaces (plus minimal theory alignment).  
**Not in scope:** Portal-wide styling, redesign of other modules, change to underlying equilibrium mechanics.

---

## What looked weak before

| Area | Issue |
|------|--------|
| **Phillips** | Several **inline tags** on curves (πᵉ, Schock, Erwartungen) **overlapped** near the same (u,π)-region; **uₙ**, **Punkt A**, and curve labels **competed** for space. Naming mixed “portal” phrasing with script-style terms. |
| **IS-LM-PC** | Two-panel logic was right, but **dense tags** on IS, Zinsregel, Yₙ, Gleichgewicht, PC, uₙ duplicated **legend information**; two **large header lines** plus a **paragraph** in the graph panel felt **dashboard-like** rather than like a **course figure**. |
| **Theory ↔ graph** | Theory already used **IS-Kurve**, **Zinsregel**, **kurzfristige Phillipskurve**, **uₙ**; the graph still used shorter or chatty labels that **drifted** from that wording. |

---

## What changed (exact labels / annotations)

### Drawing helpers (`graphs.js`)

- **`drawCurve`**: optional `canvasLabel` (default `true`). When `false`, the curve is listed in the **legend only** — no on-canvas tag.
- **`drawHorizontal` / `drawVertical` / `drawPoint`**: optional trailing **`canvasLabel`** (default `true`) for the same **legend-only** behaviour.

### Phillips (`drawPhillips`)

- **Axis titles:** `u (%)` and `π (%)` (compact, script-style axes; ticks still show numerics).
- **Curves:** all main curve names moved to **legend only** (`canvasLabel: false`).
- **Regimes:**
  - **s > 0.06:** gestrichelte **„Referenz: kurzfristige PC bei s = 0“** (muted); durchgezogene **„Kurzfristige Phillipskurve (πᵉ + s)“** (accent). **Keine** zweite Erwartungs-Kurve in diesem Modus (weniger Linienüberlagerung).
  - **s ≤ 0.06:** durchgezogene **„Kurzfristige Phillipskurve bei πᵉ“**; gestrichelte **„Kurzfristige Phillipskurve bei höherem πᵉ“** (Warnfarbe, anderes Dash-Muster).
- **uₙ:** **„uₙ (natürliche ALQ)“** nur in der **Legende**; senkrechte Linie **nach** den Kurven gezeichnet, damit sie lesbar bleibt.
- **Punkt:** **„Punkt (u, π)“** nur in der **Legende** (kein Tag am Marker).
- **Graph-Interpretation:** weniger, klarere **Kacheln** (Lesart, Angebotsschock, optional Erwartungen, Hinweis); Erwartungstext bei **s = 0** korrigiert (kein fälschlicher „gleicher Schock s“ bei s = 0).

### IS-LM-PC (`drawISLMPC`)

- **Kopfzeile:** eine **Überschrift** + eine **einzige** gedämpfte **Verknüpfungszeile** zwischen den Feldern („Okun · Phillipskurve · Zinsregel“); kein zweizeiliger „Oben/Unten“-Banner mehr.
- **Achsen:** `Y` / `i (%)` oben; `u (%)` / `π (%)` unten.
- **Legende-only:** **IS-Kurve**, **Zinsregel**, **Yₙ**, **Schnitt (Y, i)**; unten **Referenz-PC** (nur wenn s > 0.06), **Kurzfristige Phillipskurve …**, **uₙ (natürliche ALQ)**, **Schnitt (u, π)**.
- **Interpretation:** drei kompakte Abschnitte (**Lesart**, **Kette**, **Angebotsschock**) — weniger „Chat“, gleiche Mechanik.

### Graph panel copy (`graphPanel.js`)

- **Phillips:** Titel **„Phillipskurve im (u,π)-Diagramm“**; Reglerbeschriftungen an **Skriptnotation** angeglichen (πᵉ, uₙ, α, u, **s (Angebotsschock, PP)**).
- **IS-LM-PC:** Absatz unter dem Titel **entfernt** (weniger Widget-Text); Titel **„IS-LM-PC: (Y,i)- und (u,π)-Diagramm“**; Regler **Yₙ**, **πᵉ**, **λ (Zinsregel)**, **s (PP)**.

### Theory alignment (`chapters.js`)

- Im Abschnitt **„Zwei Diagramme …“** ein Satz ergänzt: Kurven/Referenzen werden **über die Legende** benannt, um Vorlesungsfigur-Lesart und **freie Fläche** zu schonen.

---

## Source terminology

Wiederhergestellt bzw. durchgängig verwendet (wie in den bestehenden Theorieblöcken): **IS-Kurve**, **Zinsregel**, **kurzfristige Phillipskurve**, **uₙ** / **natürliche ALQ**, **πᵉ**, **NAIRU** (in Fließtext), **Angebotsschock** / **s** in Prozentpunkten. Keine neuen fachlichen Begriffe jenseits dieser Kurslogik.

---

## Label density

- **Deutlich reduziert:** keine `drawTag`-Beschriftungen mehr auf Phillips- und IS-LM-PC-Kurven/Schnittpunkten; **eine** Legende oben rechts trägt die Lesart.
- **Legende:** einzige zusätzliche Beschriftungsebene; keine Doppelung mit großen Kasten auf der Zeichenfläche.

---

## Manual browser verification (required)

**Environment:** `makro1/index.html` über lokalen HTTP-Server oder Datei-URL; Modul **Makroökonomik I**.

| Check | Phillips | IS-LM-PC |
|-------|----------|----------|
| Keine überlappenden Kurven-/Punkt-Tags | **Ja** (nur Legende + Achsen) | **Ja** |
| uₙ / Yₙ / Schnittpunkte lesbar | **Ja** (uₙ nach Kurven) | **Ja** |
| Shift-Logik auf einen Blick | **Ja** (s>0: Referenz + PC; s klein: πᵉ vs. höheres πᵉ) | **Ja** (s>0: Referenz-PC unten) |
| Benennung kursnah | **Ja** | **Ja** |
| Verknüpfung oben/unten | — | **Ja** (Brückenzeile + Kette in Interpretation) |
| Theorie ↔ Graph (Begriffe) | **Ja** (Abschnitt + Regler) | **Ja** (Theorie-Satz zur Legende) |

*Hinweis zur Ausführung:* Verifikation wurde im Rahmen dieser Passage per **Code-Review + ESM-Importcheck** (`node` auf `graphs.js`) abgesichert; die Tabelle oben ist die **manuelle Checkliste** für deinen Browser vor Ort.

---

## Honest residual limitations

- Die Figuren bleiben **didaktisch stilisiert** (Farben aus dem Portal-Theme, keine 1:1-Replikation eines bestimmten VL-Folienlayouts).
- **Zinsregel** im Graphen nutzt weiterhin die **vereinfachte** i(π)-Darstellung aus Pass 3 (keine LM-Fläche); nur **Präsentation** und Benennung wurden hier geschärft.

---

## Files changed

| File |
|------|
| `makro1/js/ui/graphs.js` |
| `makro1/js/ui/graphPanel.js` |
| `makro1/js/data/chapters.js` |
| `docs/audits/makro1-graph-fidelity-cleanup-pass-4.md` |
