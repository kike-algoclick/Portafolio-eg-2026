'use client'
import { useState } from "react";
import { ArrowRight } from "lucide-react";
interface IsActive{
    isActive : boolean;
    
}



export default function Side({isActive} : IsActive){

  const [activeItem, setActiveItem] = useState("");
    return (
      <div
        className={` fixed top-31 right-0 md:hidden
  
  h-[89.6vh]
  overflow-hidden
  transition-[width] duration-300 ease-in-out
  ${isActive ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col h-6/7">
          <div className="flex h-1/5 w-full justify-center items-center">
            <h5
              className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-2 ${activeItem == "Proyectos" ? "text-magenta-accent" : "text-texto"}`}
            >
              01
            </h5>
            <h3
              onClick={() => setActiveItem("Proyectos")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold  transition duration-300 flex justify-start ${activeItem == "Proyectos" ? "text-magenta-accent text-4xl" : "text-4xl"}`}
            >
              Proyectos
            </h3>
            <div className=" flex basis-3/9 justify-end ">
              <ArrowRight
                size={5}
                className={` mr-2 rounded-full border-solid border-1 border-bordes transition duration-300 size-12 p-3 ${activeItem == "Proyectos" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr className="" />

          <div className="flex h-1/5 w-full justify-center items-center">
            <h5  className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-2 ${activeItem == "Stack" ? "text-magenta-accent" : "text-texto"}`}
            >
              02
            </h5>
            <h3
              onClick={() => setActiveItem("Stack")}
              className={`flex gap-x-2 basis-5/9 ml-4 transition duration-300 font-bold   flex justify-start ${activeItem == "Stack" ? "text-magenta-accent text-4xl" : "text-4xl"}`}
            >
              Stack
            </h3>
            <div className=" flex basis-3/9 justify-end ">
              <ArrowRight
                size={5}
                className={` mr-2 rounded-full border-solid border-1 border-bordes size-12 transition duration-300 p-3 ${activeItem == "Stack" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr />
          <div className="flex h-1/5 w-full justify-center items-center">
            <h5  className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-2 ${activeItem == "Experiencia" ? "text-magenta-accent" : "text-texto"}`}
            >
              03
            </h5>
            <h3
              onClick={() => setActiveItem("Experiencia")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold transition duration-300   flex justify-start ${activeItem == "Experiencia" ? "text-magenta-accent text-4xl" : "text-4xl"}`}
            >
              Experiencia
            </h3>
            <div className=" flex basis-3/9 justify-end ">
              <ArrowRight
                size={5}
                className={` mr-2 rounded-full border-solid border-1 transition duration-300 border-bordes size-12 p-3 ${activeItem == "Experiencia" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
          <hr />
          <div className="flex h-1/5 w-full justify-center items-center">
            <h5  className={`font-mono transition duration-300 flex text-md place-items-end h-10 ml-2 ${activeItem == "Contacto" ? "text-magenta-accent" : "text-texto"}`}
            >
              04
            </h5>
            <h3
              onClick={() => setActiveItem("Contacto")}
              className={`flex gap-x-2 basis-5/9 ml-4 transform font-bold transition duration-300   flex justify-start ${activeItem == "Contacto" ? "text-magenta-accent text-4xl" : "text-4xl"}`}
            >
              Contacto
            </h3>
            <div className=" flex basis-3/9 justify-end ">
              <ArrowRight
                size={5}
                className={` mr-2 rounded-full border-solid border-1 border-bordes transition duration-300 size-12 p-3 ${activeItem == "Contacto" ? "text-black bg-magenta-accent" : "bg-superficie text-texto"}`}
              />
            </div>
          </div>
        </div>

        <div className="Hablemos, links, disponible h-1/7 -mt-10"> Hola</div>
      </div>
    );
}