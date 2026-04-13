import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import CasesSection from "@/components/CasesSection";
import ServicesSection from "@/components/ServicesSection";
import OutrosServicosSection from "@/components/OutrosServicosSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PositioningSection />
      <CasesSection />
      <ServicesSection />
      <OutrosServicosSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
