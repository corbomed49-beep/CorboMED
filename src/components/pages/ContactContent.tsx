"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";

import { LOCATION, WHATSAPP_NUMBER } from "@/lib/site";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const contactInfo = [
  {
    icon: <FaWhatsapp size={20} />,
    label: "WhatsApp",
    value: "(71) 99999-9999",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    isExternal: true,
  },
  {
    icon: <FiPhone size={20} />,
    label: "Telefone",
    value: "(71) 99999-9999",
    href: `tel:+${WHATSAPP_NUMBER}`,
    isExternal: false,
  },
  {
    icon: <FiMail size={20} />,
    label: "E-mail",
    value: "contato@corbomed.com.br",
    href: "mailto:contato@corbomed.com.br",
    isExternal: false,
  },
  {
    icon: <FiMapPin size={20} />,
    label: "Localização",
    value: LOCATION,
    href: null,
    isExternal: false,
  },
];

type FormStatus = "idle" | "loading" | "success" | "error";

interface ContactContentProps {
  embedded?: boolean;
}

export default function ContactContent({ embedded = false }: ContactContentProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          profile: formData.profile,
          service: formData.service,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", profile: "", service: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      className={embedded ? "" : "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"}
      initial={embedded ? false : undefined}
      whileInView={embedded ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="grid grid-cols-1 gap-12 lg:grid-cols-3"
        initial={embedded ? { opacity: 0, y: 20 } : false}
        whileInView={embedded ? { opacity: 1, y: 0 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          {!embedded && (
            <>
              <h2 className="mb-2 text-2xl font-bold text-primary-900">Fale Conosco</h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                Entre em contato pelos canais abaixo ou preencha o formulário. Respondemos em até
                24h úteis.
              </p>
            </>
          )}
          {embedded && <div className="mb-8" />}

          <div className="space-y-5">
            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.isExternal ? "_blank" : undefined}
                      rel={info.isExternal ? "noopener noreferrer" : undefined}
                      className="text-sm font-medium text-primary-900 hover:text-primary-700 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-primary-900">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-green-50 border border-green-200 p-5">
            <p className="mb-3 text-sm font-bold text-green-800">Prefere o WhatsApp?</p>
            <p className="mb-4 text-xs text-green-700">
              Atendimento mais rápido pelo WhatsApp. Clique abaixo para iniciar a conversa agora mesmo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site e gostaria de solicitar uma perícia médica.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp size={16} />
              Falar pelo WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-md sm:p-8">
            <h3 className="mb-6 text-xl font-bold text-primary-900">Envie sua mensagem</h3>

            {status === "success" && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 p-4">
                <FiCheckCircle size={20} className="shrink-0 text-green-600" />
                <p className="text-sm text-green-800">
                  Mensagem enviada com sucesso! Entraremos em contato em até 24h úteis.
                </p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 p-4">
                <FiAlertCircle size={20} className="shrink-0 text-red-600" />
                <p className="text-sm text-red-800">
                  Erro ao enviar. Tente novamente ou fale pelo WhatsApp.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="name">
                    Nome completo *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="email">
                    E-mail *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="phone">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="profile">
                    Perfil
                  </label>
                  <select
                    id="profile"
                    name="profile"
                    value={formData.profile}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition bg-white"
                  >
                    <option value="">Selecione seu perfil</option>
                    <option value="advogado">Advogado(a)</option>
                    <option value="empresa">Empresa / Departamento Jurídico</option>
                    <option value="pessoa-fisica">Pessoa Física</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="service">
                  Tipo de Perícia
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition bg-white"
                >
                  <option value="">Selecione o tipo de perícia</option>
                  <option value="nexo-causal">Nexo Causal</option>
                  <option value="dano-corporal">Dano Corporal / Estético</option>
                  <option value="incapacidade-laboral">Incapacidade Laboral</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="mb-1 block text-xs font-semibold text-gray-700" htmlFor="message">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition resize-none"
                  placeholder="Descreva brevemente o caso ou sua necessidade..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FiSend size={16} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Seus dados são tratados com total confidencialidade conforme nossa Política de Privacidade.
              </p>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
