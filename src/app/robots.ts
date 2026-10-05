import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    // Bare hostname, per spec. The Host directive is Yandex-only and is ignored by Google.
    host: new URL(siteConfig.url).host,
  };
}
