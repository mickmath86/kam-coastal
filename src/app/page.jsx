import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import  HeroMain  from '@/components/HeroMain'

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

const NPClients = [
  ['Reality', logoReality],
  ['Crazy Love', logoCrazyLove],
  ['Lighthouse Bible Church', logoLighthouse],
  ['WCIU', logoWCIU],
  ["World Impact", logoWorldImpact], 
  ["Frontiir Ventures", logoFrontierVentures], 
  ["Education First", logoEF]

]

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
  return (
    <>
      <SectionIntro
        title="Real Projects. Real Impact."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From large-scale developments to strategic brokerage deals, our work speaks for itself. Explore how we’ve partnered with faith-based organizations to bring meaningful projects to life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                    <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                    <span>{caseStudy.service}</span>
                </p>
                 {caseStudy.image && (
                    <Image
                    src={caseStudy.image.src}
                    alt={`${caseStudy.client} case study`}
                    width={500}
                    height={300}
                    className="mt-6 rounded-md object-cover"
                  />
                  )}

                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>

              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
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
         Whether you're seeking to develop, sell, or optimize your property, MKM provides the clarity, experience, and execution needed to move forward with confidence.
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
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

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

      <CaseStudies caseStudies={caseStudies} />

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
