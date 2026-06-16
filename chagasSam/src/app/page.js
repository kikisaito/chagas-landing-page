import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QueEs from "@/components/QueEs";
import CicloVida from "@/components/CicloVida";
import WrapperTransmisionVector from "@/components/WrapperTransmisionVector";
import WrapperClinica from "@/components/WrapperClinica";
import WrapperEpiPrevencion from "@/components/WrapperEpiPrevencion";
import Quiz from "@/components/Quiz";
import Conclusion from "@/components/Conclusion";
import Referencias from "@/components/Referencias";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Hero />
        <QueEs />
        <CicloVida />
        <WrapperTransmisionVector />
        <WrapperClinica />
        <WrapperEpiPrevencion />
        <Quiz />
        <Conclusion />
        <Referencias />
      </main>
      <Footer />
    </>
  );
}
