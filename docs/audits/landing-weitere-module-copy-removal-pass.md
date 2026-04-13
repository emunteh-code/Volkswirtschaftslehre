# Landing Weitere Module copy removal — Pass

**Date:** 2026-04-12  
**Goal:** Remove governance-heavy prose under `Weitere Module`; keep heading, count, and card grid. Structure carries the section.

---

## Original copy

> Öffentlich freigegebene **kuratierte Live-Module** mit jeweils eigenem Umfang und eigener Quellenlage. Ergänzende Demonstrationsrouten (eigene URLs, anderer technischer Aufbau, andere Vertrauensklasse) erscheinen hier nicht. Sonderstatus einzelner Inhalte bleibt in den Modulen selbst erkennbar.

---

## Final copy

**Removed entirely** — no replacement paragraph. Fallback one-liner not needed: `.lp-shelf-header` already has `margin-bottom: 24px` in `portal.css`, so spacing from heading + count to the grid stays intentional.

---

## Files changed

| File | Change |
|------|--------|
| `index.html` | Deleted the `<p class="lp-shelf-note">…</p>` under `Weitere Module`. |

**Unchanged:** `Empfohlener Einstieg` block, `#trusted-core`, `#modules` structure, `moduleCountLabel`, `moduleGrid`, `Über dieses Portal` (still holds product boundary copy).

---

## Browser verification notes

Repo-root `python3 -m http.server` + Playwright on `/index.html` (`networkidle`, tiles populated).

| Viewport | Result |
|----------|--------|
| Desktop 1280×900 | `Weitere Module` ✓; `#modules p.lp-shelf-note` count **0**; removed phrase absent ✓; grid tiles present ✓ |
| Tablet 900×700 | Same ✓ |
| Mobile 390×844 | Same ✓ |

Console: `landing-weitere-module: all viewport checks passed`

**Completion:** No long internal paragraph under `Weitere Module`; hierarchy remains clear via heading + cards + count.
