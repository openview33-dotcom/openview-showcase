import { motion } from "framer-motion";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const tickerRow1 = ["Negócios Locais", "Jurídico", "Saúde", "Educação", "Infoproduto", "E-commerce"];
const tickerRow2 = ["Gastronomia", "Imobiliário", "Aviação", "Serviços"];

const TickerRow = ({
  items,
  direction,
  duration,
  diamondColor,
  textOpacity,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  diamondColor: string;
  textOpacity: string;
}) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <motion.div
        className="inline-flex gap-0"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 px-4 text-sm tracking-widest uppercase font-body" style={{ color: textOpacity }}>
            {item}
            <span style={{ color: diamondColor }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const PositioningSection = () => {
  return (
    <section className="bg-[hsl(var(--section-dark))]" style={{ padding: "80px 48px" }}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.p {...fade(0.1)} className="font-body text-sm tracking-[0.3em] uppercase text-teal mb-6">
          ◆ Nossa abordagem
        </motion.p>

        <motion.h2 {...fade(0.25)} className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 text-white">
          O segmento <span className="text-primary">muda.</span>
        </motion.h2>

        <motion.h3 {...fade(0.4)} className="font-display text-2xl md:text-4xl font-normal italic leading-tight mb-8 text-white/60">
          O resultado, <span className="text-yellow">não.</span>
        </motion.h3>

        <motion.p {...fade(0.55)} className="font-body text-base text-white/50 max-w-[480px] mx-auto leading-relaxed mb-16 font-extralight">
          Marketing sob medida para o seu negócio: do planejamento à execução, com estratégia, autenticidade e criatividade.
        </motion.p>
      </div>

      {/* Ticker */}
      <div className="relative" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, hsl(0 0% 7%), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, hsl(0 0% 7%), transparent)" }} />

        <TickerRow items={tickerRow1} direction="left" duration={24} diamondColor="#9B6FD4" textOpacity="rgba(255,255,255,0.22)" />
        <TickerRow items={tickerRow2} direction="right" duration={20} diamondColor="#4ECFB0" textOpacity="rgba(255,255,255,0.10)" />
      </div>
    </section>
  );
};

export default PositioningSection;
