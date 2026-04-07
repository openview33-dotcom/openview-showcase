import tommasiStrip from "@/assets/tommasi-strip.png";
import poloStrip from "@/assets/Polo-marca.png";
import formiguinhasStrip from "@/assets/formiguinhas-marca.png";

const BrandingTab = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "s0 40s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}>
          <img src={tommasiStrip} alt="Tommasi" style={{ height: 300, width: "auto", display: "block" }} />
          <img src={tommasiStrip} alt="Tommasi" style={{ height: 300, width: "auto", display: "block" }} />
        </div>
      </div>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "s1 35s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}>
          <img src={poloStrip} alt="Polo" style={{ height: 300, width: "auto", display: "block" }} />
          <img src={poloStrip} alt="Polo" style={{ height: 300, width: "auto", display: "block" }} />
        </div>
      </div>

      <div style={{ width: "100%", overflow: "hidden" }}>
        <div style={{ display: "flex", width: "max-content", animation: "s2 45s linear infinite" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "paused"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = "running"; }}>
          <img src={formiguinhasStrip} alt="Formiguinhas" style={{ height: 300, width: "auto", display: "block" }} />
          <img src={formiguinhasStrip} alt="Formiguinhas" style={{ height: 300, width: "auto", display: "block" }} />
        </div>
      </div>

      <style>{`
        @keyframes s0 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s1 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes s2 { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>

    </div>
  );
};

export default BrandingTab;
