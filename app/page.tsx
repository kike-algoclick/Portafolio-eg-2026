'use client'
import NavBar from "@/components/navbar";
import Side from "@/components/sidenavbar";
import Gradient from "@/components/backgroundGradient";
import { useState } from "react";

export default function Home() {

  const [sideActive, setActive] = useState(false)
  const onclickSide = () => {
setActive((prev) => !prev);
  }
  return (
    <div className="flex flex-col justify-center items-center ">
      <Gradient/>
      <NavBar onClick={onclickSide} isActive={sideActive} />
      <Side isActive={sideActive} />
    </div>
  );
}
