"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward, FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

const highlights = [
  "Médico Perito com formação especializada",
  "Laudos técnicos com embasamento científico rigoroso",
  "Experiência em processos judiciais e administrativos",
  "Atuação em Medicina do Trabalho, Ortopedia, Neurologia e mais",
  "Atendimento ágil, claro e com prazos cumpridos",
  "Linguagem acessível sem abrir mão do rigor técnico",
];

const positioningPhrases = [
  "Precisão técnica em perícias médicas",
  "Clareza, ética e credibilidade profissional",
  "Perícia médica com método e confiança",
];

export default function About() {
  return (
    <Section background="white" id="sobre">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto flex w-full max-w-lg flex-col lg:mx-0 lg:max-w-none"
        >
          <div className="relative aspect-[3/4] w-full max-h-[min(72vh,560px)] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:max-h-[min(68vh,480px)] sm:rounded-3xl md:aspect-[16/11] md:max-h-[420px] lg:aspect-auto lg:h-[480px] lg:max-h-none">
            <Image
              src="/images/sections/lucascombo2.jpeg"
              alt="Dr. Lucas Gabriel Corbo – Médico Perito da CORBO MED"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_18%] sm:object-[center_20%] md:object-[center_22%] lg:object-[center_25%]"
              loading="lazy"
            />
            {/* Linha decorativa teal */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
          </div>
          {/* Badge — no mobile fica abaixo da foto para não cortar / vazar */}
          <div className="mt-4 self-end rounded-xl bg-primary-900 p-4 shadow-xl lg:absolute lg:-bottom-4 lg:-right-4 lg:mt-0 lg:rounded-2xl lg:p-5">
            <FiAward size={26} className="mb-2 text-teal-400" />
            <p className="font-display text-2xl font-bold text-white">15+</p>
            <p className="text-xs text-primary-300">Anos de<br />Experiência</p>
          </div>
          {/* Frases flutuantes */}
          <div className="absolute -left-4 top-8 rounded-xl bg-white border border-gray-100 px-3 py-2 shadow-lg hidden lg:block">
            <p className="text-xs font-medium text-teal-600 italic">&ldquo;Precisão técnica em perícias médicas&rdquo;</p>
          </div>
        </motion.div>

        {/* Content */}
        <div className="min-w-0">
          <SectionTitle
            label="Quem Somos"
            title="Expertise Médica a Serviço da Justiça"
            subtitle="A CORBO MED une rigor científico com profundo conhecimento jurídico para entregar laudos que fazem a diferença no resultado do seu caso."
            centered={false}
          />

          <ul className="mb-6 space-y-3">
            {highlights.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 text-sm md:text-base text-gray-700"
              >
                <FiCheckCircle size={17} className="mt-0.5 shrink-0 text-teal-500" />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* Posicionamento */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-7 rounded-xl border-l-4 border-teal-500 bg-teal-50 p-4"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-600">
              Dr. Lucas Gabriel Corbo — Perito Médico
            </p>
            {positioningPhrases.map((phrase, i) => (
              <p key={i} className="text-xs text-gray-600 italic">
                &ldquo;{phrase}&rdquo;
              </p>
            ))}
          </motion.div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/sobre" variant="primary">
              Conheça nossa história
            </Button>
            <Button href="/contato" variant="outline">
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
