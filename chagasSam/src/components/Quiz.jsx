"use client";

import { useState } from "react";
import { Brain, RotateCcw } from "lucide-react";

const preguntas = [
  {
    enunciado:
      "¿Cuál es el principal vector de la enfermedad de Chagas en México?",
    opciones: [
      "Triatoma dimidiata",
      "Anopheles albimanus",
      "Aedes aegypti",
      "Rhodnius prolixus",
    ],
    correcta: 0,
  },
  {
    enunciado:
      "¿En qué fase de la enfermedad de Chagas el tratamiento con benznidazol es más eficaz?",
    opciones: [
      "Fase crónica indeterminada",
      "Fase aguda",
      "Fase crónica sintomática",
      "Fase de latencia",
    ],
    correcta: 1,
  },
  {
    enunciado:
      "¿Cuál es la principal prueba de tamizaje utilizada para el diagnóstico serológico de Chagas?",
    opciones: [
      "Western blot",
      "PCR en tiempo real",
      "ELISA",
      "Inmunofluorescencia indirecta",
    ],
    correcta: 2,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

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

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <section id="quiz" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 justify-center mb-8">
          <div className="p-2 rounded-lg bg-[#E85D04]/10">
            <Brain size={24} className="text-[#E85D04]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#E85D04]">
            Pon a Prueba tu Conocimiento
          </h2>
        </div>

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
                } else if (index === preguntas[currentQuestion].correcta) {
                  buttonClass +=
                    "bg-green-500/20 border-green-500 text-green-300";
                } else if (
                  index === selectedAnswer &&
                  index !== preguntas[currentQuestion].correcta
                ) {
                  buttonClass += "bg-red-500/20 border-red-500 text-red-300";
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
              onClick={handleRestart}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#E85D04] text-white font-bold hover:bg-[#E85D04]/80 transition-colors"
            >
              <RotateCcw size={18} />
              Reiniciar Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
