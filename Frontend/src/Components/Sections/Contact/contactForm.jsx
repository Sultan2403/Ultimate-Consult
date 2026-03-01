import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Send } from "lucide-react";
import useCustomer from "../../../Hooks/useCustomer";
import { validateContactForm } from "./contactFormValidation";

export default function Contact_Form({ accessToken = "" }) {
  const { loading, error: apiError, data, postcustomerData } = useCustomer();
  const [customerData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const validationErrors = validateContactForm(customerData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!accessToken) {
      setErrors((prev) => ({
        ...prev,
        form: "Missing consultation token. Please use the payment redirect link.",
      }));
      return;
    }

    postcustomerData({
      token: accessToken,
      customerData,
    });
  };

  useEffect(() => {
    if (data?.success) {
      setSuccessMessage("Thank you! We'll be in touch within 24 hours.");
      setFormData({});
      setErrors({});
    }
  }, [data]);

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg max-w-4xl mx-auto w-full flex flex-col gap-6">
      <form
        id="work-with-us"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Consultation Details
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-1">
            We usually respond within 24 hours
          </p>
        </div>

        {(apiError || errors.form) && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {errors.form ||
              apiError?.response?.data?.message ||
              "Failed to submit form. Please try again."}
          </div>
        )}

        {successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <TextField
            label="First Name"
            name="firstName"
            fullWidth
            value={customerData.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            label="Last Name"
            name="lastName"
            fullWidth
            value={customerData.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </div>

        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          value={customerData.phoneNumber}
          onChange={handleChange}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
        />
        <TextField
          label="Email Address"
          name="email"
          fullWidth
          value={customerData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          label="Business Name"
          name="businessName"
          fullWidth
          value={customerData.businessName}
          onChange={handleChange}
          error={!!errors.businessName}
          helperText={errors.businessName}
        />
        <TextField
          label="Message / Request"
          name="message"
          multiline
          rows={4}
          fullWidth
          value={customerData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />

        <Button
          variant="contained"
          size="large"
          endIcon={<Send />}
          disabled={loading}
          type="submit"
          sx={{
            backgroundColor: "#0247f5",
            "&:hover": { backgroundColor: "#3B82F6" },
            "&:disabled": { backgroundColor: "#9CA3AF" },
            fontSize: "20px",
            fontWeight: 500,
            paddingY: "10px",
            borderRadius: "1rem",
            textTransform: "none",
            transition: "all 0.3s ease",
          }}
        >
          {loading ? "Sending..." : "Submit Consultation"}
        </Button>
      </form>
    </div>
  );
}
