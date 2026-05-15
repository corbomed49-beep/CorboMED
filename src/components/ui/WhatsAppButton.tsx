"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const WHATSAPP_NUMBER = "5571999999999";
const DEFAULT_MESSAGE =
  "Olá, Dr. Lucas! Vim pelo site da CORBO MED e gostaria de saber mais sobre as perícias médicas.";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="relative max-w-xs rounded-2xl bg-white p-4 shadow-xl border border-gray-100"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
              aria-label="Fechar"
            >
              <FiX size={16} />
            </button>
            <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-teal-600">CORBO MED</p>
            <p className="mb-1 text-sm font-bold text-primary-900">Dr. Lucas Gabriel Corbo</p>
            <p className="mb-3 text-xs text-gray-600 leading-relaxed">
              Perícia médica com rigor técnico, clareza e ética. Fale agora pelo WhatsApp.
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={16} />
              Iniciar conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setShowTooltip(!showTooltip)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34,197,94,0.4)",
            "0 0 0 16px rgba(34,197,94,0)",
            "0 0 0 0 rgba(34,197,94,0)",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeOut" }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Falar com Dr. Lucas Corbo pelo WhatsApp"
      >
        <FaWhatsapp size={30} />
      </motion.button>
    </div>
  );
}
