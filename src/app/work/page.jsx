import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'

import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'

//new companies
import logoReality from '@/images/clients/reality/logo-dark.svg'
import logoWCIU from '@/images/clients/wciu/logo-dark.svg'
import logoLighthouse from '@/images/clients/lighthouse/logo-dark.svg'
import logoCrazyLove from '@/images/clients/crazy-love/logo-dark.svg'
import logoWalmart from '@/images/clients/walmart/logo-dark.svg'
import logoEF from '@/images/clients/ef/logo-dark.svg'
import logoFedex from '@/images/clients/fedex/logo-dark.svg'
import logoTractorSupply from '@/images/clients/tractor-supply/logo-dark.svg'
import logoFrontierVentures from '@/images/clients/frontier-ventures/logo-dark.svg'


import { formatDate } from '@/lib/formatDate'
import { loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function CaseStudies({ caseStudies }) {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {caseStudies.map((caseStudy) => (
          <FadeIn key={caseStudy.client}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <Image
                      src={caseStudy.logo}
                      alt=""
                      className="h-16 w-16 flex-none"
                      unoptimized
                    />
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={caseStudy.date}>
                        {formatDate(caseStudy.date)}
                      </time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={caseStudy.href}>{caseStudy.title}
                       <Image className="my-4 rounded-md"src={caseStudy.image.src} width={500} height={500}/>
                    </Link>
                  </p>
               
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {caseStudy.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button
                      href={caseStudy.href}
                      aria-label={`Read case study: ${caseStudy.client}`}
                    >
                      Read case study
                    </Button>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const clients = [
  ["Walmart", logoWalmart], 
  ["FedEx", logoFedex], 
  ['Reality', logoReality],
  ['Frontier Ventures', logoFrontierVentures],
  ["Education First", logoEF], 
  ["William Carey International University", logoWCIU], 
  ["Lighthouse Church", logoLighthouse], 
  ["Crazy Love Ministries", logoCrazyLove], 


]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          You’re in good company
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  let caseStudies = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our work"
        title="Where Vision Meets Execution"
      >
        <p>
        From land entitlements to ground-up development, our projects reflect a commitment to purpose-driven partnerships and lasting community impact.
        </p>
      </PageIntro>

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Kerry Jones', logo: logoWCIU }}
      >
        Keith and his team walked us through an extremely complicated process of sale for our 15+ acre campus. <br />
        It is easy to say without Keith’s countess hours, attention to detail and expertise that we would not have completed the sale and could have faced complications from breech of agreement. Keith is personable, knowledgable and fun to work with. He is extremely dedicated to serving his clients. A by product of our contractual relationship was the development of a life long friendship. That friendship goes beyond our Real Estate deal. If I were ever faced with liquidating a large Real Estate holding again, my first call would be to Keith. I highly recommend him as a qualified agent who works from integrity and experience.
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
