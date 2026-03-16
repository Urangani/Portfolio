
import { FaBriefcase,FaCalendar } from "react-icons/fa";
import work from "../data/work.json";

const WorkExperience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto my-16 px-6">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Work Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {work.experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative p-6 bg-linear-to-br from-gray to-zinc-800 border border-white rounded-xl shadow-lg hover:shadow-xl hover:border-gray transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <FaBriefcase className="w-5 h-5 text-White" />
                {exp.role}
              </h3>
              <span className="text-sm text-zinc-300 font-medium">
                {exp.company}
              </span>
            </div>

            <p className="flex items-center text-sm text-zinc-400 mb-4">
              <FaCalendar className="w-4 h-4 mr-2 text-white" />
              {exp.duration}
            </p>

            <ul className="space-y-2 text-zinc-300 text-sm leading-relaxed">
              {exp.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 before:content-['•'] before:text-indigo-400 before:mr-2"
                >
                  {detail}
                </li>
              ))}
            </ul>

            {/* Decorative hover accent */}
            <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-indigo-500 transition-all duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
