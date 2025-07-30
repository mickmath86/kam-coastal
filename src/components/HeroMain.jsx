'use client'
import Link from 'next/link'
import { Button } from './ui/button'
import { Container } from './Container'
import heroImage from "@/images/projects/heros/wciu.jpg"
import { FadeIn } from './FadeIn'



export default function HeroMain() {


  return (
    <FadeIn>
    <div className="bg- mt-10">


      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            
                <h1 className="text-5xl font-display font-semibold tracking-tight  text-pretty text-gray-900 sm:text-7xl">
               Empowering purpose-driven Real Estate
                </h1>
                <p className="mt-8 font-display text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                We help for-profit and mission-driven organizations identify underperforming real estate and unlock its full potential through strategic evaluation and actionable solutions.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/work"
                  
                  >
                      <Button>Our Work</Button> 
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt=""
            src={heroImage.src}
            className="aspect-3/2 object-cover lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
    </FadeIn>
  )
}
