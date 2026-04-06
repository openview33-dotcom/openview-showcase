import tommasiStrip from "@/assets/tommasi-strip.png";

const BrandingTab = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h3 className="font-display text-2xl md:text-3xl text-white font-medium">
          Tommasi · Consulenza Internazionale
        </h3>
      </div>

      <div className="w-full overflow-hidden rounded-xl">
        <div
          className="flex w-max"
          style={{ animation: "brandingScroll 30s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
        >
          <img src={tommasiStrip} alt="Tommasi branding strip" className="h-auto" />
          <img src={tommasiStrip} alt="Tommasi branding strip" className="h-auto" />
        </div>
      </div>

      <style>{`@keyframes brandingScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

export default BrandingTab;
