import { motion } from "framer-motion";

const EssenceSection = () => {
  return (
    <section className="py-32 section-padding section-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-tight text-white/80"
        >
          Mostre a sua essência, destaque-se dos concorrentes, atraia os clientes certos.{" "}
          <span className="italic text-primary font-normal">E cobre mais por isso.</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default EssenceSection;
