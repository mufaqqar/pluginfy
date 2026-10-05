import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

interface PageImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

const DEFAULT_IMAGE: PageImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Pluginfy — AI Development & Custom Software Company",
};

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
 * Two things this works around:
 *
 * 1. When a page defines `openGraph`, Next.js replaces the layout's `openGraph`
 *    object instead of deep-merging it. A page that set only `alternates.canonical`
 *    therefore inherited the layout's `openGraph.url`/`title`/`description`, so every
 *    page reported the homepage's social metadata. All fields are set explicitly here.
 * 2. Because of (1), `images` is not inherited either — it must be supplied, or the
 *    page ends up with no `og:image` at all.
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
  const socialImages = images && images.length > 0 ? images : [DEFAULT_IMAGE];

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
      images: socialImages,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(authors && authors.length > 0 ? { authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: socialImages.map((i) => i.url),
    },
  };
}