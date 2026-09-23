import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps & Cloud Engineering Services | Pluginfy",
  description:
    "DevOps consulting and cloud engineering for AWS, Azure and GCP. CI/CD, Docker, Kubernetes, infrastructure automation, migration and monitoring.",
  alternates: { canonical: "/services/devops-cloud/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Cloud shape */}
    <path d="M110 220 a55 40 0 0 1 4 -79 a65 55 0 0 1 124 -18 a48 36 0 0 1 12 71 z" fill="rgba(255,153,0,0.12)" stroke="#FF9900" strokeWidth="1.5" />
    {/* Pipeline nodes */}
    {[
      { cx: 80,  cy: 120, label: "Code", color: "#F5C518" },
      { cx: 175, cy: 120, label: "CI/CD", color: "#61DAFB" },
      { cx: 270, cy: 120, label: "Build", color: "#45BA4B" },
      { cx: 350, cy: 120, label: "Deploy", color: "#7B42BC" },
    ].map((n, i, arr) => (
      <g key={n.label}>
        {i < arr.length - 1 && (
          <line x1={n.cx + 34} y1={n.cy} x2={arr[i + 1].cx - 34} y2={n.cy} stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />
        )}
        <circle cx={n.cx} cy={n.cy} r="28" fill="rgba(7,9,26,0.9)" stroke={n.color} strokeWidth="1.5" />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill={n.color} fontSize="8" fontFamily="monospace" fontWeight="bold">{n.label}</text>
      </g>
    ))}
    {/* Down into cloud */}
    <path d="M350 148 L350 175" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" strokeDasharray="5 3" />
    <path d="M346 166 l4 8 4 -8" stroke="rgba(245,197,24,0.3)" strokeWidth="1.2" fill="none" />
    {/* Containers below */}
    {[110, 170, 230, 290].map((x, i) => (
      <g key={i}>
        <rect x={x} y="270" width="46" height="30" rx="6" fill="rgba(36,150,237,0.12)" stroke="#2496ED" strokeWidth="1" />
        <text x={x + 23} y="288" textAnchor="middle" fill="#2496ED" fontSize="7" fontFamily="monospace">pod</text>
      </g>
    ))}
    <rect x="120" y="252" width="120" height="18" rx="9" fill="rgba(50,108,229,0.12)" stroke="#326CE5" strokeWidth="0.8" />
    <text x="180" y="265" textAnchor="middle" fill="#326CE5" fontSize="8" fontFamily="monospace">Kubernetes</text>
    <path d="M205 252 L205 243" stroke="rgba(245,197,24,0.4)" strokeWidth="1.2" />
    {/* Uptime chip */}
    <rect x="270" y="224" width="86" height="22" rx="11" fill="rgba(39,201,63,0.12)" stroke="#27C93F" strokeWidth="1" />
    <text x="313" y="239" textAnchor="middle" fill="#27C93F" fontSize="8" fontFamily="monospace">99.97% up</text>
    {/* Terraform chip */}
    <rect x="70" y="228" width="80" height="22" rx="11" fill="rgba(123,66,188,0.12)" stroke="#7B42BC" strokeWidth="1" />
    <text x="110" y="243" textAnchor="middle" fill="#7B42BC" fontSize="8" fontFamily="monospace">Terraform</text>
  </svg>
);

const data: ServicePageData = {
  title: "DevOps & Cloud Engineering",
  tagline: "Ship with confidence.",
  heroDesc: "We help businesses automate deployment, modernize infrastructure and operate scalable cloud environments. Infrastructure shouldn't become the reason your product can't move quickly.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "DevOps Services",
    items: [
      "CI/CD Implementation",
      "Cloud Architecture",
      "AWS Infrastructure",
      "Azure Infrastructure",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Infrastructure as Code",
      "Terraform",
      "Server Migration",
      "Cloud Migration",
      "Monitoring & Logging",
      "Backup Strategies",
      "Performance Optimization",
      "Infrastructure Automation",
    ],
  },
  contentSections: [
    {
      heading: "Automate Your Deployment Pipeline",
      paragraphs: [
        "Replace manual deployments with predictable CI/CD workflows that automatically build, test and deploy applications.",
      ],
    },
    {
      heading: "Cloud Architecture",
      paragraphs: [
        "We design infrastructure around the actual requirements of your application — availability, traffic, security, performance and cost.",
      ],
    },
    {
      heading: "Containers & Kubernetes",
      paragraphs: [
        "For platforms requiring containerized architecture, we implement Docker and Kubernetes environments designed for reliable deployment and scaling.",
      ],
    },
  ],
  techStack: [
    { name: "AWS", color: "#FF9900", desc: "Primary cloud" },
    { name: "Azure", color: "#0089D6", desc: "Microsoft cloud" },
    { name: "Google Cloud", color: "#4285F4", desc: "GCP workloads" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
    { name: "Kubernetes", color: "#326CE5", desc: "Orchestration" },
    { name: "Terraform", color: "#7B42BC", desc: "Infrastructure as code" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    heading: "Deploy Faster. Operate Smarter.",
    button: "Talk to a DevOps Engineer",
  },
};

export default function DevOpsCloudPage() {
  return <ServicePage data={data} />;
}