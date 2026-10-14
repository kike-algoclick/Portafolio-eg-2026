'use client'
import { useState } from "react";
import { createLucideIcon, X } from "lucide-react";


export const Equal = createLucideIcon("equal", [
  ["path", { d: "M5 9h14.5", key: "1nuafb" }],
  ["path", { d: "M7 15h10", key: "gcy9d9" }],
]);

interface ActiveSideBar{
    onClick: ()=> void;
}

export default function NavBar({onClick}: ActiveSideBar){

    const [menuActive, setMenu] = useState(false)
    return (
      <div className="w-full">
        <nav className=" w-full flex flex-row h-30 items-center justify-center gap-5 ">
          <div className="basis-2/3 flex justify-start font-mono text-magenta-accent text-xl ml-10">
            {"<enrique.dev />"}
          </div>

          {/* Terminar el navbar para navegador cuando termines de hacer el diseño de phone*/}
          <div className="hidden md:block">aca van las partes</div>

          <div className="block md:hidden basis-1/3 flex justify-end ">
            <div className=" flex justify-center items-center  rounded-xl w-15 h-15 p-2 bg-superficie border-bordes border-solid border-1 mr-5">
              {!menuActive && <Equal onClick={onClick} size={50} />}
              {menuActive && (
                <X
                  onClick={() => setMenu(false)}
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