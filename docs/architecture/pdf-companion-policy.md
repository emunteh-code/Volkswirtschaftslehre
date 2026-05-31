# PDF companion policy — web portal vs ILIAS

**Effective:** 2026-06-01

## For students

| What you need | Where to get it |
|---------------|-----------------|
| Structured theory, stepped Aufgaben, graphs, R-Übung (where available) | **This web portal** |
| Official Vorlesungsfolien, Übungsblätter, Probeklausur-PDFs | **ILIAS** (Uni Göttingen) — button *Kursmaterialien in ILIAS öffnen* on landing and module Quellen tab |
| Full exam papers item-for-item | **Not in the web version** — portal offers **Plattform-Simulationen** only |

The portal is a **drill companion**: it distils and exercises official material but does not host copyrighted PDFs on GitHub Pages.

## For maintainers

1. **`source-materials/`** — academic source of truth in git for agents and local dev; **never** copied to `dist/` (`tools/build-pages-dist.mjs` excludes it).
2. **`siteConfig.officialMaterialsUrl`** — single ILIAS entry point (`assets/js/siteConfig.js`).
3. **Quellen tab** — concept ↔ document mapping; PDF open disabled on public deploy (`deployEnvironment.js`).
4. **Do not commit** bulk PDF re-hosting or `source-materials/` to Pages artifacts.

## Exam simulations

See `docs/architecture/official-exam-policy.md` for `official-task-source` promotion rules and OCR backlog.
