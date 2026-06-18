"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "El Parásito", href: "#que-es" },
  { label: "Clínica y Diagnóstico", href: "#clinica" },
  { label: "Prevención y Datos", href: "#epi-prevencion" },
  { label: "Actividades", href: "#actividades" },
  { label: "Conclusiones", href: "#conclusiones" },
  { label: "Referencias", href: "#referencias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-black/75 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-center h-12">
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80 hover:text-[#E85D04] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-6 text-white/80 hover:text-white transition-colors"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm text-white/80 hover:text-[#E85D04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
