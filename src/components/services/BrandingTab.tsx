import tommasiStrip from "@/assets/tommasi-strip.png";
import docariaStrip from "@/assets/doceria (3).svg";
import poloStrip from "@/assets/Polo-marca.svg";

const strips = [
  { src: tommasiStrip, alt: "Tommasi" },
  { src: docariaStrip, alt: "Doceria" },
  { src: poloStrip, alt: "Polo" },
];

const BrandingTab = () => {
  return (
    <div className="flex flex-col gap-0">
      {strips.map((strip) => (
        <div key={strip.alt} className="w-full overflow-hidden">
          <div
            style={{ display: "flex", width: "max-content", animation: `brandingScroll${strip.alt} 40s linear infinite` }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
          >
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes brandingScrollTommasi { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes brandingScrollDoceria { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default BrandingTab;
