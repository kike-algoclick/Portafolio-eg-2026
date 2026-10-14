'use client'
import { ArrowRight } from "lucide-react";
interface IsActive{
    isActive : boolean;
    
}

export default function Side({isActive} : IsActive){
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
            <h5 className="font-mono flex text-xl place-items-end h-10 ">01</h5>
            <h3 className="flex gap-x-2 basis-5/9 text-5xl font-bold text-magenta-accent flex justify-start">
              Proyectos
            </h3>
            <div className=" flex basis-3/9 justify-end ">
              <ArrowRight
                size={5}
                className="bg-superficie rounded-full border-solid border-1 border-bordes text-texto size-20 p-5"
              />
            </div>
          </div>
          <hr className="" />
          <div className="flex h-1/5">
            <h5>02</h5>
            <h3>Stack</h3>
            <div>
              <ArrowRight />
            </div>
          </div>
          <hr />
          <div className="flex h-1/5">
            <h5>03</h5>
            <h3>Experiencia</h3>
            <div>
              <ArrowRight />
            </div>
          </div>
          <hr />
          <div className="flex h-1/5">
            <h5>04</h5>
            <h3>Contancto</h3>
            <div>
              <ArrowRight />
            </div>
          </div>
          <hr />
        </div>

        <div className="Hablemos, links, disponible h-1/7 -mt-10"> Hola</div>
      </div>
    );
}