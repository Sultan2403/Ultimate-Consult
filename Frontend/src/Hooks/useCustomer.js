import { useState } from "react";
import api from "../Apis/Client/client.api";

export default function useCustomer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiCall();
      setData(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const methods = {
    postcustomerData: (customerData) =>
      execute(() => api.post("/customers", customerData)),
  };

  return { data, loading, error, ...methods };
}
