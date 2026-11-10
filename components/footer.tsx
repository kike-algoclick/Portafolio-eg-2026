import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-20 w-full border-t border-bordes bg-main-fondo">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-6 font-mono text-[11px] text-texto-secundario md:flex-row">
        <p>© {new Date().getFullYear()} Enrique Barriere</p>
        <p className="flex items-center gap-1.5">
          Designed and developed with
          <Heart className="size-3 fill-red-500 text-red-500" />
          and lots of coffee
        </p>
      </div>
    </footer>
  );
}