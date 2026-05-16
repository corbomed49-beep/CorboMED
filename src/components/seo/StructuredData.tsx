export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MedicalBusiness"],
        "@id": "https://corbomed.com.br/#business",
        name: "CORBO MED Perícias Médicas",
        alternateName: "Corbo Med",
        url: "https://corbomed.com.br",
        logo: "https://corbomed.com.br/images/logo.webp",
        image: "https://corbomed.com.br/images/sections/hero-lucas.png",
        description:
          "Perícia médica com rigor técnico, linguagem clara e segurança profissional. Dr. Lucas Gabriel Corbo – Perito Médico. Atendemos advogados, seguradoras, clínicas e pacientes em todo o Brasil.",
        founder: {
          "@type": "Person",
          name: "Lucas Gabriel Corbo",
          jobTitle: "Perito Médico",
        },
        telephone: "+5571999999999",
        email: "contato@corbomed.com.br",
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
        areaServed: {
          "@type": "Country",
          name: "Brasil",
        },
        slogan: "Precisão técnica em perícias médicas",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Serviços Periciais",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perícia de Nexo Causal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perícia de Dano Corporal" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Perícia de Incapacidade Laboral" } },
          ],
        },
        sameAs: [
          "https://instagram.com/corbomed",
          "https://linkedin.com/company/corbomed",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
