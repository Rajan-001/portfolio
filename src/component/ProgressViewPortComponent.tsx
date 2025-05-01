import { education } from "@/app/data/Education";
import { motion, useScroll, useTransform } from "framer-motion";
import { Item } from "./ProgressItem";
import { useRef } from "react";

export  function  ProgressViewPortComponent() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
      });
    
      const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 2]);

   return (
    <div className="min-h-[calc(100vh-300px)] flex xl:items-start items-center justify-center bg-transparent">
      <div ref={containerRef} className="relative h-[100vh] w-full flex justify-center ">
         <motion.div
            style={{
                scaleY,
                originY: 0,
                backgroundColor: "green"
            }}
            whileInView={{
                opacity:1
            }}
            className={`w-1.5 h-[130px] absolute xl:top-[70px] left-[8%]  top-52 md:left-[22%]  sm:w-2 `}
            />

      {/* Timeline Items */}
      <div className="flex flex-col items-center xl:mt-8 justify-center " >
        {
            [...education].map((x,i)=>{
                
                return (<Item key={i} level={x.level} school={x.school} location={x.location}/>)
            })
        }
           
            </div>
            </div>
        </div>
    )
}