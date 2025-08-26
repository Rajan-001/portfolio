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
         <div className='w-screen items-center '>
          <div className='mt-24 ml-12'>
         <div className='text-3xl text-teal-300 font-bold'>Projects</div>
                  <div className='text-2xl text-teal-300'> Here are some of the projects I'd like to share</div>
           </div>
       <div className='flex  items-center justify-center'>
         <div className=' w-[calc(100vw-300px)]   mt-6 flex items-center justify-center '>
              <div>
                  <div className='2xl:grid 2xl:grid-cols-2 md:gap-8 mt-2'>
                {
                  [...projects].map((x,i)=>{
                    return <div key={i} className='md:w-156 lg:w-200 md:h-128 h-84 w-80 border-2 border-amber-300 rounded-2xl overflow-hidden mt-2 md:mt-4'>
                      <Image width={400} height={400} src={x.image} alt='Image'  className="object-cover w-full h-[75%] "/>
                      <div className='md:text-xl m-1 ml-2 text-xs'>
                        {x.name}
                        </div>
                        <div className='ml-2 md:text-xl text-xs'>
                        {x.description}
                        </div>
 
                        <div className=' flex justify-end pr-4'>
                         <a href={x.link} className='underline text-xs'>Source Code</a>
                          </div>
                    </div>
                  })
                }
            </div>
            </div>

            </div> 
            </div>
         </div> 
         </div>
 
  )
}