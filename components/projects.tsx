import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import ShowcaseSection from "./showcasesection";
import ShowcaseCard, { type Accent, type CardLink } from "./showcasecard";

interface Project {
  title: string;
  description: string;
  tags: string[];
  accent: Accent;
  image?: string;
  github: string;
  deploy: string;
}

const projects: Project[] = [
  {
    title: "SecureSense",
    description:
      "Plataforma de primeros auxilios que provee números de emergencia cercanos en caso de accidentes",
    tags: ["PowerApps", "Figma", "Microsoft Lists"],
    accent: "green",
    // image: "/projects/saas.png",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
  },
  {
    title: "App móvil de finanzas",
    description:
      "Control de gastos con sincronización offline y gráficos interactivos.",
    tags: ["React Native", "Firebase"],
    accent: "violet",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
  },
  {
    title: "API de pagos escalable",
    description:
      "Microservicios con colas y alta disponibilidad para e-commerce.",
    tags: ["Go", "Docker", "AWS"],
    accent: "cian",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
  },
  {
    title: "Herramienta open source para devs",
    description:
      "CLI con más de 2k estrellas en GitHub, usada por equipos en 15 países.",
    tags: ["TypeScript", "CLI", "OSS"],
    accent: "green",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
  },
];

export default function Projects() {
  return (
    <div id={"#Projects"}>
    <ShowcaseSection
      id="projects"
      eyebrow="01 / Projects"
      title="Proyectos destacados"
      actionLabel="Ver todos"
      actionHref="https://github.com/kike-algoclick?tab=repositories"
    >
      {projects.map((p, i) => {
        const links: CardLink[] = [
          { label: "Ver demo", href: p.deploy, icon: ArrowUpRight },
          { label: "GitHub", href: p.github, icon: SiGithub },
        ];
        return (
          <ShowcaseCard
            key={p.title}
            index={i + 1}
            title={p.title}
            description={p.description}
            tags={p.tags}
            accent={p.accent}
            image={p.image}
            links={links}
          />
        );
      })}
    </ShowcaseSection>
    </div>
  );
}