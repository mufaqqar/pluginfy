"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface CaseStudy {
  client: string;
  tag: string;
  result: string;
  accent: string;
  image: string;
  testimonial: string;
  author: string;
  role: string;
}

export interface ServicePageData {
  title: string;
  tagline: string;
  heroDesc: string;
  heroGraphic: ReactNode;
  stats: { val: string; label: string }[];
  techStack: { name: string; color: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  caseStudies: CaseStudy[];
  faqs: { q: string; a: string }[];
}

/* ─── Case Study Card ─── */
function CaseStudyCard({ c }: { c: CaseStudy }) {
  return (
    <div className="rounded-2xl overflow-hidden grid lg:grid-cols-[1fr_380px]" style={{ background: "#0E1228", border: "1px solid rgba(255,255,255,0.08)", minHeight: 320 }}>
      {/* Left */}
      <div className="p-6 sm:p-8 flex flex-col gap-4">
        <div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full inline-block mb-3" style={{ background: `${c.accent}22`, color: c.accent, fontFamily: "var(--font-heading)" }}>{c.tag}</span>
          <h3 className="font-heading font-extrabold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem,2.5vw,1.7rem)" }}>{c.client}</h3>
        </div>
        {/* Result box */}
        <div className="rounded-xl p-4 sm:p-5 flex-1" style={{ background: "#0B0E22", border: "1px solid rgba(255,255,255,0.07)" }}>
          <p className="font-heading font-semibold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "0.92rem", lineHeight: 1.65 }}>{c.result}</p>
        </div>
        {/* Testimonial box */}
        <div className="rounded-xl p-4 sm:p-5" style={{ background: "#0B0E22", border: "1px solid rgba(255,255,255,0.07)" }}>
          <svg width="22" height="16" viewBox="0 0 28 22" fill="none" className="mb-3">
            <path d="M0 22V13.2C0 9.6.933 6.6 2.8 4.2 4.667 1.8 7.2.267 10.4 0L11.6 2C9.067 2.533 7.133 3.8 5.8 5.8 4.467 7.8 3.867 10 4 12.4H8V22H0ZM16 22V13.2C16 9.6 16.933 6.6 18.8 4.2 20.667 1.8 23.2.267 26.4 0L27.6 2C25.067 2.533 23.133 3.8 21.8 5.8 20.467 7.8 19.867 10 20 12.4H24V22H16Z" fill="#F5C518" fillOpacity="0.4" />
          </svg>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", lineHeight: 1.75 }}>{c.testimonial}</p>
          <p className="mt-3 font-heading font-bold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>
            {c.author} <span style={{ color: "rgba(255,255,255,0.38)", fontWeight: 400, fontSize: "0.78rem" }}>{c.role}</span>
          </p>
        </div>
      </div>
      {/* Right: image */}
      <div className="relative hidden lg:block">
        <img src={c.image} alt={c.client} className="w-full h-full object-cover" style={{ minHeight: 300 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right,#0E1228 0%,rgba(14,18,40,0.25) 35%,transparent 60%)" }} />
        {/* Mobile image strip */}
      </div>
    </div>
  );
}

/* ─── Case Studies Section ─── */
function CaseStudiesSection({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const c = studies[active];
  const multi = studies.length > 1;

  return (
    <section className="py-14 sm:py-20" style={{ background: "#0A0D1E" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <p className="section-label mb-3">Work</p>
        <h2 className="font-heading font-bold mb-8" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,3vw,2rem)", color: "white" }}>
          Projects we're proud of
        </h2>

        {/* Card */}
        <CaseStudyCard c={c} />

        {/* Tabs — only when multiple */}
        {multi && (
          <div className="mt-0 rounded-b-2xl overflow-x-auto" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "#0E1228" }}>
            <div className="flex" style={{ minWidth: "max-content" }}>
              {studies.map((s, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={s.client}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className="flex flex-col items-center justify-center gap-1.5 px-6 py-4 transition-colors duration-150 flex-shrink-0"
                    style={{
                      background: isActive ? "#07091A" : "transparent",
                      borderRight: i < studies.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                      borderTop: isActive ? `2px solid ${s.accent}` : "2px solid transparent",
                      cursor: "pointer",
                      minWidth: 130,
                    }}
                  >
                    <span className="font-heading font-bold text-xs" style={{ fontFamily: "var(--font-heading)", color: isActive ? "white" : "rgba(255,255,255,0.4)", transition: "color 0.15s" }}>{s.client}</span>
                    <span className="text-xs" style={{ color: isActive ? s.accent : "rgba(255,255,255,0.25)", fontSize: "0.7rem" }}>{s.tag}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── Main ServicePage ─── */
export default function ServicePage({ data }: { data: ServicePageData }) {
  const [form, setForm] = useState({ name: "", email: "", budget: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const router = useRouter();

  const navToServices = () => {
    router.push("/");
    setTimeout(() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }), 320);
  };

  const field = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setForm({ ...form, [key]: e.target.value }),
    onFocus: (e: React.FocusEvent<HTMLElement>) => (e.target.style.borderColor = "#F5C518"),
    onBlur:  (e: React.FocusEvent<HTMLElement>) => (e.target.style.borderColor = "rgba(255,255,255,0.08)"),
    style: { background: "#07091A", border: "1px solid rgba(255,255,255,0.08)", color: "white", fontFamily: "var(--font-body)", transition: "border-color 0.15s" } as React.CSSProperties,
  });

  return (
    <div style={{ background: "#07091A" }}>

      {/* ── Hero: 2-column ── */}
      <section className="relative overflow-hidden pt-24 pb-0 sm:pt-32" style={{ background: "#07091A" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch" style={{ minHeight: 460 }}>

            {/* Left */}
            <div className="flex flex-col justify-center pb-14 pt-4 lg:pt-0 lg:pr-12">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6 flex-wrap text-xs" style={{ fontFamily: "var(--font-heading)" }}>
                <button onClick={() => router.push("/")} style={{ color: "rgba(255,255,255,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: "inherit" }}>Home</button>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
                <button onClick={navToServices} style={{ color: "rgba(255,255,255,0.35)", background: "none", border: "none", cursor: "pointer", padding: 0, fontFamily: "inherit", fontSize: "inherit" }}>Services</button>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
                <span style={{ color: "#F5C518" }}>{data.title}</span>
              </div>

              <p className="section-label mb-3">Service</p>
              <h1 className="font-heading font-extrabold mb-5 leading-tight" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5.5vw,4rem)", color: "white", letterSpacing: "-0.02em" }}>
                {data.title}<br /><span style={{ color: "#F5C518" }}>{data.tagline}</span>
              </h1>
              <p className="mb-8" style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.88rem,1.8vw,1rem)", lineHeight: 1.78, maxWidth: 480 }}>
                {data.heroDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#contact-form" className="btn-primary">Start a Project</a>
                <Link href="/" className="btn-outline">← Back to Home</Link>
              </div>
            </div>

            {/* Right graphic */}
            <div className="relative hidden lg:flex items-center justify-center rounded-2xl overflow-hidden ml-8" style={{ background: "linear-gradient(135deg,#0E1228 0%,#111630 100%)", border: "1px solid rgba(255,255,255,0.07)", minHeight: 420 }}>
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 60% 40%,rgba(245,197,24,0.18) 0%,transparent 65%)" }} />
              {data.heroGraphic}
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-6 sm:gap-12 py-8 mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {data.stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-extrabold" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "#F5C518" }}>{s.val}</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-14 sm:py-20" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">Stack</p>
          <h2 className="font-heading font-bold mb-8" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,3vw,2rem)", color: "white" }}>The stack we ship with</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {data.techStack.map((t) => (
              <div key={t.name} className="card-dark p-4 rounded-xl flex flex-col gap-2">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
                <p className="font-heading font-bold text-white text-sm" style={{ fontFamily: "var(--font-heading)" }}>{t.name}</p>
                <p style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.4 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-14 sm:py-20" style={{ background: "#07091A" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">How we work</p>
          <h2 className="font-heading font-bold mb-10" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,3vw,2rem)", color: "white" }}>Our delivery process</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.process.map((p, i) => (
              <div key={p.step} className="card-dark p-5 sm:p-6 rounded-xl flex flex-col gap-4 relative overflow-hidden">
                <span className="absolute top-3 right-4 font-heading font-extrabold select-none" style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", color: "rgba(245,197,24,0.06)", lineHeight: 1 }}>{p.step}</span>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.2)" }}>
                  <span className="font-heading font-bold text-xs" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-sm" style={{ fontFamily: "var(--font-heading)" }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.68 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <CaseStudiesSection studies={data.caseStudies} />

      {/* ── FAQ ── */}
      <section className="py-14 sm:py-20" style={{ background: "#07091A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="section-label mb-3">FAQ</p>
          <h2 className="font-heading font-bold mb-8" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem,3vw,2rem)", color: "white" }}>Common questions</h2>
          <div className="flex flex-col gap-3">
            {data.faqs.map((f, i) => (
              <div key={i} className="card-dark rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-heading font-semibold text-sm text-white" style={{ fontFamily: "var(--font-heading)" }}>{f.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                    <path d="M4 6l4 4 4-4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <div style={{ maxHeight: openFaq === i ? "220px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }}>
                  <p className="px-5 pb-5" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.75 }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact-form" className="py-14 sm:py-24" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="section-label mb-3">Start a project</p>
              <h2 className="font-heading font-extrabold mb-5" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3.2rem)", color: "white", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                Let's build<br /><span style={{ color: "#F5C518" }}>something great.</span>
              </h2>
              <p className="mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: "0.92rem" }}>
                Tell us about your project. We'll review within 24 hours and propose a clear next step — no sales fluff.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  { d: "M2 4l6 5 6-5M2 4h12v9H2V4z", text: "hello@pluginfy.com", href: "mailto:hello@pluginfy.com" },
                  { d: "M6 1C4.3 1 3 2.3 3 4c0 2.5 3 7 3 7s3-4.5 3-7c0-1.7-1.3-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2z", text: "Mitte, Berlin, Germany", href: "#" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.2)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={item.d} stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <a href={item.href} className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>{item.text}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-dark p-5 sm:p-8 rounded-2xl">
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ label: "Full Name", key: "name", type: "text", ph: "Jason Miller" }, { label: "Email Address", key: "email", type: "email", ph: "jason@company.com" }].map(({ label, key, type, ph }) => (
                    <div key={key}>
                      <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>{label}</label>
                      <input type={type} placeholder={ph} {...field(key as keyof typeof form)} className="w-full px-4 py-3 rounded-lg text-sm outline-none" />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>Estimated Budget</label>
                  <select {...field("budget")} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ ...field("budget").style, color: form.budget ? "white" : "rgba(255,255,255,0.3)" }}>
                    <option value="" disabled>Select a range</option>
                    <option>$5k – $15k</option><option>$15k – $50k</option><option>$50k – $100k</option><option>$100k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>Tell us about your project</label>
                  <textarea rows={4} placeholder="What are you building? What's your timeline?" {...field("message")} className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" />
                </div>
                <button className="btn-primary w-full justify-center text-sm">
                  Send Project Brief
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="#07091A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}