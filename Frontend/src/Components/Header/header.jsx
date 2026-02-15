import { useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full sticky top-0 z-50 bg-light/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20 h-24">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-primary tracking-tight"
        >
          Ultimate Consult
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-dark text-base font-medium hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-2 bg-primary hover:bg-secondary text-white px-7 py-3 rounded-full font-semibold transition-colors"
          >
            Get Consulting
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-light shadow-md border-t">
          <nav className="flex flex-col gap-4 p-6">
            {["home", "about", "services", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-dark font-medium"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
