import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "skills", "projects", "experience", "education"];

export default function NavBar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 120;
          if (window.scrollY >= top) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/10 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide">
          Urangani.dev
        </h1>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`capitalize transition ${
                active === section
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {section}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/urangani"
            className="text-lg hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            className="text-lg hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/90">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}