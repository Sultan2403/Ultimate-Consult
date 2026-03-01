import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { CreditCard } from "lucide-react";
import useCustomer from "../../../Hooks/useCustomer";

export default function ConsultationPaymentCard() {
  const { initializePayment, loading, error } = useCustomer();
  const [email, setEmail] = useState("");

  const handleStartPayment = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    const response = await initializePayment(email.trim());

    if (response?.authorization_url) {
      window.location.href = response.authorization_url;
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg max-w-3xl mx-auto w-full flex flex-col gap-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Pay to Continue</h2>
        <p className="text-gray-500 text-base md:text-lg mt-1">
          Complete payment first, then you will be redirected to submit your consultation details.
        </p>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error?.response?.data?.message || "Unable to initialize payment. Please try again."}
        </div>
      )}

      <form className="flex flex-col gap-4" onSubmit={handleStartPayment}>
        <TextField
          label="Email Address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
          {loading ? "Redirecting..." : "Pay ₦50,000"}
        </Button>
      </form>
    </div>
  );
}
