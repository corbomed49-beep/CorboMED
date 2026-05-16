import type { Metadata } from "next";
import Image from "next/image";
import { FiAward, FiCheckCircle, FiTarget, FiEye, FiShield } from "react-icons/fi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import MiniCTA from "@/components/sections/MiniCTA";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a CORBO MED e o Dr. Lucas Gabriel Corbo, Perito Médico com mais de 15 anos de experiência em perícias médicas especializadas para advogados, seguradoras, clínicas e pacientes.",
  openGraph: {
    title: "Sobre | CORBO MED Perícias Médicas",
    description:
      "Dr. Lucas Gabriel Corbo – Perito Médico. Precisão técnica, clareza documental e segurança profissional em cada laudo.",
    url: "https://corbomed.com.br/sobre",
  },
  alternates: { canonical: "https://corbomed.com.br/sobre" },
};

const essencia = [
  { icon: <FiTarget size={18} />, label: "Precisão" },
  { icon: <FiShield size={18} />, label: "Credibilidade" },
  { icon: <FiEye size={18} />, label: "Clareza" },
  { icon: <FiAward size={18} />, label: "Ética" },
];

const valores = [
  {
    icon: <FiTarget size={22} />,
    title: "Missão",
    text: "Fornecer laudos periciais com rigor técnico, linguagem clara e segurança profissional, contribuindo para a justa resolução de casos judiciais e administrativos.",
  },
  {
    icon: <FiEye size={22} />,
    title: "Visão",
    text: "Ser referência nacional em perícias médicas estratégicas, reconhecido pela excelência técnica, pela clareza documental e pelo impacto positivo nos casos de nossos clientes.",
  },
  {
    icon: <FiShield size={22} />,
    title: "Valores",
    text: "Precisão, credibilidade, clareza e ética. Tom de marca: técnico, confiável, elegante e objetivo — em cada laudo e em cada contato.",
  },
];

const formacao = [
  "Graduação em Medicina",
  "Especialização em Medicina do Trabalho",
  "Especialização em Ortopedia e Traumatologia",
  "Curso de Perícia Médica Judicial",
  "Formação em Direito Médico e Bioética",
  "CRM: em atualização",
];

export default function SobrePage() {
  return (
    <>
      {/* Hero da página */}
      <div className="gradient-primary pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Sobre" }]} />
          <h1 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
            Sobre a CORBO MED
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Dr. Lucas Gabriel Corbo — Perito Médico
          </p>
          {/* Essência da marca */}
          <div className="mt-6 flex flex-wrap gap-3">
            {essencia.map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm text-teal-300"
              >
                {item.icon}
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Sobre */}
      <Section background="white">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle
              label="Nossa História"
              title="Perícia Médica com Propósito"
              centered={false}
            />
            <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <p>
                A CORBO MED nasceu da convicção de que uma boa perícia médica pode ser determinante na vida de uma pessoa. Fundada pelo Dr. Lucas Gabriel Corbo, médico perito com mais de 15 anos de experiência, a empresa se especializou em oferecer laudos periciais que unem rigor científico com linguagem clara e profundo conhecimento do ambiente jurídico.
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação sólida atendendo escritórios de advocacia, seguradoras, departamentos jurídicos corporativos, clínicas parceiras e pessoas físicas em todo o Brasil. Cada laudo que emitimos reflete nosso compromisso com a precisão, a ética e a segurança profissional.
              </p>
              <p>
                Nossa essência de marca resume bem quem somos: <strong>precisão</strong>, <strong>credibilidade</strong>, <strong>clareza</strong> e <strong>ética</strong>. São os pilares que norteiam cada análise pericial e cada relacionamento com nossos clientes.
              </p>
            </div>
            <MiniCTA message="Olá, Dr. Lucas! Gostaria de saber mais sobre a CORBO MED e seus serviços." />
          </div>
          <div className="relative h-96 overflow-hidden rounded-3xl lg:h-[480px]">
            <Image
              src="/images/sections/lucascombo2.jpeg"
              alt="Dr. Lucas Gabriel Corbo – Perito Médico da CORBO MED"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top md:object-[center_22%]"
              loading="lazy"
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
          </div>
        </div>
      </Section>

      {/* Formação + Valores */}
      <Section background="gray">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-start">
          <div>
            <SectionTitle
              label="Formação e Credenciais"
              title="Qualificação que Fundamenta Resultados"
              centered={false}
            />
            <ul className="space-y-3 mb-8">
              {formacao.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <FiCheckCircle size={17} className="mt-0.5 shrink-0 text-teal-500" />
                  {item}
                </li>
              ))}
            </ul>
            {/* Posicionamento */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-teal-600">
                Posicionamento de Marca
              </p>
              <p className="text-sm text-gray-700 leading-relaxed italic">
                &ldquo;Perícia médica com rigor técnico, linguagem clara e segurança profissional.&rdquo;
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {valores.map((v, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-100 hover:border-teal-200 transition-colors"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  {v.icon}
                </div>
                <div>
                  <h3 className="mb-1 font-display font-bold text-primary-900">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA />
    </>
  );
}
