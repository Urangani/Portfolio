import ProfileImg from "../assets/me.jpeg";
import { FaGithub, FaLinkedin, FaFolderOpen } from "react-icons/fa";
import RotatingText from "./RotatingText";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col gap-8 px-6 py-16 max-w-6xl mx-auto"
    >
        <Title/>
        <div className="flex max-sm:flex-col items-center justify-around">
          <ImageContainer/>
          <Name/>
        </div>
         <SmallLinks/>

    </section>
  );
}

export function ImageContainer(){
    return(
      <div className="w-1/3 ">
          <img
            src={ProfileImg}
            alt="Profile"
            className="object-cover rounded-full hover:shadow-2xl hover:shadow-white/70 transition-all ease-in"
          />
        </div>
    )
}

export function SmallLinks() {
  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center">
        <SocialLink
          href="https://github.com/urangani"
          icon={<FaGithub className="text-xl" />}
          label="GitHub"
          className="bg-secondary/50 text-white"
        />

        <SocialLink
          href="https://www.linkedin.com/in/urangani-mafunzwaini-470516297"
          icon={<FaLinkedin className="text-xl" />}
          label="LinkedIn"
          className="bg-white text-black"
        />

        <SocialLink
          href="#projects"
          icon={<FaFolderOpen className="text-xl" />}
          label="Projects"
          className="bg-secondary/50 text-white"
        />
      </div>
    </>
  );
}

export function Name() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
        <span className="block">Urangani Terrence</span>
        <span className="block">Mafunzwaini</span>
      </h1>
    </div>
  );
}

export function SocialLink({ href, icon, label, className }) {
  return (
    <a
      href={href}
          className={`flex items-center gap-2 
                  px-2 py-1 text-sm 
                  sm:px-3 sm:py-2 sm:text-base 
                  md:px-4 md:py-2 md:text-lg 
                  lg:px-5 lg:py-3 lg:text-xl 
                  rounded border border-zinc-700 
                  hover:scale-105 transition 
                  ${className}`}
>
      {icon}
      {label}
    </a>
  );
}

export function Title() {
  return (
    <>
      <h1 className="text-center text-4xl max-sm:text-2xl font-bold">
        Software{" "}
        <RotatingText
          texts={["Developer", "Engineer"]}
          mainClassName="inline-block bg-white text-black rounded-lg p-2"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={4000}
        />
      </h1>
    </>
  );
}


