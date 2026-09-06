# CONTRIBUTING.md

Instructions for changing this codebase. Read `ARCHITECTURE.md` first for
what exists and why; this file does not repeat it.

## Setup

You need Node 24 or newer and npm (the pinned major is in `.nvmrc`). No
database, no services.

```bash
npm ci
cp .env.example .env     # only needed to exercise the checkout forms locally
npm run dev              # http://localhost:4321
```

Inside an Astillero agent container this is already done: Node 24 is on
`PATH`, `npm ci` has run (with `CYPRESS_INSTALL_BINARY=0`, so there is no
Cypress binary), and the three `PUBLIC_*` variables hold placeholders. Do not
run Docker there.

## Commands

| Task | Command |
|---|---|
| Typecheck | `npx astro check` |
| Build | `npx astro build` |
| Both, as Netlify runs them | `npm run build` |
| Dev server | `npm run dev` |
| Preview a build | `npm run preview` |
| Smoke tests against production | `npm run cypress-prod-smoke-headless` (needs the Cypress binary and a browser; not available in the agent container) |

## Definition of done

- Every acceptance criterion of the task is met.
- `npx astro check` reports 0 errors. Do not add warnings or hints in files
  you touched.
- `npx astro build` completes.
- Every new user-facing string is a key in `src/i18n/ui.ts` with both an
  `en` and an `es` value, rendered through `t("key")`.
- A change to a page or layout is mirrored in its `src/pages/es/` sibling
  (or the root sibling, if you started in `es/`) in the same commit.
- If you changed an element id that a Cypress spec selects (`#hero-section`,
  `#phone-section`, `#how-it-works-link`, `#how-it-works-mobile-link`,
  `.dropdown`), the spec under `cypress/e2e/` is updated in the same commit.
- A new environment variable is added to `.env.example`, typed in
  `src/env.d.ts`, and given a placeholder in `.astillero/environment.json`.
- Nothing from `dist/`, `.astro/`, `node_modules/`, `.env`,
  `.env.production` or `cypress/screenshots/` is committed.
- Changes are on the task branch. Never on `main`.

## Code conventions

- **Components are `.astro` files** with a frontmatter block, a `Props`
  interface, and a destructure with defaults:
  `const { showButton = false } = Astro.props;` (`CardProSubscription.astro`).
- **Text goes through i18n.** At the top of any component that renders text:
  `const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);`
  then `{t("home.mainTitle.1")}`. Keys are dotted, lower camel, grouped by
  screen (`home.`, `nav.`, `footer.`, `plan.`, `checkout.`, `thankyou.`,
  `order.`). Inline `<strong>` in a value is allowed and rendered with
  `set:html` where the component expects it.
- **Locale-aware links** use the `lang == "es" ? "/es" : "/"` pattern from
  `Navbar.astro`; there is no helper. Spanish routes are `/es/<same-path>`.
- **Styling is utility classes** (Tailwind + daisyUI: `btn btn-primary`,
  `card`, `navbar`, `alert alert-error`). No `<style>` blocks, no new CSS
  files; `src/styles/main.css` only holds fonts, base layers and keyframes.
  Headings use `font-ubuntu`.
- **Images** are imported from `public/` and rendered with Astro's `<Image>`
  (`import Logo from "../../public/logo_transparent_540.png"`) so they are
  optimised; plain `<img>` only inside MDX posts.
- **Client-side code** lives in `src/scripts/form-utils.js` as `window.*`
  functions, wired from a `<script type="module" define:vars={{ ... }}>` in the
  component (`FormSubscription.astro`). Keep it plain JS; there is no bundler
  config for TypeScript there. Show feedback by toggling the `.alert-info` /
  `.alert-error` elements, never with `alert()`.
- **Endpoints** (`src/pages/*.ts`) export `GET: APIRoute` and return a
  `Response`; they run at build time only.
- **Language**: code, comments and commit messages in English; site copy in
  both languages. Comments are rare and explain why.
- **Formatting**: Prettier defaults (2 spaces, double quotes); `FormSubscription.astro`
  and `FormFreeSubscription.astro` use 4 spaces. Match the file you are in.

## Testing

There are no unit tests and no test runner. The gates are `astro check` and
`astro build`, and the reviewer checks acceptance criteria by reading the
diff and, where it helps, the built HTML under `dist/`.

- For a behaviour you can only see in a browser, describe in your result what
  you rendered and what you observed (`npm run preview` serves `dist/` on
  port 4321).
- Cypress specs in `cypress/e2e/vntotxtWeb/Smoke/` run only against a deployed
  URL (`cypress/prod.config.ts`). Keep them in sync with element ids; do not
  try to run them in the agent container.

## Git workflow

- Default branch `main`, which Netlify builds and serves. There is no CI and
  no branch protection; the Astillero board opens a PR per task and the
  Product Owner merges it.
- Branch names are short and lowercase (`stcomp`, `chore/astillero-onboarding`).
- Commit subjects are one line, imperative, stating the behaviour: "Add
  sitemap", "Fix subscription success to 404 bug". No trailing period, no
  "wip".
- One commit per logical change.

## Do not

- Do not commit to `main`, and never push from an agent run.
- Do not hard-code visible text; add an i18n key with both languages.
- Do not change one locale's page without changing the other.
- Do not add a dependency without naming it, and why, in your result summary.
- Do not touch `astro.config.mjs`'s `i18n` block, `netlify.toml`, or the
  `<meta http-equiv="refresh">` in `Layout.astro` unless the task is about
  routing; see Known debt in `ARCHITECTURE.md`.
- Do not use `process.env` in anything that ships to the browser; use
  `import.meta.env.PUBLIC_*`.
- Do not change the WhatsApp numbers, PayPal plan ids, or the Google Analytics
  id unless the task says so, and then change every copy.
- Do not commit `dist/`, `.astro/`, `.env`, or Cypress screenshots.
- Do not install the Cypress binary in the agent container.

## When unsure

Stop and report rather than invent. Put the question and the two options you
saw in your result summary (or the PR description). Cases that count: a
string whose Spanish translation you cannot confirm, a tier id or PayPal plan
whose meaning you cannot verify, a change that would alter the routing or
redirect behaviour, or a Cypress selector you are not sure is still used.
