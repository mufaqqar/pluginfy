import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import IdeaToProduct from "@/components/IdeaToProduct";
import ServicesSection from "@/components/ServicesSection";
import ITServices from "@/components/ITServices";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import ToolsSection from "@/components/ToolsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pluginfy — AI-First Technology Firm | AI, Web & Mobile Development",
  description:
    "AI-first technology firm building production-grade AI systems, AI-native web platforms and mobile apps. Enterprise engineering across the US, GCC, UK and EU.",
  alternates: {
    canonical: "/",
  },
};


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