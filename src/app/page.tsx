"use client"
import {CursorTrailCanvas} from "@/component/CursorTrailCanvas";
import { Project } from "@/component/Project";
import Skills from "@/component/Skills";

export default function Home() {
  return (
   <div>
     <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <Project/>
      <Skills/>
   </div>
  );
}
