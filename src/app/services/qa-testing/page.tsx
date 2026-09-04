import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QA & Testing",
  description:
    "QA & testing services — functional, performance, and security testing baked into every sprint. Automated E2E suites, load testing, and OWASP security scans.",
  alternates: { canonical: "/services/qa-testing" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Shield */}
    <path d="M210 40 L290 75 L290 175 C290 220 255 255 210 270 C165 255 130 220 130 175 L130 75 Z" fill="rgba(245,197,24,0.07)" stroke="rgba(245,197,24,0.4)" strokeWidth="1.5" />
    {/* Shield inner */}
    <path d="M210 60 L275 90 L275 175 C275 212 248 242 210 255 C172 242 145 212 145 175 L145 90 Z" fill="rgba(245,197,24,0.04)" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
    {/* Checkmark */}
    <path d="M180 165 L200 185 L240 145" stroke="#F5C518" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Orbiting test indicators */}
    {[
      { angle: 0,   label: "E2E",   color: "#45BA4B" },
      { angle: 60,  label: "Unit",  color: "#C21325" },
      { angle: 120, label: "Perf",  color: "#7D64FF" },
      { angle: 180, label: "Sec",   color: "#FF9900" },
      { angle: 240, label: "API",   color: "#54C5F8" },
      { angle: 300, label: "UI",    color: "#E535AB" },
    ].map((item) => {
      const rad = (item.angle * Math.PI) / 180;
      const r = 120;
      const cx = 210 + r * Math.sin(rad);
      const cy = 165 - r * Math.cos(rad);
      return (
        <g key={item.label}>
          <line x1="210" y1="165" x2={cx} y2={cy} stroke="rgba(245,197,24,0.1)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx={cx} cy={cy} r="18" fill="rgba(7,9,26,0.9)" stroke={item.color} strokeWidth="1.2" />
          <text x={cx} y={cy + 4} textAnchor="middle" fill={item.color} fontSize="8" fontFamily="monospace" fontWeight="bold">{item.label}</text>
        </g>
      );
    })}
    {/* Green pass dots */}
    {[[100,60],[320,60],[70,240],[350,240]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="5" fill="#27C93F" opacity="0.6" />
    ))}
    {/* CI bar at bottom */}
    <rect x="100" y="298" width="220" height="16" rx="8" fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
    <rect x="100" y="298" width="176" height="16" rx="8" fill="rgba(39,201,63,0.2)" />
    <text x="210" y="310" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">1,400 tests passing</text>
  </svg>
);

const data: ServicePageData = {
  title: "QA & Testing",
  tagline: "Quality baked in, not bolted on.",
  heroDesc: "Functional, performance, and security testing embedded inside every sprint. We find issues before your users do — with automated pipelines that run on every commit, not just before launch.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "40+", label: "Projects Tested" },
    { val: "8+", label: "Years Experience" },
    { val: "98%", label: "Bug Detection Rate" },
    { val: "< 2hr", label: "Avg CI Feedback Loop" },
  ],
  techStack: [
    { name: "Playwright", color: "#45BA4B", desc: "E2E automation" },
    { name: "Cypress", color: "#69D3A7", desc: "Component testing" },
    { name: "Jest", color: "#C21325", desc: "Unit & integration" },
    { name: "k6", color: "#7D64FF", desc: "Load & perf testing" },
    { name: "Selenium", color: "#43B02A", desc: "Cross-browser" },
    { name: "OWASP ZAP", color: "#E2231A", desc: "Security scanning" },
  ],
  process: [
    { step: "01", title: "Test Strategy Planning", desc: "We map your risk areas, define coverage targets, and choose the right testing pyramid for your architecture before writing a single test." },
    { step: "02", title: "Automated Suite Build", desc: "Unit, integration, and E2E suites built and integrated into your CI pipeline. Every PR gets a full automated review within minutes." },
    { step: "03", title: "Performance & Security", desc: "Load testing at 2×–10× expected peak traffic. OWASP Top 10 security scan on every release. Documented results with clear pass/fail thresholds." },
    { step: "04", title: "Reporting & Handover", desc: "Defect dashboards, test coverage reports, and a QA runbook your team can own and extend independently." },
  ],
  caseStudies: [
    { client: "Discord", tag: "Platform Testing", accent: "#5865F2", result: "Full E2E automation suite for Discord's partner API layer. Regression time cut from 3 days of manual testing to 22 minutes automated.", image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=900&h=600&fit=crop&auto=format", testimonial: "Before Pluginfy, every release was a gamble. Now our CI runs 1,400 automated tests in under 25 minutes. Deploys are boring — in the best way.", author: "Marcus Lee", role: "Engineering Lead, Discord" },
    { client: "Crimson Education", tag: "Load Testing", accent: "#DC143C", result: "Stress-tested the admissions platform at 50× normal load. Zero performance-related incidents in two consecutive admissions seasons.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop&auto=format", testimonial: "They load-tested us to 50× normal peak and found three critical bottlenecks we would never have caught otherwise. Worth every cent.", author: "Jamie Beaton", role: "CEO, Crimson Education" },
    { client: "Dataligence", tag: "Data Pipeline QA", accent: "#00C4CC", result: "Data quality validation gates for 2B+ daily events. Corrupt records caught at ingestion — before they reached any client dashboard.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format", testimonial: "Data quality is existential for us. Pluginfy's validation pipeline is now the most important part of our entire data infrastructure.", author: "Chris Hartmann", role: "CTO, Dataligence" },
  ],
  faqs: [
    { q: "Can you test an existing codebase with no tests?", a: "Yes. We audit the codebase, identify the highest-risk areas, and build coverage incrementally — starting where the most bugs are likely to hide." },
    { q: "How do you integrate with our CI/CD pipeline?", a: "We support GitHub Actions, GitLab CI, CircleCI, and Jenkins. Setup typically takes one sprint." },
    { q: "Do you do manual testing too?", a: "Yes — for exploratory testing, UX edge cases, and accessibility audits. Automation handles the repeatable; humans handle the creative." },
    { q: "What does your security testing cover?", a: "OWASP Top 10, authentication and authorization flaws, injection vulnerabilities, and dependency vulnerability scanning. We produce a written report with severity ratings." },
  ],
};

export default function QaTestingPage() {
  return <ServicePage data={data} />;
}