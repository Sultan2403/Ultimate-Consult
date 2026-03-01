import { useState } from "react";
import { Alert, Button, TextField } from "@mui/material";
import { CreditCard, ShieldCheck } from "lucide-react";
import useCustomer from "../../../Hooks/useCustomer";

const CONSULTATION_FEE = "₦50,000";

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default function ConsultationPaymentCard() {
  const { initializePayment, loading, error } = useCustomer();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleStartPayment = async (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    if (!normalizedEmail) {
      setEmailError("Please input your email address.");
      return;
    }

    if (!isValidEmail(normalizedEmail)) {
      setEmailError("Please input a valid email address.");
      return;
    }

    setEmailError("");

    try {
      const response = await initializePayment(normalizedEmail);
      if (response?.authorization_url) {
        window.location.href = response.authorization_url;
      }
    } catch {
      // Error state is handled by useCustomer and shown in UI.
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg max-w-3xl mx-auto w-full flex flex-col gap-6 border border-blue-100">
      <div className="text-center space-y-2">
        <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1 mx-auto">
          <ShieldCheck size={16} />
          Secure Consultation Checkout
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Pay {CONSULTATION_FEE} to Continue</h2>
        <p className="text-gray-500 text-base md:text-lg">
          You&apos;ll be redirected to our payment provider. After successful payment, we&apos;ll send you back to complete your consultation details.
        </p>
      </div>

      <Alert severity="info" sx={{ borderRadius: "12px" }}>
        By continuing, you agree that consultation fees are non-refundable once your request has been submitted.
      </Alert>

      {error && (
        <Alert severity="error" sx={{ borderRadius: "12px" }}>
          {error?.response?.data?.message || "Unable to initialize payment. Please try again."}
        </Alert>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleStartPayment} noValidate>
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (emailError) {
              setEmailError("");
            }
          }}
          error={Boolean(emailError)}
          helperText={emailError}
          fullWidth
          required
        />

        <Button
          variant="contained"
          size="large"
          type="submit"
          disabled={loading}
          endIcon={<CreditCard />}
          sx={{
            backgroundColor: "#0247f5",
            "&:hover": { backgroundColor: "#1D4ED8" },
            "&:disabled": { backgroundColor: "#9CA3AF" },
            fontSize: "18px",
            fontWeight: 600,
            paddingY: "12px",
            borderRadius: "1rem",
            textTransform: "none",
          }}
        >
          {loading ? "Redirecting to secure checkout..." : `Proceed to Payment (${CONSULTATION_FEE})`}
        </Button>
      </form>
    </div>
  );
}
