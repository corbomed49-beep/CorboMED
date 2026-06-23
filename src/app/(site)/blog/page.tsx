import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogCard from "@/components/ui/BlogCard";
import { getPublishedPosts, toPostCard } from "@/lib/posts";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos especializados sobre perícias médicas, direito médico, saúde ocupacional e temas relevantes para advogados, empresas e pessoas físicas.",
  openGraph: {
    title: "Blog | CORBO MED Perícias Médicas",
    description:
      "Conteúdo especializado sobre perícias médicas e direito médico para advogados, empresas e pessoas físicas.",
    url: "https://www.corbomed.com.br/blog",
  },
  alternates: { canonical: "https://www.corbomed.com.br/blog" },
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  const cards = posts.map(toPostCard);

  return (
    <>
      <div className="gradient-primary pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Conteúdo especializado sobre perícias médicas, direito médico e saúde ocupacional.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((post, index) => (
            <BlogCard key={post.slug} {...post} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}
