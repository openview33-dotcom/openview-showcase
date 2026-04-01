import { motion } from "framer-motion";
import { useState } from "react";
import ContentTab from "./services/ContentTab";
import AudiovisualTab from "./services/AudiovisualTab";

type ServiceCategory = "conteudo" | "audiovisual" | "branding" | "landing";

const tabs: { key: ServiceCategory; label: string }[] = [
  { key: "conteudo", label: "Design & Copy" },
  { key: "audiovisual", label: "Audiovisual" },
  { key: "branding", label: "Branding" },
  { key: "landing", label: "Landing Pages" },
];

function ComingSoon() {
  return (
    <div className="flex items-center justify-center py-32">
      <p className="font-body text-white/40 text-lg tracking-wide">Em breve</p>
    </div>
  );
}

const ServicesSection = () => {
  const [active, setActive] = useState<ServiceCategory>("conteudo");

  return (
    <section id="servicos" className="py-32 section-padding section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(265 50% 63%)" }}>
            ◆ Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-white">
            O que a OpenView <span className="italic font-normal">entrega</span>
          </h2>
          <p className="font-body text-white/60 max-w-xl mx-auto">
            Cada categoria é um universo de possibilidades criativas. Explore nosso portfólio visual.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-6 py-3 font-body text-xs md:text-sm tracking-wider uppercase transition-all rounded-full ${
                active === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-white/60 border border-white/20 hover:border-white/50 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {active === "conteudo" && <ContentTab />}
          {active === "audiovisual" && <AudiovisualTab />}
          {active === "branding" && <ComingSoon />}
          {active === "landing" && <ComingSoon />}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
