import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const metrics = [
  { value: 30, prefix: "+", suffix: "", label: "Marcas atendidas", barColor: "bg-teal", delay: 0.6 },
  { value: 9, prefix: "+", suffix: " anos", label: "Anos de experiência", barColor: "bg-yellow", delay: 0.78 },
  { value: 10, prefix: "+R$", suffix: "M", label: "Investidos em anúncios", barColor: "bg-primary", delay: 0.96 },
];

function AnimatedNumber({ value, prefix, suffix, delay }: { value: number; prefix: string; suffix: string; delay: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    const timeout = setTimeout(() => {
      animate(motionVal, value, { duration: 1.2, ease: "easeOut" });
    }, delay * 1000);
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${v}${suffix}`;
    });
    return () => { clearTimeout(timeout); unsub(); };
  }, []);

  return <span ref={ref} className="text-foreground font-mono text-xl font-extrabold">{prefix}0{suffix}</span>;
}

const HeroSection = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#FAFAF8" }}>
      <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full opacity-15 blur-[120px]" style={{ background: "radial-gradient(circle, hsl(265 50% 63%), transparent 70%)" }} />

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div {...fade(0.05)}>
              <span className="inline-block px-4 py-1.5 text-xs tracking-wider rounded-full border" style={{ borderColor: "#ddd", color: "#999" }}>
                Portfólio
              </span>
            </motion.div>

            <motion.p {...fade(0.18)} className="font-body text-sm tracking-[0.25em] uppercase text-primary mt-5 mb-5">
              ◆ Estratégia · Criatividade · Execução
            </motion.p>

            <motion.h1
              {...fade(0.28)}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
              style={{ color: "#111111" }}
            >
              Marcas que{" "}
              <span className="text-primary">crescem</span> de
              <span className="block mt-1">
                <span className="relative inline-block">
                  verdade.
                  <motion.span
                    className="absolute bottom-1 left-0 h-3 bg-yellow -z-10 rounded-sm opacity-70"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.95, ease: "easeOut" }}
                    style={{ transformOrigin: "left", width: "60%" }}
                  />
                </span>
              </span>
            </motion.h1>

            <motion.div {...fade(0.42)} className="mb-8 max-w-lg">
              <p className="font-body text-base font-medium text-foreground mb-1">
                Agência de marketing digital em Porto Alegre.
              </p>
              <p className="font-body text-base leading-relaxed" style={{ color: "#666" }}>
                Conteúdo, performance, audiovisual e branding — tudo para gerar resultado real.
              </p>
            </motion.div>

            <motion.div {...fade(0.55)} className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("cases")}
                className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
              >
                Ver cases →
              </button>
              <button
                onClick={() => scrollTo("servicos")}
                className="px-8 py-3.5 border border-muted-foreground/30 text-foreground font-body text-sm tracking-wider uppercase rounded-full hover:border-foreground transition-colors"
              >
                Serviços
              </button>
            </motion.div>
          </div>

          {/* Right — 3 metric cards stacked */}
          <div className="flex flex-col gap-4">
            {metrics.map((m) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: m.delay }}
                className="bg-card rounded-2xl p-6 flex items-center gap-5 shadow-sm"
              >
                <motion.div
                  className={`${m.barColor} w-2 rounded-full`}
                  initial={{ height: 0 }}
                  animate={{ height: 36 }}
                  transition={{ duration: 0.5, delay: m.delay + 0.15, ease: "easeOut" }}
                />
                <div>
                  <AnimatedNumber value={m.value} prefix={m.prefix} suffix={m.suffix} delay={m.delay} />
                  <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mt-1">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
