import ServicePage from "@/components/ServicePage";
import type { ServicePageData } from "@/components/ServicePage";

const HeroGraphic = () => (
  <svg viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "85%", maxWidth: 400 }}>
    {/* Chain of hexagons */}
    {[
      { cx: 90,  cy: 170 },
      { cx: 180, cy: 130 },
      { cx: 270, cy: 170 },
      { cx: 180, cy: 210 },
    ].map((h, i) => {
      const hex = (cx: number, cy: number, r: number) =>
        Array.from({ length: 6 }, (_, k) => {
          const a = (Math.PI / 180) * (60 * k - 30);
          return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
        }).join(" ");
      return (
        <g key={i}>
          <polygon points={hex(h.cx, h.cy, 38)} fill="rgba(245,197,24,0.06)" stroke="rgba(245,197,24,0.4)" strokeWidth="1.5" />
          <polygon points={hex(h.cx, h.cy, 26)} fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.2)" strokeWidth="1" />
          <text x={h.cx} y={h.cy + 5} textAnchor="middle" fill="#F5C518" fontSize="11" fontFamily="monospace" fontWeight="bold">{["ETH","SOL","DeFi","NFT"][i]}</text>
        </g>
      );
    })}
    {/* Connecting lines */}
    {[[90,170,180,130],[180,130,270,170],[270,170,180,210],[180,210,90,170]].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(245,197,24,0.2)" strokeWidth="1.5" strokeDasharray="4 3" />
    ))}
    {/* Center node */}
    <circle cx="180" cy="170" r="18" fill="rgba(245,197,24,0.2)" stroke="#F5C518" strokeWidth="1.5" />
    <text x="180" y="175" textAnchor="middle" fill="#F5C518" fontSize="9" fontFamily="monospace" fontWeight="bold">Chain</text>
    {/* Outer decorations */}
    <circle cx="340" cy="80"  r="22" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.25)" strokeWidth="1" />
    <text x="340" y="85" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontFamily="monospace">Smart</text>
    <text x="340" y="95" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontFamily="monospace">Contract</text>
    <circle cx="340" cy="260" r="22" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.25)" strokeWidth="1" />
    <text x="340" y="265" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontFamily="monospace">Wallet</text>
    <circle cx="60"  cy="80"  r="22" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.25)" strokeWidth="1" />
    <text x="60"  y="85" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontFamily="monospace">IPFS</text>
    <circle cx="60"  cy="260" r="22" fill="rgba(245,197,24,0.05)" stroke="rgba(245,197,24,0.25)" strokeWidth="1" />
    <text x="60"  y="265" textAnchor="middle" fill="rgba(245,197,24,0.7)" fontSize="8" fontFamily="monospace">DAO</text>
    {/* TVL badge */}
    <rect x="290" y="155" width="96" height="28" rx="14" fill="rgba(39,201,63,0.1)" stroke="#27C93F" strokeWidth="1" />
    <text x="338" y="168" textAnchor="middle" fill="#27C93F" fontSize="8" fontFamily="monospace">$240M+ TVL</text>
    <text x="338" y="178" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7" fontFamily="monospace">0 exploits</text>
  </svg>
);

const data: ServicePageData = {
  title: "Blockchain Development",
  tagline: "Decentralised. Audited. Shipped.",
  heroDesc: "DeFi protocols, NFT marketplaces, tokenized real-world assets, and smart contract auditing. We research, design, and build the full blockchain stack — wallets, contracts, and indexing layers.",
  heroGraphic: <HeroGraphic />,
  stats: [
    { val: "12+", label: "Projects Shipped" },
    { val: "4+", label: "Years Experience" },
    { val: "$240M+", label: "TVL Secured" },
    { val: "0", label: "Contract Exploits" },
  ],
  techStack: [
    { name: "Solidity", color: "#555", desc: "Smart contracts" },
    { name: "Hardhat", color: "#FFF100", desc: "Dev & testing" },
    { name: "Ethereum", color: "#627EEA", desc: "Primary L1" },
    { name: "IPFS", color: "#65C2CB", desc: "Decentralised storage" },
    { name: "Web3.js", color: "#F16822", desc: "Frontend integration" },
    { name: "The Graph", color: "#6747ED", desc: "Blockchain indexing" },
  ],
  process: [
    { step: "01", title: "Protocol Design & Tokenomics", desc: "We model your economic system, simulate attack vectors, and finalise the contract architecture before writing any production Solidity." },
    { step: "02", title: "Smart Contract Development", desc: "Modular, upgradeable contracts following OpenZeppelin standards. Every function documented with NatSpec from day one." },
    { step: "03", title: "Audit & Formal Verification", desc: "Internal audit followed by a third-party security review. We fix every finding before mainnet deployment — non-negotiable." },
    { step: "04", title: "Mainnet Launch & Monitoring", desc: "Phased rollout with TVL caps, multi-sig admin controls, and real-time on-chain monitoring dashboards." },
  ],
  caseStudies: [
    { client: "DeFi Protocol", tag: "Lending Protocol", accent: "#627EEA", result: "AMM-based lending protocol with custom liquidation engine. $84M TVL at peak. Zero critical vulnerabilities across two independent audits.", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&h=600&fit=crop&auto=format", testimonial: "Pluginfy's Solidity engineers caught three critical reentrancy vectors during internal review that our previous team had missed. That due diligence probably saved the protocol.", author: "Alex Kovach", role: "Founder, DeFi Protocol" },
    { client: "NFT Marketplace", tag: "NFT Platform", accent: "#8B5CF6", result: "Gasless NFT marketplace with lazy minting and royalty enforcement. 140K+ NFTs minted in first 90 days post-launch.", image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=900&h=600&fit=crop&auto=format", testimonial: "The gasless minting UX they built completely removed the biggest friction point for our non-crypto-native users. Onboarding conversion doubled.", author: "Sara Lin", role: "CPO, NFT Marketplace" },
    { client: "RWA Platform", tag: "Tokenized Assets", accent: "#F59E0B", result: "Real-world asset tokenization platform for commercial real estate. $160M+ in assets on-chain across 12 properties.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&h=600&fit=crop&auto=format", testimonial: "Building on-chain real estate required navigating both smart contract complexity and regulatory constraints. Pluginfy handled both with expertise I didn't expect.", author: "David Park", role: "CEO, RWA Platform" },
  ],
  faqs: [
    { q: "Which chains do you build on?", a: "Ethereum mainnet and L2s (Arbitrum, Base, Optimism) are our primary chains. We also build on Polygon, Solana, and other EVM-compatible chains as the use case demands." },
    { q: "Do you do smart contract audits?", a: "We do internal audits as part of every engagement. For production contracts handling significant TVL, we also coordinate and manage third-party audits with leading audit firms." },
    { q: "What about upgradeable contracts?", a: "We use the OpenZeppelin Transparent Proxy or UUPS patterns depending on your governance needs. We document the trade-offs clearly before implementation." },
    { q: "Can you build the frontend too?", a: "Yes. Full-stack blockchain projects including React frontends with Wagmi/Viem integration, wallet connectors, and real-time on-chain data via The Graph are our standard offering." },
  ],
};

export default function BlockchainPage() {
  return <ServicePage data={data} />;
}