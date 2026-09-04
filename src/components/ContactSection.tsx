"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="py-16 sm:py-24" style={{ background: "linear-gradient(180deg, #101325 0%, #0C0F18 100%)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left */}
          <FadeIn x={-30} duration={0.6}>
            <div>
            <h2
              className="font-heading font-extrabold mb-5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,6vw,60px)", color: "white", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              LET'S WORK
              <br />
              TOGETHER
            </h2>
            <p className="mb-8 max-w-[430px]" style={{ color: "rgba(255,255,255)", lineHeight: 1.75, fontSize: "20px" }}>
              Ready to amplify your digital presence? Send us a message and let's build something legendary.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />,
                  text: "hello@pluginfy.com",
                  href: "mailto:hello@pluginfy.com",
                },
                {
                  icon: <path d="M8 1C5.8 1 4 2.8 4 5c0 3 4 9 4 9s4-6 4-9c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#ffffff" strokeWidth="1.4" fill="none" />,
                  text: "307 Madina Heights, Lahore, Pakistan",
                  href: "",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#1A1919", border: "1px solid #49484733" }}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">{item.icon}</svg>
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-lg transition-colors text-white">{item.text}</a>
                  ) : (
                    <span className="text-lg text-white">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            </div>
          </FadeIn>

          {/* Right: form */}
          <FadeIn x={30} delay={0.15} duration={0.6}>
            <div className="bg-[#22263F] p-5 sm:px-10 sm:py-12 border border-white/20" style={{ borderRadius: "32px" }}>
              <div className="flex flex-col gap-4 sm:gap-5">
                <div className="grid sm:grid-cols-1 gap-6">
                  {[
                    { label: "Your Name", key: "name", type: "text", placeholder: "John Doe" },
                    { label: "Email Address", key: "email", type: "email", placeholder: "john@company.com" },
                  ].map(({ label, key, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-xs font-normal uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-heading)" }}>{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full py-3 border-b border-white/20 bg-transparent text-sm outline-none"
                        style={{ color: "white", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                        onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>Your Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full py-3 border-b border-white/20 bg-transparent text-sm outline-none"
                    style={{ color: "white", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                    onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                  />
                </div>
                <button className="bg-white hover:bg-accent-hover w-full px-7 py-4 justify-center text-lg font-bold text-[#00643A] rounded-full">
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}