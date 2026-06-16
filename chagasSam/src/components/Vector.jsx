"use client";

import { useState } from "react";
import Image from "next/image";
import { Home, Bug, X } from "lucide-react";

const especies = [
  {
    nombre: "Triatoma dimidiata",
    imagen: "/images/vector-dimidiata.jpg",
    descripcion:
      "Principal vector en México y Centroamérica. Presente en 18 estados de la República Mexicana. Longitud 25-32 mm, coloración marrón oscura con manchas anaranjadas características en el conexivo. Hábitat peridoméstico (gallineros, corrales, pilas de leña) con marcada tendencia a invadir viviendas humanas. Alta capacidad de dispersión (vuelo activo). Índice de infección natural por T. cruzi del 20-60% en zonas endémicas.",
  },
  {
    nombre: "Triatoma pallidipennis",
    imagen: "/images/vector-pallidipennis.jpg",
    descripcion:
      "Vector relevante en México, particularmente en la región del Pacífico y zonas del centro del país. Longitud 22-28 mm, coloración marrón claro con bandas pálidas características en el conexivo. Hábitat peridoméstico y doméstico, frecuentemente encontrado en corrales, gallineros y grietas de paredes de adobe. Presenta un índice de infección natural por T. cruzi significativo en zonas endémicas.",
  },
  {
    nombre: "Triatoma barberi",
    imagen: "/images/vector-barberi.jpg",
    descripcion:
      "Especie endémica de México, considerada una de las más importantes en la transmisión intradomiciliaria. Longitud 20-26 mm, coloración marrón oscura a negruzca. Altamente adaptada al hábitat doméstico, coloniza activamente las viviendas humanas, especialmente en zonas rurales del centro y sur del país. Su estrecha asociación con el ser humano la convierte en un vector de alto riesgo epidemiológico.",
  },
];

export default function Vector() {
  const [imagenExpandida, setImagenExpandida] = useState(null);

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
            <p className="text-gray-300 leading-relaxed text-left md:text-justify">
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
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div
                    className="relative w-full h-40 rounded-lg overflow-hidden mb-3 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setImagenExpandida(especie.imagen)}
                  >
                    <Image
                      src={especie.imagen}
                      alt={especie.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white italic">
                      {especie.nombre}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed mt-1 text-left md:text-justify">
                      {especie.descripcion}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>

      {imagenExpandida && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setImagenExpandida(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
            onClick={() => setImagenExpandida(null)}
          >
            <X size={32} />
          </button>
          <div
            className="relative w-full max-w-5xl h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagenExpandida}
              alt="Imagen expandida de especie vector"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
