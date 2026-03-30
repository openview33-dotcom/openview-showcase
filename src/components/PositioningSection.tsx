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
  textOpacity,
  diamondColor,
}: {
  items: string[];
  direction: "left" | "right";
  duration: number;
  textOpacity: string;
  diamondColor: string;
}) => {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-3">
      <motion.div
        className="inline-flex items-center gap-0"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center font-body text-sm tracking-wider uppercase">
            <span style={{ color: textOpacity }}>{item}</span>
            <span className="mx-4" style={{ color: diamondColor }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const PositioningSection = () => {
  return (
    <section id="posicionamento" className="relative" style={{ backgroundColor: "#111111" }}>
      <div className="flex flex-col items-center text-center" style={{ padding: "80px 48px 0" }}>
        <motion.p {...fade(0.1)} className="font-body text-sm tracking-[0.25em] uppercase mb-5" style={{ color: "#4ECFB0" }}>
          ◆ Nossa abordagem
        </motion.p>

        <motion.h2 {...fade(0.25)} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
          O segmento <span className="text-primary">muda.</span>
        </motion.h2>

        <motion.h3 {...fade(0.4)} className="font-display text-2xl md:text-3xl italic font-light text-white/80 mb-6">
          O resultado, <span style={{ color: "#F5C842" }}>não.</span>
        </motion.h3>

        <motion.p {...fade(0.55)} className="font-body text-base leading-relaxed max-w-[480px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          Marketing sob medida para qualquer negócio — do planejamento à execução, com estratégia e criatividade.
        </motion.p>
      </div>

      {/* Ticker */}
      <div className="relative mt-16" style={{ borderTop: "0.5px solid rgba(255,255,255,0.06)" }}>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(to right, #111111, transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(to left, #111111, transparent)" }} />

        <div className="py-4">
          <TickerRow items={tickerRow1} direction="left" duration={24} textOpacity="rgba(255,255,255,0.22)" diamondColor="#9B6FD4" />
          <TickerRow items={tickerRow2} direction="right" duration={20} textOpacity="rgba(255,255,255,0.10)" diamondColor="#4ECFB0" />
        </div>
      </div>
    </section>
  );
};

export default PositioningSection;
