export default function SkillCard({ title, items }) {
  return (
    <div className="relative bg-slate-950 rounded-2xl p-5 md:p-6 border border-slate-900 hover:border-slate-700 transition h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full">
        <h4 className="text-base md:text-lg font-semibold text-gray-200 mb-3">
          {title}
        </h4>
        <ul className="space-y-2 text-slate-400 text-sm md:text-base">
          {items.map((skill, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-400 flex-shrink-0" />
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}