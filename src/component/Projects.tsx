"use client"
import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image';
import { works } from '@/app/data/work';



export const Projects = () => {
  return (
    <div className='w-[100vw]   overflow-hidden relative mt-48 sm:mt-0'>
    <div className='relative '> 
        <div className='text-teal-400 md:text-3xl mx-6 absolute  left-12 text-2xl'>My Projects</div>
    </div>

    <div className=' w-[calc(100dvw-200px)]  mx-18 mt-24'>
     {
        [...works].map((name,i)=>{
            return(
            <a key={i} href={name.link}>
              <div key={i}  className="group mt-20 relative cursor-pointer">
  {/* Project Name */}
  <div className="w-auto relative z-10">
    <h3 className="xl:text-6xl text-3xl font-extrabold uppercase bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(45,212,191,0.7)]">
      {name.project_name}
      {/* Underline animation */}
      <span className="block h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-700 mt-2 origin-left"></span>
    </h3>
  </div>

  {/* Project Description */}
  <p className="mt-6 xl:text-2xl text-lg leading-relaxed text-neutral-600 max-w-2xl transition-all duration-500 group-hover:text-neutral-300">
    {name.project_description}
  </p>

  {/* Hover Image */}
  <div className="absolute -z-10 opacity-0 group-hover:opacity-100 group-hover:-top-10 group-hover:right-20 transition-all duration-700 ease-out right-32 -top-24">
    <Image
      src={name.images}
      width={420}
      height={420}
      alt={name.project_name}
      className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
    />
  </div>
              </div>
             </a>

                
            )
        })
     }
    </div>
    </div>
  )
}