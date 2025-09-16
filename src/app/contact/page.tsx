"use client"
import { NavBar } from '@/component/NavBar'
import React from 'react'
import "../../app/globals.css";
import { CursorTrailCanvas } from '@/component/CursorTrailCanvas';

import { Email } from '@/component/Email';


export default function page () {
  
  return (
    <div className="overflow-x-hidden relative ">
       <NavBar/>
       <CursorTrailCanvas
             color="hsla(183, 64%, 27%, 0.4)"
               className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
           />
          
       
           <div className='overflow-y-hidden'>
           <Email/> 
           </div>
       </div>
     
  )
}