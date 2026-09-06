---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/es/index.astro","src/components/HomePage.astro"]
---

# Home page (`/` and `/es/`)

**Scope and mode:** the marketing landing page, mode Persuade. Both locales render `src/components/HomePage.astro`.

**Audience and job:** Spanish-speaking WhatsApp users (priority) and English speakers who receive long voice notes and want to read them. They arrive on a phone, often mid-conversation. Success is understanding the bot in one glance and opening a chat with it.

**Action:** every primary CTA opens the bot's WhatsApp chat (+1 786 744 4726) and says "Opens WhatsApp". Paying is an upgrade (Pro "Subscribe" leads to `/vntotxt-pro`); messaging the bot already enrols the visitor on Free, and the pricing section says so.

**Proof and content:** the hero phone mockup (forwarded voice note answered by a transcription), the how-it-works chat screen (contact card, voice note, transcription with the quota line), the real plan facts, and the approved multilanguage claim. No testimonials, no usage figures, no web-app link (mention as text only). The example transcript is fictional and labelled "Example conversation".

**Chosen direction:** extend the hero's chat language below the fold. "How it works" is a two-column grid (illustrated steps left, one continuous mint chat screen right, interleaved on phones). Features keep the Storyset illustration with four inline-SVG items. Pricing leads each plan with minutes per month shown as the bot's real quota message, folds the feature list into a disclosure, and collapses Premium into a "Coming soon · Ask us on WhatsApp" strip. Memorable moment: the chat bubbles popping in as the thread scrolls into view.

**Constraints:** cypress smoke tests rely on `#hero-section`, `#phone-section`, `#how-it-works`, `#how-it-works-link`, `#how-it-works-mobile-link` and `.dropdown`. Keep the routing/meta-refresh debt untouched (see ARCHITECTURE.md). Both string tables in `src/i18n/ui.ts` must stay key-for-key identical.

**Unresolved:** real usage figures and the web-app URL, if the owner later wants them shown.
