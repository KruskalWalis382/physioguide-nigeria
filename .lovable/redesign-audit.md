# PhysioGuide Nigeria — visual redesign audit

## Architecture
React 19, TypeScript, TanStack Start file-based routing, Vite, Tailwind v4 and existing shadcn/Radix controls. TanStack Query is mounted globally; interactive features use local React state. No database, authentication, paid service or health-answer persistence is configured.

## Pages and functionality
- Homepage: introduction, three learning pathways, three condition guides, resource links and educational notices.
- Explore Conditions: searchable body-region/condition catalogue.
- Guides: low-back, knee and neck pain; practical sections first, native collapsed clinical details, warning styling, references and tool links. Clinical wording is maintained in `src/lib/guides.ts` and must remain unchanged.
- Safety Checker: local multi-step answers, emergency-first result and reset.
- Movement: general movement guidance.
- Workout: level/day selectors, generated weekly schedule and exercise photos.
- Healthy Habits: desk, phone, lifting, sleep and nutrition photos/guidance.
- Explore Physiotherapy: profession/career sections, quiz, scenarios and eight independently expandable specialties (`src/lib/specialties.ts`).
- Learning, FAQ (native details), Contact (unconfigured WhatsApp notice).
- A longer neck article exists at the misspelled `/connditions/neck-pain` route. Preserve that existing address; the correctly spelled address currently returns 404 and is not linked in the milestone.

## Reusable structure
`SiteLayout` owns navigation, mobile state, skip link, content width and footer; `Picture` owns responsive image sizing and fallback. `Button` provides existing interactive variants. Styles contain duplicated legacy rules, mixed palettes and oversized card rounding; these will be consolidated without rewriting page content.

## Risks and baseline
- All 24 existing tests pass. Test-only root-document/empty stylesheet warnings remain; real-browser checks are needed.
- Generated route registration changed during dev startup; live `/conditions` works. Do not manually edit generated routing.
- Some legacy pages hardcode light colors; applying dark tokens globally would harm contrast. Introduce an opt-in homepage theme and preserve the light reading experience elsewhere until individual redesign milestones.
- Protect checker precedence/reset, planner changes, independent specialty state, guide ordering, original photos and reference URLs.

## First milestone plan
1. Consolidate reusable semantic styling with an opt-in Aurora theme and glass/button/section primitives.
2. Refresh the shared header, accessible mobile navigation and footer, retaining access to every destination.
3. Redesign the existing homepage with a full-width human-movement image, clear brand heading, three pathways, original condition images, functional resource previews and educational notices.
4. Use lightweight CSS entrances/reveals and reduced-motion fallbacks. No additional packages.
5. Run existing tests; verify all routes and key stateful flows in a browser; inspect phone/tablet/desktop layouts, image loads, focus and contrast. Do not deploy or redesign other page bodies yet.