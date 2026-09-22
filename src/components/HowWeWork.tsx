"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Discover",
    description:
      "We dive into your business goals, workflows, and tech stack to uncover where AI and automation can create real impact.",
  },
  {
    num: "02",
    title: "Plan",
    description:
      "We map out a clear roadmap with scope, milestones, and the right architecture — no guesswork, just a solid plan.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Our engineers design, develop, and integrate production-grade solutions that plug seamlessly into your ecosystem.",
  },
  {
    num: "04",
    title: "Launch",
    description:
      "We test rigorously, deploy with confidence, and ensure a smooth go-live with zero disruption to your operations.",
  },
  {
    num: "05",
    title: "Scale",
    description:
      "We monitor, optimize, and evolve your systems as you grow — keeping performance high and costs in check.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "#07091A" }}>
      <div className="absolute left-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        <FadeIn y={30} duration={0.6}>
          <span
            className="inline-block mb-4"
            style={{ color: "#F5C518", fontSize: "14px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Our Process
          </span>
          <h2
            className="font-heading font-bold mb-3"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,40px)", color: "white", lineHeight: 1.2 }}
          >
            How we work
          </h2>
          <p
            className="mb-8 sm:mb-12 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.7 }}
          >
            A proven five-step process that takes you from first conversation to a fully deployed, scalable solution.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5" staggerDelay={0.1}>
          {steps.map((step) => (
            <StaggerItem key={step.num} hover hoverY={-6} hoverScale={1.02}>
              <div
                className="card-dark p-5 sm:p-6 h-full flex flex-col"
                style={{ borderRadius: "14px" }}
              >
                <span
                  className="font-heading font-extrabold mb-4 block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem,3vw,2rem)",
                    color: "#F5C518",
                    lineHeight: 1,
                  }}
                >
                  {step.num}
                </span>
                <h3
                  className="font-heading font-bold mb-2"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "20px", color: "white" }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
