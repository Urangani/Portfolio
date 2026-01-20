import React from "react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Johannesburg",
      duration: "2022 – 2025",
      highlights: [
        "Focused on software engineering, algorithms, and system design.",
        "Led projects in web development and automation.",
        "Graduated with strong emphasis on practical problem-solving."
      ]
    },
    {
      degree: "High School Diploma",
      institution: "Johannesburg High School",
      duration: "2017 – 2021",
      highlights: [
        "Excelled in mathematics and computer science.",
        "Participated in coding clubs and hackathons."
      ]
    }
  ];

  return (
    <section className="max-w-3xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-500 pb-2">
        Education
      </h2>
      {education.map((edu, index) => (
        <div
          key={index}
          className="mb-6 p-6 border border-zinc-800 rounded-lg  shadow-sm"
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
