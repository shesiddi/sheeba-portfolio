import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12">Professional Experience</h3>
        <div className="space-y-8">
          {experienceList.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
