import {
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Handshake,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <BookOpen size={20} />,
    title: "Bookkeeping & Financial Accounting",
    desc: "Precise tracking of all business transactions ensuring your ledgers are always balanced and up-to-date.",
  },
  {
    icon: <FileText size={20} />,
    title: "Tax Preparation & Filing",
    desc: "Stay compliant with local regulations and minimize liabilities through strategic tax planning.",
  },
  {
    icon: <Users size={20} />,
    title: "Payroll Services",
    desc: "Automated and accurate payroll processing for your employees, handling all statutory deductions.",
  },
  {
    icon: <BriefcaseBusiness size={20} />,
    title: "Business Registration Support",
    desc: "Expert guidance through the legal hurdles of starting and formalizing your business entity.",
  },
  {
    icon: <Handshake size={20} />,
    title: "Financial Advisory & Budgeting",
    desc: "Strategic insights and forecasting to help you allocate resources effectively for long-term growth.",
  },
];

const benefits = ["Meticulous Accuracy", "Statutory Compliance", "Dedicated Support"];

export default function Services_Sec() {
  return (
    <section id="services" className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 text-center lg:mb-16">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-600 md:text-xs">Our Expertise</span>
          <h2 className="mt-3 text-3xl font-semibold text-black md:text-4xl">Specialized Financial Services</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-emerald-600" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg lg:p-8"
            >
              <div className="mb-4 inline-flex rounded-lg bg-emerald-50 p-2 text-emerald-700">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{service.desc}</p>
            </article>
          ))}

          <article className="rounded-2xl bg-slate-950 p-6 text-white shadow-lg lg:p-8">
            <h3 className="mb-5 text-2xl font-semibold">Why Partner With Us?</h3>
            <ul className="mb-7 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-white/90">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  {benefit}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex w-full justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white">
              Request Info
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
