import Link from "next/link";

const services = [
  {
    title: "AI & ML Development",
    desc: "We turn your data into something that works. Predictive models that catch issues early, intelligent chatbots, and LLM Agents that handle the boring parts.",
    tools: ["Python", "TensorFlow", "PyTorch", "OpenAI", "LangChain"],
    projects: "24", experience: "7+ Years",
    href: "/services/ai-ml-development",
  },
  {
    title: "Web Development",
    desc: "We keep that hood up under real traffic. We build on React, Next.js, and Node.js. Modular, headless, serverless, precise.",
    tools: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    projects: "58", experience: "10+ Years",
    href: "/services/web-development",
  },
  {
    title: "Mobile App Development",
    desc: "iOS, Android, or both. We pick the right approach (Flutter, React Native, or Swift/Kotlin) based on what your product actually needs.",
    tools: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"],
    projects: "31", experience: "6+ Years",
    href: "/services/mobile-app-development",
  },
  {
    title: "QA & Testing",
    desc: "Testing is baked in throughout. Functional, performance, and security checks run inside every sprint, so bugs don't pile up on launch day.",
    tools: ["Jest", "Playwright", "Cypress", "k6", "Selenium"],
    projects: "40+", experience: "8+ Years",
    href: "/services/qa-testing",
  },
  {
    title: "DevOps Services",
    desc: "Faster delivery, harder systems. We set up DevOps on AWS, Azure, or GCP so your team can ship without waiting on infrastructure.",
    tools: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
    projects: "19", experience: "5+ Years",
    href: "/services/devops",
  },
  {
    title: "Blockchain Development",
    desc: "DeFi, NFT marketplaces, tokenized assets. We research, design, and build the blockchain stack — wallets, smart contracts, and DeFi platforms.",
    tools: ["Solidity", "Ethereum", "IPFS", "Hardhat", "Web3.js"],
    projects: "12", experience: "4+ Years",
    href: "/services/blockchain",
  },
];

const toolColors: Record<string, string> = {
  Python: "#3776AB", TensorFlow: "#FF6F00", PyTorch: "#EE4C2C",
  OpenAI: "#74AA9C", LangChain: "#1C3C3C", React: "#61DAFB",
  "Next.js": "#fff", "Node.js": "#8CC84B", TypeScript: "#3178C6",
  PostgreSQL: "#336791", Flutter: "#54C5F8", "React Native": "#61DAFB",
  Swift: "#FA7343", Kotlin: "#7F52FF", Firebase: "#FFCA28",
  Jest: "#C21325", Playwright: "#45BA4B", Cypress: "#69D3A7",
  k6: "#7D64FF", Selenium: "#43B02A", AWS: "#FF9900",
  Terraform: "#7B42BC", Docker: "#2496ED", Kubernetes: "#326CE5",
  "GitHub Actions": "#2088FF", Solidity: "#363636", Ethereum: "#627EEA",
  IPFS: "#65C2CB", Hardhat: "#FFF100", "Web3.js": "#F16822",
};

export default function ITServices() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#07091A" }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
        <p className="section-label mb-3">What we do</p>
        <h2
          className="font-heading font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem,4vw,2.4rem)", color: "white" }}
        >
          We Offer a Wide Variety of{" "}
          <span style={{ color: "#F5C518" }}>IT Services</span>
        </h2>
        <p className="mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.9rem" }}>
          From ideation to deployment, we cover every layer of the stack.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="card-dark p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{ borderRadius: "14px" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(245,197,24,0.12)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="6" stroke="#F5C518" strokeWidth="1.5" />
                    <path d="M5 8h6M8 5v6" stroke="#F5C518" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "0.97rem" }}>
                  {s.title}
                </h3>
              </div>

              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.83rem", lineHeight: 1.68, flex: 1 }}>{s.desc}</p>

              <div className="flex gap-4 text-xs" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-heading)" }}>
                <span><span style={{ color: "#F5C518", fontWeight: 700 }}>{s.projects}</span> Projects</span>
                <span>{s.experience}</span>
              </div>

              <div>
                <p className="text-xs mb-2 font-semibold" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-heading)" }}>Tools We Use</p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${toolColors[t] || "#444"}22`, border: `1px solid ${toolColors[t] || "#444"}44`, color: toolColors[t] || "#aaa" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Link href={s.href} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>
                Explore More
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}