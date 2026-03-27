import { motion } from "framer-motion";
import creativesShowcase from "@/assets/creatives-showcase.jpg";

const clientLogos = [
  { name: "Espetoflex", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Espetoflex.png.webp" },
  { name: "Trem de Pouso", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Trem-de-Pouso.png.webp" },
  { name: "Formiguinhas", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Formiguinhas.png.webp" },
  { name: "Schwengber & Silveira", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Schwengber-Silveira.png.webp" },
  { name: "Realizar", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Realizar-1.png.webp" },
  { name: "POLO", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-POLO.png.webp" },
  { name: "Espaço Conecta", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Espaco-Conecta-Logotipo.png.webp" },
  { name: "Dia de Pet", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-Dia-de-Pet.png.webp" },
  { name: "TKA", url: "https://openviewdigital.com.br/wp-content/uploads/2025/11/Logotipo-TKA.png.webp" },
];

const CreativesSection = () => {
  return (
    <section id="criativos" className="py-32 section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Criativos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Variedade e <span className="italic font-normal">qualidade</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Uma curadoria dos materiais produzidos pela OpenView para marcas que levam o digital a sério.
          </p>
        </motion.div>

        {/* Showcase image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-xl overflow-hidden mb-20"
        >
          <img
            src={creativesShowcase}
            alt="Showcase de criativos OpenView"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1200}
            height={600}
          />
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-10">
            Marcas que confiam na OpenView
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativesSection;
