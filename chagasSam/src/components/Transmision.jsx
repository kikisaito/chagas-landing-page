import { Bug, Baby, Droplets, Heart, Apple } from "lucide-react";

const formas = [
  {
    titulo: "Vectorial",
    icon: Bug,
    descripcion:
      "Mecanismo principal de transmisión en zonas endémicas. Ocurre cuando las heces del triatomino infectado entran en contacto con la piel lesionada (picadura previa) o mucosas (conjuntiva, labios). Cada deposición del insecto puede contener miles de tripomastigotas metacíclicos. La eficiencia de transmisión depende de la concentración de parásitos en las heces y del tiempo de defecación post-alimentación (especies como Triatoma dimidiata defecan durante la alimentación, aumentando el riesgo).",
  },
  {
    titulo: "Congénita",
    icon: Baby,
    descripcion:
      "Transmisión vertical de madre a hijo durante el embarazo, con una tasa de transmisión del 1-10% en mujeres infectadas. Ocurre principalmente en el segundo y tercer trimestre por vía transplacentaria. Los tripomastigotas atraviesan la barrera placentaria invadiendo las vellosidades coriónicas. En países no endémicos, el tamizaje serológico universal en mujeres embarazadas de zonas endémicas es la estrategia recomendada por la OPS para interrumpir la transmisión congénita.",
  },
  {
    titulo: "Transfusión Sanguínea",
    icon: Droplets,
    descripcion:
      "Segunda vía de transmisión más frecuente en zonas urbanas. El tripomastigota puede sobrevivir hasta 18-21 días en sangre almacenada a 4°C. El riesgo de transmisión por unidad de sangre contaminada es del 10-25%. En México, la NOM-253-SSA1-2012 establece la prueba serológica obligatoria para Chagas en todos los donantes de sangre. Se estima que en América Latina el 1-2% de las unidades de sangre pueden estar contaminadas en ausencia de tamizaje.",
  },
  {
    titulo: "Trasplante de Órganos",
    icon: Heart,
    descripcion:
      "Transmisión documentada en trasplantes de corazón, riñón, hígado y páncreas de donantes infectados. Los órganos sólidos contienen amastigotas viables en tejido muscular y reticuloendotelial. Los receptores inmunosuprimidos tienen alto riesgo de desarrollar Chagas agudo severo con miocarditis y encefalitis. La serología pretrasplante en donante y receptor, así como la profilaxis con benznidazol en receptores seropositivos, son medidas obligatorias según las guías de la Sociedad Internacional de Trasplantes.",
  },
  {
    titulo: "Vía Oral",
    icon: Apple,
    descripcion:
      "Transmisión por ingestión de alimentos o bebidas contaminados con heces de triatominos infectados o secreciones de marsupiales (zarigüeyas). Los brotes por vía oral se caracterizan por alta tasa de ataque (30-70% de los expuestos) y cuadros clínicos más severos con miocarditis aguda y mortalidad del 5-15%. Los alimentos implicados incluyen jugo de caña de azúcar, açaí, bacaba y agua de coco contaminados. En la región amazónica, la vía oral ha emergido como la principal forma de transmisión en los últimos años.",
  },
];

export default function Transmision() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {formas.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.titulo}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-[#E85D04]/10">
                <Icon size={20} className="text-[#E85D04]" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {item.titulo}
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              {item.descripcion}
            </p>
          </article>
        );
      })}
    </div>
  );
}
