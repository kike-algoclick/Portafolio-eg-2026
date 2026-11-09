import type { ReactNode } from "react";

interface ShowcaseSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  actionLabel?: string;
  actionHref?: string;
  children: ReactNode;
}

export default function ShowcaseSection({
  id,

  title,
  actionLabel,
  actionHref,
  children,
}: ShowcaseSectionProps) {
  return (
    <section id="Projects"  className="relative z-20 w-full scroll-mt-20 px-6 py-16 md:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="flex flex-col gap-2">
         
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-sans text-2xl font-bold md:text-4xl">{title}</h2>

            {actionLabel && actionHref && (
              <a
                href={actionHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-bordes bg-superficie px-4 font-mono text-sm text-texto transition duration-200 hover:border-magenta-accent hover:text-magenta-accent"
              >
                {actionLabel} →
              </a>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">{children}</div>
      </div>
    </section>
  );
}