'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { SectionIntro } from '@/components/SectionIntro'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

export function CaseStudiesWithFilter({ caseStudies }) {
  // Extract unique service types from case studies
  const serviceTypes = ['All', ...new Set(caseStudies.map(study => study.service))];
  
  return (
    <>
      <SectionIntro
        title="Real Projects. Real Impact."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From large-scale developments to strategic brokerage deals, our work speaks for itself. Explore how we've partnered with faith-based organizations to bring meaningful projects to life.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center  mb-8 overflow-x-auto">
            <TabsList className="flex gap-1 w-fit min-w-max pl-4 pr-8 sm:px-0">
              {serviceTypes.map((service) => (
                <TabsTrigger key={service} value={service} className="px-6 whitespace-nowrap flex-shrink-0">
                  {service}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {serviceTypes.map((service) => {
            const filteredStudies = service === 'All' 
              ? caseStudies 
              : caseStudies.filter(study => study.service === service);
            
            return (
              <TabsContent key={service} value={service}>
                <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                  {filteredStudies.map((caseStudy) => (
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
              </TabsContent>
            );
          })}
        </Tabs>
       <FadeIn>
        <div className="mt-6 flex justify-center">
          <Button href="/work" className="">See All Projects</Button>
          
        </div>
        </FadeIn> 
      </Container>
    </>
  )
}
