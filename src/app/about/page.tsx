import type { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Pluginfy is an AI-first technology firm. Meet the team, our values, and the journey from a focused web studio to a global product engineering company across 5 continents.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
