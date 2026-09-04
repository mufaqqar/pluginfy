"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const services = [
  "AI & ML Development",
  "Web Development",
  "Mobile App Development",
  "QA & Testing",
  "DevOps Services",
  "Blockchain Development",
  "Other",
];

export default function ContactClient() {
  const [form, setForm]   = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent]   = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inp = (key: keyof typeof form) => ({
    value: form[key],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [key]: e.target.value }),
  });

  return (
    <div style={{ background: "#07091A" }}>

      {/* ── Info section ── */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden" style={{ background: "#07091A" }}>

        {/* Watermark */}
        <span
          aria-hidden
          className="absolute left-0 top-16 sm:top-20 font-heading font-extrabold select-none pointer-events-none leading-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(5rem,18vw,14rem)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap",
          }}
        >
          Contact
        </span>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <FadeIn y={20} duration={0.5}>
            <div className="flex items-center gap-2 mb-6 text-xs" style={{ fontFamily: "var(--font-heading)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>→</span>
              <span style={{ color: "#F5C518" }}>Contact</span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h1
              className="font-heading font-extrabold mb-5 leading-none"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.8rem,8vw,6rem)", color: "white", letterSpacing: "-0.03em" }}
            >
              Let's Talk.
            </h1>
          </FadeIn>
          <FadeIn y={30} delay={0.15} duration={0.6}>
            <p className="mb-14 max-w-xl" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.8 }}>
              You can reach us in any way that works for you. Send an email or fill the form below — we reply to every enquiry personally within 24 hours.
            </p>
          </FadeIn>

          {/* 3-column info */}
          <StaggerContainer
            className="grid sm:grid-cols-3 gap-0"
            staggerDelay={0.12}
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Opening hours */}
            <StaggerItem hover hoverY={-4} hoverScale={1.01}>
              <div className="py-8 sm:pr-10" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}>Opening hours</p>
                <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem,2vw,1.2rem)" }}>Mon – Fri, 9:00 – 18:00</p>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>Central European Time (CET)</p>
              </div>
            </StaggerItem>

            {/* Mail */}
            <StaggerItem hover hoverY={-4} hoverScale={1.01}>
              <div className="py-8 sm:px-10" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
                <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}>Mail</p>
                <a
                  href="mailto:hello@pluginfy.com"
                  className="font-heading font-bold transition-colors hover:text-yellow-400"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1rem,2vw,1.2rem)", color: "white", textDecoration: "none" }}
                >
                  hello@pluginfy.com
                </a>
                <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>We reply within 24 hours</p>
              </div>
            </StaggerItem>

            {/* Socials */}
            <StaggerItem hover hoverY={-4} hoverScale={1.01}>
              <div className="py-8 sm:pl-10">
                <p className="text-xs font-semibold mb-3 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}>Find us on</p>
                <div className="flex items-center gap-4 mt-1">
                  {[
                    { label: "LinkedIn", href: "#", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" fill="currentColor"/><rect x="2" y="9" width="4" height="12" fill="currentColor"/><circle cx="4" cy="4" r="2" fill="currentColor"/></> },
                    { label: "Twitter", href: "#", icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" fill="currentColor"/> },
                    { label: "GitHub", href: "#", icon: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/> },
                    { label: "Instagram", href: "#", icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2" fill="none"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></> },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-150"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(245,197,24,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,197,24,0.3)"; (e.currentTarget as HTMLElement).style.color = "#F5C518"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)"; }}
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24">{s.icon}</svg>
                    </a>
                  ))}
                </div>
                <div className="mt-4 flex items-start gap-2">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-0.5 flex-shrink-0">
                    <path d="M8 1C5.8 1 4 2.8 4 5c0 3 4 9 4 9s4-6 4-9c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" fill="none"/>
                  </svg>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}>Mitte, 10117 Berlin, Germany</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ── Form section ── */}
      <section className="py-16 sm:py-24" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-[1fr_560px] gap-12 lg:gap-20 items-start">

            {/* Left copy */}
            <div>
              <FadeIn x={-30} duration={0.6}>
                <h2
                  className="font-heading font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3.5rem)", color: "white", letterSpacing: "-0.02em" }}
                >
                  Write to us.
                </h2>
              </FadeIn>
              <FadeIn x={-30} delay={0.1} duration={0.6}>
                <p className="mb-8" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.8, fontSize: "0.95rem", maxWidth: 380 }}>
                  Describe your project in a few words. We'll respond within 24 hours with a clear next step — no templates, no auto-replies.
                </p>
              </FadeIn>

              {/* Service quick links */}
              <FadeIn y={20} delay={0.15} duration={0.5}>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}>Our services</p>
              </FadeIn>
              <StaggerContainer className="flex flex-col gap-2" staggerDelay={0.07}>
                {[
                  { label: "AI & ML Development",    href: "/services/ai-ml-development" },
                  { label: "Web Development",         href: "/services/web-development" },
                  { label: "Mobile App Development",  href: "/services/mobile-app-development" },
                  { label: "QA & Testing",            href: "/services/qa-testing" },
                  { label: "DevOps Services",         href: "/services/devops" },
                  { label: "Blockchain Development",  href: "/services/blockchain" },
                ].map((s) => (
                  <StaggerItem key={s.label}>
                    <Link
                      href={s.href}
                      className="flex items-center justify-between py-2.5 px-4 rounded-xl text-sm transition-all duration-150"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", textDecoration: "none" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,197,24,0.3)"; (e.currentTarget as HTMLElement).style.color = "white"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                    >
                      {s.label}
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Right form */}
            <FadeIn x={30} delay={0.1} duration={0.7}>
              <div>
              {sent ? (
                <div className="card-dark rounded-2xl p-10 flex flex-col items-center text-center gap-5">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(39,201,63,0.1)", border: "1px solid rgba(39,201,63,0.3)" }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L19 7" stroke="#27C93F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>Message sent!</h3>
                    <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.9rem" }}>We'll get back to you within 24 hours.</p>
                  </div>
                  <button onClick={() => setSent(false)} className="btn-outline text-sm mt-2">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { label: "Name",  key: "name",  type: "text",  ph: "Jason Miller" },
                      { label: "E-mail", key: "email", type: "email", ph: "jason@company.com" },
                    ].map(({ label, key, type, ph }) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>{label}</label>
                        <input
                          required
                          type={type}
                          placeholder={ph}
                          {...inp(key as keyof typeof form)}
                          className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "white", fontFamily: "var(--font-body)" }}
                          onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Topic of interest */}
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>Topic of interest</label>
                    <div className="relative">
                      <select
                        {...inp("service")}
                        className="w-full px-4 py-3.5 rounded-xl text-sm outline-none appearance-none transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: form.service ? "white" : "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}
                        onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                      >
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => <option key={s} value={s} style={{ background: "#0A0D1E" }}>{s}</option>)}
                      </select>
                      <svg className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 5l4 4 4-4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.38)", fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}>Comment</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us what you're building, your timeline, and any technical context..."
                      {...inp("message")}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none transition-all"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", color: "white", fontFamily: "var(--font-body)" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.09)")}
                    />
                  </div>

                  {/* Send */}
                  <button
                    type="submit"
                    className="w-full font-heading font-bold text-sm py-4 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: "#F5C518", color: "#07091A", fontFamily: "var(--font-heading)", letterSpacing: "0.05em" }}
                  >
                    Send
                  </button>
                  <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>No spam. We reply to every message personally.</p>
                </form>
              )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
