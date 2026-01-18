export default function Hero() {
  return (
    <section className="py-24">
      <h1 className="text-4xl font-bold">Urangani Terrence</h1>

      <p className="mt-4 text-zinc-400">
        Software developer
      </p>

      <div className="mt-6 flex gap-4">
        <a
          href="https://github.com/urangani"
          className="px-4 py-2 bg-white text-black rounded"
        >
          GitHub
        </a>

        <a
          href="#projects"
          className="px-4 py-2 border border-zinc-700 rounded"
        >
          Projects
        </a>
      </div>
    </section>
  );
}
