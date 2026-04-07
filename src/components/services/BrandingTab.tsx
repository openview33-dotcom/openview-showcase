import { useState } from "react";
import tommasiStrip from "@/assets/tommasi-strip.png";
import poloStrip from "@/assets/Polo-marca.png";
import formiguinhasStrip from "@/assets/formiguinhas-marca.png";
import beabaStrip from "@/assets/Beaba-marca.png";

const strips = [
  { src: tommasiStrip, alt: "Tommasi", duration: "40s", anim: "s0", label: "Tommasi · Consulenza Internazionale" },
  { src: formiguinhasStrip, alt: "Formiguinhas", duration: "45s", anim: "s1", label: "Formiguinhas POA" },
  { src: poloStrip, alt: "Polo", duration: "35s", anim: "s2", label: "Polo Instaladora" },
  { src: beabaStrip, alt: "BeABA", duration: "50s", anim: "s3", label: "BeABA · Intervenção Comportamental" },
];

const BrandingTab = () => {
  const [hovered, setHovered] = useState<Record<number, boolean>>({});

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {strips.map((strip, i) => (
        <div
          key={strip.anim}
          style={{ width: "100%", overflow: "hidden", position: "relative" }}
          onMouseEnter={() => setHovered((p) => ({ ...p, [i]: true }))}
          onMouseLeave={() => setHovered((p) => ({ ...p, [i]: false }))}
        >
          {/* Máscara escura */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              background: "rgba(0,0,0,0.78)",
              opacity: hovered[i] ? 0 : 1,
              transition: "opacity 0.4s ease",
              pointerEvents: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
              {strip.label}
            </span>
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 6 }}>
              passe o mouse para ver
            </span>
          </div>
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: `${strip.anim} ${strip.duration} linear infinite`,
              animationPlayState: hovered[i] ? "running" : "paused",
            }}
          >
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
          </div>
        </div>
      ))}

      <style>{`
        @keyframes s0 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s3 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default BrandingTab;
