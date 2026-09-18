"use client";

import Link from "next/link";
import { formatDate, type BlogPost } from "@/lib/blogs";
import { FadeIn, StaggerContainer, StaggerItem } from "./FadeIn";
import { AuthorAvatar, CategoryBadge } from "./BlogClient";

function SectionBlock({ section, index }: { section: BlogPost["sections"][number]; index: number }) {
  return (
    <section className="mb-10">
      <h2
        className="font-heading font-bold mb-5 flex items-center gap-3"
        style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.3rem, 2.8vw, 1.75rem)", color: "#fff", lineHeight: 1.3 }}
      >
        <span
          className="font-heading font-extrabold select-none flex-shrink-0"
          style={{ fontFamily: "var(--font-heading)", fontSize: "0.9rem", color: "#F5C518" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        {section.heading}
      </h2>
      {section.paragraphs?.map((p, i) => (
        <p
          key={i}
          className="mb-5"
          style={{ color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.85 }}
        >
          {p}
        </p>
      ))}
      {section.bullets && (
        <ul className="flex flex-col gap-3 mb-5">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3" style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.97rem", lineHeight: 1.7 }}>
              <span
                className="mt-1.5 flex-shrink-0"
                style={{ width: 7, height: 7, borderRadius: 2, background: "#F5C518", transform: "rotate(45deg)" }}
              />
              {b}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

function RelatedPost({ post }: { post: BlogPost }) {
  return (
    <StaggerItem hover hoverY={-6} hoverScale={1.02} className="h-full">
      <Link
        href={`/blog/${post.slug}`}
        className="group flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300"
        style={{ background: "#0E1228", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
      >
        <div className="relative overflow-hidden" style={{ aspectRatio: "16 / 9" }}>
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,18,40,0.85) 0%, transparent 45%)" }} />
          <div className="absolute top-4 left-4">
            <CategoryBadge label={post.category} />
          </div>
        </div>
        <div className="flex flex-col flex-1 p-5">
          <p className="mb-3 text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-heading)" }}>
            {formatDate(post.date)} · {post.readTime}
          </p>
          <h3
            className="font-heading font-bold mb-3 transition-colors duration-150 group-hover:text-[#F5C518]"
            style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", lineHeight: 1.35, color: "#fff" }}
          >
            {post.title}
          </h3>
          <span className="mt-auto flex items-center gap-1.5 text-xs font-bold" style={{ color: "#F5C518", fontFamily: "var(--font-heading)" }}>
            Read Article
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </StaggerItem>
  );
}

export default function BlogPostClient({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <div style={{ background: "#07091A" }}>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 sm:pt-36 pb-10 sm:pb-14" style={{ background: "#07091A" }}>
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 72% 15%, rgba(245,197,24,0.14) 0%, transparent 55%)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative">
          <FadeIn y={30} duration={0.6}>
            <nav className="flex items-center gap-2 mb-6 flex-wrap text-xs" style={{ fontFamily: "var(--font-heading)" }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Home</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <Link href="/blog" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Blog</Link>
              <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
              <span style={{ color: "#F5C518" }}>{post.category}</span>
            </nav>
          </FadeIn>
          <FadeIn y={30} delay={0.05} duration={0.6}>
            <CategoryBadge label={post.category} />
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h1
              className="font-heading font-extrabold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.9rem, 5.5vw, 3.2rem)", color: "#fff", letterSpacing: "-0.02em" }}
            >
              {post.title}
            </h1>
          </FadeIn>
          <FadeIn y={30} delay={0.15} duration={0.6}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="flex items-center gap-2.5">
                <AuthorAvatar name={post.author.name} size={40} />
                <span className="flex flex-col">
                  <span className="text-sm font-bold" style={{ color: "#fff", fontFamily: "var(--font-heading)" }}>{post.author.name}</span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{post.author.role}</span>
                </span>
              </span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-heading)" }}>
                {formatDate(post.date)} · {post.readTime}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Cover ── */}
      <FadeIn y={30} duration={0.7} className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)", aspectRatio: "16 / 9" }}>
          <img src={post.cover} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </FadeIn>

      {/* ── Article body ── */}
      <article className="py-12 sm:py-16" style={{ background: "#07091A" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <FadeIn y={20} duration={0.6}>
            <p className="mb-10 text-lg font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1.05rem, 2vw, 1.2rem)", fontFamily: "var(--font-heading)" }}>
              {post.excerpt}
            </p>
          </FadeIn>

          {post.sections.map((section, i) => (
            <FadeIn key={i} y={20} duration={0.5}>
              <SectionBlock section={section} index={i} />
            </FadeIn>
          ))}

          {/* Conclusion */}
          <FadeIn y={20} duration={0.6}>
            <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#0E1228", border: "1px solid rgba(245,197,24,0.25)" }}>
              <p className="section-label mb-3">Key Takeaway</p>
              <p className="font-heading font-semibold" style={{ fontFamily: "var(--font-heading)", color: "#fff", fontSize: "clamp(1.05rem, 2vw, 1.25rem)", lineHeight: 1.6 }}>
                {post.conclusion}
              </p>
            </div>
          </FadeIn>

          {/* Tags */}
          <FadeIn y={20} duration={0.5}>
            <div className="flex flex-wrap items-center gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-semibold"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Author bio + back */}
          <FadeIn y={20} duration={0.5}>
            <div className="mt-10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4" style={{ background: "#0A0D1E", border: "1px solid rgba(255,255,255,0.07)" }}>
              <AuthorAvatar name={post.author.name} size={52} />
              <div className="flex-1">
                <p className="font-heading font-bold text-white" style={{ fontFamily: "var(--font-heading)", fontSize: "1rem" }}>{post.author.name}</p>
                <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{post.author.role}</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Part of the Pluginfy engineering team shipping AI-first products for enterprise and high-growth clients.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/blog" className="btn-outline" style={{ padding: "12px 28px", fontSize: "13px" }}>
              ← All Articles
            </Link>
            <Link href="/contact" className="btn-primary" style={{ padding: "12px 28px", fontSize: "13px" }}>
              Start a Project
            </Link>
          </div>
        </div>
      </article>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="py-14 sm:py-20" style={{ background: "#0A0D1E" }}>
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6">
            <p className="section-label mb-3">Keep Reading</p>
            <h2 className="font-heading font-bold mb-8" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "white" }}>
              Related articles
            </h2>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
              {related.map((p) => (
                <RelatedPost key={p.slug} post={p} />
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24" style={{ background: "#FEBC2E" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn y={30} duration={0.6}>
            <p className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "#000", fontFamily: "var(--font-heading)" }}>
              Let&apos;s Build
            </p>
          </FadeIn>
          <FadeIn y={30} delay={0.1} duration={0.6}>
            <h2
              className="font-heading font-extrabold mb-4"
              style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "#000", lineHeight: 1.1, letterSpacing: "-0.02em" }}
            >
              Got a roadmap? Let&apos;s ship it.
            </h2>
          </FadeIn>
          <FadeIn y={20} delay={0.2} duration={0.5}>
            <p className="mb-8 max-w-2xl mx-auto" style={{ color: "#000", lineHeight: 1.6, fontSize: "16px" }}>
              AI, web, mobile, DevOps, or blockchain — tell us what you need. We will reply with a clear next step within 24 hours.
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