import {
  FaPython,
  FaJava,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSqlite,
  SiTailwindcss,
  SiFastapi,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

// Categories JSON
const categories = [
  {
    id: "programming-languages",
    title: "Programming Languages",
    items: ["Python", "Java", "JavaScript"],
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend-development",
    title: "Backend Development",
    items: ["Node.js", "FastAPI"],
  },
  {
    id: "databases",
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    id: "tools-and-technologies",
    title: "Tools & Technologies",
    items: ["Docker", "GitHub"],
  },
];

// Map items to { node, title, href }
const itemMap = {
  Python: { node: <FaPython className="text-4xl text-yellow-400" />, href: "https://www.python.org" },
  Java: { node: <FaJava className="text-4xl text-red-600" />, href: "https://www.java.com" },
  JavaScript: { node: <FaJs className="text-4xl text-yellow-300" />, href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  React: { node: <FaReact className="text-4xl text-blue-400" />, href: "https://react.dev" },
  HTML5: { node: <FaHtml5 className="text-4xl text-orange-500" />, href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  CSS3: { node: <FaCss3 className="text-4xl text-blue-600" />, href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  "Tailwind CSS": { node: <SiTailwindcss className="text-4xl text-teal-400" />, href: "https://tailwindcss.com" },
  "Node.js": { node: <FaNodeJs className="text-4xl text-green-600" />, href: "https://nodejs.org" },
  FastAPI: { node: <SiFastapi className="text-4xl text-emerald-500" />, href: "https://fastapi.tiangolo.com" },
  MySQL: { node: <SiMysql className="text-4xl text-blue-700" />, href: "https://www.mysql.com" },
  PostgreSQL: { node: <SiPostgresql className="text-4xl text-indigo-700" />, href: "https://www.postgresql.org" },
  MongoDB: { node: <SiMongodb className="text-4xl text-green-500" />, href: "https://www.mongodb.com" },
  SQLite: { node: <SiSqlite className="text-4xl text-gray-500" />, href: "https://www.sqlite.org" },
  Docker: { node: <FaDocker className="text-4xl text-blue-500" />, href: "https://www.docker.com" },
  GitHub: { node: <FaGithub className="text-4xl text-gray-700" />, href: "https://github.com" },
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 max-w-6xl mx-auto">
      <div className="space-y-12 p-6">
      {categories.map((category, index) => {
        const logos = category.items.map((item) => ({
          node: itemMap[item].node,
          title: item,
          href: itemMap[item].href,
        }));

        return (
          <div
            key={category.id}
            className="  w-2/3 mx-auto p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold mb-6 text-center text-white">
              {category.title}
            </h2>
            <LogoLoop
              logos={logos}
              speed={50}
              direction={index % 2 === 0 ? "left" : "right"}
              logoHeight={60}
              gap={60}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff00"
              ariaLabel={category.title}
            />
          </div>
        );
      })}
    </div>
    </section>
  );
}
