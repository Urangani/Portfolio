const projects = [
  {
    title: "Student Management App",
    description:
      "Tracks attendance, payments, and notes with teacher–parent access.",
    stack: "React, FastAPI, SQLite",
    link: "#",
  },
  {
    title: "Go Down E-commerce Website",
    description:
      "Online store with product listings and a responsive UI.",
    stack: "HTML, CSS, JavaScript",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="mt-6 space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-5 border border-zinc-800 rounded"
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
