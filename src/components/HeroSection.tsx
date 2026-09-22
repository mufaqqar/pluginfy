"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import TrustedBy from "./TrustedBy";

const helpingLines = [
  "helping you automate smarter, operate faster, and grow stronger.",
  "helping you simplify operations, accelerate innovation, and scale with confidence.",
  "helping you reduce complexity, boost efficiency, and unlock growth.",
  "helping you automate workflows, increase performance, and scale seamlessly.",
  "helping you build smarter, innovate faster, and grow without limits.",
];

function useTypewriter(lines: string[], typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentLine = lines[lineIndex];

    if (!isDeleting) {
      setText(currentLine.slice(0, text.length + 1));
      if (text.length + 1 === currentLine.length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
        return;
      }
    } else {
      setText(currentLine.slice(0, text.length - 1));
      if (text.length - 1 === 0) {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
        return;
      }
    }
  }, [text, lineIndex, isDeleting, lines, pauseDuration]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return text;
}

const stats = [
  { value: "40+", label: "Certified Engineers", icon: "/assets/Certified_Engineers-1.svg" },
  { value: "18+", label: "Years of Industry Experience", icon: "/assets/Years_of_Industry_Experience.svg" },
  { value: "85%", label: "Client Retention Rate", icon: "/assets/Client_Retention_Rate-1.svg" },
  { value: "20+", label: "Industries served across 25+ countries", icon: "/assets/Industries_served_across_25_.svg" },
];

const badges = [
  { url: "/assets/goodfirms-ecom-1.svg", alt: "GoodFirms" },
  { url: "/assets/extract__1_-1.svg", alt: "Reliable Company" },
  { url: "/assets/clutch-deliver-1.svg", alt: "Clutch We Deliver" },
  { url: "/assets/clutch-2020-1.svg", alt: "Clutch Top" },
];

export default function HeroSection() {
  const typewriterText = useTypewriter(helpingLines);
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-10"
      style={{ background: "#07091A" }}
    >
      {/* Background shape */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-10 md:opacity-20 pointer-events-none select-none hidden sm:flex items-center">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full max-w-xl lg:max-w-2xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: headline */}
          <div>
            <FadeIn y={40} duration={0.7}>
              <h1
                className="font-heading font-extrabold leading-none tracking-tight mb-5 sm:mb-6"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem,8vw,56px)",
                  lineHeight: "clamp(2rem,8vw,56px)",
                  color: "white",
                  fontWeight: "600",
                  letterSpacing: "-0.02em",
                }}
              >
                Plug In<span className="inline-flex w-3 h-3 rounded-full bg-accent"></span> Automate<span className="inline-flex w-3 h-3 rounded-full bg-accent"></span> Scale<span className="inline-flex w-3 h-3 rounded-full bg-accent"></span>
              </h1>
            </FadeIn>
            <FadeIn y={30} delay={0.15} duration={0.6}>
              <p
                className="mb-7 sm:mb-8"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.75, fontWeight: "500" }}
              >
                We engineer Al, automation, integrations, and custom software components that plug seamlessly into your technology ecosystem.
              </p>
            </FadeIn>
            <FadeIn y={30} delay={0.15} duration={0.6}>
              <p
                className="mb-7 sm:mb-8 min-h-[44px]"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(16px,2vw,18px)", lineHeight: 1.75, fontWeight: "500" }}
              >
                — {typewriterText}
                <span className="typewriter-caret">|</span>
              </p>
            </FadeIn>
            <FadeIn y={20} delay={0.3} duration={0.5}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary btn-blink inline-flex items-center gap-2">
                  Start Your Project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#07091A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline inline-flex items-center">Explore Our Services</Link>
              </div>
            </FadeIn>
            <FadeIn y={20} delay={0.3} duration={0.5}>
              <div className="flex items-center md:gap-8 gap-2 divide-x divide-white/20 mt-10">

                <div className="flex items-center gap-2 md:pr-8 pr-2 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M22 2L7 22H17L12 38L31 16H20L22 2Z"
                      stroke="#F5C518"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <div>
                    <div className="text-sm font-semibold text-white/55">Solve</div>
                    <div className="text-sm font-semibold text-white/55">Real Problems</div>
                  </div>
                </div>



                <div className="flex items-center gap-2 md:pr-8 pr-2 justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 50 50"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-[#F5C518]"
                  >
                    <path d="M22 2L20.2 8.8C19.1 9.1 18 9.6 16.9 10.2L12 6.7L6.8 11.9L10.2 16.9C9.6 18 9.1 19.1 8.8 20.2L2.8 21.2V27.7L8.8 29.7C9.1 30.9 9.6 32 10.2 33.1L6.7 38L11.9 43.2L16.9 39.8C18 40.4 19.1 40.9 20.2 41.2L22 47.2H27.7L29.7 41.2C30.9 40.9 32 40.4 33.1 39.8L38 43.3L43.2 38.1L39.8 33.1C40.4 32 40.9 30.9 41.2 29.7L47.2 27.7V22.2L41.2 20.2C40.9 19.1 40.4 18 39.8 16.9L43.3 11.9L38.1 6.8L33.1 10.2C32 9.6 30.9 9.1 29.7 8.8L27.7 2H22Z" />
                    <circle cx="25" cy="25" r="8" />
                  </svg>

                  <div>
                    <p className="text-sm font-semibold text-white/55">
                      Automate
                    </p>
                    <p className="text-sm font-semibold text-white/55">
                      What Matters
                    </p>
                  </div>
                </div>



                <div className="flex items-center gap-2 md:pr-8 pr-2 justify-center">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 48 48"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-[#F5C518]"
                  >
                    <rect x="7" y="28" width="7" height="13" rx="1" />
                    <rect x="20" y="20" width="7" height="21" rx="1" />
                    <rect x="33" y="10" width="7" height="31" rx="1" />
                  </svg>

                  <div>
                    <p className="text-sm font-semibold text-white/55">
                      Scale
                    </p>
                    <p className="text-sm font-semibold text-white/55">
                      With Confidence
                    </p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Right: stats grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0" staggerDelay={0.1}>

            {/* 4 stat cards */}
            {stats.map((s) => (
              <StaggerItem key={s.value + s.label} hover hoverY={-6} hoverScale={1.02}>
                <div
                  className="card-dark p-4 sm:px-5 sm:py-3 flex flex-col justify-between"
                  style={{ borderRadius: "14px", minHeight: "110px" }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className="font-heading font-extrabold"
                      style={{
                        fontSize: "clamp(1.6rem,4vw,2rem)",
                        color: "white",
                        fontFamily: "var(--font-heading)",
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </span>
                    <img
                      src={s.icon}
                      alt=""
                      style={{ width: 36, height: 36, objectFit: "contain", flexShrink: 0 }}
                    />
                  </div>
                  <span className="inline-flex max-w-[152px] min-h-[58px]" style={{ color: "rgba(255,255,255)", fontSize: "14px", lineHeight: 1.45, marginTop: 8 }}>
                    {s.label}
                  </span>
                </div>
              </StaggerItem>
            ))}

            {/* Rating + badges card */}
            <StaggerItem className="col-span-2">
              <div
                className="card-dark p-4 sm:p-5"
                style={{ borderRadius: "14px" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                  {/* Stars + score */}
                  <div className="flex-shrink-0">
                    <span
                      className="font-heading font-bold"
                      style={{ fontSize: "clamp(1.6rem,4vw,2rem)", color: "#fff", fontFamily: "var(--font-heading)" }}
                    >
                      5.0
                    </span>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="22" height="22" viewBox="0 0 16 16" fill="#F5C518">
                          <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.08L8 10.25l-3.71 2.25.71-4.08L2 5.5l4.15-.75z" />
                        </svg>
                      ))}
                    </div>

                    <p style={{ color: "rgba(255,255,255)", fontSize: "14px", lineHeight: 1.45, marginTop: 8 }}>
                      Based on hundreds of reviews
                    </p>
                  </div>
                  {/* Badges — right aligned */}
                  <div className="flex items-center gap-3 sm:gap-5 flex-wrap sm:ml-auto">
                    {badges.map((b) => (
                      <img
                        key={b.alt}
                        src={b.url}
                        alt={b.alt}
                        style={{ height: 52, width: "auto", objectFit: "contain", opacity: 0.92 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
      <TrustedBy />
    </section>
  );
}