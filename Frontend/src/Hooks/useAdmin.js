import { useState } from "react";
import adminApi from "../Apis/Admin/admin.api";

export default function useAdmin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (apiCall) => {
    setLoading(true);
    setError(null);
    try {
      const response = await apiCall();
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const methods = {
    login: (payload) => execute(() => adminApi.login({ payload })),
    getConsultations: () => execute(() => adminApi.getConsultations()),
  };

  return { data, loading, error, ...methods };
}
