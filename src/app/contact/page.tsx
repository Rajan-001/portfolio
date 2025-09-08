
import { NavBar } from '@/component/NavBar'
import React from 'react'
import "../../app/globals.css";
import { CursorTrailCanvas } from '@/component/CursorTrailCanvas';
import EmailContactSection from '@/component/Contact';


export default function page () {
  
  return (
    <div className="overflow-x-hidden relative ">
       <NavBar/>
       <CursorTrailCanvas
             color="hsla(183, 64%, 27%, 0.4)"
               className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
           />
           <div className='h-[100dvh-500px] '>
           <div className='text-center mt-24'>
            <p className='text-3xl py-8 font-bold'>Contact me</p>
            <p className='text-2xl pb-4'>
            I'd love to talk about any new opportunities or projects
            </p>
            </div>
           <div className="flex justify-center items-center  w-screen ">
         
            <form className="w-112 mx-auto p-10 backdrop-blur-sm shadow-md rounded-4xl ">
              <h1 className='text-2xl'>Fill in the Form</h1>
              <div className='grid grid-cols-2 mt-4 gap-2'>
              <div className="mb-4">
                <label htmlFor="firstName" className=" text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="mt-2  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className=" text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-2  w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                  placeholder="Enter your email"
                />
              </div>
              </div>
              <div className="mb-4">
                <label htmlFor="details" className="block text-sm font-medium text-gray-700">
                  Details
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-4 px-4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-teal-600 cursor-pointer text-white py-2 px-4 rounded hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
            </div>
           </div>
           <div className='overflow-y-hidden'>
           <EmailContactSection/> 
           </div>
       </div>
     
  )
}