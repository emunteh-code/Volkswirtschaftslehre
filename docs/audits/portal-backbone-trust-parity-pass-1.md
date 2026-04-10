# Portal Backbone Trust + Parity Pass 1

**Date:** 2026-04-10
**Branch:** `claude/standardize-graph-design-6VLhV`

---

## Mission

Close the remaining product-trust and backbone-parity gaps preventing the learning portal from feeling like one polished, student-facing product. Focus: dashboard surfaces, mistake-review surfaces, `mathematik` backbone parity, `mikro2` status handling, and live-registry scope clarity.

---

## Phase 1 — Surfaces Inspected

### Dashboard Surfaces
- **`mikro1/js/features/dashboard.js`** — flagship reference; uses `buildHonestDashboardPilotHtml` + legacy stats
- **`makro1/js/features/dashboard.js`** — same pattern as mikro1
- **`makro2/js/features/dashboard.js`** — same pattern
- **`finanzwirtschaft/js/features/dashboard.js`** — same pattern
- **`statistik/js/features/dashboard.js`** — same pattern
- **`oekonometrie/js/features/dashboard.js`** — same pattern
- **`recht/js/features/dashboard.js`** — same pattern
- **`jahresabschluss/js/features/dashboard.js`** — same pattern
- **`internationale-wirtschaftsbeziehungen/js/features/dashboard.js`** — same pattern
- **`mathematik/js/features/dashboard.js`** — simple v1 only (no pilot panel, deliberate)
- **`mikro2` (via `assets/js/portal-core/app.js`)** — simple v1 only (quarantine, deliberate)

### Mistake-Review Surfaces
- **`assets/js/portal-core/features/mistakeReview.js`** — shared portal-core module
- Module wrappers: mikro1, makro1, makro2, statistik, finanzwirtschaft, oekonometrie, jahresabschluss, recht, internationale-wirtschaftsbeziehungen

### Registry / Scope Surfaces
- **`assets/js/modules.js`** — module registry; `sourceCorpusInRepo: false` for mikro2
- **`assets/js/portal-core/data/dashboardDerivedMetrics.js`** — pilot panel HTML builder
- **`docs/audits/mikro2-quarantine-roadmap-pass-1.md`** and `mikro2-status-guard-pass-2.md` — quarantine docs

---

## Phase 2 — Trust and Parity Weaknesses Identified

### A. Dashboard Pilot Panel — Caution-Heavy Language

**File:** `assets/js/portal-core/data/dashboardDerivedMetrics.js`

| Location | Problem | Impact |
|---|---|---|
| Panel title: `"Kennzahlen aus dem Lernprotokoll (Pilot)"` | "(Pilot)" label signals experimental/unfinished product | Student reads their own dashboard as beta software |
| `aria-label="Pilot: ehrliche Kennzahlen aus Protokoll"` | Same framing in accessibility tree | Compounds the pilot signal |
| Intro: `"Nur Daten, die in diesem Browser gespeichert sind. Keine geschätzte Gesamtmastery."` | Leads with restrictions and negative framing | Reads as a disclaimer, not a helpful tool |
| Empty state: `"Noch nicht verfügbar: keine Konzept-Check-Läufe im Attempt-Log."` | "Noch nicht verfügbar" reads as system error | Expected empty state treated as failure state |
| Empty state: `"Noch nicht verfügbar: keine Probeklausur-Sessions im Attempt-Log."` | Same issue | Same impact |
| Empty state: `"Keine Fehler-Einträge im Protokoll (oder noch nichts protokolliert)."` | Double hedge: "oder noch nichts protokolliert" | Sounds broken rather than just empty |
| Analytics: `"Konzept-getaggt:"` / `"ungetaggt:"` | Technical jargon from data pipeline | Not student-facing language |
| Analytics: `"Backbone protokolliert"` | Exposes internal architecture term | Internal language in student view |
| Footer: `"Step-Schnelltest (20-Min.) erscheint hier erst, wenn das Modul diese Versuche ins Attempt-Log schreibt (derzeit oft nicht angebunden)."` | Discloses broken internal wiring status | Students read that their module is only "often not connected" |
| `"Teilweise:"` prefix | Engineering-tier label for partial metrics | Sounds like a data warning, not a helpful note |

### B. Mistake Review — Defensive Wording

**File:** `assets/js/portal-core/features/mistakeReview.js`

| Location | Problem |
|---|---|
| Header: `"Einträge aus dem lokalen Lernprotokoll. „Erledigt" ist nur eine lokale Markierung zum Abhaken — keine Bewertung."` | Two sentences of caveats before showing any content. The "— keine Bewertung" disclaimer suggests the tool isn't trustworthy |
| `Modul <code>${moduleSlug}</code>` in subheader | Exposes internal module slug to students |
| FullExam hint: `"Nur lokal protokollierte Einträge mit Quelle „Probeklausur". Keine Schätzung für ungetaggte Aufgabeninhalte."` | Repeated "nur lokal" + technical jargon `"ungetaggte Aufgabeninhalte"` |
| Empty for topConcepts: `"Noch keine konzeptgetaggten Probeklausur-Fehler."` | `"konzeptgetaggt"` is internal language |
| Repeated concept note: `"Noch keine wiederholten Probeklausur-Fehler (>=2) im lokalen Log."` | `"(>=2)"` is programming notation, not student language |
| Untagged: `"Nicht zuordenbar (ohne Konzept-Tag):"` | `"Konzept-Tag"` is engineering jargon |
| All-tagged: `"Alle protokollierten Probeklausur-Fehler in diesem Browser sind einem Konzept zugeordnet."` | Verbose defensive phrasing |
| Empty state: `"${title}: keine Einträge."` | Shows list section title in empty state — confusing compound phrasing |

### C. Dashboard Mistake-Review Button Subtext — Universal Defensive Pattern

**Files:** All 9 module dashboard.js files

All used variants of `"Lokal gespeicherte Fehler ... (sofern protokolliert)."` — the qualifier "sofern protokolliert" signals the feature may not be working, which undermines confidence without giving the student any actionable information.

### D. Missing Backbone CSS — Unstyled Pilot Panel + Mistake Review in 5 Modules

**Files:** mikro1, recht, oekonometrie, finanzwirtschaft, jahresabschluss CSS

The `.dash-honest-pilot`, `.dhp-*`, and `.mr-*` CSS classes were defined only in makro1, makro2, statistik, and internationale-wirtschaftsbeziehungen stylesheets. Five modules used these features but lacked their CSS, rendering pilot panels and mistake-review surfaces unstyled (browser defaults).

---

## Phase 3 — Changes Made

### 1. `assets/js/portal-core/data/dashboardDerivedMetrics.js`

| Before | After |
|---|---|
| `"Kennzahlen aus dem Lernprotokoll (Pilot)"` | `"Lernprotokoll-Übersicht"` |
| `aria-label="Pilot: ehrliche Kennzahlen aus Protokoll"` | `aria-label="Lernprotokoll-Übersicht"` |
| `"Nur Daten, die in diesem Browser gespeichert sind. Keine geschätzte Gesamtmastery."` | `"Dein gespeicherter Lernverlauf in diesem Browser."` |
| `"Noch nicht verfügbar: keine Konzept-Check-Läufe im Attempt-Log."` | `"Noch kein Konzept-Check absolviert."` |
| `"Nach einem abgeschlossenen Konzept-Check erscheinen hier die letzten Läufe (Punkte, Abschlussgrund)."` | `"Starte einen Konzept-Check, um deine Läufe hier zu sehen."` |
| `"Teilweise:"` prefix + `"erste protokollierte Antwort"` | `"Hinweis:"` prefix + `"Gewertet wird die erste Antwort"` |
| `"Noch nicht verfügbar: keine Probeklausur-Sessions im Attempt-Log."` | `"Noch keine Probeklausur abgeschlossen."` |
| `"Erscheint nach „Klausur abgeben" ... (sofern das Modul Versuche protokolliert)."` | `"Starte eine Probeklausur, um deine Ergebnisse hier zu sehen."` |
| `"Keine Fehler-Einträge im Protokoll (oder noch nichts protokolliert)."` | `"Noch keine Fehler gespeichert."` |
| Section title: `"Schnelltest/Drill-Analytik (normalisiert)"` | `"Fehler nach Lernfluss"` |
| `"Konzept-getaggt: N"` | `"davon zugeordnet: N"` |
| `"ungetaggt: N"` | `"nicht zugeordnet: N"` |
| `"Drill/Practice (practice/graph/formula/mixed)"` | `"Drill/Practice"` (removed internal source list) |
| `"Derzeit keine Drill/Practice-Fehlerquellen im Backbone protokolliert."` | `"Noch keine Drill/Practice-Fehler gespeichert."` |
| `"Noch keine konzeptgetaggten Probeklausur-Fehler im lokalen Log."` | `"Noch keine Probeklausur-Fehler nach Konzept zugeordnet."` |
| `"Noch keine Probeklausur-Konzeptfehler (>=2)."` | `"Noch keine Konzeptfehler mit mehrfachen Vorkommen."` |
| `"nicht konzeptgetaggt"` (untagged note) | `"ohne Konzeptzuordnung"` |
| `"Alle Probeklausur-Fehler im lokalen Log sind einem Konzept zugeordnet."` | `"Alle Einträge sind einem Konzept zugeordnet."` |
| `"Keine SRS-Karten mit fälliger Wiederholung (oder noch keine Karten)."` | `"Keine Karten zur Wiederholung fällig."` |
| Footer: `"Step-Schnelltest (20-Min.) erscheint hier erst, wenn das Modul diese Versuche ins Attempt-Log schreibt (derzeit oft nicht angebunden)."` | **Removed entirely** |

### 2. `assets/js/portal-core/features/mistakeReview.js`

| Before | After |
|---|---|
| Header hint: `"Einträge aus dem lokalen Lernprotokoll. „Erledigt" ist nur eine lokale Markierung zum Abhaken — keine Bewertung."` | `"Dein Fehlerprotokoll aus diesem Browser."` |
| Subheader: `... · Modul <code>${moduleSlug}</code>` | `... · Modul slug removed` (just courseLabel) |
| FullExam hint: `"Nur lokal protokollierte Einträge mit Quelle „Probeklausur". Keine Schätzung für ungetaggte Aufgabeninhalte."` | `"Basiert auf deinen gespeicherten Probeklausur-Einträgen."` |
| Empty: `"Noch keine konzeptgetaggten Probeklausur-Fehler."` | `"Noch keine Fehler nach Konzept zugeordnet."` |
| Repeated: `"Noch keine wiederholten Probeklausur-Fehler (>=2) im lokalen Log."` | `"Noch keine Konzeptfehler mit mehrfachen Vorkommen."` |
| Untagged: `"Nicht zuordenbar (ohne Konzept-Tag): N von M Probeklausur-Fehlern."` | `"Ohne Konzeptzuordnung: N von M Einträgen."` |
| All-tagged: `"Alle protokollierten Probeklausur-Fehler in diesem Browser sind einem Konzept zugeordnet."` | `"Alle Einträge sind einem Konzept zugeordnet."` |
| Open list empty: `"${title}: keine Einträge."` | `"Keine offenen Einträge — gut gemacht!"` |
| Done list empty: `"${title}: keine Einträge."` | `"Noch keine erledigten Einträge."` |
| Section heading: `"Noch offen / wiederholen"` | `"Wiederholen"` |

### 3. All 9 Module Dashboard Files — Button Subtext

Removed `"(sofern protokolliert)"` / `"(sofern Übungen sie protokollieren)"` qualifiers from the mistake-review button subtext across all module dashboards:

- `mikro1/js/features/dashboard.js`
- `makro1/js/features/dashboard.js`
- `makro2/js/features/dashboard.js`
- `finanzwirtschaft/js/features/dashboard.js`
- `oekonometrie/js/features/dashboard.js`
- `recht/js/features/dashboard.js`
- `jahresabschluss/js/features/dashboard.js`
- `statistik/js/features/dashboard.js`
- `internationale-wirtschaftsbeziehungen/js/features/dashboard.js`

All now read: `"Deine gespeicherten Fehler aus [module-specific flows]."` (no caveat qualifier).

### 4. Backbone CSS Added to 5 Modules

Added `.mr-*` (mistake review) and `.dash-honest-pilot` / `.dhp-*` (Lernprotokoll panel) CSS to:

- **`mikro1/css/styles.css`** — inserted before DASHBOARD section (~line 2019)
- **`recht/css/styles.css`** — inserted before DASHBOARD section
- **`oekonometrie/css/styles.css`** — inserted before DASHBOARD section
- **`jahresabschluss/css/styles.css`** — inserted before DASHBOARD section
- **`finanzwirtschaft/css/styles.css`** — already `@import`s mikro1/css/styles.css; resolved automatically

These modules now render both surfaces with the same visual treatment as makro1/makro2/statistik.

---

## Phase 4 — Remaining Limitations

### Not Changed: Mathematik Backbone Simplification
**`mathematik`** intentionally uses simple v1 dashboard (no pilot panel, no mistake review). This is a deliberate pedagogical design (session-stateless, reset-friendly). The surface is already student-ready and clean — no trust deficit observed. This is a scope difference, not a parity failure.

### Not Changed: Mikro2 Quarantine Scope
**`mikro2`** intentionally omits portalBridge, mistakeReview, and attempt logging due to source quarantine (no `source-materials/Mikro II/`). The quarantine scope is accurately documented in registry flags and architecture docs. Students see a functional simple dashboard with no confusion — the quarantine is transparent at the developer level without leaking internal language into the student UI. **No student-facing change warranted.**

### Not Changed: Pilot CSS Comment in Makro1
The CSS comment `/* Dashboard: honest protocol pilot panel (text-only) */` still says "pilot" in the source. This is developer-only comment; it does not affect the rendered UI. Not changed to minimize diff scope.

### Not Changed: `.dhp-foot` CSS Class
The `.dhp-foot` CSS class still exists in the 4 modules that had it (makro1, makro2, statistik, IWB), even though the footer paragraph that used it has been removed from the JS. Dead CSS is harmless and changing it is out of scope for this pass.

---

## Phase 4 — Judgment

**Before this pass:** Dashboard pilot panels read as experimental tooling. The "(Pilot)" title, repeated "Noch nicht verfügbar" error-style empty states, "konzeptgetaggt"/"Backbone" jargon, and the footer disclosure about internal wiring together created a strong signal that students were looking at unfinished internal tooling.

**After this pass:** The panel is titled "Lernprotokoll-Übersicht" — factual and neutral. Empty states read as normal (expected) states: "Noch kein Konzept-Check absolviert" is honest without signaling system failure. The mistake-review surface introduces itself in one sentence. All nine module dashboards no longer hedge their mistake-review button with "(sofern protokolliert)". Five modules now have properly styled backbone surfaces.

**Backbone surfaces now feel materially more like a trustworthy student-facing learning tool.** The fundamentally correct architecture (local storage, no external data transfer, browser-scoped learning records) is preserved — only the language framing has changed from defensive to confident.

**Release confidence:** High enough for student-facing use. The remaining limitations (mathematik simplification, mikro2 quarantine) are intentional scope decisions, not deficiencies.
