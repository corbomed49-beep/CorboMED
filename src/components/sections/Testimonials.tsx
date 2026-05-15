"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiStar } from "react-icons/fi";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const testimonials = [
  {
    name: "Dr. Rafael Mendonça",
    role: "Advogado Trabalhista – São Paulo/SP",
    image: "/images/testimonials/testimonial-1.webp",
    text: "A CorboMED me ajudou a ganhar um processo que parecia perdido. O laudo foi tão bem fundamentado que o juiz aceitou integralmente nossa tese. Recomendo sem hesitar.",
    stars: 5,
  },
  {
    name: "Dra. Fernanda Souza",
    role: "Advogada Previdenciária – Rio de Janeiro/RJ",
    image: "/images/testimonials/testimonial-2.webp",
    text: "Trabalho com eles há 3 anos. A qualidade técnica é impecável, os prazos sempre respeitados e o atendimento é excepcional. São meu parceiro pericial de confiança.",
    stars: 5,
  },
  {
    name: "João Carlos Lima",
    role: "Cliente – Pessoa Física",
    image: "/images/testimonials/testimonial-3.webp",
    text: "Tive um acidente de trabalho e não sabia por onde começar. A equipe da CorboMED me orientou em tudo, o laudo foi perfeito e consegui o benefício que tinha direito.",
    stars: 5,
  },
  {
    name: "Ana Paula Ferreira",
    role: "Gerente de RH – Empresa do Setor Industrial",
    image: "/images/testimonials/testimonial-4.webp",
    text: "Contratamos a CorboMED para suporte em casos trabalhistas. A expertise deles é diferenciada e os laudos são muito bem elaborados. Parceria que recomendamos.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <Section background="white" id="depoimentos">
      <SectionTitle
        label="Depoimentos"
        title="O Que Nossos Clientes Dizem"
        subtitle="A confiança de quem já passou pela CorboMED é o nosso maior reconhecimento."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-1 text-gold-500">
              {Array.from({ length: t.stars }).map((_, i) => (
                <FiStar key={i} size={16} className="fill-current" />
              ))}
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-auto pt-3 border-t border-gray-200">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-primary-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-900">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
