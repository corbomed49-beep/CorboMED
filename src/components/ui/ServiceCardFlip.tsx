"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5511999999999";

interface ServiceCardFlipProps {
  title: string;
  description: string;
  items: string[];
  image: string;
  index?: number;
  whatsappMessage?: string;
}

export default function ServiceCardFlip({
  title,
  description,
  items,
  image,
  index = 0,
  whatsappMessage,
}: ServiceCardFlipProps) {
  const [flipped, setFlipped] = useState(false);
  const message = whatsappMessage || `Olá! Gostaria de saber mais sobre ${title}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-80 w-72 cursor-pointer"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${title}`}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Frente */}
        <div
          className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="288px"
            className="object-cover transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-bold text-white leading-tight">{title}</h3>
            <p className="mt-1 text-xs text-primary-200 line-clamp-2">{description}</p>
          </div>
        </div>

        {/* Verso */}
        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-primary-900 p-5 shadow-lg"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div>
            <h3 className="mb-3 text-base font-bold text-white">{title}</h3>
            <ul className="space-y-1.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-primary-200">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <FaWhatsapp size={18} />
            Solicitar Perícia
          </a>
        </div>
      </div>
    </motion.div>
  );
}
