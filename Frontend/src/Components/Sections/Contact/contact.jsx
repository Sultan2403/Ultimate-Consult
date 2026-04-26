import { Mail, Phone } from "lucide-react";

export default function Contact_Us() {

  //  Prob use a form builder like react forms for the sake of learning. 

  return (
    <section
      id="contact"
      className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-2xl lg:flex lg:rounded-[40px]">
        <div className="bg-slate-950 p-8 text-white lg:w-[34%] lg:p-12">
          <h2 className="mb-4 text-4xl font-bold leading-tight">
            Ready to transform your finances?
          </h2>
          <p className="mb-10 text-sm text-white/70">
            Our team of certified experts is standing by to help you scale with
            confidence.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <div className="rounded bg-emerald-600/20 p-2 text-emerald-300">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                  Call / WhatsApp
                </p>
                <p className="font-semibold">08035689456</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="rounded bg-emerald-600/20 p-2 text-emerald-300">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                  Email
                </p>
                <p className="break-all font-semibold">
                  hello@ultimateconsult.com.ng
                </p>
              </div>
            </div>
          </div>

          <p className="mt-12 border-t border-white/10 pt-8 text-xs italic text-white/45">
            "The clarity they provided saved us thousands in potential tax
            errors." — TechStart CEO
          </p>
        </div>

        <div className="p-6 lg:w-[66%] lg:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="080 0000 0000"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@business.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Company Ltd"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700">
                Message/Request
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your business needs..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-700"
            >
              Send Inquiry
            </button>
          </form>

          {/* Consultation payment flow intentionally hidden for this screen iteration.
          <ConsultationPaymentCard />
          */}
        </div>
      </div>
    </section>
  );
}
