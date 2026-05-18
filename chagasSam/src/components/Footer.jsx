import { BookOpen } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <BookOpen size={28} className="text-[#E85D04]" />
        </div>
        <p className="font-bold text-lg">
          Universidad Pablo Guardado Chávez
        </p>
        <p className="text-sm mt-1 text-gray-400">
          Químico Farmacobiólogo
        </p>
        <p className="text-sm mt-4 text-gray-500">&copy; {year}</p>
      </div>
    </footer>
  );
}
