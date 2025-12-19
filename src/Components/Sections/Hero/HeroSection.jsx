import HeroImg from "../../../assets/Images/hero-sec-img.jpg";
import { Check } from "lucide-react";

export default function HeroSec() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-16 px-6 md:px-20 py-16 bg-light">
      {/* HERO HEADLINE + IMAGE */}
      <div className="w-full flex flex-col max-w-screen-2xl md:flex-row justify-between items-center gap-12">
        {/* Text */}
        <div className="flex flex-col gap-6 flex-1 max-w-xl justify-center items-center text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-4xl text-dark text-wrap">
            Smart Financial Solutions for Businesses That Want to Grow with
            Confidence
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

      {/* SERVICES / FEATURES */}
      <div className="w-full flex justify-center items-center">
        <h3>What We Offer</h3>
        <ul className="list-disc flex flex-col gap-3 px-4 md:px-0 text-dark text-base max-w-3xl mx-auto">
          <li>
            <span className="font-semibold text-primary">
              Bookkeeping & Accounting
            </span>{" "}
            - Clean, accurate, and up-to-date financial records
          </li>
          <li>
            <span className="font-semibold text-primary">
              Tax Filing & Compliance
            </span>{" "}
            - Stay compliant and avoid penalties
          </li>
          <li>
            <span className="font-semibold text-primary">
              Financial Advisory
            </span>{" "}
            - Make informed decisions that grow your business
          </li>
          <li>
            <span className="font-semibold text-primary">Payroll Services</span>{" "}
            - Error-free and on-time salary processing
          </li>
        </ul>
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col gap-6 w-full max-w-3xl mx-auto text-center justify-center items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Why Choose Us?
        </h2>
        <ul className="flex flex-col gap-3 w-full">
          {[
            "Accurate and dependable",
            "Quick turnaround",
            "Friendly support",
            "Affordable packages",
            "Peace of mind for your business",
          ].map((item, index) => (
            <li
              key={index}
              className="flex w-full items-start justify-start gap-3 text-dark font-medium"
            >
              <Check size={24} strokeWidth={3} className="text-success" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
