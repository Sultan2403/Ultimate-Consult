import { useCallback, useState } from "react";
import api from "../Apis/Client/client.api";

export default function useCustomer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await apiCall();
      setData(responseData);
      return responseData;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const initializePayment = useCallback(
    (email) => execute(() => api.post("/payments", { email })),
    [execute],
  );

  const verifyConsultationToken = useCallback(
    (token) => execute(() => api.get(`/customers/verify/${token}`)),
    [execute],
  );

  const postcustomerData = useCallback(
    (token, customerData) => execute(() => api.post(`/customers/${token}`, customerData)),
    [execute],
  );

  return { data, loading, error, initializePayment, verifyConsultationToken, postcustomerData };
}
