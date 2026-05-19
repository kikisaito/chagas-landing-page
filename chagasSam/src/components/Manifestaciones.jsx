"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Thermometer,
  Activity,
  Eye,
  HeartPulse,
  Brain,
  Stethoscope,
} from "lucide-react";
import Modal from "./Modal";

const fases = [
  {
    titulo: "Fase Aguda",
    icon: Activity,
    sintomas: [
      {
        titulo: "Fiebre prolongada",
        descripcion:
          "Respuesta inflamatoria sistémica mediada por citocinas proinflamatorias (IL-6, TNF-α) liberadas en respuesta a la replicación parasitaria.",
        detalle:
          "La fiebre en la fase aguda de la enfermedad de Chagas es de tipo remitente, con temperatura que oscila entre 38°C y 39.5°C, y persiste por más de 7 días. Se origina por la activación del sistema inmune innato ante la presencia de tripomastigotas en sangre periférica. Los macrófagos y células dendríticas reconocen glicoproteínas de superficie del parásito (gp82, gp90) a través de receptores Toll-like (TLR2, TLR4), desencadenando la liberación de pirógenos endógenos como IL-1β, IL-6 y TNF-α. Estos actúan sobre el centro termorregulador hipotalámico, elevando el punto de ajuste térmico. La persistencia febril refleja la parasitemia activa y la incapacidad del sistema inmune para contener la replicación del protozoario en las primeras semanas.",
        icon: Thermometer,
      },
      {
        titulo: "Malestar general",
        descripcion:
          "Síndrome constitucional inespecífico que incluye astenia, adinamia, mialgias, artralgias y cefalea.",
        detalle:
          "El malestar general responde al estado de inflamación sistémica inducido por la respuesta Th1 predominante. El interferón gamma (IFN-γ) y el factor de necrosis tumoral alfa (TNF-α) activan macrófagos con producción de óxido nítrico y especies reactivas de oxígeno, cuyo efecto citotóxico no se limita al parásito sino que también afecta tejidos del hospedero. Las mialgias y artralgias se atribuyen al depósito de complejos inmunes circulantes y a la infiltración de células mononucleares en el tejido muscular y sinovial.",
        icon: Activity,
      },
      {
        titulo: "Edema facial y palpebral (Signo de Romaña)",
        descripcion:
          "Edema bipalpebral unilateral indoloro con dacrioadenitis y conjuntivitis, característico de la puerta de entrada conjuntival.",
        detalle:
          "El Signo de Romaña constituye el signo patognomónico de la fase aguda y se presenta cuando la puerta de entrada del parásito es la mucosa conjuntival. Las formas tripomastigotas metacíclicas depositadas en la región periorbitaria penetran activamente las células epiteliales, desencadenando una reacción inflamatoria local intensa. El edema es de tipo duro, no fóvea, y se acompaña de infiltrado mononuclear (linfocitos T CD4+, macrófagos y eosinófilos). Histopatológicamente se observa paniculitis septal y lobulillar con necrosis focal. La dacrioadenitis y la adenopatía preauricular ipsilateral completan el complejo inflamatorio. Tiene una duración de 3 a 8 semanas y se resuelve espontáneamente sin dejar secuelas.",
        icon: Eye,
      },
      {
        titulo: "Hepatoesplenomegalia",
        descripcion:
          "Aumento del tamaño del hígado y bazo por activación del sistema fagocítico mononuclear.",
        detalle:
          "La hepatoesplenomegalia en la enfermedad de Chagas aguda refleja la activación masiva del sistema fagocítico mononuclear. En el hígado, los macrófagos de Kupffer hiperplásicos fagocitan activamente tripomastigotas circulantes y restos celulares, mientras que en el bazo ocurre hiperplasia linfoide de la pulpa blanca y congestión sinusoidal en la pulpa roja. Microscópicamente se observan nidos de amastigotas en células de Kupffer y hepatocitos, acompañados de focos de necrosis hepatocitaria. La esplenomegalia puede ser palpable a 2-4 cm por debajo del reborde costal izquierdo. Ambas condiciones son reversibles con la resolución de la parasitemia.",
        icon: HeartPulse,
      },
      {
        titulo: "Miocarditis aguda",
        descripcion:
          "Inflamación del miocardio por invasión directa de cardiomiocitos por T. cruzi.",
        detalle:
          "La miocarditis aguda chagásica representa la complicación más grave de la fase aguda, aunque ocurre en menos del 5% de los casos. Los tripomastigotas invaden los cardiomiocitos mediante un mecanismo dependiente de Ca²⁺, donde la glicoproteína gp82 del parásito se une a receptores de la superficie celular, induciendo la movilización de lisosomas hacia el sitio de entrada. Una vez intracelular, el parásito se diferencia a amastigota y se replica por fisión binaria, formando nidos parasitarios que distienden y rompen la célula huésped. La liberación de amastigotas al espacio intersticial perpetúa el ciclo inflamatorio con infiltrado difuso de linfocitos, macrófagos y eosinófilos. Clínicamente se presenta con taquicardia sinusal, arritmias ventriculares, cardiomegalia y, en casos severos, insuficiencia cardíaca aguda. La necrosis miocítica puede elevar biomarcadores como troponina I y CK-MB.",
        icon: HeartPulse,
      },
    ],
  },
  {
    titulo: "Fase Crónica",
    icon: Brain,
    sintomas: [
      {
        titulo: "Cardiopatía chagásica (arritmias, insuficiencia cardíaca)",
        descripcion:
          "Miocardiopatía dilatada con fibrosis intersticial difusa, daño del sistema de conducción y riesgo de muerte súbita.",
        detalle:
          "La cardiopatía chagásica crónica es la manifestación más temida y frecuente, apareciendo en 20-40% de los pacientes infectados tras 10-30 años de latencia. El mecanismo fisiopatológico principal es la persistencia antigénica con inflamación crónica mediada por linfocitos T CD8+ citotóxicos que infiltran el miocardio, generando daño tisular incluso en ausencia de parásitos detectables (autoinmunidad cruzada por mimetismo molecular entre proteínas de T. cruzi y proteínas cardíacas como la miosina). La fibrosis intersticial difusa reemplaza progresivamente el tejido contráctil, afectando particularmente el ápex del ventrículo izquierdo (aneurisma apical), la pared posterolateral y el sistema de conducción. El bloqueo de rama derecha asociado a hemibloqueo anterior izquierdo es el hallazgo electrocardiográfico más característico. Las arritmias ventriculares complejas (taquicardia ventricular sostenida) y la disfunción sistólica progresiva conducen a insuficiencia cardíaca refractaria y muerte súbita. La ecocardiografía muestra fracción de eyección reducida, disquinesia apical y trombos intraventriculares por estasis sanguínea.",
        icon: Stethoscope,
      },
      {
        titulo: "Megaesófago (disfagia, regurgitación)",
        descripcion:
          "Denervación del plexo mientérico con acalasia del esfínter esofágico inferior y dilatación esofágica progresiva.",
        detalle:
          "El megaesófago chagásico resulta de la destrucción selectiva e irreversible de las neuronas del plexo de Auerbach (mientérico) por la respuesta inflamatoria crónica. En condiciones normales, el esófago contiene aproximadamente 5,000 neuronas por cm² en el tercio distal; en pacientes chagásicos esta cifra se reduce a menos de 200. La pérdida del control inhibitorio nitrérgico (óxido nítrico) del esfínter esofágico inferior genera hipertonía e incapacidad de relajación durante la deglución (acalasia). Clínicamente progresa a través de 4 estadios (I-IV): desde disfagia intermitente para sólidos (estadio I) hasta dilatación masiva del esófago con retención de alimentos, regurgitación, sialorrea y desnutrición severa (estadio IV). La manometría esofágica revela aperistalsis del cuerpo esofágico y presión de reposo del EEI elevada (>45 mmHg). El megaesófago se asocia con mayor riesgo de carcinoma escamoso de esófago.",
        icon: Stethoscope,
      },
      {
        titulo: "Megacolon (estreñimiento severo)",
        descripcion:
          "Denervación parasimpática del colon con dilatación masiva, impactación fecal y pseudoobstrucción intestinal.",
        detalle:
          "El megacolon chagásico comparte el mismo mecanismo fisiopatológico que el megaesófago: destrucción del plexo mientérico, en este caso afectando predominantemente el colon sigmoides y recto. La pérdida de neuronas inhibitorias (VIPérgicas y nitrérgicas) genera hipertonía del músculo liso intestinal con incapacidad de relajación segmentaria, mientras que la pérdida de neuronas excitatorias colinérgicas reduce la motilidad propulsiva. El resultado es un tránsito intestinal prolongado (>120 horas), impactación fecal crónica y dilatación progresiva del colon que puede alcanzar diámetros mayores a 15 cm. Clínicamente se presenta con estreñimiento severo (evacuaciones cada 7-30 días), dolor abdominal tipo cólico, distensión abdominal y, en fases avanzadas, vólvulo del sigmoides con obstrucción intestinal aguda que requiere intervención quirúrgica urgente. El estudio radiológico con enema de bario muestra la dilatación segmentaria característica, típicamente en rectosigmoides.",
        icon: Activity,
      },
      {
        titulo: "Alteraciones neurológicas periféricas",
        descripcion:
          "Neuropatía periférica sensitivomotora por daño inflamatorio de nervios periféricos y ganglios raquídeos.",
        detalle:
          "Las alteraciones neurológicas en la enfermedad de Chagas crónica incluyen polineuropatía periférica sensitivomotora de predominio distal y simétrica. Histopatológicamente se observa desmielinización segmentaria y degeneración axonal en nervios periféricos, con infiltrado inflamatorio perivascular de linfocitos T CD8+ en el endoneuro. La destrucción de neuronas en los ganglios raquídeos dorsales afecta la transmisión de estímulos sensitivos, mientras que la pérdida de axones motores reduce la fuerza muscular distal. Electromiográficamente se evidencia disminución de la velocidad de conducción nerviosa sensitiva y motora. Clínicamente los pacientes refieren parestesias (hormigueo, ardor) en extremidades inferiores, hiporreflexia aquiliana, disminución de la sensibilidad vibratoria y propioceptiva, y debilidad muscular distal que puede progresar a atrofia. Estas manifestaciones son frecuentemente subdiagnosticadas por su progresión lenta.",
        icon: Brain,
      },
    ],
  },
];

export default function Manifestaciones() {
  const [modal, setModal] = useState({ isOpen: false, sintoma: null });

  const openModal = (sintoma) => setModal({ isOpen: true, sintoma });
  const closeModal = () => setModal({ isOpen: false, sintoma: null });

  return (
    <>
      <div className="grid gap-10 md:grid-cols-2">
        {fases.map((fase) => {
          const Icon = fase.icon;
          return (
            <div key={fase.titulo}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#E85D04]/10">
                  <Icon size={24} className="text-[#E85D04]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {fase.titulo}
                </h3>
              </div>

              <div className="space-y-4">
                {fase.sintomas.map((sintoma) => {
                  const SintomaIcon = sintoma.icon;
                  return (
                    <article
                      key={sintoma.titulo}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <SintomaIcon
                            size={18}
                            className="text-[#E85D04]"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white mb-1">
                            {sintoma.titulo}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed text-left md:text-justify">
                            {sintoma.descripcion}
                          </p>
                          <button
                            onClick={() => openModal(sintoma)}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#E85D04] hover:text-[#C04E03] transition-colors"
                          >
                            Ver detalles clínicos
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Modal
        isOpen={modal.isOpen}
        onClose={closeModal}
        titulo={modal.sintoma?.titulo}
      >
        {modal.sintoma && (
          <>
            {modal.sintoma.titulo ===
              "Edema facial y palpebral (Signo de Romaña)" && (
              <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-6">
                <Image
                  src="/images/romana.jpg"
                  alt="Signo de Romaña - edema bipalpebral unilateral"
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <p className="text-gray-300 italic border-l-4 border-[#E85D04] pl-4 mb-6 text-left md:text-justify">
              {modal.sintoma.descripcion}
            </p>
            <p className="text-gray-300 text-left md:text-justify">{modal.sintoma.detalle}</p>
          </>
        )}
      </Modal>
    </>
  );
}
