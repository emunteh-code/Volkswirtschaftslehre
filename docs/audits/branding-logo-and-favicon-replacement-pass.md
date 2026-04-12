# Branding — logo and favicon replacement pass

**Date:** 2026-04-12  
**Mission:** Replace the Lernportal header brand mark and browser tab icon with the provided globe–dollar economy mark; use a **favicon-safe** simplified mark for small sizes (not the full-detail PNG).

---

## Outcomes

### 1. Main portal logo (`assets/brand/portal-logo.png`)

- Replaced with the **latest uploaded** raster mark (wide globe + dollar gradient, transparent background in source).
- **Header / landing:** `assets/css/portal.css` (`.lp-brand-mark`) and `assets/css/common.css` (`.site-header .brand-mark`) now:
  - use `background-image: url("../brand/portal-logo.png")` with **`background-size: contain`** (no aspect distortion),
  - use **`background-color: transparent`** and **no border** for a clean academic look,
  - use a **44×30px** box (was 34×34) so the wide mark aligns with the existing flex row without feeling cramped or stretched.

**Surfaces covered:** Landing `index.html` (`.lp-brand-mark`), `r/index.html` and `politisches-system-brd/index.html` (`.brand-mark` in `site-header`). Module shells (mikro1, statistik, …) use the sidebar home control (⌂) and **do not** render the old blue “VWL” tile; no change required there.

**Copy note:** Page titles and copy may still say “VWL Lernportal”; that is **wordmark / product name**, not the retired blue tile logo.

### 2. Favicon (`assets/brand/favicon-mark.svg`)

- **Not** the raw `portal-logo.png` (avoids muddy geography and overscaled wide mark at 16×16).
- New **square** `viewBox="0 0 64 64"`, **transparent** background.
- **Globe:** single **quadratic arc** on the left (no landmass detail).
- **Dollar:** dominant vector geometry **aligned with the previous pass-20 favicon** `$` paths (same identity family as the tab icon before this pass), with a **horizontal grayscale gradient** matching the main mark’s direction.
- **Root** `favicon.svg` updated to the **same simplified** graphic so default requests to `/favicon.svg` stay consistent (no opaque slate tile).

**HTML:** Every module `index.html`, landing `index.html`, `r/`, `politisches-system-brd/`, and `.qa/contact-sheet.html` now declare:

- `<link rel="icon" href="/assets/brand/favicon-mark.svg" type="image/svg+xml">` (or `../assets/...` from `.qa/`)
- `<link rel="apple-touch-icon" href="...favicon-mark.svg">` (SVG; iOS may still prefer PNG in some versions — see gaps below).

**Raster sizes (32 / 180 PNG):** Not committed in this pass: the environment had **no** Pillow/ImageMagick/rsvg-convert to generate crisp PNGs from SVG without adding a tracked toolchain. **SVG favicons** scale cleanly in Chromium, Firefox, and current Safari for tab icons.

### 3. Consistency

- Main mark = full uploaded PNG; tab mark = **simplified same-family** vector (arc + `$` + gradient). Clearly one identity, not unrelated artwork.

### 4. Old blue VWL logo

- There is **no** remaining image asset or CSS mask pointing at a blue “VWL” tile. Active entry points use `portal-logo.png` + `favicon-mark.svg` / root `favicon.svg`.
- `assets/brand/portal-mark.svg` remains on disk as an **unused** legacy asset (mask-era). Safe to delete in a later cleanup pass if desired.

---

## Files changed

| File | Role |
|------|------|
| `assets/brand/portal-logo.png` | Main raster logo (replaced binary). |
| `assets/brand/favicon-mark.svg` | **New** simplified favicon / apple-touch source. |
| `favicon.svg` | Root default icon = simplified mark (transparent). |
| `assets/css/portal.css` | `.lp-brand-mark` sizing + transparent contain. |
| `assets/css/common.css` | `.site-header .brand-mark` same. |
| `index.html`, `*/index.html` (14 module/special shells) | Favicon + apple-touch links. |
| `.qa/contact-sheet.html` | Relative favicon links for QA page. |

---

## Verification notes (browser)

With `python3 -m http.server` from repo root:

1. Open `/index.html` — header shows **wide globe–dollar** PNG; tab shows **simplified** SVG.
2. Open any module (e.g. `/statistik/index.html`) — same tab icon.
3. Toggle **light / dark** (where the shell supports it) — transparent logo sits on shell background; favicon SVG is legible on light and dark tab chrome.

---

## Gaps / follow-ups

| Item | Note |
|------|------|
| PNG `favicon-32.png` / `apple-touch-icon` 180×180 | Recommended when a raster pipeline is available (Pillow, sharp, or design export). |
| `portal-mark.svg` | Unused; optional deletion. |
| String “VWL” in titles | Product naming, not the old logo graphic. |

---

## Completion check

- [x] Main portal brand mark uses uploaded economy/globe–dollar image, transparent tile, `contain`, no distortion.
- [x] Favicon is **not** the raw detailed PNG; simplified square SVG with dominant `$` and globe arc.
- [x] All active `index.html` favicon links updated; QA sheet updated; root `favicon.svg` aligned.
- [x] No active references to the old blue VWL **graphic** treatment in header/sidebar branding paths covered by this repo layout.
