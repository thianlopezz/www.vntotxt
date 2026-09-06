---
name: Vntotxt
description: The WhatsApp voice-note-to-text bot's marketing site, styled like a friendly chat screen in mint, deep pine teal and lime.
colors:
  deep-pine-teal: "#1C5F5F"
  deep-pine-teal-pressed: "#175252"
  teal-mist: "#d1dddd"
  mint-bubble: "#E0F1DF"
  lime-pop: "#C2FA6B"
  lime-ink: "#0e1504"
  cloud-grey: "#F0F1F0"
  paper-white: "#ffffff"
  ink: "#161616"
  charcoal-copy: "#1f2937"
  slate-muted: "#4b5563"
  slate-meta: "#6b7280"
  slate-timestamp: "#9ca3af"
  bubble-outgoing: "#ecfccb"
  bubble-incoming: "#f7fee7"
  success-wash: "#dcfce7"
  voice-orange: "#f97316"
  info-blue: "#458DE4"
  success-green: "#7EDE4A"
  warning-amber: "#EDB955"
  error-red: "#E4332E"
typography:
  display:
    fontFamily: "Ubuntu, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Ubuntu, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: "2.5rem"
    letterSpacing: "normal"
  checkout-heading:
    fontFamily: "Ubuntu, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 400
    lineHeight: "2.25rem"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: "2rem"
  lede:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  body:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5rem"
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1em"
  caption:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1rem"
rounded:
  btn: "0.5rem"
  bubble: "0.75rem"
  box: "1rem"
  badge: "1.9rem"
  full: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "2.5rem"
  hero-gutter: "9rem"
components:
  button-primary:
    backgroundColor: "{colors.deep-pine-teal}"
    textColor: "{colors.teal-mist}"
    typography: "{typography.label}"
    rounded: "{rounded.btn}"
    padding: "0 1rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.deep-pine-teal-pressed}"
    textColor: "{colors.teal-mist}"
  button-primary-wide:
    backgroundColor: "{colors.deep-pine-teal}"
    textColor: "{colors.teal-mist}"
    rounded: "{rounded.btn}"
    width: "16rem"
    height: "3rem"
  button-primary-block:
    backgroundColor: "{colors.deep-pine-teal}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.btn}"
    width: "100%"
    height: "3rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.btn}"
    padding: "0 1rem"
    height: "3rem"
  button-accent-circle:
    backgroundColor: "{colors.lime-pop}"
    textColor: "{colors.lime-ink}"
    rounded: "{rounded.full}"
    size: "3rem"
  badge-outline-primary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-pine-teal}"
    typography: "{typography.body}"
    rounded: "{rounded.badge}"
    padding: "0 0.688rem"
    height: "1.5rem"
  card:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.box}"
    padding: "{spacing.xl}"
    width: "24rem"
  step-avatar:
    backgroundColor: "{colors.lime-pop}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "3rem"
  input-bordered:
    backgroundColor: "{colors.paper-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.btn}"
    padding: "0 1rem"
    height: "3rem"
  navbar:
    backgroundColor: "{colors.mint-bubble}"
    textColor: "{colors.ink}"
    padding: "{spacing.xs}"
    height: "4rem"
  footer:
    backgroundColor: "{colors.mint-bubble}"
    textColor: "{colors.ink}"
    padding: "{spacing.2xl}"
  chat-bubble-outgoing:
    backgroundColor: "{colors.bubble-outgoing}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "{spacing.md}"
  chat-bubble-incoming:
    backgroundColor: "{colors.bubble-incoming}"
    textColor: "{colors.ink}"
    rounded: "{rounded.bubble}"
    padding: "{spacing.md}"
  alert-info:
    backgroundColor: "{colors.info-blue}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.box}"
    padding: "{spacing.md}"
  alert-error:
    backgroundColor: "{colors.error-red}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.box}"
    padding: "{spacing.md}"
---

# Design System: Vntotxt

## Overview

**Creative North Star: "The Friendly Chat Screen"**

Vntotxt lives inside WhatsApp, and the site is built to feel like the conversation you are about to have with it. Every page is a stack of soft green bands, the way a chat thread stacks bubbles: mint for the chrome and hero, off-white for the working sections, pure white cards floating on top. The colour story is borrowed straight from the logo, a lime speech-mark inside a mint circle, and from WhatsApp's own greens, so a visitor who arrives from the app never feels they have left it. The product is a bot that turns audio into text, and the centrepiece of the home page is a literal phone mockup where a forwarded voice note bubble is answered by a transcribed text bubble.

The tone is friendly, approachable and playful. Headlines are big, bold Ubuntu with one phrase picked out in deep pine teal and a single emoji at the end. Illustrated people (the Storyset "bro" and "pana" figures in the how-it-works and features sections) carry the human warmth. Motion is bouncy rather than slick: sections fade up as they enter, step cards and chat bubbles pop in with a little overshoot. Nothing is severe, nothing is corporate, and nothing shouts. The system is deliberately small: one daisyUI theme, one display face, a handful of components, and Tailwind greys for copy.

Density is relaxed. Sections claim the full viewport on desktop, cards are generous (2rem padding), and three-column rows collapse into a single stacked column on phones without changing the card itself. The site is fully bilingual (English and Spanish), so every layout must tolerate copy that runs roughly a third longer.

**Key Characteristics:**
- Chat-thread rhythm: alternating mint and off-white full-width bands with white cards on top.
- One accent word per headline, always in deep pine teal; one emoji at the end.
- Lime appears only as small circular markers, never as a surface.
- Ubuntu Bold for h1/h2 only; everything else is the system sans stack.
- Round everything: 1rem boxes, 0.5rem buttons and inputs, pill badges, full circles for avatars and social buttons.
- Cards lift with a soft shadow; nothing else casts one.
- Entrance motion on scroll: fade-up for sections, spring pop for step cards and bubbles.
- Illustrated people instead of photography; boxicons for glyphs.

## Colors

A soft green palette anchored by one deep teal, with a lime highlight and Tailwind greys for reading copy.

### Primary
- **Deep Pine Teal** (`deep-pine-teal`): the single voice of action and emphasis. Fills every call-to-action button, colours the highlighted phrase in each headline, the outline badges under section titles, the footer social icons, the mockup phone's chat header, and the thank-you page footer. Pressed and hovered buttons darken to **Deep Pine Teal Pressed** (`deep-pine-teal-pressed`), which is daisyUI's 10% black mix.
- **Teal Mist** (`teal-mist`): daisyUI's derived primary-content colour. It is the default text on primary buttons (hero and features CTAs). The pricing and checkout buttons override it to Paper White for a crisper read.

### Secondary
- **Mint Bubble** (`mint-bubble`): the chrome colour. Navbar, footer, the hero band, the features band, the checkout column on the plan pages, and the blog post figure background. It is the colour of the "screen" behind the conversation.
- **Lime Pop** (`lime-pop`): the accent, used as tiny circles only: numbered step avatars, feature icon avatars, the circular social buttons on the thank-you and 404 pages, and the mockup phone's frame border. Text on lime is **Lime Ink** (`lime-ink`), daisyUI's derived accent-content.

### Neutral
- **Cloud Grey** (`cloud-grey`): the page body background, and therefore the colour of the how-it-works and pricing sections that sit between mint bands.
- **Paper White** (`paper-white`): cards, inputs, the mobile dropdown menu, and the order-details card.
- **Ink** (`ink`): default text colour for headings, card bodies, nav links, labels and buttons on light surfaces.
- **Charcoal Copy** (`charcoal-copy`): paragraph copy in the hero lede and inside step cards. Slightly softer than Ink.
- **Slate Muted** (`slate-muted`): the "Coming soon" price on the Premium card.
- **Slate Meta** (`slate-meta`): the "Forwarded" label and share glyph inside the voice-note bubble.
- **Slate Timestamp** (`slate-timestamp`): bubble timestamps and audio duration.

### Chat & State Colours
- **Bubble Outgoing** (`bubble-outgoing`): the forwarded voice-note bubble (Tailwind lime-100), echoing WhatsApp's sent-message green.
- **Bubble Incoming** (`bubble-incoming`): the bot's transcription reply bubble (Tailwind lime-50).
- **Success Wash** (`success-wash`): full-page background on the thank-you and 404 screens.
- **Voice Orange** (`voice-orange`): the microphone avatar inside the voice-note bubble. The only warm colour in the system, reserved for that one glyph.
- **Info Blue** / **Success Green** / **Warning Amber** / **Error Red**: daisyUI semantic states. Only Info Blue and Error Red are used today, as the checkout alerts, both with white text.

### Named Rules
**The Mint Band Rule.** Mint Bubble belongs to full-width bands and chrome. It is never a card, button, or badge fill.

**The Lime Is A Dot Rule.** Lime Pop appears only on small circular markers (avatars, social buttons, the phone frame). Never as a section background, button fill for a text CTA, or text colour.

**The Teal Word Rule.** Each headline picks out exactly one phrase in Deep Pine Teal. Two would dilute it; zero reads as unstyled.

## Typography

**Display Font:** Ubuntu (with ui-sans-serif, system-ui, sans-serif), self-hosted at Light 300, Regular 400, Medium 500 and Bold 700 from `/fonts/`, preloaded, `font-display: block`.
**Body Font:** the system sans stack (ui-sans-serif, system-ui, sans-serif). Ubuntu is not applied globally.
**Label/Mono Font:** none.

**Character:** Ubuntu's rounded, humanist strokes match the chat-bubble world and make the big headlines feel warm rather than loud. Because body copy stays in the system font, the Ubuntu headings act as the brand's "voice" and everything else recedes into plain, readable prose.

### Hierarchy
- **Display** (Bold 700, 3rem on phones, 3.75rem from 640px, line-height 1): the hero h1 only. Its teal accent span grows to 4.5rem from 768px, so the highlighted phrase is the largest thing on the page. Centered on phones, left-aligned on desktop.
- **Headline** (Bold 700, 2.25rem, line-height 2.5rem): section h2 titles ("How it works", "Features", "Pricing"), centered. The features headline carries a teal accent span at the same size.
- **Checkout Heading** (Regular 400, 1.875rem, line-height 2.25rem): the h1 on the verification and payment forms. Ubuntu, but notably not bold; the form should feel calm.
- **Title** (Bold 700, 1.5rem, line-height 2rem, system sans): card titles in step cards. Pricing card titles and prices step up to 2.25rem with a 1.125rem "/month" suffix. Feature descriptions use a 1.25rem bold title.
- **Lede** (Regular 400, 1.25rem, line-height 1.75rem): the hero paragraph and thank-you page description, in Charcoal Copy. Justified on desktop in the hero.
- **Body** (Regular 400, 1rem, line-height 1.5rem): card body text, feature descriptions, form copy, footer copyright.
- **Label** (Semibold 600, 0.875rem, line-height 1em): button text, nav links, form labels (labels drop to 400).
- **Caption** (Regular 400, 0.75rem, line-height 1rem): bubble timestamps and helper text under inputs.
- **Prose pages** (privacy policy, blog posts): `@tailwindcss/typography` at `prose-lg`, max width from the plugin, centered.

### Named Rules
**The Ubuntu Headline Rule.** Ubuntu is applied only to h1, section h2 and the checkout heading. Card titles, body, labels and buttons stay in the system stack.

**The Emoji Full Stop Rule.** Big headlines and primary CTAs may end with exactly one emoji (🔈, 📝, 😎). Emoji never appear mid-sentence or in body copy.

**The Long Spanish Rule.** Every heading and button must survive the Spanish translation, which runs up to a third longer. Test both locales before shipping a layout.

## Layout

The page is a vertical stack of full-width bands. On desktop (768px and up) the hero, features and checkout sections each claim the full viewport height (`md:h-screen`) and split into two halves: text on one side, illustration or phone mockup on the other. The how-it-works and pricing sections use a centered `container` with 2.5rem of vertical padding and 1.25rem to 2.5rem side gutters.

The hero adds a wide 9rem side gutter from 1024px so the headline and phone sit inside a comfortable reading column. Content columns are fixed fractions rather than a grid: 1/2 and 1/2 for hero and checkout, 5/12 and 7/12 for features, and three 1/3 columns for cards.

Cards are a fixed 24rem wide and stretch to equal height inside their row. Three-up rows stack vertically below 768px with 1.5rem between cards. The features grid is two columns from 768px, one below, with a 2.5rem gap.

Spacing steps that actually recur: 0.5rem (navbar padding, card content gap, button icon gap), 0.75rem (card column gutters, table cell padding), 1rem (bubble and input padding, footer link gap), 1.5rem (stacked card gap), 2rem (card body padding), 2.5rem (section padding, feature grid gap, footer padding).

Forms are single-column, capped at 20rem (`max-w-xs`) and centered inside the mint checkout column; on phones they take 80% width.

Navigation is a 4rem mint bar: logo and wordmark left, three anchor links right from 1024px, collapsing to a hamburger dropdown below. Anchor links smooth-scroll to sections.

## Elevation & Depth

Depth comes first from tonal bands and second from one soft shadow. Mint, cloud grey and white are stacked like layers of a chat screen, so most of the hierarchy is colour, not shadow. White cards are the only lifted surface: they float on mint or cloud grey with Tailwind's large shadow. Buttons carry daisyUI's hairline shadow, which reads as flat. Inputs, badges, bubbles and the navbar are flat.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1)`): step cards and pricing cards. Structural: it marks "this is a card".
- **Menu lift** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1)`): the mobile dropdown menu.
- **Button hairline** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / .05)`): daisyUI default on all buttons; ghost buttons remove it.

### Named Rules
**The Cards Only Rule.** Only white cards and the mobile menu cast a shadow. Do not add lift to buttons, inputs, badges, bubbles, or bands.

**The Tonal First Rule.** If a section needs separation, change the band colour (mint vs cloud grey) before reaching for a shadow or a border.

## Shapes

Everything is rounded and nothing is sharp. Containers use a generous 1rem radius (cards, alerts, tables, the dropdown menu). Interactive controls use 0.5rem (buttons, inputs). Badges are pills (1.9rem). Avatars, the logo, the phone-header avatar and the social buttons are full circles.

Chat bubbles use a 0.75rem radius with one corner squared to point at the sender: the outgoing voice-note bubble squares its top-right corner, the incoming transcription bubble squares its top-left.

The phone mockup is daisyUI's `mockup-phone`: a black body with a 50px outer radius, 4px lime frame, and a 40px inner display radius.

Borders are rare: inputs have a 1px 20% Ink border, the outline badge a 1px 50% current-colour border. Cards have no border.

## Components

Buttons, cards, badges, inputs, alerts and navigation come straight from daisyUI 4 with the `default` theme. They feel tactile and confident: full 3rem height, semibold text, a slight scale-down on press.

### Buttons
- **Shape:** 0.5rem radius, 3rem tall, 1rem side padding, 0.5rem gap, semibold 0.875rem text, 1px border in the fill colour.
- **Primary:** Deep Pine Teal fill with Teal Mist text. Used for every WhatsApp call-to-action ("Get started!", "Start forwarding", "Start transcribing") and form submits. Widths: `btn-wide` (16rem) in the hero, `btn-block` (100%) in pricing cards and forms, natural width elsewhere.
- **Hover:** fill darkens to Deep Pine Teal Pressed over 0.2s. **Focus-visible:** 2px solid teal outline, 2px offset. **Active:** scales to 0.95.
- **Ghost:** transparent, current-colour text, no shadow. Used for the logo wordmark link, the hamburger, and the mockup phone's kebab menu.
- **Accent circle:** Lime Pop fill, Lime Ink glyph, 3rem circle, 1.5rem boxicon. Social links on the thank-you and 404 pages.
- **Loading:** a daisyUI `loading-spinner` appears inside the submit button while verification runs; the button is disabled during submission.

### Badges
- **Style:** outline pill, transparent fill, Deep Pine Teal text, 1px border at 50% opacity, 1.5rem tall, 1rem text.
- **Use:** a single subtitle badge under each section headline ("As simple as", "Our fees").

### Cards
- **Corner Style:** 1rem.
- **Background:** Paper White. The order-details card on the thank-you page is white without shadow.
- **Shadow Strategy:** Card lift (see Elevation).
- **Border:** none.
- **Internal Padding:** 2rem, with 0.5rem between children.
- **Step card:** an illustration at two-thirds width centered in a figure, then a lime step-number avatar (3rem circle, 1.875rem numeral), a 1.5rem bold title, Charcoal Copy body, and a centered actions row.
- **Pricing card:** 2.25rem bold title and price (with a 1.125rem "/month"), a feature table with a 1.875rem boxicon check or cross in the trailing cell, and a full-width primary button with white text. Plans without a checkout link show a Slate Muted "Coming soon" instead of a price.
- **Entrance:** step cards start invisible and pop in (scale 0.5 to 1.1 to 1 over 0.5s) when 10% visible, staggered by 0.75s per card.

### Inputs / Fields
- **Style:** Paper White, 0.5rem radius, 3rem tall, 1rem side padding, 1px 20% Ink border. Wrapped in a `form-control` label with a 0.875rem label above and a 0.75rem helper below.
- **Focus:** 2px outline at 20% Ink, 2px offset; border unchanged.
- **Phone field:** enhanced by intl-tel-input with its stock flag dropdown.
- **Alerts:** info and error alerts sit above the form, 1rem radius, semantic fill with white text and a leading boxicon. Hidden until the script shows them.

### Navigation
- **Style:** 4rem mint bar, 0.5rem padding. Logo at 2.5rem plus lowercase "vntotxt" wordmark at 1.25rem in a ghost button.
- **Links:** daisyUI horizontal menu, Ink text, cloud-grey pill on hover and active, 0.5rem radius.
- **Mobile:** hamburger ghost button opens a 13rem white dropdown with 1rem radius and Menu lift.
- **Breadcrumbs:** on plan pages, a 0.875rem daisyUI breadcrumb ("Home / Vntotxt PRO").
- **Footer:** centered mint footer, 2.5rem padding, three hover-underline links, three 2.25rem teal social icons, and the copyright line at 0.875rem. The thank-you page swaps in a teal footer with Teal Mist text.

### Chat Phone (signature)
The hero's phone mockup is the product demo. Inside a black daisyUI phone frame with a lime border sits a teal chat header (2.5rem circular logo avatar, "Vntotxt Bot" in white medium 1.25rem, a ghost kebab button), then two bubbles with 1.25rem side padding:
- **Outgoing voice note:** Bubble Outgoing fill, 0.75rem radius squared top-right, 11/12 width, right-aligned. A "Forwarded" row in Slate Meta with a mirrored share glyph, then a Voice Orange microphone avatar, a Slate play glyph, an SVG waveform (played bars in grey-blue, unplayed in light grey, a blue playhead dot) and a caption row with duration and time.
- **Incoming transcription:** Bubble Incoming fill, 0.75rem radius squared top-left, left-aligned, body text plus a caption timestamp.
- **Motion:** both bubbles are invisible until the phone scrolls into view, then pop in 0.75s apart.

### Illustrations & Icons
- Storyset-style flat illustrations of people (`*-bro.svg`, `*-pana.svg`) for each step and the features section. No photography.
- Boxicons (`bx`, `bxs`, `bxl`) for every glyph: features (world, face, search, user-voice), pricing checks, social logos, alert icons.

## Do's and Don'ts

### Do:
- **Do** alternate Mint Bubble and Cloud Grey bands section by section, with Paper White cards on top.
- **Do** use Deep Pine Teal for every action: CTA buttons, the highlighted headline phrase, badges and social glyphs.
- **Do** set h1 and section h2 in Ubuntu Bold and leave card titles, body and controls in the system sans.
- **Do** keep cards at 24rem, 1rem radius, 2rem padding, Card lift shadow, three-up on desktop and stacked with 1.5rem gaps on phones.
- **Do** mark steps and features with 3rem lime circle avatars containing a numeral or a boxicon.
- **Do** end a hero headline or primary CTA with a single emoji.
- **Do** animate entrances only: fade-up (0.8s ease-out) for sections, spring pop (0.5s) for cards and bubbles, triggered once at 10% visibility.
- **Do** ship every page in English and Spanish and check the longer Spanish copy in every button and heading.
- **Do** point every primary CTA at the WhatsApp bot link.

### Don't:
- **Don't** fill a text button, section or card with Lime Pop. Lime is a dot.
- **Don't** put Mint Bubble on a card, button, or badge. Mint is a band.
- **Don't** add shadows to buttons, inputs, badges, bubbles or bands. Only cards and the mobile menu lift.
- **Don't** apply Ubuntu to body copy, labels or buttons.
- **Don't** use sharp corners anywhere, or a radius smaller than 0.5rem on a control.
- **Don't** use the registered `night` daisyUI theme; the body is pinned to `data-theme="default"` and the site is light only.
- **Don't** introduce photography, gradients, or glassmorphism; the world is flat illustration on flat colour.
- **Don't** use Voice Orange outside the microphone avatar.
- **Don't** loop or auto-play motion; every animation runs once on entrance.
