import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import IdeaToProduct from "@/components/IdeaToProduct";
import ServicesSection from "@/components/ServicesSection";
import ITServices from "@/components/ITServices";
import TrustedWorldwide from "@/components/TrustedWorldwide";
import ToolsSection from "@/components/ToolsSection";
import HowWeWork from "@/components/HowWeWork";
import WhyPluginfy from "@/components/WhyPluginfy";
import FAQSection from "@/components/FAQsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "AI Development & Custom Software Company",
  description: siteConfig.description,
  path: "/",
});


export default function HomePage() {
  return (
    <>
      <div id="home"><HeroSection /></div>
      <IdeaToProduct />
      <div id="services"><ServicesSection /></div>
      <ITServices />
      <div id="about"><TrustedWorldwide /></div>
      <WhyPluginfy />
      <ToolsSection />
      <HowWeWork />
      <FAQSection />
      <CTASection />
      <div id="contact"><ContactSection /></div>
    </>
  );
}