import { Download } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import heroWCIU from "@/images/projects/heros/wciu.jpg"

import { Button } from "@/components/Button";
import { FadeIn } from "./FadeIn";
import { Container } from "./Container";

const Hero5 = () => {
  return (
    <FadeIn className="overflow-hidden py-32">
    
        <div className="">
          <div className="lg:flex lg:items-center lg:justify-end">
               <div
                  className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                  <h1 className="text-4xl font-bold text-pretty lg:max-w-md lg:text-7xl">
                  Empowering Purpose-Driven Real Estate
                  </h1>
                  <p className="max-w-xl text-xl font-medium lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                  <div className="flex w-full justify-center lg:justify-start">
                  <Link href="/work">
                        <Button className="w-full sm:w-auto" size="lg">
                      
                        Our Work
                      </Button>
                  </Link>
              
                  </div>
                </div>
                <Image
                  width={500}
                  height={1000}
                  src= {heroWCIU.src}
                  alt="placeholder hero"
                  className="aspect-video rounded-md object-cover" />
              </div>
          </div>
         
 
    </FadeIn>
  );
};

export { Hero5 };
