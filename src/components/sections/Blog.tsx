import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import BlogCard from "@/components/ui/BlogCard";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import { getPublishedPosts, toPostCard } from "@/lib/posts";

export default async function Blog() {
  const posts = await getPublishedPosts();
  const cards = posts.map(toPostCard);

  return (
    <Section background="white" id="blog">
      <SectionTitle
        label="Blog"
        title="Conteúdo Especializado"
        subtitle="Artigos técnicos sobre perícias médicas, direito médico e saúde ocupacional para advogados, empresas e pessoas físicas."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.slice(0, 3).map((post, index) => (
          <BlogCard key={post.slug} {...post} index={index} />
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-700 px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-700 hover:text-white"
        >
          Ver todos os artigos <FiArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
