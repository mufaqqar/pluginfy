import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = pageMetadata({
  title: "About Our AI-First Engineering Team",
  description:
    "Pluginfy is an AI-first technology firm. Meet the team, our values, and our journey from a focused web studio to a global product engineering company.",
  path: "/about/",
});

export default function AboutPage() {
  return <AboutClient />;
}
