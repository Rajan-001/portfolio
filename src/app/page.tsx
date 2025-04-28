"use client"
import {CursorTrailCanvas} from "@/component/CursorTrailCanvas";
import { MainPage}  from "@/component/MainPage";
import {NavBar} from "@/component/NavBar";
import { Projects } from "@/component/Projects";

import Skills from "@/component/Skills";



export default function Home() {

  return (
   <div className=" overflow-x-hidden relative">
   <NavBar/>
     <CursorTrailCanvas
        color="hsla(183, 64%, 27%, 0.4)"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
      />
      <MainPage/>
      <Skills/>
      <Projects/>
      
   </div>
  );
}
