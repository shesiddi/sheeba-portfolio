import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import FadeIn from "./FadeIn";

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-200">
          Projects
        </h3>
        <p className="text-sm md:text-base text-slate-400 max-w-2xl mb-6 md:mb-8">
          A selection of projects showcasing my approach to frontend architecture, performance optimization, and data-driven UI.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-stretch">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
                <ProjectCard project={project} />
              </FadeIn>          
            ))}
        </div>
      </div>
    </section>
  );
}
