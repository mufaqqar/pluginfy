"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

interface MenuItem {
  label: string;
  desc: string;
  href: string;
  icon: ReactNode;
}

const iconStyle = { width: 18, height: 18, display: "block" } as const;

const aiIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M18.5 15l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2z" stroke="#F5C518" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

const codeIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M8 6l-4 4 4 4M16 6l4 4-4 4M13 5l-2 14" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const erpIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
    <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
    <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
    <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#F5C518" strokeWidth="1.5" />
  </svg>
);

const cartIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M3 3h2l1.6 10.2a2 2 0 0 0 2 1.8h8.9a2 2 0 0 0 2-1.6L21 7H6" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="10" cy="20" r="1.4" stroke="#F5C518" strokeWidth="1.4" />
    <circle cx="18" cy="20" r="1.4" stroke="#F5C518" strokeWidth="1.4" />
  </svg>
);

const plugIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M9 7.5a2 2 0 1 1 4 0V9h3.5a1.5 1.5 0 0 1 0 3H15v.5a2 2 0 1 1-4 0V12H7.5a1.5 1.5 0 0 1 0-3H9V7.5z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const browserIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#F5C518" strokeWidth="1.5" />
    <path d="M3 8.5h18M6.5 6h.01M9.5 6h.01" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 15l3-3-3-3M12.5 15l2.5-3-2.5-3" stroke="#F5C518" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const cloudIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M7 18a4 4 0 0 1-.6-7.96 5.5 5.5 0 0 1 10.7 1.3A3.8 3.8 0 0 1 17 18H7z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="12" cy="14" r="1.6" stroke="#F5C518" strokeWidth="1.3" />
  </svg>
);

const reactIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#F5C518" strokeWidth="1.3" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="1.4" fill="#F5C518" />
  </svg>
);

const nodeIcon = (
  <svg viewBox="0 0 24 24" fill="none" style={iconStyle}>
    <path d="M12 2.5l8 4.5v9l-8 4.5-8-4.5v-9l8-4.5z" stroke="#F5C518" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 2.5v9l8 4.5M12 11.5L4 16" stroke="#F5C518" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
);

const letterIcon = (letter: string) => (
  <span className="font-heading font-extrabold" style={{ fontFamily: "var(--font-heading)", fontSize: 13, color: "#F5C518", lineHeight: 1 }}>{letter}</span>
);

const SERVICE_LINKS: MenuItem[] = [
  { label: "AI & Automation", desc: "LLM agents, RAG, workflow automation", href: "/services/ai-ml-development", icon: aiIcon },
  { label: "Custom Software Development", desc: "Tailored products built to your spec", href: "/services/web-development", icon: codeIcon },
  { label: "ERP Solutions", desc: "End-to-end business systems & integration", href: "/services/web-development", icon: erpIcon },
  { label: "E-Commerce Development", desc: "Stores, checkout, payments & CX", href: "/services/web-development", icon: cartIcon },
  { label: "Plugins & Integrations", desc: "Extend and connect your stack", href: "/services/web-development", icon: plugIcon },
  { label: "Web Application Development", desc: "Fast, scalable React & Next.js apps", href: "/services/web-development", icon: browserIcon },
  { label: "DevOps & Cloud", desc: "CI/CD, Kubernetes, AWS, Terraform", href: "/services/devops", icon: cloudIcon },
];

const TECH_LINKS: MenuItem[] = [
  { label: "Laravel & PHP", desc: "Robust server-side frameworks", href: "/services/web-development", icon: letterIcon("L") },
  { label: "Python", desc: "AI, backend services & scripting", href: "/services/ai-ml-development", icon: letterIcon("Py") },
  { label: "React.js", desc: "Component-driven UI at scale", href: "/services/web-development", icon: reactIcon },
  { label: "Next.js", desc: "Full-stack React framework", href: "/services/web-development", icon: letterIcon("N") },
  { label: "Vue.js", desc: "Progressive UI framework", href: "/services/web-development", icon: letterIcon("V") },
  { label: "Node.js", desc: "Fast, event-driven services", href: "/services/web-development", icon: nodeIcon },
  { label: "AI & LLM Technologies", desc: "GPT-5, embeddings, agents & fine-tuning", href: "/services/ai-ml-development", icon: aiIcon },
  { label: "Cloud & DevOps", desc: "AWS, Azure, K8s & Terraform", href: "/services/devops", icon: cloudIcon },
];

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Technologies", id: "technologies" },
  { label: "About", id: "about" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function DropdownPanel({
  items,
  onClose,
}: {
  items: MenuItem[];
  onClose: () => void;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-0 p-6 sm:p-8">
        {items.map((s) => (
          <Link key={s.label} href={s.href} onClick={onClose}
            className="flex items-start gap-4 px-4 py-4 rounded-xl transition-colors hover:bg-[#F9F9F9]"
            style={{ textDecoration: "none" }}
          >
            <div className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded-lg" style={{ background: "rgba(245,197,24,0.08)", border: "1px solid rgba(245,197,24,0.22)" }}>
              {s.icon}
            </div>
            <div>
              <p className="font-heading font-bold" style={{ fontFamily: "var(--font-heading)", color: "#07091A", fontSize: "0.95rem", lineHeight: 1.3 }}>{s.label}</p>
              <p className="mt-1" style={{ color: "rgba(7,9,26,0.45)", fontSize: "0.82rem", lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          </Link>
        ))}
      </div>
      {/* CTA strip */}
      <div className="flex items-center justify-between px-8 py-5 mx-6 mb-6 rounded-xl" style={{ background: "#191919" }}>
        <div>
          <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "20px" }}>Build the Future at the Speed of AI</p>
          <p className="mt-0.5 text-xs" style={{ color: "rgba(255,255,255)" }}>Create your own product with experienced engineers, just like your local team.</p>
        </div>
        <Link href="/contact" onClick={onClose}
          className="flex-shrink-0 ml-6 font-heading font-bold text-sm uppercase px-9 py-2.5 rounded-full"
          style={{ background: "white", color: "#282828", fontFamily: "var(--font-heading)", whiteSpace: "nowrap" }}
        >
          GET STARTED
        </Link>
      </div>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<null | "services" | "technologies">(null);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

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

  const openMega = (key: "services" | "technologies") => { if (closeTimer.current) clearTimeout(closeTimer.current); setMegaOpen(key); };
  const closeMega = () => { closeTimer.current = setTimeout(() => setMegaOpen(null), 120); };

  // Close mega menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMegaOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    setMegaOpen(null);
    if (id === "about") { router.push("/about"); return; }
    if (id === "blog") { router.push("/blog"); return; }
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
    if (id === "about") return pathname === "/about";
    if (id === "blog") return pathname.startsWith("/blog");
    if (id === "contact") return pathname === "/contact";
    if (id === "technologies") return false;
    if (id === "services") return pathname.startsWith("/services");
    return isHome && active === id;
  };

  const navButtonStyle = {
    fontFamily: "var(--font-heading)",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: 0,
  } as const;

  const renderDropdownButton = (key: "services" | "technologies", label: string) => {
    const isPathActive = key === "services" && pathname.startsWith("/services");
    const dropdownOpen = megaOpen === key;
    return (
      <div key={key} className="relative" onMouseEnter={() => openMega(key)} onMouseLeave={closeMega}>
        <button
          onClick={() => setMegaOpen((v) => (v === key ? null : key))}
          className="flex items-center gap-1 text-sm font-bold uppercase transition-colors duration-150"
          style={{
            ...navButtonStyle,
            fontFamily: "var(--font-heading)",
            color: isPathActive ? "#fff" : "rgba(255,255,255,0.72)",
            borderBottom: isPathActive ? "2px solid #fff" : "2px solid transparent",
          }}
        >
          {label}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transition: "transform 0.2s", transform: dropdownOpen ? "rotate(180deg)" : "none" }}>
            <path d="M3 5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dropdown panel — full navbar width, anchored to left edge of nav */}
        {dropdownOpen && (
          <div
            onMouseEnter={() => openMega(key)}
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
            <DropdownPanel items={key === "services" ? SERVICE_LINKS : TECH_LINKS} onClose={() => setMegaOpen(null)} />
          </div>
        )}
      </div>
    );
  };

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(7,9,26,0.97)" : "rgba(7,9,26,0.85)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,255,255,0.33)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button onClick={() => handleNav("home")} className="flex items-center" style={{ background: "none", border: "none", cursor: "pointer" }}>
          <img src="/assets/Logo.svg" alt="Pluginfy" className="" />
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((item) => {
            const active_ = isActiveLink(item.id);
            if (item.id === "services" || item.id === "technologies") {
              return renderDropdownButton(item.id, item.label);
            }
            return (
              <button key={item.label} onClick={() => handleNav(item.id)}
                className="text-sm font-bold uppercase transition-colors duration-150"
                style={{
                  ...navButtonStyle,
                  fontFamily: "var(--font-heading)",
                  color: active_
                    ? "#fff"
                    : "rgba(255,255,255,0.72)",
                  borderBottom: active_
                    ? "2px solid #fff"
                    : "2px solid transparent",
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-white text-[#FEBC2E] text-sm font-bold uppercase hover:bg-[#FEBC2E] hover:text-white rounded-full btn-blink" style={{ padding: "8px 20px" }} onClick={() => router.push("/contact")}>
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
      <div className="md:hidden overflow-hidden transition-all duration-300" style={{ maxHeight: open ? "900px" : "0px" }}>
        <div className="px-4 pb-5 pt-2 flex flex-col gap-1" style={{ background: "#07091A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {NAV_LINKS.filter((n) => n.id !== "services" && n.id !== "technologies").map((item) => (
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
            <Link key={s.label} href={s.href} onClick={() => setOpen(false)}
              className="text-sm py-2 px-3 rounded-lg block"
              style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
            >
              {s.label}
            </Link>
          ))}
          {/* Technologies in mobile */}
          <p className="text-xs font-bold px-3 pt-3 pb-1" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}>TECHNOLOGIES</p>
          {TECH_LINKS.map((s) => (
            <Link key={s.label} href={s.href} onClick={() => setOpen(false)}
              className="text-sm py-2 px-3 rounded-lg block"
              style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
            >
              {s.label}
            </Link>
          ))}
          <button className="btn-primary text-sm mt-3 self-start btn-blink" style={{ padding: "10px 22px" }} onClick={() => { setOpen(false); router.push("/contact"); }}>
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}