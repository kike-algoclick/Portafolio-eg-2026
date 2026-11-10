'use client'
import { useState } from "react";
import { ArrowUpRight, FileText } from "lucide-react";
import ShowcaseSection from "./showcasesection";
import ShowcaseCard, { type Accent } from "./showcasecard";
import CertificateModal from "./certificateModal";

interface Certificate {
  title: string;
  issuer: string;
  year: string;
  skills: string[];
  accent: Accent;
  image?: string;
  pdf?: string;
  credential: string;
  role: string;
}

const certificates: Certificate[] = [
  {
    title: "Excel Expert",
    issuer: "Microsoft ",
    year: "2025",
    skills: ["Tables", "Pivot Tables", "Charts", ""],
    accent: "cian",
    image: "/certificates/png/excel-expert.png",
    pdf: "/certificates/pdf/excel-expert.pdf",
    credential: "https://www.credly.com/badges/da2a00e9-7051-44d2-a120-8e9742d3f2ca/public_url",
    role:""
  },
  {
    title: "Design course for developers",
    issuer: "Platzi",
    year: "2026",
    skills: ["Site Maps", "Grid",],
    accent: "cian",
    image: "/certificates/png/diploma-diseno-programadores.png",
    pdf: "/certificates/pdf/diploma-diseno-programadores.pdf",
    credential: "https://platzi.com/p/19851373/curso/1906-course/diploma/detalle/",
    role:""
  },
  {
    title: "Advanced SQL Course",
    issuer: "MiduDev",
    year: "2026",
    skills: ["React", "JavaScript", "UX"],
    accent: "cian",
    image: "/certificates/png/sql-certificado.png",
    pdf: "/certificates/pdf/sql-certificado.pdf",
    credential: "https://www.aprendesql.dev/certificado/65abeeea-0e0b-4ead-8c9d-c3b7ff77b2b8",
    role:""
  },
  // ...los demás
];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

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
            onImageClick={c.image ? () => setSelected(c) : undefined}
            links={[
              ...(c.pdf ? [{ label: "See PDF", href: c.pdf, icon: FileText }] : []),
              { label: "Credential", href: c.credential, icon: ArrowUpRight },
            ]}
          />
        ))}
      </ShowcaseSection>

      <CertificateModal
        open={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title ?? ""}
        image={selected?.image ?? ""}
        pdf={selected?.pdf}
      />
    </div>
  );
}