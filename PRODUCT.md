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
- **Pro plan:** US$4.99 per month, 180 minutes per month, 30-day free trial, enhanced processing speed, standard support, remaining quota sent as a separate message, access to the web application to view transcriptions. Purchased through WhatsApp number verification then PayPal on `/vntotxt-pro`.
- **Premium plan:** unlimited minutes, priority processing, premium support, web application access. Not purchasable yet ("coming soon"); listed for transparency.
- Transcriptions are multilanguage.
- A web application for viewing transcriptions exists (Pro and Premium). The owner chose not to link it from the site yet; mention it as text only.
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

## Product Principles

1. Show the bot working before asking for anything; the demonstration is the argument.
2. The way in is always "message the bot"; paying is an upgrade, never a gate.
3. Spanish is a first-class path, never a partial translation.
4. Every claim on the page is a fact from this file; examples are labelled as examples.
5. The product lives inside WhatsApp, so the site speaks in WhatsApp's own vocabulary.
