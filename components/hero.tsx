import { Dot } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { use, useState } from "react";
import Image from "next/image";
import devInfo from "../public/Code.svg"
export default function Hero(){
const [seeItemActive, setActiveItem] = useState("")

    return (
      <div id="Hero" className="h-[100vh] mt-[25px] relative z-20 flex flex-col gap-[28px] p-[24px]">
        <div className="w-full flex justify-start p-3">
          <span className=" h-10 flex bg-magenta-accent/20  w-[257px] h-[33px] max-w-[306px] text-nowrap flex items-center justify-start rounded-full transparent border-1 border-solid border-magenta-accent text-magenta-accent text-xs font-mono ">
            <Dot className=" text-magenta-accent animate-pulse scale-240 ml-2 flex" />
            Available for new projects
          </span>
        </div>
        <div className=" flex flex-col md:flex-row gap-10">
          <div className=" mt-2 flex items-center justify-center w-full md:w-1/2 flex-col  ">
            <div className="leftside of hero w-full flex justify-center items-center w-1/2">
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


                <div className="flex flex-col md:flex-row md:gap-2 md:w-full md:ml-20 items-center ">

                <button
                  onClick={() => setActiveItem("See Projects")}
                  className={` transition duration-200 flex mt-[24px] justify-center items-center font-semibold font-sans w-[342px] h-[50px] md:w-[176px]  md:h-[50px] text-nowrap  rounded-full ${seeItemActive == "See Projects" ? "bg-magenta-accent text-black font-bold" : "bg-background border-[1px] border-bordes border-solid"}`}
                >
                  <p className="flex  items-center justify-center gap-2">
                    See projects <ArrowRight className="scale-90" />
                  </p>
                </button>
                <button
                  onClick={() => setActiveItem("Download cv")}
                  className={` transition duration-200 flex mt-[24px] justify-center items-center font-semibold font-sans w-[342px] md:w-[176px]  md:h-[50px] h-[50px] text-nowrap  rounded-full ${seeItemActive == "Download cv" ? "bg-magenta-accent text-black font-bold" : "bg-background border-[1px] border-bordes border-solid "}`}
                >
                  <p className="flex  items-center justify-center gap-2">
                    Download CV
                  </p>
                </button>
                </div>

                <div className="flex flex-row w-5/6 font-sans justify-start ">
                  <div className="flex flex-col p-3">
                    <h3 className="text-4xl">2+</h3>
                    <p>años de experiencia</p>
                  </div>
            
                </div>
              </div>
            </div>
          </div>
          <div className="rightside of hero w-full md:w-1/2 flex items-center justify-center">
           <Image src={devInfo}  className=" p-0 flex items-center justify-center"  quality={100} alt="Developer Info"/>
          </div>
        </div>
      </div>
    );
}