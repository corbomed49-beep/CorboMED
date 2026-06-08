"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, WHATSAPP_MSG, WHATSAPP_NUMBER } from "@/lib/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-primary-950/97 shadow-lg max-md:backdrop-blur-none md:backdrop-blur-md"
          : "bg-transparent backdrop-blur-none shadow-none"
      }`}
    >
      <motion.div
        initial={false}
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8"
      >
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="relative z-10 inline-flex shrink-0 items-center"
        >
          <Image
            src="/images/sections/LOGOHEROBg.png"
            alt="CORBO MED Perícias Médicas"
            width={230}
            height={57}
            className="h-11 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 xl:gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-medium text-white/85 transition-colors hover:text-teal-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Atendimento WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-700/30 transition-all duration-200 hover:bg-green-600 hover:shadow-green-600/40 hover:scale-105 active:scale-95 lg:flex"
        >
          <FaWhatsapp size={17} />
          <span>Atendimento</span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-center rounded-lg p-2 text-white lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-primary-800 bg-primary-950 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-primary-800"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-green-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-green-700/30 transition-all duration-200 hover:bg-green-600 active:scale-95"
              >
                <FaWhatsapp size={20} />
                Atendimento
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
