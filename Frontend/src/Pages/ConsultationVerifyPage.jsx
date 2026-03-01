import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Contact_Form from "../Components/Sections/Contact/contactForm";
import useCustomer from "../Hooks/useCustomer";

export default function ConsultationVerifyPage() {
  const [searchParams] = useSearchParams();
  const token = useMemo(() => searchParams.get("token") || "", [searchParams]);
  console.log(token)
  const { verifyConsultationToken, loading, error, data } = useCustomer();
  const [isVerified, setIsVerified] = useState(false);


  useEffect(() => {
    console.log(data)
    if (data?.success) {
      setIsVerified(true);

    } else {
      verifyConsultationToken(token);
    }
  }, [data]);
  useEffect(() => {
    console.error(error, error?.response, error?.response?.data)
    
  }, [error]);

  return (
    <section className="w-full py-24 px-6 md:px-20 bg-light min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-dark">
            Consultation Access Verification
          </h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We are validating your payment access token.
          </p>
        </div>

        {!token && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            Missing access token in URL.
          </div>
        )}

        {loading && token && (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-700 text-center">
            Verifying your payment token...
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
            {error?.response?.data?.message || "Unable to verify token."}
            Support reference: {data?.supportReference}
          </div>
        )}

        {isVerified && (
          <>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
              Verified.
            </div>
            <Contact_Form accessToken={token} />
          </>
        )}
      </div>
    </section>
  );
}
