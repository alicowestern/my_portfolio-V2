import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import RealWorldContext from "@/components/RealWorldContext";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] relative">
      <ScrollProgress />
      <Header />
      <Hero />
      <FocusAreas />
      <Projects />
      <Process />
      <RealWorldContext />
      <Experience />
      <Tools />
      <Education />
      <About />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
