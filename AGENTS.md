# Repository Guidelines

## Project Structure & Module Organization
The Next.js 15 App Router lives in `app/`. Shared UI, hooks, or data utilities should be grouped under `app/components`, `app/hooks`, or `app/lib` to keep the page files (`app/page.tsx`, `app/layout.tsx`) lean. Global styles and Tailwind configuration live in `app/globals.css`, while static assets (logos, icons, fonts) belong in `public/`. Configuration files (`next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `tsconfig.json`) sit at the repository root and should stay close to project-wide tooling changes.

## Build, Test, and Development Commands
- `npm run dev`: Starts Next.js with Turbopack for local development at `http://localhost:3000`.
- `npm run build`: Produces an optimized production bundle; run before deploys.
- `npm run start`: Serves the production build locally for smoke-testing.
- `npm run lint`: Executes ESLint with the `next/core-web-vitals` and TypeScript rules; treat warnings as blockers.

## Coding Style & Naming Conventions
Write all UI in TypeScript React components. Keep indentation at two spaces and favor named exports for shared modules. Component files should use PascalCase (e.g., `HeroSection.tsx`), hooks camelCase (`useScrollSync.ts`), and style utilities kebab-case when needed. Tailwind CSS v4 powers styling; prefer composable utility classes over ad-hoc CSS, keeping long class strings grouped by layout → color → effects. Always run `npm run lint` before pushing; resolve all errors locally.

## Testing Guidelines
Automated tests are not yet configured. When adding coverage, use React Testing Library or Playwright, place specs under `tests/` or alongside components as `*.test.tsx`, and expose an npm script (`"test": "vitest run"` or similar). Aim for full coverage of interactive flows (navigation, scroll effects, motion triggers) and document any intentional gaps in the PR description.

## Commit & Pull Request Guidelines
Existing commits favor concise, imperative messages without prefixes (e.g., `Transform glass orb to Mars-themed visualization`). Follow that pattern, limit subject lines to ~72 characters, and include detail in the body only when necessary. Pull requests should link the related issue, summarize the change, note follow-up work, and attach screenshots or short clips for visual updates. Request review once linting passes and provide manual test notes describing any local verification steps.
