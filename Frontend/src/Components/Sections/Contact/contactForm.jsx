import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { Send } from "lucide-react";
import useCustomer from "../../../Hooks/useCustomer";
import { validateContactForm } from "./contactFormValidation";

export default function Contact_Form() {
  const { loading, error: apiError, data, postcustomerData } = useCustomer();
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
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

    // Validate form
    const validationErrors = validateContactForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Prepare data for API (exclude businessName and message as they're not in schema)
    postcustomerData(formData);
  };

  useEffect(() => {
        setSuccessMessage("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      businessName: "",
      message: "",
    });
    setErrors({});
  },[data?.success])

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg max-w-4xl mx-auto w-full flex flex-col gap-6">
      <form
        id="work-with-us"
        className="flex flex-col gap-8"
        onSubmit={handleSubmit}
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Book an Appointment
          </h2>
          <p className="text-gray-500 text-base md:text-lg mt-1">
            We usually respond within 24 hours
          </p>
        </div>

        {/* API Error - Display at top */}
        {apiError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {apiError.message || "Failed to submit form. Please try again."}
          </div>
        )}

        {/* Success Message */}
        {successMessage && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
            {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <TextField
              label="First Name"
              name="firstName"
              size="medium"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              name="lastName"
              size="medium"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
            />
          </div>
        </div>

        <div>
          <TextField
            label="Phone Number"
            name="phoneNumber"
            size="medium"
            fullWidth
            value={formData.phoneNumber}
            onChange={handleChange}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
        </div>

        <div>
          <TextField
            label="Email Address"
            name="email"
            size="medium"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
        </div>

        <div>
          <TextField
            label="Business Name"
            name="businessName"
            size="medium"
            fullWidth
            value={formData.businessName}
            onChange={handleChange}
          />
        </div>

        <div>
          <TextField
            label="Message / Request"
            name="message"
            size="medium"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
          />
        </div>

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
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </div>
  );
}
