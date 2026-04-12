# Statistik Inline Warning Removal And Right Rail Uniformity Pass 18

## Problem

Statistik theory HTML used many `.warn-box` blocks **outside** dedicated `Fehleranalyse` / rail-pattern sections (e.g. under “Lagemaße gezielt auswählen”, “Klausurzugriff”, R-Lab intro). The shared [`getWarningSystemData`](assets/js/portal-core/ui/warningSystem.js) logic only **auto-moves** warnings to the right rail when:

- `data-warning-placement="rail"` is set, or  
- the warning sits in a `.section-block` whose **`<h3>`** matches `RAIL_WARNING_SECTION_PATTERN` (e.g. “Fehleranalyse”, “Häufige Fehler”, …).

All other `.warn-box` nodes were **normalized to inline** `warning-card--inline` in the main column — visually duplicating the role of **Häufige Fehler** in the right panel and diverging from other modules’ placement.

## Source (not a shared Statistik bug)

- **Shared pipeline** is correct: `shouldMoveWarningToRail()` already supports `data-warning-placement="rail"`.
- **Gap:** Statistik chapter strings never set that attribute on stray boxes.

## Fix (module-local content)

**File:** [statistik/js/data/chapters.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/statistik/js/data/chapters.js)

- On **every** `<div class="warn-box">` (17 occurrences), set **`data-warning-placement="rail"`**.
- Pedagogical text is **unchanged**; only placement metadata is added.
- At render time, `getWarningSystemData` **removes** those nodes from `theoryHtml` and appends them to **`railWarnings`**, which the existing right panel renders under **Häufige Fehler** (via `renderRightRailWarnings`).

## Blocks affected (all moved to rail)

| Approx. line | Strong title / topic |
|----------------|----------------------|
| 212 | R-Lab: Tool-first ist ein Fehler |
| 264 | Deskriptiv: Median vs. Mittelwert |
| 279 | Deskriptiv: Variationskoeffizient |
| 385 | Bivariat: Korrelation vs. Kausalität |
| 478 | Hypothesentests: Alpha-Beta-Tradeoff |
| 590 | Wahrscheinlichkeit: Unabhängigkeit vs. Disjunktheit |
| 664 | Verteilungen: Varianz vs. Standardabweichung |
| 737 | Schätzen/KI: Fehlinterpretation KI |
| 826 | Regression SI: R² und Kausalität |
| 962 | z-Test: z vs. t |
| 1042 | Zwei-Stichproben: Unverbunden vs. verbunden |
| 1133 | ANOVA: ANOVA-Voraussetzungen |
| 1222 | Nichtparametrisch: Glättungsfalle |
| 1291 | Schätzverfahren: Methodenwahl ist Prüfungsstoff |
| 1383 | Schätz-EI: Breites Intervall |
| 1482 | Regression SI: Kausalitätsfalle |
| 1580 | Regression DP: Diagnostikproblem … |

Sections that contained **only** `Fehleranalyse` + one warn-box may become **empty** after removal; `getWarningSystemData` already **prunes** empty `.section-block` nodes — no orphan shells.

## Shared vs module-local

- **Module-local only:** `statistik/js/data/chapters.js`.
- **No** changes to `warningSystem.js`, `renderer.js`, or other modules.

## Browser verification notes

Not run in-browser here. Check any Statistik concept with prior inline warn-boxes (e.g. **Deskriptive Statistik**, **R-Statistik Praxis**):

1. Main **Theorie** column: no inline `warning-card--inline` for those tips; surrounding `<p>` / math unchanged.
2. Right rail **Häufige Fehler**: cards still present, now including the moved items.
3. No large blank gaps where a section was removed entirely.

## Outliers / honesty

- If a future Statistik author adds a `.warn-box` **without** `data-warning-placement="rail"`, it will again appear inline until tagged (or placed under a rail-pattern `h3`).
- **Konzept-kritische** inline warnings were not kept in the main column on purpose: all current Statistik warn-boxes were classified as mistake-prevention / rail-canonical for this pass.
