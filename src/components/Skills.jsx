import SkillCard from "./SkillCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <p className="text-slate-400 max-w-2xl mb-12">
          A snapshot of the tools, technologies, and practices I use to build
          reliable, scalable frontend applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, index) => (
            <SkillCard
              key={index}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
