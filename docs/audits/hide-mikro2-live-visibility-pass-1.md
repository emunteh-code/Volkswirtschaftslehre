# Hide mikro2 Live Visibility Pass 1

Date: 2026-04-12

## Scope

Visibility suppression only. No `mikro2` files, assets, or source content were deleted, renamed, or rewritten.

## Root Cause

`mikro2` was still exposed through the shared live module registry in [assets/js/modules.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/modules.js). Its registry entry still used `status: "live"`, and the landing page plus shared live bridge both derive their student-facing module lists from `PUBLIC_MODULES`.

## Where `mikro2` Was Previously Exposed

- Landing / module overview in [index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/index.html) via [assets/js/common.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/common.js), which renders tiles, hero selection, module count, and keyboard navigation from `PUBLIC_MODULES`.
- Shared live portal bridge in [assets/js/live-portal-bridge.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/live-portal-bridge.js), which resolves live-visible module context from `PUBLIC_MODULES`.

## What Changed

### Shared visibility contract

- Updated the `mikro2` registry entry in [assets/js/modules.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/modules.js) from `status: "live"` to `status: "hidden"`.
- Added `isLiveModuleVisible(module)` in the same file and routed `PUBLIC_MODULES` through that helper so live visibility continues to come from one shared source of truth.

### Why it changed

- This keeps `mikro2` intact and directly reachable by file path if someone opens `mikro2/index.html` manually.
- It removes `mikro2` from the live-visible module set consumed by the landing page and shared live registry surfaces.
- It avoids one-off UI hacks and preserves the existing architecture.

## Exact Files Changed

- [assets/js/modules.js](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/assets/js/modules.js)
- [docs/audits/hide-mikro2-live-visibility-pass-1.md](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/docs/audits/hide-mikro2-live-visibility-pass-1.md)

## Confirmation That No Repo Content Was Deleted

- No files were deleted.
- No files were renamed.
- No `mikro2` code, data, assets, or HTML entrypoints were removed.
- The change only suppresses `mikro2` from shared live registries.

## Browser Verification

- Started a local static server from the repo root on `http://127.0.0.1:8766/`.
- Verified the landing at [index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/index.html):
  - `#moduleGrid .lp-tile` count = `10`
  - module titles no longer include `Mikroökonomik II`
  - `a[href*="mikro2/index.html"]` count = `0`
  - count label renders `10 Module`
- Verified live module pages at [recht/index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/recht/index.html) and [finanzwirtschaft/index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/finanzwirtschaft/index.html):
  - pages load normally
  - `window.__portalBridgeSnapshot.found` remains `true` for the live modules checked
  - `a[href*="mikro2/index.html"]` count = `0`
  - `.portal-switcher` count = `0`
- Verified direct access remains intact at [mikro2/index.html](/Users/enowmunteh/Downloads/Volkswirtschaftslehre-main%204/mikro2/index.html):
  - page still opens directly
  - this matches the requested soft-hide behavior
  - `window.__portalBridgeSnapshot.found` is now `false`, which is expected because `mikro2` is no longer part of the live-visible registry
- Console / runtime:
  - no page errors were raised during the verification pass
  - no console errors were introduced by the hide
  - observed warnings were limited to pre-existing MathJax component-version warnings on module pages, not `mikro2` visibility failures

## Remaining Risks / Gaps

- None identified within the current live registry architecture if all student-facing module selection surfaces continue to consume `PUBLIC_MODULES`.
