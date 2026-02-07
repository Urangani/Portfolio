import education from "../data/education.json"


const Education = () => {


  return (
    <section className="max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-500 pb-2 text-center">
        Education
      </h2>
      {education.education.map((edu, index) => (
        <div
          key={index}
          className="mb-6 p-6 bg-secondary border border-zinc-800 rounded-lg  shadow-sm"
        >
          <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
          <p className="text-sm text-white mb-2">
            {edu.institution} | {edu.duration}
          </p>
          <ul className="list-disc list-inside space-y-1 text-white">
            {edu.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Education;
