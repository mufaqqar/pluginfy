import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = pageMetadata({
  title: "Our Services — AI, Web, Mobile & Cloud",
  description:
    "AI development, custom software, React and Next.js, Laravel, PHP, Python, ERP, e-commerce, plugin and API development, DevOps and cloud engineering.",
  path: "/services/",
});

export default function ServicesPage() {
  return <ServicesClient />;
}