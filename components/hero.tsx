import { Dot } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { use, useState } from "react";
export default function Hero(){
const [seeItemActive, setActiveItem] = useState("")

    return (
      <div className="h-[150vh] mt-[25px] relative z-20 flex flex-col gap-[28px] p-[24px]">
        <div className="w-full flex justify-start p-3">
          <span className=" h-10 flex bg-magenta-accent/20  w-[257px] h-[33px] max-w-[306px] text-nowrap flex items-center justify-start rounded-full transparent border-1 border-solid border-magenta-accent text-magenta-accent text-xs font-mono ">
            <Dot className=" text-magenta-accent animate-pulse scale-240 ml-2 flex" />
            Available for new projects
          </span>
        </div>

        <div className=" mt-2 flex items-center justify-center w-full flex-col  ">
          <div className="leftside of hero w-full flex justify-center items-center">
            <div className="w-full flex items-center justify-center flex-col">
              <span className="text-4xl w-6/7 text-magenta-accent font-mono">
                {"<enrique.dev/>"}
              </span>
              <br />
              <p className="w-6/7 font-mono text-sm">
                Software Developer Turning ideas into software solutions. I
                build digital experiences through code, creativity and
                problem-solving.
              </p>

              <button onClick={() => setActiveItem("See Projects")} className={` transition duration-200 flex mt-[24px] justify-center items-center font-semibold font-sans w-[342px] h-[50px] text-nowrap  rounded-full ${seeItemActive == "See Projects" ? "bg-magenta-accent text-black font-bold":"bg-background border-[1px] border-bordes border-solid"}`}>
                <p className="flex  items-center justify-center gap-2">See projects <ArrowRight className="scale-90"/></p>
                
              
              </button>
               <button onClick={() => setActiveItem("Download cv")} className={` transition duration-200 flex mt-[24px] justify-center items-center font-semibold font-sans w-[342px] h-[50px] text-nowrap  rounded-full ${seeItemActive == "Download cv" ? "bg-magenta-accent text-black font-bold":"bg-background border-[1px] border-bordes border-solid "}`}>
                <p className="flex  items-center justify-center gap-2">Download CV <ArrowRight className="scale-90"/></p>
                
              
              </button>

              
            </div>

            
          </div>

          <div className="rightside of hero"></div>
        </div>
        
      </div>
    );
}