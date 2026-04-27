const heroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAID7HAHWDUe-HT9ohO6zdNOCXWX9Ii682Q_S8Sz8zUF__YXCU79_LxYj5bK29OMhajdguXe0narAkjXRnUWX70CfxdWUGnD1Qxk6BtqwHOAyXFN1KyBMwT3IDAIHpBq-gtalVV4EaVYTHaJGa03GPo-xbCJNwSdW6-doQ7v0kKNM8sOql68uWwgyD1Tlgf3v8HvvfI66xPeXjhkj4LMKJMdNNUOAyJQiUZ3TBaTH5fa452GTLhu8fBO9DgZnXUWXg4uZ5rtoarFL0";

export default function HeroSec() {
  return (
    <section id="home" className="bg-white px-4 pb-14 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-5 lg:space-y-7">
          <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
            Smart Solutions for Businesses That Want to Grow with Confidence
          </h1>
          <p className="text-base leading-relaxed text-slate-600 md:text-lg">
            Accurate bookkeeping, reliable accounting, and tax compliance—so you can run your business without stress or guesswork.
          </p>
          <p className="text-sm text-slate-500 md:text-base">
            At Ultimate Consult, we help business owners stay organized, tax-ready, and financially smart.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow transition hover:bg-emerald-700"
            >
              Get Started Today
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="relative h-[300px] overflow-hidden rounded-2xl shadow-xl sm:h-[360px] lg:h-[540px]">
          <img src={heroImage} alt="Professional Team Meeting" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
