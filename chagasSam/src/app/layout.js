import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Chagas Bajo la Lupa | UPGCH",
  description:
    "Landing page educativa sobre la Enfermedad de Chagas. Aprende sobre prevención, diagnóstico temprano y el ciclo de vida del Trypanosoma cruzi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
