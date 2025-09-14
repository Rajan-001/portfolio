"use client"
import { routes } from '@/app/data/NavigationRoutes'
import { useRouter } from 'next/navigation'
import React from 'react'


  

export function NavBar (){
    const router=useRouter()
  return (

    
         <nav className='absolute top-6 z-30 right-12  sm:mt-2  grid grid-cols-4 gap-0.5 border-2 rounded-4xl lg:w-100 duration-300 backdrop-blur-lg bg-transparent sm:w-[100px] md:w-[400px] '>
                        {
                           [...routes].map((x,i)=>(
                           (<li key={`/li/${i}`}  className='group hover:scale-115 cursor-pointer lg:rounded-3xl list-none  hover:text-teal-500 text-center duration-400 transition-all 2xl:py-2  xl:py-2 lg:py-1 sm:py-2 md:py-2 sm:text-xs sm:px-2 sm:rounded-xl' onClick={()=>router.push(x.href)}>
                                <a href={x.href} className=' lg:p-2 p-2 rounded-3xl  sm:p-1 block md:p-1.5 sm:text-xs md:text-[14px] lg:text-lg' >{x.title}</a>
                                </li>)
                           ))
                        }
                        </nav>
                   
  )
}