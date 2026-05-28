# 2026-05-28 — Workstream 3 Slice 10: Statistik page-anchor pass 3

## Scope
Complete reviewed page-level anchors for the nine remaining Statistik concepts with curated primary refs (14/14).

## Audit-first (`pdftotext`)
- `VL_09_-_Induktive_Statistik_1.pdf` — Schätzereigenschaften (p85), Histogramm/Kerndichte (p58, p71), IS1.5 outline (p2)
- `VL_10_-_Induktive_Statistik_2.pdf` — Konfidenzintervalle Kap. 7 (p3, p10)
- `VL_10_-_Induktive_Statistik_3.0-3.1.pdf` — Hypothesen-Grundlagen (p8, p12)
- `VL_11_-_Induktive_Statistik_3.pdf-3.5.pdf` — Tests Kap. 8 (p18, p39, p47, p65), Varianzanalyse (p2–3, p12)
- `VL_11_-_Zwei-SP_t-Test.pdf` — Zweistichproben t-Test (p1, p8–9)
- `VL_12_-_Stat_Modellierung_1.0-1.4.pdf` — Regression/Residuen (readable titles only; many slides image-heavy)
- `VL_14_-_Stat_Modellierung_2.pdf` — Ausblick (p1)
- `R-Vorkurs.pdf` — R Grundlagen, Vektoren, Einlesen von Daten

## Implementation
- `statistik/js/data/sourceAnchors.js` — +27 anchors (9 concepts × 3).
- Cumulative: **42 anchors** across **14/14** concepts with file-level refs.
- `tools/clickthrough/trust-regression-pass-1.mjs` — page-anchors smoke for six new concepts.

## Integrity notes
- `nichtparametrisch` anchors VL 09 **density estimation** only (histogram / Kerndichte), not nichtparametrische Rangtests — aligned with portal chapter retitle and `statistik-nichtparametrisch-provenance-decision-pass-1.md`.
- Regression VL 12/13: only slides with extractable, faithful section labels; no invented SM numbering from garbled `pdftotext`.

## Remaining gap
- Per-slide inventory for image-heavy VL 12–14 decks; official task-family mapping; formula cards; `anchorComplete` still false.
