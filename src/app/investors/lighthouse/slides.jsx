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
import heroImage from '@/images/lighthouse/hero.jpg'
import siteAerial from '@/images/lighthouse/site-aerial.jpg'
import rendering1 from '@/images/lighthouse/rendering-1.png'
import rendering2 from '@/images/lighthouse/rendering-2.png'
import rendering3 from '@/images/lighthouse/rendering-3.png'
import rendering4 from '@/images/lighthouse/rendering-4.png'
import rendering5 from '@/images/lighthouse/rendering-5.png'
import rendering6 from '@/images/lighthouse/rendering-6.png'
import rendering7 from '@/images/lighthouse/rendering-7.png'
import rendering8 from '@/images/lighthouse/rendering-8.png'

/* 01 — COVER ----------------------------------------------------------- */
function Cover() {
  return (
    <Slide tone="dark" padded={false}>
      <div className="relative flex h-full w-full flex-col">
        <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-24 sm:px-6 sm:pb-28 lg:px-12">
          <Eyebrow dark>{project.address}</Eyebrow>
          <h1 className="mt-4 max-w-4xl font-display text-3xl font-medium tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200 sm:mt-5 sm:text-xl">{project.tagline}</p>
          <p className="mt-2 max-w-2xl text-sm text-neutral-400 sm:text-base">{project.subtagline}</p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-display text-xs font-semibold text-white/80 sm:mt-8 sm:gap-x-6 sm:text-sm">
            <span>80 Units</span><span className="text-white/30">·</span>
            <span>16 Affordable</span><span className="text-white/30">·</span>
            <span>5–0 Council Approval</span><span className="text-white/30">·</span>
            <span>CEQA-Exempt</span>
          </div>
          <p className="mt-8 hidden text-xs text-white/40 sm:mt-10 lg:block">Use ← → or the arrows to navigate</p>
        </div>
      </div>
    </Slide>
  )
}

/* 02 — EXECUTIVE SUMMARY ----------------------------------------------- */
function ExecSummary() {
  return (
    <Slide tone="dark" padded={false}>
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
    <Slide tone="light" dense>
      <SlideHeading
        size="sm"
        eyebrow="Market Overview"
        title="A resilient, supply-starved submarket"
        lede="Simi Valley pairs a strong employment base, top schools, and commuter access with a 3.7% vacancy rate and effectively zero new multifamily supply in the pipeline."
      />
      <div className="mt-6">
        <StatGrid items={market.stats} cols={4} size="sm" />
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-neutral-950/10 bg-neutral-50 p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-emerald-700">Supply is frozen</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-neutral-950">No competing product is being built</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {market.supply.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-3 border-b border-neutral-950/5 pb-2">
                <dt className="text-sm text-neutral-600">{s.label}</dt>
                <dd className="font-display text-base font-semibold text-neutral-950">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-3xl border border-neutral-950/10 bg-neutral-50 p-6">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-emerald-700">Investment context</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-neutral-950">Pricing & liquidity</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {market.pricing.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between gap-3 border-b border-neutral-950/5 pb-2">
                <dt className="text-sm text-neutral-600">{s.label}</dt>
                <dd className="font-display text-base font-semibold text-neutral-950">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <p className="mt-4 text-xs text-neutral-400">Source: {market.source}.</p>
    </Slide>
  )
}

/* 05 — THE SITE -------------------------------------------------------- */
function TheSite() {
  return (
    <Slide tone="light">
      <SlideHeading eyebrow="The Site" title="4910 Cochran Street" />
      <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-2">
        <div className="space-y-3 sm:space-y-4">
          <DetailRow label="Parcel" value={`${project.lot} · APN ${project.apn}`} />
          <DetailRow label="Building" value={`${project.units} units · ${project.stories} stories · ${project.affordableUnits} affordable`} />
          <DetailRow label="Area" value={`${project.gsf.toLocaleString()} GSF · ${project.nrsf.toLocaleString()} net rentable SF`} />
          <DetailRow label="Context" value="Infill site with frontage on Cochran Street; surrounded by established residential and commercial uses." />
        </div>
        <div className="relative h-64 overflow-hidden rounded-3xl border border-neutral-950/10 sm:h-80 lg:min-h-[300px]">
          <Image
            src={siteAerial}
            alt="Aerial view of 4910 Cochran Street with the parcel marked"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </div>
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
      <div className="mt-6 grid flex-1 grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering1} alt="Exterior rendering - street view" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering2} alt="Aerial view of development" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering3} alt="Courtyard and landscaping" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering4} alt="Building elevations" fill className="object-cover" />
        </div>
      </div>
    </Slide>
  )
}

/* 09 — AMENITIES & INTERIORS ------------------------------------------- */
function DesignAmenities() {
  return (
    <Slide tone="light">
      <SlideHeading
        eyebrow="Amenities & Interiors"
        title="Premium finishes and resident amenities"
        lede="Thoughtfully designed common areas and high-quality unit interiors."
      />
      <div className="mt-6 grid flex-1 grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering5} alt="Rooftop amenity deck" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering6} alt="Additional rendering" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering7} alt="Unit interior" fill className="object-cover" />
        </div>
        <div className="relative h-48 overflow-hidden rounded-2xl sm:h-auto">
          <Image src={rendering8} alt="Common area" fill className="object-cover" />
        </div>
      </div>
    </Slide>
  )
}

/* 10 — UNIT MIX -------------------------------------------------------- */
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
    <Slide tone="dark" className="bg-slate-950">
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
      <div className="grid flex-1 items-center gap-8 sm:gap-12 lg:grid-cols-2">
        <div>
          <Eyebrow dark>The Ask</Eyebrow>
          <p className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {transaction.price}
          </p>
          <p className="mt-3 text-base text-neutral-300 sm:text-lg">
            For a shovel-ready, fully-entitled 80-unit site.
          </p>
          <p className="mt-2 text-sm text-neutral-500">{transaction.priceContext}</p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:mt-8 sm:p-5">
            <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-400">Ideal Buyer</p>
            <p className="mt-2 text-sm text-neutral-200 sm:text-base">{transaction.buyerProfile}</p>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <p className="font-display text-xs font-semibold uppercase tracking-wider text-neutral-400">What's included</p>
          <div className="mt-4 sm:mt-5">
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
      <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
        {sponsor.stats.map((s, i) => (
          <StatTile key={i} value={s.value} label={s.label} />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {deckTeam.map((p) => (
          <div key={p.name} className="group overflow-hidden rounded-2xl bg-neutral-100">
            <div className="relative aspect-[3/4]">
              <Image src={p.image} alt={p.name} className="h-full w-full object-cover grayscale" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 to-transparent p-2 sm:p-3">
                <p className="font-display text-xs font-semibold leading-tight text-white sm:text-sm">{p.name}</p>
                <p className="text-[10px] text-neutral-300 sm:text-[11px]">{p.role}</p>
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
      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <Eyebrow dark>{project.name}</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-5xl lg:text-7xl">
          Let&apos;s build it.
        </h2>
        <p className="mt-4 max-w-xl text-base text-neutral-300 sm:mt-5 sm:text-lg">
          80 units, fully entitled, shovel-ready in Simi Valley.
        </p>
        <p className="mt-6 font-display text-xs font-semibold text-white/80 sm:mt-8 sm:text-sm">
          KAM Coastal · kamcoastal.com · [phone] · [email]
        </p>
        <p className="mt-8 hidden text-xs text-white/40 sm:mt-10 lg:block">← → to revisit</p>
      </div>
    </Slide>
  )
}

/* Registry ------------------------------------------------------------- */
export const slides = [
  { id: 'cover', title: 'Cover', Component: Cover, tone: 'dark' },
  { id: 'exec', title: 'The Opportunity', Component: ExecSummary, tone: 'dark', backgroundColor: 'bg-sky-950' },
  { id: 'thesis', title: 'Why This Deal', Component: Thesis, tone: 'light' },
  { id: 'market', title: 'Market Overview', Component: MarketOverview, tone: 'light' },
  { id: 'site', title: 'The Site', Component: TheSite, tone: 'light' },
  { id: 'entitlements', title: 'The Entitlements', Component: Entitlements, tone: 'dark', backgroundColor: 'bg-slate-900' },
  { id: 'permits', title: 'Path to Permits', Component: PathToPermits, tone: 'light' },
  { id: 'design', title: 'Design & Renderings', Component: Design, tone: 'light' },
  { id: 'amenities', title: 'Amenities & Interiors', Component: DesignAmenities, tone: 'light' },
  { id: 'unit-mix', title: 'Unit Mix & Rent Roll', Component: UnitMix, tone: 'light' },
  { id: 'sources-uses', title: 'Sources & Uses', Component: SourcesUses, tone: 'light' },
  { id: 'proforma', title: 'Pro Forma P&L', Component: Proforma, tone: 'light' },
  { id: 'valuation', title: 'Valuation & Exit', Component: Valuation, tone: 'dark' },
  { id: 'returns', title: 'Projected Returns', Component: Returns, tone: 'dark' },
  { id: 'cashflow', title: 'Annual Cash Flow', Component: CashFlow, tone: 'light' },
  { id: 'structure', title: 'Transaction Structure', Component: Structure, tone: 'light' },
  { id: 'sensitivity', title: 'Sensitivity Analysis', Component: Sensitivity, tone: 'light' },
  { id: 'why-now', title: 'Why Now', Component: WhyNow, tone: 'dark' },
  { id: 'the-ask', title: 'The Ask', Component: TheAsk, tone: 'dark' },
  { id: 'about', title: 'About KAM Coastal', Component: AboutTeam, tone: 'light' },
  { id: 'track-record', title: 'Our Track Record', Component: TrackRecord, tone: 'light' },
  { id: 'next-steps', title: 'Next Steps', Component: NextSteps, tone: 'light' },
  { id: 'disclaimer', title: 'Disclaimer', Component: Disclaimer, tone: 'light' },
  { id: 'thank-you', title: 'Thank You', Component: ThankYou, tone: 'dark' },
]
