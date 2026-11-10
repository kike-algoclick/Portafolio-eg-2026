'use client'
import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, FileText, Download } from "lucide-react";

interface CertificateModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  image: string;
  pdf?: string;
  portrait?: boolean;
}

export default function CertificateModal({
  open,
  onClose,
  title,
  image,
  pdf,
  portrait = false
}: CertificateModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="m-auto w-[92vw] max-w-4xl overflow-hidden rounded-2xl border border-bordes bg-superficie p-0 text-texto backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-bordes px-5 py-3">
        <h3 className="font-sans text-base font-semibold md:text-lg">{title}</h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="flex size-9 shrink-0 items-center justify-center rounded-full border border-bordes bg-main-fondo text-texto-secundario transition hover:border-magenta-accent hover:text-magenta-accent"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="max-h-[70dvh] overflow-auto bg-main-fondo p-3">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={1131}
          sizes="(min-width: 1024px) 896px, 92vw"
          className="h-auto w-full rounded-lg"
        />
      </div>

      {pdf && (
        <div className="flex flex-wrap gap-3 border-t border-bordes px-5 py-3">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-magenta-accent px-5 font-mono text-sm font-bold text-black"
          >
            <FileText className="size-4" /> Abrir PDF
          </a>
          <a
            href={pdf}
            download
            className="inline-flex h-10 items-center gap-2 rounded-full border border-bordes px-5 font-mono text-sm text-texto-secundario transition hover:text-texto"
          >
            <Download className="size-4" /> Descargar
          </a>
        </div>
      )}
    </dialog>
  );
}