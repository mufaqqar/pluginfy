import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import { SHARED_SERVICE_FAQS } from "@/lib/service-faqs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laravel & PHP Development Company | Hire Laravel Developers | Pluginfy",
  description:
    "Expert Laravel and PHP development for SaaS, APIs, ERP, e-commerce and enterprise applications. Build, modernize or scale your PHP platform with Pluginfy.",
  alternates: { canonical: "/services/laravel-php-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Code editor panel */}
    <rect x="60" y="50" width="300" height="230" rx="12" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.3)" strokeWidth="1.5" />
    <rect x="60" y="50" width="300" height="32" rx="12" fill="rgba(245,197,24,0.12)" />
    <circle cx="82" cy="66" r="5" fill="#FF5F56" />
    <circle cx="98" cy="66" r="5" fill="#FFBD2E" />
    <circle cx="114" cy="66" r="5" fill="#27C93F" />
    <text x="210" y="71" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="monospace">app.php</text>
    {/* PHP open tag */}
    <text x="90" y="105" fill="#7A86B8" fontSize="11" fontFamily="monospace">{'<?php'}</text>
    {[
      { y: 130, text: "Route::get('/products', 'StoreController@index');", color: "#61DAFB" },
      { y: 152, text: "// queue, cache, eloquent, queue jobs", color: "rgba(255,255,255,0.3)" },
      { y: 174, text: "return $this->render(View::make('shop'));", color: "#F5C518" },
      { y: 196, text: "DB::table('orders')->where('paid', true)...", color: "#8CC84B" },
    ].map((l) => (
      <text key={l.y} x="90" y={l.y} fill={l.color} fontSize="9" fontFamily="monospace">{l.text}</text>
    ))}
    {/* Closing brace */}
    <text x="90" y="228" fill="#7A86B8" fontSize="11" fontFamily="monospace">{'}'}</text>
    <text x="90" y="250" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">?&gt;</text>
    {/* Badges */}
    {[["artisan", 330, 110], ["blade", 330, 146], ["eloquent", 330, 182]].map(([label, x, y]) => (
      <g key={String(label)}>
        <rect x={Number(x) - 28} y={Number(y) - 10} width={56} height={20} rx={10} fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="0.8" />
        <text x={Number(x)} y={Number(y) + 4} textAnchor="middle" fill="#F5C518" fontSize="7.5" fontFamily="monospace">{label}</text>
      </g>
    ))}
    {/* Cursor */}
    <rect x="90" y="120" width="1.5" height="10" fill="#F5C518" opacity="0.8" />
  </svg>
);

const data: ServicePageData = {
  title: "Laravel & PHP Development",
  tagline: "Serious backend systems, built to last.",
  heroDesc: "We build robust backend systems using Laravel and PHP for businesses that need reliable, scalable and maintainable software. From new SaaS products to complex ERP platforms and existing application modernization, our engineers work across the complete PHP ecosystem.",
  heroGraphic: <HeroGraphic />,
  offerings: {
    heading: "Laravel Development Services",
    items: [
      "Custom Laravel Applications",
      "Laravel SaaS Development",
      "Laravel ERP Development",
      "REST API Development",
      "E-Commerce Backends",
      "Third-Party Integrations",
      "Payment Integrations",
      "Legacy PHP Modernization",
      "Laravel Performance Optimization",
      "Application Maintenance",
      "Database Optimization",
      "Architecture & Code Refactoring",
    ],
  },
  contentSections: [
    {
      heading: "Already Have a Laravel Application?",
      paragraphs: [
        "We don't only build new systems.",
        "Our engineers can step into existing Laravel and PHP applications to fix technical debt, develop new functionality, improve performance, upgrade frameworks and prepare applications for future growth.",
      ],
    },
    {
      heading: "Backend. APIs. Integrations. Infrastructure.",
      paragraphs: [
        "We understand the complete environment surrounding Laravel applications — databases, queues, caching, APIs, frontend applications, containers and cloud infrastructure.",
      ],
    },
  ],
  techStack: [
    { name: "Laravel", color: "#FF2D20", desc: "Primary framework" },
    { name: "PHP", color: "#777BB4", desc: "Core language" },
    { name: "MySQL", color: "#4479A1", desc: "Relational database" },
    { name: "Redis", color: "#D82C20", desc: "Cache & queues" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
    { name: "AWS", color: "#FF9900", desc: "Cloud deployment" },
  ],
  faqs: SHARED_SERVICE_FAQS,
  cta: {
    heading: "Need Laravel Expertise?",
    button: "Talk to Our Engineers",
  },
};

export default function LaravelPhpPage() {
  return <ServicePage data={data} />;
}