import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import wingletsDesktop from "@/assets/winglets-desktop.png";
import wingletsMobile from "@/assets/winglets-mobile.png";
import camilalusaDesktop from "@/assets/camilalusa-desktop.png";
import camilalusaMobile from "@/assets/camilalusa-mobile.png";
import tremdepousoDesktop from "@/assets/tremdepousopos-desktop.png";
import tremdepousoMobile from "@/assets/tremdepousopos-mobile.png";
import poloDesktop from "@/assets/polo-desktop.png";
import poloMobile from "@/assets/polo-mobile.png";
import michelleDesktop from "@/assets/michelle-desktop.png";
import michelleMobile from "@/assets/michelle-mobile.png";

interface Project {
  name: string;
  url: string;
  desktop: string;
  mobile: string;
  description: string;
  tags: string[];
}

const projects: Project[] = [
  {
    name: "Voe Winglets",
    url: "https://voewinglets.com.br",
    desktop: wingletsDesktop,
    mobile: wingletsMobile,
    description: "LP de captação com countdown, metodologia e garantia de aprovação.",
    tags: ["Infoproduto", "Aviação"],
  },
  {
    name: "Camila Lusa",
    url: "https://camilalusa.com.br",
    desktop: camilalusaDesktop,
    mobile: camilalusaMobile,
    description: "LP de captação para curso ou serviço.",
    tags: ["Infoproduto"],
  },
  {
    name: "Escola Trem de Pouso",
    url: "https://escolatremdepouso.com.br/pos",
    desktop: tremdepousoDesktop,
    mobile: tremdepousoMobile,
    description: "LP de pós-graduação para pilotos.",
    tags: ["Educação", "Aviação"],
  },
  {
    name: "Polo Instaladora",
    url: "https://poloinstaladora.com.br",
    desktop: poloDesktop,
    mobile: poloMobile,
    description: "Site institucional para empresa de instalações elétricas, hidráulicas e combate a incêndio.",
    tags: ["Institucional", "Construção Civil"],
  },
  {
    name: "Fono Michelle Borges",
    url: "https://fonomichelleborges.com.br",
    desktop: michelleDesktop,
    mobile: michelleMobile,
    description: "LP de serviços e cursos em Comunicação Aumentativa e Alternativa.",
    tags: ["Infoproduto", "Saúde"],
  },
];

// ── MacBook Pro 13" ───────────────────────────────────────────────────────────
const MacbookFrame = ({ screenshot }: { screenshot: string }) => (
  <div style={{ position: "relative", width: "100%" }}>
    <div
      style={{
        background: "linear-gradient(180deg, #454547 0%, #2c2c2e 45%, #1c1c1e 100%)",
        borderRadius: "5% 5% 1% 1%",
        padding: "2.5% 2% 1%",
        boxShadow: "0 0 0 1px #0a0a0a",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.5%" }}>
        <div
          style={{
            width: "1.2%",
            aspectRatio: "1",
            background: "#0a0a0a",
            borderRadius: "50%",
            boxShadow: "0 0 0 1px #3a3a3c",
          }}
        />
      </div>
      <div
        style={{
          background: "#060606",
          borderRadius: "2%",
          overflow: "hidden",
          aspectRatio: "16/10",
        }}
      >
        <img
          src={screenshot}
          alt="desktop"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
          loading="lazy"
          draggable={false}
        />
      </div>
    </div>
    <div
      style={{
        background: "linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)",
        height: "5%",
        borderRadius: "0 0 12% 12%",
        boxShadow: "0 0 0 1px #0a0a0a",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "15%",
          transform: "translateX(-50%)",
          width: "18%",
          height: "65%",
          borderRadius: "20%",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.05)",
        }}
      />
    </div>
    <div
      style={{
        height: "3%",
        background: "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 100%)",
        borderRadius: "0 0 50% 50%",
        marginTop: "-1%",
      }}
    />
  </div>
);

// ── iPhone 14 Pro ─────────────────────────────────────────────────────────────
const IphoneFrame = ({ screenshot }: { screenshot: string }) => (
  <div style={{ position: "relative", width: "100%", aspectRatio: "393/852" }}>
    <div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "13%",
        background: "linear-gradient(145deg, #454547 0%, #1c1c1e 60%, #2c2c2e 100%)",
        boxShadow: "0 0 0 1px #080808, inset 0 0 0 1px rgba(255,255,255,0.06)",
      }}
    />
    <div style={{ position: "absolute", left: "-3.5%", top: "20%", width: "3.5%", height: "7%", background: "#2a2a2c", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
    <div style={{ position: "absolute", left: "-3.5%", top: "30%", width: "3.5%", height: "10%", background: "#2a2a2c", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
    <div style={{ position: "absolute", left: "-3.5%", top: "43%", width: "3.5%", height: "10%", background: "#2a2a2c", borderRadius: "2px 0 0 2px", boxShadow: "-1px 0 0 #111" }} />
    <div style={{ position: "absolute", right: "-3.5%", top: "28%", width: "3.5%", height: "14%", background: "#2a2a2c", borderRadius: "0 2px 2px 0", boxShadow: "1px 0 0 #111" }} />
    <div
      style={{
        position: "absolute",
        inset: "2%",
        background: "#000",
        borderRadius: "11%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "30%",
          height: "4%",
          background: "#000",
          borderRadius: "999px",
          zIndex: 10,
          boxShadow: "0 0 0 1.5px #1a1a1a",
        }}
      />
      <img
        src={screenshot}
        alt="mobile"
        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        loading="lazy"
        draggable={false}
      />
    </div>
  </div>
);

// ── Card ──────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-4 pb-5 cursor-pointer"
    style={{ transition: "border-color 0.3s ease, transform 0.3s ease" }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#9B6FD4";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <div className="absolute top-4 right-4 z-20 text-white/30 group-hover:text-[#9B6FD4] transition-colors duration-300">
      <ExternalLink size={14} />
    </div>

    {/* Mockup area */}
    <div
      style={{
        width: "100%",
        aspectRatio: "4/3",
        background: "radial-gradient(ellipse at 30% 60%, #1e1624 0%, #0d0d0d 70%)",
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        marginBottom: "14px",
      }}
    >
      {/* MacBook */}
      <div
        style={{
          position: "absolute",
          left: "4%",
          top: "8%",
          width: "73%",
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.85))",
        }}
      >
        <MacbookFrame screenshot={project.desktop} />
      </div>

      {/* iPhone */}
      <div
        style={{
          position: "absolute",
          right: "3%",
          bottom: "4%",
          width: "24%",
          zIndex: 10,
          filter: "drop-shadow(-6px 6px 16px rgba(0,0,0,0.95))",
        }}
      >
        <IphoneFrame screenshot={project.mobile} />
      </div>
    </div>

    <h3 className="font-body text-sm font-semibold text-white tracking-wide mb-1">
      {project.name}
    </h3>
    <p className="font-body text-xs text-white/40 leading-relaxed mb-3">
      {project.description}
    </p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags.map((tag) => (
        <span
          key={tag}
          className="font-body text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-white/10 text-white/50"
        >
          {tag}
        </span>
      ))}
    </div>
  </motion.a>
);

// ── Layout A: 2 em cima + 3 embaixo ──────────────────────────────────────────
const LandingPagesTab = () => (
  <div className="flex flex-col gap-6">
    {/* Linha 1 — 2 cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.slice(0, 2).map((project, i) => (
        <ProjectCard key={project.name} project={project} index={i} />
      ))}
    </div>
    {/* Linha 2 — 3 cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.slice(2).map((project, i) => (
        <ProjectCard key={project.name} project={project} index={i + 2} />
      ))}
    </div>
  </div>
);

export default LandingPagesTab;
