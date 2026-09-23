import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Pluginfy",
  description:
    "Custom software development for startups and enterprises. Pluginfy builds scalable SaaS platforms, business applications, portals, APIs and enterprise software.",
  alternates: { canonical: "/services/custom-software-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Application layers */}
    {[
      { y: 70, w: 210, label: "UX / UI", color: "#F5C518" },
      { y: 120, w: 250, label: "Frontend", color: "#61DAFB" },
      { y: 170, w: 290, label: "Backend & APIs", color: "#45BA4B" },
      { y: 220, w: 240, label: "Database", color: "#7B42BC" },
      { y: 270, w: 200, label: "Infrastructure", color: "#FF9900" },
    ].map((l, i, arr) => (
      <g key={l.label}>
        {i < arr.length - 1 && (
          <line x1="130" y1={l.y + 40} x2="130" y2={arr[i + 1].y} stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" strokeDasharray="4 3" />
        )}
        <rect x="70" y={l.y} width={l.w} height="40" rx="8" fill={`${l.color}12`} stroke={l.color} strokeWidth="1" strokeOpacity="0.6" />
        {i < arr.length - 1 && <circle cx="130" cy={l.y + 40} r="2.5" fill="#F5C518" />}
        <text x={i < arr.length - 1 ? 198 : 178} y={l.y + 25} textAnchor="middle" fill={l.color} fontSize="9" fontFamily="monospace" fontWeight="bold">{l.label}</text>
        {i < arr.length - 1 && <text x="146" y={l.y + 34} fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace" textAnchor="middle">S</text>}
      </g>
    ))}
    {/* Side tags */}
    <rect x="330" y="90" width="46" height="20" rx="10" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
    <text x="353" y="104" textAnchor="middle" fill="#F5C518" fontSize="8" fontFamily="monospace">SaaS</text>
    <rect x="330" y="130" width="46" height="20" rx="10" fill="rgba(97,218,251,0.1)" stroke="#61DAFB" strokeWidth="0.8" />
    <text x="353" y="144" textAnchor="middle" fill="#61DAFB" fontSize="8" fontFamily="monospace">API</text>
    <rect x="330" y="196" width="46" height="20" rx="10" fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
    <text x="353" y="210" textAnchor="middle" fill="#F5C518" fontSize="8" fontFamily="monospace">MVP</text>
    {/* Growth arrow */}
    <path d="M40 320 L380 320" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
    <path d="M330 320 L342 312 L342 320" fill="none" stroke="rgba(245,197,24,0.5)" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

const data: ServicePageData = {
  title: "Custom Software Development",
  tagline: "Software designed around your business.",
  heroDesc: "When off-the-shelf software doesn't fit, we build what does. From an initial idea to a production-ready application, our engineers handle architecture, frontend and backend development, integrations, infrastructure and deployment.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "What We Build",
    items: [
      "SaaS Platforms",
      "Enterprise Applications",
      "Internal Business Software",
      "Customer Portals",
      "Partner Portals",
      "Management Platforms",
      "Booking Systems",
      "Workflow Management Software",
      "Dashboards & Analytics",
      "API Platforms",
      "Multi-Tenant Applications",
      "Legacy Software Modernization",
    ],
  },
  contentSections: [
    {
      heading: "Built for More Than Launch Day",
      paragraphs: [
        "Good software needs to survive growth.",
        "We design applications with scalability, maintainability, performance and security in mind so your technology can evolve alongside your business.",
      ],
    },
    {
      heading: "From Concept to Production",
      paragraphs: [
        "You don't need to coordinate five different technology vendors. Pluginfy can support the complete software development lifecycle.",
      ],
    },
  ],
  techStack: [
    { name: "Laravel", color: "#FF2D20", desc: "Backend framework" },
    { name: "Python", color: "#3776AB", desc: "Services & automation" },
    { name: "Node.js", color: "#8CC84B", desc: "REST & GraphQL APIs" },
    { name: "React", color: "#61DAFB", desc: "Frontend interfaces" },
    { name: "PostgreSQL", color: "#336791", desc: "Relational data layer" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
  ],
  process: [
    { step: "01", title: "Discovery & Architecture", desc: "We map your business logic, integrations and requirements into a concrete technical blueprint before a single line of code is written." },
    { step: "02", title: "UX / UI Design", desc: "Interfaces designed around your users — every state, every workflow, documented before development starts." },
    { step: "03", title: "Development", desc: "Agile sprints with deployed previews. Frontend and backend built in parallel by dedicated engineers." },
    { step: "04", title: "Testing → Deployment → Support", desc: "Automated QA, zero-downtime launches and ongoing support. Pluginfy covers the complete lifecycle." },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    heading: "Have a Software Idea?",
    body: "Bring us the problem, requirements or even a rough idea. We'll help turn it into a practical development roadmap.",
    button: "Discuss Your Project",
  },
};

export default function CustomSoftwarePage() {
  return <ServicePage data={data} />;
}