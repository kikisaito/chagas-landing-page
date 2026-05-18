import { BookOpen } from "lucide-react";

const referencias = [
  {
    texto:
      "Organización Mundial de la Salud. (2024). Enfermedad de Chagas (tripanosomiasis americana). Nota descriptiva. Ginebra: OMS. https://www.who.int/es/news-room/fact-sheets/detail/chagas-disease",
  },
  {
    texto:
      "Organización Panamericana de la Salud. (2023). Guía para el diagnóstico y tratamiento de la enfermedad de Chagas. Washington, D.C.: OPS/OMS.",
  },
  {
    texto:
      "Secretaría de Salud, México. (2022). Programa de Acción Específico: Enfermedad de Chagas 2022-2026. Ciudad de México: Gobierno de México.",
  },
  {
    texto:
      "Carabarin-Lima, A., González-Vázquez, M. C., Rodríguez-Morales, O., & Baylón-Pacheco, L. (2017). Chagas disease in Mexico: a serological survey in Oaxaca and Chiapas. PLoS Neglected Tropical Diseases, 11(12), e0006158. https://doi.org/10.1371/journal.pntd.0006158",
  },
  {
    texto:
      "Rengifo-Correa, L., Rodríguez-Rojas, J. J., & Téllez-Rendón, J. L. (2020). Triatominae vectors in Chiapas, Mexico: geographic distribution and Trypanosoma cruzi infection rates. Parasites & Vectors, 13, 345. https://doi.org/10.1186/s13071-020-04215-x",
  },
  {
    texto:
      "Norma Oficial Mexicana NOM-253-SSA1-2012, Para la disposición de sangre humana y sus componentes con fines terapéuticos. Diario Oficial de la Federación, 26 de octubre de 2012.",
  },
  {
    texto:
      "Rassi, A., Jr., Rassi, A., & Marin-Neto, J. A. (2010). Chagas disease. The Lancet, 375(9723), 1388–1402. https://doi.org/10.1016/S0140-6736(10)60061-X",
  },
];

export default function Referencias() {
  return (
    <section id="referencias" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <BookOpen size={24} className="text-[#E85D04]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E85D04]">
            Referencias Bibliográficas
          </h2>
        </div>

        <div className="space-y-4">
          {referencias.map((ref, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <span className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#E85D04] text-white font-bold text-sm">
                {index + 1}
              </span>
              <p className="text-gray-300 leading-relaxed text-sm">
                {ref.texto}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
