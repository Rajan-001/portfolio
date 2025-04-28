"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

export const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];
  

export function NavBar (){
    const router=useRouter()
  return (

         <nav className='absolute top-6 right-12 grid grid-cols-4 gap-0.5 border-2 rounded-4xl w-100 duration-300 backdrop-blur-lg bg-transparent'>
                        {
                           [...routes].map((x,i)=>{
                            return(<li key={`/li/${i}`}  className='group hover:scale-105 rounded-3xl list-none  hover:text-teal-500 text-center duration-400 transition-all py-4' onClick={()=>router.push(x.href)}>
                                <a href={x.href} className=' py-2 rounded-3xl px-2 '>{x.title}</a>
                                </li>)
                           })
                        }
                        </nav>
  )
}