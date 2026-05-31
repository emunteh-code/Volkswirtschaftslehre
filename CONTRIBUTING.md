# Contributing to VWL Lernportal

Thank you for helping improve the platform. This repository is an exam-focused
university learning portal; changes must stay deployable and source-faithful.

## Before you start

1. Read [AGENTS.md](./AGENTS.md) for non-negotiable product rules.
2. Read `.cursor/rules/source-materials.mdc` — **`source-materials/` is the academic
   source of truth**. Do not invent course content.
3. Every meaningful content block needs a source status (`direct-source`,
   `source-distilled`, `platform-added-explanation`, `platform-added-drill`, or
   `cross-link`).

## Development setup

```bash
# Static preview (required for ES modules)
python3 -m http.server 8080
# open http://localhost:8080
```

Official PDFs live under `source-materials/` (gitignored). Quellen/PDF features
require a local clone with that folder present.

## Required checks before opening a PR

Run both gates from the repository root:

```bash
node tools/exam-os/ci-validate.mjs
cd tools/clickthrough && npm ci && npx playwright install chromium && npm run trust:pass1
```

CI runs the same checks on pull requests and before GitHub Pages deploy.

## Module work

- Prefer extending shared patterns in `assets/js/portal-core/` over one-off forks.
- Do not refactor multiple modules at once unless the issue explicitly asks for it.
- No dead buttons, placeholder tabs, or fake progress.
- Konzept-Check home cards only where a module ships `conceptSchnelltestItems.js`.

## Documentation

For non-trivial changes, add or update a short note under `docs/audits/` describing
what changed, why, files touched, and remaining gaps.

## Pull requests

- Keep diffs focused; one concern per PR when possible.
- Describe test evidence (`ci-validate`, `trust:pass1`, manual checks).
- Do not commit secrets, `.env` files, or the `source-materials/` corpus.
