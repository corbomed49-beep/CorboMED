"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroCTA from "@/components/ui/HeroCTA";

export default function Hero() {
  return (
    <section
      id="laudos"
      className="relative min-h-[100dvh] overflow-hidden bg-primary-950"
    >
      {/* ── Desktop: foto de fundo ──────────────────────────────────── */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/images/sections/Heronovaatt.jpeg"
          alt="Dr. Lucas Gabriel Corbo – Perito Médico CORBO MED"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover object-[62%_18%] lg:object-[58%_15%]"
        />
        {/* Gradiente da esquerda para o texto */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-primary-950/95 via-primary-950/70 via-[50%] to-primary-950/10 lg:from-primary-950/90 lg:via-primary-950/55 lg:via-[46%]"
        />
      </div>

      {/* ── Mobile: decorações de fundo (sem foto) ──────────────────── */}
      <div aria-hidden className="pointer-events-none md:hidden">
        {/* Círculo teal grande no canto superior direito */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />
        {/* Círculo menor no canto inferior esquerdo */}
        <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-teal-500/8 blur-2xl" />
        {/* Linha teal vertical esquerda */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-teal-500/60 to-transparent" />
      </div>

      {/* ── Linha teal vertical (desktop) ───────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-[2] hidden w-1 bg-gradient-to-b from-transparent via-teal-500/60 to-transparent md:block"
      />

      {/* ── Conteúdo ────────────────────────────────────────────────── */}
      <div className="relative z-10 flex min-h-[100dvh] w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-36">
          <div className="w-full max-w-lg">

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-teal-400 sm:text-sm"
            >
              Perícia médica especializada
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07 }}
              className="font-display text-[clamp(2rem,6vw+0.5rem,3.25rem)] font-bold leading-[1.1] text-white"
            >
              Medicina técnica a serviço da{" "}
              <span className="text-teal-400">clareza jurídica</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-5 text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg"
            >
              Precisão médico-pericial para transformar informações clínicas
              complexas em elementos técnicos claros, objetivos e
              juridicamente úteis.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="mt-8 sm:mt-10"
            >
              <HeroCTA />
            </motion.div>

            {/* Selos de credibilidade – mobile fica visível, desktop mantém */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-12"
            >
              <Credential value="CRM" label="Registro ativo" />
              <span className="hidden h-6 w-px bg-white/20 sm:block" aria-hidden />
              <Credential value="100%" label="Laudos técnicos" />
              <span className="hidden h-6 w-px bg-white/20 sm:block" aria-hidden />
              <Credential value="Brasil" label="Atuação nacional" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credential({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-bold text-teal-400">{value}</span>
      <span className="text-xs text-white/55">{label}</span>
    </div>
  );
}
