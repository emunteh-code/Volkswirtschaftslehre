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