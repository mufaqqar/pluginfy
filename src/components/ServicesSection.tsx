"use client";

import { useState } from "react";

const services = [
  {
    title: "Product Design",
    desc: "Our product design services enables users to instantly and enthusiastically adopt a company product.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(245,197,24,0.12)" />
        <circle cx="16" cy="13" r="5" stroke="#F5C518" strokeWidth="1.6" />
        <path d="M8 25c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M20 10l2-2M12 10l-2-2M16 8V6" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Development",
    desc: "Scalable, performant applications built with modern frameworks, clean architecture, and best practices.",
    image: "https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=800&h=500&fit=crop&auto=format",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(245,197,24,0.12)" />
        <path d="M11 20l-4-4 4-4M21 12l4 4-4 4M17 9l-2 14" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Data Analytics",
    desc: "Transform raw data into actionable intelligence with advanced analytics pipelines and live dashboards.",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&h=500&fit=crop&auto=format",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(245,197,24,0.12)" />
        <path d="M8 22V16M12 22V12M16 22V15M20 22V9M24 22V13" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "DevOps",
    desc: "CI/CD pipelines, cloud infrastructure, container orchestration, and automated workflows that ship faster.",
    image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?w=800&h=500&fit=crop&auto=format",
    icon: (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="rgba(245,197,24,0.12)" />
        <circle cx="16" cy="16" r="6" stroke="#F5C518" strokeWidth="1.6" />
        <path d="M16 8v2M16 22v2M8 16H6M26 16h-2M10.3 10.3l1.4 1.4M20.3 20.3l1.4 1.4M10.3 21.7l1.4-1.4M20.3 11.7l1.4-1.4" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ── Desktop accordion (lg+) ── */
function DesktopAccordion() {
  const [active, setActive] = useState(0);
  return (
    <div className="flex gap-4" style={{ height: 460 }}>
      {services.map((s, i) => {
        const isActive = active === i;
        return (
          <div
            key={s.title}
            onMouseEnter={() => setActive(i)}
            className="relative flex flex-col overflow-hidden cursor-pointer justify-between"
            style={{
              flex: isActive ? "2.8 1 0%" : "1 1 0%",
              transition: "flex 0.5s cubic-bezier(0.4,0,0.2,1)",
              borderRadius: "18px",
              background: ` ${isActive ? "rgb(0 0 0 / 100%)" : "rgb(0 0 0 / 30%)"}`,
              border: `1px solid ${isActive ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.20)"}`,
              minWidth: 0,
            }}
          >
            <div className="px-8 py-5 flex flex-col flex-shrink-0 mb-3">{s.icon}</div>
            <div className="px-8 py-5 flex flex-col flex-shrink-0" style={{ zIndex: 2 }}>
              <h3
                className="font-heading font-bold"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: isActive ? "24px" : "20px",
                  color: "white",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  transition: "font-size 0.3s",
                }}
              >
                {s.title}
              </h3>
              <div style={{ maxHeight: isActive ? "80px" : "0px", opacity: isActive ? 1 : 0, overflow: "hidden", transition: "max-height 0.45s cubic-bezier(0.4,0,0.2,1),opacity 0.3s", marginTop: isActive ? "8px" : 0 }}>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
              {!isActive && (
                <div className="flex-shrink-0 mt-1.5" style={{ zIndex: 2 }}>
                  <a href="#" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#fff", fontFamily: "var(--font-heading)" }}>
                    Explore All
                    <svg className="text-[#F5C518]" width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              )}
            </div>

            {/* Image */}
            {isActive && <div className={` ${isActive ? "flex-1" : "flex-0"}  mx-4 mb-4 rounded-xl overflow-hidden relative`} style={{ opacity: isActive ? 1 : 0, height: isActive ? 100 : 0, transition: "opacity 0.4s ease 0.15s", minHeight: 0, background: "#07091A" }}>
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" style={{ borderRadius: "10px" }} />
              <div className="absolute inset-0 rounded-xl" style={{ background: "linear-gradient(to top,rgba(14,18,40,0.6) 0%,transparent 60%)" }} />
            </div>}
          </div>
        );
      })}
    </div>
  );
}

/* ── Mobile card stack ── */
function MobileCards() {
  const [open, setOpen] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      {services.map((s, i) => {
        const isOpen = open === i;
        return (
          <div
            key={s.title}
            className="rounded-2xl overflow-hidden"
            style={{ background: ` ${isOpen ? "rgb(0 0 0 / 100%)" : "rgb(0 0 0 / 30%)"}`, border: `1px solid ${isOpen ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.20)"}` }}
          >
            <button
              className="w-full flex items-center gap-4 p-4 text-left"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {s.icon}
              <span className="font-heading font-bold text-white flex-1" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>{s.title}</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transition: "transform 0.3s", transform: isOpen ? "rotate(180deg)" : "none" }}>
                <path d="M4 6l4 4 4-4" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div style={{ maxHeight: isOpen ? "400px" : "0px", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
              <div className="px-4 pb-4 flex flex-col gap-3">
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>{s.desc}</p>
                <div className="rounded-xl overflow-hidden" style={{ height: 180 }}>
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                </div>
                <a href="#" className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#fff", fontFamily: "var(--font-heading)" }}>
                  Explore All
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-y border-white/30" style={{ background: "linear-gradient(180deg, #101325 0%, #0C0F18 100%)" }}>
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-50 pointer-events-none hidden md:flex items-center justify-end">
        <img src="/assets/bg_logo_shape.svg" alt="" className="h-full w-auto object-contain" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        <h2
          className="font-heading font-bold mb-3"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,40px)", color: "white" }}
        >
          Design the Concept
          <br />
          of Your Business Idea Now
        </h2>

        {/* Desktop accordion */}
        <div className="hidden lg:block">
          <DesktopAccordion />
        </div>

        {/* Mobile / tablet accordion */}
        <div className="lg:hidden">
          <MobileCards />
        </div>
      </div>
    </section>
  );
}