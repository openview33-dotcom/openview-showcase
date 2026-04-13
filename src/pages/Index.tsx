import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PositioningSection from "@/components/PositioningSection";
import CasesSection from "@/components/CasesSection";
import ServicesSection from "@/components/ServicesSection";

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
      
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Index;
