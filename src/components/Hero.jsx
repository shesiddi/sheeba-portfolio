export default function Hero() {
  return (
    <section className="relative pt-16 md:pt-24 pb-8 md:pb-20">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-200">
            Sheeba Siddiqui
          </h1>

          <h2 className="mt-3 text-xl md:text-2xl text-indigo-400 font-semibold">
            Frontend Developer
          </h2>
          <p className="mt-5 max-w-xl text-gray-300 text-sm md:text-base leading-relaxed">
            Specializing in React and Next.js, with 8 years of experience building scalable, high-performance web applications.          </p>
          <p className="mt-2 max-w-xl text-slate-400 text-sm md:text-base">
            Built real-time dashboards, optimized frontend performance, and developed scalable UI architectures for production-grade systems.
            </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg text-white text-sm font-medium">View Projects</a>
            <a href="#contact" className="px-5 py-2.5 border border-slate-700 hover:border-slate-500 transition rounded-lg text-gray-200 text-sm font-medium">Contact Me</a>
          </div>
        </div>
    </section>
  );
}
