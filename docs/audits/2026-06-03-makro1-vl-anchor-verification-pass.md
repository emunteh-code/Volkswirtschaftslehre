# Makro1 VL Source-Anchor Verification & Correction — 2026-06-03

## Slice chosen (and why, vs alternatives)

The mandate was to pick the next highest-leverage **auditable, source-faithful**
slice. The suggested first candidate — *mikro1 VL anchor verification* — was
executed as the audit step and came back **clean**: all 98 mikro1 VL anchors
already point to the slide whose title matches the recorded section label (see
"mikro1 audit" below). Per the standing rule ("do not redo an anchor pass unless
new drift is found"), mikro1 needed no changes.

The audit then surfaced a genuinely broken module: **makro1 VL anchors**. Unlike
the hand-curated mikro1/mikro2 anchors, makro1's lecture anchors were produced by
the syllabus-heading heuristic (`tools/exam-os/populate-anchors-from-syllabus.mjs`),
which:

1. picked the two highest text-density pages of each lecture PDF, regardless of
   whether they define the concept; and
2. used the longest heading candidate on that page as the `section` label —
   producing sentence/formula fragments, not slide titles.

The result violated source fidelity (AGENTS rule 6, notation drift) in three
concrete ways:

- **Garbage labels**: e.g. `makro_rahmen` p14 section `"1 + rt = e"` (a formula
  fragment), p28 `"Makroökonomik offener Volkswirtschaften) behandeln"` (a
  sentence fragment); `arbeitsmarkt` p35 `"(das Produktionspotential)."`;
  `phillips`/`erwartungen` p4 `", erwartete Inflation"`.
- **Duplicate concept→page collisions**: distinct concepts pointed to the *same*
  two pages — `guetermarkt` ≡ `multiplikator` (VL_3 p36/p15), `geldnachfrage` ≡
  `banken` (VL_4 p7/p11), `islm` ≡ `politikmix` (VL_5 p13/p17),
  `phillips` ≡ `islmpc` ≡ `erwartungen` (VL_8 p28/p4).
- **Page drift**: several recorded pages were not even on the labelled topic
  (e.g. `vgr` p36 labelled "Das Bruttoinlandsprodukt" is actually the
  Arbeitslosenquote slide).

This is the highest-ROI auditable fix available: makro1 is a major, high-traffic
module; the anchors are the provenance backbone the Quellen panel renders; and the
fix is fully source-grounded with no invented academic substance. Alternatives
(statistik official-task review, fleet `examPedagogy` expansion) were lower
leverage or blocked on the missing official task corpus.

## mikro1 audit (no change required)

All 98 mikro1 VL anchors were re-checked by extracting every recorded page from
the official PDFs (Poppler `pdftotext -layout`, per page) and scoring the
section-label keywords against (a) the full page text and (b) the slide title.

- 98/98 recorded pages contain **all** distinctive keywords of their section label.
- 98/98 recorded-page **titles** match the section label (titleScore ≥ 0.5).
- 0 drifted anchors, 0 title mismatches.

mikro1 VL anchors are therefore confirmed source-faithful; no edit was made (the
benchmark stays the benchmark).

## Sources reviewed (native text + visual page render)

All under `source-materials/Makroökonomik I/Vorlesungen/`. Per-page
`pdftotext -layout` extraction for title discovery, plus **visual `pdftoppm`
render** of every chosen slide to confirm the frame title:

- `VL_1.pdf` (32 S.) — Denkrahmen: rendered p6, p16
- `VL_2.pdf` (45 S.) — VGR/Inflation/Arbeitslosigkeit: rendered p4, p36
- `VL_3.pdf` (39 S.) — Gütermarkt & Multiplikator: rendered p7, p15, p18, p37
- `VL_4.pdf` (55 S.) — Geldnachfrage & Banken: rendered p8, p14, p31, p47
- `VL_5.pdf` (34 S.) — IS-LM & Politikmix: rendered p9, p16, p17, p21
- `VL_7.pdf` (36 S.) — Arbeitsmarkt (WS/PS): rendered p21, p24
- `VL_8.pdf` (31 S.) — Phillipskurve/Erwartungen: rendered p2, p5, p10, p12, p16, p18
- `Kap6.pdf` (40 S.) — Realzins/Risikoprämie/Krisenkanal: rendered p3, p6, p21, p22

`locator.page` is the **PDF page index** (matches the source page-index used
across the exam-OS tooling and the Quellen panel). The slide's printed footer
number is one lower, due to Beamer title-overlay numbering (confirmed in the
renders).

## Corrected anchors (28 VL anchors; ids kept stable)

Anchor `id` strings are referenced by exact string from `taskFamilies.js`
(48 sites) and `formulaCards.js` (38 sites), so ids were left unchanged; the
`pNN.<slug>` inside an id is now a historical tag. Only `locator.page`,
`locator.section`, `quoteFingerprint` (sha256 of the new label), `confidence`
and review metadata changed.

| Concept | PDF | old page → new page | verified slide title (new section) |
|---|---|---|---|
| makro_rahmen | VL_1 | 28→16 | Drei zentrale Variablen |
| makro_rahmen | VL_1 | 14→6 | Womit beschäftigt sich die Makroökonomik? (Drei Teilbereiche) |
| vgr | VL_2 | 36→4 | Die Volkswirtschaftliche Gesamtrechnung (VGR) |
| vgr | VL_2 | 15→36 | Die Erwerbs- bzw. Arbeitslosenquote (u) |
| guetermarkt | VL_3 | 36→7 | Die Güternachfrage |
| guetermarkt | VL_3 | 15→15 | Gleichgewicht auf dem Gütermarkt |
| multiplikator | VL_3 | 36→18 | Wie entsteht der Multiplikatoreffekt? |
| multiplikator | VL_3 | 15→37 | Sparparadox |
| geldnachfrage | VL_4 | 7→8 | Die Geldnachfrage |
| geldnachfrage | VL_4 | 11→14 | Die Bestimmung von Geldangebot und Zinssatz |
| banken | VL_4 | 7→31 | Die Bestimmung von Geldangebot und Zinssatz II: Die Rolle der Geschäftsbanken |
| banken | VL_4 | 11→47 | Geldmenge und Geldbasis |
| islm | VL_5 | 13→9 | Herleitung der IS-Kurve |
| islm | VL_5 | 17→16 | Gleichzeitiges Gleichgewicht auf Güter- und Geldmarkt |
| politikmix | VL_5 | 13→17 | Expansive vs. kontraktive Fiskalpolitik |
| politikmix | VL_5 | 17→21 | Kombination einer expansiven Geld- und Fiskalpolitik |
| realzins_fisher_erwartungen | Kap6 | 23→3 | Nominalzinsen versus Realzinsen |
| realzins_fisher_erwartungen | Kap6 | 27→6 | Inflation und Realzins |
| realzins_risikopraemie_krisenkanal | Kap6 | 23→21 | Die Erweiterung des IS-LM-Modells: Leitzins vs. Kreditzins |
| realzins_risikopraemie_krisenkanal | Kap6 | 27→22 | Die Auswirkungen eines Schocks im Finanzsektor |
| arbeitsmarkt | VL_7 | 35→21 | Lohnsetzungsgleichung |
| arbeitsmarkt | VL_7 | 23→24 | Preissetzungsgleichung |
| phillips | VL_8 | 28→2 | Die Entstehung der Phillipskurve |
| phillips | VL_8 | 4→12 | Modifizierte Phillipskurve |
| islmpc | VL_8 | 28→5 | Phillipskurven bei unterschiedlichen Inflationserwartungen |
| islmpc | VL_8 | 4→16 | Modifizierte Phillipskurve und NAIRU |
| erwartungen | VL_8 | 28→10 | Die Bildung der Inflationserwartungen |
| erwartungen | VL_8 | 4→18 | Erwartungsbildung unter hoher Inflation |

Every previously-colliding concept pair now resolves to **distinct**,
concept-defining slides. The 8 official `Klausur_2022_Nachtermin` task-source
anchors were left untouched (already reviewed in makro1 task passes 1–2).

### Notation / source faithfulness

Section labels are now verbatim slide frame-titles read off the rendered slides;
no notation was invented. Confidence raised to 0.92 for slide-verified VL anchors
(0.88 for the two `islmpc` PC-foundation anchors — see gap below).

## Validation

- `npm run validate` → `CI validate OK (exam-OS layers + generated audits).`
- `npm run trust:pass1` → see commit message / run log (full Playwright fleet).
- `sourceAnchors.js` re-imports cleanly: 36 anchors (28 VL + 8 Klausur), counts
  unchanged; only page/section/fingerprint/metadata corrected.

## Top remaining risks / gaps

1. **Downstream task-family titles still carry the old fragment labels.**
   `makro1/js/data/taskFamilies.js` (and the `method`/`topic` text) were authored
   from the *old* heuristic labels, so families are still titled e.g.
   "Makroökonomik I: Sollten wir mehr Sparen?" (guetermarkt) and "…Unterschiede
   zwischen den einzelnen Ländern" (phillips). These static strings are now
   inconsistent with the corrected anchors and are the **#1 recommended next
   slice**: re-derive VL family titles/topics from the verified slide titles.
   (Left out of this slice to keep the diff focused on the provenance backbone
   and avoid a large taskFamilies rewrite.)
2. **`islmpc` has no dedicated IS-LM-PC slide deck in the corpus.** VL_8 covers
   the Phillips-curve (PC) building block but not the integrated IS-LM-PC model
   (a Kapitel-9-style deck is absent). `islmpc` is therefore anchored to its PC
   foundation in VL_8 (confidence 0.88); the official Klausur A4 anchor remains
   the concept's exam-grade source. A source gap, not invented content.
3. **Other auto-populated modules likely share the same defect.** makro2,
   oekonometrie, finanzwirtschaft, jahresabschluss, recht and IWB anchors were
   generated by the same syllabus-heading heuristic and have not been
   slide-verified; they are strong candidates for the next verification passes.
