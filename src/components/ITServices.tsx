"use client";

import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

const services = [
  {
    title: "AI & Automation",
    icon: "🤖",
    desc: "LLM agents, RAG pipelines, and workflow automation that plug into your existing stack — we turn your data into something useful and let AI handle the boring parts.",
    projects: ["AI Assistants & Agents", "Workflow Automation", "RAG & Knowledge Systems"],
    tools: [
      { name: "Python", icon: "/assets/tools/1.png", color: "#3776AB" },
      { name: "OpenAI", icon: "/assets/tools/2.png", color: "#74AA9C" },
      { name: "LangChain", icon: "/assets/tools/5.png", color: "#FFFFFF" },
      { name: "PyTorch", icon: "/assets/tools/4.png", color: "#EE4C2C" },
    ],
    href: "/services/ai-ml-development",
  },

  {
    title: "Custom Software",
    icon: "🖥️",
    desc: "Tailored products, SaaS platforms, and internal tools engineered to your spec. We build on React, Next.js, and Node.js so it holds up under real traffic.",
    projects: ["SaaS Platforms", "Internal Portals", "Data Dashboards"],
    tools: [
      { name: "React", icon: "/assets/tools/6.png", color: "#61DAFB" },
      { name: "Next.js", icon: "/assets/tools/6.png", color: "#FFFFFF" },
      { name: "Node.js", icon: "/assets/tools/19.png", color: "#8CC84B" },
      { name: "PostgreSQL", icon: "/assets/tools/7.png", color: "#336791" },
    ],
    href: "/services/web-development",
  },

  {
    title: "ERP & E-Commerce",
    icon: "🛒",
    desc: "End-to-end ERP solutions and high-converting e-commerce platforms — checkout, payments, inventory, and back-office systems working as one connected whole.",
    projects: ["ERP Integrations", "Headless Storefronts", "Payment & Checkout"],
    tools: [
      { name: "Laravel", icon: "/assets/tools/23.png", color: "#FF2D20" },
      { name: "React", icon: "/assets/tools/6.png", color: "#61DAFB" },
      { name: "PostgreSQL", icon: "/assets/tools/7.png", color: "#336791" },
      { name: "Vue.js", icon: "/assets/tools/8.png", color: "#42B883" },
    ],
    href: "/services/web-development",
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
        <FadeIn y={30} duration={0.6}>
          <h2
            className="font-bold mb-8 sm:mb-10"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.7rem, 4vw, 40px)",
              lineHeight: 1.05,
              color: "#fff",
            }}
          >
            What We Do
          </h2>
        </FadeIn>

        {/* Services Grid */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.20)",
            borderLeft: "1px solid rgba(255,255,255,0.20)",
          }}
        >
        <StaggerContainer
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            bg-[#101324]
          "
          staggerDelay={0.08}
        >
          {services.map((service) => (
            <StaggerItem key={service.title} className="h-full" >
              <div
                className="
                  relative
                  flex
                  flex-col
                  h-full
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
                      <div key={tool.name} className="flex items-center gap-3">
                        <img
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
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>
      </div>
    </section>
  );
}