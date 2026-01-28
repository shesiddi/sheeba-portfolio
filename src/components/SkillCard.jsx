export default function SkillCard({ title, items }) {
  return (
    <div className="relative bg-slate-950 rounded-2xl p-6 border border-slate-900 overflow-hidden transition-transform duration-300 ease-out hover:-translate-y-1">
     <div className="absolute inset-0 bg-gradient-to-brfrom-indigo-500/8 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none"/>
      <div className="relative z-10">
        <h4 className="text-lg font-semibold text-gray-200 mb-4">
          {title}
        </h4>
        <ul className="space-y-2 text-slate-400 text-sm">
          {items.map((skill, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-indigo-400 mt-1">•</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div> 
    </div>
  );
}
