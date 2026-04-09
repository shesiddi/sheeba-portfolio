import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
      <nav className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-base md:text-lg font-semibold text-white tracking-tight">
          Sheeba
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm">{navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="relative group text-slate-300 hover:text-white transition">
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8"
          aria-label="Toggle menu">
          <span
            className={`absolute left-0 top-2 h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 top-4" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-4 h-0.5 w-full bg-white transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 top-6 h-0.5 w-full bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 top-4" : ""
            }`}
          />
        </button>
      </nav>
      <div
        className={`md:hidden fixed inset-x-0 top-16 bg-slate-950/95 backdrop-blur border-t border-slate-800 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 space-y-5 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-300 hover:text-white transition py-1"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </header>
  );
}