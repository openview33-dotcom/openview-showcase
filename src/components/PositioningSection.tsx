import { motion } from "framer-motion";

const PositioningSection = () => {
  return (
    <section className="py-32 section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-6">
            Sobre a OpenView
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium leading-tight mb-8">
            Não somos uma agência comum.
            <br />
            <span className="italic font-normal text-muted-foreground">
              Somos parceiros de marca.
            </span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Da estratégia à execução, cada entrega é pensada para posicionar sua marca
            com consistência, estética e resultado. Planejamento de conteúdo, branding,
            audiovisual e páginas — tudo sob o mesmo olhar criativo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PositioningSection;
