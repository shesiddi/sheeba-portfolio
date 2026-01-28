import { useState, useEffect, useRef } from "react";


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
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold text-white">
          Sheeba
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-slate-300 hover:text-white transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden relative w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Top line */}
          <span
            className={`absolute left-0 top-2 h-0.5 w-full bg-white
              transition-all duration-300 ease-in-out
              ${isOpen ? "rotate-45 top-4" : ""}`}
          />

          {/* Middle line */}
          <span
            className={`absolute left-0 top-4 h-0.5 w-full bg-white
              transition-opacity duration-300 ease-in-out
              ${isOpen ? "opacity-0" : "opacity-100"}`}
          />

          {/* Bottom line */}
          <span
            className={`absolute left-0 top-6 h-0.5 w-full bg-white
              transition-all duration-300 ease-in-out
              ${isOpen ? "-rotate-45 top-4" : ""}`}
          />
        </button>
      </nav>

    <div className={`md:hidden fixed inset-x-0 top-16
    bg-slate-950/95 backdrop-blur
    border-t border-slate-800
    transition-all duration-300 ease-out
    ${
      isOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}>
  <ul className="flex flex-col px-6 py-6 space-y-4 text-sm">
    {navItems.map((item) => (
      <li key={item.label}>
        <a
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="block text-slate-300 hover:text-white transition"
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
