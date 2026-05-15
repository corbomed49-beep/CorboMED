"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const WHATSAPP_NUMBER = "5571999999999";
const WHATSAPP_MSG = encodeURIComponent("Olá! Gostaria de solicitar uma perícia médica com o Dr. Lucas Corbo.");

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-primary-950/96 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="relative z-10 inline-flex items-center overflow-visible"
        >
          {/* Halo radial + blur: contraste sem “caixa” visível */}
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[240%] w-[260%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_50%_46%_at_50%_50%,rgba(8,7,30,0.97)_0%,rgba(22,20,72,0.62)_34%,rgba(44,169,160,0.22)_50%,transparent_68%)] blur-sm"
          />
          <Image
            src="/images/sections/LOGO2.png"
            alt="CORBO MED Perícias Médicas"
            width={200}
            height={52}
            className="relative z-10 h-14 w-auto object-contain brightness-[1.22] contrast-[1.28] saturate-[1.18] drop-shadow-[0_0_1px_rgba(255,255,255,0.28)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.88)]"
            priority
          />
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 hover:text-teal-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-600 transition-colors shadow-md"
          >
            <FaWhatsapp size={16} />
            Solicitar Perícia
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-primary-950 lg:hidden"
          >
            <nav className="flex flex-col px-4 pb-4 pt-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-primary-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-4 py-3 text-base font-semibold text-white hover:bg-teal-600 transition-colors"
              >
                <FaWhatsapp size={18} />
                Solicitar Perícia pelo WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
