'use client'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ScrollArea } from "@/components/ui/scroll-area"


import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Container } from '@/components/Container'
import { Border } from '@/components/Border'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import imageKeithMathias from '@/images/team/keith-mathias.jpeg'
import imageMikeMathias from '@/images/team/mike-mathias.jpeg'
import imageMarkMathias from '@/images/team/mark-mathias.jpeg'
import imageJasonJewell from '@/images/team/jason-jewell.jpeg'
import imageKevinShepard from '@/images/team/kevin-shepard.jpeg'
import imageAvatar from '@/images/team/avatar.png'
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
        bio: (
         <div className="flex flex-col ">
          <p><strong>Keith Mathias</strong> has been a licensed Real Estate Broker and General Contractor since 1984, bringing extensive experience in commercial land development and construction. He has successfully acquired, entitled, and built numerous commercial business parks across California, including areas like, Santa Maria, Valencia, Oxnard, and Ventura.  </p><br />
           <p>Keith has also developed build-to-suit properties throughout the Western United States for clients such as FedEx Express, Univision, and Tractor Supply. </p><br />
          <p> Beyond his development projects, he is a respected consultant for faith-based organizations, assisting entities like World Impact and Crazy Love Ministries in strategic real estate development and disposition. Residing in Newbury Park, California, with his wife Robin, Keith is an active church elder and family man, proud of his three adult children and two grandsons.</p>
          </div>
          ),  
          linkedIn: "keith-mathias-56469a58"
      },
      {
        name: 'Michael Mathias',
        role: 'Co-Founder',
        image: { src: imageMikeMathias },
        bio: (
          <div className="flex flex-col ">
         <p> As a licensed real estate broker, <strong>Mike Mathias</strong> combines his expertise in real estate with a background in high-level marketing and production. </p> <br />
         <p>Previously, he led major projects for global brands like Google, Nike, and Samsung, managing large-scale digital campaigns and platform redesigns. Now, he focuses on real estate, leveraging technology to streamline property management and investment strategies. </p> <br />
         <p>Based in Ventura County with his wife, Dana, and their son, Ryan, Mike is dedicated to creating innovative solutions for investors and property owners.</p>
           </div>),  
         linkedIn: "mmathias86"
      },
      {
        name: 'Mark Mathias',
        role: 'Co-Founder',
        image: { src: imageMarkMathias },
        bio: (
          <div className="flex flex-col">
                <p>As a licensed real estate broker who's sold +$20M worth of investment property, and as a property manager, <strong>Mark Mathias</strong> has managed several apartment complexes with Thrive Communities in Seattle, WA.</p><br />
                <p>Additionally, Mark was a Product Manager for a tech start-up, Enervee, preparing him to work cross-functionally with teams to meet deadlines, manage technically complex projects, and leverage technology to streamline systems and processes.</p>
          </div> 
        ), 
        linkedIn: "markmath"
      },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Jason Jewell',
        role: 'Lead Financial Consultant',
        image: { src: imageJasonJewell },
        bio: '',
         linkedIn: "jewellholisticinvestments"
      },
      {
        name: 'Kevin Shepard',
        role: 'Lead Construction Manager',
        image: { src: imageKevinShepard },
        bio: (
        <div className="flex flex-col">

   
          <p><strong>Kevin Shepard </strong>is a seasoned construction and real estate development professional with over two decades of hands-on experience delivering high-impact residential and mixed-use projects across California. 
        Currently serving as a Senior Project Manager at AvalonBay Communities, Kevin oversees all facets of large-scale developments—most notably AVA Hollywood, a 695-unit mixed-use podium project, the company’s largest West Coast build to date. </p>
       <p> He also leads AvalonBay’s statewide ADU initiative, reflecting his depth in both ground-up development and strategic infill solutions. Kevin’s expertise spans the full lifecycle of construction and development, from preconstruction and entitlement to budgeting, procurement, scheduling, and project delivery.</p> <br />
       <p> His prior experience includes leading roles at Snyder Langston and Hill Contractors, and nearly a decade as owner/developer of Shepard Contracting Group, where he developed custom homes in Malibu and the Santa Monica Mountains. With a leadership style rooted in collaboration and accountability, Kevin is known for building high-performing teams, delivering projects on schedule and within budget, and fostering long-term relationships with stakeholders, consultants, and jurisdictions. 

        </p> <br />
       <p> He earned his BA in Communication Arts & Sciences from the University of Southern California, where he was also a two-time NCAA Division I National Champion in Men’s Volleyball.</p>
        </div>
        ), 
        linkedIn: "kevin-shepard-176b4b135"
      },
      {
        name: 'Mark Pettit',
        role: 'Lead Architect',
        image: { src: imageAvatar },
        bio: (
          
          <div>
            <strong>Mark Pettit</strong> is a highly accomplished architect and entitlement specialist with over four decades of experience shaping the built environment across Southern California. <br /> 
            With degrees in both Architecture and Real Estate Development from The Pennsylvania State University, Mark brings a rare blend of design vision, technical execution, and development strategy to every project he touches. <br />
            <br />Since 1986, Mark has been a key figure at DIaL Services / Lauterbach & Associates Architects in Oxnard, CA, where he has led the entitlement, design, and construction of a wide range of project types—from single-family homes and large master-planned communities to mixed-use developments, religious campuses, commercial centers, and complex industrial facilities. 
            His deep experience navigating city and county permitting processes has made him an invaluable partner for clients looking to bring ambitious projects to life. 
            Mark’s work reflects a lifelong commitment to community-driven design. <br /><br />He has served on the Board of Directors for the Housing Trust Fund and Housing Land Trust of Ventura County, helping to advance affordable housing initiatives throughout the region. He is also an active member and past board member of the American Institute of Architects, Ventura County chapter. 
            Grounded in both practice and purpose, Mark continues to advocate for thoughtful, sustainable growth that meets the evolving needs of California’s communities.
      
          </div>
          ),  linkedIn: "markstephenpettit"
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
         
          <DialogContent className=" sm:max-w-[925px] mt-10">
          <ScrollArea className="max-h-[75vh]">
            <FadeIn>
            {selectedPerson && (
               <>
                  <DialogHeader className="flex items-center">
                
                  

                  
                  <Image
                      alt={selectedPerson.name}
                      {...selectedPerson.image}
                      className="rounded-lg w-75 object-cover"
                    />
                    <DialogTitle>{selectedPerson.name}</DialogTitle>
                    <div className="flex items-center align-center">
                        <DialogDescription>{selectedPerson.role}</DialogDescription>
                        <div className="border-1 rounded-sm cursor-pointer ml-2">
                        <LinkedIn handle={selectedPerson.linkedIn}/>
                        </div>
                     
                    </div>
                  
                  </DialogHeader>
                    <div className="mt-4 space-y-4 gap-4">
                   
                         {/* <p className="text-md text-neutral-700">{selectedPerson.bio || 'Bio coming soon.'}</p> */}
                         {selectedPerson.bio || 'Bio coming soon.'}
                    
                    </div>
              
               </>
            )}
            </FadeIn>
            </ScrollArea>
          </DialogContent>
         
        </Dialog>
         
        
      </div>
    </Container>
  )
}

export default Team
