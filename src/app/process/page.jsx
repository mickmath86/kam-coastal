import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import imagePlan from '@/images/plan.jpg'
import imageExecute from '@/images/execute.jpg'
import { RootLayout } from '@/components/RootLayout'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
            Every successful project begins with understanding. In the Discover phase, we listen deeply—getting to know your organization’s goals, constraints, and mission. We assess the physical property, the market conditions, and the organizational landscape to begin defining what’s possible.        </p>
        <p>
          This phase is intentionally collaborative. We don’t arrive with assumptions—we earn your trust by uncovering the unique dynamics of your property and vision. The result is a shared understanding of the opportunity and a solid foundation for everything that follows.        </p>
                
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Initial consultation</TagListItem>
        <TagListItem>Property walkthrough</TagListItem>
        <TagListItem>Zoning review</TagListItem>
        <TagListItem>Market study</TagListItem>
        <TagListItem>Stakeholder alignment</TagListItem>
      </TagList>
    </Section>
  )
}

function Plan() {
  return (
    <Section title="Plan" image={{ src: imagePlan, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
    Once the opportunity is clear, we move into the planning phase—where strategy takes shape. This is where we combine insight with execution: defining project goals, assembling the right partners, and preparing a roadmap that leads to results. Whether the next step is a sale, a build, or a phased redevelopment, this is where we map out how to get there.
        </p>
        <p>
         Planning at MKM is both creative and rigorous. We balance vision with real-world constraints, crafting timelines, budgets, and deal structures that are achievable and aligned with your objectives. Our experience in both the public and private sectors gives us a unique edge in preparing projects for success.
        </p>
       
      </div>

      <Blockquote
        author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}
        className="mt-12"
      >
        Studio were so regular with their progress updates we almost began to
        think they were automated!
      </Blockquote>
      <TagList className="mt-4">
        <TagListItem>Development roadmap</TagListItem>
        <TagListItem>Financial modeling</TagListItem>
        <TagListItem>Entitlement planning</TagListItem>
        <TagListItem>Partner coordination</TagListItem>
        <TagListItem>Timeline definition</TagListItem>
      </TagList>
    </Section>
  )
}

function Execute() {
  return (
    <Section title="Execute" image={{ src: imageExecute, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
        Execution is where plans become reality. MKM serves as the central point of coordination—bringing together architects, engineers, legal teams, city agencies, and contractors to ensure your project progresses smoothly and efficiently. Whether we’re managing a ground-up development or marketing a property for sale, our commitment to detail and communication keeps everything on track.
        </p>
        <p>
         We take pride in not just delivering projects—but doing so with transparency, accountability, and integrity. Our team remains engaged until the final milestone is met, ensuring nothing falls through the cracks. And even after project delivery, we remain a long-term resource to ensure ongoing success.
        </p>
       
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
    <List className="mt-8">
  <ListItem title="Team Management">
    We coordinate internal teams and external partners to ensure everyone stays aligned, informed, and accountable throughout the project lifecycle.
  </ListItem>
  <ListItem title="Permit Execution">
    Our team oversees the full permitting process—working directly with city officials and consultants to keep approvals on track.
  </ListItem>
  <ListItem title="Launch & Marketing">
    Whether launching a project or listing a property, we handle the rollout with care—positioning it effectively to achieve your goals.
  </ListItem>
  <ListItem title="Construction Oversight">
    From groundbreaking to punch list, we monitor progress, manage timelines, and handle roadblocks to ensure quality delivery.
  </ListItem>
  <ListItem title="Project Completion & Handoff">
    We close out the project with full documentation, operational recommendations, and post-completion support as needed.
  </ListItem>
</List>
    </Section>
  )
}

function Values() {
  return (
   <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
  <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
    <GridPattern
      className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
      yOffset={-270}
    />
  </div>

  <SectionIntro
    eyebrow="Our values"
    title="Guided by Clarity, Built on Trust"
  >
    <p>
      At KAM Coastal, our values are more than words — they shape how we show up every day. From entitlement through execution, our team operates with discipline, transparency, and a commitment to creating long-term value for every client we serve.
    </p>
  </SectionIntro>

  <Container className="mt-24">
    <GridList>
      <GridListItem title="Clarity First">
        We lead with transparency and alignment — clear timelines, clear roles, and no surprises from start to finish.
      </GridListItem>
      <GridListItem title="Execution Matters">
        Great ideas only go so far. We pride ourselves on delivering high-quality results that meet the moment and the mission.
      </GridListItem>
      <GridListItem title="Long-Term Thinking">
        Whether it’s a sale or a development, we always consider the lasting impact of each decision we help shape.
      </GridListItem>
      <GridListItem title="Partner Mindset">
        We work as an extension of your team, treating your goals as our own and advocating for your best interests.
      </GridListItem>
      <GridListItem title="Professionalism & Accountability">
        We take responsibility for outcomes, communicate proactively, and hold ourselves to the highest standard of integrity.
      </GridListItem>
      <GridListItem title="Adaptive Strategy">
        No two sites — or clients — are the same. Our process is built to adapt, evolve, and respond to the unique needs of each project.
      </GridListItem>
    </GridList>
  </Container>
</div>

  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Our process" title=" From Concept to Completion">
        <p>
         Every project begins with a conversation. At KAM Coastal, our process is designed to move projects forward with clarity, speed, and impact. Whether you’re considering development, disposition, or something in between—we help you define a path and execute with precision.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Plan />
        <Execute />
      </div>

      <Values />

      <ContactSection />
    </RootLayout>
  )
}
