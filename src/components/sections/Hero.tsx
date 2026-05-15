"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowDown, FiShield, FiCheckCircle } from "react-icons/fi";
import Button from "@/components/ui/Button";

const WHATSAPP_NUMBER = "5571999999999";
const WHATSAPP_MSG = encodeURIComponent(
  "Olá, Dr. Lucas! Vi o site da CORBO MED e gostaria de solicitar uma perícia médica. Poderia me passar mais informações?"
);

const trustItems = [
  "Laudos técnicos aceitos em todas as instâncias",
  "Atendimento em todo o Brasil",
  "Rigor técnico, clareza e ética profissional",
];

const stats = [
  { value: "500+", label: "Laudos" },
  { value: "15+", label: "Anos" },
  { value: "98%", label: "Aprovação" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary-950">
      {/* Imagem de fundo — doutor posicionado à direita */}
      <div className="absolute inset-0">
        <Image
          src="/images/sections/hero-bg.png"
          alt="Dr. Lucas Gabriel Corbo – Perito Médico CORBO MED"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center] md:object-[65%_center] lg:object-right-top"
        />
      </div>

        {/* Overlay só nos primeiros 25% da largura, da esquerda para a direita */}
        <div className="absolute inset-y-0 left-0 w-1/4 bg-primary-950/60" />
        <div className="absolute inset-y-0 left-1/4 w-16 bg-gradient-to-r from-primary-950/60 to-transparent" />

        {/* Linha decorativa teal lateral */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal-500/70 to-transparent" />
      {/* Brilho teal sutil no canto superior esquerdo */}
      <div className="pointer-events-none absolute -left-10 top-20 h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-24 pb-16 sm:px-6 lg:px-8 lg:pt-28">

        {/* Conteúdo — coluna esquerda (max 55% da largura) */}
        <div className="w-full max-w-2xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2"
          >
            <FiShield size={13} className="text-teal-400" />
            <span className="text-sm font-medium text-teal-400 tracking-wide">
              Perícia Médica Especializada
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Perícias Médicas{" "}
            <span className="text-teal-400">Estratégicas</span>{" "}
            para Fortalecer Sua Ação
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-2 text-base md:text-lg text-primary-200 leading-relaxed"
          >
            Análises periciais com{" "}
            <strong className="text-white">rigor técnico</strong>,{" "}
            <strong className="text-white">clareza documental</strong> e{" "}
            <strong className="text-white">segurança profissional</strong> para
            advogados, seguradoras, empresas e pacientes.
          </motion.p>

          {/* Nome do médico */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mb-7 text-sm font-semibold text-teal-400 tracking-wide"
          >
            Dr. Lucas Gabriel Corbo — Perito Médico
          </motion.p>

          {/* Trust items */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-9 space-y-2"
          >
            {trustItems.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-primary-200">
                <FiCheckCircle size={14} className="shrink-0 text-teal-400" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              variant="secondary"
              size="lg"
            >
              <FaWhatsapp size={20} />
              Solicitar Perícia Agora
            </Button>
            <Button href="/servicos" variant="ghost" size="lg">
              Conhecer Serviços
            </Button>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex items-center gap-6 border-t border-white/10 pt-7"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-2xl font-bold text-teal-400">{stat.value}</p>
                <p className="text-xs text-primary-400">{stat.label}</p>
              </div>
            ))}
            <div className="ml-2 h-8 w-px bg-white/10" />
            <p className="text-xs text-primary-400 leading-relaxed max-w-32">
              Atendimento em todo o Brasil
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-primary-500"
        >
          <span className="text-[10px] tracking-widest uppercase">Saiba mais</span>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
