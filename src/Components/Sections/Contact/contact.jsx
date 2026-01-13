import { TextField, Button } from "@mui/material";
import { Phone, Mail, Globe, MapPin, MessageCircle } from "lucide-react";

export default function Contact_Us() {
  return (
    <section id="contact" className="w-full py-20 px-6 md:px-20 bg-light">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark">
            Get in Touch
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            Reach out to us for enquiries, consultations, or professional
            support.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* LEFT — CONTACT INFO */}
          <div className="flex flex-col gap-8  justify-between">
            <div className="flex items-start gap-4 border-b pb-4">
              <Phone size={20} className="text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-dark">Call / WhatsApp</p>
                <a
                  href="https://wa.me/+2348035689456?text=Hello%20I%27d%20like%20to%20make%20an%20enquiry"
                  rel="noopener norefferer"
                  target="_blank"
                  className="text-gray-500 text-sm hover:text-primary transition"
                >
                  +234 803 568 9456
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b pb-4">
              <Mail size={20} className="text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-dark">Email</p>
                <a
                  href="mailto:null"
                  className="text-gray-500 text-sm hover:underline"
                >
                  info@ultimateconsult.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gray-600 mt-1" />
              <div>
                <p className="font-medium text-dark">Based In</p>
                <p className="text-gray-500 text-sm">Lagos</p>
              </div>
            </div>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="bg-white p-10 rounded-2xl shadow-sm">
            <form className="flex flex-col gap-8 py-4">
              <h2 className="font-semibold text-xl text-dark text-center">
                Send us a message
              </h2>
              <p className="text-sm text-gray-500 text-center -mt-4">
                We’ll respond within 24 hours
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TextField
                  label="Full Name"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </div>

              <TextField
                label="Email Address"
                variant="outlined"
                size="small"
                fullWidth
              />

              <TextField
                label="Business Name"
                variant="outlined"
                size="small"
                fullWidth
              />

              <TextField
                label="Message / Request"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                rows={4}
              />

              <Button
                startIcon={<MessageCircle strokeWidth={2} />}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#0247f5",
                  "&:hover": {
                    backgroundColor: "#3B82F6",
                  },
                  textTransform: "none",
                  fontWeight: 500,
                  paddingY: "12px",
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
