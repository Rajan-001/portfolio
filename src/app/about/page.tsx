"use client"
import Image from 'next/image';
import React from 'react';
import {NavBar} from "@/component/NavBar";
import "../../app/globals.css";
import { CursorTrailCanvas } from '@/component/CursorTrailCanvas';

import { ProgressViewPortComponent } from '@/component/ProgressViewPortComponent';
import { motion } from 'framer-motion';
import { IoCloseSharp } from 'react-icons/io5';
import EmailContactSection from '@/component/Contact';



export default function About() {
  
  return (
    <div className="overflow-x-hidden ">
    <NavBar/>
    <CursorTrailCanvas
      color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
    <div className=' h-screen w-screen flex justify-center items-center  '>
      <div className='2xl:w-[calc(100dvw-300px)] w-[100dvw-100px] p-12 h-full text-center grid grid-cols-2 justify-center items-center'>
        <div>
          <Image src="/images/Bulb.jpg" width={500} height={500} alt="Profile Image" />
        </div>
         <div className='2xl:text-9xl md:text-3xl sm:text-xl text-xl bg-gradient-to-b from-teal-300 to-teal-500 bg-clip-text text-transparent'>
          Hi<br/>
           I am <br/>
          <p className='uppercase mt-3'>Rajan</p>
         </div>
      </div>
    </div>

       <div className='w-screen overflow-x-hidden '>

    <ProgressViewPortComponent/>

   <EmailContactSection/>

        </div>
        </div>
  );
}




