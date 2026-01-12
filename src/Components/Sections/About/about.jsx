import { ShieldCheck, CheckCircle2, Target, Eye } from "lucide-react";

export default function About_Sec() {
  return (
    <section id="about" className="w-full p-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Who We Are */}
        <div className="flex flex-col gap-4 items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Who We Are
          </h1>
          <p className="text-gray-800 max-w-3xl leading-relaxed">
            Ultimate Consult is a professional accounting and business support
            firm helping small and medium-sized businesses maintain accurate
            financial records, ensure compliance, and make informed financial
            decisions. Our approach is built on{" "}
            <span className="text-blue-700 font-semibold">
              clarity, structure, and expert guidance
            </span>
            .
          </p>
        </div>

        {/* Mission / Vision / Values */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Mission */}
          <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:scale-110 transition">
                <Target size={20} />
              </div>
              <h2 className="text-xl font-semibold text-blue-700">
                Our Mission
              </h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              To empower businesses with reliable financial records and expert
              guidance that drive smarter decisions and long-term success.
            </p>
          </div>

          {/* Vision */}
          <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700 group-hover:scale-110 transition">
                <Eye size={20} />
              </div>
              <h2 className="text-xl font-semibold text-blue-700">
                Our Vision
              </h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              To become the most trusted accounting partner for business owners
              across Nigeria.
            </p>
          </div>

          {/* Values */}
          <div className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-xl font-semibold text-blue-700">
                Our Values
              </h2>
            </div>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>
                  <strong>Integrity</strong> — Honest and transparent work
                </span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>
                  <strong>Accuracy</strong> — Every number verified
                </span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>
                  <strong>Support</strong> — Guidance beyond compliance
                </span>
              </li>

              <li className="flex items-center gap-3">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>
                  <strong>Professionalism</strong> — High standards, always
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
