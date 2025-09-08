import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export function Item({level,school,location}:{level:string,school:string,location:string}) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    })

   
    return (
       <section className="relative flex items-center w-full h-[150px] px-6 md:px-12 lg:px-20">
  {/* Circle on the left */}
  <figure className="flex-shrink-0 z-10">
    <svg
      width="60"
      height="60"
      viewBox="0 0 100 100"
      className="-rotate-90"
    >
      {/* Base circle */}
      <circle
        cx="50"
        cy="50"
        r="30"
        stroke="#2dd4bf"
        strokeWidth="6"
        fill="white"
        className="opacity-20"
      />
      {/* Inner dot */}
      <circle cx="50" cy="50" r="12" fill="#0f766e" />
      {/* Animated progress */}
      <motion.circle
        cx="50"
        cy="50"
        r="30"
        stroke="#14b8a6"
        strokeWidth="6"
        fill="none"
        pathLength={1}
        style={{ pathLength: scrollYProgress }}
        className="drop-shadow-lg"
      />
    </svg>
  </figure>

  {/* Text on the right */}
  <div className="ml-6 md:ml-12 lg:ml-16 flex flex-col justify-center">
    <h1 className="text-xl md:text-4xl font-bold text-teal-400 drop-shadow-sm">
      {level}
    </h1>
    <p className="text-lg md:text-2xl font-semibold text-zinc-400 mt-1">
      {school}
    </p>
    <p className="text-base md:text-xl text-slate-600 mt-1">{location}</p>
  </div>
</section>
    )
}

