import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostClient from "@/components/BlogPostClient";
import { posts, getPost } from "@/lib/blogs";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author.name],
    images: [{ url: post.cover, width: 1200, height: 630, alt: post.title }],
  });
}

export const dynamic = "force-static";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return <BlogPostClient post={post} related={related} />;
}