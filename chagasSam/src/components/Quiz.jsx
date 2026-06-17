"use client";

import { useState, useMemo } from "react";
import {
  Brain,
  RotateCcw,
  ArrowLeft,
  Search,
  Sparkles,
} from "lucide-react";

const preguntas = [
  {
    enunciado:
      "¿Cuál es el mecanismo principal de transmisión de Trypanosoma cruzi del vector al ser humano?",
    opciones: [
      "Inoculación directa de saliva durante la picadura",
      "Contacto con las deyecciones (heces u orina) infectadas tras la picadura",
      "Ingesta de alimentos contaminados con el insecto completo",
      "Transmisión por vía aérea en zonas peridomésticas",
    ],
    correcta: 1,
  },
  {
    enunciado:
      "¿Qué prueba diagnóstica es la de elección durante la fase crónica de la enfermedad de Chagas debido a la baja parasitemia?",
    opciones: [
      "Examen directo en fresco de sangre periférica",
      "Pruebas serológicas basadas en detección de anticuerpos IgG (ELISA o IFI)",
      "Frotis sanguíneo teñido con Giemsa",
      "Método de concentración de Strout",
    ],
    correcta: 1,
  },
  {
    enunciado:
      "¿Cuál es la manifestación clínica patognomónica de la fase aguda cuando la inoculación ocurre por la conjuntiva ocular?",
    opciones: [
      "Cardiomiopatía dilatada con bloqueo de rama",
      "Signo de Romaña (edema bipalpebral unilateral e indoloro)",
      "Megacolon tóxico con retención fecal",
      "Aneurisma apical del ventrículo izquierdo",
    ],
    correcta: 1,
  },
  {
    enunciado:
      "Según la NOM-253-SSA1-2012, ¿en qué escenario es obligatorio el tamizaje serológico universal para Trypanosoma cruzi en México?",
    opciones: [
      "Únicamente en consultas pediátricas de zonas rurales",
      "En todos los donadores de sangre y sus componentes con fines terapéuticos",
      "Exclusivamente en pacientes que ingresan a cirugía cardiovascular",
      "En chequeos médicos rutinarios escolares",
    ],
    correcta: 1,
  },
  {
    enunciado:
      "¿Cuáles son los dos fármacos antiparasitarios etiológicos de elección autorizados para el tratamiento de la enfermedad de Chagas?",
    opciones: [
      "Metronidazol y Albendazol",
      "Benznidazol y Nifurtimox",
      "Praziquantel y Cloroquina",
      "Ivermectina y Mebendazol",
    ],
    correcta: 1,
  },
];

const palabrasSopa = ["CRUZI", "ROMAÑA", "ELISA", "TAMIZAJE", "CHAGAS"];

const definiciones = {
  CRUZI: "Agente etiológico parasitario.",
  ROMAÑA: "Signo clínico patognomónico agudo.",
  ELISA: "Ensayo de laboratorio para diagnóstico.",
  TAMIZAJE: "Protocolo obligatorio según NOM-253.",
  CHAGAS: "Enfermedad silenciosa objeto de estudio.",
};

const letrasAleatorias = () =>
  String.fromCharCode(65 + Math.floor(Math.random() * 26));

const wordPositions = {
  CRUZI: [
    { row: 0, col: 8 },
    { row: 1, col: 8 },
    { row: 2, col: 8 },
    { row: 3, col: 8 },
    { row: 4, col: 8 },
  ],
  ROMAÑA: [
    { row: 0, col: 9 },
    { row: 1, col: 9 },
    { row: 2, col: 9 },
    { row: 3, col: 9 },
    { row: 4, col: 9 },
    { row: 5, col: 9 },
  ],
  ELISA: [
    { row: 4, col: 3 },
    { row: 4, col: 4 },
    { row: 4, col: 5 },
    { row: 4, col: 6 },
    { row: 4, col: 7 },
  ],
  TAMIZAJE: [
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
    { row: 2, col: 3 },
    { row: 2, col: 4 },
    { row: 2, col: 5 },
    { row: 2, col: 6 },
    { row: 2, col: 7 },
  ],
  CHAGAS: [
    { row: 0, col: 0 },
    { row: 0, col: 1 },
    { row: 0, col: 2 },
    { row: 0, col: 3 },
    { row: 0, col: 4 },
    { row: 0, col: 5 },
  ],
};

function generarGrid() {
  const base = [
    ["C", "H", "A", "G", "A", "S", "P", "L", "C", "R"],
    ["D", "F", "G", "H", "J", "K", "Q", "W", "R", "O"],
    ["T", "A", "M", "I", "Z", "A", "J", "E", "U", "M"],
    ["B", "N", "V", "X", "Y", "C", "D", "F", "Z", "A"],
    ["S", "W", "E", "L", "I", "S", "A", "G", "I", "Ñ"],
    ["H", "J", "K", "L", "P", "Q", "R", "T", "Y", "A"],
    ["Z", "X", "C", "V", "B", "N", "M", "F", "D", "S"],
    ["G", "H", "J", "K", "L", "P", "Q", "R", "T", "Y"],
    ["V", "B", "N", "M", "W", "X", "Z", "C", "D", "F"],
    ["Q", "R", "T", "Y", "U", "I", "O", "P", "A", "S"],
  ];
  return base.map((row) =>
    row.map((c) => c)
  );
}

export default function Quiz() {
  const [gameMode, setGameMode] = useState("menu");

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const [selectedCells, setSelectedCells] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [foundCells, setFoundCells] = useState(new Set());
  const [grid] = useState(() => generarGrid());

  const allFound = foundWords.length === palabrasSopa.length;

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === preguntas[currentQuestion].correcta) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion + 1 < preguntas.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  const resetSopa = () => {
    setSelectedCells([]);
    setFoundWords([]);
    setFoundCells(new Set());
  };

  const handleCellClick = (row, col) => {
    const key = `${row}-${col}`;
    if (foundCells.has(key)) return;
    const isSelected = selectedCells.some(
      (c) => c.row === row && c.col === col
    );
    if (isSelected) {
      setSelectedCells((prev) => prev.filter((c) => c.row !== row || c.col !== col));
      return;
    }
    const newSelected = [...selectedCells, { row, col }];
    setSelectedCells(newSelected);

    const word = newSelected.map((c) => grid[c.row][c.col]).join("");
    const wordRev = newSelected.map((c) => grid[c.row][c.col]).reverse().join("");

    const match = palabrasSopa.find(
      (p) => !foundWords.includes(p) && (word === p || wordRev === p)
    );

    if (match) {
      setFoundWords((prev) => [...prev, match]);
      const cellsToAdd = wordPositions[match].map(
        (p) => `${p.row}-${p.col}`
      );
      setFoundCells((prev) => {
        const next = new Set(prev);
        cellsToAdd.forEach((k) => next.add(k));
        return next;
      });
      setSelectedCells([]);
    }
  };

  const cellStyle = (row, col) => {
    const key = `${row}-${col}`;
    const isFound = foundCells.has(key);
    const isSelected = selectedCells.some(
      (c) => c.row === row && c.col === col
    );

    if (isFound) return "bg-green-900/40 text-green-200 font-bold";
    if (isSelected) return "bg-[#E85D04]/30 text-white font-bold";
    return "bg-white/5 text-gray-300 hover:bg-white/10";
  };

  return (
    <section id="quiz" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-4xl mx-auto">
        {gameMode === "menu" && (
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="p-2 rounded-lg bg-[#E85D04]/10">
                <Brain size={28} className="text-[#E85D04]" />
              </div>
              <h2 className="text-2xl font-bold text-[#E85D04] text-center">
                Módulo de Evaluación Interactiva
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => setGameMode("quiz")}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#E85D04]/50 transition-all text-left"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4 group-hover:bg-[#E85D04]/20 transition-colors">
                  <Brain size={24} className="text-[#E85D04]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Cuestionario Clínico de Diagnóstico
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Evalúa tus conocimientos sobre el ciclo biológico, técnicas
                  de tamizaje y manifestaciones patognomónicas de{" "}
                  <em>Trypanosoma cruzi</em>.
                </p>
              </button>

              <button
                onClick={() => setGameMode("sopa")}
                className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#E85D04]/50 transition-all text-left"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#E85D04]/10 mb-4 group-hover:bg-[#E85D04]/20 transition-colors">
                  <Search size={24} className="text-[#E85D04]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Sopa de Letras Vectorial
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Encuentra los términos científicos y epidemiológicos clave
                  ocultos en la matriz de letras.
                </p>
              </button>
            </div>
          </div>
        )}

        {gameMode === "quiz" && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setGameMode("menu")}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Volver al Menú
            </button>

            {!showResults ? (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 md:p-8">
                <p className="text-sm text-gray-400 mb-1">
                  Pregunta {currentQuestion + 1} de {preguntas.length}
                </p>
                <div className="w-full bg-white/10 rounded-full h-1.5 mb-6">
                  <div
                    className="bg-[#E85D04] h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / preguntas.length) * 100
                      }%`,
                    }}
                  />
                </div>

                <h3 className="text-lg md:text-xl font-bold text-white mb-6">
                  {preguntas[currentQuestion].enunciado}
                </h3>

                <div className="space-y-3">
                  {preguntas[currentQuestion].opciones.map((opcion, index) => {
                    let buttonClass =
                      "w-full text-left p-4 rounded-lg border transition-all duration-200 text-sm md:text-base ";

                    if (selectedAnswer === null) {
                      buttonClass +=
                        "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-[#E85D04]/50";
                    } else if (
                      index === preguntas[currentQuestion].correcta
                    ) {
                      buttonClass +=
                        "bg-green-500/20 border-green-500 text-green-300";
                    } else if (
                      index === selectedAnswer &&
                      index !== preguntas[currentQuestion].correcta
                    ) {
                      buttonClass +=
                        "bg-red-500/20 border-red-500 text-red-300";
                    } else {
                      buttonClass +=
                        "bg-white/5 border-white/10 text-gray-500 opacity-50";
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className={buttonClass}
                        disabled={selectedAnswer !== null}
                      >
                        {opcion}
                      </button>
                    );
                  })}
                </div>

                {selectedAnswer !== null && (
                  <button
                    onClick={handleNext}
                    className="mt-6 w-full py-3 rounded-lg bg-[#E85D04] text-white font-bold hover:bg-[#E85D04]/80 transition-colors"
                  >
                    {currentQuestion + 1 < preguntas.length
                      ? "Siguiente Pregunta"
                      : "Ver Resultados"}
                  </button>
                )}
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-6 md:p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#E85D04]/10">
                  <Brain size={32} className="text-[#E85D04]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¡Quiz Completado!
                </h3>
                <p className="text-gray-400 mb-2">
                  Obtuviste{" "}
                  <span className="text-[#E85D04] font-bold text-2xl">
                    {score}
                  </span>{" "}
                  de {preguntas.length} respuestas correctas
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  {score === preguntas.length
                    ? "¡Perfecto! Dominas el tema."
                    : score >= preguntas.length / 2
                    ? "Buen trabajo, sigue repasando."
                    : "Te recomendamos revisar las secciones anteriores."}
                </p>
                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E85D04] text-white font-bold hover:bg-[#E85D04]/80 transition-colors"
                >
                  <RotateCcw size={18} />
                  Reiniciar Quiz
                </button>
              </div>
            )}
          </div>
        )}

        {gameMode === "sopa" && (
          <div>
            <button
              onClick={() => setGameMode("menu")}
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Volver al Menú
            </button>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-md p-4 md:p-8">
              <div className="flex items-center gap-3 justify-center mb-6">
                <div className="p-2 rounded-lg bg-[#E85D04]/10">
                  <Search size={24} className="text-[#E85D04]" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#E85D04] text-center">
                  Sopa de Letras Vectorial
                </h2>
              </div>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1 overflow-x-auto">
                  <div className="grid grid-cols-10 gap-1 min-w-[280px] max-w-[400px] mx-auto">
                    {grid.map((fila, rowIdx) =>
                      fila.map((letra, colIdx) => (
                        <button
                          key={`${rowIdx}-${colIdx}`}
                          onClick={() => handleCellClick(rowIdx, colIdx)}
                          className={`w-7 h-7 md:w-9 md:h-9 flex items-center justify-center rounded text-xs md:text-sm font-mono font-bold transition-colors ${cellStyle(
                            rowIdx,
                            colIdx
                          )}`}
                        >
                          {letra}
                        </button>
                      ))
                    )}
                  </div>
                </div>

                <div className="lg:w-64 shrink-0">
                  <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">
                    Palabras a encontrar
                  </h3>
                  <ul className="space-y-3">
                    {palabrasSopa.map((palabra) => {
                      const encontrada = foundWords.includes(palabra);
                      return (
                        <li
                          key={palabra}
                          className={`px-3 py-2 rounded-lg border transition-all ${
                            encontrada
                              ? "border-green-500/30 bg-green-900/20"
                              : "border-white/10 bg-white/5"
                          }`}
                        >
                          <span
                            className={`text-sm font-mono font-bold ${
                              encontrada
                                ? "text-green-400 line-through"
                                : "text-gray-300"
                            }`}
                          >
                            {palabra}
                          </span>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {definiciones[palabra]}
                          </p>
                        </li>
                      );
                    })}
                  </ul>

                  {allFound && (
                    <div className="mt-6 p-4 rounded-lg bg-green-900/20 border border-green-500/30 text-center">
                      <Sparkles
                        size={24}
                        className="text-green-400 mx-auto mb-2"
                      />
                      <p className="text-green-300 font-bold text-sm">
                        ¡Encontraste todas las palabras!
                      </p>
                      <button
                        onClick={resetSopa}
                        className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#E85D04] text-white font-bold text-sm hover:bg-[#E85D04]/80 transition-colors"
                      >
                        <RotateCcw size={14} />
                        Reiniciar
                      </button>
                    </div>
                  )}

                  {!allFound && selectedCells.length > 0 && (
                    <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                      <p className="text-xs text-gray-400 mb-1">
                        Selección actual:
                      </p>
                      <p className="text-sm font-mono text-[#E85D04] font-bold">
                        {selectedCells
                          .map((c) => grid[c.row][c.col])
                          .join(" ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
