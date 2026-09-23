import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom E-Commerce Development Company | Pluginfy",
  description:
    "Build scalable B2B and B2C e-commerce platforms with Pluginfy. Custom stores, marketplaces, integrations, plugins, checkout systems and commerce automation.",
  alternates: { canonical: "/services/ecommerce-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Storefront window */}
    <rect x="70" y="60" width="180" height="130" rx="10" fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.35)" strokeWidth="1.5" />
    <path d="M70 60 L160 100 L250 60" fill="rgba(245,197,24,0.12)" stroke="rgba(245,197,24,0.4)" strokeWidth="1" strokeLinejoin="round" />
    {/* Shelf of products */}
    <line x1="90" y1="160" x2="230" y2="160" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
    {[100, 140, 180, 112, 152, 192].map((x, i) => (
      <rect key={i} x={x} y={132 + (i % 2) * 8} width="22" height="16" rx="3" fill="rgba(245,197,24,0.25)" />
    ))}
    {/* Cart */}
    <g transform="translate(300 90)">
      <path d="M6 10h28l8 8 4 34H12z" fill="rgba(245,197,24,0.12)" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18 14V7a8 8 0 0116 0v7" stroke="#F5C518" strokeWidth="1.5" fill="none" />
    </g>
    {/* Connected systems */}
    {[["CHECKOUT", 80, 245], ["PAYMENTS", 200, 245], ["ERP", 320, 245]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x) - 40} y={Number(y) - 12} width="80" height="24" rx="6" fill="rgba(14,18,40,0.9)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="8" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Flow arrows */}
    <path d="M250 100 H300" stroke="rgba(245,197,24,0.4)" strokeWidth="1.2" strokeDasharray="4 3" />
    <path d="M285 96 l6 4 -6 4" stroke="rgba(245,197,24,0.4)" strokeWidth="1.2" fill="none" />
    <line x1="100" y1="190" x2="100" y2="233" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <path d="M96 222 l4 6 4 -6" stroke="rgba(245,197,24,0.3)" strokeWidth="1.2" fill="none" />
    <line x1="200" y1="190" x2="200" y2="233" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <path d="M196 222 l4 6 4 -6" stroke="rgba(245,197,24,0.3)" strokeWidth="1.2" fill="none" />
    <line x1="320" y1="190" x2="320" y2="233" stroke="rgba(245,197,24,0.3)" strokeWidth="1" strokeDasharray="4 3" />
    <path d="M316 222 l4 6 4 -6" stroke="rgba(245,197,24,0.3)" strokeWidth="1.2" fill="none" />
    <rect x="266" y="200" width="40" height="14" rx="7" fill="rgba(39,201,63,0.12)" stroke="#27C93F" strokeWidth="0.8" />
    <text x="286" y="210" textAnchor="middle" fill="#27C93F" fontSize="7" fontFamily="monospace">PAID</text>
  </svg>
);

const data: ServicePageData = {
  title: "E-Commerce Development",
  tagline: "Commerce platforms built to sell and scale.",
  heroDesc: "We build everything from custom storefronts to complex B2B platforms, marketplaces and deeply integrated commerce ecosystems. High-performance solutions for businesses that need more than a standard online store.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "E-Commerce Development Services",
    items: [
      "Custom E-Commerce Development",
      "B2B E-Commerce",
      "B2C Stores",
      "Multi-Vendor Marketplaces",
      "Headless Commerce",
      "Custom Checkout Development",
      "Payment Integrations",
      "ERP Integrations",
      "Marketplace Integrations",
      "Inventory Synchronization",
      "Shipping Integrations",
      "Subscription Commerce",
      "E-Commerce Plugins",
      "Store Performance Optimization",
    ],
  },
  contentSections: [
    {
      heading: "Connect Storefront and Operations",
      paragraphs: [
        "Modern commerce doesn't stop at checkout.",
        "We connect your store with ERP, CRM, inventory, warehouse, accounting, payment and logistics systems to automate operations from purchase to fulfillment.",
      ],
    },
    {
      heading: "Complex Commerce Is Where We Thrive",
      paragraphs: [
        "Different customer pricing? Multiple warehouses? B2B approvals? Product configurators? Marketplace synchronization? Custom fulfillment?",
        "That's exactly the type of problem we're here to solve.",
      ],
    },
  ],
  techStack: [
    { name: "Shopify", color: "#7AB55C", desc: "Headless & Plus" },
    { name: "Magento", color: "#EB5202", desc: "Enterprise stores" },
    { name: "WooCommerce", color: "#96588A", desc: "WordPress commerce" },
    { name: "BigCommerce", color: "#5B45C4", desc: "Multi-channel" },
    { name: "Shopware", color: "#189EFF", desc: "EU marketplaces" },
    { name: "PrestaShop", color: "#DF0067", desc: "Custom stores" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    button: "Build Your E-Commerce Platform",
  },
};

export default function EcommerceDevelopmentPage() {
  return <ServicePage data={data} />;
}