"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SERVICE_LINKS = [
  { label: "AI & ML Development",    desc: "LLM agents, RAG, predictive models",      href: "/services/ai-ml-development",     icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 5a3 3 0 110 6 3 3 0 010-6zm0 14a8 8 0 01-6.3-3.1A5 5 0 0112 15a5 5 0 016.3 2.9A8 8 0 0112 21z" },
  { label: "Web Development",         desc: "React, Next.js, Node.js, TypeScript",     href: "/services/web-development",       icon: "M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 2v2h14V7H5zm0 4v8h14v-8H5z" },
  { label: "Mobile App Development",  desc: "Flutter, React Native, iOS & Android",   href: "/services/mobile-app-development", icon: "M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm5 17a1 1 0 110-2 1 1 0 010 2z" },
  { label: "QA & Testing",            desc: "E2E, load, security & performance",      href: "/services/qa-testing",            icon: "M9 12l2 2 4-4M7 3h10l1 4H6L7 3zM5 9h14v12H5V9z" },
  { label: "DevOps Services",         desc: "CI/CD, Kubernetes, AWS, Terraform",      href: "/services/devops",                icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { label: "Blockchain Development",  desc: "Smart contracts, DeFi, NFT, RWA",       href: "/services/blockchain",            icon: "M13 10V3L4 14h7v7l9-11h-7z" },
];

const NAV_LINKS = [
  { label: "Home",     id: "home"    },
  { label: "Services", id: "services" },
  { label: "About",    id: "about"   },
  { label: "Contact",  id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("home");
  const megaRef                 = useRef<HTMLDivElement>(null);
  const closeTimer              = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname                = usePathname();
  const router                  = useRouter();
  const isHome                  = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      for (const link of [...NAV_LINKS].reverse()) {
        const el = document.getElementById(link.id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(link.id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega  = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(true); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(false), 120); };

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setMegaOpen(false);
    if (id === "about") { router.push("/about"); return; }
    if (id === "contact") { router.push("/contact"); return; }
    if (id === "home" && isHome) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    if (isHome) {
      scrollTo(id);
    } else {
      router.push("/");
      setTimeout(() => scrollTo(id), 320);
    }
  };

  const isActiveLink = (id: string) => {
    if (id === "about")   return pathname === "/about";
    if (id === "contact") return pathname === "/contact";
    return isHome && active === id;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(7,9,26,0.97)" : "rgba(7,9,26,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => handleNav("home")} className="flex items-center" style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src="/assets/Logo.svg" alt="Pluginfy" className="h-7 sm:h-8 w-auto" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((item) => {
            const active_ = isActiveLink(item.id);
            if (item.id === "services") {
              return (
                <div key={item.label} className="relative" ref={megaRef} onMouseEnter={openMega} onMouseLeave={closeMega}>
                  <button
                    onClick={() => setMegaOpen((v) => !v)}
                    className="flex items-center gap-1 text-sm font-medium transition-colors duration-150"
                    style={{ fontFamily: "var(--font-heading)", color: megaOpen || pathname.startsWith("/services") ? "#F5C518" : "rgba(255,255,255,0.72)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  >
                    {item.label}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: megaOpen ? "rotate(180deg)" : "none" }}>
                      <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Mega menu — full navbar width, anchored to left edge of nav */}
                  {megaOpen && (
                    <div
                      onMouseEnter={openMega}
                      onMouseLeave={closeMega}
                      className="rounded-2xl overflow-hidden shadow-2xl"
                      style={{
                        position: "fixed",
                        top: 64,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "min(1600px, 96vw)",
                        background: "white",
                        border: "1px solid rgba(0,0,0,0.08)",
                        zIndex: 100,
                      }}
                    >
                      <div className="grid grid-cols-2 gap-0 p-6 sm:p-8">
                        {SERVICE_LINKS.map((s) => (
                          <Link key={s.href} href={s.href} onClick={() => setMegaOpen(false)}
                            className="flex items-start gap-4 px-4 py-4 rounded-xl transition-colors hover:bg-[#F9F9F9]"
                            style={{ textDecoration: "none" }}
                          >
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,197,24,0.12)", border: "1px solid rgba(245,197,24,0.25)" }}>
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d={s.icon} stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-heading font-bold" style={{ fontFamily: "var(--font-heading)", color: "#07091A", fontSize: "0.95rem", lineHeight: 1.3 }}>{s.label}</p>
                              <p className="mt-1" style={{ color: "rgba(7,9,26,0.45)", fontSize: "0.82rem", lineHeight: 1.5 }}>{s.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      {/* CTA strip */}
                      <div className="flex items-center justify-between px-8 py-4 mx-6 mb-6 rounded-xl" style={{ background: "#07091A" }}>
                        <div>
                          <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem" }}>Build the Future at the Speed of AI</p>
                          <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Create your own product with experienced engineers, just like your local team.</p>
                        </div>
                        <Link href="/contact" onClick={() => setMegaOpen(false)}
                          className="flex-shrink-0 ml-6 font-heading font-bold text-xs px-5 py-2.5 rounded-lg"
                          style={{ background: "white", color: "#07091A", fontFamily: "var(--font-heading)", whiteSpace: "nowrap" }}
                        >
                          GET STARTED
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button key={item.label} onClick={() => handleNav(item.id)}
                className="text-sm font-medium transition-colors duration-150"
                style={{ fontFamily: "var(--font-heading)", color: active_ ? "#F5C518" : "rgba(255,255,255,0.72)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="btn-primary text-sm" style={{ padding: "8px 20px" }} onClick={() => router.push("/contact")}>
            Start a Project
          </button>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col justify-center items-center gap-1.5 w-9 h-9" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-white transition-all duration-200" style={{ transform: open ? "translateY(8px) rotate(45deg)" : "none" }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-200" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-0.5 bg-white transition-all duration-200" style={{ transform: open ? "translateY(-8px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "600px" : "0px" }}>
        <div className="px-4 pb-5 pt-2 flex flex-col gap-1" style={{ background: "#07091A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {NAV_LINKS.filter((n) => n.id !== "services").map((item) => (
            <button key={item.label} onClick={() => handleNav(item.id)}
              className="text-sm font-medium py-2.5 px-3 rounded-lg transition-colors text-left w-full"
              style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.8)", background: "none", border: "none", cursor: "pointer" }}
            >
              {item.label}
            </button>
          ))}
          {/* Services in mobile */}
          <p className="text-xs font-bold px-3 pt-3 pb-1" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}>SERVICES</p>
          {SERVICE_LINKS.map((s) => (
            <Link key={s.href} href={s.href} onClick={() => setOpen(false)}
              className="text-sm py-2 px-3 rounded-lg block"
              style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
            >
              {s.label}
            </Link>
          ))}
          <button className="btn-primary text-sm mt-3 self-start" style={{ padding: "10px 22px" }} onClick={() => { setOpen(false); router.push("/contact"); }}>
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}