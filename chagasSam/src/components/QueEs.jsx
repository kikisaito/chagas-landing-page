import { Bug, AlertTriangle, Globe } from "lucide-react";

export default function QueEs() {
  const cards = [
    {
      titulo: "Definición",
      icon: Bug,
      descripcion:
        "Protozoario flagelado del orden Kinetoplastida, familia Trypanosomatidae. Ciclo biológico indirecto que alterna entre hospedero vertebrado (humanos y mamíferos) e invertebrado (triatominos). El parásito se presenta en tres formas morfológicas principales: tripomastigota (forma infectante extracelular), epimastigota (forma replicativa en el vector) y amastigota (forma replicativa intracelular en mamíferos). El genoma de T. cruzi (aproximadamente 55 Mb distribuidos en 41 cromosomas) ha sido secuenciado y revela una extensa plasticidad genómica con expansión de familias multigénicas involucradas en evasión inmune.",
    },
    {
      titulo: "Vector",
      icon: AlertTriangle,
      descripcion:
        "Hemípteros hematófagos obligados de la subfamilia Triatominae. Alimentación nocturna con predilección por mucosas (conjuntiva, labios). Mecanismo de transmisión vectorial: durante o inmediatamente después de la hematofagia, el triatomino defeca liberando tripomastigotas metacíclicos presentes en sus heces. El parásito penetra activamente a través de la solución de continuidad generada por la picadura, mucosas intactas o excoriaciones cutáneas. Las especies de mayor importancia epidemiológica en México incluyen Triatoma dimidiata, Triatoma barberi y Triatoma mexicana.",
    },
    {
      titulo: "Impacto Global",
      icon: Globe,
      descripcion:
        "Endémica en 21 países de América Latina, desde el sur de Estados Unidos hasta Argentina y Chile. Se estiman 7-8 millones de personas infectadas y 70-100 millones en riesgo de infección. La carga global de enfermedad se calcula en 806,000 años de vida ajustados por discapacidad (AVAD). Provoca aproximadamente 10,000 muertes anuales, principalmente por cardiopatía chagásica crónica. La migración ha expandido la enfermedad a países no endémicos como España, Estados Unidos, Japón y Australia, donde la transmisión vertical y por transfusión sanguínea representa un desafío diagnóstico emergente.",
    },
  ];

  return (
    <section id="que-es" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#E85D04]">
          ¿Qué es la Enfermedad de Chagas?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.titulo}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 border-l-4 border-[#E85D04] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#E85D04]/10">
                    <Icon size={22} className="text-[#E85D04]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {card.titulo}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-left md:text-justify">
                  {card.descripcion}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
