"use client";

import { FadeIn } from "./FadeIn";

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "#FEBC2E" }}>
      <div className="absolute inset-0 opacity-100 pointer-events-none  mx-autohidden md:block z-0">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full h-full object-contain brightness-0" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn y={30} duration={0.6}>
          <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#000", fontFamily: "var(--font-heading)" }}>
            Start a Conversation
          </p>
        </FadeIn>
        <FadeIn y={30} delay={0.1} duration={0.6}>
          <h2
            className="font-heading font-extrabold mb-4"
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,6vw,60px)", color: "#000000", lineHeight: 1.1, letterSpacing: "-0.02em" }}
          >
            Got a roadmap? Let's ship it.
          </h2>
        </FadeIn>
        <FadeIn y={20} delay={0.2} duration={0.5}>
          <p className="mb-8 max-w-3xl mx-auto" style={{ color: "#000", lineHeight: 1.4, fontSize: "18px" }}>
            Web, design, apps, marketing, or AI — tell us what you need. We'll reply with a clear next step, not a wall of text.
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.3} duration={0.5}>
          <button
            className="inline-flex items-center gap-3 font-heading font-bold text-lg max-w-[340px] w-full justify-center px-7 py-4 rounded-full transition-all duration-200 hover:scale-105"
            style={{ background: "#000", color: "#fff", fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
          >
            START A PROJECT
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </FadeIn>
      </div>
    </section>
  );
}