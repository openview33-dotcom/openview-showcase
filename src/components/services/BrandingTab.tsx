import { useState } from "react";
import tommasiStrip from "@/assets/tommasi-strip.png";
import poloStrip from "@/assets/Polo-marca.png";
import formiguinhasStrip from "@/assets/formiguinhas-marca.png";

const strips = [
  { src: tommasiStrip, alt: "Tommasi", duration: "40s", anim: "s0" },
  { src: formiguinhasStrip, alt: "Formiguinhas", duration: "45s", anim: "s1" },
  { src: poloStrip, alt: "Polo", duration: "35s", anim: "s2" },
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
            }}
          />
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

      <div style={{ width: "100%", height: 300, backgroundColor: "#1a1a1a" }} />
      <div style={{ width: "100%", height: 300, backgroundColor: "#1a1a1a" }} />

      <style>{`
        @keyframes s0 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default BrandingTab;
