---
target: the homepage
total_score: 19
max_score: 36
na_heuristics: 7
p0_count: 1
p1_count: 2
timestamp: 2026-09-06T01-58-34Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review sub-agent · B: detector/browser sub-agent)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Every CTA opens api.whatsapp.com in a new tab with no "Opens WhatsApp" cue; content sits at opacity 0 until JS runs and entrances lag 2–5 s behind scroll. |
| 2 | Match System / Real World | 3 | Chat mockup mirrors WhatsApp well; copy leaks "transcripted message", "reenviar tus Vn's", "Our fees", "As simple as". |
| 3 | User Control and Freedom | 2 | `target="_blank"` everywhere without warning; no `prefers-reduced-motion` guard; the demo animation cannot be replayed. |
| 4 | Consistency and Standards | 2 | `/es/` keeps "Free Plan / Pro Plan / Premium Plan", "/month", "Subscribe", "Coming soon", "Forwarded" in English; two different WhatsApp numbers; primary buttons alternate teal-mist and white text. |
| 5 | Error Prevention | 2 | Free plan has a "Subscribe" button leading to phone verification while the hero says "just forward a note"; Premium lists features with no button and no explanation. |
| 6 | Recognition Rather Than Recall | 3 | Numbered, illustrated steps; nav anchors match section titles; bot number printed in step 1. |
| 7 | Flexibility and Efficiency | n/a | Single-path persuade page; no repeat-use workflow to accelerate. |
| 8 | Aesthetic and Minimalist Design | 2 | Pricing is 19 table rows of checkmarks; a dead "Coming soon" card takes a third of the section; "VNTOTXT" repeated in every feature blurb. |
| 9 | Error Recovery | 2 | If WhatsApp is not installed the CTA lands on an interstitial; no copyable number or QR near the hero. |
| 10 | Help and Documentation | 1 | A bot that reads private audio and takes payment has no FAQ (storage, languages, what counts as a minute); Privacy is one footer link. |
| **Total** | | **19/36** | **Acceptable (53%)** |

## Design Specificity Verdict

**LLM assessment.** There is exactly one authored, product-specific idea on this page: the hero phone mockup, where a "Forwarded" voice-note bubble (orange mic avatar, waveform, 0:42) is answered by a transcription bubble under a "Vntotxt Bot" header. It explains the product faster than any copy, borrows WhatsApp's bubble grammar deliberately, and the mint/teal/lime palette is a defensible extension of it. Below the fold the page is a stock daisyUI landing template any SaaS could ship unchanged: hero split, three "How it works" cards with Storyset illustrations, a four-item icon-plus-blurb grid, three pricing cards with a checkmark table, `footer-center`. The section badges ("As simple as", "Our fees") are template-isms; "Our fees" sounds like a bank. The product's whole story is a transformation (audio to text) and the page shows it once, then never again: the steps could be three chat bubbles, pricing is denominated in minutes of audio and could be a quota meter, features could show real transcript fragments. The page has a signature and uses it for 900 pixels.

**Deterministic scan.** CLI detector: exit 0, zero findings across `src/pages/index.astro`, `src/components`, `src/layouts`. In-browser detector: 4 findings. `justified-text` on the hero lede (`index.astro:33`, `md:text-justify` without hyphens) is real and matches the review's P3 note. `nested-cards` on the two chat bubbles (`VoiceNoteBubble.astro:12`, `TextBubble.astro:16`) is a false positive: bubbles inside a phone mockup are the point, not cards inside cards. `layout-transition` on `body` (`Layout.astro:42`) is a false positive: the computed `transition-property: all` is the UA default with 0s duration and nothing in `src/` authors it. The in-browser pass also surfaced a literal `undefined` class token on both bubble wrappers because `_class` is never passed.

**Visual overlays.** Injection succeeded. The four overlays and the detector banner are visible in the Chrome tab titled "[Human] Vntotxt critique" (the dev server has since been stopped, so do not reload that tab).

## Overall Impression

The top 900 pixels are the brand and they are good: a calm mint screen, one teal word, a phone that demonstrates the product without a sentence of explanation. Then the page hands over to a component library and the visitor is asked to compare 19 checkmark rows for a decision that is really "15 free minutes or 180 for $4.99". The biggest opportunity is structural, not cosmetic: fix the card overflow that breaks the two proof sections on every tablet and unmaximised laptop window, then tell the rest of the story in the chat language the hero already established.

## What's Working

- **The hero phone mockup.** Input, output, the "Forwarded" mechanic and the bot identity in one glance, in WhatsApp's own visual grammar, with the staggered pop-in dramatising send-then-receive. This is the asset the rest of the page should be built from.
- **Palette discipline.** One teal for every action, one accent word per headline, lime confined to small circles, mint reserved for bands. Contrast holds where it matters (white on teal 7.4:1, teal on mint 6.3:1, lede on mint 12.5:1).
- **The step-1 card carries the bot number as a tappable link.** The one place the page gives something concrete to act on outside a button, and a fallback when the WhatsApp deep link fails.

## Priority Issues

- **[P0] Cards overlap and overflow between 768 px and ~1400 px.** `Card.astro` and `CardSubscription.astro` are hard-coded `w-96` (384 px) inside `md:w-1/3` columns. Measured at 820 px: step cards at [-13,371], [216,600], [445,829], overlapping by 155 px, first card clipped off the left edge, page scrolls horizontally. At 1024 px overlap is 155 px; at 1280 px still 69 px. Titles truncate to "Save our WhatsAp". Same geometry for pricing.
  - **Why it matters:** every iPad, 13" laptop at default zoom, and unmaximised desktop window sees the two proof sections broken. That is most non-phone traffic.
  - **Fix:** drop `w-96`; use `w-full max-w-sm` on the card and make the row `grid grid-cols-1 md:grid-cols-3 gap-6` with `min-w-0` columns. Verify at 768, 1024, 1280.
  - **Suggested command:** $impeccable adapt
- **[P1] The page cannot decide how you start: message the bot, or "Subscribe".** Hero, step 1, features CTA and footer all say "send a voice note". Pricing then puts a full-width "Subscribe" on the $0 plan leading to a phone-verification form. Nothing says whether messaging the bot already enrols you on Free.
  - **Why it matters:** this is the highest-stakes decision on the page and the two paths contradict each other.
  - **Fix:** state the rule once above the plans ("Message the bot and you're on Free automatically. Upgrade to Pro any time."). Make the Free card's button a secondary "Start free on WhatsApp" pointing at the bot link; keep "Subscribe" only on Pro.
  - **Suggested command:** $impeccable clarify
- **[P1] The bilingual promise is broken on `/es/`.** "Free Plan / Pro Plan / Premium Plan", "/month", "Subscribe", "Coming soon" (hard-coded defaults in `CardSubscription.astro` and `ui.ts`) and "Forwarded" render in English; mobile nav `aria-label`s are English while visible text is Spanish (WCAG 2.5.3 label-in-name); "Empezar ya!" lacks the opening "¡"; "reenviar tus Vn's" is an abbreviation nobody uses.
  - **Why it matters:** the Spanish market is the founder's home market. A half-translated pricing card at the moment of payment reads as untrustworthy.
  - **Fix:** move `comingText`, `subscribeText`, "/month", "Forwarded" into `ui.ts`; translate plan titles; remove the redundant nav `aria-label`s; "¡Empezar ya!"; "Empieza a reenviar tus notas".
  - **Suggested command:** $impeccable harden
- **[P2] Content is invisible without JavaScript and lags with it.** Hero, every section title and body, and the mockup bubbles start at `opacity: 0` and are revealed only by an IntersectionObserver on `DOMContentLoaded`. In the browser the hero text and bubbles were still invisible 3–5 s after navigation on every load; scrolled-to sections rendered as blank bands for 2–4 s. No `prefers-reduced-motion` guard.
  - **Why it matters:** blank first paint on a persuade page; blocked or slow JS means an empty hero; reduced-motion users get the worst of both.
  - **Fix:** content visible by default; add a `js` class on `<html>` and scope `opacity: 0` to `.js #hero-section`; wrap the keyframes in `@media (prefers-reduced-motion: no-preference)`; trigger the hero entrance on script execution, not `DOMContentLoaded`.
  - **Suggested command:** $impeccable animate
- **[P2] Pricing is a table, not a decision aid.** 19 rows, all but one a check; plan name and price share the same 36 px weight; Premium is fully listed with no button; "Remaining quota in the same transcripted message" is unintelligible.
  - **Why it matters:** the only real decision is 15 minutes free vs 180 for $4.99. Everything else is noise and the dead third column makes the section look unfinished.
  - **Fix:** lead each card with minutes per month as a visual meter; demote the rest to a "Compare plans" disclosure; collapse Premium to a one-line "Unlimited plan coming, get notified" strip; make the price dominant and the plan name a label.
  - **Suggested command:** $impeccable distill

## Cognitive Load

3 failed, 1 partial (moderate). Chunking fails: plan cards list 6, 7 and 6 rows; mobile pricing is 2,012 px tall. Decision points fail: the footer presents 6 undifferentiated targets, three of them icon-only. Progressive disclosure fails: every plan detail is dumped at once, including a plan that cannot be bought. Grouping is partial: the features CTA floats 90 px below the grid; "Contact" (a different number) sits beside the bot's WhatsApp icon with no distinction.

## Emotional Journey

The peak arrives immediately (the phone popping in its bubbles) and nothing later matches it, so the curve is monotonically downward. Valley 1 is step 3, "Wait for it": the most important promise is the emptiest card. Valley 2 is pricing: a wall of rows, a plan you cannot buy, "Subscribe" on a $0 plan, and zero reassurance at the moment you hand over your WhatsApp number (no privacy line, no "cancel anytime", no social proof). The end frame is the weakest: a mint footer with three icon glyphs and a 2024 copyright.

## Persona Red Flags

**Jordan (confused first-timer):** the 🔈 emoji in the headline suggests audio playback, not text; "WhatsApp" appears only in the 20 px lede. "Get started! 😎" throws them into a new tab at api.whatsapp.com with no warning, a dead end on desktop without WhatsApp. Step 3 "Wait for it" shows no example of what comes back. Pricing shows "Subscribe" on Free, so they assume signup is required. "Remaining quota in the same transcripted message" and "Access to the web application" (no link exists) are unparseable.

**Riley (deliberate stress tester):** resizes to 1024 px and the cards pile onto each other; at 820 px the page scrolls sideways. Switches to Español and half the pricing card stays English. Tabs through the page: the mockup's unnamed kebab `<button>` is focusable and does nothing; the hamburger is a `div role="button"`. Footer "Contact" opens WhatsApp to +593 99 090 1765, a different number from the bot's +1 786, with no explanation. No privacy copy anywhere above the footer. Decorative illustration has `alt="Voice note to text"`; logo alts disagree ("VnToText Logo" vs "Vntotxt Logo").

**Casey (distracted mobile user):** first screen at 390 px is a four-line headline, lede, CTA and only the rim of the phone; the demo is below the fold and behind the ask. Cards render 384 px wide on a 386 px viewport with the shadow clipped. The page is 6,837 px tall; the Pro "Subscribe" sits 5,300 px down. Fast scrolling outruns the entrance animations, so they see blank bands and may assume the page is broken. Footer social links are 26×40 px and "Privacy" 47×20 px, under the 44 px target.

## Minor Observations

- Hero lede is `md:text-justify`, producing rivers at 820–1100 px (also the detector's one real finding). Use left alignment.
- Two primary-button text colours (teal-mist in hero/features, white in pricing) on the same teal.
- `bg-neautral` typo at `index.astro` lines 70 and 188 means the intended panel wrapper never renders.
- Both bubble wrappers render a literal `undefined` class because `_class` is never passed.
- `Layout.astro` meta refresh: operator precedence makes the content `"en/"`; ignored today, a redirect loop tomorrow.
- Boxicons load as an icon font with no SVG fallback; when the font fails every glyph becomes a square (as it did on this dev server). Inline SVGs would be immune.
- Waveform SVG uses `fill="#9FA1ABC"` (7-digit hex, invalid). Bubble timestamps are computed at build time and show a stale hour.
- Plan title `h3` followed by price `h4` uses headings for non-headings.
- 😎 in CTA buttons is read aloud by screen readers; wrap in `aria-hidden`.
- `Card.astro` renders an empty flex div when `number` is absent; `footer` has `rounded` on a full-bleed band; the `night` theme is registered but unused.
- "As simple as" plus cards 1-2-3 is a joke that only lands if the reader sees the numbers; on mobile the "3" is 1,200 px below the badge.

## Questions to Consider

1. If the phone mockup is the only thing that explains the product, why does the user ever leave it? What if the whole narrative, steps, features, even pricing, were told inside that one chat thread?
2. Is "Free" a plan or the default state? If messaging the bot already enrols you, the pricing section only needs one decision: upgrade or not. What is the Free card doing there?
3. A product whose value is "15 minutes of your private voice notes per month" never says "private", "deleted" or "stored" above the footer. What would it cost to say it once, next to the Subscribe button?
4. The Spanish market is the founder's home market and the blog is Spanish-only. Why is Spanish the secondary path with a half-translated checkout rather than the primary one?
