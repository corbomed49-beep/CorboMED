"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "5511940735069";

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
  const [coarsePointer, setCoarsePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    const update = () => setCoarsePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const message = whatsappMessage || `Olá! Gostaria de saber mais sobre ${title}.`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mx-auto h-72 w-full max-w-[17.5rem] cursor-pointer sm:mx-0 sm:h-80 sm:w-72 sm:max-w-none"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => !coarsePointer && setFlipped(true)}
      onMouseLeave={() => !coarsePointer && setFlipped(false)}
      onClick={() => coarsePointer && setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (!coarsePointer) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      tabIndex={0}
      role="button"
      aria-expanded={flipped}
      aria-label={`${flipped ? "Ocultar" : "Ver"} detalhes de ${title}`}
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
            sizes="(max-width: 640px) 100vw, 288px"
            className="object-cover transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-primary-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-base font-bold leading-tight text-white sm:text-lg">{title}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-primary-200">{description}</p>
            {coarsePointer && (
              <p className="mt-2 text-[10px] font-medium uppercase tracking-wide text-teal-300/90">
                Toque para ver mais
              </p>
            )}
          </div>
        </div>

        {/* Verso */}
        <div
          className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl bg-primary-900 p-4 shadow-lg sm:p-5"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="min-h-0 flex-1 overflow-y-auto">
            <h3 className="mb-2 text-sm font-bold text-white sm:mb-3 sm:text-base">{title}</h3>
            <ul className="space-y-1.5">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] text-primary-200 sm:text-xs">
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
            className="mt-3 flex shrink-0 items-center justify-center gap-2 rounded-lg bg-green-500 px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-green-600 sm:px-4 sm:py-2.5 sm:text-sm"
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
