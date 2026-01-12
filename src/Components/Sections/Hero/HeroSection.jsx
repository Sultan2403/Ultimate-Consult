import HeroImg from "../../../assets/Images/hero-sec-img.jpg";
import {
  BookOpen,
  FileText,
  Users,
  Briefcase,
  LineChart,
  PieChart,
  Check,
} from "lucide-react";

export default function HeroSec() {
  return (
    <section
      id="home"
      className="w-full flex flex-col gap-24 py-5 my-10 px-6 md:px-20 bg-light"
    >
      {/* HERO HEADLINE + IMAGE */}
      <div className="w-full flex flex-col max-w-screen-2xl md:flex-row justify-between items-center gap-12 mx-auto">
        {/* Text */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl justify-center items-center text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-dark text-wrap">
            Smart Solutions for Businesses That Want to Grow with Confidence
          </h1>
          <p className="text-gray-700 text-md">
            Accurate bookkeeping, reliable accounting, and tax compliance — so
            you can run your business without stress or guesswork.
          </p>
          <button className="bg-primary hover:bg-secondary w-full text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today!
          </button>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center max-w-sm">
          <img
            className="rounded-[50%] w-full h-72 md:h-96 object-cover shadow-lg"
            src={HeroImg}
            alt="Hero Image"
          />
        </div>
      </div>

      {/* WHAT WE OFFER */}
      <div className="w-full flex flex-col gap-12 max-w-6xl mx-auto">
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

      {/* WHY CHOOSE US */}
      {/* WHY CHOOSE US */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 mt-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center">
          Why Choose Us?
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {[
            "Accurate and dependable",
            "Quick turnaround",
            "Friendly support",
            "Affordable packages",
            "Peace of mind for your business",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-5 bg-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gray-100 text-primary flex items-center justify-center">
                <Check size={20} strokeWidth={3} />
              </div>
              <p className="text-gray-900 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
