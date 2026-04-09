import profilePic from "../assets/profilepicture.jpg";

export default function About() {
  return (
    <section id="about" className="py-10 md:py-14 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-gray-200">
          About Me
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          <div className="order-1 md:order-2 bg-slate-950 rounded-2xl p-5 md:p-6 flex items-center justify-center">

            {/* Center wrapper takes full height */}
            <div className="flex items-center justify-center w-full h-full">

              {/* Image stays fixed size (NO stretch) */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
          <div className="order-2 md:order-1 md:col-span-2 bg-slate-950 rounded-2xl p-5 md:p-6 flex flex-col justify-between">
            <div>
              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                I am a Frontend Developer with over 8 years of experience
                building scalable, high-performance web applications in fintech
                and enterprise environments.
              </p>

              <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
                My expertise lies in React, Next.js, modern UI architecture,
                real-time data visualization, and frontend performance
                optimization. I enjoy building clean, reusable components and
                collaborating closely with product and backend teams.
              </p>

              <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
                Recently, I’ve been engaged in selective freelance frontend projects, focusing on building scalable, performance-driven applications while advancing my expertise in React, Next.js, and AI-integrated UI development. I’m now seeking a full-time opportunity where I can bring this experience into a larger product environment.
              </p>
            </div>
            <div className="mt-5">
              <a href="/Sheeba_Siddiqui_Frontend_Developer_CV.pdf"
                target="_blank" rel="noopener noreferrer" download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 hover:bg-indigo-500/20 transition text-xs md:text-sm font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}