import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import IdeaToProduct from "@/components/IdeaToProduct";
import ServicesSection from "@/components/ServicesSection";
import ITServices from "@/components/ITServices";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <TrustedBy />
      <IdeaToProduct />
      <div id="services"><ServicesSection /></div>
      <ITServices />
      <div id="about"><TrustedWorldwide /></div>
      <ToolsSection />
      <CTASection />
      <div id="contact"><ContactSection /></div>
    </>
  );
}