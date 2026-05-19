import { MapPin, AlertTriangle, Users } from "lucide-react";

export default function Epidemiologia() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <MapPin size={20} className="text-[#E85D04]" />
          </div>
          <h3 className="text-lg font-bold text-white">
            Riesgo Nacional
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-left md:text-justify">
          El <strong className="text-white">88%</strong> del territorio nacional (equivalente a
          aproximadamente 1,727,000 km²) reúne las condiciones
          eco-epidemiológicas para la transmisión vectorial de T. cruzi.
          El subregistro de casos alcanza niveles críticos: se estima que
          menos del <strong className="text-white">1%</strong> de los casos reales son
          notificados oficialmente, lo que invisibiliza la magnitud real
          del problema y dificulta la asignación de recursos para
          prevención y control. La seroprevalencia nacional en población
          general se estima entre 1-3%, con focos de hasta 15-20% en
          comunidades rurales de alta endemicidad.
        </p>
      </article>

      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 border-t-4 border-[#E85D04]">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <AlertTriangle size={20} className="text-[#E85D04]" />
          </div>
          <h3 className="text-lg font-bold text-white">
            Alerta en Chiapas
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-left md:text-justify">
          El estado de Chiapas presenta focos de transmisión activa con
          hasta un <strong className="text-white">13%</strong> de positividad serológica en
          comunidades rurales como <strong className="text-white">Las Maravillas</strong> y{" "}
          <strong className="text-white">Nuevo Chacacal</strong>, municipio de Ocosingo. Estas
          comunidades, caracterizadas por viviendas de palma y adobe con
          alta infestación vectorial ({'>'}50% de viviendas positivas para
          triatominos), representan focos de atención prioritaria para
          los programas de control vectorial y tamizaje masivo. La
          positividad del 13% duplica el promedio estatal (5.3%) y
          quintuplica el nacional (2.8%).
        </p>
      </article>

      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <Users size={20} className="text-[#E85D04]" />
          </div>
          <h3 className="text-lg font-bold text-white">
            Percepción Social
          </h3>
        </div>
        <p className="text-gray-300 leading-relaxed text-left md:text-justify">
          Estudios de conocimiento, actitudes y prácticas (CAP) realizados
          en comunidades endémicas de Chiapas revelan que solo entre el{" "}
          <strong className="text-white">30% y 31%</strong> de la población reconoce al vector
          (chinche besucona) como agente transmisor de la enfermedad. El
          60-70% restante desconoce la relación entre el insecto y la
          enfermedad, atribuyendo los síntomas a causas sobrenaturales o
          a otras enfermedades febriles. Este desconocimiento limita la
          adopción de medidas preventivas y la búsqueda oportuna de
          atención médica, perpetuando el ciclo de transmisión y
          subdiagnóstico.
        </p>
      </article>
    </div>
  );
}
