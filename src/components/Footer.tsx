const nav1 = ["Services", "Industries", "Cases", "Blog"];
const nav2 = ["About", "Startups", "Careers", "Contact"];
const legal = ["Legal Notice", "Privacy Policy", "Cookie Policy", "Complaints Channel", "Quality Policy"];

const socials = [
  { label: "Facebook", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor" /> },
  { label: "Twitter",  icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" fill="currentColor" /> },
  { label: "YouTube",  icon: <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" fill="currentColor" /> },
  { label: "LinkedIn", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="currentColor" /><circle cx="4" cy="4" r="2" fill="currentColor" /></> },
];

export default function Footer() {
  return (
    <footer style={{ background: "#07091A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 pt-12 sm:pt-16">

        {/* Main grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.2fr] gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 relative">
            <img
              src="/assets/footer_bg.svg"
              alt=""
              className="absolute pointer-events-none select-none hidden sm:block"
              style={{ left: "-50px", top: "-20px", width: "380px", opacity: 1, zIndex: 0 }}
            />
            <div className="relative z-10">
              <h2
                className="font-heading font-extrabold mb-4 leading-none"
                style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(3rem,10vw,6.5rem)", color: "white", letterSpacing: "-0.03em" }}
              >
                Pluginfy
              </h2>
              <p className="mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.875rem", lineHeight: 1.72 }}>
                An AI-first technology firm engineering production-grade AI systems for enterprise, government, and high-growth clients across the US, GCC, UK, and EU.
              </p>
              <div className="flex items-center gap-5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore 1 */}
          <div>
            <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-heading)" }}>Explore</p>
            <ul className="flex flex-col gap-3">
              {nav1.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore 2 */}
          <div>
            <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-heading)" }}>Explore</p>
            <ul className="flex flex-col gap-3">
              {nav2.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <p className="text-xs sm:text-sm font-semibold mb-4 sm:mb-5" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-heading)" }}>Get in touch</p>
            <ul className="flex flex-col gap-3">
              {[
                { text: "hello@pluginfy.com",  href: "mailto:hello@pluginfy.com" },
                { text: "+92-300-4801494",     href: "tel:+923004801494" },
                { text: "307 Madina Heights.", href: "#" },
              ].map((item) => (
                <li key={item.text}>
                  <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.55)" }}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs order-2 sm:order-1" style={{ color: "rgba(255,255,255,0.28)" }}>
            © 2026 Pluginfy. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 order-1 sm:order-2">
            {legal.map((item) => (
              <a key={item} href="#" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.28)" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}