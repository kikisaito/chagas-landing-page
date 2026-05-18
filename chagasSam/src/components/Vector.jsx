import Image from "next/image";
import { Home, Bug } from "lucide-react";

const especies = [
  {
    nombre: "Triatoma dimidiata",
    descripcion:
      "Principal vector en México y Centroamérica. Presente en 18 estados de la República Mexicana. Longitud 25-32 mm, coloración marrón oscura con manchas anaranjadas características en el conexivo. Hábitat peridoméstico (gallineros, corrales, pilas de leña) con marcada tendencia a invadir viviendas humanas. Alta capacidad de dispersión (vuelo activo). Índice de infección natural por T. cruzi del 20-60% en zonas endémicas.",
  },
  {
    nombre: "Rhodnius prolixus",
    descripcion:
      "Vector principal en el norte de Sudamérica (Colombia, Venezuela, Guyana). Longitud 20-27 mm, coloración marrón clara con bandas transversales más oscuras en el abdomen. Estrechamente asociado a palmeras (Attalea butyracea, Elaeis guineensis) donde las aves y roedores actúan como reservorios. Alta eficiencia vectorial debido a su corto tiempo de defecación post-alimentación (1-2 minutos). Ha sido objeto de programas de eliminación en Centroamérica con resultados favorables.",
  },
  {
    nombre: "Panstrongylus rufotuberculatus",
    descripcion:
      "Especie silvestre con distribución desde México hasta Argentina. Longitud 30-38 mm (uno de los triatominos más grandes). Coloración negruzca con manchas rojas en el conexivo. Hábitat principalmente silvestre (huecos de árboles, cuevas, nidos de mamíferos), pero con incursiones peridomésticas en zonas de deforestación. Se alimenta de una amplia gama de hospederos incluyendo armadillos, zarigüeyas y roedores. Su importancia epidemiológica ha aumentado por la invasión de hábitats modificados por el humano.",
  },
];

export default function Vector() {
  return (
    <>
      <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
        <Image
          src="/images/vector.jpg"
          alt="Triatoma dimidiata - vector de la enfermedad de Chagas"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 h-full">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-[#E85D04]/10">
                <Home size={22} className="text-[#E85D04]" />
              </div>
              <h3 className="text-xl font-bold text-white">Hábitat</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Los triatominos habitan en grietas de paredes de adobe o
              bajareque, techos de palma, corrales, gallineros y
              acumulaciones de leña y escombros. Prefieren temperaturas
              entre 25-30°C y humedad relativa del 60-80%. Son insectos
              nocturnos que se ocultan durante el día en refugios oscuros
              y estrechos. La distribución altitudinal abarca desde el
              nivel del mar hasta 2,500 msnm. La deforestación y el cambio
              climático están expandiendo su rango geográfico hacia zonas
              previamente libres del vector.
            </p>
          </article>
        </div>

        <div className="lg:col-span-2">
          <article className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#E85D04]/10">
                <Bug size={22} className="text-[#E85D04]" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Especies Clave
              </h3>
            </div>

            <div className="space-y-5">
              {especies.map((especie) => (
                <div
                  key={especie.nombre}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <span className="mt-2 w-2 h-2 bg-[#E85D04] rounded-full shrink-0" />
                  <div>
                    <h4 className="font-bold text-white italic">
                      {especie.nombre}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mt-1">
                      {especie.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
