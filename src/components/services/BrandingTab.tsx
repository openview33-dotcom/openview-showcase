import tommasiStrip from "@/assets/tommasi-strip.png";

const BrandingTab = () => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ margin: "0 calc(-1 * (50vw - 50%))" }}
    >
      <div
        style={{ display: "flex", width: "max-content", animation: "brandingScroll 40s linear infinite" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}
      >
        <img src={tommasiStrip} alt="Tommasi" style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
        <img src={tommasiStrip} alt="Tommasi" style={{ height: 300, width: "auto", display: "block", flexShrink: 0 }} />
      </div>
      <style>{`@keyframes brandingScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

export default BrandingTab;
