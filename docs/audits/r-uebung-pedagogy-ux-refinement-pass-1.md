# R-Übung Pedagogy & UX Refinement — Pass 1

## Mission

Rebuild the R-Übung surfaces so they are concept-first, cleaner, more premium, and better integrated into the portal's academic learning system. Borrow the interaction logic of DataCamp (clear instruction → editable code → visible output → bounded task), reject its visual clutter and tool-first pedagogy.

## R pages inspected

| Module | R exercises | Representative concepts |
|--------|------------|------------------------|
| **Mathematik** | 8 blocks (8 concepts × 1) | `funktionen_gleichungen`, `lineare_algebra_grundlagen`, `univariate_optimierung`, `integralrechnung` |
| **Statistik** | 8 blocks (7 concepts; deskriptiv has 2) | `deskriptiv`, `testen` (interpret mode), `regression_schaetzung_inferenz` |
| **Ökonometrie** | 28 blocks (28 concepts × 1) | `matrix_notation`, `ols_intro`, `sample_moments` |
| **Mikro1** | 0 | N/A — no R integration |

## Strengths borrowed from the reference (DataCamp pattern)

1. **Clear instruction area** — orient card with concept title, purpose, learning goal
2. **Editable code area** — syntax-highlighted textarea with overlay technique
3. **Visible output area** — dedicated output panel alongside the editor
4. **Tight edit → run → observe loop** — bounded by core-line targeting
5. **Bounded tasks** — mini-tasks with specific parameter changes, not open-ended coding

## Weaknesses intentionally rejected from the reference

1. **Tool-first hierarchy** — DataCamp makes the console/IDE the hero. The R-Übung now leads with concept framing, not code.
2. **Console clutter** — Removed redundant runtime notes, flow-step indicators, and toolbar kickers that added lab-platform chrome.
3. **LMS/lab aesthetic** — Surfaces now use portal card tokens (`var(--card)`, `var(--shadow-sm)`) instead of utilitarian panel styling.
4. **Too many panes** — Reduced visual fragmentation by flattening nested sub-cards (lesson-intro, translation-block, task-flow) to lighter sections within the orient card.
5. **Bureaucratic density** — Shortened all German labels: "Musterlösung" → "Lösung", "Codebereich" kicker removed, "Bearbeitungshinweis" label removed, "Interaktiv im Browser" → "Interaktiv", etc.
6. **Weak concept extraction** — Tightened "Lernziel" → "Idee", "Mathe ↔ R-Übersetzung (explizit)" → "Mathe ↔ R", "Kernzeile (hier entscheidet sich die Aussage)" → "Kernzeile".
7. **Weak output guidance** — Removed generic checklist questions ("Welche konkrete Zeile trägt deine Entscheidung?") in favor of concept-specific evidence hints already present in the data.

## Hierarchy / UX refinements made

### Phase 2 — Learning hierarchy redesign

The page now follows a strict concept-first hierarchy:

**A. Concept / learning goal** (orient card)
- Title communicates the economic/statistical idea
- Purpose explains why R operationalizes it
- "Idee" panel states what the student should understand
- Subtle top accent bar signals this is the teaching brief

**B. One clear edit target** (core-line card)
- Highlights the exact line/parameter that matters
- Shows what changes and what stays invariant
- Wording: "Nur diese Expression ändern"

**C. Run and observe** (editor + output workspace)
- Editor: "Nur die Kernzeile ändern" (toolbar title)
- Output: "Was zählt im Output" (toolbar title)
- "Darauf achten" checklist before the output display
- Evidence hint after the output

**D. Interpretation** (output interpretation section)
- "Was der Output belegt" — directly tied to the concept claim
- Evidence hint as a highlighted proof block

**E. Retention / exam transfer** (bottom row)
- "Aufgabe" (not "Mini-Task") — concept-led framing
- "Prüfungsregel" — transfer rule with visual emphasis (bordered card, accent background)
- Solution details behind toggle

### Phase 3 — Layout and UX refinement

**CSS changes (`assets/css/r-practice.css`):**

1. **Orient card**: `var(--card)` background (flat, not gradient), `var(--shadow-sm)` elevation, subtle `border-top: 2px solid accent` for teaching-brief identity. Padding tightened from 22px to 20px.
2. **Sub-panels**: Flattened visual weight — borders reduced from 80-84% opacity to 66%, backgrounds set to `transparent` (inherit card surface), padding tightened. These now read as sections within a card, not cards-within-cards.
3. **Core-line**: Left border thinned from 4px to 3px, accent changed from `--accent2` to `--accent` for consistency, background made nearly transparent.
4. **Flow-steps indicator**: `display: none` — the numbered pill row (1 Aufgabe lesen → 2 Code ändern → 3 Ausführen → 4 Output deuten) was classic DataCamp lab chrome. The orient card already communicates the workflow.
5. **Runtime note in tab**: De-emphasized to 10.5px, transparent background. The runtime pill in the orient card already shows status.
6. **Runtime pill**: Reduced from 9.5px/26px to 9px/22px. Less visual weight.
7. **Workspace**: Proportions balanced from 1.3fr/0.9fr to 1.15fr/1fr. Gap tightened from 18px to 14px.
8. **Editor card**: Uses `var(--card)` surface, subtler accent-tinted border.
9. **Output card**: Slightly differentiated surface. Output focus panel uses 3px accent left border.
10. **Transfer rule**: Elevated to a bordered card with accent background — now reads as the key retention takeaway.
11. **Pitfalls card**: Aligned with `--sys-red` warning token system.
12. **All kickers/labels**: Color changed from `--accent2` mixes to `--muted`/`--text` mixes — less blue noise, quieter hierarchy.
13. **Overall gap rhythm**: Tightened throughout (gap: 16→14, 18→14, 24→20) for denser, more professional composition.
14. **Inline toggle**: Added hover state with accent border transition.

### Phase 4 — Wording refinement

**JS changes (`assets/js/portal-core/features/rPractice.js`):**

| Before | After | Why |
|--------|-------|-----|
| "Musterlösung" / "Musterlösung anzeigen" | "Lösung" / "Lösung anzeigen" | Shorter, less formal |
| "Code ausführen" | "Ausführen" | Obvious context |
| "Live-Run nicht nötig" | "Nicht nötig" | Shorter |
| "Interaktiv im Browser" | "Interaktiv" | Obvious context |
| "Codebereich" (kicker) | Removed | The card IS the code area |
| "Output" (kicker) | Removed | The card IS the output area |
| "Bearbeitungshinweis" (label) | Removed | Content speaks for itself |
| "Bearbeite heute nur die Kernzeile — nicht den ganzen Block" | "Nur die Kernzeile ändern" | Sharper |
| "Output lesen und belegen" | "Was zählt im Output" | Question-led |
| "Worauf du im Output achtest" | "Darauf achten" | Shorter |
| "Output als Beweis" | "Was der Output belegt" | Active voice |
| "Mini-Task" | "Aufgabe" | German, concept-led |
| "Merksatz für Klausuren" | "Prüfungsregel" | Sharper |
| "Häufige Fehler" | "Typische Fehler" | Slightly more academic |
| "Lernziel" | "Idee" | Concept-first |
| "Mathe ↔ R-Übersetzung (explizit)" | "Mathe ↔ R" | Shorter |
| "Kernzeile (hier entscheidet sich die Aussage)" | "Kernzeile" | Less redundant |
| "Arbeitsauftrag" | "Auftrag" | Shorter |
| "Dein erster Schritt:" | "Erster Schritt:" | Less chatty |
| "So argumentierst du sauber:" | "Argumentationskette:" | Tighter |
| "So ändert sich dein Zugriff" | "Was sich ändert" | Simpler |
| Statistik Ökonometrie-hint prefix | Removed | Not concept-first; injected generic LMS cross-reference |

### Phase 5 — Evidence-centered output design

1. **"Darauf achten" panel** — Placed ABOVE the output `<pre>` so the student reads guidance before seeing results.
2. **"Was der Output belegt" section** — Placed BELOW the output, directly interpreting what was just shown.
3. **Evidence hint** — Kept as `.r-output-proof` block with subtle border treatment.
4. **Removed generic checklist** — The two generic questions ("Bestätigt/Falsifiziert: Welche konkrete Zeile…?" and "Grenze: Was bleibt trotz Output offen?") were deleted. They added length without specificity. The concept-specific `outputEvidenceHint` and `interpretation` already provide targeted guidance.
5. **Runtime note removed from tab** — No longer fragments the teaching surface between orient card and workspace.

## Exact files changed

| File | Type | Change |
|------|------|--------|
| `assets/css/r-practice.css` | CSS | Visual refinement: premium surfaces, flattened sub-cards, hidden flow-steps, tightened spacing, accent discipline, transfer-rule elevation |
| `assets/js/portal-core/features/rPractice.js` | JS | Template refinement: removed flow-steps from orient card, removed runtime note from tab, simplified toolbars, sharpened all German labels, removed generic output checklist, removed statistik Ökonometrie-hint injection |

## Browser verification

1. **Mathematik**: `http://localhost:8899/mathematik/index.html` — page loads, r-practice.css imported via `@import`
2. **Statistik**: `http://localhost:8899/statistik/index.html` — page loads, r-practice.css imported
3. **Ökonometrie**: `http://localhost:8899/oekonometrie/index.html` — page loads, r-practice.css imported
4. **rPractice.js**: Serves correctly (12 render functions, 4 exports, 1525 lines, no syntax errors)
5. **r-practice.css**: Serves correctly (1058 lines, all CSS valid)
6. **No linter errors** on either file

## Judgment

### Does the student see the idea before the tooling?
**Yes.** The orient card leads with title + purpose + "Idee" panel. The code editor is secondary. The concept framing dominates the visual hierarchy.

### Is the edit target obvious?
**Yes.** The "Kernzeile" card highlights the exact line with a code block and line-number pill. The editor toolbar says "Nur die Kernzeile ändern." The help section says what to change and what not to change.

### Is the output interpretation clearer?
**Yes.** "Darauf achten" checklist appears before the output. "Was der Output belegt" appears after. Generic filler questions removed. Evidence is concept-specific.

### Is the page less cluttered than a coding-course platform?
**Yes.** Flow-steps indicator hidden. Runtime note removed from tab. Toolbar kickers removed. Sub-cards flattened. Gap rhythm tightened. Labels shortened. The page reads as a teaching surface, not a lab.

### Does the R surface feel like part of the portal rather than an external lab?
**Yes.** Card surfaces use `var(--card)` and `var(--shadow-sm)` from the premium token system. Borders use portal accent tokens. Typography and spacing follow the same rhythm as theory, formula, and graph surfaces.

### Remaining limitations
- Content-level wording (individual exercise `purpose`, `interpretation`, `miniTask` text) varies by module. Some Ökonometrie exercises have sparser metadata than Mathematik's richer blocks. This is a data authoring gap, not a system gap.
- The `renderFlowSteps` function is retained in JS but not called. It can be removed in a future cleanup.
- The `runtimeNote` field is still generated in `buildConfig` but no longer rendered in the tab. The embedded block template (`renderRPracticeMarkup`) still references it in the meta-row. This is intentional — the embedded format may benefit from runtime context in the theory tab.
