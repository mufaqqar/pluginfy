import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blogs";
import { services, getServiceHref } from "@/lib/services";

export const dynamic = "force-static";

const serviceRoutes = ["/services", ...services.map((s) => getServiceHref(s.slug))];

const blogs = posts.map((p) => `/blog/${p.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/blog",
    "/contact",
    ...serviceRoutes,
    ...blogs,
  ].map((path) => ({
    url: `${siteConfig.url}${path === "" ? "" : `${path}/`}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/about" || path === "/contact" || path === "/blog" || path === "/services" ? 0.8 : 0.7,
  }));

  return staticRoutes;
}