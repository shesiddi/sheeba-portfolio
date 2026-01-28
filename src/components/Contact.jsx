export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-slate-900/40 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>

        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          I’m currently open to frontend opportunities where I can contribute
          to building high-quality, scalable web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:Sheeba2311@gmail.com"
            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 
                       transition rounded-lg text-white text-sm font-medium"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/sheeba-ui-developer"
            target="_blank"
            className="px-6 py-3 border border-slate-700 hover:border-slate-500 
                       transition rounded-lg text-gray-200 text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
