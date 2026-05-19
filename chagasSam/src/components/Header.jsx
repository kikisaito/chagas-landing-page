import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-6">
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4">
        <div className="w-24 h-24 md:w-32 md:h-32 relative">
          <Image
            src="/images/logo-upgch.png"
            alt="Logo Universidad Pablo Guardado Chávez"
            fill
            className="object-contain p-1"
          />
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl font-bold">
            Universidad Pablo Guardado Chávez
          </p>
          <p className="text-sm md:text-base text-[#E85D04]">
            Químico Farmacobiólogo
          </p>
        </div>

        <p className="text-sm text-gray-400"> Mendoza Salazar Larissa</p>
        <p className="text-sm text-gray-400"> Ozuna Toledo Valentina </p>
        <p className="text-sm text-gray-400"> Salazar Ángel Monserrat </p>
        <p className="text-sm text-gray-400"> Velázquez Magdaleno Luna Valeria </p>

        <div className="w-24 h-24 md:w-32 md:h-32 relative">
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
