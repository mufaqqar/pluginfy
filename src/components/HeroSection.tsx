const stats = [
  { value: "40+",  label: "Certified Engineers",             icon: "/assets/Certified_Engineers-1.svg"   },
  { value: "18+",  label: "Years of Industry Experience",    icon: "/assets/Years_of_Industry_Experience.svg" },
  { value: "85%",  label: "Client Retention Rate",           icon: "/assets/Client_Retention_Rate-1.svg" },
  { value: "20+",  label: "Industries served across 25+ countries", icon: "/assets/Industries_served_across_25_.svg" },
];

const badges = [
  { url: "/assets/goodfirms-ecom-1.svg",     alt: "GoodFirms" },
  { url: "/assets/extract__1_-1.svg",         alt: "Reliable Company" },
  { url: "/assets/clutch-deliver-1.svg",      alt: "Clutch We Deliver" },
  { url: "/assets/clutch-2020-1.svg",         alt: "Clutch Top" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "#07091A" }}
    >
      {/* Background shape */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 md:opacity-20 pointer-events-none select-none hidden sm:flex items-center justify-end">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full max-w-xl lg:max-w-2xl" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 py-6 sm:py-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left: headline */}
          <div>
            <h1
              className="font-heading font-extrabold leading-none tracking-tight mb-5 sm:mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem,8vw,5rem)",
                color: "white",
                letterSpacing: "-0.02em",
              }}
            >
              CREATIVE
              <br />
              INTELLIGENCE
              <br />
              <span style={{ color: "#F5C518" }}>IN EVERY PIXEL.</span>
            </h1>
            <p
              className="mb-7 sm:mb-8 max-w-md"
              style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.9rem,2vw,1rem)", lineHeight: 1.75 }}
            >
              We blend high-end aesthetics with technical precision to build digital experiences
              that resonate and convert.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="btn-primary">
                Start a Project
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="#07091A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="btn-outline">View Showcase</button>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 lg:mt-0">

            {/* 4 stat cards */}
            {stats.map((s) => (
              <div
                key={s.value + s.label}
                className="card-dark p-4 sm:p-5 flex flex-col justify-between"
                style={{ borderRadius: "14px", minHeight: "110px" }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="font-heading font-extrabold"
                    style={{
                      fontSize: "clamp(1.6rem,4vw,2.2rem)",
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
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", lineHeight: 1.45, marginTop: 8 }}>
                  {s.label}
                </span>
              </div>
            ))}

            {/* Rating + badges card */}
            <div
              className="card-dark p-4 sm:p-5 col-span-2"
              style={{ borderRadius: "14px" }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                {/* Stars + score */}
                <div className="flex-shrink-0">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="#F5C518">
                        <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.08L8 10.25l-3.71 2.25.71-4.08L2 5.5l4.15-.75z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className="font-heading font-bold"
                    style={{ fontSize: "1.7rem", color: "#F5C518", fontFamily: "var(--font-heading)" }}
                  >
                    5.0
                  </span>
                  <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.74rem", lineHeight: 1.4, marginTop: 2 }}>
                    Based on hundreds of reviews
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.09)" }} />

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
          </div>
        </div>
      </div>
    </section>
  );
}