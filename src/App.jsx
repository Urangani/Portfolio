import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}