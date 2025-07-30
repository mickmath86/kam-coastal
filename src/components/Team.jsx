'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import imageKeithMathias from '@/images/team/keith-mathias.jpeg'
import imageMikeMathias from '@/images/team/mike-mathias.jpeg'
import imageMarkMathias from '@/images/team/mark-mathias.jpeg'
import imageJasonJewell from '@/images/team/jason-jewell.jpeg'
import imageKevinShepard from '@/images/team/kevin-shepard.jpeg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'

import { SocialMedia } from './SocialMedia'

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Keith Mathias',
        role: 'Co-Founder',
        image: { src: imageKeithMathias },
        bio: '',
        linkedIn: "keith-mathias-56469a58"
      },
      {
        name: 'Michael Mathias',
        role: 'Co-Founder | CMO',
        image: { src: imageMikeMathias },
        bio: '',
         linkedIn: "mmathias86"
      },
      {
        name: 'Mark Mathias',
        role: 'Partner & Business Relations',
        image: { src: imageMarkMathias },
        bio: '',
         linkedIn: "markmath"
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Jason Jewell',
        role: 'Financial Consultant',
        image: { src: imageJasonJewell },
        bio: '',
         linkedIn: "jewellholisticinvestments"
      },
      {
        name: 'Kevin Shepard',
        role: 'Construction Project Manager',
        image: { src: imageKevinShepard },
        bio: '',
         linkedIn: "kevin-shepard-176b4b135"
      },
      {
        name: 'Mark Pettit',
        role: 'Architect',
        image: { src: imageLeonardKrasner },
        bio: '',
         linkedIn: "markstephenpettit"
      },
    ],
  },
]
export function LinkedIn({handle}){
  if (!handle) return null

  return (
    <div>
      <Link
        href={`https://www.linkedin.com/in/${handle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin m-1  "
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
    </div>
  )
}

function Team() {
  const [open, setOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)

  const handleClick = (person) => {
    setSelectedPerson(person)
    setOpen(true)
  }

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div
                          className="group relative overflow-hidden rounded-3xl bg-neutral-100 cursor-pointer"
                          onClick={() => handleClick(person)}
                        >
                          <Image
                            alt={person.name}
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col align justify-end bg-linear-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                         <div className="flex items-center">
                          <p className="text-sm text-white">{person.role}</p>
                          <div className="ml-2  border-1 rounded-sm bg-none text-white transition duration-300 group-hover:text-black group-hover:bg-white">
                            <LinkedIn handle={person.linkedIn} />
                          </div>
                        </div>
                        
                          </div>
                       
                        </div> 
                      </FadeIn>
                    
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}

        {/* Modal Dialog */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            {selectedPerson && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedPerson.name}</DialogTitle>
                  <div className="flex items-center">
                      <DialogDescription>{selectedPerson.role}</DialogDescription>
                      <LinkedIn handle={selectedPerson.linkedIn}/>
                  </div>
                
                </DialogHeader>
                <div className="mt-4 space-y-4">
                  <Image
                    alt={selectedPerson.name}
                    {...selectedPerson.image}
                    className="rounded-lg w-full object-cover"
                  />
                  <p className="text-sm text-neutral-700">{selectedPerson.bio || 'Bio coming soon.'}</p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Container>
  )
}

export default Team
