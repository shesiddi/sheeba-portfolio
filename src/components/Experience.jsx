import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../data/experience";
import FadeIn from "./FadeIn";
export default function Experience() {
  return (
    <section id="experience" className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-gray-200">
          Professional Experience
        </h3>
        <div className="space-y-5 md:space-y-6">
          {experienceList.map((exp, index) => (
             <FadeIn key={index} delay={index * 0.1}>
              <ExperienceCard key={index} experience={exp} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}