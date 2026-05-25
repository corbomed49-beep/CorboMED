import ContactContent from "@/components/pages/ContactContent";
import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactSection() {
  return (
    <Section background="white" id="contato">
      <SectionTitle
        label="Contato"
        title="Fale com a CORBO MED"
        subtitle="Entre em contato pelos canais abaixo ou preencha o formulário. Respondemos em até 24h úteis."
      />
      <ContactContent embedded />
    </Section>
  );
}
