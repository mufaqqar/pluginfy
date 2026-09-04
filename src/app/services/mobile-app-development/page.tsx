import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development",
  description:
    "Mobile app development services — native iOS and Android with Flutter and React Native. Cross-platform reach with a native feel, from strategy to Store launch.",
  alternates: { canonical: "/services/mobile-app-development" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Phone outline */}
    <rect x="145" y="30" width="130" height="260" rx="20" fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.4)" strokeWidth="2" />
    {/* Screen */}
    <rect x="155" y="55" width="110" height="210" rx="6" fill="rgba(7,9,26,0.8)" />
    {/* Notch */}
    <rect x="188" y="38" width="44" height="10" rx="5" fill="rgba(245,197,24,0.2)" />
    {/* Home indicator */}
    <rect x="193" y="278" width="34" height="4" rx="2" fill="rgba(245,197,24,0.3)" />
    {/* App UI: status bar */}
    <rect x="162" y="62" width="96" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
    {/* Header card */}
    <rect x="162" y="76" width="96" height="36" rx="6" fill="rgba(245,197,24,0.1)" />
    <rect x="170" y="84" width="50" height="6" rx="3" fill="rgba(245,197,24,0.6)" />
    <rect x="170" y="96" width="30" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
    {/* List items */}
    {[118, 140, 162, 184, 206].map((y, i) => (
      <g key={i}>
        <rect x="162" y={y} width="96" height="18" rx="4" fill="rgba(255,255,255,0.04)" />
        <circle cx="172" cy={y + 9} r="5" fill={["#F5C518","#54C5F8","#8CC84B","#FA7343","#A259FF"][i] + "44"} stroke={["#F5C518","#54C5F8","#8CC84B","#FA7343","#A259FF"][i]} strokeWidth="0.8" />
        <rect x="182" y={y + 6} width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="182" y={y + 12} width="25" height="3" rx="1.5" fill="rgba(255,255,255,0.12)" />
      </g>
    ))}
    {/* Bottom nav */}
    <rect x="155" y="235" width="110" height="30" rx="0" fill="rgba(245,197,24,0.07)" />
    {[175, 200, 225, 250].map((x, i) => (
      <circle key={i} cx={x} cy="250" r={i === 1 ? 7 : 5} fill={i === 1 ? "rgba(245,197,24,0.5)" : "rgba(255,255,255,0.12)"} />
    ))}
    {/* Side label bubbles */}
    {[["Flutter",80,110],["iOS",80,150],["Android",80,190]].map(([l,x,y]) => (
      <g key={String(l)}>
        <rect x={Number(x)-24} y={Number(y)-10} width={48} height={18} rx={9} fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.35)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill="rgba(245,197,24,0.9)" fontSize="8" fontFamily="monospace">{l}</text>
      </g>
    ))}
  </svg>
);

const data: ServicePageData = {
  title: "Mobile App Development",
  tagline: "Native feel. Cross-platform reach.",
  heroDesc: "iOS, Android, or both — we pick the right approach based on your product's needs. Flutter, React Native, or Swift/Kotlin. 31 shipped apps. 6+ years of mobile craft.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "31+", label: "Apps Shipped" },
    { val: "6+", label: "Years Experience" },
    { val: "4.8★", label: "Avg App Store Rating" },
    { val: "99.7%", label: "Crash-Free Sessions" },
  ],
  techStack: [
    { name: "Flutter", color: "#54C5F8", desc: "Cross-platform UI" },
    { name: "React Native", color: "#61DAFB", desc: "JS-driven mobile" },
    { name: "Swift", color: "#FA7343", desc: "Native iOS" },
    { name: "Kotlin", color: "#7F52FF", desc: "Native Android" },
    { name: "Firebase", color: "#FFCA28", desc: "Auth & realtime DB" },
    { name: "GraphQL", color: "#E535AB", desc: "Efficient APIs" },
  ],
  process: [
    { step: "01", title: "Platform Strategy", desc: "We evaluate your audience split, performance needs, and budget to recommend the right cross-platform vs. native approach for your product." },
    { step: "02", title: "UX & Interaction Design", desc: "Platform-native interaction patterns, gesture design, and offline-first architecture scoped before any code is written." },
    { step: "03", title: "Agile Mobile Sprints", desc: "Bi-weekly builds delivered to TestFlight and Google Play Internal track. You test on real devices every sprint." },
    { step: "04", title: "Store Launch & Monitoring", desc: "App Store and Play Store submission, ASO basics, crash monitoring setup, and post-launch performance review." },
  ],
  caseStudies: [
    { client: "Thistle", tag: "Consumer Mobile", accent: "#8B5CF6", result: "Subscription meal delivery app rebuilt from scratch. Churn dropped 22% in Q1 post-launch. 200K+ weekly active users.", image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=900&h=600&fit=crop&auto=format", testimonial: "The Flutter app Pluginfy built feels completely native. Our users can't believe it's cross-platform. App Store reviews went from 3.2 to 4.8 stars.", author: "Ashwin Desai", role: "Head of Product, Thistle" },
    { client: "Honeywell", tag: "Enterprise Mobile", accent: "#E2231A", result: "Field technician app for 120K+ IoT sensors. Offline-first architecture with automatic sync. Technician task time cut by 31%.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format", testimonial: "Our field teams actually want to use the app — that was the real goal. Pluginfy nailed the UX for a technically complex workflow.", author: "Linda Caruso", role: "VP Digital Products, Honeywell" },
    { client: "Crimson Education", tag: "Ed-Tech Mobile", accent: "#DC143C", result: "Student tracking and tutoring app with live session recording. Zero outages across 70,000+ student accounts globally.", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop&auto=format", testimonial: "Six months of development, zero missed sprints. Every bi-weekly build was on TestFlight on time. Rare in this industry.", author: "Jamie Beaton", role: "CEO, Crimson Education" },
  ],
  faqs: [
    { q: "Flutter or React Native — which should we choose?", a: "For most products Flutter is our recommendation: better performance, pixel-perfect UI consistency, and a maturing ecosystem. React Native wins when your team has strong JS expertise and tight web/mobile code sharing is a requirement." },
    { q: "How do you handle app store approvals?", a: "We manage the full submission process including review guideline compliance, screenshot preparation, and responding to reviewer feedback. We've never had a final rejection." },
    { q: "Can you update our existing app?", a: "Yes. We start with an architecture review and propose the least-disruptive path — feature additions, partial rewrites, or full rebuilds only when genuinely necessary." },
    { q: "Do you support tablet and iPad layouts?", a: "Yes. Responsive adaptive layouts are part of our standard delivery for every project, not an add-on." },
  ],
};

export default function MobileAppPage() {
  return <ServicePage data={data} />;
}