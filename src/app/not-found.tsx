import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center" style={{ background: "#07091A" }}>
      <p className="text-7xl font-extrabold mb-4" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>404</p>
      <h1 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>Page not found</h1>
      <p className="mb-8" style={{ color: "rgba(255,255,255,0.45)" }}>The page you are looking for does not exist.</p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </div>
  );
}