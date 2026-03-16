import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import education from "../data/education.json";

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Education
      </h2>

      <div className="space-y-8">
        {education.education.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 rounded-xl shadow-lg hover:shadow-xl hover:border-indigo-500 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
              <FaGraduationCap className="text-indigo-400" />
              {edu.degree}
            </h3>

            <p className="flex items-center text-sm text-zinc-400 mb-3">
              <FaUniversity className="mr-2 text-zinc-500" />
              {edu.institution}
              <span className="mx-2">|</span>
              <FaCalendarAlt className="mr-2 text-zinc-500" />
              {edu.duration}
            </p>

            <ul className="space-y-2 text-zinc-300 text-sm leading-relaxed">
              {edu.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-indigo-400 mt-1" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
