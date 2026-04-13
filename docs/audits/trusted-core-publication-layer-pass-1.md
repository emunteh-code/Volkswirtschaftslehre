# Trusted-core publication layer — Pass 1

**Date:** 2026-04-12  
**Goal:** Make the four strongest live modules the **visible, first-scrolled** entry to the portal, without hype, without flattening the rest of the catalogue, and **without** implying uniform quality across all routes.

---

## 1. Product positioning (what changed)

### Landing hierarchy

1. **Hero** default CTA now scrolls to **`#trusted-core`** and reads **„Zum empfohlenen Einstieg“** (static `index.html` + reset state in `assets/js/common.js` when no module is selected).
2. New section **`#trusted-core`** — title **„Empfohlener Einstieg“**, restrained explanatory note, grid **`#trustedCoreGrid`** with four tiles in fixed order: **Mikro I, Statistik, Recht, Ökonometrie** (from `TRUSTED_CORE_SLUGS` in `assets/js/modules.js`).
3. Existing **`#modules`** shelf retitled **„Weitere Module“** with count **6** (remaining live modules). Tiles only in **`#moduleGrid`**; generated stacks still **not** listed here.

### Hero default selection

- **No visit history:** hero highlights the **first trusted-core** module (`mikro1`), not merely the first row of the old flat grid (which happened to be `mikro1` already, but is now **explicitly** anchored to `getTrustedCoreModules()[0]`).
- **Returning user:** unchanged — last visited module still drives the hero.

### Keyboard / pointer parity

- `landingTileElements` = **trusted tiles first**, then **weitere** tiles, so arrow-key navigation matches visual priority.
- `handleLandingKeydown` treats focus inside **`#trustedCoreGrid`** or **`#moduleGrid`** as in-range for module tiles (same as before for `#moduleGrid` only).

### Visual language (calm)

- **No** “best / ultimate” copy.
- **No** large promotional badges.
- Subtle **`lp-tile--trusted-core`** border mix and a light **`lp-shelf--trusted-core`** background band in `assets/css/portal.css`.

### „Über dieses Portal“

- One paragraph ties the **four named modules** to the new **„Empfohlener Einstieg“** placement and repeats the **non-replacement** boundary for official materials.

---

## 2. Alignment with public truth policy

| Policy element | Pass 1 behaviour |
|------------------|------------------|
| Portal = study companion, not universal primary source | About + trusted note both state that official materials remain authoritative. |
| Not all modules equally reliable | **Weitere Module** shelf is explicitly secondary; copy notes differing depth and provenance **per module**. |
| Generated routes differentiated | Still **absent** from landing grids; `GENERATED_PORTAL_ROUTE_PREFIXES` unchanged. |
| mikro2 hidden | Still `status: "hidden"`; **not** on landing. |
| No fake equality | Trusted section explains **why** these four are grouped (depth, repo anchors, stack uniformity) without claiming other live modules are “bad”. |

---

## 3. Exact files changed

| File | Role |
|------|------|
| `assets/js/modules.js` | `TRUSTED_CORE_SLUGS`, `getTrustedCoreModules()`, `getNonTrustedPublicModules()` |
| `assets/js/common.js` | Split landing render, merged tile list, hero default + keyboard picker scope, shared `buildLandingTileHtml` |
| `index.html` | Trusted section markup, „Weitere Module“ shelf, hero CTA href/text, about paragraph |
| `assets/css/portal.css` | Trusted / further shelf and tile styling |
| `tools/clickthrough/audit-pass1.mjs` | Landing tile wait + count across both grids |
| `tools/clickthrough/verification-pass2.mjs` | Landing tile wait across both grids |
| `docs/audits/trusted-core-publication-layer-pass-1.md` | This audit |

---

## 4. Labeling / grouping used (verbatim)

- Section title: **Empfohlener Einstieg**
- Trusted shelf note (short paraphrase): four **Live-Module**, strongest current depth, closest to **repo** VL/Übung anchors, most uniform **technical** implementation; best **first** place to practise; **not** a substitute for official course texts.
- Second shelf title: **Weitere Module**
- Hero CTA (default): **Zum empfohlenen Einstieg** → `#trusted-core`

---

## 5. Browser verification notes

**Recommended manual checks (5–10 min demo path):**

1. **Landing:** Load `/index.html` — confirm **Empfohlener Einstieg** appears **above** **Weitere Module**; scroll / CTA **Zum empfohlenen Einstieg** jumps to the trusted block; trusted row shows **4** tiles; weitere row **6** tiles; **no** `r/` or `politisches-system-brd/` tiles.
2. **Trusted core:** Open each of mikro1, statistik, recht, oekonometrie from the **top** row — first paint should match prior quality (this pass does not change module internals).
3. **Non-core:** Open e.g. **makro1** from **Weitere Module** — still one click; visually **below** the trusted band.
4. **Generated route:** Open `r/index.html` or `politisches-system-brd/index.html` directly — still **off** the landing shelf; trust boundary unchanged.

**Automated:** `audit-pass1.mjs` / `verification-pass2.mjs` landing selectors updated to `#trustedCoreGrid .lp-tile, #moduleGrid .lp-tile` so total public tile count **10** is still asserted.

---

## 6. Required decision table

| Module / route | Trusted core? | Landing prominence | Public-first-click priority | Required caveat | Action taken |
|----------------|---------------|--------------------|-----------------------------|-----------------|--------------|
| **mikro1** | Yes | Top shelf, first tile | Highest default hero + first keyboard column | Still source-distilled in places; not a slide-for-slide substitute | Listed under **Empfohlener Einstieg**; `lp-tile--trusted-core`; hero default |
| **statistik** | Yes | Top shelf | High | Notation / course-line variance | Same |
| **recht** | Yes | Top shelf | High | Legal nuance needs lecturer/codex parity | Same |
| **oekonometrie** | Yes | Top shelf | High | R didactic ≠ full computing course | Same |
| **makro1** | No | Weitere Module grid | Medium | Strong module but outside the four-core publication set | Demoted to second shelf only |
| **makro2** | No | Weitere Module grid | Medium | Advanced; same trust class as other live backbone | Second shelf |
| **finanzwirtschaft** | No | Weitere Module | Medium | Module-specific provenance depth | Second shelf |
| **jahresabschluss** | No | Weitere Module | Medium | Mixed modality / own corpus | Second shelf |
| **internationale-wirtschaftsbeziehungen** | No | Weitere Module | Medium | Own corpus and pacing | Second shelf |
| **mathematik** | No | Weitere Module | Medium | Supporting maths track | Second shelf |
| **Generated routes** (`r/`, `politisches-system-brd/`) | No | Not on landing | Low (intentional) | Different stack (`generated-portal`); trust class per split-stack policy | Unchanged; not featured |
| **mikro2** | No (hidden) | Not listed | N/A | No Mikro II corpus in `source-materials/`; see `AGENTS.md` | Unchanged; remains `status: "hidden"` |

---

## 7. Completion rule (self-check)

**Requirement:** The landing page must not let weaker and stronger modules **equally** define public identity.

**Status:** **Met** for the **live landing grid**: four modules are **structurally first**, with copy that states **why**, and six others are under **Weitere Module** with an honest variance note. Generated stacks and **mikro2** do not gain prominence.

**Residual risk:** External links that deep-link to `makro1/index.html` bypass the landing — acceptable; the **default portal entry** is now biased toward the trusted core.

---

## 8. Follow-ups (optional, not Pass 1)

- Consider exporting a **single** `isTrustedCoreModule(slug)` helper if other surfaces (e.g. module footers) should echo the same boundary.
- Refresh screenshots in `qa/contact-sheet.html` if that artefact is maintained for releases.
