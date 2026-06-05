// Single source of truth for the Cochran Street Apartments investor deck.
// All facts verified against Resolution 2025-23 (Executed-Resolution-Lighthouse.pdf)
// and the project proforma. Edit values here; slides read from this file.

export const project = {
  name: 'Cochran Street Apartments',
  tagline: '80 Units, Fully Entitled & Shovel-Ready in Simi Valley',
  subtagline: 'A Rare Class-A Multifamily Development Opportunity in Ventura County',
  address: '4910 Cochran Street, Simi Valley, CA 90063',
  apn: '644-0-080-425',
  lot: 'Lot 51, Placentia Tract',
  units: 80,
  stories: 3,
  affordableUnits: 16,
  gsf: 91897,
  nrsf: 59304,
  efficiency: '64.5%',
  askingPrice: 5_000_000,
  askingPriceLabel: '$5,000,000',
}

export const entitlement = {
  pdPermit: 'PD-S-2024-0007',
  parcelMap: 'TP-S-2024-0005',
  resolution: 'Resolution 2025-23',
  councilVote: '5–0',
  councilDate: 'July 21, 2025',
  councilMembers: 'Ayala, Rhodes, Litster, Mayor Pro Tem Judge, Mayor Cavanaugh',
  pcResolution: 'SVPC 09-2025',
  pcDate: 'May 14, 2025',
  ceqa: 'Categorically Exempt — CEQA Guidelines §15332 (Class 32, Infill)',
  ceqaShort: 'CEQA Categorically Exempt',
  clockYears: 3,
  clockExpiry: '~July 2028',
  facts: [
    { label: 'Unanimous 5–0 City Council approval', detail: 'July 21, 2025 — 0 nays, 0 absent, 0 abstentions' },
    { label: 'Planning Commission recommended approval', detail: 'May 14, 2025 (Reso SVPC 09-2025)' },
    { label: 'CEQA categorically exempt — §15332 infill', detail: 'Class 32 exemption, Notice of Exemption to file — no EIR' },
    { label: 'Complete approved exhibit set', detail: 'Site plans, elevations, color & materials, landscape, grading, perspective views' },
  ],
}

export const thesis = [
  {
    title: 'Entitlement Risk Eliminated',
    body: 'The slow, uncertain part is done. The buyer skips 18–24 months of approvals and a contested public process.',
    stat: '5–0 approval',
  },
  {
    title: 'Supply-Constrained Ventura County',
    body: 'High barriers to entry, persistent rental demand, and limited new multifamily supply across the submarket.',
    stat: 'Limited new supply',
  },
  {
    title: 'Shovel-Ready Timeline',
    body: 'Approved plans, a nearly-final parcel map, and a clear path to building permits and vertical construction.',
    stat: '~95% pre-dev risk retired',
  },
]

export const execStats = [
  { value: '80', label: 'Units · 3 stories · 16 affordable' },
  { value: '91,897', label: 'Gross SF / 59,304 net rentable' },
  { value: '5–0', label: 'Unanimous council approval (Jul 2025)' },
  { value: 'CEQA', label: 'Categorically exempt — no EIR risk' },
  { value: '~$47.5M', label: 'Stabilized value (~$594K / door)' },
  { value: '11.4%', label: 'Build-out target unlevered IRR' },
]

export const market = {
  // Placeholders — fill with fresh Simi Valley / Ventura County submarket research.
  stats: [
    { value: '[ XX% ]', label: 'Submarket vacancy' },
    { value: '[ X.X% ]', label: 'YoY rent growth' },
    { value: '[ — ]', label: 'Multifamily under construction' },
    { value: '[ — ]', label: 'Population / job growth' },
  ],
  comps: [
    { name: '[ Comp 1 ]', units: '[ — ]', rent: '[ $— ]', rentPsf: '[ $— ]' },
    { name: '[ Comp 2 ]', units: '[ — ]', rent: '[ $— ]', rentPsf: '[ $— ]' },
    { name: '[ Comp 3 ]', units: '[ — ]', rent: '[ $— ]', rentPsf: '[ $— ]' },
  ],
}

export const unitMix = {
  rows: [
    { type: '1BD / 1BA', units: 32, sf: 616, rent: '$2,284', psf: '$3.71' },
    { type: '1BD / 1BA + Den', units: 20, sf: 750, rent: '$2,455', psf: '$3.28' },
    { type: '2BD / 2BA', units: 28, sf: 878, rent: '$2,741', psf: '$3.12' },
  ],
  total: { type: 'Total / Avg', units: 80, sf: 741, rent: '$2,487', psf: '$3.35' },
  otherIncome: [
    { label: 'Covered parking', value: '$24.0K / yr' },
    { label: '4 ADUs', value: '$76.8K / yr' },
    { label: 'Total other income', value: '$100.8K / yr', emphasis: true },
  ],
}

export const sourcesUses = {
  totalCap: '$33,138,721',
  perUnit: '$414,000',
  sources: [
    { label: 'LP Equity', value: '$15.14M', pct: '46%' },
    { label: 'Construction Loan', value: '$18.0M', pct: '54%' },
  ],
  uses: [
    { use: 'Acquisition (land)', psf: '$32', total: '$2,959,708', perUnit: '$37,000' },
    { use: 'Hard Costs', psf: '$238', total: '$21,914,036', perUnit: '$274,000' },
    { use: 'Soft Costs', psf: '$69', total: '$6,339,269', perUnit: '$79,000' },
    { use: 'Financing Costs', psf: '$21', total: '$1,925,708', perUnit: '$24,000' },
  ],
  usesTotal: { use: 'Total Uses', psf: '$361', total: '$33,138,721', perUnit: '$414,000' },
  financingNotes: 'Construction 54% LTC @ 7.0% I/O · Permanent (refi) 70% LTC @ 5.5%, 30-yr',
}

export const proforma = {
  rows: [
    { line: 'Total Income', untrended: '$2,400,997', stab: '$2,587,284', dispo: '$2,774,994' },
    { line: 'Operating Expenses', untrended: '($729,338)', stab: '($776,562)', dispo: '($825,851)' },
    { line: 'NOI', untrended: '$1,671,659', stab: '$1,810,722', dispo: '$1,949,143', emphasis: true },
    { line: 'NOI Margin', untrended: '70%', stab: '70%', dispo: '70%' },
    { line: 'Return on Cost', untrended: '5.04%', stab: '5.46%', dispo: '5.88%' },
  ],
}

export const valuation = {
  rows: [
    { line: 'NOI', stab: '$1,671,659', refi: '$1,810,722', exit: '$1,949,143' },
    { line: 'Cap Rate', stab: '4.80%', refi: '4.70%', exit: '4.10%' },
    { line: 'Gross Value', stab: '$34.8M', refi: '$38.5M', exit: '$47.5M', emphasis: true },
    { line: 'Value / Door', stab: '$435K', refi: '$482K', exit: '$594K' },
    { line: 'Value / GSF', stab: '$379', refi: '$419', exit: '$517' },
  ],
  // For the value-ramp bar chart (in $M)
  ramp: [
    { label: 'Stabilization', value: 34.8 },
    { label: 'Refi', value: 38.5 },
    { label: 'Exit', value: 47.5 },
  ],
}

export const returns = {
  tiles: [
    { value: '11.4%', label: 'Unlevered IRR' },
    { value: '14.4%', label: 'Levered IRR' },
    { value: '1.7x–2.0x', label: 'Equity Multiple' },
    { value: '5.7% / 4.3%', label: 'Cash-on-cash (unlev / lev)' },
    { value: '~$21.8M', label: 'Net profit (unlevered)' },
    { value: '~$15.2M', label: 'Net profit (levered)' },
  ],
  hold: '7-year hold — construction complete Yr 3, stabilized Yr 4, refi Yr 4, exit Yr 7',
}

// Levered annual cash flow (illustrative shape from the Annual CF tab, $M).
export const cashflow = {
  years: [
    { year: 'Yr 1', value: -5.0 },
    { year: 'Yr 2', value: -6.5 },
    { year: 'Yr 3', value: -3.6 },
    { year: 'Yr 4', value: 1.0 },
    { year: 'Yr 5', value: 1.1 },
    { year: 'Yr 6', value: 1.2 },
    { year: 'Yr 7', value: 16.5 },
  ],
  dscr: '1.32x → 1.69x',
  debtYield: '7.1% → 8.5%',
  note: 'Capital out Years 1–3, income from Year 4, $47.5M disposition Year 7',
}

export const sensitivity = [
  // Fill exact values from the proforma Sensitivity tab.
  { scenario: 'Construction delay', impact: '[ IRR impact ]' },
  { scenario: 'Rent growth below plan', impact: '[ IRR impact ]' },
  { scenario: 'Cost overrun / contingency draw', impact: '[ IRR impact ]' },
  { scenario: 'Cap-rate softening at exit (biggest swing)', impact: '[ IRR impact ]' },
  { scenario: 'Slow lease-up', impact: '[ IRR impact ]' },
  { scenario: 'Financing market tightening', impact: '[ IRR impact ]' },
]

export const transaction = {
  whatForSale: 'The entitled parcel — Lot 51, APN 644-0-080-425 — with full PD permit + Tentative Parcel Map.',
  price: '$5,000,000',
  priceContext: 'vs. $2.96M proforma land carry · vs. ~$47.5M stabilized value (~10.5% of finished value)',
  included: [
    'Approved plans & complete exhibit set',
    'CEQA categorical exemption / Notice of Exemption',
    'Parcel-map work product (nearly final)',
    'Conditions of approval & entitlement record',
  ],
  buyerProfile: 'An experienced multifamily developer / GC able to execute vertical construction.',
}

export const process = [
  { step: '01', title: 'NDA & Data Room', body: 'Sign NDA, receive access to the full data room.' },
  { step: '02', title: 'LOI', body: 'Submit a letter of intent with price and terms.' },
  { step: '03', title: 'Due Diligence', body: 'Review entitlements, plans, and parcel-map work product.' },
  { step: '04', title: 'PSA / Close', body: 'Execute purchase & sale agreement and close.' },
]

export const sponsor = {
  blurb:
    'KAM Coastal is a mission-driven real estate development and brokerage firm serving churches, schools, and nonprofits across California. With decades of combined experience in brokerage, development, and construction management, KAM helps purpose-driven institutions steward their real estate wisely.',
  stats: [
    { value: '$300M+', label: 'Transaction volume' },
    { value: '40+ yrs', label: 'Development & entitlement experience' },
    { value: '20+', label: 'Faith-based & institutional clients' },
  ],
}
