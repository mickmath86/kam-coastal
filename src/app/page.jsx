import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import  HeroMain  from '@/components/HeroMain'
import { CaseStudiesWithFilter } from '@/components/CaseStudiesWithFilter'

import logoReality from '@/images/clients/reality/logo-light.svg'
import logoWCIU from '@/images/clients/wciu/logo-light.svg'
import logoCrazyLove from '@/images/clients/crazy-love/logo-light.svg'
import logoLighthouse from '@/images/clients/lighthouse/logo-light.svg'
import logoCrazyLoveDark from '@/images/clients/crazy-love/logo-dark.svg'

import logoEF from '@/images/clients/ef/logo-light.svg'
import logoFairSky from '@/images/clients/fairsky/logo-light.svg'
import logoFedex from '@/images/clients/fedex/logo-light.svg'
import logoFrontierVentures from '@/images/clients/frontier-ventures/logo-light.svg'
import logoTractorSupply from '@/images/clients/tractor-supply/logo-light.svg'
import logoWalmart from '@/images/clients/walmart/logo-light.svg'
import logoWorldImpact from '@/images/clients/world-impact/logo-light.svg'

import imageLaptop from '@/images/projects/heros/wciu.jpg'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

// Non-Profit Client list
const NPClients = [
  ['Reality', logoReality],
  ['Crazy Love', logoCrazyLove],
  ['Lighthouse Bible Church', logoLighthouse],
  ['WCIU', logoWCIU],
  ["World Impact", logoWorldImpact], 
  ["Frontiir Ventures", logoFrontierVentures], 
  ["Education First", logoEF]

]
// For Profit Client list
const FPClients = [
  ['Walmart', logoWalmart],
  ['FedEx', logoFedex],
  ['Tractor Supply', logoTractorSupply],
  ['FairSky Park', logoFairSky],
  
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <div className="flex flex-col gap-24"> 
          <div>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              We’ve worked with some great mission-driven organizations...
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {NPClients.map(([client, logo]) => (
                <li key={client}>
                  <FadeIn>
                    <Image src={logo} alt={client} unoptimized />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
          </div>
          <div>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
              ...As well as some incredible for-profit clients
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
              role="list"
              className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {FPClients.map(([client, logo]) => (
                <li key={client}>
                  <FadeIn>
                    <Image src={logo} alt={client} unoptimized />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>

          </div>

        </div>
       
       
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return <CaseStudiesWithFilter caseStudies={caseStudies} />
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="What We Do"
        title="Full-Service Strategy. Mission-Aligned Results."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
         Whether you're seeking to develop, sell, or optimize your property, KAM provides the clarity, experience, and execution needed to move forward with confidence.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Development Advisory">
                  From entitlement to ground-up construction, we guide organizations through the full development lifecycle.
            </ListItem>
            <ListItem title="Portfolio & Property Analysis">
                 Comprehensive review of your holdings to identify opportunities, liabilities, and paths to maximize value.
            </ListItem>
            <ListItem title="Brokerage Services">
                  Sales and acquisitions with a specialized focus on mission-based real estate and institutional buyers.
            </ListItem>
            <ListItem title="Property & Project Stewardship">
                  Operational oversight and partner coordination to preserve value, minimize risk, and ensure projects align with mission.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let allCaseStudies = await loadCaseStudies()
  let caseStudies = allCaseStudies.filter(study => study.featured === true)

  return (
    <RootLayout>
          <FadeIn>
           
   
              <HeroMain />  
   
          </FadeIn>
      
      
          {/* <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
         
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
           At KAM Coastal, we help churches, schools, and mission-driven organizations unlock the full value of their real estate. From development to disposition, our team delivers solutions that support long-term impact.
          </p> */}
   

      <Clients />

      <CaseStudiesWithFilter caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Paul Chan', logo: logoCrazyLoveDark }}
      >
        Keith and his team have been invaluable to my brother, Francis, and me. It's rare to find true professionals who strike the perfect balance between understanding kingdom values while having the expertise to navigate the complexities of property transactions."  {/* From securing a larger facility that perfectly fits our growing needs to expertly negotiating the sale of our previous building, 
              they handled every detail with professionalism, integrity, and an unwavering commitment to excellence. Their ability to navigate complex negotiations with both 
              firmness and kindness gave us complete confidence every step of the way. It was a such a relief knowing that KAM was handling every detail, every step of the way.  */} <br />
      </Testimonial>

      <Services />

      <ContactSection />
    </RootLayout>
  )
}
