import type { Metadata } from "next";
import BlogClient from "@/components/BlogClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on AI, web and mobile engineering, DevOps, and blockchain from the Pluginfy team — practical field notes for teams building AI-first products.",
  alternates: {
    canonical: "/blog/",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}