'use client'
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { createLucideIcon, X, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export const Equal = createLucideIcon("equal", [
  ["path", { d: "M5 9h14.5", key: "1nuafb" }],
  ["path", { d: "M7 15h10", key: "gcy9d9" }],
]);

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#technologies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

interface ActiveSideBar {
  onClick: () => void;
  isActive: boolean;
  onClose: () => void;
}

export default function NavBar({ onClick, isActive, onClose }: ActiveSideBar) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const [animated, setAnimated] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0 });
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mide el link activo y mueve la burbuja
  useLayoutEffect(() => {
    const measure = () => {
      if (active === null) return;
      const el = linkRefs.current[active];
      if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  const handleLink = (i: number) => {
    setAnimated(active !== null); // primera vez: sin animar el viaje
    setActive(i);
    onClose();
  };

  return (
    <div
      className={`fixed top-0 z-30 w-full transition duration-300 ${
        scrolled || isActive ? "backdrop-blur-md" : "bg-black/80"
      }`}
    >
      <nav className="flex h-[77px] w-full items-center justify-between gap-5 border-b border-solid border-texto-secundario px-6 md:px-10">
        {/* Logo */}
        <Link
          href="#Hero"
          onClick={() => {
            setActive(null);
            onClose();
          }}
          className="font-mono text-sm text-magenta-accent"
        >
          {"<enrique.dev />"}
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-4 md:flex">
          <ul className="relative flex items-center rounded-full border border-bordes bg-superficie/70 p-1">
            {/* Burbuja */}
            <span
              aria-hidden
              className={`pointer-events-none absolute top-1 bottom-1 rounded-full border border-magenta-accent/40 bg-magenta-accent/15 shadow-[0_0_20px_-4px_var(--magenta-accent)] ${
                active === null ? "opacity-0" : "opacity-100"
              }`}
              style={{
                left: pill.left,
                width: pill.width,
                transition: animated
                  ? "left 600ms cubic-bezier(.34,1.56,.64,1), width 420ms cubic-bezier(.34,1.3,.64,1), opacity 200ms"
                  : "opacity 200ms",
              }}
            />

            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  ref={(el) => {
                    linkRefs.current[i] = el;
                  }}
                  href={l.href}
                  onClick={() => handleLink(i)}
                  className={`relative z-10 block rounded-full px-4 py-2 font-mono text-sm transition-colors duration-200 ${
                    active === i
                      ? "text-magenta-accent"
                      : "text-texto-secundario hover:text-texto"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Redes */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/kike-algoclick"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-bordes bg-superficie text-texto-secundario transition duration-200 hover:border-magenta-accent hover:text-magenta-accent"
            >
              <FaGithub className="size-[18px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/enrique-barriere-garcia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-bordes bg-superficie text-texto-secundario transition duration-200 hover:border-magenta-accent hover:text-magenta-accent"
            >
              <FaLinkedin className="size-[18px]" />
            </a>
          </div>

          {/* CTA: solo en pantallas anchas */}
          <Link
            href="#contact"
            className="hidden h-10 items-center gap-2 rounded-full bg-magenta-accent px-5 font-sans text-sm font-semibold text-black lg:inline-flex"
          >
            Let's connect <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex size-[44px] items-center justify-center rounded-xl border border-solid border-bordes bg-superficie p-1 md:hidden">
          <button
            onClick={onClick}
            aria-label={isActive ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isActive}
          >
            {isActive ? (
              <X size={30} className="text-magenta-accent" />
            ) : (
              <Equal size={30} />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}