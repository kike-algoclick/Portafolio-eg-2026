import type { IconType } from "react-icons";
import Image from "next/image";

interface TechCard{
    name : string;  
    icon : IconType;    
}
export default function TechCard({name, icon: Icon} : TechCard){
    
    return(
        <div className=" w-30 h-30 border-bordes border-solid border
      rounded-xl bg-superficie
      flex flex-col items-center justify-center gap-4
      transition-all duration-300 border-magenta-accent
      md:hover:border-magenta-accent hover:-translate-y-1">
            <Icon className="scale-150"/>
            <p>{name}</p>
        </div>
    )
}