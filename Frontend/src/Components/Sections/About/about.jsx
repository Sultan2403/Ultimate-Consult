import { Eye, ShieldCheck, Target } from "lucide-react";

const aboutImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHI5-UocDKsn06P1SXnO_Zxnx8T3Ssb0lwvpDbqCr_GdPBRldLCA7bdtMfRUJJ_ShgZqHuGS6LKahA_-mTOZlBNi0Enthp5N7yReW1ZOKnELSEJkMDiiyiEchr6rP7HaCg1IaWeHkOubE70s1-208FVUOCTN2-5Q8MoTdwvUrCxPMOo7Z0nCVjkr8fYC3Y6n_OVVYnR4U7diUTAYX4j5aiU8HwSiKP_EtM23jCq6ToSGOYjBT30g38_xAE89qByxInRZJRTUAF4XE";

const valueCards = [
  {
    icon: <Target size={18} />,
    title: "Our Mission",
    desc: "To empower businesses through precise financial management and reliable advisory services that drive sustainable growth.",
  },
  {
    icon: <Eye size={18} />,
    title: "Our Vision",
    desc: "To be the most trusted financial partner for growing enterprises in the digital economy, recognized for excellence and innovation.",
  },
];

const coreValues = ["Integrity", "Accuracy", "Support", "Professionalism"];

export default function About_Sec() {
  return (
    <section id="about" className="reveal-on-scroll bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-14 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 md:text-sm">About Us</span>
            <h2 className="mb-4 mt-3 text-3xl font-semibold text-black md:text-4xl">Who We Are</h2>
            <p className="text-base leading-relaxed text-slate-600 md:text-lg">
              Ultimate Consult is a premium accounting firm dedicated to providing business owners with the fiscal clarity they need to thrive. We bridge the gap between complex financial data and actionable business strategy.
            </p>
          </div>

          <div className="h-[250px] overflow-hidden rounded-3xl border border-slate-100 shadow-xl sm:h-[320px] lg:h-[400px]">
            <img src={aboutImage} alt="Our Professional Team" className="h-full w-full object-cover transition duration-700 hover:scale-105" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {valueCards.map((card) => (
            <article key={card.title} className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-8">
              <div className="mb-6 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-700 transition duration-300 group-hover:scale-110 group-hover:bg-emerald-200 group-hover:text-emerald-800 group-hover:shadow-[0_0_24px_rgba(16,185,129,0.45)]">
                {card.icon}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{card.desc}</p>
            </article>
          ))}

          <article className="rounded-3xl bg-slate-950 p-6 text-white shadow-lg lg:p-8">
            <h3 className="mb-6 text-2xl font-semibold">Our Core Values</h3>
            <div className="grid grid-cols-2 gap-3">
              {coreValues.map((value) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300/40 hover:bg-emerald-400/10 hover:shadow-[0_0_22px_rgba(52,211,153,0.25)]"
                >
                  <ShieldCheck
                    size={16}
                    className="mx-auto mb-2 text-emerald-400 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(16,185,129,0.95)]"
                  />
                  <p className="text-xs font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
