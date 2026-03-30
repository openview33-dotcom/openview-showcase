import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Navbar = () => {
...
  return (
    <motion.nav
...
    >
      <div className="section-padding flex items-center justify-between h-20">
        <img
          src={logo}
          alt="OpenView"
          className="h-8 md:h-10 object-contain"
          width={160}
          height={40}
        />
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Cases", id: "cases" },
            { label: "Serviços", id: "servicos" },
            { label: "Criativos", id: "criativos" },
            { label: "Sobre", id: "sobre" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="font-body text-sm tracking-wider uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contato")}
          className="px-6 py-2.5 bg-accent text-accent-foreground font-body text-xs tracking-wider uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Contato
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
