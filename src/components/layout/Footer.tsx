import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { LOCATION, navLinks, WHATSAPP_NUMBER } from "@/lib/site";

const services = [
  { label: "Nexo Causal", href: "/servicos#nexo-causal" },
  { label: "Dano Corporal", href: "/servicos#dano-corporal" },
  { label: "Incapacidade Laboral", href: "/servicos#incapacidade-laboral" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 inline-flex items-center">
              <Image
                src="/images/sections/LOGO2.png"
                alt="CORBO MED Perícias Médicas"
                width={180}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="mb-2 text-sm leading-relaxed text-primary-300">
              Dr. Lucas Gabriel Corbo — Perito Médico
            </p>
            <p className="mb-5 text-sm leading-relaxed text-primary-300">
              Perícia médica com rigor técnico, linguagem clara e segurança profissional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-600"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="https://instagram.com/corbomed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 transition-colors hover:bg-teal-600"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com/in/lucasgabrieltorbo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 transition-colors hover:bg-teal-600"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
              Serviços
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-primary-300 transition-colors hover:text-teal-400"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <FiPhone size={15} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  (11) 94073-5069
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <FiMail size={15} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href="mailto:contato@corbomed.com.br"
                  className="transition-colors hover:text-white"
                >
                  contato@corbomed.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <FiMapPin size={15} className="mt-0.5 shrink-0 text-teal-400" />
                <span>{LOCATION}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-800 pt-6 text-xs text-primary-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} CORBO MED — Perícias Médicas. Todos os direitos
            reservados.
          </p>
          <p>
            <Link href="/contato" className="transition-colors hover:text-white">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
