import Link from "next/link";

const team = [
  { name: "Zain ul Abideen", role: "Founder & CEO", bio: "10+ years building digital products for enterprise and high-growth startups." },
  { name: "Fatima Khan", role: "Head of Design", bio: "Product designer focused on systems thinking and interaction design at scale." },
  { name: "Omar Siddiqui", role: "Lead Engineer", bio: "Full-stack architect specialising in React, Node.js, and cloud infrastructure." },
  { name: "Sara Malik", role: "AI/ML Lead", bio: "ML engineer with a background in NLP, LLM fine-tuning, and production model deployment." },
  { name: "Ali Hassan", role: "DevOps Lead", bio: "Cloud infrastructure specialist. AWS certified, Kubernetes expert, zero-downtime advocate." },
  { name: "Ayesha Raza", role: "Head of Client Success", bio: "Keeps projects on track and clients informed — from kickoff to handover." },
];

const values = [
  { title: "Craft over speed", desc: "We'd rather take one extra sprint than ship code we're not proud of. Quality compounds." },
  { title: "Radical transparency", desc: "You see exactly what we're building and why. No black-box development, no surprise timelines." },
  { title: "Ownership mindset", desc: "We treat your product as if it were ours. That means proactive communication, not reactive updates." },
  { title: "Continuous learning", desc: "The AI space evolves weekly. Our team is in it — building, experimenting, staying ahead." },
];

const milestones = [
  {
    step: "01", total: "06", year: "2016", title: "Founded",
    desc: "Started in Lahore, Pakistan as a focused web development studio. Our first three clients came through word of mouth — and all three are still with us.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=900&fit=crop&auto=format",
  },
  {
    step: "02", total: "06", year: "2018", title: "Berlin",
    desc: "Expanded to Berlin, Germany. Opened our European headquarters in Mitte and closed our first enterprise deal in the EU — a fintech platform serving 300K users.",
    image: "https://images.unsplash.com/photo-1560969184-10fe8719e047?w=900&h=900&fit=crop&auto=format",
  },
  {
    step: "03", total: "06", year: "2020", title: "AI Practice",
    desc: "Launched our AI/ML practice during the pandemic. First production model deployed for a Fortune 500 client. 91% average model accuracy across projects in year one.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&h=900&fit=crop&auto=format",
  },
  {
    step: "04", total: "06", year: "2022", title: "Scale",
    desc: "Crossed 40 engineers. Opened operations in the US market. Delivered our 100th project — a real-time analytics platform processing 2B+ daily events.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&h=900&fit=crop&auto=format",
  },
  {
    step: "05", total: "06", year: "2024", title: "Pluginfy",
    desc: "Rebranded as Pluginfy — an AI-first technology firm. Crossed $50M in client projects delivered. Serving enterprise and government clients in 5 continents.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=900&fit=crop&auto=format",
  },
  {
    step: "06", total: "06", year: "2025", title: "Global",
    desc: "Serving clients across US, GCC, UK, EU, and APAC. 185+ projects shipped. Building the next generation of AI-native products with teams on three continents.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&h=900&fit=crop&auto=format",
  },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#07091A" }}>

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24" style={{ background: "#07091A" }}>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden lg:flex items-center justify-end">
          <img src="/assets/bg_logo_shape.svg" alt="" className="w-full max-w-2xl" />
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-label mb-4">About us</p>
              <h1 className="font-heading font-extrabold mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.2rem,6vw,4rem)", color: "white", letterSpacing: "-0.02em" }}>
                We build AI-first
                <br />
                <span style={{ color: "#F5C518" }}>products that scale.</span>
              </h1>
              <p className="mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.8 }}>
                Pluginfy is an AI-first technology firm engineering production-grade digital systems for enterprise, government, and high-growth clients across the US, GCC, UK, and EU. We're not an agency. We're a product engineering team.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Work with us</Link>
                <Link href="/" className="btn-outline">← Back to Home</Link>
              </div>
            </div>
            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "40+", label: "Engineers" },
                { val: "18+", label: "Years of Industry" },
                { val: "5+", label: "Countries" },
                { val: "185+", label: "Projects Shipped" },
              ].map((s) => (
                <div key={s.label} className="card-dark p-5 rounded-xl text-center">
                  <p className="font-heading font-extrabold" style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", color: "#F5C518" }}>{s.val}</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-20" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">What we stand for</p>
          <h2 className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "white" }}>Our values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="card-dark p-5 sm:p-6 rounded-xl flex flex-col gap-3 relative overflow-hidden">
                <span className="absolute top-3 right-4 font-heading font-extrabold select-none" style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", color: "rgba(245,197,24,0.05)", lineHeight: 1 }}>0{i+1}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.2)" }}>
                  <span style={{ color: "#F5C518", fontSize: "1rem" }}>✦</span>
                </div>
                <h3 className="font-heading font-bold text-white text-sm" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.83rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey — full-width 2-col reference layout */}
      <section style={{ background: "#07091A" }}>
        {/* Section header */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 pt-16 sm:pt-20 pb-10">
          <p className="section-label mb-3">Our journey</p>
          <h2 className="font-heading font-bold" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "white" }}>How we got here</h2>
        </div>

        {/* Milestones — each row is full-width */}
        {milestones.map((m) => (
          <div
            key={m.step}
            className="grid lg:grid-cols-2 items-stretch"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {/* Left: text */}
            <div
              className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-14 lg:py-20 relative"
              style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Vertical accent line */}
              <div
                className="absolute left-6 sm:left-10 top-0 bottom-0 w-px hidden sm:block"
                style={{ background: "rgba(245,197,24,0.12)" }}
              />
              {/* Step counter */}
              <p
                className="font-heading font-semibold mb-4 sm:pl-8"
                style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.04em" }}
              >
                {m.step}/{m.total}
              </p>
              {/* Year pill */}
              <span
                className="inline-block mb-4 sm:pl-8 font-heading font-bold text-xs px-3 py-1 rounded-full w-fit"
                style={{ background: "rgba(245,197,24,0.1)", color: "#F5C518", fontFamily: "var(--font-heading)", border: "1px solid rgba(245,197,24,0.2)" }}
              >
                {m.year}
              </span>
              {/* Title */}
              <h3
                className="font-heading font-extrabold leading-none mb-5 sm:pl-8"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,7vw,5.5rem)", color: "#F5C518", letterSpacing: "-0.03em" }}
              >
                {m.title}
              </h3>
              {/* Description */}
              <p
                className="sm:pl-8 max-w-md"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.8 }}
              >
                {m.desc}
              </p>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden" style={{ minHeight: 360 }}>
              <img
                src={m.image}
                alt={m.title}
                className="w-full h-full object-cover"
                style={{ position: "absolute", inset: 0 }}
              />
              {/* Gradient overlay from left */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #07091A 0%, rgba(7,9,26,0.4) 40%, transparent 70%)" }}
              />
            </div>
          </div>
        ))}
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">The team</p>
          <h2 className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "white" }}>People behind the work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((t) => (
              <div key={t.name} className="card-dark p-5 sm:p-6 rounded-xl flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-heading font-bold text-lg" style={{ background: "rgba(245,197,24,0.12)", color: "#F5C518", fontFamily: "var(--font-heading)" }}>
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#F5C518" }}>{t.role}</p>
                </div>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.65 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20" style={{ background: "#F5C518" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading font-extrabold mb-4" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem,5vw,3.2rem)", color: "#07091A", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Ready to build something?
          </h2>
          <p className="mb-8" style={{ color: "rgba(7,9,26,0.6)", lineHeight: 1.7 }}>
            Tell us what you're working on. We'll get back within 24 hours.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-3 font-heading font-bold text-sm px-7 py-4 rounded-lg" style={{ background: "#07091A", color: "#F5C518", fontFamily: "var(--font-heading)" }}>
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}