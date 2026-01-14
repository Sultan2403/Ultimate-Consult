import { Mail } from "lucide-react";
import WhatsApp_Icon from "../../assets/Icons/whatsappSvg";
import Facebook_Icon from "../../assets/Icons/facebookSvg";

const currYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left — Brand */}
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-sm md:text-base">
            © {currYear} Ultimate Consult
          </p>
          <p className="text-white/70 text-sm mt-1">
            Professional Accounting & Business Support
          </p>
        </div>

        {/* Right — Social / Contact */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <p className="text-white/70 text-sm font-medium">Contact us</p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="Chat on WhatsApp"
            >
              <WhatsApp_Icon className="w-7 h-7" />
            </a>

            <a
              href="mailto:info@ultimateconsult.com"
              className="text-white hover:opacity-80 transition"
              aria-label="Send an Email"
            >
              <Mail className="w-7 h-7" />
            </a>

            <a
              href="https://facebook.com/ultimateconsult"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:opacity-80 transition"
              aria-label="Visit Facebook"
            >
              <Facebook_Icon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
