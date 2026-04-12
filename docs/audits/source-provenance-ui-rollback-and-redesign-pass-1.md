# Source provenance UI — rollback and redesign (pass 1)

**Date:** 2026-04-12  
**Priority:** High, project-wide, student-visible, trust- and design-critical.

---

## What was wrong with the previous UI

1. **Default copy leaked internal pipeline language** via `fallbackLineForLayer()` (`source-distilled` → “Kursstoff (überarbeitet fürs Portal)”, `platform-added-*` → “didaktische Ergänzung”, etc.) — exactly what students should not see in chrome.
2. **Fallback summary with no parseable PDF paths** showed **“Quelle: Lernportal (didaktische Aufbereitung)”**, i.e. fake precision and audit tone.
3. **Primary line used “Quelle:”** with **comma-separated** labels and often an **ⓘ + full-width trigger + chevron**, so the block read like a **bibliography / metadata strip** rather than a quiet footer.
4. **Expanded detail used a `<ul>` with disc bullets** — visually noisy and “dump-like” next to premium cards.
5. **Expand affordance appeared** whenever multiple *layers* existed, even if every layer resolved to the **same** human line — redundant interaction for no extra information.

---

## New two-level design (contract)

### Level 1 — default (always when shown)

- Exactly **one** short line: **`Basis: Vorlesung 3 · Übung 2`** (middle dot separator).
- Built **only** from **`source_refs` paths** that `pathToHumanLabel()` recognises. **No** `source_status` text in the UI.
- **No** icon in the default line; **no** bullets; **no** large box.
- If **no** path maps to a human label for that concept, the **footer is omitted** (no invented “portal” provenance).

### Level 2 — optional detail

- Shown only when **at least two distinct human lines** appear across manifest layers (e.g. Theorie anchored on VL3, Aufgaben on Übung 2 with different curated paths in a future manifest).
- A **small circular ⓘ** button (`source-provenance-expand`) toggles a **compact two-column grid** (`source-provenance-detail-row`) — **no** list bullets.
- Row titles are student-facing: **Theorie, Formeln, Grafik, Aufgaben, Prüfungstransfer, Intuition, Kurzüberblick** (where present).
- **Kurzüberblick** is dropped from the detail list when it duplicates **Theorie** (same resolved line).

### Internal metadata

- `data-source-confidence` still holds **`theory.source_status`** for tooling only; **not** rendered as text.

---

## Shared vs module-local

| Layer | Responsibility |
|--------|----------------|
| **Shared** | `assets/js/portal-core/ui/sourceProvenanceUi.js` — labels, summary, HTML, expand logic. |
| **Shared** | `assets/js/portal-core/ui/renderer.js` — appends footer after each concept render for all tabs; passes `getConceptProvenance(conceptId)`. |
| **Shared** | `assets/css/premium-refinement.css` — visual treatment (loaded on module pages + landing). |
| **Module-local** | Each `contentManifest.js` continues to supply `PROVENANCE_BY_CONCEPT` / `getConceptProvenance` and path strings; no per-module UI fork required. |

Any module using `createRenderer({ getConceptProvenance })` gets the same footer automatically (**mikro1, makro1, statistik, oekonometrie, finanzwirtschaft, jahresabschluss, recht, internationale-wirtschaftsbeziehungen, mathematik**, etc.).

**R tab:** There is **no separate `r-anwendung` layer** in the manifest schema today; R shares the same concept provenance as other tabs. The footer still appears on the R tab when the concept has parseable refs.

**Prüfungstransfer / exam drills:** Rendered inside **Aufgaben** (and related panels); the same `#content` footer applies once per navigation render.

---

## Path heuristics (pass 1 additions)

`pathToHumanLabel()` was extended slightly so **Makro I–style** filenames map cleanly without exposing paths:

- `Übung3.pdf`, `Uebung3.pdf`
- `Tutorium4.pdf` (no underscore)
- `Makro I VL2.pdf` / generic `VL 2` before `.pdf`

---

## Files changed

| File | Change |
|------|--------|
| `assets/js/portal-core/ui/sourceProvenanceUi.js` | Removed internal-status fallbacks and bogus default summary; **`Basis:`** + **` · `**; expand only when **distinct** layer lines; detail as **div rows**; motivation dedupe; Makro-friendly path patterns. |
| `assets/css/premium-refinement.css` | Replaced bullet-list + full-width trigger styling with **`.source-provenance-inner`**, **`.source-provenance-expand`**, grid **detail rows**, mobile stack. |

---

## Browser verification (manual)

1. **Mikro I concept with curated VL paths** — default: single **Basis:** line; no internal wording.  
2. **Another Theorie page** — same pattern.  
3. **Graph tab** — footer present when concept has labels; still one line if all layers share refs.  
4. **Aufgaben / exam drill** — footer at bottom of `#content`; no default bullet dump.  
5. **R tab** — footer when refs exist.  
6. **Concept with empty primary refs** (e.g. placeholders) — **no** footer.

Confirm: default = **one line**; expand only when useful; **no** “didaktisch / source-distilled / platform-added” in the UI.

---

## Non-source-backed concepts

If **every** layer has **empty** `source_refs` or paths that **do not** match `pathToHumanLabel()`, **`buildConceptProvenanceStripHtml` returns `''`** — the UI does not claim a PDF basis. Internal `source_status` values remain in manifest data for authors and adapters only.
