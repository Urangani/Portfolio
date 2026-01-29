import ProfileImg from "../assets/me.jpg";
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="p-8">
      <section className="flex flex-col gap-8">
        <h1 className="text-center text-4xl font-bold ">
        Software Engineer | Developer
      </h1>

<div className="flex flex-col lg:flex-row items-center lg:items-start">
  <div className="m-5 lg:w-1/2">
    <h1 className="text-4xl font-bold">
      Urangani Terrence <br /> Mafunzwaini
    </h1>
    <p className="mt-4 text-zinc-400">
      I am a passionate software developer and engineer with a
      Bachelor’s degree in Computer Science from the University of
      Venda. I build practical software systems with a focus on clean
      architecture and scalable solutions. My work is driven by a love
      for solving everyday problems and creating tools that simplify
      life’s mundane tasks. Beyond code, I am a poet, gamer, and music
      lover—bringing creativity, curiosity, and rhythm into everything I
      do. With a strong dedication to software engineering and
      development, I strive to merge technical excellence with artistic
      expression.
    </p>
  </div>

  {/* Image container */}
  <div className="m-5 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
    <img 
      src={ProfileImg} 
      alt="Profile" 
      className="w-full h-auto object-cover rounded-3xl" 
    />
  </div>
</div>



<div className="mb-6 flex gap-4 justify-center">
  <a href="https://github.com/urangani" className="flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded border border-zinc-700 transition-transform duration-300 hover:scale-105 hover:shadow-lg" >
    <FaGithub className="text-xl" />
    GitHub
  </a>

  <a href="https://www.linkedin.com/in/urangani-mafunzwaini-470516297" className="flex items-center gap-2 px-4 py-2 bg-white text-black border border-zinc-700 rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg" >
    <FaLinkedin className="text-xl text-black" />
    LinkedIn
  </a>

  <a href="#projects" className="flex items-center gap-2 px-4 py-2 border bg-secondary text-white border-zinc-700 rounded transition-transform duration-300 hover:scale-105 hover:shadow-lg" >
    <FaFolderOpen className="text-xl" />
    Projects
  </a>
</div>
      </section>
    </div>
  );
}
