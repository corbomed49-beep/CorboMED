import type { Metadata } from "next";
import Image from "next/image";
import { FiAward, FiCheckCircle, FiTarget, FiEye, FiShield } from "react-icons/fi";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import MiniCTA from "@/components/sections/MiniCTA";
import CTA from "@/components/sections/CTA";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça a CORBO MED e o Dr. Lucas Gabriel Corbo, Perito Médico especializado em laudos e pareceres periciais para advogados, seguradoras, clínicas e pacientes.",
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
  "Graduação em Medicina pela KSMU em Kursk – Rússia",
  "Especialização pelo Instituto Felipe Hurtado – IFH",
  "CRM-RJ 52.124847-2",
];

export default function SobrePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Início", item: "https://corbomed.com.br" },
          { name: "Sobre", item: "https://corbomed.com.br/sobre" },
        ]}
      />
      {/* Hero da página */}
      <div className="gradient-primary pb-10 pt-28 sm:pb-14 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Sobre" }]} />
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
            Sobre a CORBO MED
          </h1>
          <p className="mt-3 max-w-xl text-base text-primary-200 md:text-lg">
            Dr. Lucas Gabriel Corbo — Perito Médico
          </p>
          {/* Essência da marca */}
          <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
            {essencia.map((item) => (
              <span
                key={item.label}
                className="flex max-w-full items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs text-teal-300 sm:px-4 sm:text-sm"
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
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="min-w-0">
            <SectionTitle
              label="Nossa História"
              title="Perícia Médica com Propósito"
              centered={false}
            />
            <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base">
              <p>
                A CORBO MED nasceu da convicção de que uma boa perícia médica pode trazer mais
                clareza, segurança e direcionamento em processos que envolvem questões de saúde.
              </p>
              <p>
                O Dr. Lucas Gabriel Corbo, médico e fundador da CorboMED, é formado pela{" "}
                <strong>KSMU – Kursk State Medical University</strong>, em Kursk, Rússia, e
                aprovado no <strong>REVALIDA pela UFPE – Universidade Federal de Pernambuco</strong>.
              </p>
              <p>
                A empresa se especializou em oferecer <strong>laudos e pareceres periciais</strong>{" "}
                que unem rigor científico, análise documental criteriosa e linguagem clara para
                apoiar decisões em contextos jurídicos, previdenciários, trabalhistas, cíveis e
                securitários.
              </p>
              <p>
                Ao longo de sua atuação, a CORBO MED construiu uma reputação sólida atendendo
                escritórios de advocacia, seguradoras, departamentos jurídicos corporativos,
                clínicas parceiras e pessoas físicas em todo o Brasil.
              </p>
              <p>
                Cada análise realizada reflete o compromisso da marca com a{" "}
                <strong>precisão, a credibilidade, a clareza e a ética</strong>, pilares que
                norteiam cada laudo, parecer e relacionamento com seus clientes.
              </p>
            </div>
            <MiniCTA message="Olá, Dr. Lucas! Gostaria de saber mais sobre a CORBO MED e seus serviços." />
          </div>
          <div className="relative mx-auto aspect-[3/4] w-full max-w-lg max-h-[min(72vh,560px)] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:max-h-[min(68vh,480px)] sm:rounded-3xl md:aspect-[16/11] md:max-h-[420px] lg:mx-0 lg:max-w-none lg:aspect-auto lg:h-[480px] lg:max-h-none">
            <Image
              src="/images/sections/lucascombo2.jpeg"
              alt="Dr. Lucas Gabriel Corbo – Perito Médico da CORBO MED"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_18%] sm:object-[center_20%] md:object-[center_22%] lg:object-[center_25%]"
              loading="lazy"
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
          </div>
        </div>
      </Section>

      {/* Formação + Valores */}
      <Section background="gray">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12 items-start">
          <div className="min-w-0">
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

          <div className="min-w-0 space-y-4">
            {valores.map((v, i) => (
              <div
                key={i}
                className="flex min-w-0 gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-colors hover:border-teal-200 sm:gap-4 sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  {v.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 font-display font-bold text-primary-900">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{v.text}</p>
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
