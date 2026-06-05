import { DeckShell } from '@/components/deck/DeckShell'
import { slides } from './slides'

export const metadata = {
  title: 'Cochran Street Apartments — Investor Opportunity',
  description:
    '80-unit, fully-entitled, shovel-ready multifamily development site in Simi Valley, CA. Confidential investor presentation by KAM Coastal.',
  robots: { index: false, follow: false },
}

export default function LighthouseInvestorDeck() {
  return <DeckShell slides={slides} />
}
