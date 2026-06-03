"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5511940735069";

interface MiniCTAProps {
  message?: string;
}

export default function MiniCTA({
  message = "Olá, Dr. Lucas! Vim do site da CORBO MED e gostaria de mais informações sobre perícias médicas.",
}: MiniCTAProps) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-5 sm:flex-row"
    >
      <div>
        <p className="text-sm font-bold text-primary-900">
          Dúvidas? Fale agora com o Dr. Lucas Corbo.
        </p>
        <p className="text-xs text-gray-500 mt-0.5">Perícia médica com rigor técnico, clareza e ética.</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex shrink-0 items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-700/30 transition-all duration-200 hover:bg-teal-600 hover:shadow-teal-600/40 hover:scale-105 active:scale-95"
      >
        <FaWhatsapp size={16} />
        Falar Agora
      </a>
    </motion.div>
  );
}
