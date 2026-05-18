import { Home, DoorOpen, Trash2, HeartPulse } from "lucide-react";

export default function Prevencion() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4">
          <Home size={24} className="text-[#E85D04]" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-white">
          Mejoras en el Hogar
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          Repellar paredes de adobe o bajareque con mezcla de cemento-cal
          (proporción 1:3), sellar grietas y fisuras con sellador
          acrílico o mortero, y reemplazar techos de palma por lámina
          galvanizada o teja de barro. Estas modificaciones eliminan los
          refugios diurnos del vector y reducen la infestación
          intradomiciliaria en más del 80%. Complementar con rociado
          intradomiciliario residual con insecticidas piretroides
          (deltametrina 25 mg/m², cipermetrina 50 mg/m²) cada 6-12 meses.
        </p>
      </article>

      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4">
          <DoorOpen size={24} className="text-[#E85D04]" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-white">
          Barreras Físicas
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          Instalación de mosquiteros en puertas y ventanas (malla de
          poliéster o fibra de vidrio con abertura ≤1.5 mm) y toldillos
          impregnados con insecticida de liberación lenta (piretroides
          microencapsulados) alrededor de las camas. Los toldillos
          impregnados reducen la densidad de triatominos intradomiciliarios
          en un 60-80% y la incidencia de nuevas infecciones en niños
          menores de 5 años. Uso de burletes en puertas y sellado de
          ductos de instalaciones eléctricas y sanitarias.
        </p>
      </article>

      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4">
          <Trash2 size={24} className="text-[#E85D04]" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-white">
          Higiene Peridoméstica
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          Reubicar corrales y gallineros a una distancia mínima de 15-20
          metros de la vivienda principal. Almacenar leña y materiales de
          construcción en plataformas elevadas (mínimo 30 cm del suelo).
          Evitar acumulación de escombros, llantas y objetos inservibles
          en el perímetro de la vivienda. Mantener la vegetación
          circundante podada y libre de maleza. La implementación de
          estas medidas reduce la presión vectorial peridoméstica en un
          70-90% y la colonización intradomiciliaria en un 40-60%.
        </p>
      </article>

      <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4">
          <HeartPulse size={24} className="text-[#E85D04]" />
        </div>
        <h3 className="text-lg font-bold mb-3 text-white">
          Tamizaje Oportuno
        </h3>
        <p className="text-gray-300 leading-relaxed text-sm">
          Implementar tamizaje serológico universal con pruebas de
          ELISA en: (1) mujeres embarazadas residentes o procedentes de
          zonas endémicas (idealmente en el primer control prenatal, con
          seguimiento del recién nacido al año de vida), (2) donadores
          de sangre (obligatorio según NOM-253-SSA1-2012), (3)
          familiares en primer grado de pacientes chagásicos
          confirmados, y (4) pacientes con cardiopatía dilatada de causa
          no aclarada, megaesófago o megacolon. El diagnóstico temprano
          permite el tratamiento etiológico con benznidazol 5-10
          mg/kg/día por 60 días, con eficacia {'>'}80% en fase aguda y {'>'}60%
          en crónica reciente.
        </p>
      </article>
    </div>
  );
}
