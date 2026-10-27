'use client'
import { useState } from "react";
import { ArrowRight, Dot } from "lucide-react";
import Link from "next/link";
interface IsActive{
    isActive : boolean;
    
}



export default function Side({isActive} : IsActive){

  const [activeItem, setActiveItem] = useState("");
    return (
      <div
        className={` fixed top-[77px] right-0 md:hidden
  z-40
  h-[89.6vh]
  overflow-hidden
  transition-[width] duration-300 ease-in-out
  ${isActive ? "w-full backdrop-blur" : "w-0"}`}
      >
        <div className="flex flex-col h-[508px] p-[24px] ">
          <div className="flex h-1/5 w-full justify-center items-center ">
            <h5
              className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-10 ${activeItem == "Proyectos" ? "text-magenta-accent" : "text-texto-secundario"}`}
            >
              01
            </h5>
            <h3
              onClick={() => setActiveItem("Proyectos")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold  transition duration-300 flex justify-start ${activeItem == "Proyectos" ? "text-magenta-accent text-4xl" : "text-3xl"}`}
            >
              Projects
            </h3>
            <div className=" flex  justify-end ">
              <ArrowRight
                onClick={() => setActiveItem("Proyectos")}
                size={5}
                className={` mr-8 rounded-full border-solid border-1 border-bordes transition duration-300 size-12 p-3 ${activeItem == "Proyectos" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr className="w-6/7 mx-auto border-bordes" />

          <div className="flex h-1/5 w-full justify-center items-center">
            <h5
              className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-10 ${activeItem == "Stack" ? "text-magenta-accent" : "text-texto-secundario"}`}
            >
              02
            </h5>
            <h3
              onClick={() => setActiveItem("Stack")}
              className={`flex gap-x-2 basis-5/9 ml-4 transition duration-300 font-bold   flex justify-start ${activeItem == "Stack" ? "text-magenta-accent text-4xl" : "text-3xl"}`}
            >
              Stack
            </h3>
            <div className=" flex  justify-end ">
              <ArrowRight
                onClick={() => setActiveItem("Stack")}
                size={5}
                className={` mr-8 rounded-full border-solid border-1 border-bordes size-12 transition duration-300 p-3 ${activeItem == "Stack" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr className="w-6/7 mx-auto border-bordes" />
          <div className="flex h-1/5 w-full justify-center items-center">
            <h5
              className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-10 ${activeItem == "Experiencia" ? "text-magenta-accent" : "text-texto-secundario"}`}
            >
              03
            </h5>
            <h3
              onClick={() => setActiveItem("Experiencia")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold transition duration-300   flex justify-start ${activeItem == "Experiencia" ? "text-magenta-accent text-4xl" : "text-3xl"}`}
            >
              Experience
            </h3>
            <div className=" flex  justify-end ">
              <ArrowRight
                onClick={() => setActiveItem("Experiencia")}
                size={5}
                className={` mr-8 rounded-full border-solid border-1 transition duration-300 border-bordes size-12 p-3 ${activeItem == "Experiencia" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr className="w-6/7 mx-auto border-bordes" />
          <div className="flex h-1/5 w-full justify-center items-center">
            <h5
              className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-10 ${activeItem == "Contacto" ? "text-magenta-accent" : "text-texto-secundario"}`}
            >
              04
            </h5>
            <h3
              onClick={() => setActiveItem("Contacto")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold transition duration-300   flex justify-start ${activeItem == "Contacto" ? "text-magenta-accent text-4xl" : "text-3xl"}`}
            >
              Contact
            </h3>
            <div className=" flex  justify-end ">
              <ArrowRight
                onClick={() => setActiveItem("Contacto")}
                size={5}
                className={` mr-8 rounded-full border-solid border-1 border-bordes transition duration-300 size-12 p-3 ${activeItem == "Contacto" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr className="w-6/7 mx-auto border-bordes" />
        </div>

        <div className="Hablemos, links, disponible h-1/7 -mt-10 flex flex-col justify-center items-center gap-6 pt-5">
          <div className="w-[85%] bg-magenta-accent h-25 items rounded-full flex items-center justify-center text-black text-xl ">
            Let's connect
            <ArrowRight
              size={5}
              className={`transition duration-300 border-bordes size-12 p-3`}
            />
          </div>
          <div className="flex w-[85%] flex-row gap-2 justify-start ">
            <Link
              href="https://github.com/kike-algoclick"
              target="_blank"
              className="rounded-full p-2 border-bordes basis-1/7 border-1 border-solid font-mono text-texto-secundario flex items-center justify-center"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/enrique-barriere-garcia"
              target="_blank"
              className="rounded-full p-2 border-bordes basis-2/7 border-1 border-solid  font-mono text-texto-secundario flex items-center justify-center"
            >
              LinkedIn
            </Link>
          </div>
          <div className="w-[85%] flex font-mono text-texto-secundario items-center justify-start gap-2 ">
            <div className="relative left-1">
              <Dot className=" text-magenta-accent animate-pulse scale-300" />
            </div>
            <div>Available for new projects</div>
          </div>
        </div>
      </div>
    );
}