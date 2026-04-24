import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const toSectionId = (href) => href.replace("#", "");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sectionIds = useMemo(() => navLinks.map((link) => toSectionId(link.href)), []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, [sectionIds]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[76px] lg:px-8">
        <a href="#home" className="text-sm font-semibold tracking-tight text-slate-900 lg:text-base">
          UltimateConsult
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === toSectionId(link.href);

            return (
              <a
                key={link.label}
                href={link.href}
                className={`rounded px-2 py-1 text-xs font-medium transition-all lg:text-sm ${
                  isActive
                    ? "bg-brand-surface text-brand-emerald shadow-nav-glow"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="hidden rounded bg-brand-emerald px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-emerald-dark md:inline-flex lg:text-sm"
        >
          Get Consultation
        </a>

        <button
          type="button"
          className="rounded p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 shadow-xl md:hidden">
          <div className="space-y-5">
            {navLinks.map((link) => {
              const isActive = activeSection === toSectionId(link.href);

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-3 py-2 text-base font-medium transition-all ${
                    isActive
                      ? "bg-brand-surface text-brand-emerald shadow-nav-glow"
                      : "text-slate-700"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full justify-center rounded-xl bg-brand-emerald px-5 py-3 font-semibold text-white"
            >
              Get Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
