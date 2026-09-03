export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: "#FEBC2E" }}>
      <div className="absolute inset-0 opacity-100 pointer-events-none  mx-autohidden md:block">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full h-full object-contain brightness-200" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(7,9,26,0.5)", fontFamily: "var(--font-heading)" }}>
          Start a Conversation
        </p>
        <h2
          className="font-heading font-extrabold mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,6vw,3.8rem)", color: "#07091A", lineHeight: 1.1, letterSpacing: "-0.02em" }}
        >
          Got a roadmap? Let's ship it.
        </h2>
        <p className="mb-8 max-w-lg mx-auto" style={{ color: "rgba(7,9,26,0.6)", lineHeight: 1.7, fontSize: "0.95rem" }}>
          Web, design, apps, marketing, or AI — tell us what you need. We'll reply with a clear next step, not a wall of text.
        </p>
        <button
          className="inline-flex items-center gap-3 font-heading font-bold text-sm px-7 py-4 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "#07091A", color: "#F5C518", fontFamily: "var(--font-heading)", letterSpacing: "0.04em" }}
        >
          START A PROJECT
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}