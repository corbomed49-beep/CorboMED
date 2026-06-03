"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { WHATSAPP_MSG, WHATSAPP_NUMBER } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="laudos"
      className="relative min-h-[100dvh] overflow-hidden bg-primary-950"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/sections/hero-lucas (1).png"
          alt="Dr. Lucas Gabriel Corbo – Perito Médico CORBO MED"
          fill
          priority
          quality={95}
          sizes="(max-width: 1672px) 100vw, 1672px"
          className="object-cover object-[65%_8%] sm:object-[62%_6%] md:object-[60%_5%] lg:object-[58%_4%]"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-primary-950/95 from-0% via-primary-950/78 via-[55%] to-transparent max-md:via-[68%] md:from-primary-950/55 md:via-primary-950/38 md:via-[48%] lg:from-primary-950/40 lg:via-[42%]"
        aria-hidden
      />

      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-[2] w-1 bg-gradient-to-b from-transparent via-teal-500/70 to-transparent" />
      <div className="pointer-events-none absolute -left-10 top-20 z-[2] h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />

      <div className="relative z-10 flex min-h-[100dvh] w-full items-center mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pt-36 lg:pb-20">
        <div className="w-full max-w-xl [&_h1]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] [&_h1]:[text-shadow:0_1px_2px_rgba(8,7,30,0.9)] [&_h2]:drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] [&_p]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400 sm:mb-4 sm:text-sm"
          >
            Perícia médica especializada
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display text-[clamp(1.45rem,4.2vw+0.45rem,3rem)] font-bold leading-[1.12] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            Medicina técnica a serviço da{" "}
            <span className="text-teal-400">clareza jurídica</span>.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-5 font-display text-lg font-bold leading-snug text-white sm:mt-6 sm:text-xl md:text-2xl"
          >
            Precisão médico-pericial para transformar informações clínicas complexas em
            elementos técnicos claros, objetivos e juridicamente úteis.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8"
          >
            <Button
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Solicite agora
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
