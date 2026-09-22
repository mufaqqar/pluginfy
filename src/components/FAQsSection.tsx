"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const faqs = [
  {
    q: "What does Pluginfy actually do?",
    a: "We're an AI-first technology firm. We engineer AI, automation, integrations, ERP solutions, e-commerce platforms, and custom software components that plug directly into your existing technology ecosystem — no rip-and-replace required.",
  },
  {
    q: "How is Pluginfy different from a traditional dev agency?",
    a: "We don't just write code. We focus on integration — AI agents, automation workflows, and custom software built to connect with the tools you already use. That means faster time-to-value and less disruption to your operations.",
  },
  {
    q: "What does it cost to start a project?",
    a: "Every engagement is scoped to your needs. After a brief discovery call, we'll give you a clear proposal with timeline and budget — no vague estimates, no surprises halfway through.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. Automation and integration projects can ship in weeks; full platforms typically take 2–6 months. We break work into milestones so you see progress continuously.",
  },
  {
    q: "Can Pluginfy work with our existing team and tools?",
    a: "Yes. We integrate with your current stack — ERPs, CRMs, internal tools, or legacy systems — and can work as an embedded extension of your existing team.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Absolutely. We offer ongoing maintenance, monitoring, and iteration. Many of our clients retain us after launch as their long-term engineering partner.",
  },
];

export default function FAQsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24" style={{ background: "#0A0D1E" }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <FadeIn y={30} duration={0.6}>
          <p className="section-label mb-3">FAQ</p>
        </FadeIn>
        <FadeIn y={30} delay={0.1} duration={0.6}>
          <h2 className="font-heading font-bold mb-3" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,3.5vw,2.2rem)", color: "white" }}>
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.15} duration={0.6}>
          <p className="mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: "0.95rem" }}>
            Everything you need to know about working with Pluginfy. Still curious? Just reach out — we reply fast.
          </p>
        </FadeIn>

        <StaggerContainer className="flex flex-col gap-3" staggerDelay={0.06}>
          {faqs.map((f, i) => (
            <StaggerItem key={i} y={20}>
              <div className="card-dark rounded-xl overflow-hidden" style={{ background: "#0E1228", border: "1px solid rgba(255,255,255,0.08)" }}>
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-white" style={{ fontFamily: "var(--font-heading)" }}>{f.q}</span>
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M4 6l4 4 4-4" stroke={openFaq === i ? "#F5C518" : "rgba(255,255,255,0.4)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? "260px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                  <p className="px-5 sm:px-6 pb-5" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.75 }}>{f.a}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}