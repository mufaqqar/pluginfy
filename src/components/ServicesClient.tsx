"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { services, serviceCategories, getServiceHref, type ServiceIconName, type ServiceSummary } from "@/lib/services";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const iconStyle = { width: 22, height: 22, display: "block" } as const;

const ICONS: Record<ServiceIconName, React.ReactNode> = {
  ai: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" stroke="#F5C518" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M8 6l-4 4 4 4M16 6l4 4-4 4M13 5l-2 14" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  erp: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
    </svg>
  ),
  cart: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M3 3h2l1.6 10.2a2 2 0 0 0 2 1.8h8.9a2 2 0 0 0 2-1.6L21 7H6" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="10" cy="20" r="1.4" stroke="#F5C518" strokeWidth="1.4" />
      <circle cx="18" cy="20" r="1.4" stroke="#F5C518" strokeWidth="1.4" />
    </svg>
  ),
  php: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <ellipse cx="9" cy="8" rx="4" ry="3.2" stroke="#F5C518" strokeWidth="1.4" />
      <ellipse cx="15" cy="16" rx="4" ry="3.2" stroke="#F5C518" strokeWidth="1.4" />
      <path d="M9 11.2v2.6M15 12.8v-2.6" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  python: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M9 3h4a2 2 0 0 1 2 2v3H9a2 2 0 0 1 0-4z" stroke="#F5C518" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M15 21h-4a2 2 0 0 1-2-2v-3h6a2 2 0 0 1 0 4z" stroke="#F5C518" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M11 6h2M11 18h2" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  react: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.4" fill="#F5C518" />
    </svg>
  ),
  cloud: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M7 18a4 4 0 0 1-.6-7.96 5.5 5.5 0 0 1 10.7 1.3A3.8 3.8 0 0 1 17 18H7z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="14" r="1.6" stroke="#F5C518" strokeWidth="1.3" />
    </svg>
  ),
  plug: (
    <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
      <path d="M9 7.5a2 2 0 1 1 4 0V9h3.5a1.5 1.5 0 0 1 0 3H15v.5a2 2 0 1 1-4 0V12H7.5a1.5 1.5 0 0 1 0-3H9V7.5z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
};

function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-wider"
      style={{
        background: "rgba(245,197,24,0.12)",
        border: "1px solid rgba(245,197,24,0.3)",
        color: "#F5C518",
        padding: "5px 12px",
        borderRadius: 8,
        fontFamily: "var(--font-heading)",
      }}
    >
      {label}
    </span>
  );
}

function ServiceCard({ service }: { service: ServiceSummary }) {
  return (
    <StaggerItem hover hoverY={-6} hoverScale={1.02} className="h-full">
      <Link
        href={getServiceHref(service.slug)}
        className="group relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "#0E1228",
          border: "1px solid rgba(255,255,255,0.08)",
          textDecoration: "none",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(245,197,24,0.55), transparent)" }}
        />

        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4 mb-5">
            <span
              className="flex items-center justify-center rounded-xl flex-shrink-0"
              style={{
                width: 46,
                height: 46,
                background: "rgba(245,197,24,0.08)",
                border: "1px solid rgba(245,197,24,0.22)",
              }}
            >
              {ICONS[service.icon]}
            </span>
            <CategoryBadge label={service.category} />
          </div>

          <h2
            className="font-heading font-bold mb-1.5 transition-colors duration-150 group-hover:text-[#F5C518]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
              lineHeight: 1.25,
              color: "#fff",
            }}
          >
            {service.title}
          </h2>
          <p
            className="mb-4"
            style={{ color: "#F5C518", fontFamily: "var(--font-heading)", fontSize: "0.8125rem", fontWeight: 600 }}
          >
            {service.tagline}
          </p>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>
            {service.description}
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-6">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span
                  className="mt-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.25)" }}
                >
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M1.5 5.5l2 2 4-4.5" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.62)" }}>
                  {h}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {service.techStack.map((t) => (
              <span
                key={t.name}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                  padding: "4px 10px",
                  borderRadius: 999,
                  fontFamily: "var(--font-heading)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: t.color }} />
                {t.name}
              </span>
            ))}
          </div>

          <div
            className="mt-auto flex items-center justify-between pt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.6875rem", fontFamily: "monospace" }}>
              /services/{service.slug}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>
              Explore Service
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.2s" }}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function ServicesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = useMemo(
    () => (activeCategory === "All" ? services : services.filter((s) => s.category === activeCategory)),
    [activeCategory]
  );

  const filters = ["All", ...serviceCategories];

  return (
    <div style={{ background: "#07091A" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16" style={{ background: "#07091A" }}>
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 72% 18%, rgba(245,197,24,0.14) 0%, transparent 55%)" }}
        />
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative">
          <FadeIn y={30} duration={0.6}>
            <div className="flex items-center gap-2 mb-6 flex-wrap text-xs" style={{ fontFamily: "var(--font-heading)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
                Home
              </Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "#F5C518" }}>Services</span>
            </div>
          </FadeIn>
          <FadeIn y={30} delay={0.05} duration={0.6}>
            <p className="section-label mb-3">What We Do</p>
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h1
              className="font-heading font-extrabold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5.5vw, 4.2rem)", color: "white", letterSpacing: "-0.02em" }}
            >
              All Services, <br />
              <span style={{ color: "#F5C518" }}>One Engineering Team</span>
            </h1>
          </FadeIn>
          <FadeIn y={30} delay={0.15} duration={0.6}>
            <p className="max-w-2xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: 1.75 }}>
              AI, software engineering, business platforms, integrations and cloud infrastructure. Pick a service to see the full
              offering, tech stack and process — or tell us what you are building and we will assemble the right team for it.
            </p>
          </FadeIn>
          <FadeIn y={20} delay={0.25} duration={0.5}>
            <div className="flex flex-wrap items-center gap-8 sm:gap-12 mt-10 py-7" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {[
                { val: `${services.length}`, label: "Service Lines" },
                { val: "5", label: "Continents Served" },
                { val: "100%", label: "In-House Engineering" },
                { val: "24/7", label: "Support & Maintenance" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading font-extrabold" style={{ color: "#F5C518", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontFamily: "var(--font-heading)", lineHeight: 1.1 }}>
                    {s.val}
                  </p>
                  <p className="mt-1" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", letterSpacing: "0.06em", textTransform: "uppercase", fontFamily: "var(--font-heading)" }}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-14 sm:py-20" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <FadeIn y={20} duration={0.5}>
            <div className="flex flex-wrap items-center gap-2 mb-10">
              {filters.map((f) => {
                const isActive = f === activeCategory;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setActiveCategory(f)}
                    className="font-heading font-semibold text-xs sm:text-sm transition-all duration-200"
                    style={{
                      padding: "9px 18px",
                      borderRadius: 999,
                      fontFamily: "var(--font-heading)",
                      background: isActive ? "#F5C518" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${isActive ? "#F5C518" : "rgba(255,255,255,0.10)"}`,
                      color: isActive ? "#07091A" : "rgba(255,255,255,0.65)",
                    }}
                  >
                    {f}
                  </button>
                );
              })}
              <span className="ml-auto text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}>
                {filtered.length} {filtered.length === 1 ? "service" : "services"}
              </span>
            </div>
          </FadeIn>

          <StaggerContainer
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
            staggerDelay={0.06}
          >
            {filtered.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24" style={{ background: "#FEBC2E" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn y={30} duration={0.6}>
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#000", fontFamily: "var(--font-heading)" }}>
              Not Sure Where to Start?
            </p>
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#000", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Tell us the problem. We&apos;ll map the solution.
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.2} duration={0.5}>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#000", lineHeight: 1.6, fontSize: "16px" }}>
              One conversation is usually enough to work out which services you need — and which you don&apos;t. Share your
              requirements and we&apos;ll come back with a clear scope.
            </p>
          </FadeIn>
          <FadeIn y={20} delay={0.3} duration={0.5}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-heading font-bold text-lg max-w-[320px] w-full justify-center px-7 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: "#000", color: "#fff", fontFamily: "var(--font-heading)", textDecoration: "none", letterSpacing: "0.04em" }}
            >
              START A PROJECT
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}