import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";
import { blogPosts } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos especializados sobre perícias médicas, direito médico, saúde ocupacional e temas relevantes para advogados, empresas e pessoas físicas.",
  openGraph: {
    title: "Blog | CorboMED Perícias Médicas",
    description:
      "Conteúdo especializado sobre perícias médicas e direito médico para advogados, empresas e pessoas físicas.",
    url: "https://corbomed.com.br/blog",
  },
  alternates: { canonical: "https://corbomed.com.br/blog" },
};

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

export default function BlogPage() {
  return (
    <>
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Blog</h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Conteúdo especializado sobre perícias médicas, direito médico e saúde ocupacional.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {allPosts.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
