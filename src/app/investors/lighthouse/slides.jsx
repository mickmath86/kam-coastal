'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Slide } from '@/components/deck/Slide'
import {
  SlideHeading,
  StatGrid,
  StatTile,
  DataTable,
  Checklist,
  Timeline,
  BarChart,
  ProjectCard,
  ImagePlaceholder,
  Eyebrow,
} from '@/components/deck/primitives'
import {
  project,
  entitlement,
  thesis,
  execStats,
  market,
  unitMix,
  sourcesUses,
  proforma,
  valuation,
  returns,
  cashflow,
  sensitivity,
  transaction,
  process,
  sponsor,
} from './data/deckData'
import { deckTeam } from './data/team'
import { trackRecord } from './data/projects'

/* 01 — COVER ----------------------------------------------------------- */
function Cover() {
  return (
    <Slide tone="dark" padded={false}>
      <div className="relative flex h-full w-full flex-col">
        {/* hero image area (placeholder until renderings provided) */}
        <ImagePlaceholder
          dark
          label="Hero rendering — Exhibit A-3.2 Perspective Views"
          className="absolute inset-0 rounded-none border-0 bg-neutral-900"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/30" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pb-28 sm:px-10 lg:px-12">
          <Eyebrow dark>{project.address}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-neutral-200">{project.tagline}</p>
          <p className="mt-2 max-w-2xl text-base text-neutral-400">{project.subtagline}</p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-display text-sm font-semibold text-white/80">
            <span>80 Units</span><span className="text-white/30">·</span>
            <span>16 Affordable</span><span className="text-white/30">·</span>
            <span>5–0 Council Approval</span><span className="text-white/30">·</span>
            <span>CEQA-Exempt</span>
          </div>
          <p className="mt-10 text-xs text-white/40">Use ← → or the arrows to navigate</p>
        </div>
      </div>
    </Slide>
  )
}

/* 02 — EXECUTIVE SUMMARY ----------------------------------------------- */
function ExecSummary() {
  return (
    <Slide tone="dark">
      <SlideHeading
        dark
        eyebrow="The Opportunity"
        title="A fully-entitled, shovel-ready 80-unit community"
        lede="A CEQA-exempt, unanimously approved 80-unit site at 4910 Cochran Street — ready to move to vertical construction. The entitlement risk is already retired."
      />
      <div className="mt-10">
        <StatGrid items={execStats} dark cols={3} />
      </div>
    </Slide>
  )
}

/* 03 — INVESTMENT THESIS ----------------------------------------------- */
function Thesis() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="Why This Deal" title="Why Cochran Street" />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {thesis.map((p, i) => (
          <div key={i} className="flex flex-col rounded-3xl border border-neutral-950/10 bg-neutral-50 p-7">
            <span className="font-display text-5xl font-semibold text-neutral-300">0{i + 1}</span>
            <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">{p.title}</h3>
            <p className="mt-3 flex-1 text-neutral-600">{p.body}</p>
            <p className="mt-5 font-display text-sm font-semibold text-emerald-700">{p.stat}</p>
          </div>
        ))}
      </div>
    </Slide>
  )
}

/* 04 — MARKET OVERVIEW ------------------------------------------------- */
function MarketOverview() {
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Market Overview"
        title="A resilient, supply-constrained submarket"
        lede="Simi Valley pairs a strong employment base, top schools, and commuter access with steady rent growth and limited new deliveries."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <StatGrid items={market.stats} cols={2} />
          <p className="mt-4 text-xs text-neutral-400">
            Placeholder figures — fill with fresh Simi Valley / Ventura County submarket research.
          </p>
        </div>
        <ImagePlaceholder label="Submarket map + rent/vacancy charts" className="min-h-[260px]" />
      </div>
    </Slide>
  )
}

/* 05 — THE SITE -------------------------------------------------------- */
function TheSite() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="The Site" title="4910 Cochran Street" />
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <DetailRow label="Parcel" value={`${project.lot} · APN ${project.apn}`} />
          <DetailRow label="Building" value={`${project.units} units · ${project.stories} stories · ${project.affordableUnits} affordable`} />
          <DetailRow label="Area" value={`${project.gsf.toLocaleString()} GSF · ${project.nrsf.toLocaleString()} net rentable SF`} />
          <DetailRow label="Context" value="Infill site with frontage on Cochran Street; surrounded by established residential and commercial uses." />
        </div>
        <ImagePlaceholder label="Aerial + location map of 4910 Cochran Street" className="min-h-[300px]" />
      </div>
    </Slide>
  )
}

function DetailRow({ label, value }) {
  return (
    <div className="rounded-2xl border border-neutral-950/10 bg-neutral-50 p-5">
      <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500">{label}</p>
      <p className="mt-1 text-neutral-800">{value}</p>
    </div>
  )
}

/* 06 — THE ENTITLEMENTS ------------------------------------------------ */
function Entitlements() {
  return (
    <Slide tone="dark">
      <SlideHeading
        dark
        eyebrow="The Entitlements"
        title="Fully entitled — the hard part is done"
        lede={`Planned Development Permit ${entitlement.pdPermit} + Tentative Parcel Map ${entitlement.parcelMap}, approved by ${entitlement.resolution}.`}
      />
      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <Checklist dark items={entitlement.facts} />
        <div className="flex flex-col justify-between gap-6">
          <div className="rounded-3xl border border-amber-400/30 bg-amber-400/[0.06] p-6">
            <p className="font-display text-sm font-semibold uppercase tracking-wider text-amber-300">Urgency</p>
            <p className="mt-2 text-neutral-200">
              Approval expires if use is not commenced within {entitlement.clockYears} years of approval
              ({entitlement.clockExpiry}).
            </p>
          </div>
          <ImagePlaceholder dark label="Resolution cover + exhibit thumbnails" className="min-h-[180px]" />
        </div>
      </div>
    </Slide>
  )
}

/* 07 — PATH TO PERMITS ------------------------------------------------- */
function PathToPermits() {
  const steps = [
    { title: 'Entitlement approved', detail: '5–0, Jul 2025', done: true },
    { title: 'Final parcel map', detail: 'Nearly complete' },
    { title: 'Conditions of approval', detail: 'Inherited by buyer' },
    { title: 'Building permits', detail: 'Plan check' },
    { title: 'Vertical construction', detail: 'Shovel-ready' },
  ]
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Entitlement Status"
        title="~95% of pre-development risk retired"
        lede="What remains is execution, not approval risk."
      />
      <div className="mt-12">
        <Timeline steps={steps} />
      </div>
      <p className="mt-8 max-w-3xl text-neutral-600">
        The buyer steps in shovel-ready — no rezoning, no CEQA, no entitlement fight. Remaining items
        inherited: conditions of approval, development impact fees (DIFs), final map recordation, and plan-check.
      </p>
    </Slide>
  )
}

/* 08 — DESIGN & RENDERINGS --------------------------------------------- */
function Design() {
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Project Design"
        title="A Class-A community, already designed"
        lede="Approved architecture, amenities, and site layout from the entitlement exhibit set."
      />
      <div className="mt-8 grid flex-1 grid-cols-2 gap-4">
        <ImagePlaceholder label="Exterior rendering (A-3.2)" />
        <ImagePlaceholder label="Site plan (A-1.x)" />
        <ImagePlaceholder label="Elevations (A-2.x)" />
        <ImagePlaceholder label="Amenity / unit layouts" />
      </div>
    </Slide>
  )
}

/* 09 — UNIT MIX -------------------------------------------------------- */
function UnitMix() {
  const rows = [
    ...unitMix.rows.map((r) => ({ cells: [r.type, r.units, r.sf, r.rent, r.psf] })),
    { emphasis: true, cells: [unitMix.total.type, unitMix.total.units, unitMix.total.sf, unitMix.total.rent, unitMix.total.psf] },
  ]
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="Unit Mix & Rent Roll" title="80 units · efficient, market-tested mix" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <DataTable
          columns={['Unit Type', 'Units', 'Avg SF', 'Base Rent', 'Rent PSF']}
          align={['left', 'right', 'right', 'right', 'right']}
          rows={rows}
        />
        <div className="space-y-4">
          <div className="rounded-2xl border border-neutral-950/10 bg-neutral-50 p-5">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500">Other Income</p>
            <ul className="mt-3 space-y-2 text-sm">
              {unitMix.otherIncome.map((o, i) => (
                <li key={i} className={clsx('flex justify-between', o.emphasis && 'border-t border-neutral-950/10 pt-2 font-semibold text-neutral-950')}>
                  <span className="text-neutral-600">{o.label}</span>
                  <span className="tabular-nums">{o.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-neutral-600">
            Net rentable {project.nrsf.toLocaleString()} SF · efficiency {project.efficiency} ·
            {' '}{project.affordableUnits} affordable units per entitlement.
          </p>
        </div>
      </div>
    </Slide>
  )
}

/* 10 — SOURCES & USES -------------------------------------------------- */
function SourcesUses() {
  const rows = [
    ...sourcesUses.uses.map((u) => ({ cells: [u.use, u.psf, u.total, u.perUnit] })),
    { emphasis: true, cells: [sourcesUses.usesTotal.use, sourcesUses.usesTotal.psf, sourcesUses.usesTotal.total, sourcesUses.usesTotal.perUnit] },
  ]
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Development Summary"
        title={`Total capitalization: ${sourcesUses.totalCap}`}
        lede={`${sourcesUses.perUnit} per unit`}
      />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="space-y-4">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500">Sources</p>
          {sourcesUses.sources.map((s, i) => (
            <div key={i} className="rounded-2xl border border-neutral-950/10 bg-neutral-50 p-5">
              <div className="flex items-baseline justify-between">
                <span className="text-neutral-700">{s.label}</span>
                <span className="font-display text-2xl font-semibold text-neutral-950">{s.value}</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-200">
                <div className="h-full rounded-full bg-neutral-900" style={{ width: s.pct }} />
              </div>
              <span className="mt-1 block text-xs text-neutral-500">{s.pct} of total</span>
            </div>
          ))}
        </div>
        <div>
          <DataTable
            columns={['Use', 'PSF', 'Total', '$/Unit']}
            align={['left', 'right', 'right', 'right']}
            rows={rows}
          />
          <p className="mt-3 text-sm text-neutral-600">{sourcesUses.financingNotes}</p>
        </div>
      </div>
    </Slide>
  )
}

/* 11 — PRO FORMA P&L --------------------------------------------------- */
function Proforma() {
  const rows = proforma.rows.map((r) => ({ emphasis: r.emphasis, cells: [r.line, r.untrended, r.stab, r.dispo] }))
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="Pro Forma P&L (Stabilized)" title="Stabilized NOI ~$1.8M at a 70% margin" />
      <div className="mt-8">
        <DataTable
          columns={['', 'Untrended', 'Stabilization', 'Disposition']}
          align={['left', 'right', 'right', 'right']}
          rows={rows}
        />
      </div>
    </Slide>
  )
}

/* 12 — VALUATION & EXIT ------------------------------------------------ */
function Valuation() {
  const rows = valuation.rows.map((r) => ({ emphasis: r.emphasis, cells: [r.line, r.stab, r.refi, r.exit] }))
  return (
    <Slide tone="dark">
      <SlideHeading dark eyebrow="Valuation & Exit" title="~$47.5M stabilized exit (~$594K / door)" />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <DataTable
          dark
          columns={['', 'Stabilization', 'Refi', 'Exit']}
          align={['left', 'right', 'right', 'right']}
          rows={rows}
        />
        <div className="flex flex-col">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-400">Gross value ($M)</p>
          <div className="mt-4 flex-1">
            <BarChart dark data={valuation.ramp} format={(v) => `$${v}M`} height={240} />
          </div>
          <p className="mt-4 text-sm text-neutral-400">
            Against ~$47.5M finished value, a $5M entitled-land basis is ~10.5% of value. Cost of sale 4%.
          </p>
        </div>
      </div>
    </Slide>
  )
}

/* 13 — RETURNS --------------------------------------------------------- */
function Returns() {
  return (
    <Slide tone="dark">
      <SlideHeading dark eyebrow="Projected Returns" title="11.4% unlevered / 14.4% levered IRR" />
      <div className="mt-10">
        <StatGrid items={returns.tiles} dark cols={3} />
      </div>
      <p className="mt-8 text-neutral-400">{returns.hold}</p>
    </Slide>
  )
}

/* 14 — CASH FLOW ------------------------------------------------------- */
function CashFlow() {
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Annual Cash Flow Model"
        title="Capital in Years 1–3, cash out from Year 4"
        lede={cashflow.note}
      />
      <div className="mt-8 flex-1">
        <BarChart data={cashflow.years} format={(v) => `$${v}M`} height={300} />
      </div>
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <Pill label="DSCR ramp" value={cashflow.dscr} />
        <Pill label="Debt yield" value={cashflow.debtYield} />
      </div>
    </Slide>
  )
}

function Pill({ label, value }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-neutral-950/10 bg-neutral-50 px-4 py-2">
      <span className="text-neutral-500">{label}</span>
      <span className="font-display font-semibold text-neutral-950">{value}</span>
    </span>
  )
}

/* 15 — TRANSACTION STRUCTURE ------------------------------------------ */
function Structure() {
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Proposed Structure"
        title="Structure: outright sale of the entitled parcel"
        lede="This is a land sale, not a fund raise — the buyer acquires the shovel-ready parcel and captures 100% of the build-out upside."
      />
      <div className="mt-10 grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-3xl border border-neutral-950/10 bg-neutral-50 p-7 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-500">Seller</p>
          <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">KAM Coastal</p>
          <p className="mt-2 text-sm text-neutral-600">Entitled parcel + full approved work product</p>
        </div>
        <div className="flex items-center justify-center">
          <span className="font-display text-3xl text-neutral-400">→</span>
        </div>
        <div className="rounded-3xl border border-emerald-600/30 bg-emerald-50 p-7 text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-emerald-700">Buyer</p>
          <p className="mt-2 font-display text-2xl font-semibold text-neutral-950">Developer / GC</p>
          <p className="mt-2 text-sm text-neutral-600">Executes vertical construction · {transaction.price}</p>
        </div>
      </div>
    </Slide>
  )
}

/* 16 — SENSITIVITY ----------------------------------------------------- */
function Sensitivity() {
  const rows = sensitivity.map((s) => ({ cells: [s.scenario, s.impact] }))
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Sensitivity Analysis"
        title="The entitled basis protects the downside"
        lede="Stress-tested across the variables that matter most."
      />
      <div className="mt-8">
        <DataTable columns={['Scenario', 'IRR Impact']} align={['left', 'right']} rows={rows} />
        <p className="mt-3 text-xs text-neutral-400">
          Pull exact stress-case values from the proforma Sensitivity tab.
        </p>
      </div>
    </Slide>
  )
}

/* 17 — WHY NOW --------------------------------------------------------- */
function WhyNow() {
  return (
    <Slide tone="dark">
      <SlideHeading dark eyebrow="Why Now" title="The entitlement clock is running" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <BigPoint k="3-yr" t="Commencement deadline" b={`Construction must commence within 3 years of the July 2025 approval (${entitlement.clockExpiry}).`} />
        <BigPoint k="↓" t="Constrained supply" b="High barriers to entry and persistent multifamily demand across Ventura County." />
        <BigPoint k="1st" t="First-mover advantage" b="A rare shovel-ready site — be first to move on entitled product." />
      </div>
    </Slide>
  )
}

function BigPoint({ k, t, b }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
      <span className="font-display text-4xl font-semibold text-emerald-300">{k}</span>
      <h3 className="mt-4 font-display text-lg font-semibold text-white">{t}</h3>
      <p className="mt-2 text-neutral-400">{b}</p>
    </div>
  )
}

/* 18 — THE ASK --------------------------------------------------------- */
function TheAsk() {
  return (
    <Slide tone="dark">
      <div className="grid flex-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow dark>The Ask</Eyebrow>
          <p className="mt-4 font-display text-6xl font-semibold tracking-tight text-white sm:text-7xl">
            {transaction.price}
          </p>
          <p className="mt-3 text-lg text-neutral-300">
            For a shovel-ready, fully-entitled 80-unit site.
          </p>
          <p className="mt-2 text-sm text-neutral-500">{transaction.priceContext}</p>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-400">Ideal Buyer</p>
            <p className="mt-2 text-neutral-200">{transaction.buyerProfile}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-400">What's included</p>
          <div className="mt-5">
            <Checklist dark items={transaction.included} />
          </div>
        </div>
      </div>
    </Slide>
  )
}

/* 19 — ABOUT / TEAM ---------------------------------------------------- */
function AboutTeam() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="About KAM Coastal" title="A mission-driven development & brokerage firm" lede={sponsor.blurb} />
      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        {sponsor.stats.map((s, i) => (
          <StatTile key={i} value={s.value} label={s.label} />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {deckTeam.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-2xl bg-neutral-100">
            <div className="relative aspect-[3/4]">
              <Image src={p.image} alt={p.name} className="h-full w-full object-cover grayscale" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 to-transparent p-3">
                <p className="font-display text-sm font-semibold leading-tight text-white">{p.name}</p>
                <p className="text-[11px] text-neutral-300">{p.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  )
}

/* 19b — TRACK RECORD --------------------------------------------------- */
function TrackRecord() {
  const featured = trackRecord.slice(0, 6)
  return (
    <Slide tone="light" dense>
      <SlideHeading size="sm" eyebrow="Our Track Record" title="Proven on mission-driven & institutional real estate" />
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.client} project={p} compact />
        ))}
      </div>
    </Slide>
  )
}

/* 20 — NEXT STEPS ------------------------------------------------------ */
function NextSteps() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="Next Steps" title="A clear path to close" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <div key={p.step} className="rounded-3xl border border-neutral-950/10 bg-neutral-50 p-6">
            <span className="font-display text-4xl font-semibold text-neutral-300">{p.step}</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-neutral-950">{p.title}</h3>
            <p className="mt-2 text-sm text-neutral-600">{p.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-neutral-950/10 bg-neutral-50 p-6">
        <p className="font-display text-sm font-semibold text-neutral-950">KAM Coastal · Keith Mathias, Deal Lead</p>
        <p className="mt-1 text-sm text-neutral-600">kamcoastal.com · [phone] · [email] · Data room: [link]</p>
      </div>
    </Slide>
  )
}

/* 21 — DISCLAIMER ------------------------------------------------------ */
function Disclaimer() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="Important Disclosures" title="Disclaimer" />
      <p className="mt-8 max-w-4xl text-sm leading-relaxed text-neutral-500">
        This presentation is for informational purposes only and does not constitute an offer to sell or a
        solicitation of an offer to buy any security or real property. All projections, returns, and financial
        figures are illustrative, based on assumptions believed reasonable but not guaranteed, and are subject to
        change. Forward-looking statements involve known and unknown risks. Market and third-party data have not
        been independently verified. Prospective purchasers should conduct their own independent due diligence and
        consult their own legal, tax, and financial advisors before making any decision. KAM Coastal makes no
        representation or warranty as to the accuracy or completeness of the information herein.
      </p>
    </Slide>
  )
}

/* 22 — THANK YOU ------------------------------------------------------- */
function ThankYou() {
  return (
    <Slide tone="dark">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <Eyebrow dark>{project.name}</Eyebrow>
        <h2 className="mt-4 font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Let&apos;s build it.
        </h2>
        <p className="mt-5 max-w-xl text-lg text-neutral-300">
          80 units, fully entitled, shovel-ready in Simi Valley.
        </p>
        <p className="mt-8 font-display text-sm font-semibold text-white/80">
          KAM Coastal · kamcoastal.com · [phone] · [email]
        </p>
        <p className="mt-10 text-xs text-white/40">← → to revisit</p>
      </div>
    </Slide>
  )
}

/* Registry ------------------------------------------------------------- */
export const slides = [
  { id: 'cover', title: 'Cover', Component: Cover },
  { id: 'exec', title: 'The Opportunity', Component: ExecSummary },
  { id: 'thesis', title: 'Why This Deal', Component: Thesis },
  { id: 'market', title: 'Market Overview', Component: MarketOverview },
  { id: 'site', title: 'The Site', Component: TheSite },
  { id: 'entitlements', title: 'The Entitlements', Component: Entitlements },
  { id: 'permits', title: 'Path to Permits', Component: PathToPermits },
  { id: 'design', title: 'Design & Renderings', Component: Design },
  { id: 'unit-mix', title: 'Unit Mix & Rent Roll', Component: UnitMix },
  { id: 'sources-uses', title: 'Sources & Uses', Component: SourcesUses },
  { id: 'proforma', title: 'Pro Forma P&L', Component: Proforma },
  { id: 'valuation', title: 'Valuation & Exit', Component: Valuation },
  { id: 'returns', title: 'Projected Returns', Component: Returns },
  { id: 'cashflow', title: 'Annual Cash Flow', Component: CashFlow },
  { id: 'structure', title: 'Transaction Structure', Component: Structure },
  { id: 'sensitivity', title: 'Sensitivity Analysis', Component: Sensitivity },
  { id: 'why-now', title: 'Why Now', Component: WhyNow },
  { id: 'the-ask', title: 'The Ask', Component: TheAsk },
  { id: 'about', title: 'About KAM Coastal', Component: AboutTeam },
  { id: 'track-record', title: 'Our Track Record', Component: TrackRecord },
  { id: 'next-steps', title: 'Next Steps', Component: NextSteps },
  { id: 'disclaimer', title: 'Disclaimer', Component: Disclaimer },
  { id: 'thank-you', title: 'Thank You', Component: ThankYou },
]
