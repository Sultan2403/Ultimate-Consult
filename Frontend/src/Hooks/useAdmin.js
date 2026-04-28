import { useCallback, useState } from "react";
import adminApi from "../Apis/Admin/admin.api";

export default function useAdmin() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = useCallback(async (apiCall) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiCall();
      setData(response);
      return response;
    } catch (err) {
      const apiErrorMessage =
        err?.response?.data?.message ||
        err?.response?.data?.validation?.body?.message ||
        "An unexpected error occured";

      setError(apiErrorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(
    (payload) => execute(() => adminApi.login(payload)),
    [execute],
  );

  const getConsultations = useCallback(
    () => execute(() => adminApi.getConsultations()),
    [execute],
  );

  const updateConsultationStatus = useCallback(
    ({ consultationId, consultationStatus }) =>
      execute(() =>
        adminApi.updateConsultationStatus({ consultationId, consultationStatus }),
      ),
    [execute],
  );

  return {
    data,
    loading,
    error,
    login,
    getConsultations,
    updateConsultationStatus,
  };
}
