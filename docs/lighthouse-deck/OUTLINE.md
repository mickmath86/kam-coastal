# Cochran Street Apartments — Investor / Developer Deck Outline

**Route:** `/investors/lighthouse` · **Project:** Cochran Street Apartments (Lighthouse Bible Church site)
**Property:** 4910 Cochran Street, Simi Valley, CA 90063 · APN 644-0-080-425 · Lot 51, Placentia Tract
**Product:** 80-unit, three-story apartment community (16 affordable units), 91,897 GSF / 59,304 NRSF
**Entitlements:** PD-S-2024-0007 + Tentative Parcel Map TP-S-2024-0005 — Resolution 2025-23
**Approval:** Simi Valley City Council, **5–0**, **July 21, 2025**; Planning Commission rec. May 14, 2025 (SVPC 09-2025); **CEQA categorically exempt, Guidelines §15332 (Class 32 infill)**
**The Ask:** Outright sale of the fully-entitled, shovel-ready parcel — **$5,000,000**

> **Naming note:** route + Space = "Lighthouse"; deck project name = "Cochran Street Apartments."
> Keith Mathias is the relationship lead with Lighthouse Bible Church (the landowner/applicant).

---

## Deck behavior (UX spec)

- **Full-bleed deck:** each slide = one `100vh` / `100dvh` panel. The deck sits inside the
  `/investors/lighthouse` page (can run with or without the standard KAM nav chrome — see Tech Plan).
- **Tabbed navigation:** a slim tab/index rail (numbered or titled) lets users jump to any slide.
- **Keyboard:** `←/→` (and `↑/↓` / `PageUp`/`PageDown`) move prev/next; `Home`/`End` jump to
  first/last; number keys optional. `Esc` could exit fullscreen.
- **Progress affordance:** dots or "06 / 22" counter; active tab highlighted.
- **Transitions:** horizontal slide or fade (Framer Motion). Respect `prefers-reduced-motion`.
- **Responsive:** on mobile, tabs collapse to a dot strip; swipe left/right also navigates.
- **Confidential watermark** on every slide footer: "CONFIDENTIAL & PROPRIETARY."

**Two financial-framing options (pick before design):**
- **(A) Build-out proforma — "here's what you'll make."** Leads with developer returns
  (11.4% unlevered / 14.4% levered IRR) to justify the $5M land price. **Recommended.**
- **(B) Residual land value** — backs the $5M ask out of the ~$47.5M stabilized value.
  Use as a supporting/appendix slide, not the headline.

---

## SLIDE-BY-SLIDE (22 slides + optional appendix)

### 1 — Cover
- **Header:** Cochran Street Apartments
- **Subhead:** 80 Units, Fully Entitled & Shovel-Ready in Simi Valley
- **Supporting line:** A Rare Class-A Multifamily Development Opportunity in Ventura County
- **Stats strip (small):** 80 Units · 16 Affordable · 5–0 Council Approval · CEQA-Exempt
- **Elements:** KAM Coastal logo (top-left), CTA hint "Use ← → to navigate"
- **Imagery:** full-bleed hero rendering of approved building — **Exhibit A-3.2 Perspective Views** (you'll provide)
- **Footer:** CONFIDENTIAL & PROPRIETARY

### 2 — The Opportunity (Executive Summary)
- **Header:** A Fully-Entitled, Shovel-Ready 80-Unit Community
- **Subcopy:** One paragraph — a CEQA-exempt, unanimously approved 80-unit site at 4910 Cochran
  Street, ready to move to vertical construction. The entitlement risk is already retired.
- **Stat band (6 tiles):**
  - **80 units** · 3 stories · 16 affordable
  - **91,897 GSF** / 59,304 net rentable SF
  - **5–0** unanimous council approval (Jul 2025)
  - **CEQA categorically exempt** — no EIR risk
  - Stabilized value **~$47.5M** (~$594K/door)
  - Build-out target **11.4% unlevered IRR**
- **Elements:** large numeric stat tiles; site thumbnail
- **Imagery:** small site-plan or aerial inset (optional)

### 3 — Why This Deal (Investment Thesis)
- **Header:** Why Cochran Street
- **Three pillars (icon + title + 1–2 lines):**
  1. **Entitlement Risk Eliminated** — the slow, uncertain part is done; the buyer skips 18–24
     months of approvals and a contested public process.
  2. **Supply-Constrained Ventura County** — high barriers to entry, persistent rental demand,
     limited new multifamily supply.
  3. **Shovel-Ready Timeline** — approved plans, parcel map nearly final, clear path to permits
     and vertical construction.
- **Elements:** 3-column card layout, supporting micro-stat under each pillar

### 4 — Market Overview: Simi Valley / Ventura County
- **Header:** A Resilient, Supply-Constrained Submarket
- **Subcopy:** Why Simi Valley — employment base, school quality, commuter access to LA/Valley,
  steady rent growth, limited new deliveries.
- **Stat placeholders (research later — leave editable):**
  - Submarket vacancy: `[ XX% ]`
  - YoY rent growth: `[ X.X% ]`
  - Multifamily under construction / pipeline: `[ placeholder ]`
  - Population / job growth: `[ placeholder ]`
  - Rent comps: `[ 3–4 comps placeholder ]`
- **Elements:** map of submarket, 2–3 small charts (vacancy, rent trend), comp table
- **Imagery:** Simi Valley / Ventura County area map (placeholder)
- **Note:** pull from CoStar tab in proforma if usable; otherwise fresh research.

### 5 — The Site
- **Header:** 4910 Cochran Street
- **Subcopy:** Lot 51, Placentia Tract; APN 644-0-080-425. ~2-acre infill parcel.
- **Stat/detail tiles:** lot size · frontage · access points · surrounding uses · walk/transit context
- **Elements:** location map + labeled aerial; callouts for access & adjacencies
- **Imagery:** aerial of 4910 Cochran (you'll provide / can pull from exhibits)

### 6 — The Entitlements (core value being sold) *(NET-NEW)*
- **Header:** Fully Entitled — The Hard Part Is Done
- **Subcopy:** Planned Development Permit **PD-S-2024-0007** + Tentative Parcel Map
  **TP-S-2024-0005**, approved by **Resolution 2025-23**.
- **Key facts (checklist style):**
  - ✅ Unanimous **5–0** City Council approval, **July 21, 2025**
    (Ayala, Rhodes, Litster, Mayor Pro Tem Judge, Mayor Cavanaugh — 0 nays, 0 absent)
  - ✅ Planning Commission recommended approval **May 14, 2025** (Reso SVPC 09-2025)
  - ✅ **CEQA categorically exempt** — Guidelines **§15332** (Class 32 infill); Notice of Exemption to file — **no EIR**
  - ✅ Approved exhibit set: site plans, elevations, color & materials board, landscape,
    grading, 5-year tree-growth, perspective views (A-1.x / A-2.x / A-3.2)
- **Urgency flag:** Approval **expires if use not commenced within 3 years** of approval (~July 2028).
- **Elements:** green-check list, "APPROVED" stamp motif, document thumbnails
- **Imagery:** resolution cover / exhibit thumbnails

### 7 — Entitlement Status & Path to Permits *(NET-NEW)*
- **Header:** ~95% of Pre-Development Risk Retired
- **Subcopy:** What remains is execution, not approval risk.
- **Timeline graphic (horizontal):**
  Entitlement Approved ✅ → Final Parcel Map (nearly complete) → Conditions of Approval →
  Building Permits → Vertical Construction
- **"Buyer inherits" list:** conditions of approval, development impact fees (DIFs), final map
  recordation, plan-check.
- **Positioning line:** "The buyer steps in shovel-ready — no rezoning, no CEQA, no entitlement fight."
- **Elements:** milestone timeline with status pills

### 8 — Project Design & Renderings
- **Header:** A Class-A Community, Already Designed
- **Subcopy:** Approved architecture, amenities, and site layout.
- **Elements:** 2×2 grid — exterior renderings + site plan; callouts for amenities, unit
  layouts, parking, affordable-unit integration
- **Imagery:** approved exhibit images A-1.x / A-2.x / A-3.2 (you'll provide)

### 9 — Unit Mix & Rent Roll
- **Header:** 80 Units · Efficient, Market-Tested Mix
- **Table:**

| Unit Type | Units | Avg SF | Base Rent | Rent PSF |
|---|---|---:|---:|---:|
| 1BD/1BA | 32 | 616 | $2,284 | $3.71 |
| 1BD/1BA + Den | 20 | 750 | $2,455 | $3.28 |
| 2BD/2BA | 28 | 878 | $2,741 | $3.12 |
| **Total / Avg** | **80** | **741** | **$2,487** | **$3.35** |

- **Supporting stats:** Net rentable 59,304 SF · efficiency 64.5% · 16 affordable units (per entitlement)
- **Other income:** covered parking $24K/yr + 4 ADUs $76.8K/yr = **$100.8K/yr**
- **Elements:** clean financial table + small donut for unit-type split

### 10 — Development Summary (Sources & Uses)
- **Header:** Total Capitalization: $33.1M ($414K/unit)
- **Sources:** LP Equity **$15.14M (46%)** | Construction Loan **$18.0M (54%)**
- **Uses table:**

| Use | PSF | Total | $/Unit |
|---|---:|---:|---:|
| Acquisition (land) | $32 | $2,959,708 | $37,000 |
| Hard Costs | $238 | $21,914,036 | $274,000 |
| Soft Costs | $69 | $6,339,269 | $79,000 |
| Financing Costs | $21 | $1,925,708 | $24,000 |
| **Total Uses** | **$361** | **$33,138,721** | **$414,000** |

- **Financing notes:** Construction 54% LTC @ 7.0% I/O; Permanent (refi) 70% LTC @ 5.5%, 30-yr
- **Note on land basis:** proforma carries land at **$2.96M acquisition**; **your ask is $5.0M** —
  reconcile in Slide 18 (the delta is the entitlement value you created). Consider showing
  the proforma at the $5M basis in a build-out variant, or footnote the difference.
- **Elements:** sources pie + uses bar/table

### 11 — Pro Forma P&L (Stabilized)
- **Header:** Stabilized NOI ~$1.8M at a 70% Margin
- **Table:**

| Line | Untrended | Stabilization | Disposition |
|---|---:|---:|---:|
| Total Income | $2,400,997 | $2,587,284 | $2,774,994 |
| Operating Expenses | ($729,338) | ($776,562) | ($825,851) |
| **NOI** | **$1,671,659** | **$1,810,722** | **$1,949,143** |
| NOI Margin | 70% | 70% | 70% |
| Return on Cost | 5.04% | 5.46% | 5.88% |

- **Elements:** three-column compare; highlight NOI row

### 12 — Valuation & Exit *(NET-NEW)*
- **Header:** ~$47.5M Stabilized Exit (~$594K/Door)
- **Table:**

| | Stabilization | Refi | Exit |
|---|---:|---:|---:|
| NOI | $1,671,659 | $1,810,722 | $1,949,143 |
| Cap Rate | 4.80% | 4.70% | 4.10% |
| Gross Value | $34.8M | $38.5M | $47.5M |
| Value / Door | $435K | $482K | $594K |
| Value / GSF | $379 | $419 | $517 |

- **Supporting:** Gross disposition value ~$47.5M; cost of sale 4%
- **Framing line:** "Against a ~$47.5M stabilized value, a $5M entitled-land basis is ~10.5% of
  finished value — well inside a typical land-residual range." (residual-value bridge)
- **Elements:** value-ramp bar chart (stab → refi → exit)

### 13 — Projected Returns (the developer's prize)
- **Header:** 11.4% Unlevered / 14.4% Levered IRR
- **Stat tiles:**
  - Unlevered IRR **11.4%** | Levered IRR **14.4%**
  - Equity Multiple **1.7x–2.0x**
  - Cash-on-cash **5.7%** (unlev) / **4.3%** (lev)
  - Net profit **~$21.8M** unlevered / **~$15.2M** levered
- **Hold:** 7-year hold — construction complete Yr 3, stabilized Yr 4, refi Yr 4, exit Yr 7
- **Elements:** large IRR call-out, returns tile grid, mini hold-timeline

### 14 — Annual Cash Flow Model
- **Header:** Capital In Years 1–3, Cash Out From Year 4
- **Elements:** year-by-year levered cash-flow waterfall/bar chart — negative Yrs 1–3 (capital),
  positive from Yr 4, **$47.5M disposition spike Yr 7**
- **Supporting:** DSCR ramp **1.32x → 1.69x**; debt yield **7.1% → 8.5%**
- **Imagery:** chart from Annual CF tab

### 15 — Proposed Transaction Structure *(replaces COMMUNE waterfall — outright sale)*
- **Header:** Structure: Outright Sale of the Entitled Parcel
- **Subcopy:** This is a land sale, not a fund raise — the buyer acquires the shovel-ready parcel
  and captures 100% of the build-out upside.
- **Terms summary:** asset sale of Lot 51 (APN 644-0-080-425) with full PD permit + TPM and the
  complete approved work product. **Asking: $5,000,000.**
- **Optional JV note:** (only if you ever offer co-invest — currently OUT; keep as hidden/appendix)
- **Elements:** simple "what transfers" diagram (Seller → Buyer)
- *(If you'd rather not split this from Slide 18, merge — see note below.)*

### 16 — Sensitivity Analysis
- **Header:** The Entitled Basis Protects the Downside
- **Subcopy:** Stress-tested across the variables that matter most.
- **Scenarios (build exact values from the proforma Sensitivity tab — placeholders for now):**
  - Construction delay → `[ IRR impact ]`
  - Rent growth below plan → `[ IRR impact ]`
  - Cost overrun / contingency draw → `[ IRR impact ]`
  - **Cap-rate softening at exit** (biggest swing) → `[ IRR impact ]`
  - Slow lease-up → `[ IRR impact ]`
  - Financing market tightening → `[ IRR impact ]`
- **Framing:** "Even under stress, the entitled land basis protects the downside."
- **Elements:** tornado chart or sensitivity grid/heatmap

### 17 — Why Now (Urgency)
- **Header:** The Entitlement Clock Is Running
- **Bullets:**
  - Approval **expires if construction not commenced within 3 years** of July 2025 (~**July 2028**)
  - Supply-constrained market + multifamily demand
  - First-mover advantage on a rare shovel-ready site in Ventura County
- **Elements:** countdown/clock motif, urgency band
- **Imagery:** optional skyline / construction visual

### 18 — Transaction Summary (The Ask)
- **Header:** The Ask — $5,000,000 for a Shovel-Ready 80-Unit Site
- **What's for sale:** the entitled parcel (Lot 51, APN 644-0-080-425) with full PD permit + TPM
- **Price:** **$5,000,000** (vs. proforma land carry of $2.96M; vs. ~$47.5M stabilized value)
- **What's included:** approved plans, full exhibit set, CEQA exemption / NOE, parcel-map work product, conditions of approval
- **Buyer profile:** experienced multifamily developer/GC able to execute vertical construction
- **Elements:** "The Ask" hero number, included-items checklist, ideal-buyer card

### 19 — About KAM Coastal / Sponsor & Team
- **Header:** About KAM Coastal
- **Subcopy (from kamcoastal.com/about):** "KAM Coastal is a mission-driven real estate
  development and brokerage firm serving churches, schools, and nonprofits across California.
  With decades of combined experience in brokerage, development, and construction management,
  KAM helps purpose-driven institutions steward their real estate wisely."
- **Track-record stats (from site):** **$300M+** transaction volume · **20+** faith-based &
  institutional clients · **150+** acres repositioned or entitled
- **Key people (pull bios + photos from existing `src/components/Team.jsx`):**
  - **Keith Mathias — Co-Founder.** Licensed broker & GC since 1984; entitled and built business
    parks across CA (Santa Maria, Valencia, Oxnard, Ventura) and build-to-suit for FedEx,
    Univision, Tractor Supply; advisor to faith-based orgs. **Relationship lead on this deal.**
  - **Mike Mathias — Co-Founder.** Marketing + technical PM, CA Broker's license, leads
    investor relations & deal marketing.
  - **Mark Mathias — Co-Founder.** Broker (+$20M sold) and multifamily property manager.
  - **Kevin Shepard — Lead Construction Manager.** Sr. PM at AvalonBay (695-unit AVA Hollywood);
    statewide ADU program — multifamily execution credibility for the buyer.
  - **Mark Pettit — Lead Architect.** 40+ yrs entitlement & design in So-Cal; Penn State Arch +
    Real Estate Dev; Ventura County Housing Trust Fund board — entitlement credibility.
  - **Jason Jewell — Lead Financial Consultant.**
- **Elements:** team photo grid (grayscale cards, reuse Team component styling), logo, stat strip
- **Imagery:** existing team headshots in `src/images/team/`

### 19b — Our Track Record (Past Projects) *(About-Us proof, from kamcoastal.com/work)*
- **Header:** Proven on Mission-Driven & Institutional Real Estate
- **Subcopy:** A selection of KAM's development, entitlement, and disposition work.
- **Project cards (title · role · 1 line — sourced from existing case studies):**
  - **Lighthouse Bible Church (this site)** — Development. Subdivision + 80-unit multifamily
    entitlement on 2 acres in Simi Valley. *(This deal — shown as in-progress flagship.)*
  - **William Carey International University** — Brokerage. **$47M** sale of a historic 15-acre
    Pasadena campus to Education First (2018).
  - **Reality Church, Ventura** — Brokerage. Full-price, all-cash disposition of a former church
    campus, closed in ~3 weeks (2025).
  - **Village Investments — Creekside** — Construction & Mgmt. **$6M** modernization of a
    152-unit, 19-building senior community in Riverside (2024).
  - **FedEx Ground (Santa Rosa)** — Development. **$10M** design/build of a 68,169 SF hub on
    10 acres, delivered on time/budget (2007).
  - **FedEx Ground (Anchorage, AK)** — Development. Land acquisition + build of an 18,870 SF
    TSA-compliant distribution facility.
  - **Tractor Supply (Paso Robles)** — Brokerage & Leasing. Secured tenant pre-sale, brokered
    sale, later co-anchor leasing.
- **Elements:** logo wall (client logos already in `src/images/clients/`) + 3–4 highlighted
  case-study cards with hero images
- **Imagery:** case-study hero images from `src/app/work/*/hero.jpg`
- *(Can be a sub-section of Slide 19 or its own slide — recommend its own for impact.)*

### 20 — Next Steps / Process
- **Header:** A Clear Path to Close
- **4-step process (horizontal):** NDA & Data-Room Access → LOI → Due Diligence → PSA / Close
- **Contact:** KAM Coastal · Keith Mathias (deal lead) · phone · email · data-room link `[ placeholder ]`
- **Elements:** numbered step flow, contact card, CTA button
- **Imagery:** none required

### 21 — Disclaimer
- **Header:** Important Disclosures
- **Body:** Standard offering disclaimer — illustrative projections, not an offer to sell or
  solicitation; forward-looking statements; third-party/market data not independently verified;
  prospective buyers should conduct independent due diligence and consult their own advisors.
- **Elements:** small-type legal block

### 22 — Thank You / Contact
- **Header:** Let's Build It.
- **Subcopy:** Cochran Street Apartments — 80 units, fully entitled, shovel-ready.
- **Contact:** KAM Coastal · kamcoastal.com · phone · email
- **Elements:** brand lockup, contact, "← → to revisit"
- **Imagery:** hero rendering reprise

### Appendix (optional, off the main tab rail)
- **A1 — Residual Land Value bridge** (Option B framing: $47.5M value → $5M land ask)
- **A2 — Accelerated depreciation / cost-seg** (only if a buyer asks; hold-investor topic)
- **A3 — Full sensitivity tables / proforma detail**

---

## Imagery checklist (you to provide / source)
| # | Asset | Source |
|---|---|---|
| Cover, 8, 22 | Building renderings, perspective views | Entitlement exhibit set **A-3.2 / A-1.x / A-2.x** (you'll provide) |
| 5 | Aerial + location map of 4910 Cochran | You'll provide / exhibits / map service |
| 4 | Simi Valley submarket map + charts | Fresh market research (placeholder) |
| 6 | Resolution cover + exhibit thumbnails | Space PDF (Executed-Resolution-Lighthouse.pdf) |
| 19 | Team headshots | Already in repo: `src/images/team/*.jpeg` |
| 19b | Case-study hero images + client logos | Already in repo: `src/app/work/*/hero.jpg`, `src/images/clients/*` |

## Data gaps locked from your answers
- ✅ **Asking price:** $5,000,000 (outright sale)
- ✅ **Structure:** outright land sale (no JV) → Slide 15 = "Proposed Transaction Structure"; drop COMMUNE LP/GP waterfall
- ⏳ **Market data (Slide 4):** placeholders, fill later
- ⏳ **Renderings/exhibits:** you'll provide
- ⏳ **Sensitivity values (Slide 16):** pull exact figures from proforma Sensitivity tab
- ✅ **Sponsor bios/photos:** sourced from kamcoastal.com (already in repo)

## Slide-count note
This is 22 core slides + Slide 19b (track record) + optional appendix. If you want a tighter
deck, candidates to merge: 2+3 (Exec Summary + Thesis), 11+12 (P&L + Valuation), 15+18
(Structure + The Ask). Candidates to cut to appendix: 16 detail, 14 if 13 covers returns.
