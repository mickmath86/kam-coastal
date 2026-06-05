# KAM Coastal — Design & Architecture Reference

> Marketing website for **KAM Coastal**, a real estate advisory firm serving for-profit and
> mission-driven organizations (churches, schools, nonprofits) with development advisory,
> portfolio analysis, brokerage, and project stewardship.
>
> Live: https://www.kamcoastal.com · Repo: `mickmath86/kam-coastal`

This document describes how the site is built — its stack, architecture, design system,
component library, content model, and integrations — so anyone (or any agent) can extend it
consistently.

---

## 1. Overview

KAM Coastal is built on the **Tailwind Plus "Studio"** template (an agency/portfolio template
by Tailwind Labs), customized for KAM's brand and content. The original template structure is
largely intact; KAM-specific work lives in the homepage, hero, contact form, offices, client
lists, and MDX case studies.

It is a **statically-oriented marketing site** — content is authored in MDX, rendered at build
time, with a small amount of client interactivity (nav drawer, contact form, scroll/animation).

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js 14** (App Router) | `src/app/` directory, React Server Components by default |
| Language | **JavaScript (JSX)** | Not TypeScript. `jsconfig.json` sets `@/*` → `src/*` |
| UI library | **React 18** | |
| Styling | **Tailwind CSS v4** | CSS-first config via `@theme` in `src/styles/tailwind.css` |
| Component primitives | **shadcn/ui** (new-york style) + **Radix UI** | `src/components/ui/`, dialog / scroll-area / tabs / slot |
| Headless components | **Headless UI v2** | Used by template interactions |
| Animation | **Framer Motion v10** | `FadeIn`, layout animations, nav transitions |
| Icons | **Lucide** (primary) + **Heroicons** | `iconLibrary: lucide` in `components.json` |
| Content | **MDX** (`@next/mdx` + `@mdx-js`) | Case studies & blog posts authored as `page.mdx` |
| Syntax highlighting | **Shiki** + `@leafac/rehype-shiki` | `css-variables` theme |
| Toasts | **Sonner** | Mounted globally in `app/layout.jsx` |
| Analytics | **Vercel Analytics** (`@vercel/analytics`) | |
| Font | **Mona Sans** (variable) | Self-hosted woff2, used for both sans & display |
| Deployment | **Vercel** | (Vercel connector present; analytics confirms) |
| Node | **22.17.1** (`.nvmrc`) | `check-node.js` + `scripts/fix-lightningcss.js` postinstall |

### Utility helpers
- `src/lib/utils.js` — `cn()` = `twMerge(clsx(...))`, the standard shadcn class-merge helper.
- `clsx` is used directly throughout for conditional classes.

---

## 3. Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── layout.jsx            # Root <html>/<body>, metadata, Analytics, Toaster
│   ├── page.jsx              # Homepage (Hero, Clients, Case Studies, Testimonial, Services, Contact)
│   ├── not-found.jsx         # 404
│   ├── about/page.jsx
│   ├── process/page.jsx
│   ├── contact/page.jsx
│   ├── blog/                 # MDX articles
│   │   ├── page.jsx          # Blog index
│   │   ├── wrapper.jsx       # MDX layout for articles
│   │   └── <slug>/page.mdx   # Individual posts (+ co-located images)
│   └── work/                 # MDX case studies
│       ├── page.jsx          # Work index
│       ├── wrapper.jsx       # MDX layout for case studies
│       └── <slug>/page.mdx   # Individual case studies (+ co-located images)
├── components/               # App-specific React components (template + custom)
│   └── ui/                   # shadcn/ui primitives (button, dialog, scroll-area, tabs)
├── lib/                      # mdx.js (content loader), utils.js (cn), formatDate.js
├── images/                   # Static imports: clients/, logos/, team/, projects/heros/
├── fonts/                    # Mona-Sans.var.woff2
└── styles/                   # tailwind.css, base.css (font-face), typography.css
```

### Path aliases (`jsconfig.json` + `components.json`)
- `@/*` → `src/*`
- `@/components`, `@/components/ui`, `@/lib`, `@/lib/utils`, `@/hooks`

---

## 4. Design System

### 4.1 Typography
- **Single typeface: Mona Sans** (variable, weight 200–900, stretch 75–125%), self-hosted in
  `src/styles/base.css` via `@font-face`.
- Two roles, both Mona Sans:
  - `--font-sans` — body text.
  - `--font-display` — headings, with `font-variation-settings: 'wdth' 125` (extra-wide stretch)
    for a distinctive condensed-vs-wide display look.
- A custom type scale is defined in `@theme` (`tailwind.css`), overriding Tailwind defaults
  (`--text-*: initial`). Scale runs `xs` (0.75rem) → `7xl` (4rem), each with an explicit
  line-height.
- Long-form MDX content is styled by the `.typography` class in `src/styles/typography.css`
  (imported into the `components` layer): scoped heading sizes, list markers, tables, Shiki
  code-block color variables, etc.

### 4.2 Color
The template ships with a **shadcn-style OKLCH token system** (`tailwind.css`) supporting light
and dark themes via CSS variables and a `.dark` class (`@custom-variant dark`):

- Semantic tokens: `background`, `foreground`, `card`, `popover`, `primary`, `secondary`,
  `muted`, `accent`, `destructive`, `border`, `input`, `ring`, `chart-1..5`, plus a full
  `sidebar-*` set. Exposed to Tailwind via `@theme inline` (`--color-*`).
- `--radius: 0.625rem` base, with derived `radius-sm/md/lg/xl` and a custom `--radius-4xl: 2.5rem`
  (used for the large rounded "Clients" panel).

**In practice, the visible KAM brand palette is monochrome neutral**, applied with Tailwind
`neutral-*` utilities rather than the semantic tokens:
- Dark sections / nav / footer: `bg-neutral-950` (near-black) with `text-white` / `neutral-300`.
- Light content area: white background with `neutral-600`/`neutral-950` text.
- The main content panel is lifted onto a white card with `40px` top corner radius over a
  near-black page background (`<html className="bg-neutral-950">`).
- A subtle decorative `GridPattern` (neutral-50 fill, faint stroke) sits behind content.

> Note: the semantic OKLCH token system and shadcn `ui/button` variants exist but the site's
> own buttons/links mostly use the template's custom `Button` component and neutral utilities.
> There's an overlap between the template's design language (neutral utilities) and the
> shadcn token system — keep this in mind when adding new UI.

### 4.3 Spacing & layout rhythm
- Centered layout via the `Container` component (`max-w-7xl`, responsive horizontal padding).
- Consistent vertical rhythm with the recurring `mt-24 sm:mt-32 lg:mt-40` (and `lg:mt-56`)
  section spacing pattern throughout the homepage and wrappers.

### 4.4 Motion
- `FadeIn` / `FadeInStagger` (Framer Motion) wrap most sections for on-scroll reveal.
- The mobile/expandable navigation uses Framer Motion `layout` animations and respects
  `useReducedMotion()`.

---

## 5. Component Library

### Layout & chrome
- **`RootLayout`** — the app shell (client component). Provides the header with KAM logo,
  "Contact us" button, an expandable full-screen navigation drawer (Our Work / About Us /
  Our Process / Blog), the offices block, the rounded white content panel, `GridPattern`
  background, and `Footer`. Re-keyed on `pathname` so the panel re-animates per route.
- **`Container`** — width-constraining wrapper used everywhere.
- **`Footer`**, **`Offices`**, **`SocialMedia`** — site chrome.
  - `Offices` is KAM-specific: single office, "Newbury Park" — 1000 Business Center Circle #112,
    Thousand Oaks, CA 91320. (A second office is commented out.)
  - `SocialMedia` still has template-default profile links (Facebook/Instagram/GitHub/Dribbble
    pointing at root domains) and is currently commented out in the nav — **needs real KAM links
    before being re-enabled.**

### Hero & marketing sections
- **`HeroMain`** — KAM custom hero. Headline "Empowering purpose-driven Real Estate", subcopy,
  "Our Work" CTA, angled SVG mask over a hero image (`projects/heros/wciu.jpg`). Uses the
  shadcn `ui/button`.
- **`SectionIntro`**, **`PageIntro`** — eyebrow + title + lede blocks for section/page headers.
- **`List` / `ListItem`** — used for the Services list on the homepage.
- **`StylizedImage`**, **`GrayscaleTransitionImage`**, **`ImageGallery`** — image treatments
  (the grayscale transition is used as the case-study hero).
- **`Testimonial`** — pull-quote block (homepage uses a Paul Chan / Crazy Love quote).
- **`StatList`**, **`GridList`**, **`TagList`**, **`Team`**, **`Blockquote`**, **`Border`**,
  **`PageLinks`** — template content components reused across pages.
- **`CaseStudiesWithFilter`** / **`WorkCaseStudiesWithFilter`** — render case studies with
  filtering.
- **`Logo` / `Logomark`** — template logos (currently bypassed; header renders
  `images/logos/kam-logo.svg` directly via `next/image`).
- `hero5.jsx`, `hero214.jsx` — additional/experimental hero variants present in the repo.

### shadcn/ui primitives (`src/components/ui/`)
`button.jsx` (CVA variants: default/destructive/outline/secondary/ghost/link × sizes),
`dialog.jsx`, `scroll-area.jsx`, `tabs.jsx`. These use the OKLCH semantic tokens and `cn()`.

### MDX rendering
- **`MDXComponents`** — element overrides for MDX content.
- **`mdx-components.jsx`** (root) — global MDX component map.

---

## 6. Content Model (MDX)

Content is file-system driven. The loader in **`src/lib/mdx.js`** globs `**/page.mdx`:

- `loadCaseStudies()` → reads `src/app/work/**/page.mdx`, pulls the exported `caseStudy` object.
- `loadArticles()` → reads `src/app/blog/**/page.mdx`, pulls the exported `article` object.
- Both return entries sorted by `date` descending, with a derived `href`.

### Case study schema (exported `caseStudy` from each `work/<slug>/page.mdx`)
```js
export const caseStudy = {
  client,        // e.g. 'William Carey International University'
  title,         // headline, e.g. '$47 Million Sale of a Historic 15-Acre Campus'
  description,   // short summary (used for SEO + intro)
  summary,       // string[] — paragraphs
  logo,          // imported SVG
  image,         // { src: importedImage } — hero
  date,          // 'YYYY-MM' (drives sort + displayed Year)
  service,       // e.g. 'Brokerage'
  featured,      // boolean — homepage shows only featured === true
  testimonial,   // { author: { name, role }, content }
}
export const metadata = { title, description }  // Next.js page metadata
```

### MDX build pipeline (`next.config.mjs`)
- `pageExtensions` includes `mdx`.
- Remark: `remark-gfm`, `remark-unwrap-images`, and `unified-conditional` that injects the right
  layout wrapper by path — `src/app/blog/**` → `@/app/blog/wrapper`, `src/app/work/**` →
  `@/app/work/wrapper` — passing the exported `article` / `caseStudy` metadata as a prop.
- Rehype: `@leafac/rehype-shiki` (Shiki highlighter, `css-variables` theme), and
  `remark-rehype-wrap` to wrap top-level content in a `<Typography>` element.
- Recma: `recma-import-images` so images referenced in MDX are imported/optimized.
- `next/image` remote domains allow-listed: `deifkwefumgah.cloudfront.net`,
  `cdn.prod.website-files.com`.

### Authoring a new case study
1. Create `src/app/work/<slug>/page.mdx`.
2. Co-locate `hero.jpg` (+ any inline images) in that folder.
3. Export `caseStudy` (schema above) and `metadata`. Set `featured: true` to surface on the
   homepage.
4. Add the client logo under `src/images/clients/<client>/` if showcasing in the client grid.

---

## 7. Integrations

### Contact form → GoHighLevel (LeadConnector)
`src/components/ContactForm.jsx` is a client component that POSTs JSON to a **GoHighLevel
inbound webhook**:
```
https://services.leadconnectorhq.com/hooks/.../webhook-trigger/...
```
- Fields: `name`, `email`, `company`, `phone`, `message`, and a `tag` radio
  (`Property Owner/Seller`, `Faith Based Organization`, `Investor/Capital Partner`,
  `General Inquiry/Collaboration`).
- Client-side required-field validation; success/error feedback via Sonner toasts.
- The webhook URL is hard-coded in the component (not an env var).

> Improvement opportunity: move the webhook URL to an environment variable and consider a
> server action / route handler so the endpoint isn't exposed client-side.

### Analytics
Vercel Analytics is mounted globally in `app/layout.jsx`.

---

## 8. SEO & Metadata
- Root `metadata` in `app/layout.jsx`: title template `'%s - KAM'`, default
  "KAM Coastal - Empowering Purpose-driven Real Estate", and Open Graph tags
  (site `https://www.kamcoastal.com`, WCIU hero OG image).
- Per-page `metadata` exports (case studies/blog supply their own title/description).

---

## 9. Known Gaps / TODO (observed in code)

These are leftovers/inconsistencies worth cleaning up:

- **Stray empty `=` file** at repo root — should be deleted (likely an accidental shell redirect).
- **`SocialMedia` links are template defaults** (root facebook/instagram/github/dribbble) and
  the block is commented out in the nav — replace with real KAM profiles before enabling.
- **`Logo`/`Logomark` components are bypassed**; header uses `kam-logo.svg` directly. Decide on
  one approach.
- **Homepage `metadata.description`** still reads "a development studio working at the
  intersection of design and technology" (template copy) — should be KAM-specific.
- **Typo:** "Frontiir Ventures" / "Cirlce" in the client list and Offices block.
- **Dual styling systems** (template neutral utilities vs. shadcn OKLCH semantic tokens) coexist
  — standardize when adding new UI.
- **Hardcoded GoHighLevel webhook URL** — externalize to env.
- Commented-out alternate hero variants (`hero5.jsx`, `hero214.jsx`) and dead JSX blocks in
  `page.jsx` / `RootLayout.jsx` — prune when stable.

---

## 10. Local Development

```bash
nvm use            # 22.17.1
npm install        # runs scripts/fix-lightningcss.js postinstall
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve production build
npm run lint       # next lint (eslint-config-next)
```

Formatting: Prettier + `prettier-plugin-tailwindcss` (`prettier.config.js`).
Linting: ESLint flat/next config (`.eslintrc.json`).

---

*Generated from a review of the `kam-coastal` repository (default branch `main`).*
