import Image from 'next/image'
import Team from '@/components/Team'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'

import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="How We Work"
        title="Values That Guide Every Project"
        invert
      >
        <p>
         Our culture is rooted in integrity, stewardship, and a commitment to long-term relationships. These are more than just ideals—they're the foundation of how we build trust and deliver results.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Accountable" invert>
              You’ll always know where things stand, what’s next, and who’s responsible—because trust is built on accountability.</GridListItem>
          <GridListItem title="Operational Excellence" invert>
          From entitlement through delivery, we bring proven processes and attention to detail that protect your timeline and budget.
          </GridListItem>
          <GridListItem title="Clarity" invert>
            We believe great outcomes come from clear expectations, straight talk, and no surprises.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}




export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro eyebrow="Who We Are" title="Real Estate with Purpose">
        <p>
         KAM Coastal is a mission-driven real estate development and brokerage firm serving churches, schools, and nonprofits across California and beyond.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            With decades of combined experience in brokerage, development, and construction management, KAM Coastal exists to help purpose-driven institutions steward their real estate wisely. Our projects range from affordable housing developments to complex property dispositions—always focused on long-term impact and community benefit.
          </p>
          {/* <p>
            At Studio, we’re more than just colleagues — we’re a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
          </p> */}
        </div>
      </PageIntro>
      <Container className="mt-16">
       <StatList>
        <StatListItem value="$300M+" label="Transaction volume closed" />
        <StatListItem value="20+" label="Faith-based and institutional clients served" />
        <StatListItem value="150+" label="Acres of land repositioned or entitled" />
      </StatList>
      </Container>

      <Culture />

      <Team />

      {/* <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      /> */}

      <ContactSection />
    </RootLayout>
  )
}
