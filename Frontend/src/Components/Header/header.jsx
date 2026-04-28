import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOpen(false);
            setIsActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-300/40"
          : "bg-white/70"
      }`}
    >
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-slate-900 lg:text-base"
        >
          Ultimate Consult
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");

            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs font-medium transition-colors duration-300 lg:text-sm
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-emerald-600 after:transition-all after:duration-300
                after:content-[''] ${
                  isActive === sectionId
                    ? "text-emerald-600 after:w-full"
                    : "text-slate-600 hover:text-slate-900 after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="premium-sheen hidden rounded bg-emerald-600 px-4 py-2 text-xs font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-700 md:inline-flex lg:text-sm"
        >
          Get Consultation
        </a>

        <button
          type="button"
          className="rounded p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="transition-transform duration-300">
            {open ? <X size={22} className="rotate-90" /> : <Menu size={22} />}
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-slate-200 bg-white shadow-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-5 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-slate-700 transition hover:text-emerald-600"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Get Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
