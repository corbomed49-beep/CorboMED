import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const WHATSAPP_NUMBER = "5571999999999";

const services = [
  { label: "Nexo Causal", href: "/servicos#nexo-causal" },
  { label: "Dano Corporal", href: "/servicos#dano-corporal" },
  { label: "Incapacidade Laboral", href: "/servicos#incapacidade-laboral" },
  { label: "Invalidez Permanente", href: "/servicos#invalidez" },
  { label: "Doenças Ocupacionais", href: "/servicos#doencas-ocupacionais" },
  { label: "Responsabilidade Médica", href: "/servicos#erro-medico" },
];

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="relative mb-5 inline-flex items-center overflow-visible">
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
                loading="lazy"
              />
            </Link>
            <p className="text-sm text-primary-300 leading-relaxed mb-2">
              Dr. Lucas Gabriel Corbo — Perito Médico
            </p>
            <p className="text-sm text-primary-300 leading-relaxed mb-5">
              Perícia médica com rigor técnico, linguagem clara e segurança profissional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
              <a
                href="https://instagram.com/corbomed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 hover:bg-teal-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com/in/lucasgabrieltorbo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 hover:bg-teal-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={16} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
              Navegação
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-300 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-teal-400">
              Serviços
            </h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-primary-300 hover:text-teal-400 transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
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
                  className="hover:text-white transition-colors"
                >
                  (71) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <FiMail size={15} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href="mailto:contato@corbomed.com.br"
                  className="hover:text-white transition-colors"
                >
                  contato@corbomed.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-300">
                <FiMapPin size={15} className="mt-0.5 shrink-0 text-teal-400" />
                <span>Atendemos em todo o Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-400">
          <p>© {new Date().getFullYear()} CORBO MED — Perícias Médicas. Todos os direitos reservados.</p>
          <p>
            <Link href="/contato" className="hover:text-white transition-colors">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
