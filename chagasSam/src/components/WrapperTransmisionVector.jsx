"use client";

import { useState } from "react";
import Transmision from "./Transmision";
import Vector from "./Vector";

export default function WrapperTransmisionVector() {
  const [active, setActive] = useState("transmision");

  const tabs = [
    { id: "transmision", label: "Formas de Transmisión" },
    { id: "vector", label: "El Vector" },
  ];

  return (
    <section id="transmision-vector" className="py-10 md:py-14 px-6 bg-transparent">
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

        {active === "transmision" && <Transmision />}
        {active === "vector" && <Vector />}
      </div>
    </section>
  );
}
