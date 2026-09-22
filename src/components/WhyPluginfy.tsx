"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const reasons = [
  {
    num: "01",
    title: "AI-first, not AI-added",
    description:
      "AI isn't a buzzword we bolt on. Every solution we ship is designed around intelligent automation from day one.",
  },
  {
    num: "02",
    title: "Senior engineers only",
    description:
      "No junior handoffs. Your product is built by certified engineers with 10+ years of production experience.",
  },
  {
    num: "03",
    title: "Fixed scope, honest timelines",
    description:
      "Clear roadmaps, transparent progress, no surprise invoices. You always know where your project stands.",
  },
  {
    num: "04",
    title: "Built to scale",
    description:
      "We architect for day two — load, growth, and change — so your platform never becomes the bottleneck.",
  },
  {
    num: "05",
    title: "We plug into your stack",
    description:
      "Laravel, React, AWS, custom APIs — we integrate with what you already run instead of forcing a rewrite.",
  },
  {
    num: "06",
    title: "Partners, not vendors",
    description:
      "18+ years, 185+ projects, 85% client retention. We stay with you long after launch day.",
  },
];

export default function WhyPluginfy() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "#0A0D1E" }}>
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        <FadeIn y={30} duration={0.6}>
          <span
            className="inline-block mb-4"
            style={{ color: "#F5C518", fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Why Pluginfy
          </span>
          <h2
            className="font-heading font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,40px)", color: "white", lineHeight: 1.2 }}
          >
            Why teams <span style={{ color: "#F5C518" }}>choose us</span>
          </h2>
          <p
            className="mb-8 sm:mb-12 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.7 }}
          >
            We&apos;re not an agency. We&apos;re a product engineering team that plugs into your business and ships systems that last.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5" staggerDelay={0.08}>
          {reasons.map((reason) => (
            <StaggerItem key={reason.num} hover hoverY={-6} hoverScale={1.02}>
              <div
                className="card-dark p-5 sm:p-6 h-full flex flex-col relative overflow-hidden"
                style={{ borderRadius: "14px" }}
              >
                <span
                  className="absolute top-4 right-5 font-heading font-extrabold select-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "3rem",
                    color: "rgba(245,197,24,0.07)",
                    lineHeight: 1,
                  }}
                >
                  {reason.num}
                </span>
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.2)" }}
                >
                  <span style={{ color: "#F5C518", fontSize: "1rem" }}>✦</span>
                </div>
                <h3
                  className="font-heading font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "19px", color: "white" }}
                >
                  {reason.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.65 }}>
                  {reason.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
