import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import PostContent from "@/components/blog/PostContent";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MiniCTA from "@/components/sections/MiniCTA";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import {
  getPublishedPostBySlug,
  getPublishedSlugs,
  toPostCard,
} from "@/lib/posts";
import { calcReadTime } from "@/lib/utils";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | CorboMED`,
      description: post.excerpt,
      url: `https://www.corbomed.com.br/blog/${slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
    alternates: { canonical: `https://www.corbomed.com.br/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  const card = toPostCard(post);
  const canonicalUrl = `https://www.corbomed.com.br/blog/${slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: post.title,
    description: post.excerpt,
    image: [`https://www.corbomed.com.br${post.image}`],
    datePublished: post.published_at.slice(0, 10),
    author: {
      "@type": "Person",
      name: "Lucas Gabriel Corbo",
    },
    publisher: {
      "@type": "Organization",
      name: "CORBO MED Perícias Médicas",
      logo: {
        "@type": "ImageObject",
        url: "https://www.corbomed.com.br/images/sections/LOGO2.png",
      },
    },
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", item: "https://www.corbomed.com.br" },
          { name: "Blog", item: "https://www.corbomed.com.br/blog" },
          { name: post.title, item: canonicalUrl },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span className="mt-4 inline-block rounded-full bg-primary-700 px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-primary-300">
            <span className="flex items-center gap-1">
              <FiCalendar size={14} /> {card.date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={14} /> {calcReadTime(post.content)} de leitura
            </span>
          </div>
        </div>
      </div>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="relative mb-10 h-64 overflow-hidden rounded-2xl md:h-80">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-top"
            priority
          />
        </div>

        <p className="text-xl font-medium leading-relaxed text-gray-800">{post.excerpt}</p>
        <PostContent content={post.content} />

        <MiniCTA message={`Olá! Li o artigo sobre ${post.title} e gostaria de saber mais sobre a CorboMED.`} />

        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-700 transition-colors hover:text-primary-900"
        >
          <FiArrowLeft size={16} />
          Voltar para o Blog
        </Link>
      </article>
    </>
  );
}
