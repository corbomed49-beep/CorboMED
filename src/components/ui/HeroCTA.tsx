"use client";

import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { WHATSAPP_MSG, WHATSAPP_NUMBER } from "@/lib/site";

export default function HeroCTA() {
  return (
    <div className="relative inline-flex w-full sm:w-auto">
      <span aria-hidden className="cta-pulse-ring pointer-events-none absolute inset-0" />
      <span
        aria-hidden
        className="cta-pulse-ring cta-pulse-ring-delay pointer-events-none absolute inset-0"
      />

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-hero-button group relative z-10 inline-flex w-full min-h-[3.25rem] items-center justify-center gap-2.5 overflow-hidden rounded-xl border border-teal-300/80 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 bg-[length:200%_100%] px-8 py-4 text-base font-bold uppercase tracking-wide text-white transition-all duration-300 hover:scale-[1.03] hover:from-teal-400 hover:via-teal-300 hover:to-teal-400 active:scale-[0.98] sm:min-h-0 sm:px-10 sm:text-lg"
      >
        <span
          aria-hidden
          className="cta-hero-shimmer pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
        <FaWhatsapp size={22} className="relative shrink-0 drop-shadow-sm" />
        <span className="relative">Solicite agora</span>
        <FiArrowRight
          size={18}
          className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
