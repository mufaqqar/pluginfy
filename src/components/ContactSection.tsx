"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="py-16 sm:py-24" style={{ background: "#0A0D1E" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <h2
              className="font-heading font-extrabold mb-5"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,6vw,3.5rem)", color: "white", lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              LET'S WORK
              <br />
              TOGETHER
            </h2>
            <p className="mb-8 max-w-sm" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.75, fontSize: "0.92rem" }}>
              Ready to amplify your digital presence? Send us a message and let's build something legendary.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <path d="M2 4l6 5 6-5M2 4h12v9H2V4z" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />,
                  text: "hello@Pluginfy.agency",
                  href: "mailto:hello@pluginfy.agency",
                },
                {
                  icon: <path d="M8 1C5.8 1 4 2.8 4 5c0 3 4 9 4 9s4-6 4-9c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" stroke="#F5C518" strokeWidth="1.4" fill="none" />,
                  text: "Berlin, Germany",
                  href: "#",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,197,24,0.1)", border: "1px solid rgba(245,197,24,0.2)" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">{item.icon}</svg>
                  </div>
                  <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.65)" }}>{item.text}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="card-dark p-5 sm:p-8" style={{ borderRadius: "18px" }}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", key: "name", type: "text", placeholder: "Jason Miller" },
                  { label: "Email Address", key: "email", type: "email", placeholder: "jason@company.com" },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>{label}</label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                      style={{ background: "#07091A", border: "1px solid rgba(255,255,255,0.08)", color: "white", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                      onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-xs font-semibold mb-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none"
                  style={{ background: "#07091A", border: "1px solid rgba(255,255,255,0.08)", color: "white", fontFamily: "var(--font-body)", transition: "border-color 0.15s" }}
                  onFocus={(e) => (e.target.style.borderColor = "#F5C518")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
                />
              </div>
              <button className="btn-primary w-full justify-center text-sm">
                SEND MESSAGE
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#07091A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}