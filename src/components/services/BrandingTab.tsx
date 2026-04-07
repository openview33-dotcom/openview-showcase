```tsx
import tommasiStrip from "@/assets/tommasi-strip.png";
import poloStrip from "@/assets/Polo-marca.png";
import formiguinhasStrip from "@/assets/formiguinhas-marca.png";

const strips = [
  { src: tommasiStrip, alt: "Tommasi", duration: "40s" },
  { src: poloStrip, alt: "Polo", duration: "35s" },
  { src: formiguinhasStrip, alt: "Formiguinhas", duration: "45s" },
];

const BrandingTab = () => {
  return (
    <div className="flex flex-col gap-0">
      {strips.map((strip, i) => (
        <div key={i} className="w-full overflow-hidden">
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: `scroll${i} ${strip.duration} linear infinite`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.animationPlayState = "running";
            }}
          >
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
            <img src={strip.src} alt={strip.alt} style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
          </div>
        </div>
      ))}
      <style>{`
        @keyframes scroll0 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes scroll2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default BrandingTab;
```
