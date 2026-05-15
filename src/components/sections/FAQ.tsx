import Section from "@/components/ui/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import FAQItem from "@/components/ui/FAQItem";

export const faqData = [
  {
    question: "O que é uma perícia médica e para que serve?",
    answer:
      "Uma perícia médica é uma avaliação técnica realizada por um médico especializado com o objetivo de analisar condições de saúde, lesões, incapacidades ou danos corporais para fins judiciais, previdenciários ou administrativos. Ela serve para embasar tecnicamente decisões jurídicas e administrativas relacionadas à saúde do periciado.",
  },
  {
    question: "Quem pode solicitar uma perícia médica?",
    answer:
      "Podem solicitar uma perícia médica advogados (como assistência técnica em processos), empresas (para questões trabalhistas e previdenciárias), seguradoras, órgãos públicos e pessoas físicas que necessitem de laudo para embasar seus direitos.",
  },
  {
    question: "Quanto tempo leva para receber o laudo pericial?",
    answer:
      "O prazo varia conforme a complexidade do caso. Em geral, laudos simples são entregues em 5 a 10 dias úteis após a consulta pericial. Casos complexos que exigem análise de documentação extensa podem levar até 15 dias úteis. Consultamos previamente o prazo de cada caso.",
  },
  {
    question: "A CorboMED atende em todo o Brasil?",
    answer:
      "Sim! Atendemos em todo o território nacional. Para cidades de grande porte, realizamos atendimento presencial. Para demais localidades, oferecemos teleconsulta e análise documental, com a mesma qualidade e validade jurídica do laudo.",
  },
  {
    question: "O laudo da CorboMED tem validade judicial?",
    answer:
      "Sim. Todos os laudos emitidos pela CorboMED seguem os padrões técnicos e normativos exigidos pelo Conselho Federal de Medicina e pela legislação brasileira, sendo aceitos em processos judiciais, administrativos e junto a seguradoras e ao INSS.",
  },
  {
    question: "Qual a diferença entre perito judicial e assistente técnico?",
    answer:
      "O perito judicial é nomeado pelo juiz para realizar a perícia de forma imparcial. O assistente técnico é contratado por uma das partes do processo para acompanhar a perícia, contestar pontos técnicos do laudo adversário e apresentar parecer favorável ao seu cliente. A CorboMED atua nas duas modalidades.",
  },
  {
    question: "Vocês trabalham com advogados parceiros de forma continuada?",
    answer:
      "Sim! Temos programas de parceria para escritórios de advocacia que demandam serviços periciais de forma regular. Entre em contato para conhecer nossas condições especiais para parceiros.",
  },
  {
    question: "Como funciona o processo para solicitar uma perícia?",
    answer:
      "É simples: entre em contato pelo WhatsApp ou formulário de contato, informe o tipo de perícia necessária e envie os documentos disponíveis. Nossa equipe analisa o caso, apresenta proposta de honorários e prazo, e após confirmação, agendamos a consulta pericial.",
  },
];

export default function FAQ() {
  return (
    <Section background="gray" id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          label="Perguntas Frequentes"
          title="Tire Suas Dúvidas"
          subtitle="Respondemos as principais perguntas sobre perícias médicas e nossos serviços."
        />
        <div className="space-y-3">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}
