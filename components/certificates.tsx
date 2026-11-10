import { ArrowUpRight } from "lucide-react";
import ShowcaseSection from "./showcasesection";
import ShowcaseCard, { type Accent } from "./showcasecard";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  accent: Accent;
  image?: string;
  credential: string;
  role: string;
}

const certificates: Certificate[] = [
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    year: "2025",
    skills: ["React", "JavaScript", "UX"],
    accent: "cian",
    // image: "/certificates/meta-frontend.png",
    credential: "https://example.com",
    role:""
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    skills: ["AWS", "Cloud"],
    accent: "violet",
    credential: "https://example.com",
    role:""
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2024",
    skills: ["HTML", "CSS", "Responsive"],
    accent: "green",
    credential: "https://example.com",
    role:""
  },
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    year: "2024",
    skills: ["JavaScript", "Algoritmos"],
    accent: "cian",
    credential: "https://example.com",
    role:""
  },
];

export default function Certificates() {
  return (
  <div id="certificates">
    <ShowcaseSection
      id="certificates"
      eyebrow="Certificates"
      title="Certificates"
      actionLabel="LinkedIn"
      actionHref="https://www.linkedin.com/in/enrique-barriere-garcia"
    >
      {certificates.map((c, i) => (
        <ShowcaseCard
          key={c.title}
          index={i + 1}
          title={c.title}
          description={`Issued by ${c.issuer} · ${c.year}`}
          role={c.role}
          tags={c.skills}
          accent={c.accent}
          image={c.image}
          imageFit="contain"
          links={[{ label: "See Credential", href: c.credential, icon: ArrowUpRight }]}
        />
      ))}
    </ShowcaseSection>
    </div>
  );
}