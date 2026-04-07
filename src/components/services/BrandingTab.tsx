import tommasiStrip from "@/assets/tommasi-strip.png";
import poloStrip from "@/assets/Polo-marca.png";
import formiguinhasStrip from "@/assets/formiguinhas-marca.png";

const strips = [
  { src: tommasiStrip, alt: "Tommasi", duration: "40s", anim: "s0" },
  { src: poloStrip, alt: "Polo", duration: "35s", anim: "s1" },
  { src: formiguinhasStrip, alt: "Formiguinhas", duration: "45s", anim: "s2" },
];

const BrandingTab = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {strips.map((strip) => (
        <div key={strip.anim} style={{ width: "100%", overflow: "hidden" }}>
          <div
            style={{ display: "flex", width: "max-content", animation: `${strip.anim} ${strip.duration} linear infinite` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
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
      `}</style>
    </div>
  );
};

export default BrandingTab;
