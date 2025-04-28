import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export function Item({level,school,location}:{level:string,school:string,location:string}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    })

   
    return (
        <section style={itemContainer} className='leading-3'>
             <div ref={ref} style={item} className=' '   >
                        <h1 className='text-4xl font-bold text-teal-400'>{level}</h1>
                        <p className='text-3xl font-bold text-teal-400 mt-2'>{school}</p>
                        <p className='text-3xl font-bold text-teal-400 mt-2'>{location}</p>
                        <figure style={progressIconContainer} className='   '>
                    
                            <svg
                                style={progressIcon}
                                width="50"
                                height="50"
                                viewBox="0 0 100 100"
                            >
                                <circle
                                    style={progressIconBg}
                                    cx="50"
                                    cy="50"
                                    r="30"
                                    pathLength="1"
                                    className="bg-yellow-500"
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
                                        ...progressIconIndicator,
                                        pathLength: scrollYProgress,
                                    }}
                                />  
                            </svg>
                         </figure>
                    </div>
                
        </section>
    )
}



/**
 * ==============   Styles   ================
 */

const itemContainer: React.CSSProperties = {
    height: "100vh",
    maxHeight: "150px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
    position:"relative"
}

const progressIconContainer: React.CSSProperties = {
    position: "absolute",
    top: -2,
    width: 60,
    height: 60,
    margin: 0,
    padding: 0,
    zIndex:10,
     bottom:20
  
}

const processCircle: React.CSSProperties = {
    strokeDashoffset: 0,
    strokeWidth: 15,
    fill: "none",
}

const progressIcon: React.CSSProperties = {
    ...processCircle,
    transform: "translateX(-100px) rotate(-90deg)",
    stroke: "green",
}

const progressIconIndicator: React.CSSProperties = {
    ...processCircle,
    strokeDashoffset: 0,
    strokeWidth: 15,
    fill: "none",
}

const progressIconBg: React.CSSProperties = {
    opacity: 0.3,
}

const item: React.CSSProperties = {
    width: 700,
    height: 150,
    position: "relative",
}


