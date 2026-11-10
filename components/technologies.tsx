'use client'
import { useState } from "react";
import {
  SiTailwindcss, SiNextdotjs, SiReact, SiTypescript, SiJavascript,
  SiHtml5, SiCss, SiNodedotjs, SiGit, SiGithub, SiVercel, SiFigma, SiPrisma
} from "react-icons/si";
import { RiFileExcel2Line, RiSupabaseFill } from "react-icons/ri";

import {DiPostgresql} from "react-icons/di"

import type { IconType } from "react-icons";
import TechCard from "./techcard";
type Category = "Frontend" | "Backend" | "Tools";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
  category: Category;
}

const techs: Tech[] = [
  { name: "React", icon: SiReact, color: "#61dafb", category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38bdf8", category: "Frontend" },
  { name: "HTML", icon: SiHtml5, color: "#e34f26", category: "Frontend" },
  { name: "CSS", icon: SiCss, color: "#1572b6", category: "Frontend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e", category: "Backend" },
  { name: "Git", icon: SiGit, color: "#f05032", category: "Tools" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "Tools" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", category: "Tools" },
  { name: "Figma", icon: SiFigma, color: "#a259ff", category: "Tools" },
  { name: "Excel", icon: RiFileExcel2Line, color: "#5fa04e", category: "Tools" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#ffffff", category: "Backend" },
  { name: "Supabase", icon: RiSupabaseFill, color: "#5fa04e", category: "Backend" },
  { name: "PostgreSQL", icon: DiPostgresql, color: "#38bdf8", category: "Backend" },
];

const filters = ["All", "Frontend", "Backend", "Tools"] as const;
type Filter = (typeof filters)[number];

export default function Technologies() {
    const [activeTech, setActiveTech] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("All");

  const visible = filter === "All" ? techs : techs.filter((t) => t.category === filter);
  
  const changeFilter = (f: Filter) => {
    setFilter(f);
    setActiveTech(activeTech);
  }

  return (
    <section
      id="technologies"
      className="relative z-20 w-full scroll-mt-20 px-6 py-16 md:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        
        <div className="flex flex-col gap-2">
         
          <h2 className="font-sans text-2xl font-bold md:text-4xl">
            Tools & Technologies I Work With
          </h2>
        </div>

        
        <div className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`shrink-0 rounded-full border px-4 h-10 font-mono text-sm transition duration-200 ${
                filter === f
                  ? "border-magenta-accent bg-magenta-accent font-bold text-black"
                  : "border-bordes bg-superficie text-texto-secundario"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        
        <div className="grid grid-cols-2 gap-3 min-[420px]:grid-cols-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
          {visible.map((t) => (
            <TechCard    key={t.name}
    {...t}
    active={activeTech === t.name}  onToggle={() =>
      setActiveTech((prev) => (prev === t.name ? null : t.name))
    } />
          ))}
        </div>
      </div>
    </section>  
  );
}   