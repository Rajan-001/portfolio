"use client"
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';

export const works = [
    {
        id: 1,
        project_name: "excelidraw",
        project_description: "A collaborative whiteboard tool inspired by Excalidraw, allowing users to create and share drawings in real-time.",
        images: "/images/Bulb.jpg"
    },
    {
        id: 2,
        project_name: "taskify",
        project_description: "A task management app designed to help users organize and prioritize their daily activities efficiently.",
        images: "/images/Bulb.jpg"
    },
    {
        id: 3,
        project_name: "devconnect",
        project_description: "A social platform for developers to connect, share knowledge, and collaborate on projects.",
        images: "/images/Bulb.jpg"
    },
    {
        id: 4,
        project_name: "weatherly",
        project_description: "A weather forecasting app providing real-time updates and detailed forecasts for locations worldwide.",
        images: "/images/Bulb.jpg"
    },
    {
        id: 5,
        project_name: "meditrack",
        project_description: "A healthcare app that helps users track their medications, appointments, and health records in one place.",
        images: "/images/Bulb.jpg"
    },
    {
        id: 6,
        project_name: "shopwise",
        project_description: "An e-commerce platform that provides personalized shopping recommendations and seamless checkout experiences.",
        images: "/images/Bulb.jpg"
    }
];

export const Projects = () => {
  return (
    <div className='w-[100vw]  h-[calc(100dvh+250px)] overflow-x-hidden relative'>
    <div className='relative '> 
        <div className='text-teal-400 text-3xl mx-6 absolute  left-12'>My Projects</div>
    </div>
    <div className=' w-[calc(100dvw-200px)]  mx-18 mt-24'>
     {
        [...works].map((name,i)=>{
            return(
               <div key={i} className='group mt-12 relative ' >
                <div className='w-auto z-12 '>
                    <div className=''>
                    <div className='text-5xl uppercase w-auto text-teal-400 overflow-hidden inline-block group-hover:scale-110  group-hover:font-bold transition-all duration-200'>{name.project_name}
                    <div className='h-2 ml-1 w-0 group-hover:w-full  bg-black duration-600 origin-left transition-all'></div>
                </div> 
                </div>
                {/* <motion.div className='  h-[2px] bg-black  mt-6' variants={{  initial: { x: 0, width: 0 },hover: { x: 0, width: "100%"  },exit:{ x: 0, width: 0 }}} ></motion.div> */}
             
                </div>
            
                   <div className='text-2xl z-12 text-teal-300 transition-all  group-hover:text-teal-500 '>{name.project_description}</div>
                   <div  className='absolute -z-10 -right-100 -top-56 overflow-hidden opacity-0  group-hover:opacity-100 group-hover:right-24 group-hover:-top-8 transition-all duration-400'>
                   <Image src={"/images/Bulb.jpg"} width={400} height={400} alt="sfsdflsd" className=''/>
                   </div>
                </div>
                
            )
        })
     }
    </div>
    </div>
  )
}