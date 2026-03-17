import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExprience";
import Education from "./components/Education";
import Footer from "./components/Footer";

import Galaxy from "./components/Galaxy";
export default function App() {
  return (
    <div className="relative min-h-screen w-full">

    
    <Background>
      {/* Content */}
      <div className="relative z-10 scroll-smooth">
        <NavBar />
        <Hero />
        <Skills />
        <Projects />
        <WorkExperience />
        <Education />
        <Footer />
      </div>

    </Background>

    </div>
  );
}

export const Background = ({children}) => {

  return(
      <>
      <div className="absolute inset-0 -z-10 scroll-smooth!">
          <Galaxy 
              mouseRepulsion
              mouseInteraction={false}
              density={1}
              glowIntensity={0.2}
              saturation={0}
              hueShift={140}
              twinkleIntensity={0.3}
              rotationSpeed={0.06}
              repulsionStrength={1}
              autoCenterRepulsion={0}
              starSpeed={0.001}
              speed={0.02}
          />
      </div>
      { children }
      </>
  )
}