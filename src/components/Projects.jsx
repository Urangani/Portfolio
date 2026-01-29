
import projects from '../data/projects.json'

export default function Projects() {

  return (
    <section id="projects" className="py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 space-y-6">
        {projects.projects.map((project) => (
          <div 
            key={project.id}
            className="p-5 bg-secondary border border-zinc-800 rounded"
          >
            <h3 className="text-xl font-medium">{project.title}</h3>

            <p className="mt-2 text-zinc-400">
              {project.description}
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              {project.stack}
            </p>

            <a
              href={project.link}
              className="inline-block mt-3 text-sm underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
