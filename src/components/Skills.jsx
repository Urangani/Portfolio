
import CategoryCard from "./CategoryCard"

const ProgrammingLangauges = [
  "Python",
  "JavaScript",
  "React",
  "FastAPI",
  "SQL",
  "Git",
  "REST APIs",
];

const FrontendSkills = [
  "React",
  "Vue.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
];

const BackendSkills = [
  "Node.js",
  "Express.js",
  "Django",
  "Flask",
  "Ruby on Rails",
];

const DatabaseSkills = [
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "SQLite",
];

const ToolsAndTechnologies = [
  "Docker",
  "Kubernetes",
  "AWS",
  "Jenkins",
  "GitHub Actions",
];

const Languages = [
  "English",
  "Tshivenda",
  "Zulu",
];


export default function Skills() {
  return (
    <section className="py-16 border-t border-zinc-800">
      <h2 className="text-2xl font-semibold mb-10">Skills</h2>

    <div className="flex flex-wrap gap-2">
      <CategoryCard title="Programming Languages" items={ProgrammingLangauges}/>
      <CategoryCard title="Frontend Development" items={FrontendSkills}/>
      <CategoryCard title="Backend Development" items={BackendSkills}/>
      <CategoryCard title="Databases" items={DatabaseSkills}/>
      <CategoryCard title="Tools & Technologies" items={ToolsAndTechnologies}/>
      <CategoryCard title="Languages" items={Languages}/>
    </div>

    </section>
  );
}
