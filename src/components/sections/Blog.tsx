import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export const blogPosts = [
  {
    title: "O que é Nexo Causal e por que é fundamental em processos judiciais?",
    excerpt:
      "Entenda como a prova do nexo causal entre o dano e o evento pode determinar o resultado de uma ação judicial e como uma perícia médica especializada é indispensável.",
    slug: "nexo-causal-processos-judiciais",
    image: "/images/blogs/nexo-causal.webp",
    date: "05 Mai 2026",
    readTime: "5 min",
    category: "Perícia Médica",
  },
  {
    title: "Doenças Ocupacionais: como a perícia médica protege seus direitos",
    excerpt:
      "LER, DORT, PAIR e outras doenças ocupacionais podem garantir indenizações e benefícios ao trabalhador. Saiba como a perícia médica documenta esses casos.",
    slug: "doencas-ocupacionais-pericia-medica",
    image: "/images/blogs/doencas-ocupacionais.webp",
    date: "20 Abr 2026",
    readTime: "6 min",
    category: "Saúde Ocupacional",
  },
  {
    title: "Assistente técnico x Perito judicial: qual a diferença e quando contratar?",
    excerpt:
      "Advogados frequentemente confundem os dois papéis. Entenda as diferenças, as responsabilidades de cada um e a importância de ter um bom assistente técnico no seu lado.",
    slug: "assistente-tecnico-vs-perito-judicial",
    image: "/images/blogs/assistente-tecnico.webp",
    date: "08 Abr 2026",
    readTime: "7 min",
    category: "Direito Médico",
  },
];

export default function Blog() {
  return (
    <Section background="gray" id="artigos">
      <SectionTitle
        label="Artigos"
        title="Conteúdo Especializado"
        subtitle="Artigos técnicos sobre perícias médicas, direito médico e saúde ocupacional."
      />
      <ul className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-2xl border border-gray-100 bg-white px-4 shadow-sm sm:px-6">
        {blogPosts.map((post) => (
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
      <div className="mt-8 text-center">
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
