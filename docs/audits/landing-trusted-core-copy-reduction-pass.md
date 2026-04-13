# Landing trusted-core copy reduction — Pass

**Date:** 2026-04-12  
**Goal:** Keep `Empfohlener Einstieg` → trusted-core row → `Weitere Module` hierarchy; shorten the note under the heading so it reads student-facing, not governance-heavy.

---

## Original copy (trusted-core shelf note)

> Diese vier **Live-Module** sind derzeit am stärksten ausgearbeitet, am engsten an den im Repository hinterlegten Vorlesungs- und Übungsmaterialien verankert und technisch am einheitlichsten umgesetzt. Sie eignen sich am besten als erste Anlaufstelle für ernsthaftes Üben — nicht als Ersatz für offizielle Lehrtexte.

**Issues:** Long, internal (“Repository”, “technisch am einheitlichsten”), slightly defensive; layout already signals priority.

---

## Final copy

> Diese vier Module eignen sich am besten als Einstieg in das Portal.

**Rationale:** One calm sentence (Option A from brief). Lets structure carry hierarchy; `Über dieses Portal` and the **Weitere Module** note still carry product boundaries elsewhere.

---

## Files changed

| File | Change |
|------|--------|
| `index.html` | Replaced `<p class="lp-shelf-note lp-shelf-note--trusted">` body with shortened sentence. |

**Unchanged:** `Empfohlener Einstieg` heading, `#trusted-core` / `trustedCoreGrid`, `Weitere Module` section and its note, hero CTA `#trusted-core`, `assets/js/common.js` trusted-core grid logic.

---

## Browser verification notes

Checked via repo-root `python3 -m http.server` + Playwright (same pattern as trust regression). Waited for `#trustedCoreGrid .lp-tile` ≥ 4 after `networkidle` (tiles populate from `assets/js/common.js`).

| Viewport | Result |
|----------|--------|
| **Desktop** 1280×900 | `Empfohlener Einstieg` ✓; note text exact match ✓; 4 trusted tiles ✓; `Weitere Module` ✓ |
| **Tablet** 900×700 | Same ✓ |
| **Mobile** 390×844 | Same ✓ |

Console: `landing-trusted-core-copy: all viewport checks passed`

**Completion:** Trusted-core hierarchy preserved; explanatory prose under `Empfohlener Einstieg` is short and non-internal.
