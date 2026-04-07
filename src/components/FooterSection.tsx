import { Instagram, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 section-padding section-dark border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img
              src="/c3b1e247-fdbb-412f-991f-20d2defcddb8.png"
              alt="OpenView"
              className="h-8 mb-4 object-contain brightness-0 invert"
              loading="lazy"
            />
            <p className="font-body text-sm text-white/50">
              Marketing estratégico que posiciona, atrai e converte.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a href="https://www.instagram.com/openviewdigital/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors">
              <Instagram className="w-4 h-4" />
              @openviewdigital
            </a>
            <a href="mailto:kimberly@openviewdigital.com.br" className="inline-flex items-center gap-2 font-body text-sm text-white/50 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              kimberly@openviewdigital.com.br
            </a>
            <span className="inline-flex items-center gap-2 font-body text-sm text-white/50">
              <MapPin className="w-4 h-4" />
              Santana, Porto Alegre, RS
            </span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="font-body text-xs text-white/40 text-center">
            © {new Date().getFullYear()} OpenView. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
