"use client";

import { useState } from "react";
import {
  Microscope,
  FlaskConical,
  Dna,
  Stethoscope,
  FileText,
  TestTube,
} from "lucide-react";
import Modal from "./Modal";

const grupos = [
  {
    titulo: "Fase Aguda",
    icon: FlaskConical,
    metodos: [
      {
        titulo: "Gota gruesa y frotis",
        descripcion:
          "Visualización microscópica directa de tripomastigotas móviles en sangre periférica.",
        detalle:
          "Fundamento: Se coloca una gota de sangre fresca (10-15 µL) entre porta y cubreobjetos sin fijar ni teñir, y se examina al microscopio óptico con objetivo seco de 40x en campo oscuro o contraste de fases. Los tripomastigotas se identifican por su morfología característica: cuerpo alargado y fusiforme de 16-22 µm de longitud, membrana ondulante lateral, flagelo libre anterior y núcleo central. Su movimiento es helicoidal y progresivo, distinguiéndose de otros protozoarios sanguíneos. La sensibilidad diagnóstica en fases agudas es de 60-80% cuando la parasitemia supera 10⁴ parásitos/mL. El frotis delgado teñido con Giemsa permite observar detalles morfológicos como el cinetoplasto (estructura mitocondrial rica en ADN, visible como un gránulo oscuro en posición posterior) que confirma la identificación de especie.",
        icon: Microscope,
      },
      {
        titulo: "Microhematocrito",
        descripcion:
          "Técnica de concentración por centrifugación capilar para aumentar la sensibilidad diagnóstica.",
        detalle:
          "Fundamento: Se llenan 4-6 capilares heparinizados (75 µL cada uno) con sangre periférica y se centrifugan a 12,000 rpm durante 5 minutos en una microcentrífuga. La centrifugación estratifica la sangre en tres fases: plasma (superior), capa leucocitaria o flogística (intermedia) y eritrocitos (inferior). Los tripomastigotas, por su densidad intermedia, se concentran en la capa flogística. Se rompe el capilar a 1-2 mm por encima de la interfase y se examina el contenido al microscopio con objetivo seco de 40x. La técnica aumenta la sensibilidad hasta 85-95% en fase aguda al concentrar el parásito de 4-6 capilares simultáneamente (volumen total de 300-450 µL). Es particularmente útil en zonas rurales sin acceso a electricidad estable, pues puede realizarse con centrifugadores manuales tipo microhematocrito.",
        icon: TestTube,
      },
      {
        titulo: "Examen en fresco",
        descripcion:
          "Observación microscópica de sangre total entre porta y cubre sin tinción para detectar parásitos vivos.",
        detalle:
          "Fundamento: Se deposita una gota de sangre recién extraída (aproximadamente 20 µL) sobre un portaobjetos, se cubre con un cubreobjetos de 22×22 mm y se examina inmediatamente con objetivo de 20x y 40x. La ventaja de esta técnica radica en la detección de parásitos viables con movimiento activo, lo que facilita su identificación incluso en parasitemias bajas. El tripomastigota en fresco muestra un movimiento ondulante característico que permite diferenciarlo de artefactos (plaquetas, cuerpos de Howell-Jolly, fragmentos celulares). La limitación principal es que la preparación se deseca rápidamente (3-5 minutos), por lo que el examen debe ser expedito. Se recomienda examinar al menos 100 campos microscópicos antes de reportar como negativo.",
        icon: Stethoscope,
      },
      {
        titulo: "Concentración de Strout",
        descripcion:
          "Método de concentración por centrifugación diferencial que sedimenta tripomastigotas de grandes volúmenes de sangre.",
        detalle:
          "Fundamento: Se recolectan 5-10 mL de sangre sin anticoagulante y se dejan coagular a temperatura ambiente durante 30 minutos. El coágulo se desmenuza con una varilla de vidrio estéril y se centrifuga a 1,500 rpm durante 10 minutos. El sobrenadante (suero) se transfiere a un tubo limpio y se centrifuga nuevamente a 3,000 rpm durante 15 minutos. El sedimento final se resuspende en 0.5-1 mL de suero residual y se examina al microscopio. La concentración de Strout permite procesar un volumen de sangre 50-100 veces mayor que la gota gruesa, incrementando significativamente la sensibilidad en casos con parasitemia baja (hasta 10² parásitos/mL). Es la técnica de elección cuando se sospecha Chagas agudo con gota gruesa negativa.",
        icon: FileText,
      },
    ],
  },
  {
    titulo: "Fase Crónica",
    icon: FlaskConical,
    metodos: [
      {
        titulo: "ELISA",
        descripcion:
          "Ensayo inmunoenzimático que detecta anticuerpos IgG anti-T. cruzi en suero sanguíneo.",
        detalle:
          "Fundamento: Se sensibiliza una fase sólida (policubeta de poliestireno de 96 pozos) con antígenos recombinantes purificados de T. cruzi (proteínas como Ag2, Ag13, SAPA, B13, o lisados totales de epimastigotas). Se añade el suero del paciente (diluido 1:100-1:200) y se incuba a 37°C durante 30-60 minutos. Los anticuerpos IgG específicos presentes en el suero se unen a los antígenos adsorbidos. Tras un lavado con solución salina tamponada (PBS-Tween 0.05%, pH 7.4) para eliminar anticuerpos no unidos, se agrega un conjugado enzimático (anti-IgG humana acoplada a peroxidasa de rábano picante o fosfatasa alcalina). Se incuba nuevamente y se lava. Finalmente se añade el sustrato cromogénico (TMB para peroxidasa, que genera color azul, o p-nitrofenilfosfato para fosfatasa alcalina, que genera color amarillo). La reacción se detiene con ácido sulfúrico 2N y se lee la absorbancia a 450 nm (TMB) o 405 nm (PNPP) en un espectrofotómetro de microplacas. La densidad óptica es directamente proporcional a la concentración de anticuerpos. Sensibilidad >98%, especificidad >99% en fase crónica.",
        icon: FlaskConical,
      },
      {
        titulo: "IFI (Inmunofluorescencia Indirecta)",
        descripcion:
          "Técnica serológica que utiliza epimastigotas fijados como sustrato antigénico para detectar anticuerpos.",
        detalle:
          "Fundamento: Se preparan extendidos de epimastigotas de T. cruzi (cultivo axénico en medio LIT) sobre portaobjetos, se fijan con acetona fría o paraformaldehído al 4% y se conservan a -20°C. Se añade el suero del paciente en diluciones seriadas (1:32, 1:64, 1:128...) y se incuba en cámara húmeda a 37°C por 30 minutos. Los anticuerpos específicos se unen a antígenos de superficie del parásito. Tras lavado con PBS, se aplica un conjugado anti-IgG humana marcado con isotiocianato de fluoresceína (FITC). Se incuba, se lava y se monta con medio de montaje (glicerol-PBS 9:1). La lectura se realiza en microscopio de fluorescencia con filtro de excitación de 490 nm y emisión de 520 nm. La fluorescencia verde característica en la membrana y flagelo del parásito indica positividad. El título se define como la máxima dilución que produce fluorescencia detectable. Punto de corte: ≥1:32. Sensibilidad del 95% en crónico. Ventaja: permite visualizar el patrón de fluorescencia (periférico vs. citoplasmático).",
        icon: Microscope,
      },
      {
        titulo: "Hemaglutinación Indirecta",
        descripcion:
          "Técnica serológica que emplea eritrocitos sensibilizados con antígenos parasitarios para detectar anticuerpos aglutinantes.",
        detalle:
          "Fundamento: Se utilizan glóbulos rojos humanos del grupo O Rh⁻ (o eritrocitos de carnero) tratados con ácido tánico o glutaraldehído para estabilizarlos y aumentar su capacidad de adsorción antigénica. Los eritrocitos se sensibilizan con antígenos solubles de T. cruzi (sobrenadante de cultivo de epimastigotas sonicado y centrifugado a 10,000 g). El suero del paciente se diluye en solución salina 0.9% en placas de microtitulación de fondo en U. Se añaden los eritrocitos sensibilizados y se incuba a 37°C por 1-2 horas. Si hay anticuerpos específicos (principalmente IgM e IgG), estos forman puentes entre eritrocitos adyacentes, generando una malla de aglutinación que se deposita como un patrón difuso en el fondo del pozo. La ausencia de anticuerpos permite que los eritrocitos sedimenten formando un botón compacto y definido en el centro. El título se reporta como la inversa de la máxima dilución que produce aglutinación visible. Sensibilidad del 89-94% en fase crónica. Es una técnica sencilla, económica y que no requiere equipo especializado.",
        icon: TestTube,
      },
    ],
  },
  {
    titulo: "Técnicas Moleculares",
    icon: Dna,
    metodos: [
      {
        titulo: "PCR (Reacción en Cadena de la Polimerasa)",
        descripcion:
          "Amplificación exponencial de secuencias específicas de ADN del T. cruzi para detección ultrasensible.",
        detalle:
          "Fundamento: La PCR convencional amplifica secuencias de ADN satélite repetitivo de T. cruzi. Se extrae ADN total de 200 µL de sangre periférica o biopsia tisular mediante columnas de sílice (Qiagen DNeasy) o extracción con fenol-cloroformo. El ADN extraído (50-100 ng) se somete a amplificación en un termociclador con los siguientes parámetros: desnaturalización inicial a 94°C por 5 minutos, seguida de 35 ciclos de desnaturalización (94°C, 30 s), alineación de cebadores (60°C, 30 s) y extensión (72°C, 45 s). Se utiliza un par de oligonucleótidos que flanquean la región de 330 pb del ADN satélite de T. cruzi (cebadores TCZ1/TCZ2). Los productos amplificados se detectan mediante electroforesis en gel de agarosa al 2% teñido con SybrSafe o bromuro de etidio. La presencia de una banda de 330 pb confirma la infección. La sensibilidad alcanza 0.1-1 parásito equivalente/mL de sangre, superior a cualquier método parasitológico. En fase crónica, donde la parasitemia es intermitente y baja, la PCR duplica la sensibilidad diagnóstica comparada con métodos serológicos.",
        icon: Dna,
      },
    ],
  },
];

export default function Diagnostico() {
  const [modal, setModal] = useState({ isOpen: false, metodo: null });

  const openModal = (metodo) => setModal({ isOpen: true, metodo });
  const closeModal = () => setModal({ isOpen: false, metodo: null });

  return (
    <>
      <div className="grid gap-8 md:grid-cols-3">
        {grupos.map((grupo) => {
          const GrupoIcon = grupo.icon;
          return (
            <div key={grupo.titulo}>
              <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
                <div className="p-2 rounded-lg bg-[#E85D04]/10">
                  <GrupoIcon size={22} className="text-[#E85D04]" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {grupo.titulo}
                </h3>
              </div>

              <div className="space-y-4">
                {grupo.metodos.map((metodo) => {
                  const MetodoIcon = metodo.icon;
                  return (
                    <article
                      key={metodo.titulo}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-1 shrink-0">
                          <MetodoIcon
                            size={18}
                            className="text-[#E85D04]"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-white mb-1">
                            {metodo.titulo}
                          </h4>
                           <p className="text-gray-300 text-sm leading-relaxed text-left md:text-justify">
                            {metodo.descripcion}
                          </p>
                          <button
                            onClick={() => openModal(metodo)}
                            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[#E85D04] hover:text-[#C04E03] transition-colors"
                          >
                            Ver fundamento técnico
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
        titulo={modal.metodo?.titulo}
      >
        {modal.metodo && (
          <>
            <p className="text-gray-300 italic border-l-4 border-[#E85D04] pl-4 mb-6 text-left md:text-justify">
              {modal.metodo.descripcion}
            </p>
            <p className="text-gray-300 text-left md:text-justify">{modal.metodo.detalle}</p>
          </>
        )}
      </Modal>
    </>
  );
}
