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
