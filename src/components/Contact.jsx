import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14 bg-slate-900/40 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-200">
          Get in Touch
        </h3>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mb-6 md:mb-8">
          I’m currently open to frontend opportunities where I can contribute to building high-quality, scalable web applications.
        </p>
         <div className="flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
            <a
              href="mailto:Sheeba2311@gmail.com"
              className="flex items-center justify-center gap-2 w-full sm:w-auto
                        px-4 py-2.5
                        bg-indigo-500 hover:bg-indigo-600
                        rounded-lg text-white text-sm font-medium"
            >
              <FaEnvelope size={14} />
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/sheeba-ui-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto
                        px-4 py-2.5
                        border border-slate-700 hover:border-slate-500 hover:bg-slate-800
                        rounded-lg text-gray-200 text-sm font-medium"
            >
              <FaLinkedin size={14} />
              LinkedIn
            </a>

            <a
              href="https://github.com/shesiddi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto
                        px-4 py-2.5
                        border border-slate-700 hover:border-slate-500 hover:bg-slate-800
                        rounded-lg text-gray-200 text-sm font-medium"
            >
              <FaGithub size={14} />
              GitHub
            </a>
        </div>
      </div>
    </section>
  );
}