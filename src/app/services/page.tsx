import type { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore all Pluginfy services — AI development & automation, custom software, React, Next.js & Vue.js, Laravel & PHP, Python, ERP, e-commerce, plugin & API development and DevOps & cloud engineering.",
  alternates: {
    canonical: "/services/",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}