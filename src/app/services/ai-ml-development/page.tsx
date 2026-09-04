import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & ML Development",
  description:
    "AI & ML development services — predictive models, LLM agents, RAG pipelines and computer vision systems engineered for production. 24+ projects shipped, 91% average model accuracy.",
  alternates: { canonical: "/services/ai-ml-development/" },
};

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Central brain node */}
    <circle cx="210" cy="170" r="36" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
    <circle cx="210" cy="170" r="22" fill="rgba(245,197,24,0.25)" stroke="#F5C518" strokeWidth="1" />
    <text x="210" y="176" textAnchor="middle" fill="#F5C518" fontSize="14" fontWeight="bold" fontFamily="monospace">AI</text>
    {/* Satellite nodes */}
    {[
      { cx: 80,  cy: 80,  label: "ML",    r: 22 },
      { cx: 340, cy: 80,  label: "NLP",   r: 22 },
      { cx: 60,  cy: 210, label: "CV",    r: 22 },
      { cx: 360, cy: 210, label: "RAG",   r: 22 },
      { cx: 140, cy: 300, label: "LLM",   r: 22 },
      { cx: 280, cy: 300, label: "RL",    r: 22 },
    ].map((n) => (
      <g key={n.label}>
        <line x1="210" y1="170" x2={n.cx} y2={n.cy} stroke="rgba(245,197,24,0.25)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx={n.cx} cy={n.cy} r={n.r} fill="rgba(245,197,24,0.08)" stroke="rgba(245,197,24,0.5)" strokeWidth="1" />
        <text x={n.cx} y={n.cy + 5} textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10" fontFamily="monospace">{n.label}</text>
      </g>
    ))}
    {/* Floating data dots */}
    {[[130,130],[290,130],[100,250],[320,250],[170,60],[250,60]].map(([x,y],i) => (
      <circle key={i} cx={x} cy={y} r="3" fill="rgba(245,197,24,0.4)" />
    ))}
    {/* Pulse rings */}
    <circle cx="210" cy="170" r="55" stroke="rgba(245,197,24,0.08)" strokeWidth="1" />
    <circle cx="210" cy="170" r="75" stroke="rgba(245,197,24,0.05)" strokeWidth="1" />
  </svg>
);

const data: ServicePageData = {
  title: "AI & ML Development",
  tagline: "Intelligence that ships.",
  heroDesc: "We turn your data into production-grade AI. Predictive models, LLM agents, RAG pipelines, and computer vision systems — built to integrate with your existing stack from day one.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "24+", label: "Projects Shipped" },
    { val: "7+", label: "Years Experience" },
    { val: "91%", label: "Model Accuracy Avg" },
    { val: "3×", label: "Avg Efficiency Gain" },
  ],
  techStack: [
    { name: "Python", color: "#3776AB", desc: "Core AI language" },
    { name: "PyTorch", color: "#EE4C2C", desc: "Model training" },
    { name: "TensorFlow", color: "#FF6F00", desc: "Production serving" },
    { name: "OpenAI", color: "#74AA9C", desc: "GPT-5, embeddings" },
    { name: "LangChain", color: "#1C7C3C", desc: "LLM orchestration" },
    { name: "Hugging Face", color: "#FFCB2B", desc: "Open-source models" },
  ],
  process: [
    { step: "01", title: "Data Audit & Feasibility", desc: "We evaluate your data quality, volume, and labeling state before committing to an approach. No surprises after kickoff." },
    { step: "02", title: "Model Design & Baseline", desc: "We establish a benchmark with the simplest viable approach, then iterate toward the target metric systematically." },
    { step: "03", title: "Training & Evaluation", desc: "Rigorous cross-validation, bias audits, and explainability reporting. Every model ships with a documented eval card." },
    { step: "04", title: "Deployment & Monitoring", desc: "REST or gRPC inference endpoints, drift detection, and retraining triggers so the model keeps performing in production." },
  ],
  caseStudies: [
    { client: "Deloitte", tag: "AI Governance", accent: "#86BC25", result: "Enterprise AI audit platform deployed across 42 offices in 18 countries. Automated bias detection cut manual review time by 74%.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=600&fit=crop&auto=format", testimonial: "The model Pluginfy delivered outperformed our in-house baseline by 34% on our holdout set. They understood the business context, not just the math.", author: "Priya Nair", role: "Director, Deloitte AI Practice" },
    { client: "Dataligence", tag: "Predictive Analytics", accent: "#00C4CC", result: "ML-powered anomaly detection on 2B+ daily events. False positive rate dropped from 18% to under 2% in three months.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=900&h=600&fit=crop&auto=format", testimonial: "Our anomaly detection was generating thousands of false alerts per day. After the rebuild, our ops team actually trusts the system again.", author: "Chris Hartmann", role: "CTO, Dataligence" },
    { client: "Honeywell", tag: "Industrial IoT AI", accent: "#E2231A", result: "Predictive maintenance model for 120K+ smart building sensors. Equipment failures detected 11 days earlier on average.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=600&fit=crop&auto=format", testimonial: "Pluginfy didn't just build the model — they trained our team to maintain and retrain it. That knowledge transfer was invaluable.", author: "Linda Caruso", role: "VP Digital Products, Honeywell" },
  ],
  faqs: [
    { q: "Do we need a large dataset to start?", a: "Not always. We assess feasibility upfront. For some use cases, transfer learning or synthetic data generation lets us start with far less than you'd expect." },
    { q: "How do you handle data privacy?", a: "All data processing happens within your cloud boundary by default. We never send customer data to third-party services without explicit sign-off." },
    { q: "Can you integrate with our existing systems?", a: "Yes. We expose models as REST or gRPC endpoints and can integrate directly into your existing microservice architecture." },
    { q: "What happens when the model starts to drift?", a: "We set up monitoring dashboards and automated retraining triggers. You get alerts before performance degrades noticeably in production." },
  ],
};

export default function AiMlPage() {
  return <ServicePage data={data} />;
}