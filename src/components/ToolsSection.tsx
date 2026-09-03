const openAiIcon = (
  <svg width="36" height="36" viewBox="0 0 38 38" fill="none">
    <path d="M35.2 15.6a9.4 9.4 0 0 0-.8-7.7 9.5 9.5 0 0 0-10.2-4.6A9.5 9.5 0 0 0 17 .8a9.5 9.5 0 0 0-9 6.3 9.5 9.5 0 0 0-6.3 4.6 9.6 9.6 0 0 0 1.2 11.3 9.4 9.4 0 0 0 .8 7.7 9.5 9.5 0 0 0 10.2 4.6A9.5 9.5 0 0 0 21 37.2a9.5 9.5 0 0 0 9.1-6.6 9.5 9.5 0 0 0 6.3-4.6 9.6 9.6 0 0 0-1.2-10.4zm-14.1 19.7a7 7 0 0 1-4.5-1.6l.2-.1 7.5-4.3a1.2 1.2 0 0 0 .6-1.1V17.5l3.2 1.8v8.8a7.1 7.1 0 0 1-7 7.2zM5.5 29.4a7 7 0 0 1-.8-4.7l.2.1 7.5 4.3c.4.2.8.2 1.2 0l9.1-5.3v3.6l-7.6 4.4a7.1 7.1 0 0 1-9.6-2.4zm-1-16.3a7 7 0 0 1 3.7-3.1v8.8c0 .4.2.9.6 1.1l9.1 5.3-3.2 1.8-7.5-4.4a7.1 7.1 0 0 1-2.7-9.5zm23.6 6.1L19 13.9l3.2-1.8 7.5 4.3a7 7 0 0 1-1.1 12.7V20c0-.5-.2-.9-.5-1.1zm3.1-4.8-.2-.1-7.5-4.3a1.2 1.2 0 0 0-1.2 0L13.2 15V11.4l7.6-4.4a7 7 0 0 1 10.4 7.3zM11.6 20.5l-3.2-1.8v-8.8a7 7 0 0 1 11.5-5.4l-.2.1-7.5 4.3a1.2 1.2 0 0 0-.6 1.1v10.5zm1.7-3.7 4-2.3 4 2.3v4.6l-4 2.3-4-2.3v-4.6z" fill="white" />
  </svg>
);

const tools = [
  { name: "OpenAI", icon: openAiIcon },
  { name: "Meta", svgUrl: "/assets/meta.svg" },
  { name: "Cursor", svgUrl: "/assets/cursor.svg" },
  { name: "Claude", svgUrl: "/assets/claude.svg" },
  { name: "Perplexity", svgUrl: "/assets/perplexity.svg" },
  { name: "Microsoft Azure", svgUrl: "/assets/azure.svg" },
  { name: "Gemini", svgUrl: "/assets/gemini.svg" },
  { name: "Google Vertex AI", svgUrl: "/assets/vertex.svg" },
  { name: "AWS Bedrock", svgUrl: "/assets/aws.svg" },
  { name: "Qodo", svgUrl: "/assets/qodo.svg" },
];

const COLS = 5; // desktop columns

export default function ToolsSection() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: "#05080F" }}>
      <div className="absolute right-0 top-0 bottom-0 opacity-50 pointer-events-none w-1/3 hidden md:block">
        <img src="/assets/bg_logo_shape.svg" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6">
        <h2
          className="font-heading font-bold mb-8 sm:mb-10"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,40px)", color: "white", lineHeight: 1.2 }}
        >
          The tools we ship{" "}<br />
          <span style={{ color: "#F5C518" }}>production</span> with.
        </h2>

        {/* Desktop: 5×2 bordered grid */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            border: "1px solid rgba(255,255,255,0.2)",
            overflow: "hidden",
          }}
        >
          {tools.map((tool, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const totalRows = Math.ceil(tools.length / COLS);
            return (
              <div
                key={tool.name}
                className="p-5 xl:p-6 flex flex-col gap-3 bg-[#101324] hover:bg-white/[0.03] transition-colors duration-150"
                style={{
                  borderRight: col < COLS - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                  borderBottom: row < totalRows - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
                }}
              >
                <div style={{ height: 36, display: "flex", alignItems: "center" }}>
                  {"svgUrl" in tool ? (
                    <img src={tool.svgUrl} alt={tool.name} style={{ height: 36, width: "auto", maxWidth: 120, objectFit: "contain" }} />
                  ) : tool.icon}
                </div>
                <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "18px" }}>{tool.name}</p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px", lineHeight: 1.6 }}>GPT-5, o3, Realtime,<br />Fine-Tuning</p>
              </div>
            );
          })}
        </div>

        {/* Mobile / tablet: 2-col card grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:hidden">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="p-4 flex flex-col gap-3"
              style={{ background: "#101324", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <div style={{ height: 32, display: "flex", alignItems: "center" }}>
                {"svgUrl" in tool ? (
                  <img src={tool.svgUrl} alt={tool.name} style={{ height: 30, width: "auto", maxWidth: 100, objectFit: "contain" }} />
                ) : tool.icon}
              </div>
              <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "18px" }}>{tool.name}</p>
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "15px", lineHeight: 1.55 }}>GPT-5, o3, Realtime,<br />Fine-Tuning</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}