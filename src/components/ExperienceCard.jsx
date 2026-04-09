export default function ExperienceCard({ experience }) {
  const { role, company, location, duration, highlights } = experience;

  return (
    <div className="relative bg-slate-950 rounded-2xl p-5 md:p-6 border border-slate-900 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none" />
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1 md:gap-2">

          <div>
            <h4 className="text-base md:text-lg font-semibold text-gray-200">
              {role}
            </h4>

            <p className="text-indigo-400 text-xs md:text-sm font-medium">
              {company} · {location}
            </p>
          </div>

          <span className="text-xs text-slate-400 mt-1 md:mt-0">
            {duration}
          </span>
        </div>
        <ul className="mt-3 md:mt-4 space-y-2.5">
          {highlights.map((point, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0" />
              <span className="text-slate-400 text-sm md:text-base leading-relaxed">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}