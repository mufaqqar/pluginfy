import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom ERP Software Development Company | Pluginfy",
  description:
    "Custom ERP development and integrations from Pluginfy. Connect sales, inventory, purchasing, operations, reporting and e-commerce in one scalable system.",
  alternates: { canonical: "/services/erp-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Central ERP hub */}
    <circle cx="210" cy="170" r="44" fill="rgba(245,197,24,0.14)" stroke="#F5C518" strokeWidth="1.5" />
    <text x="210" y="167" textAnchor="middle" fill="#F5C518" fontSize="14" fontWeight="bold" fontFamily="monospace">ERP</text>
    <text x="210" y="182" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="7" fontFamily="monospace">SINGLE SOURCE</text>
    {/* Module nodes */}
    {[
      { cx: 70,  cy: 90,  label: "SALES" },
      { cx: 350, cy: 90,  label: "INVENTORY" },
      { cx: 70,  cy: 250, label: "PURCHASING" },
      { cx: 350, cy: 250, label: "HR" },
      { cx: 120, cy: 170, label: "CRM" },
      { cx: 300, cy: 170, label: "FINANCE" },
      { cx: 210, cy: 258, label: "WAREHOUSE" },
    ].map((n) => (
      <g key={n.label}>
        <line x1="210" y1="170" x2={n.cx} y2={n.cy} stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
        <rect x={n.cx - 32} y={n.cy - 12} width="64" height="24" rx="12" fill="rgba(14,18,40,0.9)" stroke="rgba(245,197,24,0.45)" strokeWidth="0.8" />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace">{n.label}</text>
      </g>
    ))}
    {/* Connections */}
    <path d="M70 90 Q140 60 210 126" stroke="rgba(245,197,24,0.12)" strokeWidth="1" strokeDasharray="3 3" />
    <path d="M350 90 Q280 60 210 126" stroke="rgba(245,197,24,0.12)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Data sparkline */}
    <path d="M40 310 L80 300 L120 305 L160 285 L200 290 L240 275 L280 282 L320 260 L360 265 L380 250" stroke="#4CAF50" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <circle cx="380" cy="250" r="3" fill="#4CAF50" />
    <text x="380" y="240" textAnchor="end" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">REALTIME KPI</text>
  </svg>
);

const data: ServicePageData = {
  title: "ERP Development",
  tagline: "An ERP built around how your business works.",
  heroDesc: "Stop forcing your operations into software that wasn't designed for them. We develop custom ERP solutions that connect departments, automate processes and provide a single source of truth across your organization.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "ERP Modules We Can Build",
    items: [
      "CRM & Sales",
      "Customer Management",
      "Order Management",
      "Inventory Management",
      "Purchasing & Procurement",
      "Supplier Management",
      "Warehouse Management",
      "Product Management",
      "HR & Employee Management",
      "Accounting Integrations",
      "Manufacturing Workflows",
      "Logistics & Fulfillment",
      "Reporting & Analytics",
      "Role & Permission Management",
    ],
  },
  contentSections: [
    {
      heading: "Connect Your Entire Operation",
      paragraphs: [
        "An ERP becomes significantly more powerful when it communicates with the rest of your technology.",
        "We integrate ERP systems with e-commerce stores, marketplaces, payment providers, shipping companies, accounting systems, CRM platforms, warehouse systems and third-party APIs.",
      ],
    },
    {
      heading: "Custom ERP vs. Generic ERP",
      paragraphs: [
        "Every organization develops processes that make it different.",
        "Instead of changing those processes simply because your ERP requires it, we can build or customize a solution around the workflows that make your company effective.",
      ],
    },
    {
      heading: "Real-Time Business Visibility",
      paragraphs: [
        "Turn operational data into useful information with dashboards covering sales, orders, inventory, purchasing, customers, revenue and other important KPIs.",
        "One system. Connected operations. Better decisions.",
      ],
    },
  ],
  techStack: [
    { name: "Laravel", color: "#FF2D20", desc: "Backend framework" },
    { name: "PostgreSQL", color: "#336791", desc: "Relational data layer" },
    { name: "React", color: "#61DAFB", desc: "Admin interfaces" },
    { name: "Redis", color: "#D82C20", desc: "Caching & queues" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
    { name: "AWS", color: "#FF9900", desc: "Cloud & scale" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    button: "Discuss Your ERP Project",
  },
};

export default function ErpDevelopmentPage() {
  return <ServicePage data={data} />;
}