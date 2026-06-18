import { Bookmark } from "lucide-react";

export default function Conclusion() {
  return (
    <section id="conclusiones" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <Bookmark size={24} className="text-[#E85D04]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E85D04]">
            Conclusión Institucional
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 md:p-8">
          <p className="text-gray-300 leading-relaxed text-left md:text-justify">
            Comprender la complejidad biológica de <em>Trypanosoma cruzi</em> y
            sus diversas vías de transmisión nos da un panorama de la necesidad
            de un abordaje integral frente a una enfermedad que sigue siendo
            silenciosa. Como futuros profesionales de la salud, nuestro
            compromiso no solo radica en el dominio de las técnicas de
            laboratorio y el tamizaje para reducir la fase crónica de la
            enfermedad, sino también en incidir activamente en la educación
            comunitaria, con estas acciones podremos transformar el diagnóstico
            oportuno en una realidad accesible para las poblaciones más
            vulnerables.
          </p>
        </div>
      </div>
    </section>
  );
}
