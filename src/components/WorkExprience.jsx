import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "Prodigy InfoTech",
      duration: "Jan 2026 – Present",
      details: [
        "Contributing to real-world projects with a focus on backend and frontend development.",
        "Collaborating with teams to deliver scalable and maintainable code.",
        "Refining Git workflows and automation tools for efficiency."
      ]
    },
    {
      role: "Freelance Developer",
      company: "Self-Employed",
      duration: "2024 – 2025",
      details: [
        "Built responsive web apps using React and Tailwind CSS.",
        "Customized developer environments for reproducibility and clarity.",
        "Delivered accessible, semantic web components with ARIA standards."
      ]
    }
  ];

  return (
    <section className="max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-black pb-2">
        Work Experience
      </h2>
      {experiences.map((exp, index) => (
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
