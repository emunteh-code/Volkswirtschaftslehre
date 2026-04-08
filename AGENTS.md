# Project rules

## mission
Transform this repository into a source-faithful, interactive, exam-focused university learning platform.

## non-negotiable rules
1. Actual course materials are the only academic source of truth.
2. mikro1 is the current best benchmark, but it is not frozen and may be improved.
3. Do not remove high-value features such as interactive graphs, simulations, or R applications.
4. Standardize architecture and quality rules, not by flattening module-specific strengths.
5. No dead buttons, dormant tabs, fake progress bars, placeholder content, or half-supported features.
6. No notation drift from the actual course materials.
7. Every meaningful content block must carry one source status:
   - direct-source
   - source-distilled
   - platform-added-explanation
   - platform-added-drill
   - cross-link
8. All changes must keep the site deployable.
9. Preserve and extend strong module-specific features wherever pedagogically appropriate.
10. Do not invent academic substance beyond what is justified by the provided source materials.

### Module note: mikro2 (source corpus)

- **`mikro2` is a genuine Mikro II–topic module** (advanced micro: game theory, oligopoly, GE, market failure, information) and may remain **live**.
- There is **no `Mikroökonomik II` folder in `source-materials/`** in this repository (only **Mikro I** materials exist on disk). Therefore **`mikro2` cannot be treated as `direct-source`–anchored** to course PDFs until a Mikro II corpus is added.
- **Do not** run provenance curation or “source-grounded” content expansion **against `source-materials/`** for `mikro2` until that corpus exists; use **`source-distilled`** / **`platform-added-explanation`** / **`platform-added-drill`** as appropriate and document gaps.
- Policy and file pointers: `docs/audits/mikro2-quarantine-roadmap-pass-1.md` and `docs/audits/mikro2-source-identity-resolution-pass-1.md`.

## implementation rules
1. Audit first, then plan, then implement.
2. Do not refactor multiple modules at once unless explicitly asked.
3. Prefer scalable shared patterns over one-off hacks.
4. Before major code changes, write findings into docs/audits or docs/architecture.
5. For every implementation step, state:
   - what changed
   - why it changed
   - exact files changed
   - remaining risks or gaps
6. Never silently weaken pedagogy for cleanup or consistency.