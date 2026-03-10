# Copilot instructions for `architectural-visionaries`

## Project overview
- This repository is a **Vite + React + TypeScript** single-page application for a Polish architectural / construction-services business.
- The UI is content-heavy and customer-facing, so preserve the current tone, branding, and **Polish-language copy** unless a task explicitly requires content changes.
- The project was generated and is still managed through **Lovable**. The root `README.md` notes that changes made in Lovable are committed back to this repository automatically.

## Key files and structure
- `src/main.tsx` bootstraps the app.
- `src/App.tsx` wires global providers and route definitions.
- Route pages live in `src/pages/`:
  - `Index.tsx`
  - `Uslugi.tsx`
  - `OFirmie.tsx`
  - `Kontakt.tsx`
  - `NotFound.tsx`
- Shared page chrome is handled by `src/components/Layout.tsx` with `Header` and `Footer`.
- UI primitives are in `src/components/ui/` and follow the common shadcn-style component layout.
- Use the `@/` path alias for imports from `src` (`vite.config.ts`, `vitest.config.ts`, and `tsconfig.json` all support it).

## Tooling and commands
- Install dependencies first:
  - `npm install`
- Start the local dev server:
  - `npm run dev`
  - Vite serves on **port 8080** (`vite.config.ts`)
- Run the production build:
  - `npm run build`
- Run tests:
  - `npm run test`
  - `npm run test:watch`
- Run lint:
  - `npm run lint`

## Testing notes
- Tests use **Vitest** with the **jsdom** environment (`vitest.config.ts`).
- Test setup lives in `src/test/setup.ts` and already includes `@testing-library/jest-dom` plus a `matchMedia` polyfill.
- Existing tests are minimal, so for behavioral changes prefer adding focused `*.test.ts` or `*.test.tsx` files under `src/`.

## Styling and UI conventions
- Styling is built with **Tailwind CSS** and shadcn-style UI components.
- Tailwind theme extensions live in `tailwind.config.ts`; the app uses custom fonts (`Playfair Display`, `Source Sans 3`) and animation utilities already defined there.
- The app uses **Framer Motion** for motion effects on marketing sections, especially on the homepage.

## Architecture notes for agents
- This is a straightforward React Router app, not a Next.js app and not a server-rendered app.
- `App.tsx` creates a single `QueryClient` and wraps the router with `QueryClientProvider`, `TooltipProvider`, and the toast providers. Keep new top-level providers aligned with that structure.
- Most pages are composed from static content sections rather than fetched data. Before adding complexity, check whether the existing pattern is just local JSX content.
- `index.html` uses `lang="pl"` and the page metadata is Polish; keep SEO metadata and user-facing text consistent with that language unless asked otherwise.

## Validation baseline
Use this order when validating local changes:
1. `npm install`
2. `npm run test`
3. `npm run build`
4. `npm run lint` (see known issue below)

## Known errors / workarounds
- In a fresh environment, `npm run lint`, `npm run build`, and `npm run test` will fail with `sh: eslint: not found`, `sh: vite: not found`, or `sh: vitest: not found` **until dependencies are installed**. The fix is to run `npm install` first.
- As of the current baseline, `npm run test` passes and `npm run build` passes after install.
- As of the current baseline, `npm run lint` still reports **pre-existing repository errors** that are not caused by onboarding work:
  - `src/components/ui/command.tsx` – `@typescript-eslint/no-empty-object-type`
  - `src/components/ui/textarea.tsx` – `@typescript-eslint/no-empty-object-type`
  - `tailwind.config.ts` – `@typescript-eslint/no-require-imports`
  - several `react-refresh/only-export-components` warnings in `src/components/ui/*`
- Do not treat those existing lint failures as being caused by unrelated documentation-only changes unless your task directly touches those files.

## Practical guidance for future changes
- Make the smallest possible change and avoid rewriting generated or shared UI primitives unless the task requires it.
- Prefer updating the relevant page in `src/pages/` for content/layout work rather than duplicating shared structure.
- Avoid committing build artifacts such as `dist/`.
- There are currently **no repository GitHub Actions workflows** checked into `.github/workflows/`, so local verification is the main validation path unless workflows are added later.
