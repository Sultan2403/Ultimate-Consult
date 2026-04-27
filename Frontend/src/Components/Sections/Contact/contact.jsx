import { useEffect, useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Button, TextField } from "@mui/material";
import { validateContactForm } from "../../../Helpers/Validation/contactFormValidation";
import useCustomer from "../../../Hooks/useCustomer";

const initialFormState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  businessName: "",
  message: "",
};

export default function Contact_Us() {
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const { data, error, loading, postCustomerData } = useCustomer();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validateContactForm(formData);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // API integration approach (example):
    // 1) Create `contactApi.postContactInquiry(payload)` in Frontend/src/Apis/Client/contact.api.js
    // 2) Import it here: `import contactApi from "../../../Apis/Client/contact.api";`
    // 3) Call it with validated data:
    // await contactApi.postContactInquiry({
    //   fullName: formData.fullName.trim(),
    //   phoneNumber: formData.phoneNumber.trim(),
    //   email: formData.email.trim(),
    //   businessName: formData.businessName.trim(),
    //   message: formData.message.trim(),
    // });
    // 4) Handle API/client formErrors using your interceptor and map them to field/general messages.

    postCustomerData(formData);
  };

  const textFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "0.75rem",
      backgroundColor: "rgb(248 250 252)",
      "& fieldset": {
        borderColor: "rgb(226 232 240)",
      },
      "&:hover fieldset": {
        borderColor: "rgb(148 163 184)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgb(5 150 105)",
      },
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "0.2rem",
    },
  };

  useEffect(() => {
    if (data) setFormData(initialFormState);
  }, [data]);

  return (
    <section
      id="contact"
      className="bg-slate-100 px-4 py-14 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-2xl lg:flex lg:rounded-[40px]">
        <div className="bg-slate-950 p-8 text-white lg:w-[34%] lg:p-12 flex flex-col justify-center">
          <div className="max-w-sm mx-auto lg:mx-0">
            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Ready to transform your finances?
            </h2>
            <p className="mb-10 text-sm text-white/70">
              Our team of certified experts is standing by to help you scale
              with confidence.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="rounded bg-emerald-600/20 p-2 text-emerald-300">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="underline text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                    Call / WhatsApp
                  </p>
                  <p className="font-semibold">+234 818 8255 882</p>
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
          </div>
        </div>

        <div className="p-6 lg:w-[66%] lg:p-12 flex flex-col justify-center">
          <form className="space-y-6" onSubmit={handleSubmit} noValidate>
            {/* Show API error at the top */}
            {error && (
              <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-red-700 border border-red-200 text-sm font-medium">
                {error}
              </div>
            )}
            {/* Show API success message at the top */}
            {data?.message && (
              <div className="mb-4 rounded-lg bg-emerald-100 px-4 py-3 text-emerald-700 border border-emerald-200 text-sm font-medium">
                {data?.message}
              </div>
            )}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <TextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter your first name"
                fullWidth
                error={Boolean(formErrors.firstName)}
                helperText={formErrors.firstName || ""}
                sx={textFieldSx}
              />

              <TextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter your last name"
                fullWidth
                error={Boolean(formErrors.lastName)}
                helperText={formErrors.lastName || ""}
                sx={textFieldSx}
              />

              <TextField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="+234 800 000 0000"
                inputProps={{ inputMode: "tel" }}
                fullWidth
                error={Boolean(formErrors.phoneNumber)}
                helperText={
                  formErrors.phoneNumber ||
                  "Enter phone number with country code"
                }
                sx={textFieldSx}
              />

              <TextField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@business.com"
                fullWidth
                error={Boolean(formErrors.email)}
                helperText={formErrors.email || ""}
                sx={textFieldSx}
              />
            </div>

            <TextField
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Company Ltd"
              fullWidth
              error={Boolean(formErrors.businessName)}
              helperText={formErrors.businessName || ""}
              sx={textFieldSx}
            />

            <TextField
              label="Message/Request"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your business needs..."
              fullWidth
              multiline
              rows={5}
              error={Boolean(formErrors.message)}
              helperText={formErrors.message || ""}
              sx={textFieldSx}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                textTransform: "none",
                borderRadius: "0.75rem",
                py: "0.95rem",
                fontSize: "0.9rem",
                fontWeight: 600,
                bgcolor: "rgb(5 150 105)",
                boxShadow: "0 10px 25px -3px rgba(5, 150, 105, 0.35)",
                "&:hover": {
                  bgcolor: "rgb(4 120 87)",
                },
              }}
            >
              {loading ? "Submitting..." : "Send Inquiry"}
            </Button>
          </form>

          {/* Consultation payment flow intentionally hidden for this screen iteration.
          <ConsultationPaymentCard />
          */}
        </div>
      </div>
    </section>
  );
}
