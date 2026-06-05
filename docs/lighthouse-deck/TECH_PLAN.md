# `/investors/lighthouse` — Technical Plan (100vh tabbed, keyboard-navigable deck)

How to implement the Cochran Street deck page inside the existing Next.js 14 / Tailwind v4 /
Framer Motion app. Built to match repo conventions (`@/` alias, JSX, shadcn `ui/`, `FadeIn`,
`Container`).

---

## 1. Routing

```
src/app/investors/
  layout.jsx              # (optional) wrapper for all /investors/* pages
  lighthouse/
    page.jsx              # the deck page (renders <DeckShell slides={...} />)
    OUTLINE.md            # content outline (this folder)
    TECH_PLAN.md          # this file
```

- `page.jsx` is a **Server Component** that assembles slide data/imagery and renders the client
  deck shell. Per-page SEO via an exported `metadata` object:
  ```js
  export const metadata = {
    title: 'Cochran Street Apartments — Investor Opportunity',
    description: '80-unit, fully-entitled, shovel-ready multifamily site in Simi Valley.',
    robots: { index: false, follow: false }, // keep the offering private
  }
  ```

### Nav chrome: with or without RootLayout?
The deck wants the full viewport. Two options:

- **(Recommended) Bare deck** — do **not** wrap in `RootLayout`. The deck owns the screen;
  add a small fixed KAM logo + "Back to site" link in a corner. Cleanest fullscreen feel.
- **Chromed** — wrap in `RootLayout` and let each slide be `min-h-[calc(100dvh-…)]`. Easier
  brand consistency but the nav drawer competes with deck keys.

Because `app/layout.jsx` sets `<body className="flex min-h-full flex-col">` and the root
`<html className="bg-neutral-950">`, a bare deck already gets the dark backdrop for free.

---

## 2. Component architecture

```
src/components/deck/
  DeckShell.jsx        'use client'  — state, keyboard, transitions, tab rail, progress
  DeckTabs.jsx         tab/index rail (jump-to-slide)
  DeckProgress.jsx     "06 / 22" counter + dots
  Slide.jsx            generic 100vh slide frame (padding, footer watermark, layout slots)
  slides/              one component per slide (Cover, ExecSummary, Thesis, …)
    01-Cover.jsx
    02-ExecSummary.jsx
    ...
  primitives/          StatTile, StatBand, DataTable, Timeline, Pillar, TornadoChart, etc.
```

- **`DeckShell`** holds `activeIndex`, renders the active slide, the `DeckTabs` rail, and
  `DeckProgress`. It owns all keyboard + swipe handling and the Framer Motion transition.
- Each **slide** is a self-contained component receiving its data as props (keeps content
  editable and testable). Register them in an ordered array in `page.jsx`.

### Slide registry (in `page.jsx`)
```js
const slides = [
  { id: 'cover',        title: 'Cover',                Component: Cover },
  { id: 'exec',         title: 'Opportunity',          Component: ExecSummary },
  { id: 'thesis',       title: 'Why This Deal',        Component: Thesis },
  // … through 22 + 19b + appendix
]
```

---

## 3. 100vh slide frame

Use `100dvh` (dynamic viewport height) so mobile browser chrome doesn't clip slides:

```jsx
// Slide.jsx
export function Slide({ children, footer = 'CONFIDENTIAL & PROPRIETARY' }) {
  return (
    <section className="relative flex h-[100dvh] w-full flex-col overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-16 sm:px-8">
        {children}
      </div>
      <footer className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center
                         justify-between px-6 py-4 text-xs tracking-wide text-neutral-500">
        <span>KAM Coastal</span>
        <span>{footer}</span>
      </footer>
    </section>
  )
}
```

Two viable layout strategies for the deck body:

- **(A) Single mounted slide** (recommended for many data slides) — render only `slides[active]`
  and animate in/out with `AnimatePresence`. Lighter DOM, snappy.
- **(B) CSS scroll-snap track** — horizontal flex track, each child `h-[100dvh] w-screen
  shrink-0 snap-center`, container `snap-x snap-mandatory overflow-x-auto`. Native swipe +
  snap; sync `activeIndex` with an `IntersectionObserver`. Good if you want free-scroll feel.

Start with **(A)** — it pairs best with arrow-key jumps and a tab rail.

---

## 4. Keyboard + swipe navigation

```jsx
// inside DeckShell ('use client')
useEffect(() => {
  function onKey(e) {
    if (['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)) { e.preventDefault(); next() }
    else if (['ArrowLeft','ArrowUp','PageUp'].includes(e.key))      { e.preventDefault(); prev() }
    else if (e.key === 'Home')  go(0)
    else if (e.key === 'End')   go(slides.length - 1)
    else if (/^[1-9]$/.test(e.key)) go(Number(e.key) - 1) // optional quick-jump
  }
  window.addEventListener('keydown', onKey)
  return () => window.removeEventListener('keydown', onKey)
}, [activeIndex])
```

- `next/prev` clamp at the ends (no wrap) — or wrap if you prefer a loop.
- **Swipe:** use Framer Motion `drag="x"` on the slide with an `onDragEnd` threshold, or a small
  pointer/touch handler; call `next()/prev()` past ~60px.
- **Reduced motion:** read `useReducedMotion()` and set transition `duration: 0` when true
  (same pattern already used in `RootLayout.jsx`).
- **Deep-linking (nice-to-have):** sync `activeIndex` to the URL hash (`#6`) so a slide is
  shareable; read it on mount.

### Transition (Framer Motion)
```jsx
<AnimatePresence mode="wait" custom={direction}>
  <motion.div
    key={activeIndex}
    custom={direction}
    initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
    transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: 'easeOut' }}
  >
    <ActiveSlide />
  </motion.div>
</AnimatePresence>
```

---

## 5. Tab rail + progress

- **`DeckTabs`** — fixed vertical rail (right side on desktop) or top strip; list slide titles
  or numbers; `aria-current` on active; click → `go(i)`. Collapses to a **dot strip** on mobile.
- **`DeckProgress`** — `"{active+1} / {total}"` plus a thin progress bar (`width: (active+1)/total`).
- Accessibility: rail is a `<nav aria-label="Slides">`; buttons are real `<button>`s; the deck
  region is `role="region" aria-roledescription="carousel"`; announce slide changes via an
  `aria-live="polite"` element.

---

## 6. Reusable primitives to build (used across many slides)

| Primitive | Used on slides | Notes |
|---|---|---|
| `StatTile` / `StatBand` | 1,2,9,13,19 | big number + label; grid of 4–6 |
| `DataTable` | 9,10,11,12 | styled table; right-align numerics; total row emphasis |
| `Pillar` (icon+title+copy) | 3 | 3-col thesis cards |
| `Timeline` | 7,13,17,20 | horizontal milestones w/ status pills |
| `Checklist` (✓ rows) | 6,18 | green-check entitlement / included-items |
| `BarChartCard` | 12,14 | value ramp + cash-flow waterfall (recharts or hand-rolled SVG) |
| `TornadoChart` | 16 | sensitivity; can be horizontal bars |
| `TeamGrid` | 19 | reuse styling from existing `Team.jsx` (grayscale cards + dialog) |
| `ProjectCards` / `LogoWall` | 19b | pull from `src/app/work/*` + `src/images/clients/*` |
| `MapFigure` | 4,5 | static map image + labeled callouts |

Charts: the repo has no chart lib yet. Lightweight options — **recharts** (easy), **visx**,
or hand-rolled SVG for full control of the brand look. Add to `package.json` if used.

---

## 7. Content & data sourcing (wire-up)

- **About Us (Slide 19) + Track Record (19b):** reuse existing repo content rather than
  re-authoring.
  - Team bios/photos: `src/components/Team.jsx` + `src/images/team/*.jpeg` — consider extracting
    the `team` array into `src/lib/team.js` so both `/about` and the deck import it (DRY).
  - Past projects: read from `loadCaseStudies()` (`src/lib/mdx.js`) and filter to a curated set,
    or hard-code a short list of {title, role, stat, image, href} cards for the deck.
  - Stats ($300M+, 20+, 150+ acres): from `src/app/about/page.jsx` `StatList`.
- **Financials:** hard-code the proforma tables as data objects in
  `src/app/investors/lighthouse/data/financials.js` (single source of truth, easy to update).
- **Entitlement facts:** constants in `data/entitlement.js` (Reso 2025-23, 5–0, Jul 21 2025,
  §15332, 3-yr clock) — verified against `Executed-Resolution-Lighthouse.pdf`.
- **Imagery:** drop provided renderings/exhibits into
  `src/app/investors/lighthouse/images/` (co-located) and import via `next/image`.
  Note: `next.config.mjs` already allow-lists remote domains if any assets are hosted off-repo.

---

## 8. Styling notes (match the brand)

- Use the existing neutral palette: dark slides `bg-neutral-950 text-white`, light/data slides
  on `bg-white text-neutral-950`; accents via `neutral-*`. The deck can alternate dark/light to
  create rhythm (Cover/Thesis/Why-Now dark; data slides light).
- Headings: `font-display` (Mona Sans wide), the template's `text-5xl/7xl` scale.
- Reuse `FadeIn`/`FadeInStagger` for in-slide element reveals.
- Respect `--radius-4xl` (2.5rem) for big panels to match the homepage "Clients" card look.

---

## 9. Build order (suggested)

1. Scaffold `DeckShell` + `Slide` + keyboard/tabs/progress with placeholder slides (prove the
   100dvh + arrow-key + tab UX first).
2. Build primitives (`StatTile`, `DataTable`, `Timeline`, `Checklist`).
3. Fill content slides from `OUTLINE.md` (data slides first — they're decided; market/sensitivity
   last since they have placeholders).
4. Wire About Us / Track Record from existing repo content.
5. Add charts (12, 14, 16).
6. Drop in renderings when provided; finalize cover.
7. QA: keyboard nav, mobile swipe, reduced-motion, print/PDF export (optional `@media print`).

---

## 10. Open decisions for Mike
- **Chrome vs. bare** deck (recommend bare with corner logo).
- **Financial framing A vs. B** on the headline (recommend A: lead with developer returns).
- **Merge Slide 15 into 18?** (structure + ask) — fewer slides, or keep separate for clarity.
- **Chart library** preference (recharts vs. hand-rolled SVG).
- **Private/noindex** — set `robots: noindex` and/or gate behind a simple password? (Currently
  planned noindex; data-room link handles the real gating.)
