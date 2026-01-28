import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import ExperienceGraph from "../components/ExperienceGraph";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <ExperienceGraph />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
