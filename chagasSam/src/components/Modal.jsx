"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function Modal({ isOpen, onClose, titulo, children }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-[#111827] rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 relative animate-in fade-in zoom-in duration-200 border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X size={20} className="text-gray-300" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6 pr-8">{titulo}</h3>

        <div className="text-gray-300 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
