"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {}
 export const routes = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

export const Project = (props: Props) => {
    const router=useRouter()
  return (
    <header>
        <nav className='absolute top-6 right-12 grid grid-cols-4 gap-0.5 border-2 rounded-4xl w-100 duration-300 backdrop-blur-lg bg-transparent'>
        {
           [...routes].map((x,i)=>{
            return(<li key={`/li/${i}`}  className='group hover:scale-105 rounded-3xl list-none  hover:text-teal-500 text-center duration-400 transition-all py-4' onClick={()=>router.push(x.href)}>
                <a href={x.href} className=' py-2 rounded-3xl px-2 '>{x.title}</a>
                </li>)
           })
        }
        </nav>
        <div className='main flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20  '>
            <div className='bg-gradient-to-r from-teal-500 to-tera-500 bg-clip-text py-2 text-5xl font-bold text-teal-200 dark:from-teal-200 dark:to-teal-500 sm:text-6xl md:text-7xl xl:text-8xl'>
              <h1 className='font-bold'>
                Rajan
              </h1>
             </div>
             <div className='absolute top-96'>
              <h2 className='text-xl font-semibold text-teal-200 dark:text-zinc-100 md:text-3xl'>
                Full Stack Engineer
              </h2>
              </div>

        </div>
    </header>
  )
}