'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { formatDate } from '@/lib/formatDate'

export function WorkCaseStudiesWithFilter({ caseStudies }) {
  // Extract unique service types from case studies
  const serviceTypes = ['All', ...new Set(caseStudies.map(study => study.service))];

  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      
      <div className="mt-8">
        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-start sm:justify-center mb-8 overflow-x-auto">
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
                <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
                  {filteredStudies.map((caseStudy) => (
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
                                {caseStudy.image && (
                                  <Image 
                                    className="my-4 rounded-md" 
                                    src={caseStudy.image.src} 
                                    width={500} 
                                    height={500}
                                    alt={caseStudy.title}
                                  />
                                )}
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
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </Container>
  )
}
