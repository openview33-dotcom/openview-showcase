import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import wingletsDesktop from "@/assets/winglets-desktop.png";
import wingletsMobile from "@/assets/winglets-mobile.png";
import camilalusaDesktop from "@/assets/camilalusa-desktop.png";
import camilalusaMobile from "@/assets/camilalusa-mobile.png";
import tremdepousoDesktop from "@/assets/tremdepousopos-desktop.png";
import tremdepousoMobile from "@/assets/tremdepousopos-mobile.png";

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
];

const LandingPagesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.a
          key={project.name}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 pb-6 cursor-pointer"
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
          {/* External link icon */}
          <div className="absolute top-4 right-4 z-10 text-white/30 group-hover:text-white/70 transition-colors">
            <ExternalLink size={16} />
          </div>

          {/* Device mockup */}
          <div className="relative w-full mb-5" style={{ aspectRatio: "16/10" }}>
            {/* Desktop */}
            <div
              className="absolute inset-0 rounded-lg overflow-hidden border border-white/10"
              style={{ background: "#222" }}
            >
              <img
                src={project.desktop}
                alt={`${project.name} desktop`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Mobile */}
            <div
              className="absolute bottom-0 right-2 rounded-lg overflow-hidden border border-white/10"
              style={{
                width: "28%",
                height: "70%",
                background: "#222",
                boxShadow: "-4px 0 20px rgba(0,0,0,0.5)",
              }}
            >
              <img
                src={project.mobile}
                alt={`${project.name} mobile`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>

          {/* Info */}
          <h3 className="font-body text-sm font-medium text-white tracking-wide mb-1">
            {project.name}
          </h3>
          <p className="font-body text-xs text-white/40 leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
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
      ))}
    </div>
  );
};

export default LandingPagesTab;
