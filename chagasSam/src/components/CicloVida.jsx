"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bug, User, ArrowRightCircle, ChevronLeft, ChevronRight } from "lucide-react";

const fases = [
  {
    icon: Bug,
    titulo: "Fase en el Insecto",
    texto:
      "El triatomino ingiere tripomastigotas al alimentarse de un huésped infectado. En el intestino medio del insecto, los parásitos se diferencian a epimastigotas y se multiplican activamente por fisión binaria. Al alcanzar el intestino posterior, los epimastigotas se adhieren a la membrana perimicrovilar y se transforman en tripomastigotas metacíclicos, la forma infectante para mamíferos. Este proceso, denominado metaciclogénesis, tarda aproximadamente 15-30 días y depende de la temperatura (óptimo 26-28°C) y la composición bioquímica del intestino del vector.",
  },
  {
    icon: ArrowRightCircle,
    titulo: "Transmisión al Humano",
    texto:
      "Durante la hematofagia (que dura 10-30 minutos), el triatomino defeca activamente liberando tripomastigotas metacíclicos. El parásito no se transmite por la picadura sino por contaminación de la herida punzante o mucosas con las heces infectadas. Las glicoproteínas de superficie del parásito (gp82, gp90) median la adhesión e invasión celular. La entrada a células del hospedero ocurre por fagocitosis en macrófagos y por endocitosis mediada por receptor en células no fagocíticas, requiriendo movilización de lisosomas y elevación de Ca²⁺ intracitoplasmático.",
  },
  {
    icon: User,
    titulo: "Fase en el Humano",
    texto:
      "Tras la invasión celular, el tripomastigota se diferencia a amastigota (forma redondeada sin flagelo externo de 2-4 µm) y se replica por fisión binaria simple cada aproximadamente 12-14 horas, formando nidos parasitarios intracitoplasmáticos. Tras 4-5 días de replicación, los amastigotas se diferencian nuevamente a tripomastigotas que rompen la célula huésped por lisis mecánica y enzimática. Los tripomastigotas liberados invaden células vecinas o diseminan por vía sanguínea y linfática a tejidos distantes, particularmente miocardio, músculo liso y células del sistema fagocítico mononuclear.",
  },
];

export default function CicloVida() {
  const [faseActiva, setFaseActiva] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setFaseActiva((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const anterior = () =>
    setFaseActiva((prev) => (prev - 1 + 3) % 3);

  const siguiente = () =>
    setFaseActiva((prev) => (prev + 1) % 3);

  return (
    <section id="ciclo-vida" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#E85D04]">
          El Ciclo de Vida del Parásito
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto text-sm">
          El ciclo biológico de <em>Trypanosoma cruzi</em> alterna entre el
          vector invertebrado y el hospedero mamífero. Explora cada fase.
        </p>

        <div
          className="relative overflow-hidden rounded-xl shadow-lg max-w-4xl mx-auto min-h-[26rem] md:min-h-[24rem]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <Image
            src="/images/ciclo-vida.jpg"
            alt="Ilustración del ciclo biológico de Trypanosoma cruzi"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/85" />

          {fases.map((f, i) => {
            const SlideIcon = f.icon;
            return (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center p-8 md:p-14 transition-all duration-700 ${
                  i === faseActiva
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <div className="text-white max-w-xl relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-[#E85D04]/20">
                      <SlideIcon size={24} className="text-[#E85D04]" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">
                      {f.titulo}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {f.texto}
                  </p>
                </div>
              </div>
            );
          })}

          <button
            onClick={anterior}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={siguiente}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white z-10"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 mt-5">
          {fases.map((_, i) => (
            <button
              key={i}
              onClick={() => setFaseActiva(i)}
              className={`h-3 rounded-full transition-all duration-300 ${
                i === faseActiva
                  ? "bg-[#E85D04] w-8"
                  : "bg-gray-600 w-3 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
