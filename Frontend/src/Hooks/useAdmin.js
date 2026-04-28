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

  const methods = {
    login: (payload) => execute(() => adminApi.login(payload)),

    getConsultations: () => execute(() => adminApi.getConsultations()),

    getOneConsultation: (consultationId) =>
      execute(() => adminApi.getOneConsultation(consultationId)),

    updateConsultationStatus: ({ consultationId, consultationStatus }) =>
      execute(() =>
        adminApi.updateConsultationStatus({
          consultationId,
          consultationStatus,
        }),
      ),
  };

  return {
    data,
    loading,
    error,
    ...methods,
  };
}
