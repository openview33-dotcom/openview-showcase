import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-background/40" />
      
      <div className="relative z-10 section-padding max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
        >
          Estratégia · Criatividade · Execução
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-foreground mb-8"
        >
          Marcas que
          <br />
          <span className="italic font-normal text-accent">se destacam</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A OpenView une posicionamento estratégico, identidade visual e conteúdo autoral
          para construir marcas com presença e autoridade.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo("cases")}
            className="px-8 py-4 bg-foreground text-primary-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Cases
          </button>
          <button
            onClick={() => scrollTo("servicos")}
            className="px-8 py-4 border border-foreground text-foreground font-body text-sm tracking-wider uppercase rounded-sm hover:bg-foreground hover:text-primary-foreground transition-colors"
          >
            Serviços
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-foreground/20 mx-auto" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
