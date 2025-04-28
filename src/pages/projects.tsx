import { CursorTrailCanvas } from '@/component/CursorTrailCanvas'
import { NavBar } from '@/component/NavBar'
import React from 'react'
import "../app/globals.css";
import Image  from 'next/image';

export const projects = [
  {
    id: 1,
    name: "Smart Bulb Controller",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "A smart home application to control and automate light bulbs remotely."
  },
  {
    id: 2,
    name: "Weather App",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "An application that provides real-time weather updates and forecasts."
  },
  {
    id: 3,
    name: "Portfolio Website",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "A personal portfolio website to showcase projects and skills."
  },
  {
    id: 4,
    name: "E-commerce Platform",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "A platform for buying and selling products online with secure payment options."
  },
  {
    id: 5,
    name: "Chat Application",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "A real-time chat application with support for group and private messaging."
  },
  {
    id: 6,
    name: "Task Manager",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "An application to manage and organize tasks efficiently with reminders."
  },
  {
    id: 7,
    name: "Expense Tracker",
    image: "/images/Bulb.jpg",
    link: "https://www.google.com",
    description: "A tool to track and analyze personal expenses and manage budgets."
  }
];

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
                  <div className='grid grid-cols-2 gap-8'>
                {
                  [...projects].map((x,i)=>{
                    return <div key={i} className='w-148 h-120 border-2 border-amber-300 rounded-2xl overflow-hidden '>
                      <Image width={400} height={400} src={x.image} alt='Image'  className="object-cover w-full h-[80%]"/>
                      <div className='text-xl m-1 ml-2'>
                        {x.name}
                        </div>
                        <div className='ml-2'>
                        {x.description}
                        </div>
 
                        <div className=' flex justify-end pr-4'>
                         <a href={x.link} className='underline'>Source Code</a>
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