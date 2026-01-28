export default function ExperienceCard({ experience }) {
  const { role, company, location, duration, highlights } = experience;

  return (
    <div className="relative bg-slate-950 rounded-2xl p-8 border border-slate-900 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-outpointer-events-none"/>
           <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <h4 className="text-xl font-semibold text-gray-200">{role}</h4>
                <p className="text-indigo-400 font-medium">
                  {company} · {location}
                </p>
              </div>
              <span className="text-sm text-slate-400">{duration}</span>
            </div>
            <ul className="mt-6 space-y-3 list-disc list-inside text-slate-400">
              {highlights.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
         </div>
    </div>
  );
}
