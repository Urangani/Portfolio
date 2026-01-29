
import work from "../data/work.json";

const WorkExperience = () => {

  return (
    <section className="max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-black pb-2">
        Work Experience
      </h2>
      {work.experiences.map((exp, index) => (
        <div
          key={index}
          className="mb-6 p-6 bg-secondary border border-zinc-800 rounded-lg shadow-sm"
        >
          <h3 className="text-xl font-semibold text-white">
            {exp.role} – {exp.company}
          </h3>
          <p className="text-sm text-white mb-2">{exp.duration}</p>
          <ul className="list-disc list-inside space-y-1 text-white">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;
