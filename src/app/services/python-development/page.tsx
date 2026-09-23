import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Python Development Company | AI & Backend Development | Pluginfy",
  description:
    "Custom Python development for AI, automation, APIs, data processing and backend applications. Build scalable Python solutions with Pluginfy.",
  alternates: { canonical: "/services/python-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Two linked python coils */}
    <ellipse cx="160" cy="180" rx="62" ry="90" fill="rgba(55,118,171,0.15)" stroke="#3776AB" strokeWidth="1.5" />
    <path d="M160 90 l-30 8 v0 c-30 0 -30 22 0 30 c30 8 30 30 0 38 c-30 8 -30 30 0 38 c30 8 30 30 0 38" stroke="#3776AB" strokeWidth="6" fill="none" strokeLinecap="round" />
    <path d="M240 90 l30 8 v0 c30 0 30 22 0 30 c-30 8 -30 30 0 38 c30 8 30 30 0 38 c-30 8 -30 30 0 38" stroke="#FFD43B" strokeWidth="6" fill="none" strokeLinecap="round" />
    <text x="160" y="196" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="bold" fontFamily="monospace">def</text>
    <text x="240" y="196" textAnchor="middle" fill="rgba(255,255,255,0.85)" fontSize="13" fontWeight="bold" fontFamily="monospace">py</text>
    {/* Orbiting context chips */}
    {[["AI", 70, 60], ["AUTO", 340, 60], ["API", 60, 290], ["DATA", 340, 290]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x) - 24} y={Number(y) - 11} width={48} height={22} rx={11} fill="rgba(14,18,40,0.9)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#F5C518" fontSize="8" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Connectors */}
    <path d="M92 80 Q130 100 145 120" stroke="rgba(55,118,171,0.5)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M328 80 Q290 100 275 120" stroke="rgba(255,212,59,0.5)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M84 252 Q120 250 140 230" stroke="rgba(55,118,171,0.5)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M336 252 Q300 250 280 230" stroke="rgba(255,212,59,0.5)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Code line */}
    <rect x="120" y="298" width="180" height="8" rx="4" fill="rgba(255,255,255,0.12)" />
    <rect x="120" y="312" width="140" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
  </svg>
);

const data: ServicePageData = {
  title: "Python Development",
  tagline: "For AI, automation & scalable backends.",
  heroDesc: "Python powers some of today's most capable AI, automation and data platforms. We use Python to develop intelligent applications, backend services, APIs, automation systems and data-processing solutions.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "Python Development Services",
    items: [
      "AI Application Development",
      "LLM Integrations",
      "Automation Software",
      "Backend Development",
      "REST APIs",
      "Data Processing",
      "Data Extraction",
      "Machine Learning",
      "Microservices",
      "Third-Party Integrations",
      "Internal Business Tools",
      "SaaS Backends",
    ],
  },
  contentSections: [
    {
      heading: "Python + AI",
      paragraphs: [
        "Our Python engineers build applications around modern AI technologies, including LLMs, AI agents, vector databases and machine-learning pipelines.",
      ],
    },
    {
      heading: "Python + Automation",
      paragraphs: [
        "We use Python to connect systems and eliminate repetitive manual processes — from processing thousands of documents to synchronizing information between platforms.",
      ],
    },
    {
      heading: "Python + Your Existing Systems",
      paragraphs: [
        "You don't necessarily need to replace your current technology.",
        "Python services can integrate with Laravel, PHP, Node.js, ERP systems, e-commerce platforms and third-party APIs.",
      ],
    },
  ],
  techStack: [
    { name: "Python", color: "#3776AB", desc: "Core language" },
    { name: "OpenAI", color: "#74AA9C", desc: "LLMs & agents" },
    { name: "LangChain", color: "#1C7C3C", desc: "LLM orchestration" },
    { name: "PostgreSQL", color: "#336791", desc: "Data layer" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
    { name: "AWS", color: "#FF9900", desc: "Cloud & scale" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    button: "Build With Python",
  },
};

export default function PythonDevelopmentPage() {
  return <ServicePage data={data} />;
}