"use client"

import React from 'react'



export  function MainPage () {
   
  return (
    <div className='w-screen h-screen'>
    <header>
   
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
    </div>
  )
}