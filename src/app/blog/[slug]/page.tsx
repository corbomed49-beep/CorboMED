import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import MiniCTA from "@/components/sections/MiniCTA";
import { blogPosts } from "@/components/sections/Blog";

const allPosts = [
  ...blogPosts,
  {
    title: "Como funciona o processo de perícia médica judicial: guia completo",
    excerpt:
      "Entenda passo a passo como funciona uma perícia médica judicial, os direitos das partes, o papel do perito e do assistente técnico e como se preparar.",
    slug: "como-funciona-pericia-medica-judicial",
    image: "/images/blogs/pericia-judicial.webp",
    date: "15 Mar 2026",
    readTime: "8 min",
    category: "Perícia Judicial",
  },
  {
    title: "Invalidez permanente em seguros de vida: como calcular e comprovar",
    excerpt:
      "Entenda o que configura invalidez permanente para fins de seguro, como é calculado o percentual e qual documentação médica é necessária para acionar a cobertura.",
    slug: "invalidez-permanente-seguros-vida",
    image: "/images/blogs/invalidez-seguro.webp",
    date: "01 Mar 2026",
    readTime: "6 min",
    category: "Seguros",
  },
  {
    title: "Burnout como doença ocupacional: o que a perícia médica avalia",
    excerpt:
      "Com o reconhecimento do burnout pela OMS como doença ocupacional, a demanda por perícias especializadas cresceu. Saiba o que é analisado pelo médico perito.",
    slug: "burnout-doenca-ocupacional-pericia",
    image: "/images/blogs/burnout.webp",
    date: "15 Fev 2026",
    readTime: "5 min",
    category: "Saúde Mental",
  },
];

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | CorboMED`,
      description: post.excerpt,
      url: `https://corbomed.com.br/blog/${slug}`,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    alternates: { canonical: `https://corbomed.com.br/blog/${slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Artigos", href: "/blog" },
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
            className="object-cover"
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
          Voltar para Artigos
        </Link>
      </article>
    </>
  );
}
