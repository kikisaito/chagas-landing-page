"use client";

import { useState } from "react";
import Manifestaciones from "./Manifestaciones";
import Diagnostico from "./Diagnostico";

export default function WrapperClinica() {
  const [active, setActive] = useState("manifestaciones");

  const tabs = [
    { id: "manifestaciones", label: "Manifestaciones Clínicas" },
    { id: "diagnostico", label: "Métodos de Diagnóstico" },
  ];

  return (
    <section id="clinica" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#E85D04]">
          Clínica y Diagnóstico
        </h2>
        <p className="text-gray-400 text-center mb-6 max-w-2xl mx-auto text-sm">
          El abordaje clínico y diagnóstico de la enfermedad de Chagas varía
          según la fase. Explora las manifestaciones y los métodos de laboratorio.
        </p>

        <div className="flex justify-center gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active === tab.id
                  ? "bg-[#E85D04] text-white shadow-md"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {active === "manifestaciones" && <Manifestaciones />}
        {active === "diagnostico" && <Diagnostico />}
      </div>
    </section>
  );
}
