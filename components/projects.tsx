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
  imageFit?: "cover" | "contain";
  imageBg?: "dark" | "light";
  github: string;
  deploy: string;
  role: string;
}

const projects: Project[] = [
  {
    title: "SecureSense",
    description:
      "First-aid platform that provides emergency contact numbers nearby you in case of any accident or problem",
    tags: ["PowerApps", "Figma", "Microsoft Lists"],
    accent: "green",
    image: "/projects/SecureSense.svg",
    imageFit: "contain",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
    role: "Frontend developer on PowerApps and Backend on Microsoft SharePoint",
  },
  {
    title: "TeachMeNow",
    description:
      "A web platform that focuses on helping teachers planning their classes adapting to their teaching styles and students processes of learning",
    tags: ["React", "Vite", "PrismaORM", "SQLite", "Groq"],
    accent: "violet",
    image: "/projects/TeachMeNow.svg",
    imageFit: "contain",
    imageBg: "light",
    github: "https://github.com/kike-algoclick",
    deploy: "https://teach-me-now-front-end.vercel.app",
    role: "Frontend developer on React Vite and Backend developer with PrismaORM and SQLite",
  },
  {
    title: "Valtrust",
    description:
      "A secure real estate platform in El Salvador for buying and selling properties, featuring objective property valuations and legitimacy verification.",
    tags: ["NextJS", "Gemini", "Supabase", "PostgreSQL"],
    accent: "cian",
    image: "/projects/Valtrust.svg",
    imageFit: "contain",
    imageBg: "light",
    github: "https://github.com/kike-algoclick",
    deploy: "https://valtrust-website.vercel.app/",
    role: "Product Owner and Frontend developer in NextJS. Also Backend on Supabase and Prisma",
  },
];

export default function Projects() {
  return (
    <ShowcaseSection
      id="projects"
      eyebrow="01 / Projects"
      title="Highlighted Projects"
      actionLabel="See all"
      actionHref="https://github.com/kike-algoclick?tab=repositories"
    >
      {projects.map((p, i) => {
        const links: CardLink[] = [
          { label: "Use Demo", href: p.deploy, icon: ArrowUpRight },
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
            imageFit={p.imageFit}
            imageBg={p.imageBg}
            links={links}
            role={p.role}
          />
        );
      })}
    </ShowcaseSection>
  );
}