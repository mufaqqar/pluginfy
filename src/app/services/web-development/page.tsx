import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Browser window */}
    <rect x="60" y="50" width="300" height="220" rx="12" fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
    {/* Title bar */}
    <rect x="60" y="50" width="300" height="36" rx="12" fill="rgba(245,197,24,0.12)" />
    <rect x="60" y="74" width="300" height="12" fill="rgba(245,197,24,0.12)" />
    {/* Traffic lights */}
    <circle cx="84" cy="68" r="5" fill="#FF5F56" />
    <circle cx="100" cy="68" r="5" fill="#FFBD2E" />
    <circle cx="116" cy="68" r="5" fill="#27C93F" />
    {/* URL bar */}
    <rect x="140" y="60" width="180" height="16" rx="4" fill="rgba(255,255,255,0.06)" />
    <text x="230" y="72" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">pluginfy.com</text>
    {/* Code lines */}
    {[
      { y: 110, w: 180, color: "#F5C518" },
      { y: 128, w: 220, color: "rgba(255,255,255,0.5)" },
      { y: 146, w: 140, color: "rgba(255,255,255,0.5)" },
      { y: 164, w: 200, color: "#F5C518" },
      { y: 182, w: 160, color: "rgba(255,255,255,0.5)" },
      { y: 200, w: 240, color: "rgba(255,255,255,0.3)" },
      { y: 218, w: 180, color: "#F5C518" },
      { y: 236, w: 120, color: "rgba(255,255,255,0.3)" },
    ].map((l, i) => (
      <rect key={i} x="90" y={l.y} width={l.w} height="7" rx="3.5" fill={l.color} opacity="0.7" />
    ))}
    {/* Cursor blink */}
    <rect x="90" y="252" width="2" height="12" rx="1" fill="#F5C518" opacity="0.9" />
    {/* Floating tags */}
    {[["React", 330, 90], ["TS", 330, 120], ["Next", 330, 150]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x) - 18} y={Number(y) - 10} width={36} height={18} rx={9} fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#F5C518" fontSize="8" fontFamily="monospace">{label}</text>
      </g>
    ))}
  </svg>
);

const data: ServicePageData = {
  title: "Web Development",
  tagline: "Built to scale.",
  heroDesc: "We build modular, headless, production-grade web applications on React, Next.js, and Node.js. 58 shipped projects. 10+ years of craft. Zero legacy baggage.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "58+", label: "Projects Shipped" },
    { val: "10+", label: "Years Experience" },
    { val: "94%", label: "Client Retention" },
    { val: "< 2s", label: "Avg Load Time" },
  ],
  techStack: [
    { name: "React / Next.js", color: "#61DAFB", desc: "SSR, SSG, App Router" },
    { name: "Node.js", color: "#8CC84B", desc: "REST & GraphQL APIs" },
    { name: "TypeScript", color: "#3178C6", desc: "Type-safe codebase" },
    { name: "PostgreSQL", color: "#336791", desc: "Relational data layer" },
    { name: "Redis", color: "#D82C20", desc: "Caching & queues" },
    { name: "AWS / Vercel", color: "#FF9900", desc: "Global edge delivery" },
  ],
  process: [
    { step: "01", title: "Discovery & Architecture", desc: "We map your business logic, traffic expectations, and integration requirements into a concrete technical blueprint before writing a single line of code." },
    { step: "02", title: "Design System & Prototyping", desc: "Component-first design in Figma. Every state, every breakpoint, every interaction documented before development starts." },
    { step: "03", title: "Agile Development Sprints", desc: "Two-week sprints with deployed previews. You see working software every fortnight, not a big reveal at the end." },
    { step: "04", title: "QA, Performance & Launch", desc: "Lighthouse 90+ scores, load testing, cross-browser QA, and a zero-downtime deployment pipeline before we hand over the keys." },
  ],
  caseStudies: [
    { client: "Discord", tag: "Community Platform", accent: "#5865F2", result: "Rebuilt partner integrations layer serving 19M+ active servers. Webhook latency reduced by 68%.", image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=900&h=600&fit=crop&auto=format", testimonial: "Pluginfy shipped a complete overhaul of our developer tooling in under 10 weeks. The code quality was exceptional — our team can actually maintain it now.", author: "Marcus Lee", role: "Engineering Lead, Discord" },
    { client: "Dataligence", tag: "SaaS Dashboard", accent: "#00C4CC", result: "Multi-tenant analytics platform. Query response time dropped from 4.2s to under 180ms after full-stack rebuild.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format", testimonial: "Query latency dropped from 4.2s to under 180ms. Our sales team finally had a product they could demo live without embarrassment.", author: "Chris Hartmann", role: "CTO, Dataligence" },
    { client: "Crimson Education", tag: "Ed-Tech Platform", accent: "#DC143C", result: "Live tutoring platform with real-time session recording. Zero outages across 70,000+ student accounts globally.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop&auto=format", testimonial: "Our platform had to handle surges during admissions deadlines. Pluginfy built it to scale — we've never had an outage during a deadline rush.", author: "Jamie Beaton", role: "CEO, Crimson Education" },
  ],
  faqs: [
    { q: "How long does a typical web project take?", a: "A marketing site takes 4–6 weeks. A full SaaS platform typically runs 12–20 weeks depending on integrations and complexity." },
    { q: "Do you handle hosting and DevOps?", a: "Yes. We set up CI/CD, cloud infrastructure (AWS, Vercel, GCP), and hand over fully documented runbooks so your team can own it afterward." },
    { q: "Will I own the source code?", a: "100%. All IP transfers to you at project completion. No lock-in, no licensing fees." },
    { q: "Can you extend our existing codebase?", a: "Absolutely. We audit first, then propose the least-disruptive path forward — refactor, extend, or replace only what needs it." },
  ],
};

export default function WebDevelopmentPage() {
  return <ServicePage data={data} />;
}