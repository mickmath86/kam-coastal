// Track-record projects for the About Us proof slide (from kamcoastal.com/work).
import heroLighthouse from '@/app/work/lighthouse/hero.jpg'
import heroWciu from '@/app/work/wciu/hero.jpg'
import heroReality from '@/app/work/reality/hero.jpg'
import heroCreekside from '@/app/work/creekside/hero.jpg'
import heroFedexSantaRosa from '@/app/work/fedex-santa-rosa/hero.jpg'
import heroFedexAlaska from '@/app/work/fedex-alaska/hero.jpg'
import heroTractorSupply from '@/app/work/tractor-supply/hero.jpg'

export const trackRecord = [
  {
    client: 'Lighthouse Bible Church',
    title: 'This site — 80-unit multifamily entitlement on 2 acres in Simi Valley.',
    service: 'Development',
    stat: 'In progress',
    image: heroLighthouse,
    flagship: true,
  },
  {
    client: 'William Carey International University',
    title: 'Sale of a historic 15-acre Pasadena campus to Education First.',
    service: 'Brokerage',
    stat: '$47M',
    image: heroWciu,
  },
  {
    client: 'Reality Church, Ventura',
    title: 'Full-price, all-cash disposition of a former church campus.',
    service: 'Brokerage',
    stat: 'Closed ~3 wks',
    image: heroReality,
  },
  {
    client: 'Village Investments — Creekside',
    title: 'Modernization of a 152-unit, 19-building senior community in Riverside.',
    service: 'Construction & Mgmt',
    stat: '$6M',
    image: heroCreekside,
  },
  {
    client: 'FedEx Ground — Santa Rosa',
    title: 'Design/build of a 68,169 SF hub on 10 acres, delivered on time & budget.',
    service: 'Development',
    stat: '$10M',
    image: heroFedexSantaRosa,
  },
  {
    client: 'FedEx Ground — Anchorage, AK',
    title: 'Land acquisition + build of an 18,870 SF TSA-compliant distribution facility.',
    service: 'Development',
    stat: 'Build-to-suit',
    image: heroFedexAlaska,
  },
  {
    client: 'Tractor Supply — Paso Robles',
    title: 'Secured tenant pre-sale, brokered the sale, later co-anchor leasing.',
    service: 'Brokerage & Leasing',
    stat: 'Build-to-suit',
    image: heroTractorSupply,
  },
]
