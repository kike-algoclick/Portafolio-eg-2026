'use client'
import type { IconType } from "react-icons";
import type { CSSProperties } from "react";

interface TechCardProps {
  name: string;
  icon: IconType;
  color: string; // hex de 6 dígitos, ej: "#38bdf8"
  category: string;
  active: boolean;
  onToggle: () => void;
}

export default function TechCard({
  name,
  icon: Icon,
  color,
  category,
  active,
  onToggle,
}: TechCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={active}
      data-active={active}
      style={{ "--brand": color } as CSSProperties}
      className="
        group relative overflow-hidden aspect-square w-full
        flex flex-col items-center justify-center gap-3 p-4
        rounded-2xl border border-bordes bg-superficie
        transition-all duration-300 ease-out
        active:scale-95
        hover:-translate-y-1.5 hover:border-[var(--brand)]
        hover:shadow-[0_10px_40px_-12px_var(--brand)]
        data-[active=true]:-translate-y-1.5
        data-[active=true]:border-[var(--brand)]
        data-[active=true]:shadow-[0_10px_40px_-12px_var(--brand)]
      "
    >
      {/* Glow superior */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-data-[active=true]:opacity-100"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${color}33, transparent 70%)`,
        }}
      />

      {/* Línea de acento superior */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:w-3/4 group-hover:opacity-100 group-data-[active=true]:w-3/4 group-data-[active=true]:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      {/* Categoría */}
      <span className="absolute top-2.5 left-3 font-mono text-[10px] uppercase tracking-wider text-texto-secundario">
        {category}
      </span>

      {/* Ícono */}
      <Icon
        className="
          relative size-10 sm:size-11 text-texto-secundario
          transition-all duration-300
          group-hover:text-[var(--brand)] group-hover:scale-125 group-hover:-rotate-6
          group-data-[active=true]:text-[var(--brand)]
          group-data-[active=true]:scale-125
          group-data-[active=true]:-rotate-6
        "
      />

      {/* Nombre */}
      <p className="relative font-mono text-xs sm:text-sm text-texto">{name}</p>
    </button>
  );
}