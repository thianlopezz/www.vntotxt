# ARCHITECTURE.md

What exists and why. For how to change it, read `CONTRIBUTING.md`.

## What this system does

`vntotxt.com` is the marketing site for Vntotxt, a WhatsApp bot that turns voice
notes into text. It is a fully static Astro site: a landing page (hero, how it
works, features, pricing), a Free-plan and a Pro-plan checkout page, a
thank-you page, a privacy policy, a 404, and one Spanish blog post. Every page
exists in English and in Spanish. The only runtime behaviour is browser
JavaScript on the checkout pages, which talks to the Vntotxt API
(`PUBLIC_VNTOTXT_API`, the sibling `api.vntotext` repo) to verify a WhatsApp
number and, for Pro, to confirm a PayPal subscription. Netlify builds `main`
with `npm run build` and serves `dist/` (`netlify.toml`).

## Directory map

| Path | What belongs here | What does not |
|---|---|---|
| `src/pages/` | One `.astro` file per English route (`index`, `vntotxt-free`, `vntotxt-pro`, `subscription-success`, `privacy-policy`, `404`) plus the generated endpoints `favicon.ico.ts`, `manifest.json.ts`, `robots.txt.ts`. `index.astro` only renders `components/HomePage.astro`. | Markup shared by two pages; that goes in `src/components/`. |
| `src/pages/es/` | The Spanish sibling of each page. Same file name, same structure, `language="es"`. `es/index.astro` renders the same `HomePage` component. | A page that has no English sibling. |
| `src/pages/posts/` | Blog posts as `.mdx` with frontmatter (`layout`, `title`, `pubDate`, `description`), rendered by `MarkdownPostLayout`. Only Spanish posts exist today. | Anything that is not a post. |
| `src/layouts/` | `Layout.astro` (the `<html>` shell: SEO head, fonts, analytics, sitemap link), `NavigationLayout.astro` (Layout + Navbar + Footer), `MarkdownPostLayout.astro` (article shell for posts). | Page content. |
| `src/components/` | Reusable `.astro` components: `HomePage` (the whole landing page for both locales), `StepsThread` (how-it-works as a chat), `PlanCard`/`SubscriptionCardList` (pricing), `CardSubscription` (checkout-page plan summary), forms, `FeaturePhone`, the bubbles, `Icon` (inline SVG from `icon-paths.ts`), navbar, footer. `common/` holds the head-only pieces (`HeadSeo`, `HeadAssets`, `Analytics`). | Client-side logic (see `src/scripts/`). |
| `src/i18n/` | `ui.ts`: the `en`/`es` string table keyed by dotted ids. `utils.ts`: `getLangFromUrl` and `useTranslations`. | Anything else; there is no routing logic here, routing is by directory. |
| `src/scripts/` | `form-utils.js`, the checkout flow: WhatsApp verification, PayPal confirmation, geo-IP lookup. Loaded by the form components via `<script src>`. Plain JS, attaches functions to `window`. | Astro components. |
| `src/styles/main.css` | Tailwind directives, the Ubuntu `@font-face` rules, selection/focus/accent colours, two keyframe animations, and the `[data-reveal]` scroll-entrance rules (active only under `html.js` and when motion is allowed). | Component styles; use Tailwind/daisyUI classes inline. |
| `src/env.d.ts` | Types for the three `PUBLIC_*` env vars. Add a line here when you add a variable. | Runtime code. |
| `public/` | Static assets copied verbatim: logos, illustration SVGs, `fonts/`, `images/posts/`. Astro's `<Image>` also imports from here for optimisation. | Generated files. |
| `cypress/` | Smoke specs (`e2e/vntotxtWeb/Smoke/`) and two configs; `prod.config.ts` points at `https://vntotxt.com/`, `qa.config.ts` is empty. | Unit tests; there are none. |
| `.astillero/` | The Astillero agent environment manifest (`environment.json`). | Anything a human runs. |
| `netlify.toml` | `publish = "dist"` and a list of force-200 redirects. | Build commands; Netlify uses the package script. |
| `dist/`, `.astro/`, `node_modules/` | Build output, generated types, dependencies. All gitignored. | Committed content. |

## Stack

- **Astro 4.5**, static output (no adapter, no SSR). `astro.config.mjs` sets
  `site: "https://vntotxt.com"`, the `i18n` block, and integrations.
- **Tailwind 3 + daisyUI 4** through `@astrojs/tailwind` with
  `applyBaseStyles: false` (the base layer is in `src/styles/main.css`).
  `tailwind.config.mjs` defines the `default` daisyUI theme (primary
  `#1C5F5F`, secondary `#E0F1DF`, accent `#C2FA6B`) and the `font-ubuntu`
  family. `@tailwindcss/typography` gives the `prose` classes used on the
  privacy policy and posts.
- **`@astrojs/mdx`** for posts, **`@astrojs/sitemap`** (emits
  `sitemap-index.xml`), **`@astrojs/partytown`** (runs the Google Analytics
  tag off the main thread; `forward: ["dataLayer.push"]`), **`astro-seo`**
  for the `<head>` meta.
- **`sharp` / `sharp-ico`** generate `favicon.ico` at build time from
  `public/logo.png`.
- **boxicons**: the home page inlines its glyphs as SVG through
  `components/Icon.astro` (path data copied into `icon-paths.ts`); the
  checkout, thank-you and 404 pages still use the icon font (CSS import in
  `Layout.astro`, `<i class="bx ...">`).
- **TypeScript** with `astro/tsconfigs/strict`; `astro check` is the type
  gate. There is no ESLint or Prettier config; formatting is Prettier's
  default as the Astro VS Code extension applies it.
- **Cypress 13** for smoke tests against a deployed URL. It is a regular
  dependency, so `npm ci` would download the ~200 MB binary; the agent
  container sets `CYPRESS_INSTALL_BINARY=0` to skip that.
- **Node**: there is no `.nvmrc` or `engines` field. The agent container runs
  Node 22 (`node:22-bookworm`) and the build passes there.

> TODO(human): confirm which Node version Netlify builds with, and pin it in a
> `.nvmrc` so local, Netlify and the agent container agree.

## Key flows

**A page renders.** `src/pages/es/vntotxt-pro.astro` → `Layout.astro`
(`language="es"`, `title`) → `HeadSeo` builds title/description/OpenGraph from
`Astro.props` with `t("page.title")` defaults, `HeadAssets` preloads the Ubuntu
fonts and the intl-tel-input stylesheet, `Analytics` injects gtag via
Partytown. Every component that shows text does
`const lang = getLangFromUrl(Astro.url); const t = useTranslations(lang);` and
renders `{t("some.key")}`. `getLangFromUrl` reads the first path segment, so a
page under `src/pages/es/` gets Spanish strings and everything else English.

**Free plan signup.** `/vntotxt-free` → `FormFreeSubscription.astro` →
`form-utils.js`: `sendVerificationCodeProcess(API, tierId=1, lang)` POSTs
`{waId, tierId, lang}` to `${API}/v1/request-subscription`; the user types
the code WhatsApp sent them; `verificationCodeProcess(API, redirect=true,
lang)` POSTs to `${API}/v1/verify-request` and redirects to
`/subscription-success/?subscriptionId=...` (with `/es` prefix when
`lang == "es"`).

**Pro plan checkout.** `/vntotxt-pro` → `FormSubscription.astro` with
`tierId={2}` and `paypalPlanId={PUBLIC_PAYPAL_PRO_PLAN_ID}`. Same two
verification calls, but `redirect=false`; the form then reveals the PayPal
Buttons (SDK loaded from `paypal.com/sdk/js?client-id=...&vault=true&intent=subscription`).
`onApprove` calls `confirmPurchase(API, data)` → POST `${API}/v1/confirm-purchase`
→ redirect to `/subscription-success/?orderID=...&subscriptionID=...`.
`subscription-success.astro` shows `CardOrderDetails`, which reads those query
params in a `<script>` and fills the table.

**A build.** `npm run build` = `astro check && astro build`. `astro check`
type-checks `.astro` and `.ts` files; `astro build` prerenders 11 pages,
runs the three endpoint files, optimises every imported image into
`dist/_astro/`, and writes the sitemap. Netlify runs the same command.

## Data model

There is no data. State lives in the URL (`?subscriptionId`, `?orderID`,
`?subscriptionID`) and in the Vntotxt API. Configuration is three build-time
variables, all `PUBLIC_*` so Astro inlines them into the client bundle:
`PUBLIC_VNTOTXT_API`, `PUBLIC_PAYPAL_CLIENT_ID`, `PUBLIC_PAYPAL_PRO_PLAN_ID`
(`.env.example`). Netlify holds the real values; the agent container gets
placeholders.

## Boundaries and rules

- Pages compose layouts and components; components never import pages.
- All user-visible text comes from `src/i18n/ui.ts`. Both `en` and `es`
  tables have 105 keys and must stay key-for-key identical (`useTranslations`
  falls back to English for a missing Spanish key, silently).
- Locale is expressed twice: the directory (`src/pages/es/`) decides which
  strings render, and the `language` prop on `Layout` is passed explicitly.
  Keep them consistent.
- Network calls happen only in `src/scripts/form-utils.js`, only to
  `PUBLIC_VNTOTXT_API`, `ipinfo.io` (geo-IP for the phone input) and PayPal.
  Components pass the API base in via `define:vars`; they never fetch.
- External scripts and styles are loaded from CDNs by URL (`intl-tel-input`
  17.0.8 on cdnjs, PayPal SDK, gtag). Do not vendor them.
- The WhatsApp bot number (`17867444726`) and the contact number are hard-coded
  in `index.astro`, `es/index.astro`, `Footer.astro`, `subscription-success.astro`,
  `404.astro` and `cypress/fixtures/vntotxt.json`. Change all of them together.

## Known debt

- **i18n config vs. file layout.** `astro.config.mjs` sets
  `prefixDefaultLocale: true` and `redirectToDefaultLocale: true`, which
  expects English pages under `src/pages/en/`, but they live at the root.
  The force-200 redirects in `netlify.toml` and the `<meta http-equiv="refresh">`
  in `Layout.astro` exist to fight the resulting redirects. That meta tag
  evaluates to `content="en/"` because of operator precedence
  (`"0;url=/" + language == "en"`), so it is effectively inert. Do not "fix"
  either without a task that covers the whole routing story.
  > TODO(human): decide whether the intended layout is root = English (then
  > drop `prefixDefaultLocale`/`redirectToDefaultLocale`) or `/en/` (then move
  > the pages).
- **`vite.define: { 'process.env': process.env }`** in `astro.config.mjs`
  inlines the entire build-time environment into any client module that
  references `process.env`. Nothing in `src/` does today, so nothing leaks,
  but any new client script using `process.env.X` would ship the build
  machine's environment to browsers. Use `import.meta.env.PUBLIC_*` instead.
  > TODO(human): this define looks unused; consider removing it.
- `cypress/qa.config.ts` is empty, so the `cypress-qa*` scripts fail, and
  `cypress/support/commands.ts` is the untouched template.
- `404.astro` and `privacy-policy.astro` have no `es/` sibling and carry
  hard-coded English copy instead of i18n keys; `404.astro` also imports
  `CardOrderDetails` without using it.
- Duplicate pages: `src/pages/X.astro` and `src/pages/es/X.astro` are
  near-identical copies for every route except the home page, which both
  render from `components/HomePage.astro`. Changes to the other pages must be
  made twice.
- The `posts` layout links to `/tags/...` routes that do not exist, and its
  frontmatter `image`/`tags` values are the Astro template defaults.
- The `ipinfo.io` token in `form-utils.js` is committed in the client bundle
  by design (it is a public browser token).
