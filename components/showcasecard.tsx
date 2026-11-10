import Image from "next/image";
import type { ComponentType, CSSProperties } from "react";

export type Accent = "green" | "violet" | "cian";

export interface CardLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

interface ShowcaseCardProps {
  index: number;
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  links: CardLink[];
  image?: string; 
  imageFit?: "cover" | "contain";
  role:string;
  onImageClick?: () => void;
}

const accents: Record<Accent, { color: string; cover: string }> = {
  green: {
    color: "var(--magenta-accent)",
    cover: "from-magenta-accent/40 via-magenta-accent/10 to-superficie",
  },
  violet: {
    color: "var(--violet-accent)",
    cover: "from-violet-accent/40 via-violet-accent/10 to-superficie",
  },
  cian: {
    color: "var(--cian-accent)",
    cover: "from-cian-accent/40 via-cian-accent/10 to-superficie",
  },
};

export default function ShowcaseCard({
  index,
  title,
  description,
  tags,
  accent,
  links,
  image,
  role,
  imageFit = "cover",
}: ShowcaseCardProps) {
  const a = accents[accent];

  return (
    <article
      style={{ "--accent": a.color } as CSSProperties}
      className="
        group flex flex-col overflow-hidden rounded-2xl border border-bordes bg-superficie
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:border-[var(--accent)]
        hover:shadow-[0_10px_40px_-12px_var(--accent)]
      "
    >
      
      <div className={`relative aspect-[16/10] overflow-hidden bg-linear-to-br ${a.cover}`}>
        <span className="absolute top-3 left-4 z-10 font-mono text-[10px] text-texto-secundario">
          {String(index).padStart(2, "0")}
        </span>

        <div className="absolute inset-x-6 top-9 bottom-6 overflow-hidden rounded-lg border border-white/10 bg-main-fondo/70">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className={`transition-transform duration-500 group-hover:scale-105 ${
                imageFit === "cover" ? "object-cover object-top" : "object-contain"
              }`}
            />
          ) : (
            
            <div className="p-3">
              <div className="flex gap-1.5">
                <span className="size-1.5 rounded-full bg-[var(--accent)]" />
                <span className="size-1.5 rounded-full bg-[var(--accent)]/60" />
                <span className="size-1.5 rounded-full bg-[var(--accent)]/30" />
              </div>
              <div className="mt-3 h-2 w-3/5 rounded-full bg-[var(--accent)]/80" />
              <div className="mt-2 h-2 w-2/5 rounded-full bg-white/15" />
              <div className="mt-4 h-10 rounded-md bg-[var(--accent)]/15" />
            </div>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-bordes bg-main-fondo px-2 py-1 font-mono text-[10px] text-magenta-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-sans text-lg font-semibold text-texto md:text-xl">{title}</h3>
        <p className="text-sm leading-relaxed text-texto-secundario">{description}</p>
        <p className="text-sm leading-relaxed p-1 bg-magenta-accent/30 rounded-lg border-magenta-accent border-1 border-solid text-magenta-accent">{role}</p>

        <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-2">
          {links.map(({ label, href, icon: Icon }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-xs transition-colors duration-200 ${
                i === 0
                  ? "text-magenta-accent"
                  : "text-texto-secundario hover:text-texto"
              }`}
            >
              {label}
              <Icon className="size-3.5" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}