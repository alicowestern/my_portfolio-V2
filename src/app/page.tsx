import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-stone-950 selection:bg-amber-200 dark:selection:bg-amber-900/30">
      <Header />
      <Hero />

      <div className="container mx-auto px-4 md:px-6 space-y-24 md:space-y-32 pb-24">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Volunteering />
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
