export default function ProjectCard({ project }) {
  const { title, description, tech, github, live } = project;

  return (
    <div className="relative bg-slate-950 rounded-2xl p-5 md:p-6 border border-slate-900 hover:border-slate-700 transition h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">
        <div>
          <h4 className="text-base md:text-lg font-semibold text-gray-200 mb-2">
            {title}
          </h4>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-4 text-sm">
          <a
            href={github}
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            GitHub →
          </a>
          <a
            href={live}
            target="_blank"
            className="text-indigo-400 hover:text-indigo-300 transition">
            Live →
          </a>
        </div>
      </div>
    </div>
  );
}