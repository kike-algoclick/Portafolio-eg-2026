'use client'
import NavBar from "@/components/navbar";
import Side from "@/components/sidenavbar";
import Hero from "@/components/hero";
import Technologies from "@/components/technologies";
import Gradient from "@/components/backgroundGradient";
import { useState, useEffect } from "react";

export default function Home() {

  const [sideActive, setActive] = useState(false)
useEffect(()=>{
  document.body.style.overflow = sideActive ? "hidden": ""
  return() => {
    document.body.style.overflow = "auto"
  };

}, [sideActive])
  const onclickSide = () => {
setActive((prev) => !prev);
  }
  return (
    <div className={`flex justify-center items-center flex-col`}>
      <Gradient />
      <NavBar onClick={onclickSide} isActive={sideActive} />

      <Side isActive={sideActive} />
      <div className="mt-20 w-full">
        <Hero />
      </div>
      <Technologies />
      
    </div>
  );
}
