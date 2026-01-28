export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-10">About Me</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Text Card */}
          <div className="md:col-span-2 bg-slate-950 rounded-2xl p-8">
            <p className="text-gray-200 leading-relaxed">
              I am a Senior Frontend Developer with over 8 years of experience
              building scalable, high-performance web applications in fintech
              and enterprise environments.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              My expertise lies in React, Next.js, modern UI architecture,
              real-time data visualization, and frontend performance
              optimization. I enjoy building clean, reusable components and
              collaborating closely with product and backend teams.
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              After a planned maternity and health recovery break, I am now
              returning to full-time frontend roles with renewed focus and
              up-to-date technical skills.
            </p>
            <div className="mt-6">
              <a href="./Sheeba_Siddiqui_Frontend_Developer_Resume.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors duration-300 text-sm font-medium">
                Download Resume </a>
           </div>
          </div>
          <div className="bg-slate-950 rounded-2xl p-8 flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 text-sm">
              <img src="/src/assets/profilepicture.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
