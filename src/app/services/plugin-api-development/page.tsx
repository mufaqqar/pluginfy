import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Plugin & API Development Services | Pluginfy",
  description:
    "Custom plugin, API and integration development for e-commerce, ERP, SaaS and business platforms. Connect your software and automate workflows with Pluginfy.",
  alternates: { canonical: "/services/plugin-api-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Plug icon */}
    <g transform="translate(170 150)">
      <path d="M8 22 V8 A8 8 0 0 1 24 8 V22" stroke="#F5C518" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M10 30 h12" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
      <circle cx="16" cy="34" r="4" stroke="#F5C518" strokeWidth="2" fill="none" />
    </g>
    {/* Connected API nodes */}
    {[
      { cx: 70,  cy: 110, label: "ERP API" },
      { cx: 120, cy: 240, label: "SHIPPING" },
      { cx: 310, cy: 110, label: "PAYMENTS" },
      { cx: 300, cy: 240, label: "MARKETPLACE" },
    ].map((n) => (
      <g key={n.label}>
        <line x1="186" y1="170" x2={n.cx} y2={n.cy} stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="4 3" />
        <rect x={n.cx - 40} y={n.cy - 12} width="80" height="24" rx="6" fill="rgba(14,18,40,0.9)" stroke="rgba(245,197,24,0.45)" strokeWidth="0.8" />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace">{n.label}</text>
      </g>
    ))}
    {/* Webhook badges */}
    {[["REST", 330, 180], ["WEBHOOKS", 70, 190]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x) - 30} y={Number(y) - 10} width={60} height={20} rx={10} fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#F5C518" fontSize="7.5" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Plugins row */}
    {["Shopify", "Magento", "Woo", "Shopware", "BigCommerce"].map((label, i) => (
      <g key={label}>
        <rect x={60 + i * 62} y="278" width="56" height="20" rx="6" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.3)" strokeWidth="0.8" />
        <text x={60 + i * 62 + 28} y="292" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="7" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Order flow strip */}
    <path d="M40 60 L380 60" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    <text x="210" y="50" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">ORDER &rarr; INVENTORY &rarr; ERP &rarr; INVOICE &rarr; SHIP &rarr; TRACK</text>
  </svg>
);

const data: ServicePageData = {
  title: "Plugin & API Development",
  tagline: "Connect the software your business depends on.",
  heroDesc: "Modern companies rely on dozens of platforms. The problem begins when those platforms don't communicate. We develop custom plugins, APIs and integrations that connect software, synchronize information and automate business processes.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "API Development",
    items: [
      "REST API Development",
      "API Architecture",
      "Third-Party API Integration",
      "Payment APIs",
      "ERP APIs",
      "Marketplace APIs",
      "Shipping APIs",
      "CRM APIs",
      "Webhooks",
      "Authentication",
      "Data Synchronization",
    ],
  },
  contentSections: [
    {
      heading: "Plugin Development",
      paragraphs: [
        "We build plugins and extensions that add new capabilities to existing software and commerce ecosystems.",
        "Our experience includes plugins and integrations for platforms such as Shopify, Shopware, Magento, WooCommerce, BigCommerce, PrestaShop, OpenCart, PlentyMarkets and custom platforms.",
      ],
    },
    {
      heading: "Make Your Systems Talk",
      paragraphs: [
        "Imagine: Customer places order → inventory updates → ERP receives order → invoice is generated → warehouse receives fulfillment request → tracking returns to customer.",
        "No spreadsheets. No copying information. No repetitive manual work. That's what good integration engineering enables.",
      ],
    },
  ],
  techStack: [
    { name: "REST APIs", color: "#F5C518", desc: "Core integration" },
    { name: "Shopify", color: "#7AB55C", desc: "Plugins & apps" },
    { name: "WooCommerce", color: "#96588A", desc: "Extensions" },
    { name: "Magento", color: "#EB5202", desc: "Enterprise modules" },
    { name: "Webhooks", color: "#2496ED", desc: "Real-time events" },
    { name: "Data Sync", color: "#42B883", desc: "System parity" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    button: "Connect Your Systems",
  },
};

export default function PluginApiPage() {
  return <ServicePage data={data} />;
}