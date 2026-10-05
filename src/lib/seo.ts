import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  images?: PageImage[];
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
}

/**
 * Builds page-level metadata with self-contained openGraph/twitter values.
 *
 * Next.js shallow-merges nested metadata objects from parent layouts, so a page
 * that only sets `alternates.canonical` silently inherits the layout's
 * `openGraph.url`, `openGraph.title` and `openGraph.description`. That makes every
 * page report the homepage's social metadata. Setting all of them explicitly here
 * keeps each page self-describing.
 */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  images,
  publishedTime,
  modifiedTime,
  authors,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const socialTitle = `${title} — ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      title: socialTitle,
      description,
      ...(images && images.length > 0 ? { images } : {}),
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors && authors.length > 0 ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(images && images.length > 0 ? { images: images.map((i) => i.url) } : {}),
    },
  };
}