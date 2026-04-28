const currYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="reveal-on-scroll w-full border-t border-slate-200/80 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-slate-900">Ultimate Consult</p>
          <p className="text-xs text-slate-500">© {currYear} Ultimate Consult. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-5 text-xs text-slate-500">
          <a href="#home" className="hover:text-emerald-600">Home</a>
          <a href="#services" className="hover:text-emerald-600">Services</a>
          <a href="#contact" className="hover:text-emerald-600">Contact Support</a>
        </div>
      </div>
    </footer>
  );
}
