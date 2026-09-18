"use client";

import Link from "next/link";
import { posts, formatDate, authorInitials, type BlogPost } from "@/lib/blogs";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";

export function AuthorAvatar({ name, size = 34 }: { name: string; size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-full flex-shrink-0 font-heading font-bold"
      style={{
        width: size,
        height: size,
        background: "rgba(245,197,24,0.1)",
        border: "1px solid rgba(245,197,24,0.3)",
        color: "#F5C518",
        fontSize: size * 0.38,
        fontFamily: "var(--font-heading)",
      }}
    >
      {authorInitials(name)}
    </span>
  );
}

export function CategoryBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block text-xs font-semibold uppercase tracking-wider"
      style={{
        background: "rgba(245,197,24,0.12)",
        border: "1px solid rgba(245,197,24,0.3)",
        color: "#F5C518",
        padding: "6px 14px",
        borderRadius: 8,
        fontFamily: "var(--font-heading)",
      }}
    >
      {label}
    </span>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <StaggerItem hover hoverY={-6} hoverScale={1.02} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "#0E1228",
          border: "1px solid rgba(255,255,255,0.08)",
          textDecoration: "none",
        }}
      >
        {/* Cover */}
        <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(14,18,40,0.85) 0%, transparent 45%)" }}
          />
          <div className="absolute top-4 left-4">
            <CategoryBadge label={post.category} />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          <p className="mb-3 text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>
            {formatDate(post.date)} · {post.readTime}
          </p>
          <h3
            className="font-heading font-bold mb-2 transition-colors duration-150 group-hover:text-[#F5C518]"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)",
              lineHeight: 1.35,
              color: "#fff",
            }}
          >
            {post.title}
          </h3>
          <p className="mb-5" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-2.5">
              <AuthorAvatar name={post.author.name} />
              <span className="text-xs font-semibold" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-heading)" }}>
                {post.author.name}
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>
              Read
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.2s" }}>
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function BlogClient() {
  return (
    <div style={{ background: "#07091A" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-12 sm:pb-16" style={{ background: "#07091A" }}>
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 72% 18%, rgba(245,197,24,0.14) 0%, transparent 55%)" }}
        />
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 relative">
          <FadeIn y={30} duration={0.6}>
            <div className="flex items-center gap-2 mb-6 flex-wrap text-xs" style={{ fontFamily: "var(--font-heading)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "#F5C518" }}>Blog</span>
            </div>
          </FadeIn>
          <FadeIn y={30} delay={0.05} duration={0.6}>
            <p className="section-label mb-3">Our Blog</p>
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h1
              className="font-heading font-extrabold mb-5 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 5.5vw, 4.2rem)", color: "white", letterSpacing: "-0.02em" }}
            >
              Field Notes from the<br />
              <span style={{ color: "#F5C518" }}>AI-First Frontier</span>
            </h1>
          </FadeIn>
          <FadeIn y={30} delay={0.15} duration={0.6}>
            <p className="max-w-2xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)", lineHeight: 1.75 }}>
              Practical engineering insights on AI, web and mobile development, DevOps, and blockchain — written by the team that ships them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Posts grid ── */}
      <section className="py-12 sm:py-16" style={{ background: "#0A0D1E" }}>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24" style={{ background: "#FEBC2E" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn y={30} duration={0.6}>
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#000", fontFamily: "var(--font-heading)" }}>
              Got a Question?
            </p>
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#000", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Write like this. Built like this.
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.2} duration={0.5}>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#000", lineHeight: 1.6, fontSize: "16px" }}>
              Want the team behind these insights working on your product? Tell us what you are building — we will reply with a clear next step.
            </p>
          </FadeIn>
          <FadeIn y={20} delay={0.3} duration={0.5}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 font-heading font-bold text-lg max-w-[320px] w-full justify-center px-7 py-4 rounded-full transition-all duration-200 hover:scale-105"
              style={{ background: "#000", color: "#fff", fontFamily: "var(--font-heading)", textDecoration: "none", letterSpacing: "0.04em" }}
            >
              START A PROJECT
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}