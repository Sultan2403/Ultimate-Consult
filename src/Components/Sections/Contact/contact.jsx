import { TextField, Button } from "@mui/material";
import WhatsApp_Icon from "../../../assets/Icons/whatsappSvg";

import { Phone, Mail, Globe, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact_Us() {
  return (
    <section id="contact" className="w-full py-24 px-6 md:px-20 bg-light">
      <div className="max-w-5xl mx-auto flex flex-col gap-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark">
            Get in Touch
          </h1>

          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Reach out for enquiries, consultations, or professional support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto px-2 md:px-0">
          {/* WhatsApp */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg flex flex-col gap-8 transition hover:shadow-xl">
            <div>
              <p className="text-md text-gray-500">WhatsApp</p>
              <p className="font-semibold text-dark text-lg md:text-xl">
                Quick responses
              </p>
            </div>
            <a
              href="https://wa.me/234XXXXXXXXXX?text=Hello%20Ultimate%20Consult%2C%20I%27d%20like%20to%20make%20an%20enquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex gap-2 justify-center items-center bg-primary text-white py-3 rounded-lg font-medium"
            >
              <span>
                <WhatsApp_Icon />
              </span>
              <span> Chat on WhatsApp</span>
            </a>
          </div>

          {/* Email */}
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-lg flex flex-col gap-8 transition hover:shadow-xl">
            <div>
              <p className="text-md text-gray-500">Email</p>
              <p className="font-semibold text-dark text-lg md:text-xl">
                Detailed enquiries
              </p>
            </div>
            <a
              href="mailto:info@ultimateconsult.com?subject=Business%20Enquiry"
              className="mt-auto gap-2 inline-flex justify-center items-center border border-primary text-primary py-3 rounded-lg font-medium"
            >
              <span className="text-primary">
                <Mail />
              </span>
              <span> Send an Email</span>
            </a>
          </div>
        </div>

        <div className="relative my-16 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-gray-300" />
          <span className="relative bg-light px-4 text-lg font-medium text-gray-500">
            OR
          </span>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg max-w-4xl mx-auto w-full flex flex-col gap-6">
          <form id="work-with-us" className="flex flex-col gap-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-dark">
                Book an Appointment
              </h2>
              <p className="text-gray-500 text-base md:text-lg mt-1">
                We usually respond within 24 hours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <TextField label="Full Name" size="medium" fullWidth />
              <TextField label="Phone Number" size="medium" fullWidth />
            </div>

            <TextField label="Email Address" size="medium" fullWidth />
            <TextField label="Business Name" size="medium" fullWidth />

            <TextField
              label="Message / Request"
              size="medium"
              multiline
              rows={4}
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              endIcon={<Send />}
              sx={{
                backgroundColor: "#0247f5",
                "&:hover": { backgroundColor: "#3B82F6" },
                fontSize: "20px",
                fontWeight: 500,
                paddingY: "10px",
                borderRadius: "1rem",
                textTransform: "none",
                transition: "all 0.3s ease",
              }}
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <div className="my-10 max-w-2xl mx-auto bg-white rounded-xl p-5 shadow-sm text-center">
        <p className="text-md text-gray-500">
          We currently operate remotely and serve clients across Nigeria.
        </p>
      </div>
    </section>
  );
}
