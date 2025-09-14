import { CursorTrailCanvas } from '@/component/CursorTrailCanvas'
import { NavBar } from '@/component/NavBar'
import React from 'react'
import "../../app/globals.css";
import Image  from 'next/image';
import { projects } from '../data/project';


export default function page () {
  return (
    <div className='overflow-x-hidden '>
       <NavBar/>
          <CursorTrailCanvas
            color="hsla(183, 64%, 27%, 0.4)"
              className="pointer-events-none fixed inset-0 -z- h-full w-full"
          />
       <div className="w-screen flex flex-col items-center px-4 sm:px-8 lg:px-20">
  {/* Heading */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-200">
              Projects
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-500 mt-2">
              Here are some of the projects I&apos;d like to share
            </p>
          </div>

            {/* Projects Grid */}
            
        <div className="w-full mt-8 flex justify-center">
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full max-w-[1440px]">
            {projects.map((project, i) => (
              <div
                key={i}
                className="border-2 border-cyan-500 rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300 z-20"
              >
                {/* Project Image */}
                <Image
                  width={400}
                  height={400}
                  src={project.image}
                  alt={project.name}
                  className="object-fill w-full h-48 sm:h-56 md:h-64"
                />

            {/* Project Info */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold bg-clip-text text-transparent   bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-400">
                {project.name}
              </h3>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-slate-500 flex-1">
                {project.description}
              </p>

           
              {project.link && (
                <div className="mt-4 flex justify-end">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sm sm:text-base text-blue-400 hover:text-orange-400"
                  >
                    Live Link
                  </a>
                </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
       </div>


         </div>
 
  )
}