import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const metrics = [
  { value: "+120", label: "Projetos entregues", bg: "bg-primary text-primary-foreground" },
  { value: "98%", label: "Clientes satisfeitos", bg: "bg-secondary text-secondary-foreground" },
  { value: "+40", label: "Marcas posicionadas", bg: "bg-teal text-teal-foreground" },
  { value: "5★", label: "Avaliação média", bg: "bg-yellow text-yellow-foreground" },
];

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      {/* Purple gradient blob */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(265 50% 63%), transparent 70%)" }} />

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-6"
            >
              ◆ Estratégia · Criatividade · Execução
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
              style={{ color: "#111111" }}
            >
              Marcas que{" "}
              <span className="text-primary italic font-semibold">se destacam</span>
              <span className="block mt-2">
                no{" "}
                <span className="relative inline-block">
                  digital
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow -z-10 rounded-sm opacity-70" />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-body text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed"
            >
              A OpenView une posicionamento estratégico, identidade visual e conteúdo autoral
              para construir marcas com presença e autoridade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => scrollTo("cases")}
                className="px-8 py-4 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
              >
                Ver Cases
              </button>
              <button
                onClick={() => scrollTo("servicos")}
                className="px-8 py-4 border border-muted-foreground/30 text-foreground font-body text-sm tracking-wider uppercase rounded-full hover:border-foreground transition-colors"
              >
                Serviços
              </button>
            </motion.div>
          </div>

          {/* Right — Metric cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                className={`${m.bg} rounded-2xl p-6 flex flex-col items-center justify-center text-center aspect-square`}
              >
                <span className="font-display text-4xl md:text-5xl font-bold mb-2">{m.value}</span>
                <span className="font-body text-xs md:text-sm tracking-wider uppercase opacity-80">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
