import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="py-16 w-fit mx-auto">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Projects
      </h2>

      {/* Bento grid container */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-2/3 mx-auto">
        {projects.projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              group relative p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 
              border border-zinc-700 rounded-xl shadow-lg hover:shadow-xl 
              hover:border-white transition-all duration-300
              ${index % 5 === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-2"}
            `}
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <FaCode className="text-white" />
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-zinc-400">{project.description}</p>

            {/* Tech stack */}
            <p className="mt-2 text-sm text-zinc-500">{project.stack}</p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm white hover:text-indigo-300 transition-colors"
            >
              View Project <FaExternalLinkAlt className="w-4 h-4" />
            </a>

            {/* Decorative hover accent */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
