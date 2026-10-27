'use client'
import { useState, useEffect } from "react";
import { createLucideIcon, X } from "lucide-react";


export const Equal = createLucideIcon("equal", [
  ["path", { d: "M5 9h14.5", key: "1nuafb" }],
  ["path", { d: "M7 15h10", key: "gcy9d9" }],
]);

interface ActiveSideBar{
    onClick: ()=> void;
    isActive: boolean
}

export default function NavBar({onClick, isActive}: ActiveSideBar){

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
const handleScroll = () => {
  setScrolled(window.scrollY > 50)
}; 
window.addEventListener("scroll", handleScroll, {passive:true})
return () => window.removeEventListener("scroll",  handleScroll)
},[])

   
    return (
      <div className={`w-full z-30 fixed -top-30 mt-30 transition duration-300 ${scrolled || isActive ? " backdrop-blur-md": "bg-black/80"} `}>
        <nav className="h-[77px] w-full flex flex-row h-30 items-center justify-between gap-5 border-b-1 border-texto-secundario border-solid ">
          <div className="basis-2/3 flex justify-start font-mono text-magenta-accent text-sm ml-10">
            {"<enrique.dev />"}
          </div>

          {/* Terminar el navbar para navegador cuando termines de hacer el diseño de phone*/}
          <div className="hidden md:block">aca van las partes</div>

          <div className="block md:hidden basis-1/3 flex justify-end ">
            <div className=" flex justify-center items-center  rounded-xl w-[44px] h-[44px] p-1 bg-superficie border-bordes border-solid border-1 mr-5">
              {!isActive && <Equal onClick={onClick} size={30} />}
              {isActive && (
                <X
                  onClick={onClick}
                  size={30}
                  className="text-magenta-accent"
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    );
}