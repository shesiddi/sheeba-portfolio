export default function Hero() {
  return (
    <section className="relative pt-16 min-h-screen flex items-center text-3xl font-bold">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-transparent" />
          <div className="relative max-w-8xl max-w-10lg mx-auto px-6 pt-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Sheeba Siddiqui
            </h1>
            <h2 className="mt-4 text-2xl md:text-3xl text-indigo-400 font-semibold">
              Senior Frontend Developer
            </h2>
            <p className="mt-6 max-w-xl text-gray-300 text-base md:text-lg">
              Building scalable, high-performance web applications with
              React, Next.js, and modern frontend architecture.
            </p>
            <p className="mt-2 max-w-xl text-slate-400">
              8+ years of experience across fintech and enterprise platforms.
            </p>
            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 transition rounded-lg text-white text-sm font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-slate-700 hover:border-slate-500 transition rounded-lg text-gray-200 text-sm font-medium"
              >
                Contact Me
              </a>
          </div>
      </div>
    </section>
  );
}
