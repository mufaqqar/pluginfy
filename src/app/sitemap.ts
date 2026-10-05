import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blogs";
import { services, getServiceHref } from "@/lib/services";

export const dynamic = "force-static";

/**
 * Bump these when the corresponding content is meaningfully edited.
 *
 * `lastModified` is a crawl-efficiency hint, so a build-time `new Date()` is actively
 * misleading: it marks every URL as modified on every deploy, including unchanged
 * blog posts, which trains crawlers to disregard the value. Blog posts use their
 * real publish date instead.
 */
const STATIC_PAGES_UPDATED = "2026-10-02";

const serviceRoutes = ["/services", ...services.map((s) => getServiceHref(s.slug))];

const newestPostDate = posts.reduce(
  (max, p) => (p.date > max ? p.date : max),
  posts[0]?.date ?? STATIC_PAGES_UPDATED
);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/services",
    ...serviceRoutes.slice(1),
  ].map((path) => ({
    url: `${siteConfig.url}${path === "" ? "/" : `${path}/`}`,
    lastModified: new Date(STATIC_PAGES_UPDATED),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/about" || path === "/contact" || path === "/services"
          ? 0.8
          : 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = [
    { path: "/blog", lastModified: newestPostDate, priority: 0.8 },
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      lastModified: p.date,
      priority: 0.6,
    })),
  ].map((entry) => ({
    url: `${siteConfig.url}${entry.path}/`,
    lastModified: new Date(entry.lastModified),
    changeFrequency: "monthly" as const,
    priority: entry.priority,
  }));

  return [...staticRoutes, ...blogRoutes];
}