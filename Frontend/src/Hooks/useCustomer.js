import { useCallback, useState } from "react";
import api from "../Apis/Client/client.api";

export default function useCustomer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (apiCall) => {
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
  };

  const methods = {
    initializePayment: (email) =>
      execute(() => api.post("/payments", { email })),
    verifyConsultationToken: (token) =>
      execute(() => api.get(`/customers/verify/${token}`)),
    postcustomerData: ({ token, customerData }) =>
      execute(() => api.post(`/customers/${token}`, customerData)),
  };

  return { data, loading, error, ...methods };
}
