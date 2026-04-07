import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    window.open("https://wa.me/5551984476625", "_blank");
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding flex items-center justify-between h-20">
        <img src={logo} alt="OpenView" className="h-8 md:h-10 object-contain" width={160} height={40} />
        <div className="hidden md:flex items-center gap-8">
        </div>
        <button
          onClick={() => scrollTo("contato")}
          className="px-6 py-2.5 bg-primary text-primary-foreground font-body text-xs tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
        >
          Contato
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
