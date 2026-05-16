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
    <section className="relative flex h-[100dvh] max-h-[100dvh] min-h-0 flex-col overflow-hidden bg-primary-950">
      {/* Imagem de fundo — doutor posicionado à direita */}
      <div className="absolute inset-0 min-h-0">
        <Image
          src="/images/sections/hero-lucas.png"
          alt="Dr. Lucas Gabriel Corbo – Perito Médico CORBO MED"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[70%_center] md:object-[65%_center] lg:object-right-top max-md:brightness-[0.92] max-md:contrast-[1.05]"
        />
      </div>

      {/* Contraste para leitura: mais forte no mobile (jaleco claro); mais suave no desktop */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-primary-950/95 from-0% via-primary-950/78 via-[55%] to-transparent max-md:via-[68%] md:from-primary-950/55 md:via-primary-950/38 md:via-[48%] lg:from-primary-950/40 lg:via-[42%]"
        aria-hidden
      />

      {/* Linha decorativa teal lateral */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-[2] w-1 bg-gradient-to-b from-transparent via-teal-500/70 to-transparent" />
      {/* Brilho teal sutil no canto superior esquerdo */}
      <div className="pointer-events-none absolute -left-10 top-20 z-[2] h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-3 sm:px-6 sm:pt-24 sm:pb-6 lg:px-8 lg:pt-28 [@media(max-height:700px)]:pt-[calc(3.75rem+env(safe-area-inset-top,0px))] [@media(max-height:700px)]:pb-2">
        {/* Conteúdo — coluna esquerda; sombra no texto ajuda sobre fundo claro */}
        <div className="min-h-0 w-full max-w-2xl [&_h1]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] [&_h1]:[text-shadow:0_1px_2px_rgba(8,7,30,0.9)] [&_p]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)] [&_li]:drop-shadow-[0_1px_6px_rgba(0,0,0,0.65)]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-primary-950/35 px-3 py-1.5 backdrop-blur-sm sm:mb-4 sm:px-4 sm:py-2 [@media(max-height:640px)]:mb-1.5 [@media(max-height:640px)]:py-1"
          >
            <FiShield size={13} className="shrink-0 text-teal-400" />
            <span className="text-xs font-medium tracking-wide text-teal-400 sm:text-sm">
              Perícia Médica Especializada
            </span>
          </motion.div>

          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-2 font-display text-[clamp(1.35rem,4.2vw+0.4rem,2.75rem)] font-bold leading-[1.12] text-white sm:mb-4 sm:text-4xl sm:leading-tight md:text-5xl lg:text-6xl [@media(max-height:640px)]:mb-1.5 [@media(max-height:640px)]:text-[clamp(1.25rem,4vw+0.35rem,2.1rem)]"
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
            className="mb-1 text-sm leading-snug text-primary-200 sm:mb-2 sm:text-base md:text-lg md:leading-relaxed [@media(max-height:640px)]:line-clamp-3 [@media(max-height:640px)]:text-xs"
          >
            Análises periciais com{" "}
            <strong className="text-white">rigor técnico</strong>,{" "}
            <strong className="text-white">clareza documental</strong> e{" "}
            <strong className="text-white">segurança profissional</strong> para advogados, seguradoras,
            empresas e pacientes.
          </motion.p>

          {/* Nome do médico */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mb-4 text-xs font-semibold tracking-wide text-teal-400 sm:mb-6 sm:text-sm [@media(max-height:640px)]:mb-2"
          >
            Dr. Lucas Gabriel Corbo — Perito Médico
          </motion.p>

          {/* Trust items */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-4 space-y-1 sm:mb-8 sm:space-y-2 [@media(max-height:640px)]:mb-2 [@media(max-height:640px)]:space-y-0.5"
          >
            {trustItems.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs text-primary-200 sm:text-sm [@media(max-height:640px)]:text-[11px]"
              >
                <FiCheckCircle size={14} className="mt-0.5 shrink-0 text-teal-400" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col gap-2 sm:flex-row sm:gap-3 [@media(max-height:640px)]:gap-1.5"
          >
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              variant="secondary"
              size="lg"
              className="w-full shrink-0 px-5 py-3 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              <FaWhatsapp size={20} />
              Solicitar Perícia Agora
            </Button>
            <Button href="/servicos" variant="ghost" size="lg" className="w-full px-5 py-3 text-sm sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
              Conhecer Serviços
            </Button>
          </motion.div>

          {/* Mini stats — oculto em viewports muito baixos para caber sem scroll */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-3 border-t border-white/10 pt-4 sm:mt-8 sm:gap-6 sm:pt-6 md:mt-10 md:pt-7 [@media(max-height:620px)]:hidden"
          >
            {stats.map((stat, i) => (
              <div key={i} className="min-w-0 text-center">
                <p className="font-display text-xl font-bold text-teal-400 sm:text-2xl">{stat.value}</p>
                <p className="text-[10px] text-primary-400 sm:text-xs">{stat.label}</p>
              </div>
            ))}
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <p className="hidden max-w-32 text-xs leading-relaxed text-primary-400 sm:block">
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
        className="pointer-events-none absolute bottom-3 left-1/2 z-10 -translate-x-1/2 sm:bottom-6 [@media(max-height:640px)]:hidden"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-0.5 text-primary-500"
        >
          <span className="text-[10px] uppercase tracking-widest">Saiba mais</span>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
