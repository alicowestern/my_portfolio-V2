import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import RealWorldContext from "@/components/RealWorldContext";
import Tools from "@/components/Tools";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F5F0] relative">
      {/* Global Grid Pattern */}
      <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
              backgroundImage: `
                  linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: "64px 64px",
              backgroundAttachment: "fixed" // This ensures the grid covers the whole scrolling page evenly
          }}
      />
      <ScrollProgress />
      <Header />
      <Hero />
      <FocusAreas />
      <Projects />
      <Process />
      <RealWorldContext />
      <Experience />
      <Tools />
      <About />
      <CTA />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
