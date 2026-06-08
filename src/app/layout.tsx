import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import GoogleTags from "@/components/analytics/GoogleTags";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.corbomed.com.br"),
  title: {
    default: "CORBO MED – Perícias Médicas | Lucas Gabriel Corbo",
    template: "%s | CORBO MED Perícias Médicas",
  },
  description:
    "Perícias médicas com rigor técnico, linguagem clara e segurança profissional. Atendimento especializado para advogados, seguradoras, empresas e pacientes. Dr. Lucas Gabriel Corbo – Perito Médico.",
  keywords: [
    "perícia médica",
    "laudo pericial médico",
    "perito médico",
    "Lucas Gabriel Corbo",
    "assistente técnico médico",
    "nexo causal",
    "dano corporal",
    "incapacidade laboral",
    "invalidez permanente",
    "erro médico",
    "doenças ocupacionais",
    "perícia judicial",
    "Corbo Med",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.corbomed.com.br",
    siteName: "CORBO MED Perícias Médicas",
    title: "CORBO MED – Perícias Médicas | Lucas Gabriel Corbo",
    description:
      "Análises periciais com rigor técnico, clareza documental e segurança profissional. Advogados, seguradoras, empresas e pacientes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CORBO MED – Perícias Médicas",
    description: "Perícias médicas com rigor técnico, clareza documental e segurança profissional.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.corbomed.com.br",
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <StructuredData />
        <GoogleTags />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-w-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
