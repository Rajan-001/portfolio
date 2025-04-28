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
 <h1 className="text-5xl ml-16 text-teal-300">Skills</h1>
  <div className=" w-[calc(100vw-152px)] mt-12">
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
        <motion.div style={{x,opacity}} key={i} className="inline-block border-1 backdrop-blur-3xl w-auto px-5 py-2.5 mx-12 my-4 rounded-2xl border-0.8 border-teal-400">
         <div className="flex items-center">
         <div>
         <Image src={`${skill.path}`} alt="react-icons " width={25} height={25}/>
         </div>
         <div className="text-4xl ml-2 text-black">
            {skill.name}
         </div>
         </div>
        </motion.div>)
    })
   }
   </div>
    
    </div>)
}