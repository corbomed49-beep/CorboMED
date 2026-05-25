"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="relative flex h-[100dvh] max-h-[100dvh] min-h-0 flex-col overflow-hidden bg-primary-950">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 min-h-0"
      >
        <Image
          src="/images/sections/hero-lucas.png"
          alt="Dr. Lucas Gabriel Corbo – Perito Médico CORBO MED"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] sm:object-[70%_center] md:object-[65%_center] lg:object-right-top max-md:brightness-[0.92] max-md:contrast-[1.05]"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-primary-950/95 from-0% via-primary-950/78 via-[55%] to-transparent max-md:via-[68%] md:from-primary-950/55 md:via-primary-950/38 md:via-[48%] lg:from-primary-950/40 lg:via-[42%]"
        aria-hidden
      />

      <motion.div className="pointer-events-none absolute left-0 top-0 bottom-0 z-[2] w-1 bg-gradient-to-b from-transparent via-teal-500/70 to-transparent" />
      <div className="pointer-events-none absolute -left-10 top-20 z-[2] h-72 w-72 rounded-full bg-teal-500/8 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-6 sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="w-full max-w-2xl [&_h1]:drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)] [&_h1]:[text-shadow:0_1px_2px_rgba(8,7,30,0.9)] [&_p]:drop-shadow-[0_1px_10px_rgba(0,0,0,0.75)]">
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
            className="font-display text-[clamp(1.5rem,4.5vw+0.5rem,3.25rem)] font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Medicina técnica a serviço da{" "}
            <span className="text-teal-400">clareza jurídica</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-primary-200 sm:mt-5 sm:text-base md:text-lg"
          >
            Laudos, pareceres e assistência pericial com rigor científico para demandas
            previdenciárias, trabalhistas, cíveis e securitárias.
          </motion.p>
        </div>
      </div>

      <motion.a
        href="#laudos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-primary-400 transition-colors hover:text-teal-400 sm:bottom-6"
        aria-label="Saiba mais sobre laudos"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-0.5"
        >
          <span className="text-[10px] uppercase tracking-widest">Saiba mais</span>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
