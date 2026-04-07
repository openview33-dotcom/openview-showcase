import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-32 section-padding section-dark">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-yellow mb-6">
            ◆ Próximo passo
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-medium leading-tight mb-8 text-white">
            Pronto para posicionar
            <br />
            <span className="italic font-normal text-white/60">sua marca?</span>
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            Fale com a equipe OpenView e descubra como transformar
            sua presença digital com estratégia e criatividade.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5551984476625"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground font-body text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Falar pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
