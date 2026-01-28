export default function ProjectCard({ project }) {
  const { title, description, tech, github, live } = project;

  return (
    <div className="relative bg-slate-950 rounded-2xl p-8 border border-slate-900 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-brfrom-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"/>
        <div className="relative z-10">
        <h4 className="text-xl font-semibold text-gray-200 mb-3">
          {title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm">
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
            className="text-indigo-400 hover:text-indigo-300 transition"
          >
            Live →
          </a>
        </div>
      </div>
    </div>
  );
}
