"use client";

import { useState } from "react";

const clients = [
  {
    id: "discord", tabSvg: "/assets/1.svg", tabLabel: "Discord", tabAccent: "#5865F2",
    logo: { svgUrl: "/assets/1.svg", name: "Discord" },
    subtitle: "Community infrastructure powering 19M+ active servers and 500M+ registered users worldwide",
    description: "We built Discord's partner integrations layer: real-time event webhooks, bot infrastructure tooling, Stage channel recording pipelines, and the developer portal API gateway.",
    testimonial: "Pluginfy shipped a complete overhaul of our developer tooling in under 10 weeks. The code quality was exceptional.",
    author: "Marcus Lee", role: "Engineering Lead, Discord",
    image: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "deloitte", tabSvg: "/assets/deloitte.svg", tabLabel: "Deloitte", tabAccent: "#86BC25",
    logo: { svgUrl: "/assets/deloitte.svg", name: "Deloitte" },
    subtitle: "Enterprise AI audit platform deployed across 42 Deloitte offices in 18 countries",
    description: "We engineered Deloitte's internal AI governance dashboard: model risk scoring, bias detection pipelines, regulatory compliance tracking, and automated audit trail generation.",
    testimonial: "The Pluginfy team understood enterprise-grade requirements from day one. Delivery was on time, documentation was thorough.",
    author: "Priya Nair", role: "Director, Deloitte AI Practice",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "dataligence", tabSvg: "/assets/dataligence.svg", tabLabel: "Dataligence", tabAccent: "#00C4CC",
    logo: { svgUrl: "/assets/dataligence.svg", name: "Dataligence" },
    subtitle: "Real-time business intelligence SaaS processing 2B+ events per day for Fortune 500 clients",
    description: "We rebuilt Dataligence's ingestion and query layer: streaming ETL pipelines on Apache Flink, a multi-tenant SQL query engine, and an embeddable chart SDK.",
    testimonial: "Query latency dropped from 4.2s to under 180ms after the rebuild. Our sales team finally had a product they could demo live.",
    author: "Chris Hartmann", role: "CTO, Dataligence",
    image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "crimson", tabSvg: "/assets/2.svg", tabLabel: "crimson", tabAccent: "#DC143C",
    logo: { svgUrl: "/assets/2.svg", name: "crimson" },
    subtitle: "Global student admissions platform that has helped 70,000+ students gain Ivy League offers",
    description: "We built Crimson's mentor-matching engine, AI essay coaching assistant, application tracker, and a live tutoring platform with session recording and playback.",
    testimonial: "Our platform had to handle surges during admissions deadlines. Pluginfy built it to scale — we've never had an outage during a deadline rush.",
    author: "Jamie Beaton", role: "CEO, Crimson Education",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "honeywell", tabSvg: "/assets/3.svg", tabLabel: "Honeywell", tabAccent: "#E2231A",
    logo: { svgUrl: "/assets/3.svg", name: "Honeywell" },
    subtitle: "Industrial IoT monitoring platform connecting 120K+ smart building sensors across North America",
    description: "We built Honeywell's Connected Buildings dashboard: HVAC telemetry ingestion, predictive maintenance alerts, energy consumption analytics, and a field technician mobile app.",
    testimonial: "The Pluginfy team navigated our complex enterprise environment with ease. They delivered a product our field teams actually want to use every day.",
    author: "Linda Caruso", role: "VP Digital Products, Honeywell",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format",
  },
  {
    id: "thistle", tabSvg: "/assets/5.svg", tabLabel: "THISTLE", tabAccent: "#8B5CF6",
    logo: { svgUrl: "/assets/5.svg", name: "THISTLE" },
    subtitle: "Health-forward meal delivery platform scaling to 200K+ weekly subscribers across 12 US cities",
    description: "We engineered Thistle's subscription engine, meal preference ML model, dynamic routing optimizer for last-mile delivery, and a real-time kitchen operations dashboard.",
    testimonial: "Pluginfy rebuilt our entire subscription stack in 3 months. Churn dropped 22% in the first quarter after launch. The ROI was immediate.",
    author: "Ashwin Desai", role: "Head of Product, Thistle",
    image: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?w=900&h=600&fit=crop&auto=format",
  },
];

export default function TrustedWorldwide() {
  const [active, setActive] = useState(0);
  const c = clients[active];

  return (
    <section className="py-16 sm:py-24" style={{ background: "#0A0D1E" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <p className="section-label mb-3">Client trust</p>
        <h2
          className="font-heading font-bold mb-7 sm:mb-8"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem,4vw,2.8rem)", color: "white", lineHeight: 1.15 }}
        >
          We are Trusted
          <br />
          <span style={{ color: "#F5C518" }}>5+ Countries</span> Worldwide
        </h2>

        {/* Outer card */}
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#0E1228" }}>

          {/* Content row */}
          <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">

            {/* Left */}
            <div className="p-4 sm:p-5 flex flex-col gap-3 sm:gap-4">
              {/* Box 1 */}
              <div className="rounded-xl p-4 sm:p-6" style={{ border: "1px solid rgba(255,255,255,0.09)", background: "#0B0E22" }}>
                <div className="mb-4">
                  <img
                    key={c.id + "-logo"}
                    src={c.logo.svgUrl}
                    alt={c.logo.name}
                    style={{ height: 26, width: "auto", maxWidth: 180, objectFit: "contain", filter: "brightness(0) invert(1)" }}
                  />
                </div>
                <h3
                  className="font-heading font-bold mb-2.5"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(0.92rem,1.8vw,1.08rem)", color: "white", lineHeight: 1.5 }}
                >
                  {c.subtitle}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.48)", fontSize: "0.875rem", lineHeight: 1.72 }}>{c.description}</p>
              </div>

              {/* Box 2: testimonial */}
              <div className="rounded-xl p-4 sm:p-6" style={{ border: "1px solid rgba(255,255,255,0.09)", background: "#0B0E22" }}>
                <svg width="24" height="18" viewBox="0 0 28 22" fill="none" className="mb-3">
                  <path d="M0 22V13.2C0 9.6.933 6.6 2.8 4.2 4.667 1.8 7.2.267 10.4 0L11.6 2C9.067 2.533 7.133 3.8 5.8 5.8 4.467 7.8 3.867 10 4 12.4H8V22H0ZM16 22V13.2C16 9.6 16.933 6.6 18.8 4.2 20.667 1.8 23.2.267 26.4 0L27.6 2C25.067 2.533 23.133 3.8 21.8 5.8 20.467 7.8 19.867 10 20 12.4H24V22H16Z" fill="#F5C518" fillOpacity="0.45" />
                </svg>
                <p className="mb-3" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.72 }}>{c.testimonial}</p>
                <p className="font-heading font-bold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {c.author}{" "}
                  <span style={{ color: "rgba(255,255,255,0.38)", fontWeight: 400 }}>{c.role}</span>
                </p>
              </div>
            </div>

            {/* Right: image — hidden on mobile, shown lg+ */}
            <div className="relative m-4 sm:m-5 rounded-xl overflow-hidden hidden lg:block" style={{ minHeight: 300 }}>
              <img key={c.id + "-img"} src={c.image} alt={c.tabLabel} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to right,#0E1228 0%,rgba(14,18,40,0.2) 30%,transparent 60%)" }} />
            </div>
          </div>

          {/* Mobile image */}
          <div className="lg:hidden mx-4 mb-4 rounded-xl overflow-hidden" style={{ height: 200 }}>
            <img key={c.id + "-img-m"} src={c.image} alt={c.tabLabel} className="w-full h-full object-cover" />
          </div>

          {/* Tab row */}
          <div
            className="overflow-x-auto"
            style={{ borderTop: "1px solid rgba(255,255,255,0.09)" }}
          >
            <div
              className="flex"
              style={{ minWidth: "max-content" }}
            >
              {clients.map((cl, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={cl.id}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="flex flex-col items-center justify-center gap-2 py-4 px-5 sm:px-6 transition-colors duration-150 flex-shrink-0"
                    style={{
                      background: isActive ? "#07091A" : "transparent",
                      borderRight: i < clients.length - 1 ? "1px solid rgba(255,255,255,0.09)" : "none",
                      borderTop: isActive ? `2px solid ${cl.tabAccent}` : "2px solid transparent",
                      marginTop: "-1px",
                      cursor: "pointer",
                      minWidth: 100,
                    }}
                  >
                    <img
                      src={cl.tabSvg}
                      alt={cl.tabLabel}
                      style={{
                        height: 18,
                        width: "auto",
                        maxWidth: 90,
                        objectFit: "contain",
                        filter: isActive ? "brightness(0) invert(1)" : "brightness(0) invert(0.35)",
                        transition: "filter 0.15s",
                      }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}