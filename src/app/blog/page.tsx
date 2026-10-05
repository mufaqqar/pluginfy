import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Insights on AI and Software Engineering",
  description:
    "Insights on AI, web and mobile engineering, DevOps, and blockchain from the Pluginfy team — practical field notes for teams building AI-first products.",
  path: "/blog/",
});

export default function BlogPage() {
  return <BlogClient />;
}