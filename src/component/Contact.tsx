"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function EmailContactSection(){
const [formWindow,setFormWindow]=useState(false)
    return(
    <>
       <div className='cursor-pointer flex justify-center items-center md:h-120 h-72 mt-16'>
    <div className='bg-gradient-to-bl from-teal-300  to-teal-600 h-72 sm:h-90 md:w-240 w-120 rounded-4xl flex flex-col text-white justify-center items-center gap-8 '>
    <div>
      <button className='text-gray-500 md:px-6 px-6 py-1 border-2 rounded-2xl text-xl  bg-white uppercase bold cursor-pointer' onClick={()=>{navigator.clipboard.writeText("rajanpalial123@gmail.com");      
      }}>Get In Touch</button>
    </div>
    <div className='md:text-4xl underline text-2xl'>
      <p className='' >rajanpalial123@gmail.com</p>
    </div>
    <div>
      <button className='text-gray-700 w-52 h-14 border-2 rounded-2xl  bg-white uppercase bold text-xl hover:scale-110 transition-all duration-150' onClick={()=>setFormWindow(x=>!x)}>
        Send Message
      </button>
    
    </div>
    </div>
    </div>
    {
      formWindow&&
      <div className='flex justify-center items-center'>
      <motion.div initial={{y:0,opacity:0}} animate={{y:-300,opacity:1}} transition={{delay:0,duration:0.2}} className='h-126 w-96 md:w-180 overflow-y-hidden rounded-2xl bg-teal-400 absolute justify-center items-center'>
          <div className='w-full px-16 mt-16'>
            <IoCloseSharp size={32} className='text-white absolute top-6 right-12 cursor-pointer ' onClick={()=>setFormWindow(false)} />
      <input type="text" placeholder="Name" className="w-full my-2 px-4 py-2 border rounded-md bg-white" />
      <input type="email" placeholder="Email" className="w-full  my-2 px-4 py-2 border rounded-md bg-white" />
      <input type="text" placeholder="Subject" className="w-full  my-2 px-4 py-2 border rounded-md bg-white" />
      <textarea placeholder="Message" className="w-full px-4 py-2  my-2 border rounded-md resize-none bg-white" rows={4}></textarea>
      <a  href="mailto:rajan1801282@gmail.com" className="w-full cursor-pointer px-4 py-3 bg-white  my-2 rounded-2xl  transition-all">Submit</a>

        </div>
    </motion.div>
    </div>
    }
    
    </>)
}