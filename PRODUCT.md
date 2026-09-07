# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: Spanish-speaking WhatsApp users, mostly in Latin America, who receive long voice notes from family, clients and groups and would rather read them than listen. They arrive on their phone, often from a WhatsApp link, in the middle of a conversation they cannot play audio in. Spanish is the priority audience; English is served with equal content.

## Product Purpose

Vntotxt is a WhatsApp bot that turns voice notes into text. A user forwards (or sends) a voice note to the bot's number and receives the transcription back as a WhatsApp message within seconds. The site's job is to make a first-time visitor understand that in one glance and start a chat with the bot.

## Positioning

Nothing to install and nothing to sign up for: the product lives entirely inside WhatsApp, and the first forwarded note already enrols the sender on the Free plan. Competing transcription apps require an app, an account, or copying audio out of WhatsApp.

## Operating Context

- The bot's WhatsApp number is +1 786 744 4726 (`https://api.whatsapp.com/send?phone=17867444726`). This is the primary call to action everywhere.
- Support and contact run on a separate WhatsApp number, +593 99 090 1765, owned by the company (Ecudevs S.A., Ecuador).
- Marketing site: Astro, static, deployed on Netlify at vntotxt.com. Checkout pages talk to the Vntotxt API for WhatsApp number verification and PayPal subscription confirmation.
- Social presence: Instagram and Facebook under `vntotxt`. A Spanish-only blog post exists.

## Capabilities and Constraints

- **Free plan:** 15 minutes of transcription per month, multilanguage, basic support, standard processing speed. Enrolment is automatic on first message to the bot; no verification form is required. The remaining monthly quota is appended to the same message as the transcription.
- **Pro plan:** US$4.99 per month, 180 minutes per month, 30-day free trial, standard support, remaining quota sent as a separate message. Purchased through WhatsApp number verification then PayPal on `/vntotxt-pro`.
- **Premium plan:** unlimited minutes, priority processing, premium support. Not purchasable yet ("coming soon"); listed for transparency.
- Transcriptions are multilanguage.
- **Unresolved (T-20, 2026-09-07):** this file previously stated that Pro/Premium get "enhanced"/"priority" processing speed and access to a web application for viewing transcriptions. Neither the marketing site nor the API repo available to that audit contains an implementation of a web app or of differentiated processing speed, so the site copy no longer advertises them. Treat both as owner decisions — either confirm the capability exists elsewhere and restore the copy with evidence, or drop the claim for good. See "Audit: T-20 paid-plan claims" below.
- The site is fully bilingual (English at `/`, Spanish at `/es/`); every string lives in `src/i18n/ui.ts` and both tables must stay key-for-key identical.
- Routing debt: the English pages live at the root while the Astro i18n config expects `/en/`; the meta-refresh in `Layout.astro` is inert by accident. Do not change routing outside a task that covers it.

## Brand Commitments

- Name: Vntotxt, written lowercase `vntotxt` in the wordmark. Logo: `public/logo.svg` and PNG variants (lime speech bubble in a mint circle).
- Voice: friendly, playful, direct. Headlines may end with a single emoji.
- The hero phone mockup (forwarded voice note answered by a transcription) is the product's signature demonstration and stays.
- The Storyset illustrations (`public/*-bro.svg`, `*-pana.svg`) remain part of the site's imagery.
- Visual system: recorded in DESIGN.md.

## Evidence on Hand

- Real plan facts (prices, minutes, features) as listed above.
- No usage figures are published. The only proof claim approved for the site is that transcriptions are multilanguage (no language count). Do not invent numbers.
- No testimonials or user quotes exist; do not invent any.
- The demo transcript shown in the hero (`featurePhone.transcription` in `ui.ts`) is a fictional example and should be presented as one.

## Audit: T-20 paid-plan claims (2026-09-07)

Every capability the Pro plan advertised on `/vntotxt-pro` and the homepage
pricing table, checked against this repo (the only one available to this
audit) and cross-referenced with `ARCHITECTURE.md`'s documented flows:

| Claim | Evidence | Verdict |
|---|---|---|
| 180 minutes/month, 30-day trial, $4.99/month | `tierId={2}` checkout flow, `CardSubscription`/`PlanCard` price and minutes props; PayPal plan id is a build-time config value the site already relies on | Verified — preserved unchanged |
| Remaining quota sent as a separate message | `quotaStyle="separate"` vs. Free's `"same"`, rendered distinctly in `PlanCard.astro`/`CardSubscription.astro` | Verified in frontend behaviour description; matches documented bot flow |
| Multilanguage transcriptions | Shared across all plans, matches "Transcriptions are multilanguage" above | Verified |
| Standard/basic customer support tiers | Operational claim, not something the static site or its API calls implement or falsify | Not code-verifiable either way; left unchanged (out of this audit's scope) |
| Enhanced processing speed (Pro), priority processing speed (Premium) | No code, endpoint, or config in this repo differentiates processing speed by plan | **Unresolved** — claim removed from Pro copy (site + `PlanCard`/`CardSubscription` feature lists); Premium's mention stays only because that plan is explicitly "coming soon" and not sold yet |
| Web app to browse transcriptions (Pro), web app access (Premium) | No web app route, build target, or link exists anywhere in this repo; `api.vntotxt` was also inspected by the wider investigation and did not establish one either | **Unresolved** — claim removed from Pro copy (site + `PlanCard`/`CardSubscription` feature lists) and from Free's "not included" comparison line, which no longer has anything to contrast against |

Resulting Pro feature list (both languages, unchanged price/quota/trial):
free trial, 180 minutes/month, quota sent as a separate message, multilanguage
transcriptions, standard customer support. No new capability was added to
replace the two removed claims — that is an owner decision, not something
this audit is authorized to build (no dashboard, no priority queue, no new
plan or pricing).

## Product Principles

1. Show the bot working before asking for anything; the demonstration is the argument.
2. The way in is always "message the bot"; paying is an upgrade, never a gate.
3. Spanish is a first-class path, never a partial translation.
4. Every claim on the page is a fact from this file; examples are labelled as examples.
5. The product lives inside WhatsApp, so the site speaks in WhatsApp's own vocabulary.
