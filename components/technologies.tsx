'use client'
import { SiTailwindcss } from "react-icons/si"
import TechCard from "./techcard"
export default function Technologies(){
    return(
        <div id="technologies" className=" z-20 flex items-center w-full h-[50vh] flex-col gap-5">
            <p className="font-sans font-bold text-lg ">Tools & Technologies I Work With</p>

            <div className="flex flex-row z-20">
                <TechCard name="Tailwind" icon={SiTailwindcss}/>
            </div>
        </div>
    )
}