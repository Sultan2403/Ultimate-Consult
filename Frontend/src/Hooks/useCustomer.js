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
      const response = await apiCall();
      setData(response);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const methods = {
    initializePayment: (email) =>
      execute(() => api.post("/payments", { email })),
    verifyConsultationToken: (token) =>
      execute(() => api.get(`/customers/verify/${token}`)),
    postcustomerData: ({ token, customerData }) =>
      execute(() => api.post(`/customers/${encodeURIComponent(token)}`, customerData)),
  };

 
  return { data, loading, error, ...methods };
}
