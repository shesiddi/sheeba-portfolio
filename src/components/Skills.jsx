import SkillCard from "./SkillCard";
import { skills } from "../data/skills";
import FadeIn from "./FadeIn";

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-200">
          Skills
        </h3>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mb-6 md:mb-8">
          A snapshot of the tools, technologies, and practices I use to build reliable, scalable frontend applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch">
          {skills.map((group, index) => (
             <FadeIn key={index} delay={index * 0.1}>
              <SkillCard key={index} title={group.title} items={group.items} />
            </FadeIn>
           
          ))}
        </div>
      </div>
    </section>
  );
}
