import { Instagram, Mail, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <img
              src="https://openviewdigital.com.br/wp-content/uploads/2025/03/Logotipo-OpenView.png.webp"
              alt="OpenView"
              className="h-8 mb-4 object-contain invert"
              loading="lazy"
            />
            <p className="font-body text-sm text-muted-foreground">
              Marketing estratégico que posiciona, atrai e converte.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/openviewdigital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              @openviewdigital
            </a>
            <a
              href="mailto:kimberly@openviewdigital.com.br"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              kimberly@openviewdigital.com.br
            </a>
            <span className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Santana, Porto Alegre — RS
            </span>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} OpenView. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
