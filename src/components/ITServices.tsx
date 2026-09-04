import Link from "next/link";

const services = [
  {
    title: "AI & ML Development",
    icon: "🤖",
    desc: "We help you turn your data into something useful. Predictive models that catch issues early, computer vision that sees what humans miss, and LLM agents that handle the boring parts.",
    projects: ["SaaS Platforms", "Enterprise ERPs", "E-commerce Stores"],
    tools: [
      { name: "Python", icon: "/assets/tools/1.png", color: "#3776AB" },
      { name: "OpenAI", icon: "/assets/tools/2.png", color: "#74AA9C" },
      { name: "TensorFlow", icon: "/assets/tools/3.png", color: "#FF6F00" },
      { name: "PyTorch", icon: "/assets/tools/4.png", color: "#EE4C2C" },
      { name: "LangChain", icon: "/assets/tools/5.png", color: "#FFFFFF" },
    ],
    href: "/services/ai-ml-development",
  },

  {
    title: "Web Development",
    icon: "🖥️",
    desc: "We obsess that hold up under real traffic. We build on React, Next.js, and Node.js. SaaS dashboards, headless storefronts, internal portals, the works.",
    projects: ["SaaS Platforms", "Enterprise ERPs", "E-commerce Stores"],
    tools: [
      { name: "React", icon: "/assets/tools/6.png", color: "#61DAFB" },
      { name: "Python", icon: "/assets/tools/1.png", color: "#3776AB" },
      { name: "PostgreSQL", icon: "/assets/tools/7.png", color: "#336791" },
    ],
    href: "/services/web-development",
  },

  {
    title: "Mobile App Development",
    icon: "📱",
    desc: "iOS, Android, or both. We pick the right approach (Swift, Kotlin, Flutter, or React Native) based on what your product actually needs, not what's trending.",
    projects: ["SaaS Platforms", "Enterprise ERPs", "E-commerce Stores"],
    tools: [
      { name: "Flutter", icon: "/assets/tools/8.png", color: "#54C5F8" },
      { name: "React Native", icon: "/assets/tools/9.png", color: "#61DAFB" },
      { name: "Swift", icon: "/assets/tools/10.png", color: "#FA7343" },
      { name: "React", icon: "/assets/tools/6.png", color: "#61DAFB" },
    ],
    href: "/services/mobile-app-development",
  },

  {
    title: "QA & Testing",
    icon: "🧪",
    desc: "Testing isn't an afterthought. Functional, performance, and security checks run inside every sprint, so bugs don't pile up at the end.",
    projects: ["Automated Regression Suites", "Performance Load Testing"],
    tools: [
      { name: "Selenium", icon: "/assets/tools/11.png", color: "#43B02A" },
      { name: "Cypress", icon: "/assets/tools/12.png", color: "#69D3A7" },
      { name: "Jest", icon: "/assets/tools/13.png", color: "#C21325" },
      { name: "k6", icon: "/assets/tools/14.png", color: "#7D64FF" },
    ],
    href: "/services/qa-testing",
  },

  {
    title: "DevOps Services",
    icon: "☁️",
    desc: "Faster deploys, lower cloud bills. We set up DevOps on AWS, Azure, or GCP so your team can ship without waiting on infrastructure.",
    projects: ["CI/CD Pipeline Automation", "Serverless Architectures", "Migrations"],
    tools: [
      { name: "AWS", icon: "/assets/tools/15.png", color: "#FF9900" },
      { name: "Terraform", icon: "/assets/tools/16.png", color: "#7B42BC" },
      { name: "Docker", icon: "/assets/tools/17.png", color: "#2496ED" },
      { name: "Kubernetes", icon: "/assets/tools/18.png", color: "#326CE5" },
       { name: "Kubernetes", icon: "/assets/tools/19.png", color: "#326CE5" },
        { name: "Kubernetes", icon: "/assets/tools/20.png", color: "#326CE5" },
    ],
    href: "/services/devops",
  },

  {
    title: "Blockchain Development",
    icon: "☁️",
    desc: "Smart contracts and Web3, audited the way institutions need them. DeFi platforms, NFT marketplaces, and on-chain ledgers, secure by design.",
    projects: ["DeFi Platforms", "NFT Marketplaces", "Secure Digital Ledgers"],
    tools: [
      { name: "Solidity", icon: "/assets/tools/21.png", color: "#FFFFFF" },
      { name: "Ethereum", icon: "/assets/tools/22.png", color: "#627EEA" },
      { name: "IPFS", icon: "/assets/tools/23.png", color: "#65C2CB" },
      { name: "Hardhat", icon: "/assets/tools/24.png", color: "#FFF100" },
    ],
    href: "/services/blockchain",
  },
];

export default function ITServices() {
  return (
    <section
      className="py-16 sm:py-24"
      style={{
        background: "#07091A",
        fontFamily: "var(--font-body)",
      }}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2
          className="font-bold mb-8 sm:mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.7rem, 4vw, 40px)",
            lineHeight: 1.05,
            color: "#fff",
          }}
        >
          We Offer a Wide <br />
          Variety of{" "}
          <span style={{ color: "#F5C518" }}>
            IT Services
          </span>
        </h2>

        {/* Services Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            bg-[#101324]
          "
          style={{
            borderTop: "1px solid rgba(255,255,255,0.20)",
            borderLeft: "1px solid rgba(255,255,255,0.20)",
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="
                relative
                flex
                flex-col
                min-h-[330px]
                p-5
                sm:p-6
                transition-all
                duration-300
                hover:bg-white/[0.02]
              "
              style={{
                borderRight: "1px solid rgba(255,255,255,0.14)",
                borderBottom: "1px solid rgba(255,255,255,0.14)",
              }}
            >

              {/* Icon */}
              <div
                className="flex items-center justify-start mb-3"
                style={{
                  height: "28px",
                  fontSize: "21px",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-bold mb-2"
                style={{
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontSize: "18px",
                  lineHeight: 1.25,
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="mb-5"
                style={{
                  color: "rgba(255,255,255,0.62)",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: 1.55,
                  maxWidth: "100%",
                }}
              >
                {service.desc}
              </p>

              {/* Projects */}
              <div className="mb-4">
                <p
                  className="mb-2 font-semibold"
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                  }}
                >
                  Projects
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.projects.map((project) => (
                    <span
                      key={project}
                      style={{
                        color: "rgba(255,255,255)",
                        background: "rgba(255,255,255,0.025)",
                        border: "1px solid rgba(255,255,255,0.15)",
                        padding: "14px 20px",
                        fontSize: "10px",
                        lineHeight: 1.2,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <p
                  className="mb-2 font-semibold"
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-heading)",
                    fontSize: "1rem",
                  }}
                >
                  Tools We Use
                </p>

                <div className="flex items-center gap-3">
                  {service.tools.map((tool) => {

                    return (
                      <div className="flex items-center gap-3">
                        <img
                          key={tool.name}
                          src={tool.icon}
                          alt={tool.name}
                          title={tool.name}
                          width={20}
                          height={20}
                          className="object-contain"
                          style={{
                            width: "18px",
                            height: "18px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Explore */}
              <Link
                href={service.href}
                className="mt-auto flex items-center gap-2"
                style={{
                  color: "#fff",
                  fontFamily: "var(--font-heading)",
                  fontSize: "12px",
                  paddingTop: "16px",
                }}
              >
                <span>Explore More</span>

                <span
                  style={{
                    color: "#F5C518",
                    fontSize: "12px",
                  }}
                >
                  →
                </span>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}