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
  role: string;
}

const projects: Project[] = [
  {
    title: "SecureSense",
    description:
      "First-aid platform that provides emergency contact numbers nearby you in case of any accident or problem",
    tags: ["PowerApps", "Figma", "Microsoft Lists"],
    accent: "green",
    // image: "/projects/saas.png",
    github: "https://github.com/kike-algoclick",
    deploy: "https://example.com",
    role:"Frontend developer on PowerApps and Backend on Microsoft SharePoint "
  },
  {
    title: "TeachMeNow",
    description:
      "A web platform that focuses on helping teachers planning their classes adapting to their teaching styles and students proccesses of learning",
    tags: ["React", "Vite","PrismaORM", "SQLite","Groq"],
    accent: "violet",
    github: "https://github.com/kike-algoclick",
    deploy: "teach-me-now-front-end.vercel.app",
    role:"Frontend developer on React Vite and Backend developer with prismaORM and SQLite"
  },
  {
    title: "Valtrust",
    description:
      "A secure real estate platform in El Salvador for buying and selling properties, featuring objective property valuations and legitimacy verification.",
    tags: ["NextJS", "Gemini", "Supabse","PostgreQSL"],
    accent: "cian",
    github: "https://github.com/kike-algoclick",
    deploy: "https://valtrust-website.vercel.app/",
    role:"Product Owner and Frontend developer in NextJS. Also Backend on Supabase and PrismaSQL"
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
            role={p.role}
          />
        );
      })}
    </ShowcaseSection>
    </div>
  );
}