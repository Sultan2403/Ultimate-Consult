import api from "../Base/api.config";

const adminApi = {
  getConsultations: () => api.get("/customers"),
  getOneConsultation: (consultationId) => api.get(`/customers/${consultationId}`),
  login: (payload) => api.post("/auth/login", payload),
  updateConsultationStatus: ({ consultationId, consultationStatus }) =>
    api.patch(`/customers/${consultationId}`, { consultationStatus }),
};

export default adminApi;
