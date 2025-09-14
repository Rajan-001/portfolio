"use client"
import { education } from "@/app/data/Education";
import { motion, useScroll, useTransform } from "framer-motion";
import { Item } from "./ProgressItem";
import { useRef } from "react";

export function ProgressViewPortComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale the vertical line
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen flex bg-transparent">
      <div
        ref={containerRef}
        className="relative w-full flex justify-center"
        style={{ minHeight: `${education.length * 34}vh` }} // Dynamic height
      >
        {/* Progress Line */}
        <motion.div
          style={{ scaleY }}
          className="
            absolute top-0 h-full
            w-1 sm:w-1.5 md:w-2 bg-teal-500 
            origin-top rounded-full z-0
            left-[13%] 
            sm:left-[7.5%]
            md:left-[10.5%] md:translate-x-0
            xl:left-[8.5%]
            2xl:left-[6.8%]
          "
        />

        {/* Timeline Items */}
        <div
          className="
            relative flex flex-col gap-16 
            md:gap-24 xl:gap-32 
            w-full items-center md:items-start
          "
        >
          {education.map((x, i) => (
            <Item
              key={i}
              level={x.level}
              school={x.school}
              location={x.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
