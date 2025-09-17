import React from 'react'
import { FaSquareXTwitter, FaSquareGithub } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';


export const Email = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
   <div className="flex justify-center w-fit sm:mx-12  md:w-full  items-center md:h-120 h-auto mt-16">
  <div className="bg-gradient-to-bl from-teal-300 to-teal-600 p-10 rounded-4xl flex flex-col text-white justify-center items-center gap-8 w-full max-w-3xl">
    
    {/* Copy Email Button */}
    <button
      className="text-gray-700 px-6 py-2 border-2 rounded-2xl text-lg bg-white uppercase font-bold cursor-pointer hover:scale-105 transition-all duration-150"
      onClick={() => {
        navigator.clipboard.writeText("rajan1801282@gmail.com");
      }}
    >
      Get In Touch
    </button>

   

      <a
      href="/Rajan-Resume.pdf"  // place PDF in your "public" folder
      target="_blank"
      rel="noopener noreferrer"
      className="w-full flex justify-center cursor-pointer"
    >
      <div className="text-gray-700 w-76 h-14 border-2 rounded-2xl text-center flex justify-center items-center bg-white uppercase font-bold text-sm hover:scale-110 transition-all duration-150">
         Click here to download my resume
      </div>
    </a>



    {/* Email */}
    <div className="text-2xl md:text-3xl underline">
      <p>rajan1801282@gmail.com</p>
    </div>

    <a href="mailto:rajan1801282@gmail.com" className="w-full flex justify-center">
      <div className="text-gray-700 w-52 h-14 border-2 rounded-2xl text-center flex justify-center items-center bg-white uppercase font-bold text-lg hover:scale-110 transition-all duration-150">
        Send Message
      </div>
    </a>

    {/* Phone */}
    <div className="text-2xl md:text-3xl underline">
      <p>+91 6283441941</p>
    </div>

    <a href="tel:+916283441941" className="w-full flex justify-center">
      <div className="text-gray-700 w-52 h-14 border-2 rounded-2xl text-center flex justify-center items-center bg-white uppercase font-bold text-lg hover:scale-110 transition-all duration-150">
        Call Me
      </div>
    </a>

    
    

    {/* Social Links */}
    <div className="flex gap-6 mt-4">
      <a
        href="https://www.linkedin.com/in/rajan-0a966a237/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg text-white hover:text-blue-900 transition"
      >
        <span><IoLogoLinkedin /></span> LinkedIn
      </a>

      <a
        href="https://x.com/palial_raj59761/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg text-white hover:text-black transition"
      >
        <span><FaSquareXTwitter /></span> X
      </a>

      <a
        href="https://github.com/Rajan-001/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-lg text-white hover:text-black transition"
      >
        <span><FaSquareGithub /></span> GitHub
      </a>
    </div>
  </div>
  </div>
   </div>
  )
}