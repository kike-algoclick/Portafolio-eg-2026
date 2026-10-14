'use client'
import NavBar from "@/components/navbar";
import Side from "@/components/sidenavbar";
import { useState } from "react";

export default function Home() {

  const [sideActive, setActive] = useState(false)
  const onclickSide = () => {
setActive((prev) => !prev);
  }
  return (
    <div className="flex flex-col justify-center items-center border-bordes border-3 border-solid rounded-lg">
      <NavBar onClick={onclickSide}/>
      <Side isActive={sideActive}/>
    </div>
  );
}
