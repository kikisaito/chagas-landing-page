import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-center w-full gap-4 md:gap-2">
        {/* Logo UPGCH - anclado a la izquierda */}
        <div className="w-24 h-24 md:w-32 md:h-32 relative shrink-0">
          <Image
            src="/images/logo-upgch.png"
            alt="Logo Universidad Pablo Guardado Chávez"
            fill
            className="object-contain p-1"
          />
        </div>

        {/* Columna central de texto */}
        <div className="flex flex-col items-center text-center mx-4 gap-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Chagas Bajo la Lupa
          </h1>
          <p className="text-lg md:text-xl font-bold text-gray-200">
            Universidad Pablo Guardado Chávez
          </p>
          <p className="text-sm md:text-base text-[#E85D04] font-semibold">
            Químico Farmacobiólogo | Grupo: 2A2
          </p>
          <p className="text-sm text-gray-400 max-w-xl">
            Mendoza Salazar Larissa / Ozuna Toledo Valentina / Salazar Ángel
            Monserrat / Velázquez Magdaleno Luna Valeria
          </p>
          <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
            Chagas Bajo la Lupa
          </h2>
          <p className="text-xs md:text-sm text-gray-400 font-mono">
            Contacto: 06-05519@upgch.edu.mx / 06-05457@upgch.edu.mx
          </p>
        </div>

        {/* Logo QFB - anclado a la derecha */}
        <div className="w-24 h-24 md:w-32 md:h-32 relative shrink-0">
          <Image
            src="/images/logo-qfb.png"
            alt="Logo Químico Farmacobiólogo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
