import { Link } from "react-router-dom";
import WhatsApp_Icon from "../../../assets/Icons/whatsappSvg";
import { ArrowRight, Mail } from "lucide-react";
import ConsultationPaymentCard from "./consultationPaymentCard";

export default function Contact_Us() {
  return (
    <section id="contact" className="w-full py-24 px-6 md:px-20 bg-light">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark">Get in Touch</h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Reach out for enquiries, consultations, or professional support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-2 md:px-0">
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg flex flex-col gap-8 transition hover:shadow-xl">
            <div>
              <p className="text-md text-gray-500">WhatsApp</p>
              <p className="font-semibold text-dark text-lg md:text-xl">Quick responses</p>
            </div>
            <a
              href="https://wa.me/2348188255882?text=Hello%20Ultimate%20Consult%2C%20I%27d%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex gap-2 justify-center items-center bg-primary text-white py-3 rounded-lg font-medium"
            >
              <span>
                <WhatsApp_Icon />
              </span>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg flex flex-col gap-8 transition hover:shadow-xl">
            <div>
              <p className="text-md text-gray-500">Email</p>
              <p className="font-semibold text-dark text-lg md:text-xl">Detailed enquiries</p>
            </div>
            <a
              href="mailto:info@ultimateconsult.com?subject=Business%20Enquiry"
              className="mt-auto gap-2 inline-flex justify-center items-center border border-primary text-primary py-3 rounded-lg font-medium"
            >
              <span className="text-primary">
                <Mail />
              </span>
              <span>Send an Email</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto w-full bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-3xl p-8 md:p-10 shadow-xl text-center space-y-4">
          <p className="uppercase tracking-[0.2em] text-sm text-blue-100 font-semibold">Consultation Access</p>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to start your consulting request?</h2>
          <p className="text-blue-100">
            Payment is required before consultation details can be submitted. Start secure checkout to continue.
          </p>
          <Link
            to="/consultation/pay"
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition"
          >
            Go to Consultation Payment <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <div className="my-10 max-w-2xl mx-auto bg-white rounded-xl p-5 shadow-sm text-center">
        <p className="text-md text-gray-500">We currently operate remotely and serve clients across Nigeria.</p>
      </div>
    </section>
  );
}
