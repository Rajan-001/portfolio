import { motion } from "framer-motion";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function EmailContactSection(){
const [formWindow,setFormWindow]=useState(false)
    return(
    <>
       <div className='flex justify-center items-center h-120 mt-16'>
    <div className='bg-gradient-to-bl from-teal-300  to-teal-600 h-90 w-240 rounded-4xl flex flex-col text-white justify-center items-center gap-8 '>
    <div>
      <button className='text-gray-500 px-6 py-1 border-2 rounded-2xl  bg-white uppercase bold cursor-pointer' onClick={()=>{navigator.clipboard.writeText("rajanpalial123@gmail.com");      
      }}>Get In Touch</button>
    </div>
    <div className='text-4xl underline '>
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
      <motion.div initial={{y:0,opacity:0}} animate={{y:-300,opacity:1}} transition={{delay:0,duration:0.2}} className='h-126 w-180 overflow-y-hidden rounded-2xl bg-teal-400 absolute justify-center items-center'>
          <div className='w-full px-16 mt-16'>
            <IoCloseSharp size={32} className='text-white absolute top-6 right-12 cursor-pointer ' onClick={()=>setFormWindow(false)} />
      <input type="text" placeholder="Name" className="w-full my-2 px-4 py-2 border rounded-md bg-white" />
      <input type="email" placeholder="Email" className="w-full  my-2 px-4 py-2 border rounded-md bg-white" />
      <input type="text" placeholder="Subject" className="w-full  my-2 px-4 py-2 border rounded-md bg-white" />
      <textarea placeholder="Message" className="w-full px-4 py-2  my-2 border rounded-md resize-none bg-white" rows={4}></textarea>
      <button className="w-full px-4 py-3 bg-white  my-2 rounded-2xl  transition-all">Submit</button>

        </div>
    </motion.div>
    </div>
    }
    
    </>)
}