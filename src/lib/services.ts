export type ServiceCategory =
  | "AI & Automation"
  | "Software Engineering"
  | "Business Platforms"
  | "Infrastructure & Cloud"
  | "Integration & APIs";

export type ServiceIconName =
  | "ai"
  | "code"
  | "erp"
  | "cart"
  | "php"
  | "python"
  | "react"
  | "cloud"
  | "plug";

export interface ServiceSummary {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ServiceCategory;
  icon: ServiceIconName;
  highlights: string[];
  techStack: { name: string; color: string }[];
}

export const services: ServiceSummary[] = [
  {
    slug: "ai-development-automation",
    title: "AI Development & Automation",
    tagline: "AI that creates real business value.",
    description:
      "Build smarter workflows, automate repetitive work and turn AI into a competitive advantage. From AI agents and LLM-powered applications to document processing and complex workflow automation, we integrate artificial intelligence into the systems your business already depends on.",
    category: "AI & Automation",
    icon: "ai",
    highlights: [
      "AI Agents & Assistants",
      "Generative AI Applications",
      "LLM Development & Integration",
      "Business Process Automation",
      "Retrieval-Augmented Generation (RAG)",
      "Intelligent Document Processing",
      "AI Chatbots",
      "Machine Learning Solutions",
    ],
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "OpenAI", color: "#74AA9C" },
      { name: "LLMs", color: "#F5C518" },
      { name: "LangChain", color: "#1C7C3C" },
      { name: "Vector Databases", color: "#6C5CE7" },
      { name: "AWS / Azure / GCP", color: "#FF9900" },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Software designed around your business.",
    description:
      "When off-the-shelf software doesn't fit, we build what does. From an initial idea to a production-ready application, our engineers handle architecture, frontend and backend development, integrations, infrastructure and deployment.",
    category: "Software Engineering",
    icon: "code",
    highlights: [
      "SaaS Platforms",
      "Enterprise Applications",
      "Internal Business Software",
      "Customer & Partner Portals",
      "Management Platforms",
      "Dashboards & Analytics",
      "Multi-Tenant Applications",
      "Legacy Software Modernization",
    ],
    techStack: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "Python", color: "#3776AB" },
      { name: "Node.js", color: "#8CC84B" },
      { name: "React", color: "#61DAFB" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Docker", color: "#2496ED" },
    ],
  },
  {
    slug: "frontend-development",
    title: "React, Next.js & Vue.js Development",
    tagline: "Frontend that feels fast.",
    description:
      "Users judge software in seconds. We develop responsive, high-performance interfaces using React, Next.js and Vue.js for SaaS platforms, enterprise applications, dashboards and e-commerce experiences.",
    category: "Software Engineering",
    icon: "react",
    highlights: [
      "React Development",
      "Next.js Development",
      "Vue.js Development",
      "SaaS Frontends",
      "Enterprise Dashboards",
      "Headless E-Commerce",
      "Progressive Web Applications",
      "Performance Optimization",
    ],
    techStack: [
      { name: "React", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "Vue.js", color: "#42B883" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Node.js", color: "#8CC84B" },
      { name: "AWS / Vercel", color: "#FF9900" },
    ],
  },
  {
    slug: "laravel-php-development",
    title: "Laravel & PHP Development",
    tagline: "Serious backend systems, built to last.",
    description:
      "We build robust backend systems using Laravel and PHP for businesses that need reliable, scalable and maintainable software. From new SaaS products to complex ERP platforms and existing application modernization, our engineers work across the complete PHP ecosystem.",
    category: "Software Engineering",
    icon: "php",
    highlights: [
      "Custom Laravel Applications",
      "Laravel SaaS Development",
      "Laravel ERP Development",
      "REST API Development",
      "E-Commerce Backends",
      "Third-Party Integrations",
      "Legacy PHP Modernization",
      "Architecture & Code Refactoring",
    ],
    techStack: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "PHP", color: "#777BB4" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Redis", color: "#D82C20" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
  {
    slug: "python-development",
    title: "Python Development",
    tagline: "For AI, automation & scalable backends.",
    description:
      "Python powers some of today's most capable AI, automation and data platforms. We use Python to develop intelligent applications, backend services, APIs, automation systems and data-processing solutions.",
    category: "Software Engineering",
    icon: "python",
    highlights: [
      "AI Application Development",
      "LLM Integrations",
      "Automation Software",
      "Backend Development",
      "REST APIs",
      "Data Processing & Extraction",
      "Machine Learning",
      "Microservices",
    ],
    techStack: [
      { name: "Python", color: "#3776AB" },
      { name: "OpenAI", color: "#74AA9C" },
      { name: "LangChain", color: "#1C7C3C" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    tagline: "An ERP built around how your business works.",
    description:
      "Stop forcing your operations into software that wasn't designed for them. We develop custom ERP solutions that connect departments, automate processes and provide a single source of truth across your organization.",
    category: "Business Platforms",
    icon: "erp",
    highlights: [
      "CRM & Sales",
      "Inventory Management",
      "Purchasing & Procurement",
      "Warehouse Management",
      "HR & Employee Management",
      "Manufacturing Workflows",
      "Reporting & Analytics",
      "Role & Permission Management",
    ],
    techStack: [
      { name: "Laravel", color: "#FF2D20" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "React", color: "#61DAFB" },
      { name: "Redis", color: "#D82C20" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "E-Commerce Development",
    tagline: "Commerce platforms built to sell and scale.",
    description:
      "We build everything from custom storefronts to complex B2B platforms, marketplaces and deeply integrated commerce ecosystems. High-performance solutions for businesses that need more than a standard online store.",
    category: "Business Platforms",
    icon: "cart",
    highlights: [
      "Custom E-Commerce Development",
      "B2B & B2C Stores",
      "Multi-Vendor Marketplaces",
      "Headless Commerce",
      "Custom Checkout Development",
      "Payment Integrations",
      "ERP & Inventory Integrations",
      "Subscription Commerce",
    ],
    techStack: [
      { name: "Shopify", color: "#7AB55C" },
      { name: "Magento", color: "#EB5202" },
      { name: "WooCommerce", color: "#96588A" },
      { name: "BigCommerce", color: "#5B45C4" },
      { name: "Shopware", color: "#189EFF" },
      { name: "PrestaShop", color: "#DF0067" },
    ],
  },
  {
    slug: "plugin-api-development",
    title: "Plugin & API Development",
    tagline: "Connect the software your business depends on.",
    description:
      "Modern companies rely on dozens of platforms. The problem begins when those platforms don't communicate. We develop custom plugins, APIs and integrations that connect software, synchronize information and automate business processes.",
    category: "Integration & APIs",
    icon: "plug",
    highlights: [
      "REST API Development",
      "API Architecture",
      "Third-Party API Integration",
      "Payment & ERP APIs",
      "Marketplace & Shipping APIs",
      "Webhooks",
      "Authentication",
      "Data Synchronization",
    ],
    techStack: [
      { name: "REST APIs", color: "#F5C518" },
      { name: "Shopify", color: "#7AB55C" },
      { name: "WooCommerce", color: "#96588A" },
      { name: "Magento", color: "#EB5202" },
      { name: "Webhooks", color: "#2496ED" },
      { name: "Data Sync", color: "#42B883" },
    ],
  },
  {
    slug: "devops-cloud",
    title: "DevOps & Cloud Engineering",
    tagline: "Ship with confidence.",
    description:
      "We help businesses automate deployment, modernize infrastructure and operate scalable cloud environments. Infrastructure shouldn't become the reason your product can't move quickly.",
    category: "Infrastructure & Cloud",
    icon: "cloud",
    highlights: [
      "CI/CD Implementation",
      "Cloud Architecture",
      "AWS, Azure & Google Cloud",
      "Docker & Kubernetes",
      "Infrastructure as Code",
      "Terraform",
      "Cloud Migration",
      "Monitoring & Logging",
    ],
    techStack: [
      { name: "AWS", color: "#FF9900" },
      { name: "Azure", color: "#0089D6" },
      { name: "Google Cloud", color: "#4285F4" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "Terraform", color: "#7B42BC" },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "AI & Automation",
  "Software Engineering",
  "Business Platforms",
  "Infrastructure & Cloud",
  "Integration & APIs",
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServiceHref(slug: string) {
  return `/services/${slug}`;
}