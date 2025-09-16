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
import { Email } from '@/component/Email';



export default function About() {
  
  return (
    <div className="overflow-x-hidden ">
    <NavBar/>
    <CursorTrailCanvas
      color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
      <div className="h-screen w-screen flex justify-center items-center  relative overflow-hidden">
      {/* Container */}
      <div className="2xl:w-[calc(100dvw-300px)] w-[100dvw-100px] h-full grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center px-8 md:px-16">
        
        {/* Left: Profile Image */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition duration-700"></div>
          <Image
            src="/images/profile.jpg"
            width={300}
            height={300}
            alt="Profile Image"
            className="rounded-3xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-4">
            👋 Hi, I am
          </h2>
          <h1 className="uppercase bg-gradient-to-b from-teal-300 via-cyan-400 to-teal-600 bg-clip-text text-transparent font-extrabold text-5xl sm:text-6xl md:text-7xl 2xl:text-9xl drop-shadow-lg tracking-tight">
            Rajan
          </h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-xl">
            A <span className="text-teal-500 font-semibold">Full Stack Engineer</span> who loves building 
            scalable web apps, creating smooth user experiences, and making ideas come alive 🚀
          </p>
        </div>
      </div>
    </div>


       <div className='w-screen overflow-x-hidden '>

    <ProgressViewPortComponent/>

   <Email/>

        </div>
        </div>
  );
}




