'use client'
import NavBar from "@/components/navbar";
import Side from "@/components/sidenavbar";
import Hero from "@/components/hero";
import Technologies from "@/components/technologies";
import Gradient from "@/components/backgroundGradient";
import Projects from "@/components/projects";
import Certificates from "@/components/certificates";
import { useState, useEffect } from "react";

export default function Home() {

  const [sideActive, setActive] = useState(false)
useEffect(()=>{
  document.body.style.overflow = sideActive ? "hidden": ""
  return() => {
    document.body.style.overflow = ""
  };

}, [sideActive])
  const onclickSide = () => { 
setActive((prev) => !prev);


  }
  const closeSide = () => {
  setActive(false)};
  return (
    <div className={`flex justify-center items-center flex-col gap-5 `}>
      <Gradient />
      <NavBar onClick={onclickSide} isActive={sideActive} onClose={closeSide} />

      <Side isActive={sideActive}   onClick={onclickSide} />
      <div className="mt-20 w-full">
        <Hero />
      </div>
      
      <Projects />
      <Technologies />
      <Certificates />
      
    </div>
  );
}
