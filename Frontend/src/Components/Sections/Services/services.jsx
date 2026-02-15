import { BookOpen, FileText, Users, Briefcase, LineChart } from "lucide-react";

export default function Services_Sec() {
  const services = [
    {
      icon: <BookOpen size={28} />,
      title: "Bookkeeping & Financial Accounting",
      desc: "We keep your financial records clean, organized, and updated so you always know where your business stands.",
    },
    {
      icon: <FileText size={28} />,
      title: "Tax Preparation & Filing",
      desc: "Avoid penalties and last-minute stress. We help you stay tax-compliant all year round.",
    },
    {
      icon: <Users size={28} />,
      title: "Payroll Services",
      desc: "We manage staff salaries, deductions, and payroll reports—accurately and on time.",
    },
    {
      icon: <Briefcase size={28} />,
      title: "Business Registration Support",
      desc: "Start your business the right way with proper documentation and CAC registration assistance.",
    },
    {
      icon: <LineChart size={28} />,
      title: "Financial Advisory & Budgeting",
      desc: "Make smarter business decisions with expert financial guidance and planning.",
    },
  ];

  return (
    <section id="services" className="w-full py-16 px-6 md:px-20 bg-light">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Page Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Our Services
          </h1>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            Comprehensive accounting and business solutions to help your
            business stay organized, compliant, and ready for growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center gap-4 p-4 px-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-[48%] min-h-[180px]"
            >
              {/* Icon */}
              <div className="flex-shrink-0 p-3 bg-blue-100 rounded-xl text-blue-700">
                {service.icon}
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold text-dark mb-1">
                  {service.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
