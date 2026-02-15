import {
  BookOpen,
  FileText,
  Users,
  Briefcase,
  LineChart,
  PieChart,
} from "lucide-react";

export default function What_We_Offer() {
  return (
    <>
      {" "}
      {/* WHAT WE OFFER */}
      <div className="w-full flex flex-col gap-12 max-w-6xl my-12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          What We Offer
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <BookOpen size={22} />,
              title: "Bookkeeping & Accounting",
              desc: "Clean, organized, and up-to-date financial records.",
            },
            {
              icon: <FileText size={22} />,
              title: "Tax Preparation & Filing",
              desc: "Stay compliant and avoid penalties all year round.",
            },
            {
              icon: <Users size={22} />,
              title: "Payroll Services",
              desc: "Accurate salary processing and reports.",
            },
            {
              icon: <Briefcase size={22} />,
              title: "Business Registration Support",
              desc: "Proper documentation and CAC registration assistance.",
            },
            {
              icon: <LineChart size={22} />,
              title: "Financial Advisory",
              desc: "Expert guidance to make informed business decisions.",
            },
            {
              icon: <PieChart size={22} />,
              title: "Budgeting & Planning",
              desc: "Plan for growth and optimize cash flow effectively.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-primary">
                <div className="p-2 rounded-lg bg-blue-100">{item.icon}</div>
                <h3 className="font-semibold text-lg text-dark">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
