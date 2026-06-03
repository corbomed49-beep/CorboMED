"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiAward } from "react-icons/fi";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function About() {
  return (
    <Section background="white" id="sobre">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12"
      >
        <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:mx-0 lg:flex lg:max-w-[440px] lg:flex-col lg:justify-center">
          <div className="relative aspect-[2/3] w-full overflow-hidden rounded-2xl sm:rounded-3xl lg:aspect-auto lg:min-h-[580px] lg:flex-1">
            <Image
              src="/images/sections/lucassobre.jpeg"
              alt="Dr. Lucas Gabriel Corbo – Médico Perito da CORBO MED"
              fill
              quality={95}
              sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 440px"
              className="object-cover object-[center_15%]"
              loading="lazy"
            />
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-teal-500" />
          </div>
          <div className="mt-4 self-end rounded-xl bg-primary-900 p-4 shadow-xl lg:absolute lg:-bottom-4 lg:-right-4 lg:mt-0 lg:rounded-2xl lg:p-5">
            <FiAward size={24} className="mb-2 text-teal-400" />
            <p className="font-display text-lg font-bold text-white">CRM-RJ</p>
            <p className="text-xs text-primary-300">52.124847-2</p>
          </div>
        </div>

        <div className="min-w-0">
          <SectionTitle
            label="Quem Somos"
            title="Perícia Médica com Propósito"
            centered={false}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base"
          >
            <p>
              O Dr. Lucas Gabriel Corbo atua na elaboração de laudos, pareceres técnicos e
              assistência pericial em demandas previdenciárias, trabalhistas, cíveis e securitárias,
              com atuação especializada em incapacidade laborativa, nexo causal, sequelas, dano
              corporal e responsabilidade médica.
            </p>
            <p>
              Seu trabalho combina rigor científico, análise documental minuciosa e comunicação
              técnica adaptada ao contexto jurídico, oferecendo suporte estratégico para processos
              que exigem fundamentação consistente, clareza técnica e segurança probatória.
            </p>
            <p>
              Formado pela <strong>Kursk State Medical University</strong>, na Rússia, e aprovado
              no <strong>REVALIDA pela Universidade Federal de Pernambuco (UFPE)</strong>,
              consolidou sua atuação na produção de laudos e pareceres periciais voltados às áreas
              previdenciária, trabalhista, cível e securitária.
            </p>
            <p>
              A CORBO MED nasceu com um propósito claro: transformar informações médicas complexas
              em análises técnicas objetivas, claras e juridicamente úteis. Com atuação em todo o
              Brasil, a empresa atende escritórios de advocacia, seguradoras, departamentos
              jurídicos, clínicas parceiras e clientes particulares, sempre pautada pela{" "}
              <strong>ética, credibilidade, precisão técnica e compromisso com a excelência</strong>{" "}
              em cada análise realizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/sobre" variant="primary">
              Conheça nossa história
            </Button>
            <Button href="/#contato" variant="outline">
              Fale conosco
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
