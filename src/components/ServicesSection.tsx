import { motion } from "framer-motion";
import { useState } from "react";

import contentImg1 from "@/assets/portfolio-content-1.jpg";
import contentImg2 from "@/assets/portfolio-content-2.jpg";
import brandingImg1 from "@/assets/portfolio-branding-1.jpg";
import brandingImg2 from "@/assets/portfolio-branding-2.jpg";
import videoImg1 from "@/assets/portfolio-video-1.jpg";
import videoImg2 from "@/assets/portfolio-video-2.jpg";
import landingImg1 from "@/assets/portfolio-landing-1.jpg";
import landingImg2 from "@/assets/portfolio-landing-2.jpg";

// Real portfolio images from OpenView's site
const mosaicFeeds = [
  "https://openviewdigital.com.br/wp-content/uploads/2025/11/Mosaico-Feed-Escritorio-Advocacia.png.webp",
  "https://openviewdigital.com.br/wp-content/uploads/2025/11/Mosaico-Feed-Espaco-Conecta.png.webp",
  "https://openviewdigital.com.br/wp-content/uploads/2025/11/Mosaico-Feed-Michelle-Borges-1.png.webp",
];

type ServiceCategory = "conteudo" | "audiovisual" | "branding" | "landing";

const services: Record<ServiceCategory, {
  title: string;
  description: string;
  images: string[];
}> = {
  conteudo: {
    title: "Planejamento de Conteúdo",
    description: "Conteúdos estratégicos que posicionam, engajam e convertem — do planejamento à publicação.",
    images: [contentImg1, contentImg2, ...mosaicFeeds],
  },
  audiovisual: {
    title: "Audiovisual",
    description: "Vídeos, fotos e produções com qualidade profissional para fortalecer sua autoridade no digital.",
    images: [videoImg1, videoImg2],
  },
  branding: {
    title: "Branding",
    description: "Identidades visuais que conectam, posicionam e tornam sua marca memorável.",
    images: [brandingImg1, brandingImg2],
  },
  landing: {
    title: "Landing Pages",
    description: "Páginas com estrutura, copy e design pensados para converter e transmitir profissionalismo.",
    images: [landingImg1, landingImg2],
  },
};

const categoryKeys: ServiceCategory[] = ["conteudo", "audiovisual", "branding", "landing"];

const ServicesSection = () => {
  const [active, setActive] = useState<ServiceCategory>("conteudo");
  const current = services[active];

  return (
    <section id="servicos" className="py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            O que a OpenView <span className="italic font-normal">entrega</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Cada categoria é um universo de possibilidades criativas. Explore nosso portfólio visual.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryKeys.map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-6 py-3 font-body text-xs md:text-sm tracking-wider uppercase transition-all rounded-sm border ${
                active === key
                  ? "bg-foreground text-primary-foreground border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {services[key].title}
            </button>
          ))}
        </div>

        {/* Active service */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-3xl font-medium mb-3">
              {current.title}
            </h3>
            <p className="font-body text-muted-foreground max-w-lg mx-auto text-sm">
              {current.description}
            </p>
          </div>

          {/* Masonry-style gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {current.images.map((img, i) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden rounded-lg"
              >
                <img
                  src={img}
                  alt={`${current.title} - peça ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
