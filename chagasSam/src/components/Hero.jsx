import Image from "next/image";
import { Bug } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[70vh] flex items-center overflow-hidden"
    >
      <Image
        src="/images/hero-bg.jpg"
        alt="Trypanosoma cruzi - micrografía"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#E85D04]/80 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-8">
          <Bug size={16} className="text-[#E85D04]" />
          <span className="text-white/70 text-sm font-medium tracking-wider uppercase">
            Enfermedad de Chagas
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Chagas{" "}
          <span className="text-[#E85D04]">Bajo la Lupa</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold text-white/90 mb-8">
          La importancia del diagnóstico temprano
        </p>

        <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
          La enfermedad de Chagas representa un problema de salud pública en 21
          países de América Latina, con m&aacute;s de 7 millones de personas infectadas
          y cerca de 10,000 muertes anuales. Causada por el protozoario
          <em> Trypanosoma cruzi</em>, su naturaleza silenciosa &mdash;con una fase
          aguda oligosin-tom&aacute;tica y una cr&oacute;nica que puede permanecer latente
          d&eacute;cadas&mdash; hace que el diagn&oacute;stico temprano sea la herramienta m&aacute;s
          poderosa para prevenir complicaciones card&iacute;acas, digestivas y
          neurol&oacute;gicas irreversibles.
        </p>
      </div>
    </section>
  );
}
