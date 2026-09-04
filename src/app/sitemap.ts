import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const services = [
  "/services/ai-ml-development",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/qa-testing",
  "/services/devops",
  "/services/blockchain",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    ...services,
  ].map((path) => ({
    url: `${siteConfig.url}${path === "" ? "" : `${path}/`}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/about" || path === "/contact" ? 0.8 : 0.7,
  }));

  return staticRoutes;
}
