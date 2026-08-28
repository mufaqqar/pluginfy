const logos = [
  { url: "/assets/1.svg", name: "Discord" },
  { url: "/assets/deloitte.svg", name: "Deloitte" },
  { url: "/assets/dataligence.svg", name: "Dataintelligence" },
  { url: "/assets/2.svg", name: "Crimson" },
  { url: "/assets/3.svg", name: "Honeywell" },
  { url: "/assets/4.svg", name: "DocDraft" },
  { url: "/assets/5.svg", name: "Thistle" },
  { url: "/assets/6.svg", name: "DoNotPay" },
];

export default function TrustedBy() {
  return (
    <section
      style={{
        background: "#07091A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}
    >
      <div className="py-10">
        <p
          className="text-center text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}
        >
          THEY TRUSTED US
        </p>

        {/* Marquee track */}
        <div className="relative" style={{ maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)" }}>
          <div
            className="flex"
            style={{
              animation: "marquee 28s linear infinite",
              width: "max-content",
            }}
          >
            {/* Two identical sets for seamless loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center flex-shrink-0"
                style={{ padding: "0 48px", height: 40 }}
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="hover:opacity-85"
                  style={{
                    height: 22,
                    width: "auto",
                    opacity: 0.45,
                    filter: "brightness(0) invert(1)",
                    transition: "opacity 0.2s",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}