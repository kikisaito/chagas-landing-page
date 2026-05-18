"use client";

import { useState } from "react";
import Epidemiologia from "./Epidemiologia";
import Prevencion from "./Prevencion";

export default function WrapperEpiPrevencion() {
  const [active, setActive] = useState("epidemiologia");

  const tabs = [
    { id: "epidemiologia", label: "Situación Epidemiológica" },
    { id: "prevencion", label: "Medidas de Prevención" },
  ];

  return (
    <section id="epi-prevencion" className="py-10 md:py-14 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
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

        {active === "epidemiologia" && <Epidemiologia />}
        {active === "prevencion" && <Prevencion />}
      </div>
    </section>
  );
}
