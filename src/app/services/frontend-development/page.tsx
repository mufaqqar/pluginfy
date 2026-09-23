import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React, Next.js & Vue.js Development Company | Pluginfy",
  description:
    "Build fast modern web applications with React, Next.js and Vue.js. Pluginfy develops SaaS products, dashboards, portals and e-commerce frontends.",
  alternates: { canonical: "/services/frontend-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Central component node */}
    <circle cx="210" cy="170" r="34" fill="rgba(245,197,24,0.14)" stroke="#F5C518" strokeWidth="1.5" />
    {/* Atom orbits */}
    <ellipse cx="210" cy="170" rx="120" ry="44" stroke="rgba(97,218,251,0.35)" strokeWidth="1.2" transform="rotate(-25 210 170)" />
    <ellipse cx="210" cy="170" rx="120" ry="44" stroke="rgba(66,184,131,0.35)" strokeWidth="1.2" transform="rotate(25 210 170)" />
    <ellipse cx="210" cy="170" rx="120" ry="44" stroke="rgba(255,255,255,0.25)" strokeWidth="1.2" transform="rotate(90 210 170)" />
    {/* Orbit nodes */}
    <circle cx="190" cy="256" r="16" fill="rgba(97,218,251,0.15)" stroke="#61DAFB" strokeWidth="1.2" />
    <text x="190" y="260" textAnchor="middle" fill="#61DAFB" fontSize="8" fontFamily="monospace">React</text>
    <circle cx="268" cy="146" r="16" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
    <text x="268" y="150" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="monospace">Next</text>
    <circle cx="152" cy="146" r="16" fill="rgba(66,184,131,0.15)" stroke="#42B883" strokeWidth="1.2" />
    <text x="152" y="150" textAnchor="middle" fill="#42B883" fontSize="8" fontFamily="monospace">Vue</text>
    <circle cx="268" cy="246" r="14" fill="rgba(245,197,24,0.12)" stroke="rgba(245,197,24,0.5)" strokeWidth="1" />
    {/* Component blocks */}
    {[["<Nav/>", 70, 80], ["<Card/>", 330, 70], ["<Hero/>", 60, 250], ["<Footer/>", 330, 250]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x)} y={Number(y)} width="62" height="24" rx="6" fill="rgba(14,18,40,0.95)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x) + 31} y={Number(y) + 16} textAnchor="middle" fill="#F5C518" fontSize="8" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Connections */}
    <path d="M132 80 L180 136" stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M288 70 L252 132" stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M122 250 L172 218" stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M330 250 L254 220" stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Speed meter */}
    <path d="M90 310 A120 60 0 0 1 330 310" stroke="rgba(39,201,63,0.4)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M210 310 L210 262" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
    <circle cx="210" cy="262" r="3.5" fill="#F5C518" />
  </svg>
);

const data: ServicePageData = {
  title: "React, Next.js & Vue.js Development",
  tagline: "Frontend that feels fast.",
  heroDesc: "Users judge software in seconds. We develop responsive, high-performance interfaces using React, Next.js and Vue.js for SaaS platforms, enterprise applications, dashboards and e-commerce experiences.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "Frontend Development Services",
    items: [
      "React Development",
      "Next.js Development",
      "Vue.js Development",
      "SaaS Frontends",
      "Enterprise Dashboards",
      "Customer Portals",
      "Headless E-Commerce",
      "Progressive Web Applications",
      "API Integrations",
      "Existing Frontend Modernization",
      "Performance Optimization",
    ],
  },
  contentSections: [
    {
      heading: "Next.js Development",
      paragraphs: [
        "Build SEO-friendly, high-performance applications using one of the leading React frameworks for modern web development.",
      ],
    },
    {
      heading: "React Development",
      paragraphs: [
        "From interactive dashboards to sophisticated SaaS products, we create reusable and maintainable React architectures designed to grow.",
      ],
    },
    {
      heading: "Vue.js Development",
      paragraphs: [
        "For projects where Vue provides the right balance of flexibility and simplicity, our engineers can develop complete applications or extend existing Vue platforms.",
      ],
    },
    {
      heading: "Frontend Meets Backend",
      paragraphs: [
        "A beautiful interface is useless without reliable systems behind it.",
        "Our frontend engineers work alongside backend, API, database and DevOps specialists to deliver complete applications rather than disconnected screens.",
      ],
    },
  ],
  techStack: [
    { name: "React", color: "#61DAFB", desc: "Component architecture" },
    { name: "Next.js", color: "#FFFFFF", desc: "SSR & App Router" },
    { name: "Vue.js", color: "#42B883", desc: "Flexible interfaces" },
    { name: "TypeScript", color: "#3178C6", desc: "Type-safe codebase" },
    { name: "Node.js", color: "#8CC84B", desc: "API layer" },
    { name: "AWS / Vercel", color: "#FF9900", desc: "Global delivery" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    button: "Build Your Web Application",
  },
};

export default function FrontendDevelopmentPage() {
  return <ServicePage data={data} />;
}