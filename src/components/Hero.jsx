import ProfileImg from "../assets/me.jpg";

export default function Hero() {
  return (
    <div className="p-8">
      <section className="flex flex-col gap-8">
        <h1 className="text-center text-4xl font-bold">
          Software developer | Engineer
        </h1>

        <div className="flex">
          <div className="m-5">
            <h1 className="text-4xl font-bold">
              Urangani Terrence <br /> Mafunzwaini
            </h1>
            <p className="mt-4 text-zinc-400">
              I am a passionate software developer and engineer with a
              Bachelor’s degree in Computer Science from the University of
              Venda. I build practical software systems with a focus on clean
              architecture and scalable solutions. My work is driven by a love
              for solving everyday problems and creating tools that simplify
              life’s mundane tasks. Beyond code, I am a poet, gamer, and music
              lover—bringing creativity, curiosity, and rhythm into everything I
              do. With a strong dedication to software engineering and
              development, I strive to merge technical excellence with artistic
              expression.
            </p>
          </div>
          <img src={ProfileImg} className="w-70 object-cover rounded-4xl" />
        </div>

        <div className="mt-6 flex gap-4">
          <a
            href="https://github.com/urangani"
            className="px-4 py-2 bg-secondary text-white rounded border border-zinc-700"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/urangani-mafunzwaini-470516297"
            className="px-4 py-2 bg-white text-black border border-zinc-700 rounded"
          >
            LinkedIn
          </a>

          <a
            href="#projects"
            className="px-4 py-2 border bg-secondary text-white border-zinc-700 rounded"
          >
            Projects
          </a>
        </div>
      </section>
    </div>
  );
}
