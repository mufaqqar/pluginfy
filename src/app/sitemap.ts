import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { posts } from "@/lib/blogs";

export const dynamic = "force-static";

const services = [
  "/services/ai-development-automation",
  "/services/custom-software-development",
  "/services/erp-development",
  "/services/ecommerce-development",
  "/services/laravel-php-development",
  "/services/python-development",
  "/services/frontend-development",
  "/services/devops-cloud",
  "/services/plugin-api-development",
];

const blogs = posts.map((p) => `/blog/${p.slug}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/blog",
    "/contact",
    ...services,
    ...blogs,
  ].map((path) => ({
    url: `${siteConfig.url}${path === "" ? "" : `${path}/`}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/about" || path === "/contact" || path === "/blog" ? 0.8 : 0.7,
  }));

  return staticRoutes;
}
