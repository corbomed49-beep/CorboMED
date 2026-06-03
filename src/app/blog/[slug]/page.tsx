import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MiniCTA from "@/components/sections/MiniCTA";
import { blogPosts } from "@/components/sections/Blog";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
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
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const canonicalUrl = `https://www.corbomed.com.br/blog/${slug}`;
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    headline: post.title,
    description: post.excerpt,
    image: [`https://www.corbomed.com.br${post.image}`],
    datePublished: (post as any).dateISO,
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
          <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-primary-300">
            <span className="flex items-center gap-1">
              <FiCalendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FiClock size={14} /> {post.readTime} de leitura
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

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="lead text-xl text-gray-800 font-medium leading-relaxed">
            {post.excerpt}
          </p>
          <p>
            Este artigo aborda em detalhes os aspectos técnicos e jurídicos relacionados ao tema, fornecendo informações valiosas para advogados, empresas e pessoas físicas que precisam entender melhor o processo pericial médico.
          </p>
          <p>
            A perícia médica é um instrumento técnico-científico que tem papel fundamental na instrução de processos judiciais e administrativos. Um laudo pericial bem elaborado pode ser determinante para o resultado de uma ação, razão pela qual a escolha do médico perito ou assistente técnico é de extrema importância.
          </p>
          <p>
            <strong>Em breve, publicaremos o conteúdo completo deste artigo.</strong> Se você tem dúvidas específicas sobre este tema, entre em contato com nossa equipe.
          </p>
        </div>

        <MiniCTA message={`Olá! Li o artigo sobre ${post.title} e gostaria de saber mais sobre a CorboMED.`} />

        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors"
        >
          <FiArrowLeft size={16} />
          Voltar para o Blog
        </Link>
      </article>
    </>
  );
}
