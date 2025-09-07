"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image"

export const skills = [
    {
        id: 1,
        name: "React",
        path: "/icons/react.svg",
    },
    {
        id: 2,
        name: "Next Js",
        path: "/icons/next-js.svg",
    },
    {
        id: 3,
        name: "Tailwind",
        path: "/icons/tailwind-css.svg",
    },
    {
        id: 4,
        name: "TypeScript",
        path: "/icons/typescript.svg",
    },
    {
        id: 5,
        name: "JavaScript",
        path: "/icons/javascript.svg",
    },
    {
        id: 6,
        name: "Node",
        path: "/icons/node-js.svg",
    },
    {
        id: 7,
        name: "GSAP",
        path: "/icons/gsap.svg",
    },
    {
        id: 8,
        name: "Framer Motion",
        path: "/icons/framer.svg",
    },
    {
        id: 9,
        name: "Express",
        path: "/icons/express.svg",
    },
    {
        id: 10,
        name: "Git",
        path: "/icons/git.svg",
    },
    {
        id: 11,
        name: "GitHub",
        path: "/icons/github.svg",
    },
]

export  default function Skills(){
    const { scrollY } = useScroll();

    return(<div className="w-screen h-screen">
 <h1 className="text-5xl ml-16 text-teal-300 sm:text-xs md:text-4xl">Skills</h1>
  <div className=" w-[calc(100vw-152px)] mt-12 sm:mt-4 ">
   {
    [...skills].map((skill,i)=>{
       const scrollTrigger=300+i*50;

       const x=useTransform(
        scrollY,
        [scrollTrigger-600,scrollTrigger-200],
        [-500,0]
       )
       const opacity=useTransform(
        scrollY,
        [scrollTrigger-300,scrollTrigger-100],
        [0,1]
       )
        
return (
     <motion.div
  style={{ x, opacity }}
  key={i}
  className="inline-block rounded-2xl border border-teal-400/70 bg-white/30 backdrop-blur-xl shadow-lg hover:shadow-teal-200/50 
             px-5 py-3 mx-6 my-3 sm:w-24 md:w-auto md:px-6 md:py-3 md:mx-12 md:my-4 lg:px-8 lg:py-4 
             transition-transform duration-300 hover:scale-105"
>
  <div className="flex items-center">
    {/* Icon */}
    <Image
      src={skill.path}
      alt={`${skill.name} icon`}
      width={28}
      height={28}
      className="sm:w-7 sm:h-7 lg:w-9 lg:h-9"
    />

    {/* Label */}
    <span className="ml-3 text-xs sm:text-sm md:text-lg lg:text-2xl font-semibold text-gray-900 dark:text-gray-100">
      {skill.name}
    </span>
  </div>
</motion.div>

        
    
    )
    })
   }
   </div>
    
    </div>)
}