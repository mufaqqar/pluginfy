import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Development & Automation Company | Pluginfy",
  description:
    "Build intelligent AI solutions, AI agents and business automation with Pluginfy. Custom LLM integrations, workflow automation, Python AI development and enterprise AI solutions.",
  alternates: { canonical: "/services/ai-development-automation/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Central brain node */}
    <circle cx="210" cy="170" r="44" fill="rgba(245,197,24,0.14)" stroke="#F5C518" strokeWidth="1.5" />
    <rect x="186" y="152" width="48" height="26" rx="6" fill="rgba(245,197,24,0.25)" />
    <text x="210" y="171" textAnchor="middle" fill="#F5C518" fontSize="13" fontWeight="bold" fontFamily="monospace">AI</text>
    {/* Orbit rings */}
    <ellipse cx="210" cy="170" rx="120" ry="46" stroke="rgba(245,197,24,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <ellipse cx="210" cy="170" rx="150" ry="70" stroke="rgba(245,197,24,0.08)" strokeWidth="1" strokeDasharray="4 4" />
    {/* Satellite nodes */}
    {[
      { cx: 90,  cy: 150, label: "LLM" },
      { cx: 330, cy: 150, label: "RAG" },
      { cx: 70,  cy: 245, label: "AGENTS" },
      { cx: 350, cy: 245, label: "AUTOMATION" },
      { cx: 210, cy: 78,  label: "CHATBOTS" },
    ].map((n) => (
      <g key={n.label}> 
        <line x1="210" y1="170" x2={n.cx} y2={n.cy} stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="3 3" />
        <rect x={n.cx - 34} y={n.cy - 11} width="68" height="22" rx="6" fill="rgba(14,18,40,0.9)" stroke="rgba(245,197,24,0.5)" strokeWidth="0.8" />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace">{n.label}</text>
      </g>
    ))}
    {/* Data dots */}
    {[[150,110],[270,110],[120,230],[300,230],[88,200],[332,200]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="rgba(245,197,24,0.4)" />
    ))}
    {/* Pulse rings */}
    <circle cx="210" cy="170" r="62" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
  </svg>
);

const data: ServicePageData = {
  title: "AI Development & Automation",
  tagline: "AI that creates real business value.",
  heroDesc: "Build smarter workflows. Automate repetitive work. Turn AI into a competitive advantage. From AI agents and LLM-powered applications to document processing and complex workflow automation, we integrate artificial intelligence into the systems your business already depends on.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "Our AI Development Services",
    items: [
      "AI Agents & Assistants",
      "Generative AI Applications",
      "LLM Development & Integration",
      "OpenAI API Integration",
      "AI-Powered SaaS Applications",
      "Business Process Automation",
      "Intelligent Document Processing",
      "Retrieval-Augmented Generation (RAG)",
      "Knowledge Base Assistants",
      "AI Chatbots",
      "Data Extraction & Classification",
      "Machine Learning Solutions",
      "Custom Python AI Development",
    ],
  },
  contentSections: [
    {
      heading: "AI Agents Built Around Your Business",
      paragraphs: [
        "Generic chatbots aren't enough.",
        "We build AI agents connected to your business data, APIs and workflows. They can retrieve information, process documents, interact with internal systems, trigger actions and assist employees or customers.",
        "Possible applications include customer support, sales qualification, document analysis, reporting, internal knowledge search and operational automation.",
      ],
    },
    {
      heading: "Business Process Automation",
      paragraphs: [
        "Your team shouldn't spend hours performing tasks software can handle in seconds.",
        "Pluginfy identifies repetitive processes and transforms them into automated workflows connecting your ERP, CRM, e-commerce platform, APIs and internal systems.",
        "Automate the repetitive. Let your people focus on what requires people.",
      ],
    },
  ],
  techStack: [
    { name: "Python", color: "#3776AB", desc: "Core AI language" },
    { name: "OpenAI", color: "#74AA9C", desc: "GPT & API integration" },
    { name: "LLMs", color: "#F5C518", desc: "Model orchestration" },
    { name: "LangChain", color: "#1C7C3C", desc: "LLM workflows" },
    { name: "Vector Databases", color: "#6C5CE7", desc: "Semantic search" },
    { name: "AWS / Azure / GCP", color: "#FF9900", desc: "Cloud & scale" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    heading: "Ready to Put AI to Work?",
    body: "Tell us where your team is losing time. We'll help determine where AI and automation can create measurable value.",
    button: "Start Your AI Project",
  },
};

export default function AiAutomationPage() {
  return <ServicePage data={data} />;
}