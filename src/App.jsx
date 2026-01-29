import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WorkExperience from "./components/WorkExprience";
import Education from "./components/Education";

export default function App() {
  return (
    <div className="px-10" >
      <Hero />
      <Skills />
      <Projects />
      <WorkExperience/>
      <Education/>
      <Footer />
    </div>
  );
}