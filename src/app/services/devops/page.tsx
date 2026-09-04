import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Services",
  description:
    "DevOps services — CI/CD pipelines, Kubernetes, AWS, Terraform and infrastructure as code. Faster delivery and harder systems with automated deploys and full monitoring.",
  alternates: { canonical: "/services/devops" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Pipeline nodes */}
    {[
      { cx: 70,  cy: 170, label: "Code",    color: "#F5C518" },
      { cx: 160, cy: 170, label: "Build",   color: "#61DAFB" },
      { cx: 250, cy: 170, label: "Test",    color: "#45BA4B" },
      { cx: 340, cy: 170, label: "Deploy",  color: "#FF9900" },
    ].map((n, i, arr) => (
      <g key={n.label}>
        {i < arr.length - 1 && (
          <line x1={n.cx + 28} y1={n.cy} x2={arr[i+1].cx - 28} y2={n.cy} stroke="rgba(245,197,24,0.3)" strokeWidth="2" strokeDasharray="5 3" />
        )}
        <circle cx={n.cx} cy={n.cy} r="28" fill="rgba(7,9,26,0.9)" stroke={n.color} strokeWidth="1.5" />
        <circle cx={n.cx} cy={n.cy} r="20" fill={`${n.color}15`} />
        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill={n.color} fontSize="8" fontFamily="monospace" fontWeight="bold">{n.label}</text>
      </g>
    ))}
    {/* Top branch - containers */}
    <path d="M250 142 L250 90 L340 90" stroke="rgba(245,197,24,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    <rect x="298" y="68" width="60" height="22" rx="6" fill="rgba(36,150,237,0.15)" stroke="#2496ED" strokeWidth="1" />
    <text x="328" y="83" textAnchor="middle" fill="#2496ED" fontSize="8" fontFamily="monospace">Docker</text>
    {/* Bottom branch - infra */}
    <path d="M160 198 L160 250 L250 250" stroke="rgba(245,197,24,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    <rect x="210" y="238" width="72" height="22" rx="6" fill="rgba(123,66,188,0.15)" stroke="#7B42BC" strokeWidth="1" />
    <text x="246" y="253" textAnchor="middle" fill="#7B42BC" fontSize="8" fontFamily="monospace">Terraform</text>
    {/* Monitoring ring at right */}
    <circle cx="340" cy="280" r="30" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
    <text x="340" y="284" textAnchor="middle" fill="rgba(245,197,24,0.8)" fontSize="8" fontFamily="monospace">Monitor</text>
    <path d="M340 198 L340 250" stroke="rgba(245,197,24,0.2)" strokeWidth="1" strokeDasharray="3 3" />
    {/* Uptime badge */}
    <rect x="55" y="218" width="76" height="22" rx="11" fill="rgba(39,201,63,0.12)" stroke="#27C93F" strokeWidth="1" />
    <text x="93" y="233" textAnchor="middle" fill="#27C93F" fontSize="9" fontFamily="monospace">99.97% up</text>
    {/* K8s pods */}
    {[80,110,140].map((x,i) => (
      <g key={i}>
        <rect x={x} y="68" width="22" height="22" rx="4" fill="rgba(50,108,229,0.12)" stroke="#326CE5" strokeWidth="0.8" />
        <text x={x+11} y="83" textAnchor="middle" fill="#326CE5" fontSize="7" fontFamily="monospace">pod</text>
      </g>
    ))}
    <text x="110" y="60" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">Kubernetes</text>
    <path d="M110 90 L160 142" stroke="rgba(50,108,229,0.3)" strokeWidth="1" strokeDasharray="3 3" />
  </svg>
);

const data: ServicePageData = {
  title: "DevOps Services",
  tagline: "Faster delivery. Harder systems.",
  heroDesc: "We set up DevOps on AWS, Azure, or GCP so your team ships without waiting on infrastructure. CI/CD pipelines, infrastructure-as-code, and zero-downtime deployments — done right the first time.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "19+", label: "Projects Delivered" },
    { val: "5+", label: "Years Experience" },
    { val: "99.97%", label: "Uptime Achieved" },
    { val: "12×", label: "Faster Deploy Cycles" },
  ],
  techStack: [
    { name: "AWS", color: "#FF9900", desc: "Primary cloud" },
    { name: "Terraform", color: "#7B42BC", desc: "Infrastructure as code" },
    { name: "Docker", color: "#2496ED", desc: "Containerisation" },
    { name: "Kubernetes", color: "#326CE5", desc: "Orchestration" },
    { name: "GitHub Actions", color: "#2088FF", desc: "CI/CD pipelines" },
    { name: "Prometheus", color: "#E6522C", desc: "Monitoring & alerts" },
  ],
  process: [
    { step: "01", title: "Infrastructure Audit", desc: "We map your current deployment process, identify bottlenecks and single points of failure, and produce a written remediation plan before touching anything." },
    { step: "02", title: "CI/CD Pipeline Setup", desc: "Automated build, test, and deploy pipelines. Every merge to main triggers a deployment to staging; production requires one manual gate." },
    { step: "03", title: "Infrastructure as Code", desc: "Every cloud resource defined in Terraform. Reproducible environments, no snowflake servers, and a full audit trail of every infrastructure change." },
    { step: "04", title: "Monitoring & Runbooks", desc: "Prometheus + Grafana dashboards, PagerDuty alerting, and documented runbooks for every on-call scenario your team might face." },
  ],
  caseStudies: [
    { client: "Deloitte", tag: "Enterprise Cloud", accent: "#86BC25", result: "Migrated AI governance platform across 18 countries to multi-region AWS. Zero data loss, zero downtime during migration window.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&auto=format", testimonial: "Our deployment process went from a 3-hour anxiety-inducing ritual to a 6-minute automated pipeline. The team can ship 5 times a day if they want to.", author: "Priya Nair", role: "Director, Deloitte AI Practice" },
    { client: "Dataligence", tag: "Data Infrastructure", accent: "#00C4CC", result: "Rebuilt ingestion pipeline infrastructure on Kubernetes. Auto-scaling cut cloud costs by 38% while handling 2B+ events per day.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format", testimonial: "Pluginfy's Kubernetes setup auto-scales our ingestion pods based on event volume. Our cloud bill dropped 38% the first month.", author: "Chris Hartmann", role: "CTO, Dataligence" },
    { client: "Honeywell", tag: "IoT Platform Ops", accent: "#E2231A", result: "Set up edge-to-cloud DevOps for 120K+ sensor fleet. Mean time to recovery dropped from 4 hours to under 8 minutes.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format", testimonial: "When a sensor cluster went offline at 2am, the runbook Pluginfy wrote got our on-call engineer to resolution in 7 minutes. That's the real value.", author: "Linda Caruso", role: "VP Digital Products, Honeywell" },
  ],
  faqs: [
    { q: "Which cloud providers do you support?", a: "AWS, GCP, and Azure. We're cloud-agnostic at the infrastructure level — Terraform handles provider abstraction cleanly." },
    { q: "Can you migrate us from one cloud to another?", a: "Yes. We've completed zero-downtime cloud migrations for enterprise clients. The key is a dry-run migration with full rollback capability before the real cutover." },
    { q: "Do you set up the monitoring too?", a: "Yes — Prometheus, Grafana dashboards, and PagerDuty alerting are part of our standard DevOps engagement. We don't ship infrastructure without observability." },
    { q: "What about Kubernetes — is it always the right choice?", a: "Not always. For smaller workloads, ECS or App Runner is simpler and cheaper. We recommend Kubernetes when you have 10+ microservices or need sophisticated autoscaling." },
  ],
};

export default function DevOpsPage() {
  return <ServicePage data={data} />;
}