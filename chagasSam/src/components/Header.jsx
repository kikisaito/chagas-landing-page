import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-20 h-20 relative">
          <Image
            src="/images/logo-upgch.png"
            alt="Logo Universidad Pablo Guardado Chávez"
            fill
            className="object-contain p-1"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg md:text-xl font-bold">
            Universidad Pablo Guardado Chávez
          </p>
          <p className="text-sm md:text-base text-[#E85D04]">
            Químico Farmacobiólogo
          </p>
        </div>

        <div className="w-16 h-16 relative">
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