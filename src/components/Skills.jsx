const skills = [
  "Python",
  "JavaScript",
  "React",
  "FastAPI",
  "SQL",
  "Git",
  "REST APIs",
];

export default function Skills() {
  return (
    <section className="py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-zinc-800 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
