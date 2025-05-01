import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export function Item({level,school,location}:{level:string,school:string,location:string}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    })

   
    return (
        <section  className='md:leading-3 leading-1 w-[300px] pl-2 top-2  xl:text-center sm:items-center relative h-screen max-h-[150px] flex justify-center items-center'>
             <div ref={ref}  className=' relative w-[700px] h-[150px]'   >
                        <h1 className='md:text-4xl font-bold text-teal-400 text-xl '>{level}</h1>
                        <p className='md:text-3xl font-bold text-teal-400 mt-2 text-xl '>{school}</p>
                        <p className='md:text-3xl font-bold text-teal-400 mt-2 text-xl '>{location}</p>
                        <figure  className="absolute -top-[2px] bottom-[20px] w-[60px] h-[60px] m-0 p-0 z-10">
                    
                            <svg
                                width="50"
                                height="50"
                                viewBox="0 0 100 100"
                                className="stroke-green-500 transform md:-translate-x-[100px] -rotate-90  -translate-x-11"
                            >
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="30"
                                    pathLength="1"
                                    className="bg-yellow-500 opacity-0.3"
                                />
                                  <circle
                                   cx="50"
                                   cy="50"
                                   r="15"
                                    className="fill-green-900 stroke-1"   />
                                    
                                <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="30"
                                    pathLength="5"
                                    style={{
                                        pathLength: scrollYProgress,
                                    }}
                                    className="strokeDashoffset-0 strokeWidth-[15px] fill-none"
                                />  
                            </svg>
                         </figure>
                    </div>
                
        </section>
    )
}

