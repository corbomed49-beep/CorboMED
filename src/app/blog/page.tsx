import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { blogPosts } from "@/components/sections/Blog";

export const metadata: Metadata = {
  title: "Artigos",
  description:
    "Artigos especializados sobre perícias médicas, direito médico, saúde ocupacional e temas relevantes para advogados, empresas e pessoas físicas.",
  openGraph: {
    title: "Artigos | CORBO MED Perícias Médicas",
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
    slug: "como-funciona-pericia-medica-judicial",
  },
  {
    title: "Invalidez permanente em seguros de vida: como calcular e comprovar",
    slug: "invalidez-permanente-seguros-vida",
  },
  {
    title: "Burnout como doença ocupacional: o que a perícia médica avalia",
    slug: "burnout-doenca-ocupacional-pericia",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="gradient-primary pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Artigos" }]} />
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Artigos
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Conteúdo especializado sobre perícias médicas, direito médico e saúde ocupacional.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white px-4 shadow-sm sm:px-6">
          {allPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-center justify-between gap-4 py-4 text-sm font-medium text-primary-900 transition-colors hover:text-teal-600 sm:py-5 sm:text-base"
              >
                <span className="leading-snug">{post.title}</span>
                <FiArrowRight
                  size={16}
                  className="shrink-0 text-teal-500 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
